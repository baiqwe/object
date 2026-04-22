import './globals.css'
import { headers } from 'next/headers'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'

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
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const requestHeaders = await headers()
  const currentLocale = requestHeaders.get('x-current-locale') || 'en'

  return (
    <html lang={currentLocale}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X4MF66BLMK"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X4MF66BLMK');
          `}
        </Script>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
