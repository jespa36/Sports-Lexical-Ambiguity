import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/page-header'
import { AnnotationSchema } from '@/components/method/annotation-schema'
import { CorpusSampling } from '@/components/method/corpus-sampling'
import { VaderBaseline } from '@/components/method/vader-baseline'

export const metadata: Metadata = {
  title: 'Methodology & Schema | Sports Lexical Ambiguity',
}

export default function MethodPage() {
  return (
    <>
      <PageHeader
        eyebrow={
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            Methodology &amp; Schema
          </span>
        }
        title={
          <span className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How the corpus is built and scored
          </span>
        }
      >
        <p className="text-base leading-relaxed text-slate-700">
          How posts were selected, how each one is annotated, and how the VADER baseline is
          produced.
        </p>
      </PageHeader>
      <CorpusSampling />
      <AnnotationSchema />
      <VaderBaseline />
    </>
  )
}
