import './globals.css'
import type { Metadata, Viewport } from 'next'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'

// <--[Site metadata]-->
export const metadata: Metadata = {}

// <--[Viewport settings]-->
export const viewport: Viewport = {}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Column flex + flex-1 on <main> keeps the footer at the bottom on short pages. */}
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
