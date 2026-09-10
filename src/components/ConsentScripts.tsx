'use client'

import Script from 'next/script'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getLocaleFromPath, type Locale } from '@/lib/i18n-config'

const CONSENT_KEY = 'rog_cookie_consent'
const ADSENSE_CLIENT = 'ca-pub-2499950673294937'
const GA_MEASUREMENT_ID = 'G-X4MF66BLMK'

type ConsentChoice = 'accepted' | 'declined'

const bannerCopy: Record<
  Locale,
  {
    body: string
    privacy: string
    decline: string
    accept: string
  }
> = {
  en: {
    body:
      'We use Google Analytics and may use Google AdSense cookies to measure usage and show ads. Personalized ad signals stay disabled. You can accept or decline non-essential cookies.',
    privacy: 'Privacy policy',
    decline: 'Decline',
    accept: 'Accept',
  },
  zh: {
    body:
      '我们使用 Google Analytics，并可能使用 Google AdSense Cookie 来衡量使用情况和展示广告。个性化广告信号默认保持关闭，你可以接受或拒绝非必要 Cookie。',
    privacy: '隐私政策',
    decline: '拒绝',
    accept: '接受',
  },
  ja: {
    body:
      'Google Analytics と Google AdSense Cookie を使用して、利用状況の測定や広告表示を行う場合があります。パーソナライズ広告の信号は初期状態で無効です。不要な Cookie は拒否できます。',
    privacy: 'プライバシーポリシー',
    decline: '拒否',
    accept: '同意',
  },
}

function readConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(CONSENT_KEY)
  return value === 'accepted' || value === 'declined' ? value : null
}

export function ConsentScripts() {
  const pathname = usePathname()
  const [consent, setConsent] = useState<ConsentChoice | null>(null)
  const locale = getLocaleFromPath(pathname) ?? 'en'
  const copy = bannerCopy[locale]
  const privacyHref = locale === 'en' ? '/privacy' : `/${locale}/privacy`

  useEffect(() => {
    setConsent(readConsent())
  }, [])

  useEffect(() => {
    if (!consent || typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return
    }

    window.gtag('consent', 'update', {
      ad_storage: consent === 'accepted' ? 'granted' : 'denied',
      analytics_storage: consent === 'accepted' ? 'granted' : 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
  }, [consent])

  function saveConsent(choice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_KEY, choice)
    setConsent(choice)
  }

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
        `}
      </Script>

      {consent === 'accepted' ? (
        <>
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.gtag('js', new Date());
              window.gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-[0_-12px_40px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-slate-700">
              {copy.body}{' '}
              <Link href={privacyHref} className="font-medium text-slate-950 underline underline-offset-4">
                {copy.privacy}
              </Link>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => saveConsent('declined')}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                {copy.decline}
              </button>
              <button
                type="button"
                onClick={() => saveConsent('accepted')}
                className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                {copy.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}
