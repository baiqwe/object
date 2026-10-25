import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { siteConfig } from '@/lib/site-config'

type FaqItem = {
  question: string
  answer: string
}

type BreadcrumbItem = {
  label: string
  href: string
}

function joinUrl(base: string, path: string) {
  return new URL(path, base).toString()
}

export function getLocalizedPath(locale: Locale, path: string) {
  if (locale === i18n.defaultLocale) {
    return path
  }

  if (path === '/') {
    return `/${locale}`
  }

  return `/${locale}${path}`
}

export function buildAlternates(path: string) {
  return Object.fromEntries([
    ...i18n.locales.map((locale) => [locale, joinUrl(siteConfig.baseUrl, getLocalizedPath(locale, path))]),
    ['x-default', joinUrl(siteConfig.baseUrl, path)],
  ])
}

export function createMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale
  title: string
  description: string
  path: string
}): Metadata {
  const localizedPath = getLocalizedPath(locale, path)

  return {
    title,
    description,
    alternates: {
      canonical: joinUrl(siteConfig.baseUrl, localizedPath),
      languages: buildAlternates(path),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: joinUrl(siteConfig.baseUrl, localizedPath),
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

export function buildSoftwareApplicationJsonLd({
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
    '@type': 'SoftwareApplication',
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

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: joinUrl(siteConfig.baseUrl, '/apple-touch-icon.png'),
    email: siteConfig.contactEmail,
    sameAs: [siteConfig.repositoryUrl],
  }
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    inLanguage: ['en', 'zh', 'ja'],
  }
}

export function buildFaqJsonLd({
  faqs,
}: {
  faqs: FaqItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale
  items: BreadcrumbItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: joinUrl(siteConfig.baseUrl, getLocalizedPath(locale, item.href)),
    })),
  }
}
