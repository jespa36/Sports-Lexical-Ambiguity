import Link from 'next/link'
import { Section } from '@/components/layout/section'

export function CtaBand() {
  return (
    <Section spacing="sm">
      <div className="flex flex-col items-start justify-between gap-6 border border-[#0E1E5B] bg-[#0E1E5B] p-8 text-white md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Check Out the Sociolect Decoder
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100">
            Filter the corpus by league, linguistic category, or pragmatic
            mechanism to see where literal sentiment classifiers get tripped up.
          </p>
        </div>
        <Link
          href="/decoder/"
          className="inline-flex shrink-0 items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-[#0E1E5B] transition hover:bg-blue-50"
        >
          Open Decoder →
        </Link>
      </div>
    </Section>
  )
}