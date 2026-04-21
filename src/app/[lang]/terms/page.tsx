import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const content = trustPageCopy[params.lang].terms
  return createMetadata({
    locale: params.lang,
    title: content.title,
    description: content.description,
    path: '/terms',
  })
}

export default function TermsLocalizedPage({ params }: { params: { lang: Locale } }) {
  return <ContentPageShell locale={params.lang} slug="terms" />
}
