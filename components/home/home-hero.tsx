import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { SPORTSTWT_CORPUS } from '@/lib/corpus'

export function HomeHero() {
  const populatedCount = SPORTSTWT_CORPUS.filter(
    (entry) => entry.tweetText.trim().length > 0
  ).length

  const stats = [
    {
      value: `${SPORTSTWT_CORPUS.length} Posts`,
      label: `3-League Corpus (${populatedCount}/${SPORTSTWT_CORPUS.length} Annotated)`,
    },
    {
      value: '3 Communities',
      label: 'Soccer/Futbol, NBA & NFL Twitter',
    },
    {
      value: '4 Categories',
      label: 'Polysemy, MWEs, Blends & Valence Shifts',
    },
  ]

  return (
    <section className="relative isolate overflow-hidden border-b border-blue-950 bg-[#0E1E5B] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10" />

      <Container className="pb-16 pt-20 md:pb-20 md:pt-28">
        <p className="inline-flex items-center gap-2 border-b border-sky-300/50 pb-1 font-mono text-xs font-medium uppercase tracking-widest text-sky-300">
          <span>LING 230 // Semantics, Pragmatics &amp; Discourse</span>
          <span>•</span>
          <span>Stage 2 Prototype</span>
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Why Literal NLP Misunderstands{' '}
          <span className="text-sky-300">Online Sports Discourse</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
          Standard sentiment tools just look at individual words and match them to a basic positive or negative dictionary score. 
          On here, you can see how banter, inside jokes, and context completely flip what fans actually mean across Soccer/Futbol, NBA, and NFL Twitter.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/playground/"
            className="inline-flex items-center justify-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-[#0E1E5B] transition hover:bg-blue-50"
          >
            Open Sentiment Playground →
          </Link>
          <Link
            href="/decoder/"
            className="inline-flex items-center justify-center gap-2 border border-blue-300/60 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Explore Sociolect Decoder
          </Link>
        </div>

        <dl className="mt-14 grid gap-8 border-t border-blue-800 pt-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-sky-400 pl-4">
              <dd className="font-mono text-2xl font-bold text-white">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-blue-200">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-3xl font-mono text-xs text-blue-300">
          * Live UI prototype wired to{' '}
          <code className="border border-blue-700 bg-blue-950 px-1.5 py-0.5 text-white">
            SPORTSTWT_CORPUS
          </code>{' '}
          (3 active placeholders each for Soccer/Futbol, NBA, and NFL).
        </p>
      </Container>
    </section>
  )
}