import type { Locale } from '@/lib/i18n-config'
import type { LocalizedCategory, LocalizedObject } from '@/lib/objects'
import { buildFaqJsonLd } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'
import { RelatedGenerators } from '@/components/RelatedGenerators'
import { EditorialLinksSection, ExampleObjectsSection, TrustBlockSection } from '@/components/SupportSections'

interface CategoryLandingContentProps {
  locale: Locale
  categoryName: string
  categories: LocalizedCategory[]
  sampleItems: LocalizedObject[]
  currentSlug: string
  editorialLinks?: Array<{ href: string; label: string; description: string }>
  content: {
    introTitle: string
    introBody: string
    reasonsTitle: string
    reasons: Array<{ title: string; body: string }>
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

type CategoryPlaybook = {
  title: string
  lead: string
  cards: Array<{ title: string; body: string; bullets: string[] }>
}

const howToCopy = {
  en: (categoryName: string) => ({
    heading: trustPageCopy.en.ui.howToUse,
    steps: [
      `Choose how many ${categoryName.toLowerCase()} prompts you want to generate.`,
      'Decide whether repeated results are allowed or whether you want a unique set only.',
      'Refresh the generator until you find a strong prompt, then copy the longer list if you need material for class, games, or writing.'
    ],
  }),
  zh: (categoryName: string) => ({
    heading: trustPageCopy.zh.ui.howToUse,
    steps: [
      `先输入你想生成多少个${categoryName}结果。`,
      '再决定是否允许重复，按你的使用场景选择更自由或更去重的结果。',
      '多试几次生成器，找到合适结果后，可以直接复制批量清单去做课堂、游戏或创作。'
    ],
  }),
  ja: (categoryName: string) => ({
    heading: trustPageCopy.ja.ui.howToUse,
    steps: [
      `${categoryName} のお題をいくつ出したいか数を入力します。`,
      '重複を許可するかどうかを切り替えて、用途に合う出力に調整します。',
      '納得いく結果が出るまで更新し、必要なら一括リストをコピーして授業や創作に使います。'
    ],
  }),
}

const categoryPlaybooks: Record<Locale, Record<string, CategoryPlaybook>> = {
  en: {
    animals: {
      title: 'Ready-to-use animal prompt activities',
      lead:
        'These activity patterns make the animal page useful before anyone clicks the generator again. They are written for teachers, facilitators, parents, and artists who need a concrete way to use the results.',
      cards: [
        {
          title: 'Five-minute drawing warmup',
          body: 'Generate three animals, give everyone one minute to choose, then spend four minutes sketching shape first and detail second.',
          bullets: ['Best for art class starters', 'Works with one shared result or different results per student', 'Keeps the prompt lightweight enough for beginners'],
        },
        {
          title: 'Animal vocabulary loop',
          body: 'Use a batch of animals as a speaking loop: name the animal, describe one feature, then compare it with the next card.',
          bullets: ['Good for ESL warmups', 'Encourages adjectives and comparison words', 'Easy to adapt for younger learners'],
        },
        {
          title: 'Charades or story round',
          body: 'Pull one animal per round and ask players to act it out, invent a habitat, or add the animal to a shared story.',
          bullets: ['Good for groups and family games', 'Needs almost no preparation', 'Turns random output into a repeatable activity'],
        },
      ],
    },
    food: {
      title: 'Practical ways to use random food prompts',
      lead:
        'Food prompts are strongest when they lead to a clear task: choose, describe, draw, compare, or build a playful menu. These patterns make the page useful as a classroom and game resource, not only a picker.',
      cards: [
        {
          title: 'Food picker round',
          body: 'Generate six foods, remove anything that does not fit your setting, then let the group vote or randomly choose from the remaining list.',
          bullets: ['Useful for party games and simple choices', 'Keeps unsuitable results out of the final set', 'Works better than a totally open random list'],
        },
        {
          title: 'ESL food description drill',
          body: 'Ask learners to describe taste, texture, temperature, and occasion for each generated food before revealing the next one.',
          bullets: ['Builds food vocabulary naturally', 'Creates short speaking turns', 'Works with individual or team answers'],
        },
        {
          title: 'Menu naming challenge',
          body: 'Generate a food list and ask players to combine two items into a menu name, drawing prompt, or silly restaurant concept.',
          bullets: ['Good for creative writing', 'Useful for brainstorming sessions', 'Makes the output more original than a raw list'],
        },
      ],
    },
    household: {
      title: 'Household object activities that start with a real task',
      lead:
        'Everyday home objects work best when the activity gives people a reason to notice shape, function, and context. These formats turn a random household item into a useful prompt rather than a dead-end noun.',
      cards: [
        {
          title: 'Describe without naming it',
          body: 'Give one player a household object card and ask them to describe its material, purpose, and usual location without saying its name. The group guesses before the timer ends.',
          bullets: ['Useful for ESL and vocabulary review', 'Works with pairs or larger groups', 'Encourages concrete descriptive language'],
        },
        {
          title: 'Redesign the ordinary',
          body: 'Generate three objects, then ask each participant to change one feature: make it safer, portable, playful, or useful in a different room.',
          bullets: ['Good for product-thinking warmups', 'Creates a clear constraint for writers and designers', 'Keeps brainstorming grounded in familiar objects'],
        },
        {
          title: 'Memory tray challenge',
          body: 'Generate a short list, give the group thirty seconds to study it, then hide the list and ask them to recall the objects in order or by category.',
          bullets: ['Useful for family games and classrooms', 'Needs no printed materials', 'Makes a batch list more useful than a one-off pick'],
        },
      ],
    },
    nature: {
      title: 'Nature prompts with a practical creative angle',
      lead:
        'Nature prompts become more useful when they guide observation instead of only naming scenery. These activities make the result useful for drawing, writing, and discussion without pretending that every nature word fits every task.',
      cards: [
        {
          title: 'Texture and light study',
          body: 'Generate one nature object, then choose a time of day and weather condition. Draw or describe how its texture, shadow, and color would change.',
          bullets: ['Useful for sketch warmups', 'Gives artists a concrete next decision', 'Works with a single prompt in under ten minutes'],
        },
        {
          title: 'Setting before story',
          body: 'Use three generated nature objects to establish place, season, and mood before writing a character or plot. Keep each object visible as an environmental detail in the final scene.',
          bullets: ['Useful for writing groups', 'Prevents vague setting descriptions', 'Turns a random list into a repeatable story exercise'],
        },
        {
          title: 'Sort by evidence',
          body: 'Generate a batch, then sort every item into something you could observe indoors, outdoors, or only in a particular season. Discuss any item that could reasonably fit more than one group.',
          bullets: ['Good for classroom discussion', 'Builds observation and comparison skills', 'Lets facilitators review context before using the list'],
        },
      ],
    },
  },
  zh: {
    animals: {
      title: '可以直接拿来用的动物提示活动',
      lead:
        '这些玩法让动物页在点击生成之前就有信息价值。它们面向老师、主持人、家长和画画练习者，重点是把随机动物结果变成可执行活动。',
      cards: [
        {
          title: '五分钟动物速写',
          body: '先生成三个动物，让参与者用一分钟选择题目，再用四分钟先画轮廓、再补特征。',
          bullets: ['适合美术课开场', '可以全班共用一个结果，也可以每人抽不同结果', '对新手足够轻量'],
        },
        {
          title: '动物词汇循环',
          body: '批量生成一组动物，让学生依次说出名称、一个特征，再和下一张卡片进行比较。',
          bullets: ['适合英语词汇热身', '自然练习形容词和比较句', '低龄学生也容易理解'],
        },
        {
          title: '你演我猜或接龙故事',
          body: '每轮抽一个动物，让玩家表演、描述栖息地，或把这个动物加入共同创作的故事。',
          bullets: ['适合小组和家庭游戏', '几乎不需要准备材料', '把随机结果变成可重复活动'],
        },
      ],
    },
    food: {
      title: '随机食物提示的实际用法',
      lead:
        '食物提示最有价值的地方，是能引出明确任务：选择、描述、绘画、比较，或者设计一个有趣菜单。下面这些玩法能让页面更像资源页，而不是单纯选择器。',
      cards: [
        {
          title: '食物选择回合',
          body: '先生成六个食物，去掉不适合当前场景的结果，再让小组投票或从剩余列表里随机选择。',
          bullets: ['适合聚会游戏和轻量选择', '能过滤掉不合适结果', '比完全开放的随机清单更可控'],
        },
        {
          title: 'ESL 食物描述练习',
          body: '让学习者围绕每个食物描述味道、口感、温度和适合的场景，再进入下一张卡片。',
          bullets: ['自然积累食物词汇', '每个人都能有短口语输出', '适合个人或小组回答'],
        },
        {
          title: '菜单命名挑战',
          body: '生成一组食物，让玩家把两个结果组合成菜名、绘画题目或搞怪餐厅概念。',
          bullets: ['适合创意写作', '也能用于脑暴', '让输出不只是原始词表'],
        },
      ],
    },
  },
  ja: {
    animals: {
      title: 'そのまま使える動物お題アクティビティ',
      lead:
        '生成ボタンを押す前から役立つように、動物カードの使い方を具体化しています。先生、進行役、保護者、スケッチ練習をする人向けです。',
      cards: [
        {
          title: '5分スケッチ導入',
          body: '動物を三つ生成し、一分で選んでから四分で輪郭と特徴を描きます。',
          bullets: ['美術授業の導入に向く', '全員同じ結果でも一人ずつ別でも使える', '初心者にも軽い課題になる'],
        },
        {
          title: '動物語彙ループ',
          body: '動物リストを作り、名前、特徴、次のカードとの違いを順番に話します。',
          bullets: ['ESL のウォームアップに使える', '形容詞や比較表現を練習できる', '低学年にも説明しやすい'],
        },
        {
          title: 'ジェスチャーまたは物語づくり',
          body: '一ラウンドにつき一匹を引き、演じる、すみかを考える、共同ストーリーに入れるなどして使います。',
          bullets: ['グループや家族ゲーム向き', '準備がほとんど不要', 'ランダム結果を活動に変えられる'],
        },
      ],
    },
    food: {
      title: 'ランダム食べ物お題の使い方',
      lead:
        '食べ物のお題は、選ぶ、説明する、描く、比べる、メニューを作るなどのタスクにつなげると実用性が高まります。',
      cards: [
        {
          title: '食べ物ピッカーラウンド',
          body: '六つ生成し、場面に合わないものを外してから、投票または再抽選で決めます。',
          bullets: ['パーティーや軽い選択に使える', '不適切な結果を除外しやすい', '完全ランダムより扱いやすい'],
        },
        {
          title: 'ESL 食べ物説明練習',
          body: '味、食感、温度、食べる場面を説明してから次のカードへ進みます。',
          bullets: ['食べ物語彙を自然に増やせる', '短い発話練習になる', '個人でもチームでも使える'],
        },
        {
          title: 'メニュー名チャレンジ',
          body: '生成した食べ物を二つ組み合わせて、メニュー名、絵のお題、架空レストラン案を作ります。',
          bullets: ['創作練習に向く', 'ブレインストーミングにも使える', '単なる単語一覧以上の活動になる'],
        },
      ],
    },
  },
}

const categoryLibraryCopy = {
  en: {
    eyebrow: 'Category library',
    title: 'This page has enough objects for longer non-repeating batches.',
    body:
      'A category page should not run out after one click. The pool here is sized for repeated use while keeping the topic narrow enough to satisfy the category intent.',
    total: 'Objects in this category',
    images: 'Real image cards',
    default: 'Default batch',
  },
  zh: {
    eyebrow: '分类对象库',
    title: '这个分类已经有足够对象支撑更长的不重复生成。',
    body:
      '分类页不能点一次就抽空。这里的对象池既能支撑多次使用，又保持主题足够聚焦，避免变成杂项结果页。',
    total: '本分类物品数',
    images: '真实图片卡片',
    default: '默认批量',
  },
  ja: {
    eyebrow: 'カテゴリライブラリ',
    title: 'このカテゴリは、重複なしの長めの生成にも対応できます。',
    body:
      'カテゴリページは一度のクリックで候補が尽きないことが大切です。このページはテーマを絞りつつ、繰り返し使える対象数を確保しています。',
    total: 'カテゴリ内の対象数',
    images: '実写カード',
    default: '初期表示数',
  },
}

export function CategoryLandingContent({
  locale,
  categoryName,
  categories,
  sampleItems,
  currentSlug,
  editorialLinks,
  content,
}: CategoryLandingContentProps) {
  const faqJsonLd = buildFaqJsonLd({ faqs: content.faqs })
  const howTo = howToCopy[locale](categoryName)
  const ui = trustPageCopy[locale].ui
  const library = categoryLibraryCopy[locale]
  const playbook = categoryPlaybooks[locale][currentSlug]
  const imageCount = sampleItems.filter((item) => Boolean(item.image)).length
  const exampleCopy = {
    en: {
      title: `Example ${categoryName.toLowerCase()} prompts from this page`,
      lead:
        `These examples show the kind of ${categoryName.toLowerCase()} objects this page is tuned to generate, so users can judge fit before they keep clicking.`,
    },
    zh: {
      title: `这个页面会生成的${categoryName}示例`,
      lead:
        `这些示例可以帮助用户更快判断这个分类是否符合需求，也让页面不只是“一个按钮加几段说明”。`,
    },
    ja: {
      title: `このページで出てくる ${categoryName} の例`,
      lead:
        `このカテゴリでどんな対象が出るのかを先に見せることで、使い始める前の判断がしやすくなります。`,
    },
  }[locale]
  const trustBlock = {
    en: {
      title: `What makes a useful ${categoryName.toLowerCase()} prompt`,
      lead:
        `A useful prompt should be recognizable enough to start with and open-ended enough to use in more than one activity. This page keeps the object pool focused, shows real examples, and offers next steps when the task becomes more specific.`,
      bullets: [
        `Every result comes from the ${categoryName.toLowerCase()} collection used by the generator.`,
        'Visual cards help visitors judge whether a prompt fits their group, class, or creative task.',
        'Related pages lead to a narrower activity when one broad prompt is not enough.',
      ],
    },
    zh: {
      title: `什么样的${categoryName}提示更好用`,
      lead:
        `好用的提示既要足够具体，让人马上能开始；也要留有空间，能被用于不止一种活动。这个页面会保持对象池聚焦、展示真实示例，并在任务更明确时给出合适的下一步。`,
      bullets: [
        `结果都来自生成器正在使用的${categoryName}对象池。`,
        '视觉卡片能帮助用户判断题目是否适合当前小组、课堂或创作任务。',
        '当一个宽泛提示不够用时，相关页面会引导到更具体的活动。',
      ],
    },
    ja: {
      title: `使いやすい ${categoryName} のお題とは`,
      lead:
        `使いやすいお題は、すぐに想像できる具体性と、複数の活動に展開できる余地の両方を持っています。このページでは対象を絞り、実例を見せ、目的が決まったときの次の選択肢も用意しています。`,
      bullets: [
        `結果はすべて、このジェネレーターで使っている ${categoryName} の対象から選ばれます。`,
        'カード表示で、授業、グループ、創作に合うお題かをすぐ判断できます。',
        '目的がより具体的な場合は、関連ページから自然に次の活動へ進めます。',
      ],
    },
  }[locale]

  return (
    <>
      <section className="container mx-auto space-y-8 px-4 pb-20 md:px-6">
        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whatLabel}</p>
          <h2 className="mt-3 text-4xl leading-tight text-slate-950 md:text-5xl">{content.introTitle}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{content.introBody}</p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
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
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{library.default}</p>
                <p className="mt-2 text-3xl text-slate-950">5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/5 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{ui.useCasesLabel}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{content.useCasesTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.useCases.map((useCase) => (
                <span key={useCase} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85">
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whyLabel}</p>
            <h2 className="text-3xl text-slate-950 md:text-4xl">{content.reasonsTitle}</h2>
            <div className="grid gap-4">
              {content.reasons.map((reason) => (
                <div key={reason.title} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                  <h3 className="text-xl text-slate-950">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{reason.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {playbook ? (
          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.howToLabel}</p>
            <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{playbook.title}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{playbook.lead}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {playbook.cards.map((card) => (
                <div key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-xl text-slate-950">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{card.body}</p>
                  <ul className="mt-4 space-y-2">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-6 text-slate-700">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.howToLabel}</p>
          <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{howTo.heading}</h2>
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
        </div>

        <ExampleObjectsSection locale={locale} title={exampleCopy.title} lead={exampleCopy.lead} items={sampleItems.slice(0, 6)} />

        {content.intentTitle && content.intentBody ? (
          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
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
          </div>
        ) : null}

        {content.qualityTitle && content.qualityBody ? (
          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
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
          </div>
        ) : null}

        <RelatedGenerators locale={locale} categories={categories} currentSlug={currentSlug} />
        <EditorialLinksSection locale={locale} links={editorialLinks ?? []} />
        <TrustBlockSection locale={locale} block={trustBlock} />

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
