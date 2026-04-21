import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { siteConfig } from '@/lib/site-config'

function joinUrl(base: string, path: string) {
  return new URL(path, base).toString()
}

export function getLocalizedPath(locale: Locale, path: string) {
  if (locale === i18n.defaultLocale) {
    return path
  }

  return `/${locale}${path}`
}

export function buildAlternates(path: string) {
  const languages = Object.fromEntries(
    i18n.locales.map((locale) => [locale, joinUrl(siteConfig.baseUrl, getLocalizedPath(locale, path))])
  )

  return {
    canonical: joinUrl(siteConfig.baseUrl, path),
    languages,
  }
}

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      title,
      description,
      url: joinUrl(siteConfig.baseUrl, path),
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function buildWebApplicationJsonLd({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale
  title: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    inLanguage: locale,
    description,
    url: joinUrl(siteConfig.baseUrl, getLocalizedPath(locale, path)),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}
