import './globals.css'
import type { Metadata, Viewport } from 'next'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'

export const metadata: Metadata = {
  title: 'Sports Discourse Sentiment Analysis',
  description:
    'Comparing rule-based NLP sentiment labels against pragmatic fan intent across the Twitter community sociolects Soccer/Futbol, NBA, and NFL.',
}

export const viewport: Viewport = {
  themeColor: '#0e1e5b',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}