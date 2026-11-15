export function ModelResultCard() {
  return (
    <article className="flex flex-col gap-3 p-5">
      {/* <--[Header row: model name + badge]--> */}
      <div className="flex items-center justify-between gap-3">
        <h3 />
        <span />
      </div>
      {/* <--[Score value]--> */}
      <p />
      {/* <--[Meter track + fill]--> */}
      <div className="h-2.5 overflow-hidden" aria-hidden="true">
        <div className="h-full" />
      </div>
      {/* <--[Verdict / note]--> */}
      <p />
    </article>
  )
}
