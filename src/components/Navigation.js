'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github } from 'lucide-react'
import { cn } from "@/lib/utils"
import LanguageSwitcher from '@/components/LanguageSwitcher'
import LanguageSuggestion from '@/components/LanguageSuggestion'
import { i18n, getLocaleFromPath } from '@/lib/i18n-config'
import enDict from '@/dictionaries/en.json'
import zhDict from '@/dictionaries/zh.json'
import jaDict from '@/dictionaries/ja.json'
import { siteConfig } from '@/lib/site-config'

const dictionaries = {
  en: enDict,
  zh: zhDict,
  ja: jaDict,
}

export function Navigation() {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname) || i18n.defaultLocale
  const dict = dictionaries[currentLocale]

  const getLocalizedPath = (path) => {
    if (currentLocale === i18n.defaultLocale) {
      return path
    }
    return `/${currentLocale}${path}`
  }

  const navItems = [
    { path: '/', label: dict.navigation.home },
    ...siteConfig.featuredCategories.map((slug) => ({
      path: `/random-${slug}-generator`,
      label: dict.navigation.categories[slug],
    })),
  ]

  return (
    <>
      <LanguageSuggestion currentLocale={currentLocale} currentPath={pathname} />
      <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex min-w-0 gap-6 md:gap-10">
            <Link href={getLocalizedPath('/')} className="flex items-center space-x-2">
              <span className="inline-block font-serif text-2xl font-semibold tracking-tight text-slate-950">
                {siteConfig.shortName}
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => {
                const localizedPath = getLocalizedPath(item.path)
                return (
                  <Link
                    key={item.path}
                    href={localizedPath}
                    className={cn(
                      "flex items-center text-sm font-medium text-slate-500 transition hover:text-slate-900",
                      pathname === localizedPath && "text-slate-950"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLocale={currentLocale} />
            <Link
              href="https://github.com/baiqwe/GitBase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-950"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
