import { Metadata } from 'next'
import { HomeLandingContent } from '@/components/HomeLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import { getLocalizedCategories, getLocalizedObjects } from '@/lib/objects'
import { createMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'
import enDict from '@/dictionaries/en.json'

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: `${siteConfig.name} With Visual Cards and Copyable Lists`,
  description: siteConfig.description,
  path: '/',
})

export default function Home() {
  const categories = getLocalizedCategories('en')

  return (
    <>
      <GeneratorShell
        locale="en"
        path="/"
        heroEyebrow="Fast visual prompt tool"
        title="Random Object Generator"
        description="Generate random objects in a cleaner, more visual way. Use it for drawing prompts, icebreakers, improv games, naming sessions, and classroom warmups."
        visualTitle="Draw a random object in one click"
        visualDescription="Use visual mode when you want a fast object prompt with a little more personality than a plain text list."
        bulkTitle="Generate a batch and copy it"
        bulkDescription="Need ten or a hundred prompt ideas at once? Bulk mode creates a quick list you can copy into docs, slides, or worksheets."
        categories={categories}
        items={getLocalizedObjects('en')}
      />
      <HomeLandingContent locale="en" categories={categories} content={enDict.home.landing} />
    </>
  )
}
