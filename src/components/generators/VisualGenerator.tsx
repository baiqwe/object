'use client'

import { useMemo, useState } from 'react'
import { Copy, Shuffle } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { Locale } from '@/lib/i18n-config'
import type { LocalizedObject } from '@/lib/objects'
import { trustPageCopy } from '@/lib/site-copy'

function seededRandom(seed: number) {
  let value = seed % 2147483647
  if (value <= 0) {
    value += 2147483646
  }

  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

function pickRandomItems<T>(items: T[], count: number, allowDuplicates: boolean, seed: number) {
  const random = seededRandom(seed)

  if (allowDuplicates) {
    return Array.from({ length: Math.max(0, count) }, () => items[Math.floor(random() * items.length)])
  }

  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  return shuffled.slice(0, Math.min(count, shuffled.length))
}

interface VisualGeneratorProps {
  locale: Locale
  items: LocalizedObject[]
  title: string
  description: string
  featuredItems?: LocalizedObject[]
  defaultCount?: number
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function VisualGenerator({
  locale,
  items,
  title,
  description,
  featuredItems,
  defaultCount = 5,
}: VisualGeneratorProps) {
  const ui = trustPageCopy[locale].ui
  const [countInput, setCountInput] = useState(String(defaultCount))
  const [allowDuplicates, setAllowDuplicates] = useState(false)
  const [appliedCount, setAppliedCount] = useState(defaultCount)
  const [appliedAllowDuplicates, setAppliedAllowDuplicates] = useState(false)
  const [seed, setSeed] = useState(1)
  const [copiedItemId, setCopiedItemId] = useState<string | null>(null)
  const count = Math.max(1, Math.min(100, Number.parseInt(countInput || '1', 10) || 1))
  const visibleCount = appliedAllowDuplicates ? appliedCount : Math.min(appliedCount, items.length)

  const selection = useMemo(() => {
    void seed
    if (seed === 1 && featuredItems?.length) {
      const seededItems = featuredItems.slice(0, Math.min(appliedCount, featuredItems.length))

      if (seededItems.length >= appliedCount) {
        return seededItems
      }

      const missingCount = appliedCount - seededItems.length
      const remainingPool = items.filter((item) => !seededItems.some((featured) => featured.id === item.id))
      return [...seededItems, ...pickRandomItems(remainingPool, missingCount, appliedAllowDuplicates, seed)]
    }
    return pickRandomItems(items, appliedCount, appliedAllowDuplicates, seed)
  }, [appliedAllowDuplicates, appliedCount, featuredItems, items, seed])

  function handleGenerate() {
    setAppliedCount(count)
    setAppliedAllowDuplicates(allowDuplicates)
    setSeed((current) => current + 1)
    window.gtag?.('event', 'generate_click', {
      event_category: 'conversion',
      event_label: locale,
      page_path: window.location.pathname,
      count,
      allow_repeats: allowDuplicates,
    })
    window.gtag?.('event', 'generate_visual', {
      event_category: 'engagement',
      event_label: locale,
      page_path: window.location.pathname,
      count,
      allow_repeats: allowDuplicates,
    })
  }

  async function handleCopyItem(item: LocalizedObject) {
    await navigator.clipboard.writeText(item.translation.name)
    setCopiedItemId(item.id)
    window.gtag?.('event', 'copy_result', {
      event_category: 'conversion',
      event_label: locale,
      page_path: window.location.pathname,
      item_id: item.id,
      item_category: item.category,
    })
    window.setTimeout(() => setCopiedItemId(null), 1200)
  }

  return (
    <section id="visual-generator" className="scroll-mt-24 space-y-5">
      <div className="sticky top-16 z-20 rounded-[1.5rem] border border-black/10 bg-white/88 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{ui.visualMode}</p>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
              <h2 className="text-base font-semibold text-slate-950 md:text-lg">{title}</h2>
              <p className="max-w-2xl text-xs leading-5 text-slate-500 md:text-sm">{description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:items-end">
            <div className="flex flex-wrap items-center gap-2">
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600">
                <span>{ui.count}</span>
                <Input
                  type="number"
                  min={1}
                  max={100}
                  value={countInput}
                  onChange={(event) => setCountInput(event.target.value)}
                  className="h-7 w-16 border-0 bg-transparent p-0 text-right shadow-none focus-visible:ring-0"
                />
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={allowDuplicates}
                  onChange={(event) => setAllowDuplicates(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <span>{ui.allowRepeats}</span>
              </label>
              <Button className="gap-2 rounded-full px-4 py-5 text-sm md:px-5" onClick={handleGenerate}>
                <Shuffle className="h-4 w-4" />
                {seed === 1 ? ui.generateCta : ui.generateAgainCta.replace('{count}', String(count))}
              </Button>
            </div>
            {!allowDuplicates && count > items.length ? (
              <p className="text-xs text-slate-500">
                {ui.limitedTo.replace('{count}', String(items.length))}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div
        className={`grid gap-2.5 md:gap-3 ${
          visibleCount === 1
            ? 'grid-cols-1'
            : visibleCount === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : visibleCount === 3
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                : visibleCount === 4
                  ? 'grid-cols-2 xl:grid-cols-4'
                  : visibleCount <= 6
                    ? 'grid-cols-2 md:grid-cols-3 xl:grid-cols-5'
                    : 'grid-cols-2 md:grid-cols-4 xl:grid-cols-6'
        }`}
      >
        {selection.map((item, index) => (
          <Card
            key={`${item.id}-${seed}-${index}`}
            className="overflow-hidden rounded-[1.25rem] border-white/80 bg-white/90 shadow-[0_10px_32px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1"
          >
            <CardHeader className="space-y-0 p-0">
              {item.image ? (
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50">
                  <Image
                    src={item.image}
                    alt={item.imageAltText ?? item.translation.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                    className="object-cover"
                    priority={seed === 1 && index < Math.min(5, selection.length)}
                    placeholder={item.blurDataUrl ? 'blur' : 'empty'}
                    blurDataURL={item.blurDataUrl}
                  />
                </div>
              ) : (
                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-amber-50 via-white to-teal-50 px-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-inner">
                  {item.translation.name}
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-2 px-3.5 py-3.5">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base leading-tight text-slate-950 md:text-lg">{item.translation.name}</CardTitle>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  {item.category}
                </span>
              </div>
              <CardDescription className="line-clamp-2 text-xs leading-5 text-slate-600 md:text-sm">
                {item.translation.description}
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center gap-2 rounded-full"
                onClick={() => void handleCopyItem(item)}
              >
                <Copy className="h-3.5 w-3.5" />
                {copiedItemId === item.id ? ui.copied : ui.copyObject}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
