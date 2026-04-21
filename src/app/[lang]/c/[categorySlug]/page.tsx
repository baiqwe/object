import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import {
  getCategories,
  getCategoryBySlug,
  getCategoryPageSlug,
  getLocalizedCategories,
  getLocalizedObjects,
} from '@/lib/objects'
import { createMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    getCategories().map((category) => ({
      lang,
      categorySlug: category.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; categorySlug: string }
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.categorySlug)

  if (!category) {
    return {}
  }

  const translation = category.i18n[params.lang] ?? category.i18n.en

  return createMetadata({
    title: `${translation.name} Random Generator With Visual Cards`,
    description: translation.description,
    path: `/${getCategoryPageSlug(category.slug)}`,
  })
}

export default function LocalizedCategoryPage({
  params,
}: {
  params: { lang: Locale; categorySlug: string }
}) {
  const category = getCategoryBySlug(params.categorySlug)

  if (!category) {
    notFound()
  }

  const translation = category.i18n[params.lang] ?? category.i18n.en

  return (
    <GeneratorShell
      locale={params.lang}
      path={`/${getCategoryPageSlug(category.slug)}`}
      heroEyebrow={translation.shortName ?? translation.name}
      title={`${translation.name} Random Generator`}
      description={translation.description}
      visualTitle={`Generate random ${translation.name.toLowerCase()} prompts`}
      visualDescription={`Each click pulls a fresh ${translation.name.toLowerCase()} pick from the curated ${translation.name.toLowerCase()} set for this page.`}
      bulkTitle={`Build a quick ${translation.name.toLowerCase()} list`}
      bulkDescription={`Need a longer batch for writing sprints, classroom rounds, or improv games? Generate and copy a clean list in one tap.`}
      categories={getLocalizedCategories(params.lang)}
      items={getLocalizedObjects(params.lang, category.slug)}
      activeCategorySlug={category.slug}
    />
  )
}
