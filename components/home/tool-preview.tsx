import { Section } from '@/components/layout/section'

/* Two-column "text | illustrated figure" section (the source's solution/concept block). */
export function ToolPreview() {
  return (
    <Section id="preview" spacing="lg">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {/* <--[Eyebrow]--> */}
          <p />
          {/* <--[H2]--> */}
          <h2 className="mt-3" />
          {/* <--[Paragraph]--> */}
          <p className="mt-5" />
          {/* <--[Paragraph]--> */}
          <p className="mt-4" />

          {/* <--[Sub-heading with leading icon]--> */}
          <h3 className="mt-8 flex items-center gap-2" />
          {/* <--[Bullet list × N]--> */}
          <ul className="mt-3 flex flex-col gap-2.5">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="flex gap-3">
                {/* <--[Bullet marker]--> */}
                <span className="mt-2 size-1.5 shrink-0" aria-hidden="true" />
                {/* <--[Bullet text]--> */}
              </li>
            ))}
          </ul>
        </div>

        <figure>
          <div className="p-6 md:p-8">
            {/* <--[Figure label]--> */}
            <p />
            <div className="mt-4 p-6">
              {/* <--[Sample input slot]--> */}
              <p />
              {/* <--[Sample output row: visual + text]--> */}
              <div className="mt-6 flex items-center gap-5 p-4">
                <div className="size-24 shrink-0" />
                <div>{/* <--[Output text]--> */}</div>
              </div>
            </div>
            <figcaption className="mt-4">{/* <--[Caption]--> */}</figcaption>
          </div>
        </figure>
      </div>
    </Section>
  )
}
