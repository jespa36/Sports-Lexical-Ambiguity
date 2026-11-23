export function RationaleEssay() {
  return (
    <article className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      {/* Top Overview Bar */}
      <div className="grid grid-cols-1 gap-6 border-y border-slate-200 py-6 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Option 2 Project
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Interactive Next.js website hosted on GitHub Pages, paired with this
            rationale essay and final presentation.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Communities &amp; Baseline Tested
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            NBA, NFL, and Soccer/Fútbol Twitter posts tested against VADER
            sentiment scoring in the browser.
          </p>
        </div>
      </div>

      {/* 1. Artifact Description */}
      <section className="space-y-6">
        <header>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-700">
            01 // Artifact Description
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            1. Artifact Description
          </h2>
        </header>

        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <h3 className="text-lg font-semibold text-slate-900">
            Project Overview
          </h3>
          <p>
            When we first talked about lexical ambiguity earlier in the
            semester, I immediately thought about how everyday words flip meaning
            in online sports threads. Words like &ldquo;cook,&rdquo;
            &ldquo;sell,&rdquo; and &ldquo;fried&rdquo; don&rsquo;t mean the
            same thing during a live game as they do in a kitchen—they depend on
            who is posting, who they&rsquo;re talking to, and what just happened
            on the field or court. I built{" "}
            <strong className="font-semibold text-slate-900">
              Sports-Lexical-Ambiguity
            </strong>{" "}
            on GitHub Pages to compare how NBA, NFL, and Soccer/Fútbol Twitter
            communities use these terms and to show where standard sentiment
            tools misread them.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Architecture &amp; Components
          </h3>
          <p>
            The site is split into four main views so visitors can go from
            quick examples to testing their own posts and checking the data
            behind them:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-slate-900">
                Landing Page (/):
              </strong>{" "}
              Shows the main contrast between literal dictionary meanings and
              how fans actually talk across the three leagues.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Sociolect Decoder (/decoder/):
              </strong>{" "}
              Breaks down real posts side-by-side, comparing standard word
              definitions against fan intent, word patterns, and social
              context.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Sentiment Playground (/playground/):
              </strong>{" "}
              Lets visitors pick sample tweets or paste their own sports posts
              to test them out with VADER right in the browser and see why the
              score comes back neutral or backwards.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Corpus Findings &amp; Methodology (/findings/ &amp; /method/):
              </strong>{" "}
              Lays out how the posts were tagged, where VADER missed the mark in
              our starter set, and how the data is structured.
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Intellectual Context & Disciplinary Grounding */}
      <section className="space-y-6 border-t border-slate-200 pt-10">
        <header>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-700">
            02 // Intellectual Context &amp; Disciplinary Grounding
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            2. Intellectual Context &amp; Disciplinary Grounding
          </h2>
        </header>

        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <h3 className="text-lg font-semibold text-slate-900">
            Problem / Phenomenon Addressed
          </h3>
          <p>
            Standard rule-based sentiment tools work by checking words against a
            fixed list where every word has a default positive or negative
            score. In sports threads, fans constantly flip those meanings—like
            using &ldquo;This fuckery is forever&rdquo; as hype instead of an
            insult, dropping local jokes like &ldquo;Wawa Hoagiefest,&rdquo; or
            mixing in Spanish and Catalan phrases like &ldquo;visca
            barça.&rdquo; Because those terms either aren&rsquo;t in standard
            word lists or flip their positive vs. negative lean depending on
            the game, rule-based models regularly misread what fans actually
            mean.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Rationale for Format
          </h3>
          <p>
            A regular essay can tell you that a sentiment score got a tweet
            wrong, but creating an interactive website fits because it allows
            people to test examples themselves and see the mismatch happen on
            the spot. Hosting it on GitHub Pages also keeps the live site and
            the TypeScript dataset open so classmates, professors, and
            recruiters can inspect how everything works under the hood.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Academic Grounding &amp; Research
          </h3>
          <p>
            This project connects word meaning and word structure with how
            people actually use language in groups. When looking at the words
            themselves, I tag posts for{" "}
            <strong className="font-semibold text-slate-900">
              polysemy and lexical ambiguity
            </strong>
            ,{" "}
            <strong className="font-semibold text-slate-900">
              valence inversion
            </strong>
            ,{" "}
            <strong className="font-semibold text-slate-900">
              multi-word expressions
            </strong>
            , and{" "}
            <strong className="font-semibold text-slate-900">
              morphological blends
            </strong>
            . When it comes to context and banter, I draw on{" "}
            <strong className="font-semibold text-slate-900">
              Gricean implicature
            </strong>{" "}
            (Grice, 1975), speech acts, presupposition, and stance-taking to
            show how posts signal in-group belonging or roast rival teams. On
            the NLP side, this builds on research showing how online language
            drifts away from standard English dictionaries (Eisenstein, 2013)
            and tests those patterns directly against the VADER sentiment tool
            (Hutto &amp; Gilbert, 2014).
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Core Goals
          </h3>
          <p>
            In the end, visitors should walk away seeing that sports fan talk
            isn&rsquo;t just random slang—each community follows shared rules
            that insiders understand right away. By pairing linguistic tags with
            live VADER scores, the site also gives students a clear look at why
            simple dictionary lookups miss real human context.
          </p>
        </div>
      </section>

      {/* 3. User's Manual (or End-User Guide) */}
      <section className="space-y-6 border-t border-slate-200 pt-10">
        <header>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-700">
            03 // User&apos;s Manual
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            3. User&apos;s Manual (End-User Guide)
          </h2>
        </header>

        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <h3 className="text-lg font-semibold text-slate-900">
            Target Audience
          </h3>
          <p>
            The primary audience is sports fans who are already part of NBA,
            NFL, and Soccer/Fútbol Twitter—or just getting used to the slang—as
            well as Computer Science and Linguistics students interested in NLP.
            Since I&rsquo;m linking this repo on my GitHub and resume,
            recruiters and hiring managers are a secondary audience who can test
            the live site and check my code.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            How to Use
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-slate-900">
                Open the Sociolect Decoder:
              </strong>{" "}
              Filter posts by league (NBA, NFL, Soccer/Fútbol) or linguistic
              category to compare literal word meanings against what fans
              actually mean.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Test Posts in the Playground:
              </strong>{" "}
              Click any sample tweet or type your own sports post into the box
              to see VADER&rsquo;s word-by-word score right next to the
              context-aware reading.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Check Findings &amp; Methodology:
              </strong>{" "}
              Visit the Findings and Method pages to see how often VADER misses
              the mark in our starter set and how each post is formatted in
              TypeScript.
            </li>
          </ol>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Potential Adaptations
          </h3>
          <p>
            In an introductory linguistics or NLP class, an instructor could use
            the Playground during a live activity so students can paste slang
            from their own online communities and see firsthand whether a tool
            fails because a word is missing from its list or because the context
            flips its meaning.
          </p>
        </div>
      </section>

      {/* 4. Limitations and Future Directions */}
      <section className="space-y-6 border-t border-slate-200 pt-10">
        <header>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-700">
            04 // Limitations &amp; Future Directions
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            4. Limitations and Future Directions
          </h2>
        </header>

        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <h3 className="text-lg font-semibold text-slate-900">
            Impact &amp; Strengths
          </h3>
          <p>
            Running VADER directly in the browser against real NBA, NFL, and
            Soccer/Fútbol posts makes the problem easy to see: visitors can
            watch where a standard dictionary returns a flat neutral score
            because it doesn&rsquo;t recognize a term, versus where it actively
            gets the emotion backwards.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Current Limitations
          </h3>
          <p>
            Right now, the starter dataset has 9 tagged posts (3 per league) as
            a baseline while I build toward a full 30-post set. Also, when
            visitors paste custom tweets into the Playground, a single text box
            can&rsquo;t see the live score, team rivalries, or reply thread
            that fans rely on to catch sarcasm or inside jokes.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            Future Extensions
          </h3>
          <p>
            Expanding on this, the next step is growing the dataset to 30
            balanced posts across all three leagues and testing a custom 35–50
            word sports slang list to see how much adding domain terms fixes
            VADER&rsquo;s blind spots—and which context-heavy jokes still
            require reading the whole conversation.
          </p>
        </div>
      </section>

      {/* 5. References (APA) */}
      <section className="space-y-4 border-t border-slate-200 pt-10">
        <header>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-700">
            05 // References
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            5. References (APA)
          </h2>
        </header>

        <div className="space-y-3 pl-6 -indent-6 text-sm leading-relaxed text-slate-700">
          <p>
            Eisenstein, J. (2013). What to do about bad language on the
            internet. In{" "}
            <em className="italic">
              Proceedings of the 2013 Conference of the North American Chapter of
              the Association for Computational Linguistics: Human Language
              Technologies
            </em>{" "}
            (pp. 359–369). Association for Computational Linguistics.
          </p>
          <p>
            Grice, H. P. (1975). Logic and conversation. In P. Cole &amp; J. L.
            Morgan (Eds.),{" "}
            <em className="italic">Syntax and semantics: Vol. 3. Speech acts</em>{" "}
            (pp. 41–58). Academic Press.
          </p>
          <p>
            Hutto, C., &amp; Gilbert, E. (2014). VADER: A parsimonious
            rule-based model for sentiment analysis of social media text. In{" "}
            <em className="italic">
              Proceedings of the International AAAI Conference on Web and Social
              Media
            </em>
            , 8(1), 216–225.
          </p>
        </div>
      </section>
    </article>
  );
}