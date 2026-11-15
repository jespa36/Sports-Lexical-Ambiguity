import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/page-header'
import { AnnotationGuide } from '@/components/method/annotation-guide'
import { ConceptsFramework } from '@/components/method/concepts-framework'
import { MethodFramework } from '@/components/method/method-framework'

// <--[Page title]-->
export const metadata: Metadata = {}

export default function MethodPage() {
  return (
    <>
      {/* <--[Page header: eyebrow, title, intro]--> */}
      <PageHeader />
      <MethodFramework />
      <AnnotationGuide />
      <ConceptsFramework />
    </>
  )
}
