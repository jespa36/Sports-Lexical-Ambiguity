import type { Metadata } from 'next'
import { DecoderExplorer } from '@/components/decoder/decoder-explorer'
import { PageHeader } from '@/components/layout/page-header'

export const metadata: Metadata = {
  title: 'Sociolect Decoder | Sports Lexical Ambiguity',
}

/* No <main> here: the root layout already provides one. */
export default function DecoderPage() {
  return (
    <>
      <PageHeader
        eyebrow={
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            Sociolect Decoder
          </span>
        }
        title={
          <span className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What fans say vs. what they mean
          </span>
        }
      >
        <p className="text-base leading-relaxed text-slate-700">
          Browse the annotated corpus by community or linguistic category. Pick a card to see the
          literal reading, the in-group meaning, and why a baseline sentiment model misses it.
        </p>
      </PageHeader>
      <DecoderExplorer />
    </>
  )
}
