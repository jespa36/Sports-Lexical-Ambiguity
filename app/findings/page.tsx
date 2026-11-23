import type { Metadata } from 'next'
import { CategoryBreakdown } from '@/components/findings/category-breakdown'
import { FindingsSummary } from '@/components/findings/findings-summary'
import { Takeaways } from '@/components/findings/takeaways'
import { PageHeader } from '@/components/layout/page-header'

export const metadata: Metadata = {
  title: 'Corpus Findings | Sports Lexical Ambiguity',
}

export default function FindingsPage() {
  return (
    <>
      <PageHeader
        eyebrow={
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            Corpus Findings
          </span>
        }
        title={
          <span className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Where VADER and fans disagree
          </span>
        }
      >
        <p className="text-base leading-relaxed text-slate-700">
          A summary of how VADER&apos;s baseline reading compares with the annotated fan intent
          across the corpus. All figures are computed from the entries currently in the corpus.
        </p>
      </PageHeader>
      <FindingsSummary />
      <CategoryBreakdown />
      <Takeaways />
    </>
  )
}
