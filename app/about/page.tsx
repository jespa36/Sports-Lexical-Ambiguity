import type { Metadata } from 'next'
import { RationaleEssay } from '@/components/about/rationale-essay'
import { PageHeader } from '@/components/layout/page-header'

// <--[Page title]-->
export const metadata: Metadata = {}

export default function AboutPage() {
  return (
    <>
      {/* <--[Page header: eyebrow, title, intro]--> */}
      <PageHeader />
      <RationaleEssay />
    </>
  )
}