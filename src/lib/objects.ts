import { cache } from 'react'
import type { Locale } from '@/lib/i18n-config'
import categoriesData from '../../data/json/categories.json'
import objectsData from '../../data/json/objects.json'
import objectsExtraData from '../../data/json/objects-extra.json'
import objectsExpandedData from '../../data/json/objects-expanded.json'
import objectImageMetaData from '../../data/json/object-image-meta.json'
import { siteConfig } from '@/lib/site-config'
import { enrichObjectDescription } from '@/lib/object-copy-enrichment'

type SeoFaq = {
  question: string
  answer: string
}

type SeoReason = {
  title: string
  body: string
}

type SeoContent = {
  introTitle: string
  introBody: string
  reasonsTitle: string
  reasons: SeoReason[]
  useCasesTitle: string
  useCases: string[]
  faqTitle: string
  faqs: SeoFaq[]
  intentTitle?: string
  intentBody?: string
  intentBullets?: string[]
  qualityTitle?: string
  qualityBody?: string
  qualityBullets?: string[]
}

type LocalizedText = {
  name: string
  description: string
  shortName?: string
  seo?: SeoContent
}

export type CategoryRecord = {
  id: string
  slug: string
  accent: string
  i18n: Record<Locale, LocalizedText>
}

export type ObjectRecord = {
  id: string
  category: string
  icon: string
  image?: string
  blurDataUrl?: string
  imageAlt?: Partial<Record<Locale, string>>
  i18n: Record<Locale, LocalizedText>
}

export type LocalizedCategory = CategoryRecord & {
  translation: LocalizedText
  href: string
}

export type LocalizedObject = ObjectRecord & {
  translation: LocalizedText
  imageAltText?: string
}

const categoryFallbackImages: Record<string, string[]> = {
  animals: [
    '/images/objects/animal-fox.webp',
    '/images/objects/animal-rabbit.webp',
    '/images/objects/animal-owl.webp',
    '/images/objects/animal-butterfly.webp',
    '/images/objects/animal-elephant.webp',
    '/images/objects/animal-lion.webp',
    '/images/objects/animal-penguin.webp',
    '/images/objects/animal-turtle.webp',
    '/images/objects/animal-giraffe.webp',
    '/images/objects/animal-octopus.webp',
  ],
  household: [
    '/images/objects/house-chair.webp',
    '/images/objects/house-lamp.webp',
    '/images/objects/house-clock.webp',
    '/images/objects/house-key.webp',
    '/images/objects/house-kettle.webp',
    '/images/objects/house-pillow.webp',
    '/images/objects/house-broom.webp',
    '/images/objects/house-frying-pan.webp',
    '/images/objects/house-toothbrush.webp',
    '/images/objects/house-umbrella.webp',
  ],
  food: [
    '/images/objects/food-apple.webp',
    '/images/objects/food-banana.webp',
    '/images/objects/food-pizza.webp',
    '/images/objects/food-sushi.webp',
    '/images/objects/food-croissant.webp',
    '/images/objects/food-ice-cream.webp',
    '/images/objects/food-popcorn.webp',
    '/images/objects/food-ramen.webp',
    '/images/objects/food-taco.webp',
    '/images/objects/food-birthday-cake.webp',
  ],
  nature: [
    '/images/objects/nature-cactus.webp',
    '/images/objects/nature-sunflower.webp',
    '/images/objects/nature-maple-leaf.webp',
    '/images/objects/nature-mushroom.webp',
    '/images/objects/nature-pinecone.webp',
    '/images/objects/nature-shell.webp',
    '/images/objects/nature-cloud.webp',
    '/images/objects/nature-rainbow.webp',
    '/images/objects/nature-moon.webp',
    '/images/objects/nature-waterfall.webp',
  ],
  funny: [
    '/images/objects/funny-rubber-duck.webp',
    '/images/objects/funny-party-hat.webp',
    '/images/objects/funny-yoyo.webp',
    '/images/objects/funny-disco-ball.webp',
    '/images/objects/funny-confetti.webp',
    '/images/objects/funny-tiny-crown.webp',
    '/images/objects/funny-pirate-hat.webp',
    '/images/objects/funny-clown-nose.webp',
    '/images/objects/funny-banana-phone.webp',
    '/images/objects/funny-toothbrush-mustache.webp',
  ],
}

