import { Section } from '@/components/layout/section'

export function FailureCases() {
  return (
    <Section id="failures" spacing="lg">
      {/* <--[Heading block]--> */}
      <div className="max-w-2xl">
        <p />
        <h2 className="mt-3" />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {/* <--[Ranked list heading]--> */}
          <h3 />
          {/* <--[Ranked rows: rank | content | value]--> */}
          <ol className="mt-4 flex flex-col">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 py-3">
                <span />
                <div />
                <span />
              </li>
            ))}
          </ol>
        </div>

        <div>
          {/* <--[Side notes list]--> */}
          <h3 />
          <ul className="mt-5 flex flex-col gap-4" />
        </div>
      </div>
    </Section>
  )
}
