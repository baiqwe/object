import { HomeLandingContent } from '@/components/HomeLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import type { Locale } from '@/lib/i18n-config'
import { getLocalizedPath } from '@/lib/seo'
import { getLocalizedIntentLinks, type IntentPageConfig } from '@/lib/intent-pages'
import {
  getLocalizedCategories,
  getLocalizedObjectsByCategories,
  type LocalizedCategory,
} from '@/lib/objects'
import { trustPageCopy } from '@/lib/site-copy'

type IntentPageContentProps = {
  locale: Locale
  path: string
  intentPage: IntentPageConfig
}

export function IntentPageContent({ locale, path, intentPage }: IntentPageContentProps) {
  const copy = intentPage.i18n[locale] ?? intentPage.i18n.en
  const categories = getLocalizedCategories(locale).filter((category) =>
    intentPage.categories.includes(category.slug)
  )
  const items = getLocalizedObjectsByCategories(locale, intentPage.categories)
  const sampleItems = buildSampleItems(items, intentPage.exampleObjectIds)
  const featuredItems = buildFeaturedItems(categories, items)
  const landingContent = withAuditDepthContent({
    locale,
    title: copy.title,
    content: copy.landing,
    categories,
    sampleItems,
  })
  const editorialLinks = getLocalizedIntentLinks(locale)
    .filter((link) => link.href !== path)
    .filter((link) => intentPage.categories.some((category) => link.categories.includes(category)))
    .slice(0, 4)
    .map(({ href, title, description }) => ({ href, label: title, description }))
  const trustBlock = {
    en: {
      title: `Why this ${copy.title.toLowerCase()} page exists`,
      lead:
        'Intent pages should do more than restate the homepage. This page narrows the object pool, examples, and copy around one usage pattern so the visitor gets a clearer answer and Google sees a clearer topic.',
      bullets: [
        'The object set is filtered around a narrower use case.',
        'The examples and FAQ are written for this intent, not copied from the homepage.',
        'The page stays connected to nearby intents and categories through internal links.',
      ],
    },
    zh: {
      title: `为什么要单独做这个“${copy.title}”页面`,
      lead:
        '专题页不该只是把首页换个标题。这个页面会围绕一个更明确的使用场景来筛选对象池、示例和正文，让用户得到更直接的答案，也让搜索引擎更容易理解主题边界。',
      bullets: [
        '对象池会围绕更具体的使用场景进行过滤。',
        '示例和 FAQ 是按这个专题单独写的，不是从首页替换词复制过来。',
        '页面通过内链和相关分类，继续连到相邻意图，而不是孤立存在。',
      ],
    },
    ja: {
      title: `なぜ「${copy.title}」専用ページがあるのか`,
      lead:
        '意図別ページは、トップページの言い換えでは意味がありません。このページは用途に合わせて対象プール、具体例、本文を絞ることで、より明確な答えを返すために存在しています。',
      bullets: [
        '対象プールを用途ベースで絞り込んでいます。',
        '具体例と FAQ はこの意図のために個別に書かれています。',
        '関連ページとの内部リンクで、近いニーズにも自然につながります。',
      ],
    },
  }[locale]

  return (
    <>
      <GeneratorShell
        locale={locale}
        path={path}
        breadcrumbItems={[
          { label: trustPageCopy[locale].ui.breadcrumbHome, href: '/' },
          { label: copy.title, href: path },
        ]}
        heroEyebrow={copy.heroEyebrow}
        title={copy.title}
        description={copy.description}
        visualTitle={copy.visualTitle}
        visualDescription={copy.visualDescription}
        bulkTitle={copy.bulkTitle}
        bulkDescription={copy.bulkDescription}
        categories={categories}
        items={items}
        featuredItems={featuredItems}
        defaultVisualCount={intentPage.defaultVisualCount}
      />
      <HomeLandingContent
        locale={locale}
        categories={categories}
        sampleItems={sampleItems}
        editorialLinks={editorialLinks}
        exampleContent={copy.examples}
        trustBlock={trustBlock}
        content={landingContent}
      />
    </>
  )
}

