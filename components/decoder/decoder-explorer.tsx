'use client'

import { useState } from 'react'
import { Section } from '@/components/layout/section'
import { CommunityLegend } from './community-legend'
import { DecoderToolbar } from './decoder-toolbar'
import { TermList } from './term-list'
import { TermPanel } from './term-panel'

/*
 * Source analog: MapExplorer.
 * Full-bleed split view: [ toolbar / hint / viewport ] | [ detail aside ].
 * Aside stacks under the viewport below lg and becomes a fixed 380px column at lg.
 */
export function DecoderExplorer() {
  // <--[Filter + selection state]-->
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <Section id="decoder" labelledBy="decoder-heading" contained={false}>
      <h2 id="decoder-heading" className="sr-only">
        {/* <--[Section heading (screen-reader only)]--> */}
      </h2>

      <div className="grid lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col">
          <DecoderToolbar />

          {/* <--[Hint row]--> */}
          <p className="px-4 py-2 md:px-6" />

          {/* <--[Viewport: scrollable results + optional overlay]--> */}
          <div className="relative h-[60vh] min-h-[440px] lg:h-[720px]">
            <TermList selectedId={selectedId} onSelect={setSelectedId} />
            <div className="pointer-events-none absolute bottom-4 left-4 z-10">
              <CommunityLegend />
            </div>
          </div>
        </div>

        <aside aria-live="polite" className="lg:max-h-[812px] lg:overflow-y-auto">
          <TermPanel selectedId={selectedId} onClear={() => setSelectedId(null)} />
        </aside>
      </div>
    </Section>
  )
}
