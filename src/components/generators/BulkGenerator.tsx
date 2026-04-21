'use client'

import { useMemo, useState } from 'react'
import { Copy, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { LocalizedObject } from '@/lib/objects'

function pickRandomItems<T>(items: T[], count: number) {
  const result: T[] = []

  while (result.length < count && items.length > 0) {
    result.push(items[Math.floor(Math.random() * items.length)])
  }

  return result
}

interface BulkGeneratorProps {
  items: LocalizedObject[]
  heading: string
  helperText: string
}

export function BulkGenerator({ items, heading, helperText }: BulkGeneratorProps) {
  const [countInput, setCountInput] = useState('10')
  const [seed, setSeed] = useState(0)
  const [copied, setCopied] = useState(false)

  const count = Math.max(1, Math.min(100, Number.parseInt(countInput || '10', 10) || 10))
  const rows = useMemo(() => {
    void seed
    return pickRandomItems(items, count)
  }, [count, items, seed])

  async function handleCopy() {
    const payload = rows.map((item, index) => `${index + 1}. ${item.translation.name}`).join('\n')
    await navigator.clipboard.writeText(payload)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <section className="space-y-5 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Bulk mode</p>
          <h2 className="text-2xl font-semibold text-slate-900">{heading}</h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">{helperText}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
            <ListFilter className="h-4 w-4 text-slate-500" />
            <Input
              type="number"
              min={1}
              max={100}
              value={countInput}
              onChange={(event) => setCountInput(event.target.value)}
              className="h-8 w-20 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <Button variant="outline" className="rounded-full" onClick={() => setSeed((current) => current + 1)}>
            Refresh list
          </Button>
          <Button className="gap-2 rounded-full" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
            {copied ? 'Copied' : 'Copy list'}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">#</TableHead>
              <TableHead>Object</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((item, index) => (
              <TableRow key={`${item.id}-${index}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <span className="mr-2">{item.icon}</span>
                  {item.translation.name}
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
