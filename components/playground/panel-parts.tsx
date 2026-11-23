import type { ReactNode } from 'react'

/* Small shared pieces so the two comparison panels stay visually identical. */

export const LABEL =
  'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'

export function PlannedTag() {
  return (
    <span className="border border-slate-400 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600">
      Planned
    </span>
  )
}

export function Field({
  label,
  planned = false,
  children,
}: {
  label: string
  planned?: boolean
  children: ReactNode
}) {
  return (
    <div className="border-t border-slate-300 pt-3 first:border-t-0 first:pt-0">
      <dt className="flex items-center gap-2">
        <span className={LABEL}>{label}</span>
        {planned && <PlannedTag />}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-slate-900">{children}</dd>
    </div>
  )
}

export function PanelShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section aria-labelledby={id} className="flex flex-col border border-slate-300 bg-white">
      <header className="border-b border-slate-300 px-4 py-3">
        <p className={LABEL}>{eyebrow}</p>
        <h3 id={id} className="mt-1 text-base font-bold text-slate-900">
          {title}
        </h3>
      </header>
      <div className="p-4">{children}</div>
    </section>
  )
}
