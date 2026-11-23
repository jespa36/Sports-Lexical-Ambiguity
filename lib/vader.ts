import { SentimentIntensityAnalyzer } from 'vader-sentiment'
import { lexicon } from 'vader-sentiment/src/vader_lexicon.js'

/*
 * Client-side VADER (rule-based baseline).
 * Scores come from the vader-sentiment package, a JavaScript port of VADER
 * (Hutto & Gilbert, 2014). Runs in the browser, so it works with the static export.
 */

export type VaderLabel = 'Positive' | 'Neutral' | 'Negative'

export interface VaderTrigger {
  /** The word as it appears in the post, lowercased. */
  word: string
  /** Base valence from the VADER lexicon (about -4 to +4). */
  valence: number
}

export interface VaderResult {
  /** Normalized compound score from -1 (most negative) to +1 (most positive). */
  compound: number
  label: VaderLabel
  pos: number
  neu: number
  neg: number
  /** Words in the post that exist in the VADER lexicon. Empty means VADER saw no sentiment words. */
  triggers: VaderTrigger[]
}

/* Standard VADER thresholds: >= 0.05 positive, <= -0.05 negative, otherwise neutral. */
export const VADER_THRESHOLD = 0.05

export function vaderLabel(compound: number): VaderLabel {
  if (compound >= VADER_THRESHOLD) return 'Positive'
  if (compound <= -VADER_THRESHOLD) return 'Negative'
  return 'Neutral'
}

const EDGE_PUNCTUATION = /^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu

/*
 * Finds lexicon words in the post. These are base lexicon valences. VADER's final
 * score also applies negation, booster words, capitalization, and punctuation rules,
 * so a word's valence here is not its exact contribution to the compound score.
 */
function findTriggers(text: string): VaderTrigger[] {
  const seen = new Set<string>()
  const found: VaderTrigger[] = []

  for (const raw of text.toLowerCase().split(/\s+/)) {
    if (!raw) continue
    // Try the raw token first (the lexicon includes emoticons), then with edge punctuation removed.
    const candidates = [raw, raw.replace(EDGE_PUNCTUATION, '')]
    for (const word of candidates) {
      if (word && Object.prototype.hasOwnProperty.call(lexicon, word)) {
        if (!seen.has(word)) {
          seen.add(word)
          found.push({ word, valence: lexicon[word] })
        }
        break
      }
    }
  }
  return found
}

export function scoreVader(text: string): VaderResult {
  const scores = SentimentIntensityAnalyzer.polarity_scores(text)
  return {
    compound: scores.compound,
    label: vaderLabel(scores.compound),
    pos: scores.pos,
    neu: scores.neu,
    neg: scores.neg,
    triggers: findTriggers(text),
  }
}

/* "+0.340", "-0.951", "0.000" */
export function formatCompound(compound: number): string {
  return (compound > 0 ? '+' : '') + compound.toFixed(3)
}
