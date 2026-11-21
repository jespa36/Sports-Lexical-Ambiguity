import Link from 'next/link'
import { Section } from '@/components/layout/section'

const STEPS = [
  {
    num: '01',
    title: 'Pull 30 Real Fan Posts',
    text: 'Gather 10 tweets each from Soccer/Futbol, NBA, and NFL communities where slang or banter shifts the surface meaning.',
  },
  {
    num: '02',
    title: 'Compare Literal vs. Real Intent',
    text: 'Put the dictionary sentiment label right next to what fans in that thread actually mean so the mismatch is easy to spot.',
  },
  {
    num: '03',
    title: 'Tag the Pragmatic Mechanism',
    text: 'Label the speech act, conversational implicature, presupposition, or banter behind why the meaning flips.',
  },
]

export function MethodBrief() {
  return (
    <Section spacing="md">
      <div className="flex flex-col justify-between gap-6 border-t border-slate-300 pt-12 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            How I Put the Corpus Together
          </h2>
        </div>
        <Link
          href="/method/"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#0E1E5B] underline-offset-4 hover:underline"
        >
          See Full Method →
        </Link>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.num}
            className="flex flex-col gap-3 border border-slate-300 bg-white p-6"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#0E1E5B]">
              STEP // {step.num}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}