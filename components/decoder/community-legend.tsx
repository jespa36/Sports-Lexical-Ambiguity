const COMMUNITIES = [
  { label: 'Soccer/Futbol', swatch: 'bg-emerald-600' },
  { label: 'NBA', swatch: 'bg-amber-600' },
  { label: 'NFL', swatch: 'bg-[#0E1E5B]' },
]

export function CommunityLegend() {
  return (
    <div className="border border-slate-300 bg-white p-3">
      <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
        Communities
      </p>
      <ul className="flex flex-col gap-1.5">
        {COMMUNITIES.map((item) => (
          <li key={item.label} className="flex items-center gap-2 font-mono text-xs text-slate-800">
            <span className={`size-3 shrink-0 ${item.swatch}`} aria-hidden="true" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}