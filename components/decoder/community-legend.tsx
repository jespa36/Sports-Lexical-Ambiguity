const COMMUNITIES = [
  { label: 'Soccer/Futbol', className: 'bg-current' },
  { label: 'NBA', className: 'bg-current' },
  { label: 'NFL', className: 'bg-current' },
]

export function CommunityLegend() {
  return (
    <div className="border p-3">
      <p>Communities</p>
      <ul className="flex flex-col gap-1.5">
        {COMMUNITIES.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className={`size-3 shrink-0 ${item.className}`} aria-hidden="true" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}