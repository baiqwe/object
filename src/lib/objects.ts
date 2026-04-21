import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import type { Locale } from '@/lib/i18n-config'

type LocalizedText = {
  name: string
  description: string
  shortName?: string
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

const dataPath = (...segments: string[]) => path.join(process.cwd(), 'data', 'json', ...segments)

export const getCategories = cache((): CategoryRecord[] => {
  const contents = fs.readFileSync(dataPath('categories.json'), 'utf8')
  return JSON.parse(contents)
})

export const getObjects = cache((): ObjectRecord[] => {
  const contents = fs.readFileSync(dataPath('objects.json'), 'utf8')
  return JSON.parse(contents)
})

export function getCategoryPageSlug(slug: string) {
  return `random-${slug}-generator`
}

export function getCategorySlugFromPageSlug(pageSlug: string) {
  const match = pageSlug.match(/^random-(.+)-generator$/)
  return match?.[1] ?? null
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
