export function TermList({
  selectedId,
  onSelect,
}: {
  selectedId: string | null
  onSelect: (id: string | null) => void
}) {
  void selectedId
  void onSelect

  return (
    <div className="h-full overflow-y-auto">
      {/* <--[Result grid: 1 col → 2 cols (sm) → 3 cols (xl)]--> */}
      <ul className="grid gap-4 p-4 sm:grid-cols-2 md:p-6 xl:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li key={i}>
            <article className="flex flex-col gap-2 p-4">
              {/* <--[Term]--> */}
              <h3 />
              {/* <--[Standard meaning]--> */}
              <p />
              {/* <--[Community meaning]--> */}
              <p />
              {/* <--[Tags row: community + shift type]--> */}
              <div className="flex flex-wrap gap-2" />
            </article>
          </li>
        ))}
      </ul>
      {/* <--[Empty state]--> */}
      <div className="flex h-full items-center justify-center" />
    </div>
  )
}
