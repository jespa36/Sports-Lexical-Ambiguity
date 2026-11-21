import { Section } from '@/components/layout/section'

/* Two-column "text | figure" section */
export function ToolPreview() {
  return (
    <Section id="preview" spacing="lg">
      <div className="grid items-start gap-12 border-t border-slate-300 pt-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
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

          <h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">
            {/* <--[Sub-heading]--> */}
          </h3>
          {/* <--[List × 4]--> */}
          <ul className="mt-3 flex flex-col gap-2.5">
            {[0, 1, 2, 3].map((i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-slate-700"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 bg-[#0E1E5B]"
                  aria-hidden="true"
                />
                <span>{/* <--[List item]--> */}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="border border-slate-300 bg-slate-50">
          <div className="p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-[#0E1E5B]">
              {/* <--[Figure label]--> */}
            </p>
            <div className="mt-4 border border-slate-300 bg-white p-6">
              <p className="text-base font-medium text-slate-900">
                {/* <--[Sample input slot]--> */}
              </p>
              <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
                <div className="flex size-24 shrink-0 flex-col items-center justify-center border border-slate-300 bg-slate-100 text-center">
                  {/* <--[Primary comparison slot]--> */}
                </div>
                <div className="text-sm text-slate-700">
                  {/* <--[Secondary comparison / explanation slot]--> */}
                </div>
              </div>
            </div>
            <figcaption className="mt-4 font-mono text-xs text-slate-500">
              {/* <--[Caption]--> */}
            </figcaption>
          </div>
        </figure>
      </div>
    </Section>
  )
}
