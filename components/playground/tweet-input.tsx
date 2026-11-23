import type { SportsCommunity } from '@/lib/corpus'
import { LABEL } from './panel-parts'
import type { CommunityLens } from './types'

const LENSES: { value: CommunityLens; label: string }[] = [
  { value: 'All', label: 'All communities' },
  { value: 'Soccer/Futbol', label: 'Soccer / Fútbol' },
  { value: 'NBA', label: 'NBA' },
  { value: 'NFL', label: 'NFL' },
]

const FIELD =
  'border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#0E1E5B] focus:outline-none focus:ring-1 focus:ring-[#0E1E5B]'

export function TweetInput({
  value,
  onChange,
  lens,
  onLensChange,
  onSubmit,
  onClear,
}: {
  value: string
  onChange: (next: string) => void
  lens: CommunityLens
  onLensChange: (next: CommunityLens) => void
  onSubmit: () => void
  onClear: () => void
}) {
  return (
    <form
      className="flex flex-col gap-3 border border-slate-300 bg-white p-4"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <label htmlFor="playground-post" className={LABEL}>
        Sports post
      </label>
      <textarea
        id="playground-post"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type or paste a post, or choose a preset from the list."
        className={`${FIELD} min-h-32 w-full`}
      />

      <div className="flex flex-wrap items-end gap-3">
        <label className="block">
          <span className={`${LABEL} mb-1.5 block`}>Community lens</span>
          <select
            className={FIELD}
            value={lens}
            onChange={(e) => onLensChange(e.target.value as 'All' | SportsCommunity)}
          >
            {LENSES.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </label>

        <div className="flex gap-2 sm:ml-auto">
          <button
            type="button"
            onClick={onClear}
            className="border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={value.trim().length === 0}
            className="border border-[#0E1E5B] bg-[#0E1E5B] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Compare
          </button>
        </div>
      </div>
    </form>
  )
}
