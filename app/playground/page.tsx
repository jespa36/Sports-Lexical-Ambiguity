import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/page-header'
import { PlaygroundWorkspace } from '@/components/playground/playground-workspace'

export const metadata: Metadata = {
  title: 'Sentiment Playground | Sports Lexical Ambiguity',
}

export default function PlaygroundPage() {
  return (
    <>
      <PageHeader
        eyebrow={
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            Sentiment Playground
          </span>
        }
        title={
          <span className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            VADER vs. what fans mean
          </span>
        }
      >
        <p className="text-base leading-relaxed text-slate-700">
          Type any sports post, or choose a preset, to see how VADER, a standard rule-based
          sentiment tool, scores it. Then compare that baseline reading with how fans actually
          interpret the post.
        </p>
      </PageHeader>
      <PlaygroundWorkspace />
    </>
  )
}
