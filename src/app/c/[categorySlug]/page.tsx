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
import { getCategoryPageCopy } from '@/lib/category-page-copy'
import { createMetadata } from '@/lib/seo'
import { getLocalizedIntentLinks } from '@/lib/intent-pages'

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>
}

const defaultIntentLinkPriority = [
  'random-object-games',
  'classroom-random-object-activities',
  'esl-object-vocabulary-games',
  'random-animal-to-draw',
  'random-food-picker',
  'random-object-picker',
  'random-esl-vocabulary-generator',
  'random-charades-generator',
  'animal-prompt-generator',
  'random-object-list-generator',
  'random-object-to-draw',
  'random-objects-for-esl',
  'random-objects-for-charades',
  'random-objects-for-classroom',
]

const intentLinkPriorityByCategory: Record<string, string[]> = {
  animals: [
    'random-animal-to-draw',
    'animal-prompt-generator',
    'random-objects-for-charades',
    'random-esl-vocabulary-generator',
  ],
  food: [
    'random-food-picker',
    'random-object-games',
    'random-objects-for-pictionary',
    'esl-object-vocabulary-games',
  ],
  household: [
    'random-objects-for-charades',
    'random-objects-for-pictionary',
    'random-object-list-generator',
    'classroom-random-object-activities',
  ],
  nature: [
    'random-object-to-draw',
    'easy-objects-to-draw',
    'random-animal-to-draw',
    'random-objects-for-storytelling',
  ],
}

export function generateStaticParams() {
  return getCategories().map((category) => ({
    categorySlug: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

  const copy = getCategoryPageCopy(category, 'en')

  return createMetadata({
    locale: 'en',
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: `/${getCategoryPageSlug(category.slug)}`,
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const copy = getCategoryPageCopy(category, 'en')
  const linkPriority = intentLinkPriorityByCategory[category.slug] ?? defaultIntentLinkPriority
  const intentLinks = getLocalizedIntentLinks('en')
    .filter((link) => link.categories.includes(category.slug))
    .sort((a, b) => {
      const aIndex = linkPriority.indexOf(a.href.slice(1))
      const bIndex = linkPriority.indexOf(b.href.slice(1))
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex)
    })
    .slice(0, 4)
  const quickLinks = intentLinks.map(({ href, title }) => ({ href, label: title }))
  const editorialLinks = intentLinks.map(({ href, title, description }) => ({ href, label: title, description }))

  return (
    <>
      <GeneratorShell
        locale="en"
        path={`/${getCategoryPageSlug(category.slug)}`}
        heroEyebrow={category.i18n.en.shortName ?? category.i18n.en.name}
        title={copy.title}
        description={copy.description}
        visualTitle={copy.visualTitle}
        visualDescription={copy.visualDescription}
        bulkTitle={copy.bulkTitle}
        bulkDescription={copy.bulkDescription}
        categories={getLocalizedCategories('en')}
        items={getLocalizedObjects('en', category.slug)}
        activeCategorySlug={category.slug}
        quickLinks={quickLinks}
      />
      {category.i18n.en.seo ? (
        <CategoryLandingContent
          locale="en"
          categoryName={category.i18n.en.name}
          categories={getLocalizedCategories('en')}
          sampleItems={getLocalizedObjects('en', category.slug)}
          currentSlug={category.slug}
          editorialLinks={editorialLinks}
          content={category.i18n.en.seo}
        />
      ) : null}
    </>
  )
}
