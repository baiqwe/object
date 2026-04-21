import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import type { LocalizedCategory } from '@/lib/objects'
import { getLocalizedPath } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

interface RelatedGeneratorsProps {
  locale: Locale
  categories: LocalizedCategory[]
  currentSlug: string
}

export function RelatedGenerators({ locale, categories, currentSlug }: RelatedGeneratorsProps) {
  const related = categories.filter((category) => category.slug !== currentSlug).slice(0, 3)

  if (related.length === 0) {
    return null
  }

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Internal links</p>
      <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{trustPageCopy[locale].ui.relatedGenerators}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {related.map((category) => (
          <Link
            key={category.id}
            href={getLocalizedPath(locale, category.href)}
            className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
          >
            <h3 className="text-xl text-slate-950">{category.translation.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{category.translation.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
