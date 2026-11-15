export function RewriteTrace() {
  return (
    <section className="flex flex-col gap-3 p-6" aria-live="polite">
      {/* <--[Section heading]--> */}
      <h3 />
      {/* <--[Trace steps: number column + content]--> */}
      <ol className="flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <li key={i} className="grid grid-cols-[2rem_1fr] items-start gap-3">
            <span />
            <div />
          </li>
        ))}
      </ol>
    </section>
  )
}
