import type { CorpusEntry, SportsCommunity } from '@/lib/corpus'

/* What the comparison panels are currently showing. */
export type PlaygroundResult =
  | { status: 'idle' }
  | { status: 'matched'; entry: CorpusEntry }
  | { status: 'unmatched'; text: string }

/* "All" means no community lens chosen. */
export type CommunityLens = 'All' | SportsCommunity
