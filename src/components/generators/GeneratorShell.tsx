import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import { buildSoftwareApplicationJsonLd, getLocalizedPath } from '@/lib/seo'
import type { LocalizedCategory, LocalizedObject } from '@/lib/objects'
import { BulkGenerator } from '@/components/generators/BulkGenerator'
import { VisualGenerator } from '@/components/generators/VisualGenerator'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { trustPageCopy } from '@/lib/site-copy'

interface GeneratorShellProps {
  locale: Locale
  path: string
  heroEyebrow: string
  title: string
  description: string
  visualTitle: string
  visualDescription: string
  bulkTitle: string
  bulkDescription: string
  categories: LocalizedCategory[]
  items: LocalizedObject[]
  activeCategorySlug?: string
}

export function GeneratorShell({
  locale,
  path,
  heroEyebrow,
  title,
  description,
  visualTitle,
  visualDescription,
  bulkTitle,
  bulkDescription,
  categories,
  items,
  activeCategorySlug,
}: GeneratorShellProps) {
  const jsonLd = buildSoftwareApplicationJsonLd({
    locale,
    title,
    description,
    path,
  })

  const breadcrumbItems = activeCategorySlug
    ? [
        { label: trustPageCopy[locale].ui.breadcrumbHome, href: '/' },
        { label: title, href: path },
      ]
    : null
  const ui = trustPageCopy[locale].ui

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.24),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(45,212,191,0.25),_transparent_38%),linear-gradient(180deg,_#fffaf0_0%,_#ffffff_58%)]" />
      <div className="container mx-auto space-y-10 px-4 py-10 md:px-6 md:py-14">
        {breadcrumbItems ? <Breadcrumbs locale={locale} items={breadcrumbItems} /> : null}

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{heroEyebrow}</p>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
                {title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const href = getLocalizedPath(locale, category.href)
                const isActive = category.slug === activeCategorySlug

                return (
                  <Link
                    key={category.id}
                    href={href}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-slate-950 text-white'
                        : 'border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {category.translation.shortName ?? category.translation.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">{ui.featureRandomTitle}</p>
                <p className="mt-3 text-4xl font-semibold">{ui.featureRandomValue}</p>
                <p className="mt-2 text-sm text-white/70">{ui.featureRandomBody}</p>
              </div>
              <div className="rounded-[1.5rem] bg-gradient-to-br from-amber-100 to-rose-100 p-5 text-slate-900">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{ui.featureCopyTitle}</p>
                <p className="mt-3 text-4xl font-semibold">{items.length}</p>
                <p className="mt-2 text-sm text-slate-600">{ui.featureCopyBody}</p>
              </div>
            </div>
          </div>
        </section>

        <VisualGenerator items={items} title={visualTitle} description={visualDescription} />
        <BulkGenerator items={items} heading={bulkTitle} helperText={bulkDescription} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
