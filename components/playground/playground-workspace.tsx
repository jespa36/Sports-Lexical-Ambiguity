'use client'

import { useState } from 'react'
import { Section } from '@/components/layout/section'
import { SPORTSTWT_CORPUS } from '@/lib/corpus'
import type { CorpusEntry } from '@/lib/corpus'
import { BaselinePanel } from './baseline-panel'
import { DesignNote } from './design-note'
import { ExampleList } from './example-list'
import { SociolectPanel } from './sociolect-panel'
import { TweetInput } from './tweet-input'
import type { CommunityLens, PlaygroundResult } from './types'

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')

/*
 * [ note → input → baseline | sociolect ] | [ preset posts ]
 * VADER scores any post. The community reading is available for corpus posts only (Planned otherwise).
 */
export function PlaygroundWorkspace() {
  const [text, setText] = useState('')
  const [lens, setLens] = useState<CommunityLens>('All')
  const [result, setResult] = useState<PlaygroundResult>({ status: 'idle' })

  function compare() {
    const q = normalize(text)
    if (!q) {
      setResult({ status: 'idle' })
      return
    }
    const entry = SPORTSTWT_CORPUS.find((e) => normalize(e.tweetText) === q)
    setResult(entry ? { status: 'matched', entry } : { status: 'unmatched', text })
  }

  function pick(entry: CorpusEntry) {
    setText(entry.tweetText)
    setLens(entry.community)
    setResult({ status: 'matched', entry })
  }

  function clear() {
    setText('')
    setResult({ status: 'idle' })
  }

  return (
    <Section id="playground" spacing="sm">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-6">
          <DesignNote />

          <TweetInput
            value={text}
            onChange={setText}
            lens={lens}
            onLensChange={setLens}
            onSubmit={compare}
            onClear={clear}
          />

          <div aria-live="polite" className="grid gap-4 md:grid-cols-2">
            <BaselinePanel result={result} />
            <SociolectPanel result={result} lens={lens} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <ExampleList
            onPick={pick}
            activeId={result.status === 'matched' ? result.entry.id : null}
          />
        </aside>
      </div>
    </Section>
  )
}
