import { Section } from '@/components/layout/section'

export function AboutSection() {
  return (
    <Section id="about" spacing="lg">
      {/* <--[Two-column intro: text | callout figure]--> */}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {/* <--[Eyebrow]--> */}
          <p />
          {/* <--[H2]--> */}
          <h2 className="mt-3" />
          {/* <--[Paragraph]--> */}
          <p className="mt-5" />
          {/* <--[Paragraph]--> */}
          <p className="mt-4" />
        </div>

        <figure>
          {/* <--[Big stat]--> */}
          <p />
          <figcaption className="mt-3">{/* <--[Caption]--> */}</figcaption>
          {/* <--[Progress track + fill]--> */}
          <div className="mt-6 h-2.5 overflow-hidden" aria-hidden="true">
            <div className="h-full" />
          </div>
          {/* <--[Source note]--> */}
          <p className="mt-4" />
        </figure>
      </div>

      {/* <--[Card grid × N]--> */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="p-5">
            {/* <--[Icon box]--> */}
            <div className="mb-4 flex size-11 items-center justify-center" />
            {/* <--[Card title]--> */}
            <h3 />
            {/* <--[Card text]--> */}
            <p className="mt-1.5" />
          </div>
        ))}
      </div>
    </Section>
  )
}
