import { SportsCommunity, FeatureCategory } from '@/lib/corpus'

const COMMUNITIES: ('All' | SportsCommunity)[] = ['All', 'Soccer/Futbol', 'NBA', 'NFL']

const CATEGORIES: ('All' | FeatureCategory)[] = [
  'All',
  'Lexical Ambiguity (Polysemy)',
  'Valence Inversion',
  'Multi-Word Expression',
  'Morphological Blend',
]

const FIELD =
  'border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-[#0E1E5B] focus:outline-none focus:ring-1 focus:ring-[#0E1E5B]'

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
    <div className="flex flex-wrap items-end gap-4 border-b border-slate-300 bg-slate-50 px-4 py-4 md:px-6">
      <div>
        <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Community
        </p>
        <div role="radiogroup" aria-label="Community filter" className="flex">
          {COMMUNITIES.map((comm) => {
            const active = selectedCommunity === comm
            return (
              <button
                key={comm}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => onCommunityChange(comm)}
                className={`-ml-px border px-3 py-1.5 text-sm font-medium transition first:ml-0 ${
                  active
                    ? 'z-10 border-[#0E1E5B] bg-[#0E1E5B] text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {comm === 'Soccer/Futbol' ? 'Soccer' : comm}
              </button>
            )
          })}
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Category
        </span>
        <select
          className={FIELD}
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as 'All' | FeatureCategory)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label className="block w-full sm:ml-auto sm:w-64">
        <span className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Search
        </span>
        <input
          type="search"
          className={`${FIELD} w-full`}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter terms or posts..."
        />
      </label>
    </div>
  )
}
