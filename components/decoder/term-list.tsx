import { CorpusEntry, SportsCommunity } from '@/lib/corpus'

const SWATCH_COLOR: Record<SportsCommunity, string> = {
  'Soccer/Futbol': 'bg-emerald-600',
  NBA: 'bg-amber-600',
  NFL: 'bg-[#0E1E5B]',
}

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
    <div className="h-full overflow-y-auto pb-24">
      {entries.length > 0 ? (
        <ul className="grid gap-4 p-4 sm:grid-cols-2 md:p-6 xl:grid-cols-3">
          {entries.map((entry) => {
            const isSelected = entry.id === selectedId
            return (
              <li key={entry.id}>
                <article
                  onClick={() => onSelect(entry.id)}
                  aria-current={isSelected ? 'true' : undefined}
                  className={`flex h-full cursor-pointer flex-col justify-between gap-3 border p-4 transition-colors ${
                    isSelected
                      ? 'border-l-4 border-[#0E1E5B] bg-white'
                      : 'border-slate-300 bg-white hover:border-[#0E1E5B]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#0E1E5B]">
                        <span
                          className={`size-2 shrink-0 ${SWATCH_COLOR[entry.community]}`}
                          aria-hidden="true"
                        />
                        {entry.community}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">
                        {entry.id.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900">
                      &ldquo;{entry.targetExpression}&rdquo;
                    </h3>

                    <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-800">
                        Literal:{' '}
                      </span>
                      {entry.literalMeaning}
                    </p>

                    <p className="line-clamp-2 text-xs leading-relaxed text-slate-700">
                      <span className="font-semibold text-[#0E1E5B]">
                        Sociolect:{' '}
                      </span>
                      {entry.sociolectMeaning}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 border-t border-slate-200 pt-2.5">
                    <span className="border border-slate-300 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-700">
                      {entry.category}
                    </span>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="flex h-full items-center justify-center p-6">
          <p className="font-mono text-xs text-slate-500">
            No entries match the selected filters.
          </p>
        </div>
      )}
    </div>
  )
}