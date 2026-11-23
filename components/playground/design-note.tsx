import { LABEL } from './panel-parts'

/* Plain explanation of the view plus the open design question. Static content. */
export function DesignNote() {
  return (
    <section aria-labelledby="design-note-heading" className="grid border border-slate-300 bg-white md:grid-cols-2">
      <div className="border-b border-slate-300 p-4 md:border-b-0 md:border-r">
        <p className={LABEL}>About this view</p>
        <h2 id="design-note-heading" className="mt-1 text-base font-bold text-slate-900">
          Test how VADER reads a sports post
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">
          VADER is a standard rule-based sentiment tool that scores text using a dictionary of
          words with preset valences. Type any sports post, or pick a preset, to see its label,
          its compound score from -1 to +1, and the dictionary words that produced it.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">
          Then compare that baseline with how fans actually interpret the post. For annotated
          corpus posts, the right side shows the community reading and why VADER misses it. For
          any other post, the community reading is Planned, so check the VADER score against your
          own read as a fan.
        </p>
      </div>

      <div className="p-4">
        <p className={LABEL}>Open design question</p>
        <h2 className="mt-1 text-base font-bold text-slate-900">
          How far can a small slang lexicon go?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">
          Automated community and pragmatic decoding is Planned. How far could a hand-curated
          sports slang lexicon of about 35 to 50 domain terms go in supporting reliable
          side-by-side comparisons on posts that people type themselves?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">
          A lexicon can flag candidate terms and list the readings each one can have. It cannot
          choose the right reading alone, because that depends on who the post is about, what is
          happening in the game, and which community is speaking. Where that broader game and
          pragmatic context is still required is part of what this view is meant to show.
        </p>
      </div>
    </section>
  )
}
