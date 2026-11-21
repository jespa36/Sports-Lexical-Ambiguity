import Link from 'next/link'
import { Section } from '@/components/layout/section'

export function MethodBrief() {
  return (
    <Section spacing="md">
      {/* <--[Header row: heading block left, link right]--> */}
      <div className="flex flex-col justify-between gap-6 border-t border-slate-300 pt-12 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            {/* <--[Eyebrow]--> */}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {/* <--[H2]--> */}
          </h2>
        </div>
        {/* <--[Link to full method page]--> */}
        <Link
          href="/method/"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#0E1E5B]"
        >
          {/* <--[Method link label]--> */}
        </Link>
      </div>

      {/* <--[Numbered steps × 3]--> */}
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li
            key={i}
            className="flex flex-col gap-3 border border-slate-300 bg-white p-6"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#0E1E5B]">
              {/* <--[Step number]--> */}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {/* <--[Step title]--> */}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {/* <--[Step text]--> */}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}