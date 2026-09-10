'use client'

import { useMemo, useState } from 'react'
import { Copy, ListFilter } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { Locale } from '@/lib/i18n-config'
import type { LocalizedObject } from '@/lib/objects'
import { trustPageCopy } from '@/lib/site-copy'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

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

function pickRandomItems<T>(items: T[], count: number, seed: number) {
  const result: T[] = []
  const random = seededRandom(seed)

  while (result.length < count && items.length > 0) {
    result.push(items[Math.floor(random() * items.length)])
  }

  return result
}

interface BulkGeneratorProps {
  locale: Locale
  items: LocalizedObject[]
  heading: string
  helperText: string
}

export function BulkGenerator({ locale, items, heading, helperText }: BulkGeneratorProps) {
  const ui = trustPageCopy[locale].ui
  const [countInput, setCountInput] = useState('10')
  const [seed, setSeed] = useState(0)
  const [copied, setCopied] = useState(false)

  const count = Math.max(1, Math.min(100, Number.parseInt(countInput || '10', 10) || 10))
  const rows = useMemo(() => {
    return pickRandomItems(items, count, seed + 1)
  }, [count, items, seed])

  async function handleCopy() {
    const payload = rows.map((item, index) => `${index + 1}. ${item.translation.name}`).join('\n')
    await navigator.clipboard.writeText(payload)
    setCopied(true)
    window.gtag?.('event', 'copy_bulk_list', {
      event_category: 'conversion',
      event_label: locale,
      page_path: window.location.pathname,
      count,
    })
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <section id="bulk-generator" className="scroll-mt-24 space-y-5 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.bulkMode}</p>
          <h2 className="text-2xl font-semibold text-slate-900">{heading}</h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">{helperText}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
            <ListFilter className="h-4 w-4 text-slate-500" />
            <span className="text-sm text-slate-600">{ui.count}</span>
            <Input
              type="number"
              min={1}
              max={100}
              value={countInput}
              onChange={(event) => setCountInput(event.target.value)}
              className="h-8 w-20 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => {
              setSeed((current) => current + 1)
              window.gtag?.('event', 'bulk_generate', {
                event_category: 'conversion',
                event_label: locale,
                page_path: window.location.pathname,
                count,
              })
              window.gtag?.('event', 'refresh_bulk_list', {
                event_category: 'engagement',
                event_label: locale,
                page_path: window.location.pathname,
                count,
              })
            }}
          >
            {ui.refreshList}
          </Button>
          <Button className="gap-2 rounded-full" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
            {copied ? ui.copied : ui.copyList}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">#</TableHead>
              <TableHead>{ui.object}</TableHead>
              <TableHead>{ui.descriptionLabel}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((item, index) => (
              <TableRow key={`${item.id}-${index}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <span className="flex items-center gap-3">
                    {item.image ? (
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                        <Image
                          src={item.image}
                          alt={item.imageAltText ?? item.translation.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                          placeholder={item.blurDataUrl ? 'blur' : 'empty'}
                          blurDataURL={item.blurDataUrl}
                        />
                      </span>
                    ) : (
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.translation.name.slice(0, 2)}
                      </span>
                    )}
                    <span>{item.translation.name}</span>
                  </span>
                </TableCell>
                <TableCell className="text-slate-600">{item.translation.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
