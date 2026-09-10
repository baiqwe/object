'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocalizedCategories } from '@/lib/objects'
import { getLocalizedPath } from '@/lib/seo'
import { getLocaleFromPath, i18n } from '@/lib/i18n-config'
import { siteConfig } from '@/lib/site-config'
import { trustPageCopy } from '@/lib/site-copy'

export function Footer() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname) || i18n.defaultLocale
  const ui = trustPageCopy[locale].ui
  const categories = getLocalizedCategories(locale).slice(0, 4)

  return (
    <footer className="border-t border-black/5 bg-[#f7f3ea]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">{ui.legal}</h3>
          <p className="mt-4 text-base text-slate-500">
            {locale === 'zh'
              ? `${siteConfig.name} 是一个面向绘画、课堂、写作和小游戏的多语言随机物品工具。`
              : locale === 'ja'
                ? `${siteConfig.name} は、描画、授業、文章作成、ゲーム向けの多言語ランダムオブジェクトツールです。`
                : `${siteConfig.name} is a lightweight multilingual tool for random prompts, object lists, and category-driven idea generation.`}
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href={getLocalizedPath(locale, '/about')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.about}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/privacy')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.privacy}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/terms')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.terms}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/contact')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.contact}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/editorial-policy')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.editorialPolicy}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">{ui.quickLinks}</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href={getLocalizedPath(locale, '/')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.home}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/random-object-generator')} className="text-base text-slate-500 hover:text-slate-900">
                Random object generator
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/random-object-to-draw')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.drawPromptsLink}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath(locale, '/random-objects-for-kids')} className="text-base text-slate-500 hover:text-slate-900">
                {ui.kidsObjectsLink}
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={getLocalizedPath(locale, category.href)} className="text-base text-slate-500 hover:text-slate-900">
                  {category.translation.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">{ui.connect}</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href={siteConfig.repositoryUrl} target="_blank" rel="noreferrer" className="text-base text-slate-500 hover:text-slate-900">
                {ui.sourceCode}
              </a>
            </li>
            <li>
              <a href={siteConfig.feedbackUrl} target="_blank" rel="noreferrer" className="text-base text-slate-500 hover:text-slate-900">
                {ui.reportIssue}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-base text-slate-500 hover:text-slate-900">
                {ui.emailUs}: {siteConfig.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-black/5 px-4 py-8 text-center text-base text-slate-400 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
