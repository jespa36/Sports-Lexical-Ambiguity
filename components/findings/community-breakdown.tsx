import { Section } from '@/components/layout/section'

export function CommunityBreakdown() {
  return (
    <Section id="communities" spacing="lg">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          {/* <--[Eyebrow]--> */}
          <p />
          {/* <--[H2]--> */}
          <h2 className="mt-3" />
          {/* <--[Paragraph]--> */}
          <p className="mt-4" />
        </div>

        {/* <--[Table: scrolls horizontally on narrow screens]--> */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}
