import { SPORTSTWT_CORPUS } from '@/lib/corpus'
import type { CorpusEntry, SportsCommunity } from '@/lib/corpus'
import { LABEL } from './panel-parts'

const ORDER: SportsCommunity[] = ['Soccer/Futbol', 'NBA', 'NFL']

/* One-click presets, one per corpus entry, grouped by community. */
export function ExampleList({
  onPick,
  activeId,
}: {
  onPick: (entry: CorpusEntry) => void
  activeId: string | null
}) {
  return (
    <div className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-4 py-3">
        <h2 className="text-base font-bold text-slate-900">Preset posts</h2>
        <p className="mt-1 text-xs text-slate-600">
          {SPORTSTWT_CORPUS.length} annotated posts from the corpus.
        </p>
      </div>

      <div className="max-h-[70vh] overflow-y-auto">
        {ORDER.map((community) => {
          const entries = SPORTSTWT_CORPUS.filter((e) => e.community === community)
          if (entries.length === 0) return null
          return (
            <section key={community} aria-label={community}>
              <h3 className={`${LABEL} sticky top-0 border-b border-slate-300 bg-white px-4 py-2`}>
                {community} ({entries.length})
              </h3>
              <ul>
                {entries.map((entry) => {
                  const active = entry.id === activeId
                  return (
                    <li key={entry.id} className="border-b border-slate-300 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => onPick(entry)}
                        aria-pressed={active}
                        className={`flex w-full flex-col gap-1 px-4 py-3 text-left hover:bg-slate-100 ${
                          active ? 'border-l-4 border-l-[#0E1E5B]' : 'border-l-4 border-l-transparent'
                        }`}
                      >
                        <span className="line-clamp-2 text-sm text-slate-900">
                          {entry.tweetText}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                          {entry.targetExpression}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
