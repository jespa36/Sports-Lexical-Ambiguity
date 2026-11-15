export function DecoderToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-3 px-4 py-3 md:px-6">
      {/* <--[Segmented filter: All + communities (4 equal columns on mobile, inline row from sm)]--> */}
      <div role="radiogroup" className="grid w-full grid-cols-4 sm:flex sm:w-auto">
        {[0, 1, 2, 3].map((i) => (
          <button key={i} type="button" role="radio" aria-checked={false} className="px-1.5 py-1.5 sm:px-3" />
        ))}
      </div>

      {/* <--[Secondary filter select]--> */}
      <label className="flex items-center gap-2">
        {/* <--[Select label]--> */}
        <select />
      </label>

      {/* <--[Search or toggle, pushed right from sm]--> */}
      <label className="flex items-center gap-2 sm:ml-auto">
        {/* <--[Input or checkbox]--> */}
        <input />
      </label>
    </div>
  )
}
