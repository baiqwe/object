import { Metadata } from 'next'
import { HomeLandingContent } from '@/components/HomeLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import { getLocalizedCategories, getLocalizedObjects } from '@/lib/objects'
import { createMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'
import { expandedIntentPageSlugs, getLocalizedIntentLinks } from '@/lib/intent-pages'
import enDict from '@/dictionaries/en.json'

const homepageIntentPriority = [
  'random-object-to-draw',
  'random-animal-to-draw',
  'random-food-picker',
  'random-object-games',
  'random-objects-for-pictionary',
  'random-object-list-generator',
]

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: `${siteConfig.name} With Visual Cards and Copyable Lists`,
  description: siteConfig.description,
  path: '/',
})

export default function Home() {
  const categories = getLocalizedCategories('en')
  const items = getLocalizedObjects('en')
  const featuredItems = ['animal-elephant', 'house-kettle', 'food-apple', 'nature-rainbow', 'funny-rubber-duck']
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const editorialLinks = getLocalizedIntentLinks('en')
    .filter((link) => expandedIntentPageSlugs.includes(link.href.slice(1) as (typeof expandedIntentPageSlugs)[number]))
    .sort((a, b) => {
      const aIndex = homepageIntentPriority.indexOf(a.href.slice(1))
      const bIndex = homepageIntentPriority.indexOf(b.href.slice(1))
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex)
    })
    .map(({ href, title, description }) => ({ href, label: title, description }))
  const quickLinks = editorialLinks.slice(0, 4).map(({ href, label }) => ({ href, label }))
  const trustBlock = {
    title: 'How the homepage stays useful instead of generic',
    lead:
      'The homepage has to do two jobs at once: satisfy broad search intent and help visitors get value fast. That is why it combines a visual generator, a copyable list mode, category links, and deeper editorial intent pages instead of acting like a thin random noun wrapper.',
    bullets: [
      'The object pool is grouped into categories so the homepage can branch into narrower pages without losing focus.',
      'Real object images and localized labels make the results more usable than a bare text-only prompt list.',
      'Related editorial pages give broader search traffic a clearer next click instead of forcing everything through one URL.',
    ],
  }

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
        items={items}
        featuredItems={featuredItems}
        defaultVisualCount={5}
        quickLinks={quickLinks}
      />
      <HomeLandingContent
        locale="en"
        categories={categories}
        sampleItems={items}
        editorialLinks={editorialLinks}
        trustBlock={trustBlock}
        content={enDict.home.landing}
      />
    </>
  )
}
