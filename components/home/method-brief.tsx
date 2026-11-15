import { Section } from '@/components/layout/section'

export function MethodBrief() {
  return (
    <Section spacing="md">
      {/* <--[Header row: heading block left, link right]--> */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          {/* <--[Eyebrow]--> */}
          <p />
          {/* <--[H2]--> */}
          <h2 className="mt-3" />
        </div>
        {/* <--[Link to full method page]--> */}
        <a href="#" className="inline-flex items-center gap-2" />
      </div>

      {/* <--[Numbered steps × 3]--> */}
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex flex-col gap-3 p-6">
            {/* <--[Step number]--> */}
            <span />
            {/* <--[Step title]--> */}
            <h3 />
            {/* <--[Step text]--> */}
            <p />
          </li>
        ))}
      </ol>
    </Section>
  )
}
