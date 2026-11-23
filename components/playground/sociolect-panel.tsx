import { Field, PanelShell } from './panel-parts'
import type { CommunityLens, PlaygroundResult } from './types'

/* Right side: how the post reads inside its fan community. Corpus posts only for now. */
export function SociolectPanel({
  result,
  lens,
}: {
  result: PlaygroundResult
  lens: CommunityLens
}) {
  return (
    <PanelShell id="sociolect-heading" eyebrow="Sociolect" title="Community reading">
      {result.status === 'idle' && (
        <p className="text-sm text-slate-600">
          For annotated corpus posts, this side shows the community, the pragmatic mechanism, what
          fans mean, and why VADER misreads it.
        </p>
      )}

      {result.status === 'matched' && (
        <dl className="flex flex-col gap-3">
          <Field label="Community">{result.entry.community}</Field>
          <Field label="Actual intent">{result.entry.nlpComparison.actualIntent}</Field>
          <Field label="Category">{result.entry.category}</Field>
          <Field label="Pragmatic mechanism">
            {result.entry.pragmatics.primaryMechanism}
            {result.entry.pragmatics.secondaryMechanisms &&
              result.entry.pragmatics.secondaryMechanisms.length > 0 &&
              ` (also: ${result.entry.pragmatics.secondaryMechanisms.join(', ')})`}
          </Field>
          <Field label="Meaning in the community">{result.entry.sociolectMeaning}</Field>
          <Field label="Why VADER misreads it">{result.entry.nlpComparison.whyNLPFails}</Field>
          <div className="border-t border-slate-300 pt-3">
            <details>
              <summary className="cursor-pointer text-sm font-medium text-[#0E1E5B]">
                Full pragmatic analysis
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                {result.entry.pragmatics.analysis}
              </p>
            </details>
          </div>
        </dl>
      )}

      {result.status === 'unmatched' && (
        <dl className="flex flex-col gap-3">
          <Field label="Community lens">
            {lens === 'All' ? 'None selected (all three communities)' : lens}
          </Field>
          <Field label="Community reading" planned>
            This post is not in the annotated corpus. Automated community reading is a planned
            extension. For now, compare the VADER score on the left with your own read as a fan.
          </Field>
          <Field label="Pragmatic mechanism" planned>
            Automated detection of the pragmatic mechanism (for example banter, implicature, or
            in-group signaling) is planned. It is not part of the current tool.
          </Field>
        </dl>
      )}
    </PanelShell>
  )
}