function withAuditDepthContent({
  locale,
  title,
  content,
  categories,
  sampleItems,
}: {
  locale: Locale
  title: string
  content: IntentPageConfig['i18n'][Locale]['landing']
  categories: LocalizedCategory[]
  sampleItems: ReturnType<typeof getLocalizedObjectsByCategories>
}) {
  const categoryNames = categories.map((category) => category.translation.name).slice(0, 4)
  const objectNames = sampleItems.map((item) => item.translation.name).slice(0, 6)
  const categoryList = joinLocalizedList(categoryNames, locale)
  const objectList = joinLocalizedList(objectNames, locale)

  const defaults = {
    en: {
      intentTitle: `How ${title} is different from a generic random word page`,
      intentBody:
        `${title} narrows the generator around ${categoryList || 'focused object categories'} so the page can serve a specific visitor task instead of acting like a doorway page. The examples, generator defaults, internal links, and FAQ are meant to help someone use the result immediately.`,
      intentBullets: [
        `Representative prompts include ${objectList || 'recognizable everyday objects'}.`,
        'The page keeps the generator visible first, then adds explanatory content for users who need context.',
        'Related pages and category links give visitors a next step without forcing them through irrelevant navigation.',
      ],
      qualityTitle: `Quality checks behind this ${title} page`,
      qualityBody:
        'Before a page like this is indexed, it should have a usable generator, crawlable text, examples, internal links, and clear trust pages. That combination helps separate the page from thin keyword variants and gives both visitors and reviewers a reason to keep it live.',
      qualityBullets: [
        'The object pool is constrained by use case, not filled with unrelated nouns.',
        'Examples are drawn from the same data used by the generator, so the page describes real results.',
        'The page avoids ad-heavy or affiliate-first blocks and keeps the main utility easy to reach.',
      ],
    },
    zh: {
      intentTitle: `${title} 和普通随机词页面有什么区别`,
      intentBody:
        `${title} 会围绕 ${categoryList || '更明确的物品分类'} 收窄对象池，让页面服务一个具体任务，而不是做成只有标题不同的入口页。示例、默认生成数量、内链和 FAQ 都是为了让用户能马上把结果用起来。`,
      intentBullets: [
        `代表性结果包括 ${objectList || '可识别的日常物品'}。`,
        '页面先让生成器可用，再补充解释内容，避免正文压住核心功能。',
        '相关页面和分类链接提供下一步，不把用户带进无关路径。',
      ],
      qualityTitle: `${title} 的内容质量检查`,
      qualityBody:
        '一个适合被索引的专题页，至少应该同时具备可用工具、可抓取正文、真实示例、站内链接和信任页面。这样页面才不只是关键词变体，而是对用户和审核者都有明确价值。',
      qualityBullets: [
        '对象池按使用场景收窄，而不是混入无关名词。',
        '示例来自真实生成数据，页面描述和实际结果一致。',
        '页面避免广告或联盟内容优先，核心工具始终容易访问。',
      ],
    },
    ja: {
      intentTitle: `${title} が一般的なランダム単語ページと違う点`,
      intentBody:
        `${title} は ${categoryList || '用途に合うカテゴリ'} を中心に対象を絞り、単なる入口ページではなく具体的な作業に使えるページとして作られています。例、初期設定、内部リンク、FAQ は、結果をすぐ使えるようにするためのものです。`,
      intentBullets: [
        `代表的な結果には ${objectList || '認識しやすい日常物'} があります。`,
        'まずジェネレーターを使える状態にし、その後に文脈説明を置いています。',
        '関連ページとカテゴリリンクで、近い目的にも自然につながります。',
      ],
      qualityTitle: `${title} ページの品質チェック`,
      qualityBody:
        'インデックス対象にするページには、使えるツール、クロール可能な本文、実例、内部リンク、信頼ページへの導線が必要です。この組み合わせにより、単なるキーワード違いの薄いページではなく、訪問者にも審査者にも意味のあるページになります。',
      qualityBullets: [
        '対象プールは用途で絞り込み、無関係な名詞を混ぜません。',
        '例は実際の生成データから出しているため、説明と結果が一致します。',
        '広告やアフィリエイトを優先せず、主要機能にすぐ到達できます。',
      ],
    },
  }[locale]

  return {
    ...content,
    intentTitle: content.intentTitle ?? defaults.intentTitle,
    intentBody: content.intentBody ?? defaults.intentBody,
    intentBullets: content.intentBullets ?? defaults.intentBullets,
    qualityTitle: content.qualityTitle ?? defaults.qualityTitle,
    qualityBody: content.qualityBody ?? defaults.qualityBody,
    qualityBullets: content.qualityBullets ?? defaults.qualityBullets,
  }
}

function joinLocalizedList(items: string[], locale: Locale) {
  if (items.length === 0) {
    return ''
  }

  if (locale === 'en') {
    return new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(items)
  }

  return items.join(locale === 'ja' ? '、' : '、')
}

function buildSampleItems(
  items: ReturnType<typeof getLocalizedObjectsByCategories>,
  exampleObjectIds?: string[]
) {
  if (!exampleObjectIds || exampleObjectIds.length === 0) {
    return items
  }

  const selected = exampleObjectIds
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const rest = items.filter((item) => !selected.some((selectedItem) => selectedItem.id === item.id))

  return [...selected, ...rest]
}

function buildFeaturedItems(categories: LocalizedCategory[], items: ReturnType<typeof getLocalizedObjectsByCategories>) {
  const categoryPriority = categories.map((category) => category.slug)
  const featuredFromImages = categoryPriority
    .map((slug) => items.find((item) => item.category === slug && item.image))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  if (featuredFromImages.length >= 4) {
    return featuredFromImages.slice(0, 4)
  }

  const extras = items.filter((item) => !featuredFromImages.some((featured) => featured.id === item.id))
  return [...featuredFromImages, ...extras].slice(0, 4)
}
