import { cache } from 'react'
import type { Locale } from '@/lib/i18n-config'
import categoriesData from '../../data/json/categories.json'
import objectsData from '../../data/json/objects.json'

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
  i18n: Record<Locale, LocalizedText>
}

export type LocalizedCategory = CategoryRecord & {
  translation: LocalizedText
  href: string
}

export type LocalizedObject = ObjectRecord & {
  translation: LocalizedText
}

export const getCategories = cache((): CategoryRecord[] => {
  return categoriesData as CategoryRecord[]
})

export const getObjects = cache((): ObjectRecord[] => {
  return objectsData as ObjectRecord[]
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

export function localizeCategory(category: CategoryRecord, locale: Locale): LocalizedCategory {
  return {
    ...category,
    translation: category.i18n[locale] ?? category.i18n.en,
    href: `/${getCategoryPageSlug(category.slug)}`,
  }
}

export function localizeObject(item: ObjectRecord, locale: Locale): LocalizedObject {
  return {
    ...item,
    translation: item.i18n[locale] ?? item.i18n.en,
  }
}

export function getLocalizedCategories(locale: Locale) {
  return getCategories().map((category) => localizeCategory(category, locale))
}

export function getLocalizedObjects(locale: Locale, categorySlug?: string) {
  const records = categorySlug ? getObjectsByCategory(categorySlug) : getObjects()
  return records.map((item) => localizeObject(item, locale))
}
