import type { SportsCommunity } from '@/lib/corpus'
import { COMMUNITY_STYLES } from './community-styles'

const ORDER: SportsCommunity[] = ['Soccer/Futbol', 'NBA', 'NFL']

/* Inline legend (no longer floats over the card grid). */
export function CommunityLegend() {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {ORDER.map((c) => (
        <li key={c} className="flex items-center gap-1.5 text-xs text-slate-600">
          <span className={`size-2.5 shrink-0 ${COMMUNITY_STYLES[c].dot}`} aria-hidden="true" />
          {COMMUNITY_STYLES[c].label}
        </li>
      ))}
    </ul>
  )
}
