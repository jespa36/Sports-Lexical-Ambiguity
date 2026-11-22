import { CorpusEntry } from '@/lib/corpus'
import { COMMUNITY_STYLES } from './community-styles'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className={LABEL}>{title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{children}</p>
    </section>
  )
}

export function TermPanel({
  entry,
  onClear,
}: {
  entry: CorpusEntry | null
  onClear: () => void
}) {
  if (!entry) {
    return (
      <div className="p-6">
        <p className="text-sm text-slate-500">
          Select a card to inspect its sociolect breakdown.
        </p>
      </div>
    )
  }

  const style = COMMUNITY_STYLES[entry.community]

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${style.chip}`}>
            {style.label}
          </span>
          <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">
            {entry.targetExpression}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
        >
          Clear
        </button>
      </div>

      {/* The core contrast of the project: what a baseline model says vs. what fans mean. */}
      <div className="grid grid-cols-2 border border-slate-300">
        <div className="border-r border-slate-300 p-3">
          <p className={LABEL}>Standard NLP</p>
          <p className="mt-1 text-sm font-bold text-slate-900">{entry.nlpComparison.standardLabel}</p>
        </div>
        <div className="bg-[#0E1E5B] p-3 text-white">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-200">
            Actual intent
          </p>
          <p className="mt-1 text-sm font-bold">{entry.nlpComparison.actualIntent}</p>
        </div>
      </div>

      <figure className="border-l-4 border-slate-300 bg-slate-50 p-3">
        <blockquote className="whitespace-pre-line text-sm leading-relaxed text-slate-800">
          {entry.tweetText}
        </blockquote>
        {entry.tweetURL && (
          <figcaption className="mt-2">
            <a
              href={entry.tweetURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#0E1E5B] underline underline-offset-2"
            >
              View source post ↗
            </a>
          </figcaption>
        )}
      </figure>

      <Block title="Literal meaning">{entry.literalMeaning}</Block>
      <Block title="Sociolect meaning">{entry.sociolectMeaning}</Block>

      <dl className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
        <div>
          <dt className={LABEL}>Category</dt>
          <dd className="mt-1 text-sm text-slate-800">{entry.category}</dd>
        </div>
        <div>
          <dt className={LABEL}>Mechanism</dt>
          <dd className="mt-1 text-sm text-slate-800">{entry.pragmatics.primaryMechanism}</dd>
        </div>
      </dl>

      <Block title="Pragmatic analysis">{entry.pragmatics.analysis}</Block>
      <Block title="Why NLP fails">{entry.nlpComparison.whyNLPFails}</Block>
      <Block title="Context">{entry.context}</Block>
    </div>
  )
}
