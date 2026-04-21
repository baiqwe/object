import type { Metadata } from 'next'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: trustPageCopy.en.terms.title,
  description: trustPageCopy.en.terms.description,
  path: '/terms',
})

export default function TermsPage() {
  return <ContentPageShell locale="en" slug="terms" />
}
