import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import { buildFaqJsonLd, getLocalizedPath } from '@/lib/seo'
import type { LocalizedCategory, LocalizedObject } from '@/lib/objects'
import { trustPageCopy } from '@/lib/site-copy'
import { EditorialLinksSection, ExampleObjectsSection, TrustBlockSection } from '@/components/SupportSections'

interface HomeLandingContentProps {
  locale: Locale
  categories: LocalizedCategory[]
  sampleItems: LocalizedObject[]
  editorialLinks?: Array<{ href: string; label: string; description: string }>
  exampleContent?: {
    title: string
    lead: string
  }
  trustBlock: {
    title: string
    lead: string
    bullets: string[]
  }
  content: {
    introTitle: string
    introBody: string
    featureTitle: string
    featureLead: string
    features: Array<{ title: string; body: string }>
    categoryTitle: string
    categoryLead: string
    useCasesTitle: string
    useCases: string[]
    faqTitle: string
    faqs: Array<{ question: string; answer: string }>
    intentTitle?: string
    intentBody?: string
    intentBullets?: string[]
    qualityTitle?: string
    qualityBody?: string
    qualityBullets?: string[]
  }
}

const howToHomeCopy = {
  en: {
    title: trustPageCopy.en.ui.howToUse,
    steps: [
      'Pick a category if you want a narrower result set, or stay on the homepage to generate from the full object pool.',
      'Enter the amount you want to generate and choose whether repeated results should be allowed.',
      'Use the visual cards for quick inspiration or switch to the bulk list when you need a copyable set for class, games, or writing.'
    ],
  },
  zh: {
    title: trustPageCopy.zh.ui.howToUse,
    steps: [
      '如果你想要更聚焦的结果，可以先进入某个分类页；如果想更宽泛地抽取，就留在首页。',
      '输入你想生成的数量，并决定是否允许重复结果。',
      '需要快速灵感时看卡片模式，需要整理成清单时直接使用批量模式复制结果。'
    ],
  },
  ja: {
    title: trustPageCopy.ja.ui.howToUse,
    steps: [
      'より絞った結果が欲しいならカテゴリページへ、幅広い結果が欲しいならトップページのまま使います。',
      '生成したい数を入力し、重複を許可するかどうかを選びます。',
      'すぐに発想が欲しいときはカード表示、一覧を使いたいときは一括モードを使います。'
    ],
  },
}

const libraryCopy = {
  en: {
    eyebrow: 'Object library',
    title: 'A broader object pool makes the generator more useful.',
    body:
      'The generator now uses a larger multilingual object library so visitors can request bigger non-repeating batches without exhausting the page after a few clicks.',
    total: 'Total objects',
    images: 'Real image cards',
    unique: 'Unique by default',
  },
  zh: {
    eyebrow: '对象库',
    title: '更大的对象池，才会让生成器真正耐用。',
    body:
      '当前生成器已经扩充为更大的多语言对象库，用户可以生成更长的不重复清单，不会点几次就把页面抽空。',
    total: '物品总数',
    images: '真实图片卡片',
    unique: '默认不重复',
  },
  ja: {
    eyebrow: 'オブジェクトライブラリ',
    title: '十分な対象数があるほど、ジェネレーターは実用的になります。',
    body:
      '現在は多言語のオブジェクトライブラリを拡張しているため、重複なしでもより長いリストを作りやすくなっています。',
    total: '対象数',
    images: '実写カード',
    unique: '初期設定は重複なし',
  },
}

