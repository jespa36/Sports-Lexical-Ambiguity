import { Section } from '@/components/layout/section'
import { SPORTSTWT_CORPUS, TARGET_ENTRIES } from '@/lib/corpus'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'

export function CorpusSampling() {
  return (
    <Section id="sampling" spacing="sm">
      <p className={LABEL}>Section 1</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">Corpus sampling and scope</h2>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="border border-slate-300 bg-white p-4">
          <h3 className="text-base font-bold text-slate-900">What is sampled</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            The corpus draws on public social media posts from three fan communities: Soccer/Fútbol,
            NBA, and NFL. The target is {TARGET_ENTRIES} annotated posts, about ten per community.{' '}
            {SPORTSTWT_CORPUS.length} are annotated so far, so the corpus is a work in progress.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            Each entry keeps the full post text, the expression being analyzed, a note on the
            context needed to read it, and the link to the original post.
          </p>
        </div>

        <div className="border border-slate-300 bg-white p-4">
          <h3 className="text-base font-bold text-slate-900">Why these posts</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            Posts were chosen to capture authentic in-group banter, trash talk, and praise, rather
            than generic commentary such as score updates or news. These are the cases where a
            word&apos;s everyday meaning and the community&apos;s meaning are most likely to come
            apart.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            The corpus is a hand-selected sample for close analysis. It shows how these phenomena
            work, not how often they occur.
          </p>
        </div>
      </div>
    </Section>
  )
}
