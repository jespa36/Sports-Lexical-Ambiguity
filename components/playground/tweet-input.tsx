export function TweetInput({
  value,
  onChange,
}: {
  value: string
  onChange: (next: string) => void
}) {
  return (
    <form className="flex flex-col gap-4 p-6">
      {/* <--[Textarea]--> */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-32 w-full"
      />

      {/* <--[Controls row: selects left, submit pushed right from sm]--> */}
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2">
          {/* <--[Community select label]--> */}
          <select />
        </label>
        <button type="submit" className="sm:ml-auto" />
      </div>
    </form>
  )
}
