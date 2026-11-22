'use client'

import { useState, useMemo } from 'react'
import { Section } from '@/components/layout/section'
import {
  SPORTSTWT_CORPUS,
  SportsCommunity,
  FeatureCategory,
} from '@/lib/corpus'
import { CommunityLegend } from './community-legend'
import { DecoderToolbar } from './decoder-toolbar'
import { TermList } from './term-list'
import { TermPanel } from './term-panel'

export function DecoderExplorer() {
  const [selectedCommunity, setSelectedCommunity] = useState<'All' | SportsCommunity>('All')
  const [selectedCategory, setSelectedCategory] = useState<'All' | FeatureCategory>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(SPORTSTWT_CORPUS[0]?.id ?? null)

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return SPORTSTWT_CORPUS.filter((entry) => {
      const matchesCommunity =
        selectedCommunity === 'All' || entry.community === selectedCommunity
      const matchesCategory =
        selectedCategory === 'All' ||
        entry.category === selectedCategory ||
        entry.secondaryCategories?.includes(selectedCategory)
      const matchesSearch =
        !q ||
        entry.targetExpression.toLowerCase().includes(q) ||
        entry.tweetText.toLowerCase().includes(q) ||
        entry.sociolectMeaning.toLowerCase().includes(q)

      return matchesCommunity && matchesCategory && matchesSearch
    })
  }, [selectedCommunity, selectedCategory, searchQuery])

  const selectedEntry =
    filteredEntries.find((item) => item.id === selectedId) ?? null

  return (
    <Section id="decoder" labelledBy="decoder-heading" contained={false}>
      <h2 id="decoder-heading" className="sr-only">
        Sociolect Decoder
      </h2>

      <div className="grid lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col">
          <DecoderToolbar
            selectedCommunity={selectedCommunity}
            onCommunityChange={setSelectedCommunity}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <p className="px-4 py-2 md:px-6">
            Showing {filteredEntries.length} of {SPORTSTWT_CORPUS.length} entries. Select an expression to inspect its breakdown.
          </p>

          <div className="relative h-[60vh] min-h-[440px] lg:h-[720px]">
            <TermList
              entries={filteredEntries}
              selectedId={selectedEntry?.id ?? null}
              onSelect={setSelectedId}
            />
            <div className="pointer-events-none absolute bottom-4 left-4 z-10">
              <CommunityLegend />
            </div>
          </div>
        </div>

        <aside aria-live="polite" className="lg:max-h-[812px] lg:overflow-y-auto">
          <TermPanel
            entry={selectedEntry}
            onClear={() => setSelectedId(null)}
          />
        </aside>
      </div>
    </Section>
  )
}