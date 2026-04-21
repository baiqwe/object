import './globals.css'
import { headers } from 'next/headers'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
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
    icon: [{ url: '/favicon.ico' }],
  },
  manifest: '/site.webmanifest',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const currentLocale = headers().get('x-current-locale') || 'en'

  return (
    <html lang={currentLocale}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
