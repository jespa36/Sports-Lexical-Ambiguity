import { Section } from '@/components/layout/section'

const CATEGORIES = [
  {
    badge: '01',
    title: 'Lexical Ambiguity (Polysemy)',
    text: 'Everyday words like "cook" or "sell" take on completely different meanings depending on the game context and who is tweeting.',
  },
  {
    badge: '02',
    title: 'Valence Inversion',
    text: 'Words that look negative in a standard dictionary—like "sick" or "disgusting"—actually mean high praise when a player makes a big play.',
  },
  {
    badge: '03',
    title: 'Multi-Word Expression',
    text: 'Phrases where you can\'t figure out what a fan means just by adding up the dictionary score of each separate word.',
  },
  {
    badge: '04',
    title: 'Morphological Blend',
    text: 'Blended nicknames and fan-made words that pack banter, criticism, or inside jokes into one combined term.',
  },
]

export function AboutSection() {
  return (
    <Section id="about" spacing="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0E1E5B]">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Why Dictionary Polarity Breaks Down on Sports Twitter
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            When a fan tweets that a player &ldquo;cooked&rdquo; the defense or
            &ldquo;sold&rdquo; the game, a basic sentiment tool just checks each
            word against a static positive or negative list. On sports Twitter,
            banter, inside jokes, and game context completely flip what those
            words actually mean.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            The idea I first had was to build a small corpus that pairs real fan
            tweets with their literal dictionary reading, what fans actually
            mean, and the exact pragmatic mechanism that trips up baseline NLP
            classifiers.
          </p>
        </div>

        <figure className="border-l-4 border-[#0E1E5B] bg-slate-50 p-6 md:p-8">
          <p className="font-mono text-2xl font-bold text-[#0E1E5B] sm:text-3xl">
            Negative → Positive
          </p>
          <figcaption className="mt-3 text-sm leading-relaxed text-slate-700">
            A literal sentiment tool flags words like{' '}
            <em>&ldquo;disgusting&rdquo;</em> or <em>&ldquo;fried&rdquo;</em>{' '}
            as negative, missing that fans are hyping up a tough shot or clowning
            a defender after an ankle-breaker.
          </figcaption>
          <div
            className="mt-6 h-2 overflow-hidden bg-slate-200"
            aria-hidden="true"
          >
            <div className="h-full w-3/4 bg-[#0E1E5B]" />
          </div>
          <p className="mt-4 font-mono text-xs text-slate-500">
            Comparing <code>vaderBaseline</code> against{' '}
            <code>actualIntent</code> across annotated posts.
          </p>
        </figure>
      </div>

      <div className="mt-16 grid gap-6 border-t border-slate-300 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((item) => (
          <div key={item.title} className="border-t-2 border-[#0E1E5B] pt-4">
            <div className="mb-3 inline-flex size-9 items-center justify-center bg-[#0E1E5B] font-mono text-xs font-bold text-white">
              {item.badge}
            </div>
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}