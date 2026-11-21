'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAV } from '@/lib/site'
import { Container } from './container'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-white">
      <Container className="flex items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center bg-[#0E1E5B] font-mono text-xs font-bold tracking-wider text-white">
            SLA
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[#0E1E5B]">
              Sports Lexical Ambiguity
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
              LING 230 • Sociolect &amp; NLP
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#0E1E5B]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/playground/"
            className="ml-2 border border-[#0E1E5B] bg-[#0E1E5B] px-3.5 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-900"
          >
            Interactive Playground
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="border border-slate-300 p-2 text-[#0E1E5B] hover:bg-slate-100 md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </Container>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-slate-300 bg-white px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-slate-200">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium text-slate-700 hover:text-[#0E1E5B]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/playground/"
                onClick={() => setOpen(false)}
                className="block bg-[#0E1E5B] px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Open Interactive Playground
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}