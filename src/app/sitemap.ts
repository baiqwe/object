import type { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n-config'
import { getCategories, getCategoryPageSlug } from '@/lib/objects'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/random-object-generator', '/about', '/privacy', '/terms']
  const categoryRoutes = getCategories().map((category) => `/${getCategoryPageSlug(category.slug)}`)

  return [...staticRoutes, ...categoryRoutes].flatMap((route) =>
    i18n.locales.map((locale) => ({
      url: new URL(locale === i18n.defaultLocale ? route || '/' : `/${locale}${route}`, siteConfig.baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : route.startsWith('/random-') ? 0.8 : 0.5,
    }))
  )
}
