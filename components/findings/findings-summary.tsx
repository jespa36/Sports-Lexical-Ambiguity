import { Section } from '@/components/layout/section'
import { computeFindings } from '@/lib/findings'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'

function Metric({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div className="bg-white p-5">
      <dt className={LABEL}>{label}</dt>
      <dd className="mt-2 text-3xl font-bold text-slate-900">{value}</dd>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">{note}</p>
    </div>
  )
}

/* Headline numbers, all computed from SPORTSTWT_CORPUS. */
export function FindingsSummary() {
  const f = computeFindings()

  return (
    <Section id="summary" spacing="sm">
      <dl className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-3">
        <Metric
          label="Annotated entries"
          value={`${f.total} of ${f.target}`}
          note="Posts annotated so far, out of the target for the finished corpus."
        />
        <Metric
          label="VADER label ≠ fan intent"
          value={`${f.mismatches} of ${f.total}`}
          note="Sarcastic/Banter posts always count, since no polarity label can match them."
        />
        <Metric
          label="Literal-intent posts only"
          value={`${f.literalMismatches} of ${f.literalTotal}`}
          note={`Posts where fans mean a plain Positive or Neutral reading. ${f.banterTotal} Sarcastic/Banter ${
            f.banterTotal === 1 ? 'post is' : 'posts are'
          } left out.`}
        />
      </dl>

      <div className="mt-6 overflow-x-auto border border-slate-300 bg-white">
        <table className="w-full text-left text-sm">
          <caption className="border-b border-slate-300 px-4 py-3 text-left">
            <span className={LABEL}>Community distribution</span>
          </caption>
          <thead>
            <tr className="border-b border-slate-300">
              <th scope="col" className="px-4 py-2 font-semibold text-slate-900">Community</th>
              <th scope="col" className="px-4 py-2 font-semibold text-slate-900">Entries</th>
              <th scope="col" className="px-4 py-2 font-semibold text-slate-900">VADER label ≠ fan intent</th>
            </tr>
          </thead>
          <tbody>
            {f.communities.map((c) => (
              <tr key={c.community} className="border-b border-slate-300 last:border-b-0">
                <th scope="row" className="px-4 py-2 font-medium text-slate-900">{c.community}</th>
                <td className="px-4 py-2 text-slate-800">{c.total}</td>
                <td className="px-4 py-2 text-slate-800">{c.mismatches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
