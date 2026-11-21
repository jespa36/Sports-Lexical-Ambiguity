import Link from 'next/link'
import { Container } from './container'

export function SiteFooter() {
  return (
    <footer className="border-t border-blue-950 bg-[#0E1E5B] text-blue-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center bg-white font-mono text-xs font-bold tracking-wider text-[#0E1E5B]">
                SLA
              </span>
              <span className="text-sm font-bold tracking-tight text-white">
                Sports Lexical Ambiguity
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-200">
              An interactive semantics and pragmatics project examining how
              rule-based NLP models misread fan sociolects across Soccer/Futbol,
              NBA, and NFL communities.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-blue-200">
              <li>
                <Link href="/decoder/" className="transition hover:text-white">
                  Sociolect Decoder
                </Link>
              </li>
              <li>
                <Link href="/playground/" className="transition hover:text-white">
                  Sentiment Playground
                </Link>
              </li>
              <li>
                <Link href="/findings/" className="transition hover:text-white">
                  Corpus Findings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              Documentation
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-blue-200">
              <li>
                <Link href="/method/" className="transition hover:text-white">
                  Methodology &amp; Schema
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/jespa36/Sports-Lexical-Ambiguity"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub Repository ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center" aria-hidden="true">
          <span className="h-px flex-1 bg-blue-800" />
        </div>

        <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-blue-300 md:flex-row md:justify-between">
          <p>LING 230 // Semantics, Pragmatics &amp; Discourse</p>
          <p>30-Entry Annotated Corpus (Soccer/Futbol, NBA, NFL)</p>
        </div>
      </Container>
    </footer>
  )
}