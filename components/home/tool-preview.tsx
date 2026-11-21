import { Section } from '@/components/layout/section'
import { SPORTSTWT_CORPUS } from '@/lib/corpus'

const MECHANISMS = [
  'Banter & Mock Insults: Trash talk that actually shows respect or camaraderie inside a fanbase.',
  'Conversational Implicature: What readers pick up from game context beyond the literal words.',
  'Presupposition & In-Group Signaling: Shared match history or player lore that insiders already know.',
  'NLP Failure Breakdown: Pointing out the exact word or phrase that tripped up the baseline classifier.',
]

export function ToolPreview() {
  const firstPopulated = SPORTSTWT_CORPUS.find(
    (item) => item.tweetText.trim().length > 0
  )

  const sample = firstPopulated ?? {
    community: 'NBA',
    tweetText: 'That step-back three was actually disgusting.',
    targetExpression: 'disgusting',
    nlpComparison: {
      standardLabel: 'Negative',
      actualIntent: 'Positive',
      whyNLPFails:
        'A basic sentiment dictionary reads "disgusting" literally instead of catching the NBA fan hype.',
    },
  }

  return (
    <Section id="preview" spacing="lg">
      <div className="grid items-start gap-12 border-t border-slate-300 pt-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            Side-by-Side Comparison
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Surface NLP Label vs. What Fans Actually Mean
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            The site is built around two main tools—the Decoder and the
            Playground—where you can test out tweets and see firsthand how
            standard NLP models misread the slang and miss the real context.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            With this being said, every post in <code>lib/corpus.ts</code>{' '}
            connects directly to this preview and updates as I add more
            entries.
          </p>

          <h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">
            What Each Entry Tracks
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {MECHANISMS.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-slate-700"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 bg-[#0E1E5B]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="border border-slate-300 bg-slate-50">
          <div className="p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-[#0E1E5B]">
              Corpus Entry // {sample.community}
            </p>
            <div className="mt-4 border border-slate-300 bg-white p-6">
              <p className="text-base font-medium text-slate-900">
                &ldquo;{sample.tweetText}&rdquo;
              </p>

              <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
                <div className="flex size-24 shrink-0 flex-col items-center justify-center border border-slate-300 bg-slate-100 text-center">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    NLP Label
                  </span>
                  <span className="mt-1 font-mono text-sm font-bold text-slate-900">
                    {sample.nlpComparison.standardLabel}
                  </span>
                </div>
                <div className="text-sm text-slate-700">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0E1E5B]">
                    Actual Intent: {sample.nlpComparison.actualIntent}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {sample.nlpComparison.whyNLPFails}
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 font-mono text-xs text-slate-500">
              Pulled live from <code>SPORTSTWT_CORPUS</code> in{' '}
              <code>lib/corpus.ts</code>.
            </figcaption>
          </div>
        </figure>
      </div>
    </Section>
  )
}