export const getCategories = cache((): CategoryRecord[] => {
  return categoriesData as CategoryRecord[]
})

function getStableIndex(value: string, length: number) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }

  return hash % length
}

function getFallbackImage(item: ObjectRecord) {
  const images = categoryFallbackImages[item.category]

  if (!images?.length) {
    return undefined
  }

  return images[getStableIndex(item.id, images.length)]
}

function resolveObjectImageUrl(image?: string) {
  if (!image || !siteConfig.objectImageBaseUrl || /^https?:\/\//i.test(image)) {
    return image
  }

  return `${siteConfig.objectImageBaseUrl}${image.startsWith('/') ? image : `/${image}`}`
}

export const getObjects = cache((): ObjectRecord[] => {
  const baseObjects = [
    ...(objectsData as ObjectRecord[]),
    ...(objectsExtraData as ObjectRecord[]),
    ...(objectsExpandedData as ObjectRecord[]),
  ]
  const imageMeta = objectImageMetaData as Record<
    string,
    { image?: string; blurDataUrl?: string; alt?: Partial<Record<Locale, string>> }
  >

  return baseObjects.map((item) => ({
    ...item,
    image: resolveObjectImageUrl(imageMeta[item.id]?.image ?? item.image ?? getFallbackImage(item)),
    blurDataUrl: imageMeta[item.id]?.blurDataUrl,
    imageAlt: imageMeta[item.id]?.alt,
  }))
})

export function getCategoryPageSlug(slug: string) {
  return `random-${slug}-generator`
}

export function getCategoryBySlug(slug: string) {
  return getCategories().find((category) => category.slug === slug) ?? null
}

export function getObjectsByCategory(slug: string) {
  return getObjects().filter((item) => item.category === slug)
}

export function getObjectsByCategories(slugs: string[]) {
  const slugSet = new Set(slugs)
  return getObjects().filter((item) => slugSet.has(item.category))
}

export function localizeCategory(category: CategoryRecord, locale: Locale): LocalizedCategory {
  return {
    ...category,
    translation: category.i18n[locale] ?? category.i18n.en,
    href: `/${getCategoryPageSlug(category.slug)}`,
  }
}

export function localizeObject(item: ObjectRecord, locale: Locale): LocalizedObject {
  const translation = item.i18n[locale] ?? item.i18n.en
  const enrichedI18n = (Object.entries(item.i18n) as Array<[Locale, LocalizedText]>).reduce(
    (result, [entryLocale, entryTranslation]) => {
      result[entryLocale] = {
        ...entryTranslation,
        description: enrichObjectDescription(item, entryLocale, entryTranslation.description),
      }
      return result
    },
    {} as Record<Locale, LocalizedText>
  )

  return {
    ...item,
    i18n: enrichedI18n,
    translation: {
      ...translation,
      description: enrichObjectDescription(item, locale, translation.description),
    },
    imageAltText:
      item.imageAlt?.[locale] ??
      item.imageAlt?.en ??
      item.i18n[locale]?.name ??
      item.i18n.en.name,
  }
}

export function getLocalizedCategories(locale: Locale) {
  return getCategories().map((category) => localizeCategory(category, locale))
}

export function getLocalizedObjects(locale: Locale, categorySlug?: string) {
  const records = categorySlug ? getObjectsByCategory(categorySlug) : getObjects()
  return records.map((item) => localizeObject(item, locale))
}

export function getLocalizedObjectsByCategories(locale: Locale, categorySlugs: string[]) {
  return getObjectsByCategories(categorySlugs).map((item) => localizeObject(item, locale))
}
