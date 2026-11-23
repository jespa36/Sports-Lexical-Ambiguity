import { Section } from '@/components/layout/section'
import { SPORTSTWT_CORPUS } from '@/lib/corpus'
import type { FeatureCategory } from '@/lib/corpus'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'
const TH = 'px-4 py-2 font-semibold text-slate-900'

const FIELDS: { field: string; key: string; description: string }[] = [
  {
    field: 'community',
    key: 'community',
    description: 'Which fan community the post comes from: Soccer/Futbol, NBA, or NFL.',
  },
  {
    field: 'category',
    key: 'category',
    description:
      'The primary linguistic category of the expression (defined below). Secondary categories are stored separately.',
  },
  {
    field: 'mechanism',
    key: 'pragmatics.primaryMechanism',
    description:
      'The main pragmatic mechanism at work: Speech Act, Presupposition, Conversational Implicature, In-group signaling, or Banter / Face-threat.',
  },
  {
    field: 'literalMeaning',
    key: 'literalMeaning',
    description: 'What the post says if read word by word, in standard usage.',
  },
  {
    field: 'sociolectMeaning',
    key: 'sociolectMeaning',
    description: 'What the post means to members of the community.',
  },
  {
    field: 'pragmaticAnalysis',
    key: 'pragmatics.analysis',
    description: 'A short written analysis of how the mechanism produces the community meaning.',
  },
  {
    field: 'context',
    key: 'context',
    description: 'Background needed to read the post: who posted it, the thread, or the event.',
  },
  {
    field: 'vaderBaseline',
    key: 'vaderBaseline',
    description:
      'Computed, not typed in. VADER’s label, compound score, and trigger words for the post text.',
  },
]

const CATEGORIES: { name: FeatureCategory; definition: string }[] = [
  {
    name: 'Lexical Ambiguity (Polysemy)',
    definition:
      'One word form carries more than one related sense, and the community’s usage picks a sense that general-purpose dictionaries may not list or rank first.',
  },
  {
    name: 'Valence Inversion',
    definition:
      'A word or phrase that is conventionally negative is used to express the opposite evaluation, such as profanity or an insult used as praise.',
  },
  {
    name: 'Multi-Word Expression',
    definition:
      'A fixed phrase whose meaning is not the sum of its words, such as an idiom or a recurring community phrase. Scoring word by word cannot recover it.',
  },
  {
    name: 'Morphological Blend',
    definition:
      'A new word formed by merging parts of existing words or names, so the meaning depends on recognizing the source forms.',
  },
]

export function AnnotationSchema() {
  return (
    <Section id="schema" spacing="sm">
      <p className={LABEL}>Section 2</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">
        Annotation schema and linguistic categories
      </h2>

      <div className="mt-4 overflow-x-auto border border-slate-300 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="border-b border-slate-300 px-4 py-3 text-left">
            <span className={LABEL}>Corpus fields</span>
          </caption>
          <thead>
            <tr className="border-b border-slate-300">
              <th scope="col" className={TH}>Field</th>
              <th scope="col" className={TH}>Key in lib/corpus.ts</th>
              <th scope="col" className={TH}>What it records</th>
            </tr>
          </thead>
          <tbody>
            {FIELDS.map((f) => (
              <tr key={f.field} className="border-b border-slate-300 align-top last:border-b-0">
                <th scope="row" className="px-4 py-2 font-mono text-xs font-semibold text-slate-900">
                  {f.field}
                </th>
                <td className="px-4 py-2 font-mono text-xs text-slate-700">{f.key}</td>
                <td className="px-4 py-2 text-slate-800">{f.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        Each entry also stores the post text (<code>tweetText</code>), the analyzed expression (
        <code>targetExpression</code>), the source link (<code>tweetURL</code>), the fan intent (
        <code>nlpComparison.actualIntent</code>), and a note on why VADER misreads it (
        <code>nlpComparison.whyNLPFails</code>).
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {CATEGORIES.map((c) => {
          const example = SPORTSTWT_CORPUS.find((e) => e.category === c.name)
          return (
            <div key={c.name} className="border border-slate-300 bg-white p-4">
              <h3 className="text-base font-bold text-slate-900">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">{c.definition}</p>
              <p className="mt-3 font-mono text-xs text-slate-600">
                {example ? `Example in corpus: ${example.targetExpression}` : 'No corpus example yet.'}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
