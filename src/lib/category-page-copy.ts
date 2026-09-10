import type { Locale } from '@/lib/i18n-config'
import type { CategoryRecord } from '@/lib/objects'

type CategoryPageCopy = {
  title: string
  description: string
  visualTitle: string
  visualDescription: string
  bulkTitle: string
  bulkDescription: string
  seoTitle: string
  seoDescription: string
}

const categoryOverrides: Partial<Record<string, Partial<Record<Locale, CategoryPageCopy>>>> = {
  animals: {
    en: {
      title: 'Random Animal Generator',
      description:
        'Pick a random animal for drawing prompts, charades, classroom games, story ideas, and quick creative warmups.',
      visualTitle: 'Pick a random animal',
      visualDescription:
        'Use this animal-only generator when you need a fast prompt for drawing, guessing games, ESL vocabulary, or storytelling.',
      bulkTitle: 'Build a random animal list',
      bulkDescription:
        'Generate a copyable animal prompt list for lesson plans, game rounds, drawing practice, or writing exercises.',
      seoTitle: 'Random Animal Generator for Drawing Prompts and Games',
      seoDescription:
        'Pick a random animal, use it as an animal prompt generator, or create animal lists for drawing prompts, charades, ESL lessons, and classroom games.',
    },
    zh: {
      title: '随机动物生成器',
      description:
        '抽取随机动物，可用于绘画题、你演我猜、课堂游戏、写作灵感和快速破冰。',
      visualTitle: '抽一个随机动物',
      visualDescription:
        '当你需要动物绘画题、猜词游戏、英语词汇练习或故事灵感时，可以直接使用这个动物专属生成器。',
      bulkTitle: '生成一组随机动物清单',
      bulkDescription:
        '批量生成可复制的动物提示词，适合教案、游戏轮次、绘画练习和写作训练。',
      seoTitle: '随机动物生成器：抽取动物卡片与批量清单',
      seoDescription:
        '抽取随机动物或批量生成动物清单，可用于绘画练习、你演我猜、英语课堂、少儿游戏和故事创作。',
    },
    ja: {
      title: 'ランダム動物ジェネレーター',
      description:
        '描画、ジェスチャーゲーム、授業、物語づくりに使える動物のお題をランダムに表示します。',
      visualTitle: 'ランダムな動物を引く',
      visualDescription:
        '描画、語彙練習、ゲーム、物語のきっかけに使いやすい動物だけを表示します。',
      bulkTitle: '動物のお題リストを作る',
      bulkDescription:
        '授業、ゲーム、スケッチ練習、創作メモに使える動物リストをまとめて生成できます。',
      seoTitle: 'ランダム動物ジェネレーター',
      seoDescription:
        'ランダムな動物をカード形式で表示し、授業、ゲーム、描画、創作に使える動物リストも作れます。',
    },
  },
  food: {
    en: {
      title: 'Random Food Generator',
      description:
        'Pick a random food for drawing prompts, classroom games, menu ideas, party rounds, and creative challenges.',
      visualTitle: 'Pick a random food',
      visualDescription:
        'Use this food-focused generator when you need a visual prompt, a quick game idea, or a themed classroom activity.',
      bulkTitle: 'Build a random food list',
      bulkDescription:
        'Generate and copy a food prompt list for worksheets, game cards, menu naming, or drawing practice.',
      seoTitle: 'Random Food Generator and Food Picker',
      seoDescription:
        'Pick a random food item, use a simple food picker, or generate copyable food lists with visual cards for drawing prompts, ESL games, classrooms, and menu ideas.',
    },
    zh: {
      title: '随机食物生成器',
      description:
        '抽取随机食物，可用于绘画题、课堂游戏、菜单命名、聚会题卡和创意练习。',
      visualTitle: '抽一个随机食物',
      visualDescription:
        '当你需要食物绘画题、课堂词汇、游戏灵感或菜单发想时，可以直接使用这个食物生成器。',
      bulkTitle: '生成一组随机食物清单',
      bulkDescription:
        '批量生成可复制的食物提示词，适合课件、游戏题卡、菜单命名和绘画练习。',
      seoTitle: '随机食物生成器：抽取食物卡片与批量清单',
      seoDescription:
        '抽取随机食物或批量生成食物清单，可用于绘画练习、英语课堂、聚会游戏、菜单命名和创意活动。',
    },
    ja: {
      title: 'ランダム食べ物ジェネレーター',
      description:
        '描画、授業ゲーム、メニュー案、パーティーのお題、創作練習に使える食べ物をランダム表示します。',
      visualTitle: 'ランダムな食べ物を引く',
      visualDescription:
        '食べ物に絞ったカードで、描画、語彙練習、ゲーム、メニュー発想に使いやすいお題を出します。',
      bulkTitle: '食べ物のお題リストを作る',
      bulkDescription:
        'ワークシート、ゲームカード、メニュー案、スケッチ練習に使える食べ物リストを作れます。',
      seoTitle: 'ランダム食べ物ジェネレーター',
      seoDescription:
        'ランダムな食べ物をカード形式で表示し、授業、ゲーム、描画、メニュー発想に使えるリストも作れます。',
    },
  },
  household: {
    en: {
      title: 'Random Household Item Generator',
      description:
        'Pick a random household item for charades, vocabulary practice, drawing prompts, memory games, and product brainstorms.',
      visualTitle: 'Pick a random household item',
      visualDescription:
        'Generate familiar home objects that are easy to describe, draw, act out, or turn into workshop prompts.',
      bulkTitle: 'Build a household item list',
      bulkDescription:
        'Generate a copyable list of household items for activities, worksheets, games, or brainstorming sessions.',
      seoTitle: 'Random Household Item Generator',
      seoDescription:
        'Pick random household items with visual cards and copyable lists for charades, classroom vocabulary, drawing prompts, and brainstorming.',
    },
    zh: {
      title: '随机家居用品生成器',
      description:
        '抽取随机家居用品，适合你演我猜、词汇练习、绘画提示、记忆游戏和产品脑暴。',
      visualTitle: '抽一个随机家居用品',
      visualDescription:
        '生成熟悉的家中物品，方便描述、绘画、表演，或转化成课堂和工作坊提示。',
      bulkTitle: '生成一组家居用品清单',
      bulkDescription:
        '批量生成可复制的家居物品清单，适合活动题卡、课件、游戏和创意发想。',
      seoTitle: '随机家居用品生成器：家中物品卡片与清单',
      seoDescription:
        '抽取随机家居用品或批量生成家中物品清单，适合你演我猜、课堂词汇、绘画提示和产品脑暴。',
    },
    ja: {
      title: 'ランダム日用品ジェネレーター',
      description:
        'ジェスチャー、語彙練習、描画、記憶ゲーム、発想出しに使える日用品をランダム表示します。',
      visualTitle: 'ランダムな日用品を引く',
      visualDescription:
        '説明しやすく、描きやすく、ゲームにも使いやすい身近な日用品を表示します。',
      bulkTitle: '日用品リストを作る',
      bulkDescription:
        '授業、ゲーム、ワークショップ、発想メモに使える日用品リストをまとめて生成できます。',
      seoTitle: 'ランダム日用品ジェネレーター',
      seoDescription:
        'ランダムな日用品をカード形式で表示し、授業、ゲーム、描画、発想出しに使えるリストも作れます。',
    },
  },
}

function buildDefaultCategoryCopy(category: CategoryRecord, locale: Locale): CategoryPageCopy {
  const translation = category.i18n[locale] ?? category.i18n.en
  const name = translation.name
  const lowerName = name.toLowerCase()

  return {
    title: `${name} Random Generator`,
    description: translation.description,
    visualTitle: `Generate random ${lowerName} prompts`,
    visualDescription: `Each click pulls a fresh ${lowerName} pick from the curated ${lowerName} set for this page.`,
    bulkTitle: `Build a quick ${lowerName} list`,
    bulkDescription:
      'Need a longer batch for writing sprints, classroom rounds, or improv games? Generate and copy a clean list in one tap.',
    seoTitle: `${name} Random Generator With Visual Cards`,
    seoDescription: translation.description,
  }
}

export function getCategoryPageCopy(category: CategoryRecord, locale: Locale): CategoryPageCopy {
  return categoryOverrides[category.slug]?.[locale] ?? buildDefaultCategoryCopy(category, locale)
}
