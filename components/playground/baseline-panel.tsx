import { TriggerList } from '@/components/vader/trigger-list'
import { formatCompound, scoreVader, VADER_THRESHOLD } from '@/lib/vader'
import { Field, PanelShell } from './panel-parts'
import type { PlaygroundResult } from './types'

/* Left side: live VADER (rule-based baseline) output for any post. */
export function BaselinePanel({ result }: { result: PlaygroundResult }) {
  const vader =
    result.status === 'matched'
      ? result.entry.vaderBaseline
      : result.status === 'unmatched'
        ? scoreVader(result.text)
        : null

  return (
    <PanelShell id="baseline-heading" eyebrow="Baseline" title="VADER (rule-based baseline)">
      {vader === null ? (
        <p className="text-sm text-slate-600">
          Pick a preset or type any sports post, then press Compare to see how VADER scores it.
        </p>
      ) : (
        <dl className="flex flex-col gap-3">
          <Field label="VADER label">{vader.label}</Field>
          <Field label="Compound score">
            <span className="font-mono">{formatCompound(vader.compound)}</span>
            <span className="mt-1 block text-xs text-slate-600">
              Scale from -1 to +1. Positive at +{VADER_THRESHOLD} or above, negative at -
              {VADER_THRESHOLD} or below, neutral in between.
            </span>
          </Field>
          <Field label="Trigger words">
            <TriggerList triggers={vader.triggers} />
          </Field>
        </dl>
      )}
    </PanelShell>
  )
}
