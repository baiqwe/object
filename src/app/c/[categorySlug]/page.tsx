import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
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

export function generateStaticParams() {
  return getCategories().map((category) => ({
    categorySlug: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string }
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.categorySlug)

  if (!category) {
    return {}
  }

  return createMetadata({
    locale: 'en',
    title: `${category.i18n.en.name} Random Generator With Visual Cards`,
    description: category.i18n.en.description,
    path: `/${getCategoryPageSlug(category.slug)}`,
  })
}

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const category = getCategoryBySlug(params.categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <>
      <GeneratorShell
        locale="en"
        path={`/${getCategoryPageSlug(category.slug)}`}
        heroEyebrow={category.i18n.en.shortName ?? category.i18n.en.name}
        title={`${category.i18n.en.name} Random Generator`}
        description={category.i18n.en.description}
        visualTitle={`Generate random ${category.i18n.en.name.toLowerCase()} prompts`}
        visualDescription={`Each click pulls a fresh ${category.i18n.en.name.toLowerCase()} pick from the curated ${category.i18n.en.name.toLowerCase()} set for this page.`}
        bulkTitle={`Build a quick ${category.i18n.en.name.toLowerCase()} list`}
        bulkDescription={`Need a longer batch for writing sprints, classroom rounds, or improv games? Generate and copy a clean list in one tap.`}
        categories={getLocalizedCategories('en')}
        items={getLocalizedObjects('en', category.slug)}
        activeCategorySlug={category.slug}
      />
      {category.i18n.en.seo ? (
        <CategoryLandingContent
          locale="en"
          categoryName={category.i18n.en.name}
          categories={getLocalizedCategories('en')}
          currentSlug={category.slug}
          content={category.i18n.en.seo}
        />
      ) : null}
    </>
  )
}
