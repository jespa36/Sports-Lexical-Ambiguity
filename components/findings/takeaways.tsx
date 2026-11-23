import { Section } from '@/components/layout/section'
import { SPORTSTWT_CORPUS } from '@/lib/corpus'
import { computeFindings } from '@/lib/findings'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'

/* Takeaways are generated from the current corpus, so they cannot drift from the numbers. */
export function Takeaways() {
  const f = computeFindings()
  const perCommunity = f.communities.map((c) => `${c.community} ${c.total}`).join(', ')

  return (
    <Section id="takeaways" spacing="sm">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className={LABEL}>Initial takeaways</p>
          <h2 className="mt-2 text-xl font-bold text-slate-900">Patterns in the current entries</h2>
          <ol className="mt-4 flex flex-col border border-slate-300 bg-white">
            {f.takeaways.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-300 px-4 py-3 text-sm leading-relaxed text-slate-800 last:border-b-0"
              >
                <span className="font-mono text-slate-500">{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="self-start border border-slate-300 bg-white p-4">
          <p className={LABEL}>Status</p>
          <h2 className="mt-2 text-base font-bold text-slate-900">In progress</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            {SPORTSTWT_CORPUS.length} of {f.target} entries are annotated so far ({perCommunity}).
            The corpus is expanding to {f.target} entries, and every number on this page
            recomputes as entries are added.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            At this size the figures describe these posts only. They are not estimates for sports
            social media in general.
          </p>
        </aside>
      </div>
    </Section>
  )
}
