import type { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n-config'
import { getCategories, getCategoryPageSlug } from '@/lib/objects'
import { intentPages } from '@/lib/intent-pages'
import { siteConfig } from '@/lib/site-config'

const siteLastModified = new Date('2026-07-16T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/random-object-generator',
    '/about',
    '/privacy',
    '/terms',
    '/contact',
    '/editorial-policy',
  ]
  const categoryRoutes = getCategories().map((category) => `/${getCategoryPageSlug(category.slug)}`)
  const intentRoutes = intentPages.map((page) => `/${page.slug}`)

  return [...staticRoutes, ...categoryRoutes, ...intentRoutes].flatMap((route) =>
    i18n.locales.map((locale) => ({
      url: new URL(locale === i18n.defaultLocale ? route || '/' : `/${locale}${route}`, siteConfig.baseUrl).toString(),
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : route.startsWith('/random-') ? 0.8 : 0.5,
    }))
  )
}
