'use client'

import { useMemo, useState } from 'react'
import { Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { LocalizedObject } from '@/lib/objects'

function pickRandomItems<T>(items: T[], count: number, allowDuplicates: boolean) {
  if (allowDuplicates) {
    return Array.from({ length: Math.max(0, count) }, () => items[Math.floor(Math.random() * items.length)])
  }

  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  return shuffled.slice(0, Math.min(count, shuffled.length))
}

interface VisualGeneratorProps {
  items: LocalizedObject[]
  title: string
  description: string
}

export function VisualGenerator({ items, title, description }: VisualGeneratorProps) {
  const [countInput, setCountInput] = useState('1')
  const [allowDuplicates, setAllowDuplicates] = useState(true)
  const [seed, setSeed] = useState(0)
  const count = Math.max(1, Math.min(100, Number.parseInt(countInput || '1', 10) || 1))
  const visibleCount = allowDuplicates ? count : Math.min(count, items.length)

  const selection = useMemo(() => {
    void seed
    return pickRandomItems(items, count, allowDuplicates)
  }, [allowDuplicates, count, items, seed])

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.08)] backdrop-blur md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Visual mode</p>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              <span>Count</span>
              <Input
                type="number"
                min={1}
                max={100}
                value={countInput}
                onChange={(event) => setCountInput(event.target.value)}
                className="h-7 w-20 border-0 bg-transparent p-0 text-right shadow-none focus-visible:ring-0"
              />
            </label>
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={allowDuplicates}
                onChange={(event) => setAllowDuplicates(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
              />
              <span>Allow repeats</span>
            </label>
          </div>
          <div className="flex items-center gap-3">
            {!allowDuplicates && count > items.length ? (
              <p className="text-xs text-slate-500">Limited to {items.length} unique items on this page.</p>
            ) : null}
            <Button className="gap-2 rounded-full px-5" onClick={() => setSeed((current) => current + 1)}>
              <Shuffle className="h-4 w-4" />
              Generate
            </Button>
          </div>
        </div>
      </div>

      <div className={`grid gap-4 ${visibleCount === 1 ? 'md:grid-cols-1' : visibleCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {selection.map((item) => (
          <Card key={item.id} className="overflow-hidden rounded-[1.75rem] border-white/80 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <CardHeader className="space-y-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-slate-200 text-5xl shadow-inner">
                {item.icon}
              </div>
              <div>
                <CardTitle className="text-2xl text-slate-900">{item.translation.name}</CardTitle>
                <CardDescription className="mt-2 text-sm leading-6 text-slate-600">
                  {item.translation.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">{item.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
