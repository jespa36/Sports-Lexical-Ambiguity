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
    <div className="flex flex-wrap items-center gap-3 px-4 py-3 md:px-6">
      <div role="radiogroup" aria-label="Community filter" className="grid w-full grid-cols-4 sm:flex sm:w-auto">
        {COMMUNITIES.map((comm) => (
          <button
            key={comm}
            type="button"
            role="radio"
            aria-checked={selectedCommunity === comm}
            onClick={() => onCommunityChange(comm)}
            className="px-1.5 py-1.5 sm:px-3"
          >
            {comm === 'Soccer/Futbol' ? 'Soccer' : comm}
          </button>
        ))}
      </div>

      <label className="flex items-center gap-2">
        <span>Category</span>
        <select
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

      <label className="flex items-center gap-2 sm:ml-auto">
        <span>Search</span>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter terms or posts..."
        />
      </label>
    </div>
  )
}