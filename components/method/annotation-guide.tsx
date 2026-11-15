import { Section } from '@/components/layout/section'

/* Source analog: FieldGuide. Full-bleed band; contained content; 5-step grid at lg. */
export function AnnotationGuide() {
  return (
    <Section id="annotation-guide" spacing="md">
      {/* <--[Heading block]--> */}
      <div className="max-w-2xl">
        <p />
        <h2 className="mt-3" />
      </div>

      {/* <--[Numbered steps: 1 → 2 (md) → 5 (lg) columns]--> */}
      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <li key={i} className="flex flex-col gap-3 p-5">
            <span />
            <h3 />
            <p />
          </li>
        ))}
      </ol>
    </Section>
  )
}
