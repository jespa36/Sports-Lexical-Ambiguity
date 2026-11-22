import type { SportsCommunity } from '@/lib/corpus'

/* One place for community colors so cards, legend, and panel stay in sync. */
export const COMMUNITY_STYLES: Record<
  SportsCommunity,
  { label: string; bar: string; dot: string; chip: string }
> = {
  'Soccer/Futbol': {
    label: 'Soccer',
    bar: 'border-l-emerald-600',
    dot: 'bg-emerald-600',
    chip: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  NBA: {
    label: 'NBA',
    bar: 'border-l-orange-600',
    dot: 'bg-orange-600',
    chip: 'bg-orange-50 text-orange-800 border-orange-200',
  },
  NFL: {
    label: 'NFL',
    bar: 'border-l-blue-700',
    dot: 'bg-blue-700',
    chip: 'bg-blue-50 text-blue-800 border-blue-200',
  },
}
