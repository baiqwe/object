import './globals.css'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import { ConsentScripts } from '@/components/ConsentScripts'
import { siteConfig } from '@/lib/site-config'
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'google-adsense-account': 'ca-pub-2499950673294937',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const organizationJsonLd = buildOrganizationJsonLd()
  const websiteJsonLd = buildWebsiteJsonLd()

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ConsentScripts />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
