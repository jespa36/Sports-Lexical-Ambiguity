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
      <div className="flex flex-col gap-4 p-4 md:p-6">
        <div>
          <p>Select a card from the grid to inspect its sociolect breakdown.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p>{entry.community}</p>
          <h3>{entry.targetExpression}</h3>
        </div>
        <button type="button" onClick={onClear}>
          Clear
        </button>
      </div>

      <dl className="grid grid-cols-2 gap-3 pt-1">
        <div>
          <dt>Category</dt>
          <dd>{entry.category}</dd>
        </div>
        <div>
          <dt>Mechanism</dt>
          <dd>{entry.pragmatics.primaryMechanism}</dd>
        </div>
        <div>
          <dt>Standard NLP</dt>
          <dd>{entry.nlpComparison.standardLabel}</dd>
        </div>
        <div>
          <dt>Actual Intent</dt>
          <dd>{entry.nlpComparison.actualIntent}</dd>
        </div>
      </dl>

      <ul className="flex flex-col gap-2">
        <li>
          <strong>Literal Meaning:</strong> {entry.literalMeaning}
        </li>
        <li>
          <strong>Sociolect Meaning:</strong> {entry.sociolectMeaning}
        </li>
        <li>
          <strong>Pragmatic Analysis:</strong> {entry.pragmatics.analysis}
        </li>
        <li>
          <strong>Why NLP Fails:</strong> {entry.nlpComparison.whyNLPFails}
        </li>
      </ul>

      <div className="flex flex-col gap-3">
        <article className="border p-3">
          <p>{entry.tweetText}</p>
        </article>
        <article className="border p-3">
          <p>{entry.context}</p>
          {entry.tweetURL && (
            <a href={entry.tweetURL} target="_blank" rel="noopener noreferrer">
              View source post
            </a>
          )}
        </article>
      </div>
    </div>
  )
}