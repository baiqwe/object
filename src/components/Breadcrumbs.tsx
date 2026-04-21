import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import { buildBreadcrumbJsonLd, getLocalizedPath } from '@/lib/seo'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  locale: Locale
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  const jsonLd = buildBreadcrumbJsonLd({
    locale,
    items,
  })

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <span key={`${item.href}-${item.label}`} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-slate-900">{item.label}</span>
              ) : (
                <Link href={getLocalizedPath(locale, item.href)} className="hover:text-slate-900">
                  {item.label}
                </Link>
              )}
              {!isLast ? <span>/</span> : null}
            </span>
          )
        })}
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
