import { CorpusEntry } from '@/lib/corpus'
import { COMMUNITY_STYLES } from './community-styles'

export function TermList({
  entries,
  selectedId,
  onSelect,
}: {
  entries: CorpusEntry[]
  selectedId: string | null
  onSelect: (id: string | null) => void
}) {
  if (entries.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <p className="text-sm text-slate-500">No entries match the selected filters.</p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto bg-slate-50">
      <ul className="grid gap-3 p-4 sm:grid-cols-2 md:p-6 xl:grid-cols-3">
        {entries.map((entry) => {
          const isSelected = entry.id === selectedId
          const style = COMMUNITY_STYLES[entry.community]
          return (
            <li key={entry.id}>
              {/* A real <button> so cards are keyboard-focusable and announced as selectable. */}
              <button
                type="button"
                onClick={() => onSelect(entry.id)}
                aria-pressed={isSelected}
                className={`flex h-full w-full flex-col gap-2 border border-l-4 bg-white p-4 text-left transition ${style.bar} ${
                  isSelected
                    ? 'border-[#0E1E5B] ring-1 ring-[#0E1E5B]'
                    : 'border-slate-300 hover:border-slate-400 hover:shadow-sm'
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className={`border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${style.chip}`}>
                    {style.label}
                  </span>
                  <span className="truncate text-[11px] text-slate-500">{entry.category}</span>
                </span>
                <span className="line-clamp-2 text-base font-bold leading-snug text-slate-900">
                  {entry.targetExpression}
                </span>
                {/* Short preview only; the full breakdown lives in the side panel. */}
                <span className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                  {entry.sociolectMeaning}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
