import { Metadata } from 'next'
import { HomeLandingContent } from '@/components/HomeLandingContent'
import { i18n, type Locale } from '@/lib/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import { getLocalizedCategories, getLocalizedObjects } from '@/lib/objects'
import { createMetadata } from '@/lib/seo'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return createMetadata({
    locale: params.lang,
    title: dict.home.seoTitle,
    description: dict.home.description,
    path: '/',
  })
}

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)
  const categories = getLocalizedCategories(params.lang)

  return (
    <>
      <GeneratorShell
        locale={params.lang}
        path="/"
        heroEyebrow={dict.home.eyebrow}
        title={dict.home.title}
        description={dict.home.description}
        visualTitle={dict.home.visualTitle}
        visualDescription={dict.home.visualDescription}
        bulkTitle={dict.home.bulkTitle}
        bulkDescription={dict.home.bulkDescription}
        categories={categories}
        items={getLocalizedObjects(params.lang)}
      />
      <HomeLandingContent locale={params.lang} categories={categories} content={dict.home.landing} />
    </>
  )
}