const editorialPromiseCopy = {
  en: {
    eyebrow: 'Editorial promise',
    title: 'What this site is built to do, and what it deliberately avoids.',
    lead:
      'Random Object Generator is designed as a lightweight prompt and activity resource. The pages are written for teachers, facilitators, artists, writers, parents, and casual game hosts who need fast concrete prompts, not for medical, financial, legal, safety, or professional advice.',
    cards: [
      {
        title: 'Useful before the click',
        body: 'Core pages include examples, activity ideas, FAQs, and related links so a visitor can understand the value before using the generator.',
      },
      {
        title: 'Narrow pages have narrow jobs',
        body: 'Category and intent pages are meant to solve specific tasks such as drawing prompts, ESL vocabulary practice, charades, classroom warmups, and food picker rounds.',
      },
      {
        title: 'Human-maintained structure',
        body: 'The object library, page groupings, examples, and internal links are reviewed around real use cases instead of publishing endless keyword variants.',
      },
    ],
  },
  zh: {
    eyebrow: '编辑承诺',
    title: '这个网站要解决什么，也明确不做什么。',
    lead:
      'Random Object Generator 是一个轻量提示词和活动资源站，面向老师、活动主持人、画画练习者、写作者、家长和游戏组织者。它提供具体灵感，不提供医疗、金融、法律、安全或专业决策建议。',
    cards: [
      {
        title: '点击前也有价值',
        body: '核心页面会提供示例、活动玩法、FAQ 和相关链接，让用户在点击生成之前就能判断页面是否有用。',
      },
      {
        title: '窄页面解决窄任务',
        body: '分类页和专题页分别承接绘画提示、ESL 词汇、你演我猜、课堂热身、食物选择等具体需求。',
      },
      {
        title: '结构由真实用途维护',
        body: '对象库、页面分组、示例和内链会围绕实际使用场景整理，而不是无限发布关键词变体。',
      },
    ],
  },
  ja: {
    eyebrow: '編集方針',
    title: 'このサイトがすること、あえてしないこと。',
    lead:
      'Random Object Generator は、先生、進行役、アーティスト、書き手、保護者、ゲーム主催者向けの軽量なお題・活動リソースです。医療、金融、法律、安全、専門的判断の助言を目的としていません。',
    cards: [
      {
        title: 'クリック前から役立つ',
        body: '主要ページには例、活動案、FAQ、関連リンクを置き、生成する前から用途が分かるようにしています。',
      },
      {
        title: '狭いページには狭い役割',
        body: 'カテゴリや意図別ページは、描画、ESL 語彙、ジェスチャー、授業導入、食べ物ピッカーなど特定の用途に合わせています。',
      },
      {
        title: '用途ベースで整理',
        body: '対象ライブラリ、ページ構成、例、内部リンクは、単なるキーワード展開ではなく実際の使い方を基準に見直します。',
      },
    ],
  },
}

