import { Container } from '@/components/layout/container'

export function FindingsHeadline() {
  return (
    <Container className="pb-12">
      {/* <--[Headline stats × 3]--> */}
      <dl className="grid sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-1 p-6">
            <dd>{/* <--[Stat value]--> */}</dd>
            <dt>{/* <--[Stat label]--> */}</dt>
          </div>
        ))}
      </dl>
    </Container>
  )
}
