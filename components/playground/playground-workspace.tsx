'use client'

import { useState } from 'react'
import { Section } from '@/components/layout/section'
import { ExampleList } from './example-list'
import { ModelResultCard } from './model-result-card'
import { RewriteTrace } from './rewrite-trace'
import { TweetInput } from './tweet-input'

/*
 * Source analog: MapExplorer split view, adapted to a contained layout.
 * [ input → 3 result cards → rewrite trace ] | [ sticky examples aside ]
 */
export function PlaygroundWorkspace() {
  // <--[Input text + submitted result state]-->
  const [text, setText] = useState('')

  return (
    <Section id="playground" spacing="sm">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-6">
          <TweetInput value={text} onChange={setText} />

          {/* <--[Result cards: stack on mobile, 3 columns from md]--> */}
          <div className="grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <ModelResultCard key={i} />
            ))}
          </div>

          <RewriteTrace />
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <ExampleList onPick={setText} />
        </aside>
      </div>
    </Section>
  )
}
