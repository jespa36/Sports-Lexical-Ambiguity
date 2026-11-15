'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAV } from '@/lib/site'
import { Container } from './container'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <Container className="flex items-center justify-between gap-6 py-3">
        {/* <--[Brand link]--> */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* <--[Logo mark]--> */}
          <span className="flex flex-col">
            {/* <--[Brand name]--> */}
            {/* <--[Tagline]--> */}
          </span>
        </Link>

        {/* <--[Desktop nav]--> */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-1.5">
              {/* <--[Nav label]--> */}
            </Link>
          ))}
          {/* <--[Header CTA]--> */}
          <Link href="#" className="ml-2 px-3.5 py-1.5" />
        </nav>

        {/* <--[Mobile menu toggle]--> */}
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 md:hidden"
        />
      </Container>

      {/* <--[Mobile nav panel]--> */}
      {open && (
        <nav aria-label="Mobile" className="px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block px-3 py-2.5">
                  {/* <--[Nav label]--> */}
                </Link>
              </li>
            ))}
            <li>
              {/* <--[Mobile CTA]--> */}
              <Link href="#" className="mt-1 block px-3 py-2.5" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
