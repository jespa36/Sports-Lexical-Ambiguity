import { CorpusEntry } from '@/lib/corpus'

export function TermList({
  entries,
  selectedId,
  onSelect,
}: {
  entries: CorpusEntry[]
  selectedId: string | null
  onSelect: (id: string | null) => void
}) {
  return (
    <div className="h-full overflow-y-auto">
      {entries.length > 0 ? (
        <ul className="grid gap-4 p-4 sm:grid-cols-2 md:p-6 xl:grid-cols-3">
          {entries.map((entry) => {
            const isSelected = entry.id === selectedId
            return (
              <li key={entry.id}>
                <article
                  onClick={() => onSelect(entry.id)}
                  aria-current={isSelected ? 'true' : undefined}
                  className="flex flex-col gap-2 border p-4 cursor-pointer"
                >
                  <h3>{entry.targetExpression}</h3>
                  <p>Literal: {entry.literalMeaning}</p>
                  <p>Community: {entry.sociolectMeaning}</p>
                  <div className="flex flex-wrap gap-2">
                    <span>{entry.community}</span>
                    <span>{entry.category}</span>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>No entries match the selected filters.</p>
        </div>
      )}
    </div>
  )
}