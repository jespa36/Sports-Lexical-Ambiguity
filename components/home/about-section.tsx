import { Section } from '@/components/layout/section'

export function AboutSection() {
  return (
    <Section id="about" spacing="lg">
      {/* <--[Two-column intro: text | callout figure]--> */}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#0E1E5B]">
            {/* <--[Eyebrow]--> */}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {/* <--[H2]--> */}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            {/* <--[Paragraph]--> */}
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            {/* <--[Paragraph]--> */}
          </p>
        </div>

        <figure className="border-l-4 border-[#0E1E5B] bg-slate-50 p-6 md:p-8">
          <p className="font-mono text-2xl font-bold text-[#0E1E5B] sm:text-3xl">
            {/* <--[Big stat]--> */}
          </p>
          <figcaption className="mt-3 text-sm leading-relaxed text-slate-700">
            {/* <--[Caption]--> */}
          </figcaption>
          {/* <--[Progress track + fill]--> */}
          <div className="mt-6 h-2 overflow-hidden bg-slate-200" aria-hidden="true">
            <div className="h-full w-0 bg-[#0E1E5B]" />
          </div>
          <p className="mt-4 font-mono text-xs text-slate-500">
            {/* <--[Source note]--> */}
          </p>
        </figure>
      </div>

      {/* <--[Card grid × 4]--> */}
      <div className="mt-16 grid gap-6 border-t border-slate-300 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-t-2 border-[#0E1E5B] pt-4">
            <div className="mb-3 inline-flex size-9 items-center justify-center bg-[#0E1E5B] font-mono text-xs font-bold text-white">
              {/* <--[Index / marker]--> */}
            </div>
            <h3 className="font-semibold text-slate-900">
              {/* <--[Card title]--> */}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {/* <--[Card text]--> */}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}