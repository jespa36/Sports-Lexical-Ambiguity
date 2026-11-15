export function CommunityLegend() {
  return (
    <div className="p-3">
      {/* <--[Legend title]--> */}
      <p />
      <ul className="flex flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex items-center gap-2">
            {/* <--[Swatch]--> */}
            <span className="size-3 shrink-0" aria-hidden="true" />
            {/* <--[Legend label]--> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