function buildActivityBlueprintCopy({
  locale,
  pageTitle,
  sampleItems,
}: {
  locale: Locale
  pageTitle: string
  sampleItems: LocalizedObject[]
}) {
  const names = sampleItems.slice(0, 8).map((item) => item.translation.name)
  const firstSet = names.slice(0, 4).join(locale === 'en' ? ', ' : '、')
  const secondSet = names.slice(4, 8).join(locale === 'en' ? ', ' : '、')

  const copy = {
    en: {
      eyebrow: 'Ready-made content',
      title: `Three complete ways to use ${pageTitle.toLowerCase()}`,
      lead:
        `A generator page is more useful when the result becomes a finished activity. These formats turn objects such as ${firstSet || 'everyday items'} into repeatable classroom, drawing, game, and writing workflows.`,
      cards: [
        {
          title: '10-minute warmup',
          body:
            `Generate five objects, put them on a board, and ask each participant to choose one. For prompts such as ${firstSet || 'the first four objects'}, the follow-up questions are: what does it look like, where would you find it, what action belongs with it, and what detail would make it memorable? This gives the page original instructional value instead of only displaying random nouns.`,
        },
        {
          title: 'Copyable challenge set',
          body:
            `Use bulk mode to make a 12-item list, then divide it into three short rounds: describe, draw, and remix. A list containing ${secondSet || 'mixed objects'} can become a worksheet, slide, party deck, or writing sprint without needing another tool. Keeping the structure on the page also helps visitors understand why the generated list is worth saving.`,
        },
        {
          title: 'Review and moderation rule',
          body:
            'Before using a generated list with children, classrooms, ads, or public pages, scan the objects for age fit, cultural context, and image clarity. Remove anything that does not match the audience. This site is maintained around concrete, low-risk objects, and the final activity owner should still review each generated batch before publishing or monetizing it.',
        },
      ],
      checklistTitle: 'Quality checklist for this page',
      checklist: [
        'The page has crawlable explanatory text before and after the generator.',
        'Examples use the same object pool that visitors can actually generate.',
        'The content gives a finished activity format, not only a list of keywords.',
        'Ads and analytics remain separate from the generator controls and copy buttons.',
      ],
    },
    zh: {
      eyebrow: '成型内容',
      title: `${pageTitle} 的三种完整用法`,
      lead:
        `生成器页面不能只停在“吐出几个词”。下面这些用法会把 ${firstSet || '日常物品'} 这类结果转化为课堂、绘画、游戏和写作里可以直接执行的流程。`,
      cards: [
        {
          title: '10 分钟热身',
          body:
            `先生成 5 个物品，把结果放到白板或屏幕上，每个人选一个。遇到 ${firstSet || '前几个物品'} 这类提示时，可以追问：它长什么样、通常在哪里出现、可以配什么动作、哪个细节最容易让人记住。这样页面提供的是活动方法，而不是一堆随机名词。`,
        },
        {
          title: '可复制挑战清单',
          body:
            `用批量模式生成 12 个物品，再拆成三轮：描述、绘画、改编。包含 ${secondSet || '混合物品'} 的清单可以直接变成 worksheet、课件、聚会题卡或写作冲刺题，不需要再跳到别的工具整理。`,
        },
        {
          title: '人工复核规则',
          body:
            '如果要把清单用于儿童、课堂、广告页面或公开内容，发布前应检查年龄适配、文化语境和图片清晰度，删掉不适合当前受众的结果。本站对象池以具体、低风险物品为主，但最终活动仍应由使用者复核。',
        },
      ],
      checklistTitle: '本页内容质量核对',
      checklist: [
        '生成器前后都有可抓取、可阅读的解释内容。',
        '示例来自真实对象池，用户确实可以生成同类结果。',
        '正文提供完整活动流程，而不只是关键词列表。',
        '广告和统计脚本与生成器控件、复制按钮保持清晰区分。',
      ],
    },
    ja: {
      eyebrow: '完成した使い方',
      title: `${pageTitle} の3つの使い方`,
      lead:
        `ジェネレーターページは、単語を出すだけでは不十分です。${firstSet || '日常的な対象'} のような結果を、授業、描画、ゲーム、文章づくりに使える流れへ変えることが大切です。`,
      cards: [
        {
          title: '10分ウォームアップ',
          body:
            `まず5つ生成し、参加者が1つ選びます。${firstSet || '最初のいくつかの対象'} のようなお題では、形、置かれる場所、合う動き、記憶に残る細部を質問します。これにより、ページは単なるランダム名詞ではなく活動手順を提供できます。`,
        },
        {
          title: 'コピーできる課題セット',
          body:
            `一括モードで12個作り、説明、描画、アレンジの3ラウンドに分けます。${secondSet || 'さまざまな対象'} を含むリストは、ワークシート、スライド、ゲームカード、短い文章練習にそのまま使えます。`,
        },
        {
          title: '確認ルール',
          body:
            '子ども、授業、広告付きページ、公開コンテンツで使う場合は、年齢適性、文化的文脈、画像の分かりやすさを確認し、合わないものを外してください。このサイトは具体的で低リスクな対象を中心にしていますが、公開前の確認は利用者側でも必要です。',
        },
      ],
      checklistTitle: 'このページの品質チェック',
      checklist: [
        'ジェネレーターの前後にクロール可能な説明文がある。',
        '例は実際に生成できる対象プールから出している。',
        '本文はキーワード一覧ではなく、活動として使える形式になっている。',
        '広告と分析は、生成ボタンやコピー操作と明確に分けている。',
      ],
    },
  }[locale]

  return copy
}

