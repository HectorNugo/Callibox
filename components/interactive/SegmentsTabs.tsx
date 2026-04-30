'use client'

import { useState } from 'react'
import type { SegmentTab } from '@/lib/types'

interface Props {
  tabs: SegmentTab[]
}

export default function SegmentsTabs({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0].id)

  const activeTab = tabs.find((t) => t.id === active)!

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-5 py-2 rounded-full border text-[13px] font-medium transition-all duration-150 cursor-pointer ${
              active === tab.id
                ? 'bg-brand text-white border-brand'
                : 'bg-white text-ink-soft border-border hover:bg-brand hover:text-white hover:border-brand'
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {activeTab.cards.map((card) => (
          <div key={card.title} className="bg-white border border-border rounded-[var(--radius)] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-ink-mute mb-2">
              {card.profile}
            </p>
            <h3 className="text-[1.05rem] font-semibold mb-2">{card.title}</h3>
            <p className="text-[13px] text-ink-soft leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
