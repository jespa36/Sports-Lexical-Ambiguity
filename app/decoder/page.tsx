import type { Metadata } from 'next'
import { DecoderExplorer } from '@/components/decoder/decoder-explorer'
import { PageHeader } from '@/components/layout/page-header'

// <--[Page title]-->
export const metadata: Metadata = {}

export default function DecoderPage() {
  return (
    <>
      {/* <--[Page header: eyebrow, title, intro]--> */}
      <PageHeader />
      <DecoderExplorer />
    </>
  )
}
