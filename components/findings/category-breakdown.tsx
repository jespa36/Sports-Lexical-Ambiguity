import { Section } from '@/components/layout/section'
import { computeFindings } from '@/lib/findings'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'
const TH = 'px-4 py-2 font-semibold text-slate-900'

/* Per-category counts and VADER error patterns, computed from the corpus. */
export function CategoryBreakdown() {
  const { categories } = computeFindings()

  return (
    <Section id="categories" spacing="sm">
      <p className={LABEL}>By linguistic category</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">
        What VADER returns for each category
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700">
        Each post is counted once, under its primary category. The last column counts posts with no
        word in VADER&apos;s lexicon, which VADER can only score as Neutral.
      </p>

      <div className="mt-6 overflow-x-auto border border-slate-300 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-300">
              <th scope="col" className={TH}>Category</th>
              <th scope="col" className={TH}>Entries</th>
              <th scope="col" className={TH}>VADER ≠ intent</th>
              <th scope="col" className={TH}>VADER read as (Pos / Neu / Neg)</th>
              <th scope="col" className={TH}>Fan intent (Pos / Neu / Banter)</th>
              <th scope="col" className={TH}>No lexicon words</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.category} className="border-b border-slate-300 last:border-b-0">
                <th scope="row" className="px-4 py-2 font-medium text-slate-900">{c.category}</th>
                <td className="px-4 py-2 text-slate-800">{c.total}</td>
                <td className="px-4 py-2 text-slate-800">
                  {c.total === 0 ? '—' : `${c.mismatches} of ${c.total}`}
                </td>
                <td className="px-4 py-2 font-mono text-slate-800">
                  {c.total === 0 ? '—' : `${c.vader.Positive} / ${c.vader.Neutral} / ${c.vader.Negative}`}
                </td>
                <td className="px-4 py-2 font-mono text-slate-800">
                  {c.total === 0
                    ? '—'
                    : `${c.intent.Positive} / ${c.intent.Neutral} / ${c.intent['Sarcastic/Banter']}`}
                </td>
                <td className="px-4 py-2 text-slate-800">{c.total === 0 ? '—' : c.noTriggers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