export function HomeLandingContent({
  locale,
  categories,
  sampleItems,
  editorialLinks,
  exampleContent,
  trustBlock,
  content,
}: HomeLandingContentProps) {
  const faqJsonLd = buildFaqJsonLd({ faqs: content.faqs })
  const howTo = howToHomeCopy[locale]
  const ui = trustPageCopy[locale].ui
  const library = libraryCopy[locale]
  const imageCount = sampleItems.filter((item) => Boolean(item.image)).length
  const editorialPromise = editorialPromiseCopy[locale]
  const activityBlueprint = buildActivityBlueprintCopy({
    locale,
    pageTitle: content.introTitle,
    sampleItems,
  })
  const exampleCopy = {
    en: {
      title: 'Example objects you can pull from this page',
      lead:
        'These examples make the page more concrete for users and search engines alike. The generator is meant to surface recognizable, usable prompts rather than a thin wall of random nouns.',
    },
    zh: {
      title: '这个页面会生成的示例物品',
      lead:
        '把示例直接放出来，会比只讲功能更扎实。这样用户一眼就能知道结果大概长什么样，搜索引擎也更容易理解这个页面的实际价值。',
    },
    ja: {
      title: 'このページで出てくるサンプルオブジェクト',
      lead:
        'サンプルを見せることで、単なる説明文よりもページの価値が伝わりやすくなります。検索エンジンにも実際の中身が伝わりやすくなります。',
    },
  }[locale]

  return (
    <>
      <div className="container mx-auto space-y-10 px-4 pb-20 md:px-6">
        <section className="grid gap-8 rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whatLabel}</p>
            <h2 className="max-w-3xl text-4xl leading-tight text-slate-950 md:text-5xl">{content.introTitle}</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">{content.introBody}</p>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-2xl text-slate-950">{content.featureTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{content.featureLead}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {content.features.map((feature) => (
              <div key={feature.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.howToLabel}</p>
          <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{howTo.title}</h2>
          <ol className="mt-6 space-y-4">
            {howTo.steps.map((step, index) => (
              <li key={step} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{library.eyebrow}</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="text-3xl text-slate-950 md:text-4xl">{library.title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{library.body}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{library.total}</p>
                <p className="mt-2 text-3xl text-slate-950">{sampleItems.length}</p>
              </div>
              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{library.images}</p>
                <p className="mt-2 text-3xl text-slate-950">{imageCount}</p>
              </div>
              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{library.unique}</p>
                <p className="mt-2 text-3xl text-slate-950">✓</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{editorialPromise.eyebrow}</p>
          <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{editorialPromise.title}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{editorialPromise.lead}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {editorialPromise.cards.map((card) => (
              <div key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl text-slate-950">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {content.intentTitle && content.intentBody ? (
          <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whatLabel}</p>
            <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{content.intentTitle}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{content.intentBody}</p>
            {content.intentBullets?.length ? (
              <ul className="mt-6 grid gap-3 md:grid-cols-3">
                {content.intentBullets.map((bullet) => (
                  <li key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {content.qualityTitle && content.qualityBody ? (
          <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whyLabel}</p>
            <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{content.qualityTitle}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{content.qualityBody}</p>
            {content.qualityBullets?.length ? (
              <ul className="mt-6 grid gap-3 md:grid-cols-3">
                {content.qualityBullets.map((bullet) => (
                  <li key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        <section className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whyLabel}</p>
            <h2 className="text-3xl text-slate-950 md:text-4xl">{content.categoryTitle}</h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">{content.categoryLead}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={getLocalizedPath(locale, category.href)}
                className={`group overflow-hidden rounded-[1.75rem] border border-white/80 bg-gradient-to-br ${category.accent} p-[1px] shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1`}
              >
                <div className="flex h-full flex-col justify-between rounded-[1.7rem] bg-white/90 p-6 backdrop-blur">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{ui.categoryLabel}</p>
                    <h3 className="mt-3 text-2xl text-slate-950">{category.translation.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{category.translation.description}</p>
                  </div>
                  <p className="mt-8 text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
                    {ui.openGenerator}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/5 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{ui.useCasesLabel}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{content.useCasesTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/82"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.faqLabel}</p>
            <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{content.faqTitle}</h2>
            <div className="mt-6 space-y-4">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg text-slate-950">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExampleObjectsSection
          locale={locale}
          title={exampleContent?.title ?? exampleCopy.title}
          lead={exampleContent?.lead ?? exampleCopy.lead}
          items={sampleItems.slice(0, 6)}
        />

        <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{activityBlueprint.eyebrow}</p>
          <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{activityBlueprint.title}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{activityBlueprint.lead}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {activityBlueprint.cards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <h3 className="text-xl text-slate-950">{activityBlueprint.checklistTitle}</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {activityBlueprint.checklist.map((item) => (
                <li key={item} className="text-sm leading-6 text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <EditorialLinksSection locale={locale} links={editorialLinks ?? []} />
        <TrustBlockSection locale={locale} block={trustBlock} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
