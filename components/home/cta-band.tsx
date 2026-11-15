import { Section } from '@/components/layout/section'

export function CtaBand() {
  return (
    <Section spacing="sm">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          {/* <--[H2]--> */}
          <h2 />
          {/* <--[Supporting line]--> */}
          <p className="mt-3" />
        </div>
        {/* <--[CTA button]--> */}
        <a href="#" className="inline-flex shrink-0 items-center gap-2" />
      </div>
    </Section>
  )
}
