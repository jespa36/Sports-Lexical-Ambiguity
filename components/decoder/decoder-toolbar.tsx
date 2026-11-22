import { SportsCommunity, FeatureCategory } from '@/lib/corpus'

const COMMUNITIES: ('All' | SportsCommunity)[] = [
  'All',
  'Soccer/Futbol',
  'NBA',
  'NFL',
]

const CATEGORIES: ('All' | FeatureCategory)[] = [
  'All',
  'Lexical Ambiguity (Polysemy)',
  'Valence Inversion',
  'Multi-Word Expression',
  'Morphological Blend',
]

export function DecoderToolbar({
  selectedCommunity,
  onCommunityChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: {
  selectedCommunity: 'All' | SportsCommunity
  onCommunityChange: (value: 'All' | SportsCommunity) => void
  selectedCategory: 'All' | FeatureCategory
  onCategoryChange: (value: 'All' | FeatureCategory) => void
  searchQuery: string
  onSearchChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-slate-300 bg-white px-4 py-3 md:px-6">
      <div
        role="radiogroup"
        aria-label="Community filter"
        className="grid w-full grid-cols-4 border border-slate-300 sm:flex sm:w-auto"
      >
        {COMMUNITIES.map((comm) => {
          const active = selectedCommunity === comm
          return (
            <button
              key={comm}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onCommunityChange(comm)}
              className={`border-r border-slate-300 px-2 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider last:border-r-0 sm:px-3 ${
                active
                  ? 'bg-[#0E1E5B] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {comm === 'Soccer/Futbol' ? 'Soccer' : comm}
            </button>
          )
        })}
      </div>

      <label className="flex items-center gap-2 font-mono text-xs text-slate-700">
        <span className="font-semibold uppercase tracking-wider text-slate-500">
          Feature:
        </span>
        <select
          value={selectedCategory}
          onChange={(e) =>
            onCategoryChange(e.target.value as 'All' | FeatureCategory)
          }
          className="border border-slate-300 bg-white px-2.5 py-1.5 font-sans text-xs text-slate-900"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label className="flex w-full items-center gap-2 sm:ml-auto sm:w-auto">
        <span className="sr-only">Search terms or posts</span>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search slang or tweets..."
          className="w-full border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 sm:w-56"
        />
      </label>
    </div>
  )
}