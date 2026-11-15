import { Section } from '@/components/layout/section'

export function MethodFramework() {
  return (
    <Section id="framework" spacing="md">
      {/* <--[Heading block]--> */}
      <div className="max-w-2xl">
        <p />
        <h2 className="mt-3" />
      </div>

      {/* <--[Numbered steps: 1 → 2 (md) → 4 (lg) columns]--> */}
      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <li key={i} className="flex flex-col gap-3 p-6">
            <span />
            <h3 />
            <p />
          </li>
        ))}
      </ol>
    </Section>
  )
}
