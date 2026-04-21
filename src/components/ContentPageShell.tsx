import { Breadcrumbs } from '@/components/Breadcrumbs'
import type { Locale } from '@/lib/i18n-config'
import { getLocalizedPath } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

interface ContentPageShellProps {
  locale: Locale
  slug: 'about' | 'privacy' | 'terms'
}

export function ContentPageShell({ locale, slug }: ContentPageShellProps) {
  const page = trustPageCopy[locale][slug]
  const ui = trustPageCopy[locale].ui

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: ui.breadcrumbHome, href: '/' },
          { label: page.title, href: `/${slug}` },
        ]}
      />

      <article className="mt-8 rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{page.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl leading-tight text-slate-950 md:text-6xl">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{page.description}</p>

        <div className="mt-10 space-y-6">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
