import type { VaderTrigger } from '@/lib/vader'

/* Lexicon words VADER found in a post, with their base valence. Shared by Decoder and Playground. */
export function TriggerList({ triggers }: { triggers: VaderTrigger[] }) {
  if (triggers.length === 0) {
    return (
      <span>
        None. No word in this post is in the VADER lexicon, so VADER has nothing to score.
      </span>
    )
  }

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {triggers.map((t) => (
          <li key={t.word} className="border border-slate-300 px-2 py-0.5 font-mono text-xs">
            {t.word}{' '}
            <span className="text-slate-600">
              {t.valence > 0 ? '+' : ''}
              {t.valence.toFixed(1)}
            </span>
          </li>
        ))}
      </ul>
      <span className="mt-2 block text-xs text-slate-600">
        Base lexicon valence, before VADER&apos;s negation, booster, capitalization and punctuation
        rules.
      </span>
    </>
  )
}
