import { Metadata } from 'next'
import { HomeLandingContent } from '@/components/HomeLandingContent'
import { i18n, type Locale } from '@/lib/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import { getLocalizedCategories, getLocalizedObjects } from '@/lib/objects'
import { createMetadata } from '@/lib/seo'

type LocalizedHomePageProps = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: LocalizedHomePageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const dict = await getDictionary(locale)

  return createMetadata({
    locale,
    title: dict.home.seoTitle,
    description: dict.home.description,
    path: '/',
  })
}

export default async function Home({ params }: LocalizedHomePageProps) {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const dict = await getDictionary(locale)
  const categories = getLocalizedCategories(locale)

  return (
    <>
      <GeneratorShell
        locale={locale}
        path="/"
        heroEyebrow={dict.home.eyebrow}
        title={dict.home.title}
        description={dict.home.description}
        visualTitle={dict.home.visualTitle}
        visualDescription={dict.home.visualDescription}
        bulkTitle={dict.home.bulkTitle}
        bulkDescription={dict.home.bulkDescription}
        categories={categories}
        items={getLocalizedObjects(locale)}
      />
      <HomeLandingContent locale={locale} categories={categories} content={dict.home.landing} />
    </>
  )
}
