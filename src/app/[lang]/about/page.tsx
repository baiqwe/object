import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

type LocalizedPageProps = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const content = trustPageCopy[locale].about
  return createMetadata({
    locale,
    title: content.title,
    description: content.description,
    path: '/about',
  })
}

export default async function AboutLocalizedPage({ params }: LocalizedPageProps) {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale

  return <ContentPageShell locale={locale} slug="about" />
}
