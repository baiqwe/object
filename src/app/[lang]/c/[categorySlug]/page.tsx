import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { CategoryLandingContent } from '@/components/CategoryLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import {
  getCategories,
  getCategoryBySlug,
  getCategoryPageSlug,
  getLocalizedCategories,
  getLocalizedObjects,
} from '@/lib/objects'
import { createMetadata } from '@/lib/seo'

type LocalizedCategoryPageProps = {
  params: Promise<{ lang: string; categorySlug: string }>
}

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
}: LocalizedCategoryPageProps): Promise<Metadata> {
  const { lang, categorySlug } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

  const translation = category.i18n[locale] ?? category.i18n.en

  return createMetadata({
    locale,
    title: `${translation.name} Random Generator With Visual Cards`,
    description: translation.description,
    path: `/${getCategoryPageSlug(category.slug)}`,
  })
}

export default async function LocalizedCategoryPage({
  params,
}: LocalizedCategoryPageProps) {
  const { lang, categorySlug } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const translation = category.i18n[locale] ?? category.i18n.en

  return (
    <>
      <GeneratorShell
        locale={locale}
        path={`/${getCategoryPageSlug(category.slug)}`}
        heroEyebrow={translation.shortName ?? translation.name}
        title={`${translation.name} Random Generator`}
        description={translation.description}
        visualTitle={`Generate random ${translation.name.toLowerCase()} prompts`}
        visualDescription={`Each click pulls a fresh ${translation.name.toLowerCase()} pick from the curated ${translation.name.toLowerCase()} set for this page.`}
        bulkTitle={`Build a quick ${translation.name.toLowerCase()} list`}
        bulkDescription={`Need a longer batch for writing sprints, classroom rounds, or improv games? Generate and copy a clean list in one tap.`}
        categories={getLocalizedCategories(locale)}
        items={getLocalizedObjects(locale, category.slug)}
        activeCategorySlug={category.slug}
      />
      {translation.seo ? (
        <CategoryLandingContent
          locale={locale}
          categoryName={translation.name}
          categories={getLocalizedCategories(locale)}
          currentSlug={category.slug}
          content={translation.seo}
        />
      ) : null}
    </>
  )
}
