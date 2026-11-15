import { Section } from '@/components/layout/section'

export function AccuracyComparison() {
  return (
    <Section id="accuracy" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          {/* <--[Eyebrow]--> */}
          <p />
          {/* <--[H2]--> */}
          <h2 className="mt-3" />
          {/* <--[Paragraph]--> */}
          <p className="mt-4" />
          {/* <--[Key figures: 2-col grid]--> */}
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <dd />
                <dt />
              </div>
            ))}
          </dl>
        </div>

        <div>
          {/* <--[Chart slot]--> */}
          <div className="relative h-72 w-full" />
          {/* <--[Per-model rows: label left, value right]--> */}
          <ul className="mt-4 flex flex-col gap-3">
            {[0, 1, 2].map((i) => (
              <li key={i} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1">
                <span />
                <span />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
