import { Container } from '@/components/layout/container'

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* <--[Background layer slot (optional)]--> */}
      <div aria-hidden="true" className="absolute inset-0 -z-10" />
      {/* <--[Overlay layer slot (optional)]--> */}
      <div aria-hidden="true" className="absolute inset-0 -z-10" />

      <Container className="pb-16 pt-20 md:pb-20 md:pt-28">
        {/* <--[Eyebrow pill]--> */}
        <p className="inline-flex items-center" />
        {/* <--[H1]--> */}
        <h1 className="mt-6 max-w-3xl" />
        {/* <--[Intro paragraph]--> */}
        <p className="mt-6 max-w-2xl" />

        {/* <--[CTA row: primary + secondary]--> */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center gap-2" />
          <a href="#" className="inline-flex items-center justify-center gap-2" />
        </div>

        {/* <--[Stat row × 3]--> */}
        <dl className="mt-14 grid gap-8 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <dd>{/* <--[Stat value]--> */}</dd>
              <dt className="mt-1">{/* <--[Stat label]--> */}</dt>
            </div>
          ))}
        </dl>

        {/* <--[Footnote]--> */}
        <p className="mt-8 max-w-3xl" />
      </Container>
    </section>
  )
}
