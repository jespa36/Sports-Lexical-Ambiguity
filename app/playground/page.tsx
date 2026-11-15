import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/page-header'
import { PlaygroundWorkspace } from '@/components/playground/playground-workspace'

// <--[Page title]-->
export const metadata: Metadata = {}

export default function PlaygroundPage() {
  return (
    <>
      {/* <--[Page header: eyebrow, title, intro]--> */}
      <PageHeader />
      <PlaygroundWorkspace />
    </>
  )
}
