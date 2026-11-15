import { AboutSection } from '@/components/home/about-section'
import { CtaBand } from '@/components/home/cta-band'
import { HomeHero } from '@/components/home/home-hero'
import { MethodBrief } from '@/components/home/method-brief'
import { ToolPreview } from '@/components/home/tool-preview'

export default function HomePage() {
  return (
    <>
      {/* <--[Hero]--> */}
      <HomeHero />
      {/* <--[About + card grid]--> */}
      <AboutSection />
      {/* <--[How it works: 3 steps]--> */}
      <MethodBrief />
      {/* <--[Tool preview: text | figure]--> */}
      <ToolPreview />
      {/* <--[Call-to-action band]--> */}
      <CtaBand />
    </>
  )
}
