import type { Metadata } from 'next'
import { AccuracyComparison } from '@/components/findings/accuracy-comparison'
import { CommunityBreakdown } from '@/components/findings/community-breakdown'
import { FailureCases } from '@/components/findings/failure-cases'
import { FindingsHeadline } from '@/components/findings/findings-headline'
import { PageHeader } from '@/components/layout/page-header'

// <--[Page title]-->
export const metadata: Metadata = {}

export default function FindingsPage() {
  return (
    <>
      {/* <--[Page header: eyebrow, title, intro]--> */}
      <PageHeader />
      <FindingsHeadline />
      <AccuracyComparison />
      <FailureCases />
      <CommunityBreakdown />
    </>
  )
}
