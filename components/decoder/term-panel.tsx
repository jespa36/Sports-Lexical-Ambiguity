export function TermPanel({
  selectedId,
  onClear,
}: {
  selectedId: string | null
  onClear: () => void
}) {
  void selectedId
  void onClear

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      {/* <--[Empty state: nothing selected]--> */}
      <div />

      {/* <--[Selected state: header row with clear button]--> */}
      <div className="flex items-start justify-between gap-3">
        <div>{/* <--[Term + eyebrow]--> */}</div>
        <button type="button" />
      </div>

      {/* <--[Facts: 2-col key/value grid]--> */}
      <dl className="grid grid-cols-2 gap-3 pt-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <dt />
            <dd />
          </div>
        ))}
      </dl>

      {/* <--[Usage list]--> */}
      <ul className="flex flex-col gap-2" />

      {/* <--[Example tweets stack]--> */}
      <div className="flex flex-col gap-3">
        {[0, 1].map((i) => (
          <article key={i} className="p-3" />
        ))}
      </div>
    </div>
  )
}
