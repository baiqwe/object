import type { Metadata } from 'next'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: trustPageCopy.en.about.title,
  description: trustPageCopy.en.about.description,
  path: '/about',
})

export default function AboutPage() {
  return <ContentPageShell locale="en" slug="about" />
}
