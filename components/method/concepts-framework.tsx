import { Section } from '@/components/layout/section'

/* Source analog: ResearchFramework (a plain contained section with stacked blocks). */
export function ConceptsFramework() {
  return (
    <Section id="concepts" spacing="md">
      {/* <--[Heading block]--> */}
      <div className="max-w-2xl">
        <p />
        <h2 className="mt-3" />
      </div>

      {/* <--[Concept blocks × N]--> */}
      <div className="mt-10 flex flex-col gap-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-2 p-6">
            <h3 />
            <p />
          </div>
        ))}
      </div>
    </Section>
  )
}
