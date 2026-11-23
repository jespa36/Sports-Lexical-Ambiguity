import { Section } from '@/components/layout/section'
import { VADER_THRESHOLD } from '@/lib/vader'

const LABEL = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500'

export function VaderBaseline() {
  return (
    <Section id="vader" spacing="sm">
      <p className={LABEL}>Section 3</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">VADER baseline setup</h2>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="border border-slate-300 bg-white p-4">
          <h3 className="text-base font-bold text-slate-900">Why VADER</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            VADER is a general-domain, dictionary-based sentiment tool designed for social media
            text (Hutto &amp; Gilbert, 2014). It needs no training data and carries no knowledge of
            any fan community, which makes it a clean baseline: it shows what a surface-level
            lexical reading of a sports post looks like.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            The question is not whether VADER is a good tool in general. It is where a
            general-domain word list stops working on in-group sports language.
          </p>
        </div>

        <div className="border border-slate-300 bg-white p-4">
          <h3 className="text-base font-bold text-slate-900">How it is run and read</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            Each post&apos;s text is scored in the browser with <code>vader-sentiment</code>, a
            JavaScript port of VADER. The compound score runs from -1 to +1. At +{VADER_THRESHOLD}
            {' '}or above the label is Positive, at -{VADER_THRESHOLD} or below it is Negative, and
            otherwise it is Neutral.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            Trigger words are the words in the post that appear in VADER&apos;s lexicon of about
            7,500 entries, shown with their base valence. They show where the score comes from. A
            post with no trigger words gives VADER nothing to score, and a post whose trigger words
            point the wrong way shows a lexical cue misleading the reading. Both are compared
            against the annotated fan intent.
          </p>
        </div>
      </div>

      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-600">
        Limits: trigger word valences are base lexicon values, so they do not show VADER&apos;s
        negation, booster, capitalization, or punctuation adjustments. Hutto, C. J., &amp; Gilbert,
        E. E. (2014). VADER: A parsimonious rule-based model for sentiment analysis of social media
        text. Eighth International Conference on Weblogs and Social Media (ICWSM-14), Ann Arbor, MI.
      </p>
    </Section>
  )
}
