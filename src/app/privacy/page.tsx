import type { Metadata } from 'next'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: trustPageCopy.en.privacy.title,
  description: trustPageCopy.en.privacy.description,
  path: '/privacy',
})

export default function PrivacyPage() {
  return <ContentPageShell locale="en" slug="privacy" />
}
