import type { VaderTrigger } from '@/lib/vader'

/* Lexicon words VADER found in a post, with their base valence. Shared by Decoder and Playground. */
export function TriggerList({ triggers }: { triggers: VaderTrigger[] }) {
  if (triggers.length === 0) {
    return (
      <span className="block border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-600">
        <strong className="font-semibold text-slate-800">No lexicon matches found:</strong>{" "}
        None of the words in this post appear in VADER&apos;s general-English dictionary,
        so the baseline defaults to a neutral <span className="font-mono">0.000</span> score.
      </span>
    );
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
