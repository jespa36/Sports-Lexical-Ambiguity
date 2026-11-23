import { SPORTSTWT_CORPUS, TARGET_ENTRIES } from './corpus'
import type { CorpusEntry, FanIntent, FeatureCategory, SportsCommunity } from './corpus'
import type { VaderLabel } from './vader'

/*
 * Everything on the Findings page is computed from SPORTSTWT_CORPUS here,
 * so the numbers stay accurate as entries are added.
 */

export const CATEGORIES: FeatureCategory[] = [
  'Lexical Ambiguity (Polysemy)',
  'Valence Inversion',
  'Multi-Word Expression',
  'Morphological Blend',
]

export const COMMUNITIES: SportsCommunity[] = ['Soccer/Futbol', 'NBA', 'NFL']

const VADER_LABELS: VaderLabel[] = ['Positive', 'Neutral', 'Negative']
const INTENTS: FanIntent[] = ['Positive', 'Neutral', 'Sarcastic/Banter']

/*
 * A post "agrees" when VADER's label equals the annotated fan intent.
 * Sarcastic/Banter is not a polarity, so no VADER label can match it. Those posts
 * always count as mismatches, which is why literal-intent posts are also reported separately.
 */
export function vaderAgrees(entry: CorpusEntry): boolean {
  const intent = entry.nlpComparison.actualIntent
  return intent !== 'Sarcastic/Banter' && entry.vaderBaseline.label === intent
}

const count = (entries: CorpusEntry[], pred: (e: CorpusEntry) => boolean) =>
  entries.filter(pred).length

function tally<K extends string>(entries: CorpusEntry[], keys: K[], pick: (e: CorpusEntry) => K) {
  const out = {} as Record<K, number>
  for (const k of keys) out[k] = count(entries, (e) => pick(e) === k)
  return out
}

export interface CategoryRow {
  category: FeatureCategory
  total: number
  mismatches: number
  vader: Record<VaderLabel, number>
  intent: Record<FanIntent, number>
  noTriggers: number
}

export interface Findings {
  total: number
  target: number
  mismatches: number
  literalTotal: number
  literalMismatches: number
  banterTotal: number
  communities: { community: SportsCommunity; total: number; mismatches: number }[]
  categories: CategoryRow[]
  vaderLabels: Record<VaderLabel, number>
  noTriggers: number
  positiveReadAsNegative: number
  takeaways: string[]
}

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`
const pct = (n: number, d: number) => (d === 0 ? '0%' : `${Math.round((n / d) * 100)}%`)

export function computeFindings(entries: CorpusEntry[] = SPORTSTWT_CORPUS): Findings {
  const total = entries.length
  const mismatches = count(entries, (e) => !vaderAgrees(e))
  const literal = entries.filter((e) => e.nlpComparison.actualIntent !== 'Sarcastic/Banter')
  const literalMismatches = count(literal, (e) => !vaderAgrees(e))
  const banterTotal = total - literal.length
  const noTriggers = count(entries, (e) => e.vaderBaseline.triggers.length === 0)
  const positiveReadAsNegative = count(
    entries,
    (e) => e.nlpComparison.actualIntent === 'Positive' && e.vaderBaseline.label === 'Negative'
  )

  const communities = COMMUNITIES.map((community) => {
    const group = entries.filter((e) => e.community === community)
    return { community, total: group.length, mismatches: count(group, (e) => !vaderAgrees(e)) }
  })

  const categories: CategoryRow[] = CATEGORIES.map((category) => {
    const group = entries.filter((e) => e.category === category)
    return {
      category,
      total: group.length,
      mismatches: count(group, (e) => !vaderAgrees(e)),
      vader: tally(group, VADER_LABELS, (e) => e.vaderBaseline.label),
      intent: tally(group, INTENTS, (e) => e.nlpComparison.actualIntent),
      noTriggers: count(group, (e) => e.vaderBaseline.triggers.length === 0),
    }
  })

  const vaderLabels = tally(entries, VADER_LABELS, (e) => e.vaderBaseline.label)

  const takeaways: string[] = []
  if (total > 0) {
    takeaways.push(
      `VADER's label differs from the annotated fan intent on ${mismatches} of ${plural(total, 'post')} (${pct(mismatches, total)}). Sarcastic/Banter posts always count as a mismatch because no polarity label can match them.`
    )
    if (literal.length > 0) {
      takeaways.push(
        `Looking only at the ${plural(literal.length, 'post')} whose fan intent is a plain Positive or Neutral reading, VADER disagrees on ${literalMismatches}.`
      )
    }
    takeaways.push(
      `${plural(noTriggers, 'post')} (${pct(noTriggers, total)}) contain no word from VADER's lexicon, so VADER can only return Neutral for them.`
    )
    if (positiveReadAsNegative > 0) {
      takeaways.push(
        `VADER reads ${plural(positiveReadAsNegative, 'post')} as Negative where fans mean praise.`
      )
    }
    const withData = categories.filter((c) => c.total > 0)
    const rate = (c: CategoryRow) => c.mismatches / c.total
    const ranked = [...withData].sort((a, b) => rate(b) - rate(a) || b.total - a.total)
    const worst = ranked[0]
    const best = ranked[ranked.length - 1]
    if (worst && best && rate(worst) > rate(best)) {
      takeaways.push(
        `Highest mismatch rate so far: ${worst.category} (${worst.mismatches} of ${worst.total}). With so few posts per category, treat this as a pattern to test, not a result.`
      )
    } else if (withData.length > 1 && mismatches > 0) {
      takeaways.push(
        `Every category with entries shows the same mismatch rate so far, so the current posts do not separate the categories.`
      )
    }
  }

  return {
    total,
    target: TARGET_ENTRIES,
    mismatches,
    literalTotal: literal.length,
    literalMismatches,
    banterTotal,
    communities,
    categories,
    vaderLabels,
    noTriggers,
    positiveReadAsNegative,
    takeaways,
  }
}
