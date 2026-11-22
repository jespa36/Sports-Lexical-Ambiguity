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

          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2 md:px-6">
            <p className="text-xs text-slate-600">
              Showing {filteredEntries.length} of {SPORTSTWT_CORPUS.length} entries
            </p>
            <CommunityLegend />
          </div>

          <div className="h-[60vh] min-h-[440px] lg:h-[720px]">
            <TermList
              entries={filteredEntries}
              selectedId={selectedEntry?.id ?? null}
              onSelect={setSelectedId}
            />
          </div>
        </div>

        <aside
          aria-live="polite"
          className="border-t border-slate-300 bg-white lg:max-h-[812px] lg:overflow-y-auto lg:border-l lg:border-t-0"
        >
          <TermPanel
            entry={selectedEntry}
            onClear={() => setSelectedId(null)}
          />
        </aside>
      </div>
    </Section>
  )
}