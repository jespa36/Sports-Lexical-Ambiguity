import { CorpusEntry } from '@/lib/corpus'

export function TermPanel({
  entry,
  onClear,
}: {
  entry: CorpusEntry | null
  onClear: () => void
}) {
  if (!entry) {
    return (
      <div className="flex h-full min-h-[240px] items-center justify-center p-6 text-center">
        <p className="font-mono text-xs leading-relaxed text-slate-500">
          Select an expression card on the left to inspect its literal vs. sociolect breakdown.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex items-start justify-between gap-3 border-b border-slate-300 pb-3">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            {entry.community} // {entry.id.toUpperCase()}
          </p>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            &ldquo;{entry.targetExpression}&rdquo;
          </h3>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="border border-slate-300 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
        >
          Clear
        </button>
      </div>

      <dl className="grid grid-cols-2 gap-3 pt-1">
        <div className="border border-slate-300 bg-white p-2.5">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Feature
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-900">
            {entry.category}
          </dd>
        </div>
        <div className="border border-slate-300 bg-white p-2.5">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Mechanism
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-900">
            {entry.pragmatics.primaryMechanism}
          </dd>
        </div>
        <div className="border border-slate-300 bg-white p-2.5">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            NLP Label
          </dt>
          <dd className="mt-0.5 font-mono text-xs font-bold text-slate-900">
            {entry.nlpComparison.standardLabel}
          </dd>
        </div>
        <div className="border-l-4 border-[#0E1E5B] bg-white p-2.5">
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0E1E5B]">
            Actual Intent
          </dt>
          <dd className="mt-0.5 font-mono text-xs font-bold text-[#0E1E5B]">
            {entry.nlpComparison.actualIntent}
          </dd>
        </div>
      </dl>

      <ul className="flex flex-col gap-2.5 text-xs leading-relaxed text-slate-700">
        <li className="border border-slate-300 bg-white p-3">
          <strong className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
            Literal / Dictionary Meaning
          </strong>
          <span className="mt-1 block">{entry.literalMeaning}</span>
        </li>
        <li className="border-l-4 border-[#0E1E5B] bg-white p-3">
          <strong className="block font-mono text-[10px] uppercase tracking-wider text-[#0E1E5B]">
            {entry.community} Sociolect Meaning
          </strong>
          <span className="mt-1 block">{entry.sociolectMeaning}</span>
        </li>
        <li className="border border-slate-300 bg-white p-3">
          <strong className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
            Pragmatic Analysis
          </strong>
          <span className="mt-1 block">{entry.pragmatics.analysis}</span>
        </li>
        <li className="border border-slate-300 bg-white p-3">
          <strong className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
            Why Standard NLP Fails
          </strong>
          <span className="mt-1 block">{entry.nlpComparison.whyNLPFails}</span>
        </li>
      </ul>

      <div className="flex flex-col gap-3">
        <article className="border border-slate-300 bg-white p-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0E1E5B]">
            Corpus Post
          </p>
          <p className="mt-1.5 whitespace-pre-line text-sm font-medium text-slate-900">
            &ldquo;{entry.tweetText}&rdquo;
          </p>
        </article>
        <article className="border border-slate-300 bg-white p-3 text-xs leading-relaxed text-slate-600">
          <p>{entry.context}</p>
          {entry.tweetURL && (
            <a
              href={entry.tweetURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-mono text-xs font-semibold text-[#0E1E5B] underline"
            >
              View original post ↗
            </a>
          )}
        </article>
      </div>
    </div>
  )
}