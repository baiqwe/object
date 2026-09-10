import type { Locale } from '@/lib/i18n-config'

type IntentLandingContent = {
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

type IntentExampleContent = {
  title: string
  lead: string
}

type IntentPageCopy = {
  heroEyebrow: string
  title: string
  description: string
  visualTitle: string
  visualDescription: string
  bulkTitle: string
  bulkDescription: string
  seoTitle: string
  seoDescription: string
  examples?: IntentExampleContent
  landing: IntentLandingContent
}

export type IntentPageConfig = {
  slug:
    | 'random-object-to-draw'
    | 'random-objects-for-kids'
    | 'random-objects-for-charades'
    | 'random-objects-for-esl'
    | 'random-objects-for-storytelling'
    | 'random-objects-for-classroom'
    | 'random-objects-for-party-games'
    | 'random-things-to-describe'
    | 'random-objects-for-writing-prompts'
    | 'random-objects-for-pictionary'
    | 'random-objects-for-improv'
    | 'random-objects-for-icebreakers'
    | 'random-objects-for-scavenger-hunt'
    | 'easy-objects-to-draw'
    | 'random-kitchen-objects'
    | 'random-classroom-objects'
    | 'random-office-objects'
    | 'animal-prompt-generator'
    | 'random-object-list-generator'
    | 'random-animal-to-draw'
    | 'random-food-picker'
    | 'random-object-picker'
    | 'random-esl-vocabulary-generator'
    | 'random-charades-generator'
    | 'random-object-games'
    | 'classroom-random-object-activities'
    | 'esl-object-vocabulary-games'
  categories: string[]
  defaultVisualCount: number
  exampleObjectIds?: string[]
  i18n: Record<Locale, IntentPageCopy>
}

export type LocalizedIntentLink = {
  href: string
  title: string
  description: string
  categories: string[]
}

export const expandedIntentPageSlugs = [
  'random-object-picker',
  'random-object-games',
  'classroom-random-object-activities',
  'esl-object-vocabulary-games',
  'random-animal-to-draw',
  'random-food-picker',
  'random-esl-vocabulary-generator',
  'random-charades-generator',
  'random-object-list-generator',
  'animal-prompt-generator',
  'random-object-to-draw',
  'random-objects-for-esl',
  'random-objects-for-pictionary',
  'random-objects-for-improv',
  'random-objects-for-icebreakers',
  'random-objects-for-scavenger-hunt',
  'easy-objects-to-draw',
  'random-kitchen-objects',
  'random-classroom-objects',
  'random-office-objects',
] as const

const baseIntentPages: IntentPageConfig[] = [
  {
    slug: 'random-object-to-draw',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Drawing prompts',
        title: 'Random Object To Draw',
        description:
          'Generate visual object prompts that are easier to sketch, study, and turn into drawing warmups.',
        visualTitle: 'Get a fresh object drawing prompt',
        visualDescription:
          'This mode keeps the results visual and compact so you can grab a prompt and start drawing right away.',
        bulkTitle: 'Build a batch for sketch practice',
        bulkDescription:
          'Generate a longer drawing list when you need warmups for a class, challenge, or daily sketch routine.',
        seoTitle: 'Random Object To Draw Generator With Visual Cards',
        seoDescription:
          'Generate random things to draw with visual object cards, copyable lists, and focused prompts for sketch practice.',
        landing: {
          introTitle: 'A drawing-focused object generator should help you sketch faster, not slow you down.',
          introBody:
            'This page is tuned for people who specifically want random things to draw. The goal is to surface objects that are easy to visualize, easy to sketch, and flexible enough for warmups, classroom prompts, or longer illustration challenges. Keeping this intent separate from the homepage gives the page stronger topical relevance and a clearer use case for artists, students, and teachers.',
          featureTitle: 'What makes this page useful for drawing',
          featureLead: 'The page is designed around sketch-friendly object prompts, not generic noun clutter.',
          features: [
            {
              title: 'More drawable categories',
              body: 'Animals, food, household items, and nature prompts are easier to sketch than abstract or overly gimmicky objects.',
            },
            {
              title: 'Visual-first results',
              body: 'The cards keep the prompt readable at a glance so you can move from browsing to drawing without friction.',
            },
            {
              title: 'Bulk prompt support',
              body: 'If you need a whole sketch session plan, bulk mode lets you generate and copy a larger list instantly.',
            },
          ],
          categoryTitle: 'Best categories for drawing prompts',
          categoryLead:
            'These categories are the strongest fit for drawing because they produce recognizable silhouettes, textures, and scene ideas.',
          useCasesTitle: 'Common drawing use cases',
          useCases: [
            'Daily sketch warmups',
            'Classroom drawing prompts',
            'Inktober-style random challenges',
            'Character prop studies',
            'Still life brainstorming',
            'Storyboard object cues',
          ],
          faqTitle: 'Random object to draw FAQ',
          faqs: [
            {
              question: 'What is a random object to draw generator useful for?',
              answer:
                'It helps you find sketch prompts quickly when you need a warmup, a classroom activity, or a way to break creative block.',
            },
            {
              question: 'Why have a separate page for drawing prompts?',
              answer:
                'Because drawing intent is specific. A dedicated page can emphasize sketch-friendly categories and more visual presentation without competing with the broader homepage.',
            },
            {
              question: 'Can I generate multiple drawing prompts at once?',
              answer:
                'Yes. You can enter a custom quantity and create a longer list for a full practice session or a class exercise.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '绘画提示',
        title: '随机绘画物品生成器',
        description:
          '生成更适合拿来画的物品提示，帮助你快速进入素描、速写和创作热身状态。',
        visualTitle: '马上抽一个可开画的物品',
        visualDescription:
          '这里的结果更偏向好画、好观察、好展开的对象，方便你立刻开始画。',
        bulkTitle: '批量生成一组绘画练习题',
        bulkDescription:
          '如果你想做整组速写、课堂练习或每日挑战，可以一次生成更长的绘画清单。',
        seoTitle: '随机绘画物品生成器 - 适合速写和创作热身',
        seoDescription:
          '生成适合拿来画的随机物品，支持视觉卡片和批量清单，适合速写、课堂和创作练习。',
        landing: {
          introTitle: '真正适合绘画的随机物品页，应该让你更快开始画，而不是先筛结果。',
          introBody:
            '这个页面专门面向“想找随机东西来画”的用户。相比混合型首页，这里更强调动物、食物、家居和自然物体这类更容易观察轮廓、质感和结构的题材。这样做不仅更贴近搜索意图，也更适合画师、学生和老师直接拿来练习。',
          featureTitle: '这个页面为什么更适合绘画',
          featureLead: '重点不是词越杂越好，而是对象要更容易画、更容易延展。',
          features: [
            {
              title: '更偏可画对象',
              body: '动物、食物、家居和自然物体更容易形成轮廓、质感和构图线索。',
            },
            {
              title: '结果更直观',
              body: '视觉卡片能让你更快判断这个对象适不适合拿来做速写或创作。',
            },
            {
              title: '适合整组练习',
              body: '批量模式可以直接生成一组练习题，用于课堂、挑战或每日打卡。',
            },
          ],
          categoryTitle: '更适合画画的分类',
          categoryLead:
            '这些分类更容易给出清晰的外形、表面细节和场景感，是绘画练习里最常用的对象池。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '每日速写热身',
            '课堂绘画提示',
            '挑战赛题库',
            '角色道具练习',
            '静物灵感发散',
            '分镜物件提示',
          ],
          faqTitle: '绘画物品页常见问题',
          faqs: [
            {
              question: '随机绘画物品生成器适合做什么？',
              answer: '适合速写热身、打破创作卡顿、课堂出题和给自己找一个马上能画的对象。',
            },
            {
              question: '为什么要单独做一个绘画页？',
              answer:
                '因为“想找东西来画”是非常明确的需求。独立页面可以把更适合画的对象和更直观的展示方式集中起来。',
            },
            {
              question: '可以一次生成很多个绘画对象吗？',
              answer: '可以。你可以输入数量，批量生成一组练习对象，方便做整套训练。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '描画プロンプト',
        title: '描くためのランダムオブジェクト',
        description:
          'スケッチやお絵描きのウォームアップに使いやすいモノを、視覚的にすばやく引けます。',
        visualTitle: '今すぐ描けるモノを引く',
        visualDescription:
          '描きやすさを重視した見せ方で、迷う時間を減らしてすぐに手を動かせます。',
        bulkTitle: 'スケッチ練習用にまとめて生成',
        bulkDescription:
          '授業、練習会、毎日のドローイング習慣向けに、複数のお題をまとめて作れます。',
        seoTitle: '描くためのランダムオブジェクトジェネレーター',
        seoDescription:
          '描きやすいランダムオブジェクトを視覚カードと一覧で生成。スケッチ練習や授業のお題に便利です。',
        landing: {
          introTitle: '描画向けページは、使う前に考え込ませないことが大切です。',
          introBody:
            'このページは「描くものを探したい」人向けに調整されています。動物、食べ物、日用品、自然物など、形や質感を取りやすい対象を中心にしているため、トップページよりもお絵描き用途に向いています。意図を分けることで、検索にも実用にも強い着地先になります。',
          featureTitle: '描画向けに役立つポイント',
          featureLead: '単語の数ではなく、描きやすさと視認性を重視しています。',
          features: [
            {
              title: '描きやすいカテゴリ中心',
              body: '動物、食べ物、日用品、自然物は輪郭や質感を取りやすく、練習向きです。',
            },
            {
              title: '視覚カードで判断しやすい',
              body: 'カード表示なので、実際に描きたいかどうかを一目で決めやすくなります。',
            },
            {
              title: 'まとめて練習にも対応',
              body: '一括生成で、そのままドローイング課題セットを作れます。',
            },
          ],
          categoryTitle: '描くのに向いたカテゴリ',
          categoryLead:
            'シルエット、表面、場面づくりのヒントを得やすいカテゴリを優先して並べています。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '毎日のスケッチ練習',
            '授業のお題',
            'チャレンジ課題',
            '小道具の研究',
            '静物の発想出し',
            '絵コンテの物体ヒント',
          ],
          faqTitle: '描画ページ FAQ',
          faqs: [
            {
              question: 'このページは何に使えますか？',
              answer: 'スケッチのウォームアップ、授業のお題、創作ブロックの解消などに使えます。',
            },
            {
              question: 'なぜ描画専用ページが必要ですか？',
              answer:
                '描く対象を探す意図は明確だからです。描きやすいカテゴリと視覚的な見せ方を集中させることで使いやすくなります。',
            },
            {
              question: '複数のお題を一度に作れますか？',
              answer: 'はい。数量を入力して、練習用のリストをまとめて作れます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-kids',
    categories: ['animals', 'household', 'food', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Kids prompts',
        title: 'Random Objects For Kids',
        description:
          'Generate playful, classroom-friendly object prompts for guessing games, drawing, and speaking activities.',
        visualTitle: 'Kid-friendly random object cards',
        visualDescription:
          'These prompts are better suited to classrooms, family activities, and quick games with younger learners.',
        bulkTitle: 'Build a kids activity list',
        bulkDescription:
          'Create a longer object list for worksheets, speaking rounds, charades, or group icebreakers.',
        seoTitle: 'Random Objects For Kids Generator',
        seoDescription:
          'Generate kid-friendly random object prompts for games, classroom warmups, speaking practice, and drawing activities.',
        landing: {
          introTitle: 'A kids-oriented random object page should feel simple, visual, and ready for activities.',
          introBody:
            'This page is designed for teachers, parents, and activity leaders who need safe, familiar object prompts for children. By focusing on friendly categories and clear visual cards, it becomes easier to run guessing games, drawing rounds, and speaking warmups without first filtering out odd results.',
          featureTitle: 'Why this page works better for kids',
          featureLead: 'The categories and presentation are tuned for fast comprehension and playful use.',
          features: [
            {
              title: 'Familiar object pool',
              body: 'The page leans toward objects and animals that children can recognize quickly and talk about easily.',
            },
            {
              title: 'Visual support',
              body: 'Card-based results make it easier for younger learners to respond before they lose focus.',
            },
            {
              title: 'Useful for groups',
              body: 'Bulk generation helps teachers and facilitators prepare object lists for multiple rounds or stations.',
            },
          ],
          categoryTitle: 'Best categories for kids',
          categoryLead:
            'These categories produce safer, simpler, more game-friendly prompts for younger learners and family activities.',
          useCasesTitle: 'Popular kid-friendly uses',
          useCases: [
            'Classroom warmups',
            'Kids charades',
            'Speaking practice',
            'Family game night',
            'Simple drawing prompts',
            'Vocabulary review',
          ],
          faqTitle: 'Kids object generator FAQ',
          faqs: [
            {
              question: 'What is this page best for?',
              answer:
                'It works well for teachers, parents, and group leaders who need quick object prompts for children.',
            },
            {
              question: 'Why not just use the homepage?',
              answer:
                'A dedicated page for kids lets us emphasize simpler, friendlier categories and more suitable use cases.',
            },
            {
              question: 'Can I make a larger list for classroom activities?',
              answer:
                'Yes. You can generate a longer batch and copy it into a worksheet, slide deck, or activity sheet.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '儿童活动',
        title: '适合孩子的随机物品',
        description:
          '生成更适合课堂、亲子和游戏场景的随机物品提示，方便孩子快速理解和参与。',
        visualTitle: '面向孩子的随机物品卡片',
        visualDescription:
          '这里的结果更偏简单、熟悉、容易表达，适合课堂热身和亲子活动。',
        bulkTitle: '生成一组儿童活动清单',
        bulkDescription:
          '需要做课堂题卡、口语练习或多人游戏时，可以一次生成更长的物品列表。',
        seoTitle: '适合孩子的随机物品生成器',
        seoDescription:
          '生成适合孩子的随机物品提示，适用于课堂热身、你演我猜、口语练习和简单绘画活动。',
        landing: {
          introTitle: '面向孩子的随机物品页，应该简单、直观，而且拿来就能用。',
          introBody:
            '这个页面主要服务于老师、家长和活动组织者，他们需要的是熟悉、安全、容易理解的物品提示，而不是太奇怪或太发散的结果。把这类需求独立出来，可以让页面更适合课堂、亲子活动和轻游戏场景。',
          featureTitle: '为什么孩子场景更适合这个页面',
          featureLead: '重点是让孩子看得懂、说得出、玩得起来。',
          features: [
            {
              title: '更熟悉的对象池',
              body: '优先展示孩子更容易识别和表达的动物、食物、日常物品和趣味对象。',
            },
            {
              title: '视觉反馈更直接',
              body: '卡片式展示能帮助孩子更快理解题目，不容易在读文字时掉线。',
            },
            {
              title: '适合群体活动',
              body: '批量模式可以直接生成一整组题目，方便课堂或家庭活动连续使用。',
            },
          ],
          categoryTitle: '更适合孩子的分类',
          categoryLead:
            '这些分类更简单、更有趣，也更容易用于课堂热身、游戏和词汇表达练习。',
          useCasesTitle: '常见儿童使用场景',
          useCases: [
            '课堂热身',
            '儿童版你演我猜',
            '口语表达练习',
            '家庭游戏夜',
            '简单绘画提示',
            '词汇复习',
          ],
          faqTitle: '儿童物品页常见问题',
          faqs: [
            {
              question: '这个页面最适合拿来做什么？',
              answer: '最适合课堂活动、亲子游戏、口语练习和帮助孩子快速进入状态的小任务。',
            },
            {
              question: '为什么不直接用首页？',
              answer:
                '因为儿童场景更适合简单、熟悉的对象。独立页面可以把更友好的分类和玩法集中起来。',
            },
            {
              question: '可以一次生成很多题目吗？',
              answer: '可以。你可以批量生成并复制，用来做整套课堂活动或游戏轮次。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '子ども向け',
        title: '子ども向けランダムオブジェクト',
        description:
          '授業、家族ゲーム、会話練習に使いやすい、子ども向けのランダムなお題を生成します。',
        visualTitle: '子ども向けオブジェクトカード',
        visualDescription:
          'より分かりやすく、親しみやすい結果を中心に表示し、活動にすぐ使える構成にしています。',
        bulkTitle: '子ども向けお題リストを作る',
        bulkDescription:
          '授業、ジェスチャーゲーム、会話練習用に複数のお題をまとめて作れます。',
        seoTitle: '子ども向けランダムオブジェクトジェネレーター',
        seoDescription:
          '子ども向けのランダムオブジェクトを生成。授業の導入、会話練習、お絵描き、ゲームに便利です。',
        landing: {
          introTitle: '子ども向けページは、わかりやすさと使いやすさが最優先です。',
          introBody:
            'このページは先生、保護者、アクティビティ担当者向けに、子どもが理解しやすいモノを中心にまとめています。親しみやすいカテゴリに絞ることで、授業、家族遊び、会話練習にすぐ使える実用ページになります。',
          featureTitle: '子ども向けに向いている理由',
          featureLead: '見てすぐ伝わり、遊びや練習に流し込みやすい構成です。',
          features: [
            {
              title: 'わかりやすい対象',
              body: '動物、食べ物、日用品、楽しい小物など、子どもが反応しやすい対象を中心にしています。',
            },
            {
              title: 'カード表示で理解しやすい',
              body: '視覚的に見せることで、文字だけよりも活動への入りがスムーズになります。',
            },
            {
              title: '複数ラウンドにも便利',
              body: '一括生成で、授業やゲームのためのお題セットをまとめて準備できます。',
            },
          ],
          categoryTitle: '子ども向けに使いやすいカテゴリ',
          categoryLead:
            '理解しやすく、遊びや学習につなげやすいカテゴリを優先して並べています。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '授業のウォームアップ',
            '子ども向けジェスチャーゲーム',
            '会話練習',
            '家族ゲーム',
            '簡単なお絵描き',
            '語彙の復習',
          ],
          faqTitle: '子ども向けページ FAQ',
          faqs: [
            {
              question: 'このページはどんな場面で使えますか？',
              answer: '授業、家庭での遊び、会話練習、簡単なお絵描き活動などで使いやすいです。',
            },
            {
              question: 'なぜ子ども向けの専用ページがあるのですか？',
              answer:
                '子ども向けには、より親しみやすく分かりやすい対象を優先した方が使いやすいからです。',
            },
            {
              question: '複数のお題を一気に作れますか？',
              answer: 'はい。活動や授業用にまとめて生成してコピーできます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-charades',
    categories: ['animals', 'household', 'food', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Charades prompts',
        title: 'Random Objects For Charades',
        description:
          'Generate playful object prompts that are easy to act out, guess, and use in party games or classroom rounds.',
        visualTitle: 'Charades-ready random object cards',
        visualDescription:
          'This page emphasizes recognizable, game-friendly prompts that work well for fast acting and guessing.',
        bulkTitle: 'Build a charades prompt list',
        bulkDescription:
          'Generate a larger batch when you need multiple rounds for a party, family night, or speaking activity.',
        seoTitle: 'Random Objects For Charades Generator',
        seoDescription:
          'Generate random objects for charades with visual cards and copyable lists for party games, classrooms, and team icebreakers.',
        landing: {
          introTitle: 'A charades page should surface objects people can act out instantly.',
          introBody:
            'Users looking for charades prompts want recognizable objects with strong visual cues and simple actions. That intent is different from broad random object discovery, so this page narrows the pool to categories that work better in games. It gives you faster rounds, cleaner prompts, and a more search-relevant landing page for party, classroom, and team-building use.',
          featureTitle: 'What makes a good charades prompt page',
          featureLead: 'The best prompts are easy to imagine, easy to mime, and easy to guess.',
          features: [
            {
              title: 'Recognizable objects first',
              body: 'Animals, food, household items, and funny objects are easier to act out than vague nouns or abstract concepts.',
            },
            {
              title: 'Faster game flow',
              body: 'Visual cards help players scan prompts quickly before the round starts, which keeps the game moving.',
            },
            {
              title: 'Works for groups',
              body: 'Bulk generation makes it easy to prepare multiple rounds for parties, classes, or facilitation sessions.',
            },
          ],
          categoryTitle: 'Best charades categories',
          categoryLead:
            'These categories produce prompts that are more expressive, more physical, and easier to guess in live group settings.',
          useCasesTitle: 'Popular charades use cases',
          useCases: [
            'Party charades',
            'Family game night',
            'Classroom warmups',
            'ESL speaking games',
            'Team icebreakers',
            'Kids guessing rounds',
          ],
          faqTitle: 'Charades generator FAQ',
          faqs: [
            {
              question: 'Why use a dedicated random objects for charades page?',
              answer:
                'Because charades works best with objects people can recognize and mime quickly. A focused page creates stronger prompts than a fully generic object pool.',
            },
            {
              question: 'Can I generate enough prompts for multiple rounds?',
              answer:
                'Yes. You can enter your own quantity and make a longer list for a full party, class, or workshop session.',
            },
            {
              question: 'Is this useful for classrooms too?',
              answer:
                'Definitely. The prompt set works well for vocabulary games, speaking warmups, and short movement-based activities.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '你演我猜',
        title: '适合你演我猜的随机物品',
        description:
          '生成更容易表演、更容易被猜到的物品提示，适合聚会、课堂和破冰互动。',
        visualTitle: '适合你演我猜的物品卡片',
        visualDescription:
          '这里更强调容易演、容易猜、容易带动气氛的对象，而不是泛泛的随机名词。',
        bulkTitle: '生成一整组你演我猜题目',
        bulkDescription:
          '如果你要跑多轮游戏或课堂活动，可以一次批量生成并复制整组提示。',
        seoTitle: '适合你演我猜的随机物品生成器',
        seoDescription:
          '生成适合你演我猜的随机物品，支持视觉卡片和批量清单，适用于聚会、课堂和团队破冰。',
        landing: {
          introTitle: '你演我猜页面的重点，不是词越多越好，而是对象要越容易演越好。',
          introBody:
            '想找你演我猜题目的人，真正需要的是“容易理解、容易表演、容易被猜到”的对象，而不是抽象名词或太奇怪的概念。所以这个页面会更偏向动物、日用品、食物和有点搞笑感的小物件，让游戏更顺，也更适合聚会、课堂和团队活动。',
          featureTitle: '为什么这个页面更适合游戏场景',
          featureLead: '重点是提高可表演性，而不是把所有词都混在一起。',
          features: [
            {
              title: '更容易猜',
              body: '优先使用更常见、更直观的物品和角色型对象，减少冷门词带来的卡顿。',
            },
            {
              title: '更容易带节奏',
              body: '视觉卡片能帮助出题前快速扫一眼，让游戏节奏更快更顺。',
            },
            {
              title: '适合多人轮次',
              body: '批量模式可以直接生成一整组题目，方便连续跑多轮。'
            }
          ],
          categoryTitle: '更适合你演我猜的分类',
          categoryLead:
            '这些分类里的对象动作感更强、辨识度更高，更适合现场互动和猜词游戏。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '聚会游戏',
            '家庭游戏夜',
            '课堂热身',
            '英语口语游戏',
            '团队破冰',
            '儿童猜词活动',
          ],
          faqTitle: '你演我猜页常见问题',
          faqs: [
            {
              question: '为什么要单独做一个你演我猜页面？',
              answer: '因为游戏场景更适合可表演、可联想的对象。独立页面能给出更适合现场互动的结果。',
            },
            {
              question: '可以生成很多轮题目吗？',
              answer: '可以。你可以输入数量，一次性生成整组题目，用于派对、课堂或工作坊活动。',
            },
            {
              question: '课堂里也适合用吗？',
              answer: '很适合。它可以拿来做词汇热身、英语口语练习和短时间活动。'
            }
          ],
        },
      },
      ja: {
        heroEyebrow: 'ジェスチャーゲーム',
        title: 'ジェスチャー向けランダムオブジェクト',
        description:
          '演じやすく、当てやすいお題を生成。パーティーや授業のゲームに使いやすい構成です。',
        visualTitle: 'ジェスチャー向けオブジェクトカード',
        visualDescription:
          '見ただけで動きに変えやすい対象を中心に、ゲーム向けの結果を出します。',
        bulkTitle: 'ジェスチャー用お題リストを作る',
        bulkDescription:
          'パーティーや授業で複数ラウンド回したいときに、まとめてお題を用意できます。',
        seoTitle: 'ジェスチャー向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ジェスチャーゲーム向けのランダムオブジェクトを生成。パーティー、授業、アイスブレイクに便利です。',
        landing: {
          introTitle: 'ジェスチャー用ページは、すぐ演じられる対象を出せることが大切です。',
          introBody:
            'ジェスチャーゲームで使うお題は、分かりやすく、動きにしやすく、見た人が当てやすいことが重要です。このページはその意図に合わせて、動物、日用品、食べ物、少しユーモラスな物体を中心に構成しています。トップページとは違う使い道を明確にした専用ページです。',
          featureTitle: 'ジェスチャー向けに向いている理由',
          featureLead: '演じやすさと分かりやすさを優先したお題構成です。',
          features: [
            {
              title: '分かりやすい対象が多い',
              body: '身近でイメージしやすい対象を優先することで、ゲームのテンポを落としにくくなります。',
            },
            {
              title: 'カード表示で準備しやすい',
              body: '視覚カードで素早くお題を確認できるので、進行がスムーズになります。',
            },
            {
              title: '複数ラウンドにも対応',
              body: '一括生成を使えば、授業やパーティー向けにまとめてお題を作れます。',
            },
          ],
          categoryTitle: 'ジェスチャーに向いたカテゴリ',
          categoryLead:
            '表現しやすく、見た人が想像しやすいカテゴリを優先して使えます。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            'パーティーゲーム',
            '家族でのゲーム',
            '授業の導入',
            '英会話ゲーム',
            'チームのアイスブレイク',
            '子ども向け当てっこ',
          ],
          faqTitle: 'ジェスチャーページ FAQ',
          faqs: [
            {
              question: 'なぜジェスチャー専用ページがあるのですか？',
              answer:
                'ジェスチャーでは、すぐに演じやすい対象の方が使いやすいからです。専用ページにするとゲーム向けの結果を出しやすくなります。',
            },
            {
              question: '何ラウンド分でも作れますか？',
              answer:
                'はい。数量を入れて、一度に複数ラウンド分のリストを作成できます。',
            },
            {
              question: '授業でも使えますか？',
              answer:
                '使えます。語彙ゲーム、会話のウォームアップ、短いアクティビティに向いています。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-esl',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'ESL prompts',
        title: 'Random Objects For ESL',
        description:
          'Generate easy object prompts for speaking games, vocabulary review, and classroom warmups in ESL lessons.',
        visualTitle: 'ESL-friendly object cards',
        visualDescription:
          'This page focuses on concrete, teachable objects that are easier to describe, guess, and use in short speaking tasks.',
        bulkTitle: 'Build an ESL prompt list',
        bulkDescription:
          'Generate a longer set for worksheets, pair work, pronunciation drills, or quick vocabulary rounds.',
        seoTitle: 'Random Objects For ESL Generator',
        seoDescription:
          'Generate random objects for ESL lessons, speaking games, vocabulary review, and classroom warmups with visual cards and copyable lists.',
        landing: {
          introTitle: 'An ESL object page should surface clear, teachable nouns instead of random noise.',
          introBody:
            'Teachers and tutors using random objects in ESL classes usually need simple, concrete prompts that students can describe quickly. This page narrows the object pool to categories that work well in vocabulary lessons and speaking activities. It keeps the results more usable for learners and makes the page more focused for search engines.',
          featureTitle: 'Why this page works for ESL',
          featureLead: 'The best ESL prompts are concrete, familiar, and easy to turn into speaking tasks.',
          features: [
            {
              title: 'Concrete object choices',
              body: 'Animals, food, nature, and household items are easier for learners to describe than abstract concepts or novelty prompts.',
            },
            {
              title: 'Fast visual comprehension',
              body: 'Image-based cards help learners understand the prompt faster and lower the barrier to participation.',
            },
            {
              title: 'Useful for pair and group work',
              body: 'Bulk mode makes it easy to prepare object sets for guessing games, pair speaking rounds, or worksheet activities.',
            },
          ],
          categoryTitle: 'Best categories for ESL',
          categoryLead:
            'These categories produce nouns that are simple enough for vocabulary practice while still being varied enough for speaking games.',
          useCasesTitle: 'Popular ESL use cases',
          useCases: [
            'Vocabulary review',
            'Speaking warmups',
            'Guessing games',
            'Pair discussion prompts',
            'Pronunciation drills',
            'Worksheet creation',
          ],
          faqTitle: 'ESL object generator FAQ',
          faqs: [
            {
              question: 'How can I use random objects in ESL lessons?',
              answer:
                'They work well for vocabulary practice, speaking prompts, guessing games, and short warmup activities where learners need concrete nouns.',
            },
            {
              question: 'Why have a dedicated ESL page instead of the main generator?',
              answer:
                'A focused ESL page can avoid overly weird prompts and emphasize objects that are easier to teach, describe, and reuse in class.',
            },
            {
              question: 'Can I make a list for a worksheet or class game?',
              answer:
                'Yes. You can generate multiple objects at once and copy the list into your lesson plan or worksheet.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: 'ESL 教学',
        title: '适合 ESL 的随机物品',
        description:
          '生成更适合英语课堂的物品提示，方便做词汇练习、口语热身和猜词游戏。',
        visualTitle: '适合 ESL 的物品卡片',
        visualDescription:
          '这里优先展示更具体、更容易描述的对象，适合初中级英语学习场景。',
        bulkTitle: '生成一组 ESL 教学题目',
        bulkDescription:
          '需要做课堂题卡、练习纸或分组游戏时，可以一次性生成更长的清单。',
        seoTitle: '适合 ESL 的随机物品生成器',
        seoDescription:
          '生成适合 ESL 课堂的随机物品，适用于词汇练习、口语热身、猜词活动和练习纸制作。',
        landing: {
          introTitle: 'ESL 场景下真正有用的物品页，应该先保证对象具体、好讲、好用。',
          introBody:
            '英语老师和学习者在使用随机物品时，最需要的是具体名词，而不是太抽象或太奇怪的结果。所以这个页面把对象集中在动物、食物、自然和日用品上，让它更适合拿来做词汇复习、看图说话、配对活动和口语热身。',
          featureTitle: '为什么这个页面更适合 ESL',
          featureLead: '重点不是随机，而是教学可用性更高。',
          features: [
            {
              title: '对象更具体',
              body: '优先使用更容易讲解、更容易被学生描述的物品和生物类名词。',
            },
            {
              title: '看图更容易进入状态',
              body: '图片卡片可以降低理解成本，让学生更快参与到口语或猜词活动里。',
            },
            {
              title: '适合课堂成组使用',
              body: '批量模式方便老师一次性准备多组对象，用于练习纸、配对活动或游戏。'
            }
          ],
          categoryTitle: '更适合 ESL 的分类',
          categoryLead:
            '这些分类的名词辨识度更高、使用频率更高，也更适合课堂里的描述和互动练习。',
          useCasesTitle: '常见 ESL 使用场景',
          useCases: [
            '词汇复习',
            '口语热身',
            '猜词游戏',
            '双人对话题',
            '发音练习',
            '练习纸制作',
          ],
          faqTitle: 'ESL 页面常见问题',
          faqs: [
            {
              question: '随机物品可以怎么用在 ESL 课堂里？',
              answer: '可以用来做词汇复习、描述练习、猜词游戏、口语热身和练习纸出题。',
            },
            {
              question: '为什么要单独做一个 ESL 页面？',
              answer:
                '因为 ESL 更需要可教学、可描述的具体名词。独立页面可以减少不适合课堂的结果。',
            },
            {
              question: '可以批量生成课堂用清单吗？',
              answer: '可以。你可以一次生成多个对象，并直接复制到课件或练习纸里。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: 'ESL 学習',
        title: 'ESL向けランダムオブジェクト',
        description:
          '語彙練習、スピーキング、ウォームアップに使いやすいオブジェクトをランダム生成します。',
        visualTitle: 'ESL向けオブジェクトカード',
        visualDescription:
          '説明しやすく、授業に使いやすい対象を中心に表示する構成です。',
        bulkTitle: 'ESL用お題リストを作る',
        bulkDescription:
          'ワークシートや会話ゲーム、授業の小テスト用に複数のお題をまとめて準備できます。',
        seoTitle: 'ESL向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ESL授業向けのランダムオブジェクトを生成。語彙練習、会話活動、ウォームアップに便利です。',
        landing: {
          introTitle: 'ESL向けページでは、まず教えやすい名詞を出せることが重要です。',
          introBody:
            'ESL授業で使うランダムオブジェクトは、学習者がすぐ理解できる具体的な名詞であることが大切です。このページは動物、食べ物、自然、日用品を中心にしているため、語彙練習やスピーキング活動でそのまま使いやすくなっています。',
          featureTitle: 'ESLで使いやすい理由',
          featureLead: '授業で再利用しやすい具体名詞を優先しています。',
          features: [
            {
              title: '教えやすい対象',
              body: '抽象語よりも説明しやすい具体物を優先しているため、授業で扱いやすいです。',
            },
            {
              title: '視覚カードで理解しやすい',
              body: '画像があることで、学習者が意味を早くつかみやすくなります。',
            },
            {
              title: '一括生成で教材化しやすい',
              body: 'まとめて生成して、ワークシートやゲーム用リストに流用できます。',
            },
          ],
          categoryTitle: 'ESL向けに使いやすいカテゴリ',
          categoryLead:
            '頻出で説明しやすい名詞が出やすいカテゴリを優先しています。',
          useCasesTitle: 'よくあるESLでの使い方',
          useCases: [
            '語彙練習',
            'スピーキング導入',
            '当てっこゲーム',
            'ペア会話',
            '発音練習',
            '教材作成',
          ],
          faqTitle: 'ESLページ FAQ',
          faqs: [
            {
              question: 'ESL授業でどう使えますか？',
              answer:
                '語彙確認、会話の導入、当てっこゲーム、短い説明練習などに使えます。',
            },
            {
              question: 'なぜESL専用ページが必要ですか？',
              answer:
                '授業向けには、より具体的で説明しやすい対象を優先した方が使いやすいからです。',
            },
            {
              question: '授業用にまとめて生成できますか？',
              answer:
                'はい。複数のお題を一度に作って教材に流用できます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-storytelling',
    categories: ['animals', 'household', 'food', 'nature', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Story prompts',
        title: 'Random Objects For Storytelling',
        description:
          'Generate object prompts that can kick off scenes, character props, and story ideas without overthinking.',
        visualTitle: 'Story-friendly object cards',
        visualDescription:
          'Use these cards when you want an object that can anchor a scene, clue, conflict, or visual hook in a story.',
        bulkTitle: 'Build a storytelling object list',
        bulkDescription:
          'Generate a larger set for writing exercises, prompt jars, improv scenes, or classroom story rounds.',
        seoTitle: 'Random Objects For Storytelling Generator',
        seoDescription:
          'Generate random objects for storytelling, writing prompts, improv scenes, and creative exercises with visual cards and bulk lists.',
        landing: {
          introTitle: 'Storytelling prompts work better when the object suggests a scene, not just a noun.',
          introBody:
            'Writers and facilitators often use random objects to unlock scenes, characters, or small story tensions. This page is built around that use case. By combining everyday objects, animals, nature items, and playful oddities, it creates a better object pool for storytelling than a broad utility homepage alone.',
          featureTitle: 'Why this page helps storytelling',
          featureLead: 'Objects become more useful when they feel like story anchors instead of random filler.',
          features: [
            {
              title: 'Scene-building object pool',
              body: 'The mix of categories is broad enough for variety but focused enough to keep results concrete and usable in stories.',
            },
            {
              title: 'Visual sparks for writers',
              body: 'Card-based prompts make it easier to imagine how an object looks, where it appears, and who might interact with it.',
            },
            {
              title: 'Good for workshops and exercises',
              body: 'Bulk generation is ideal for writing classes, improv rounds, and prompt sets where every participant needs a different object.',
            },
          ],
          categoryTitle: 'Useful object categories for storytelling',
          categoryLead:
            'These categories give you a mix of familiar objects, strong visuals, and a little oddity to keep scenes interesting.',
          useCasesTitle: 'Popular storytelling use cases',
          useCases: [
            'Creative writing warmups',
            'Improv scene prompts',
            'Character prop ideas',
            'Story circle activities',
            'Prompt jar creation',
            'Classroom writing rounds',
          ],
          faqTitle: 'Storytelling object generator FAQ',
          faqs: [
            {
              question: 'How do random objects help storytelling?',
              answer:
                'A single object can trigger a setting, a clue, a memory, or a character action. Random prompts help break blank-page paralysis.',
            },
            {
              question: 'Why have a storytelling-specific page?',
              answer:
                'Because storytelling intent is different from party games or generic browsing. This page is tuned for scene-worthy, reusable prompts.',
            },
            {
              question: 'Can I generate a full writing exercise list?',
              answer:
                'Yes. You can create a larger batch and copy it for classroom prompts, writing circles, or workshop rounds.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '故事灵感',
        title: '适合讲故事的随机物品',
        description:
          '生成更适合做故事线索、场景道具和创作提示的随机物品，帮你更快进入写作状态。',
        visualTitle: '适合故事创作的物品卡片',
        visualDescription:
          '这些对象更容易成为场景、线索、冲突或人物道具，而不只是一个普通名词。',
        bulkTitle: '生成一组讲故事用物品清单',
        bulkDescription:
          '适合写作练习、课堂活动、即兴表演和故事接龙时批量使用。',
        seoTitle: '适合讲故事的随机物品生成器',
        seoDescription:
          '生成适合讲故事和写作练习的随机物品，支持视觉卡片和批量列表，适合课堂、工作坊和创作热身。',
        landing: {
          introTitle: '好的故事提示，不只是给你一个词，而是给你一个能长出场景的对象。',
          introBody:
            '写作者和活动组织者用随机物品时，往往不是想“随机一下”，而是想找到一个能引出角色、场景、回忆或冲突的具体对象。所以这个页面的对象池会兼顾日常物品、自然物、动物和少量有趣元素，让它更适合拿来做写作热身、即兴创作和故事活动。',
          featureTitle: '为什么这个页面更适合讲故事',
          featureLead: '重点是让物品更像“剧情锚点”，而不是纯填空。',
          features: [
            {
              title: '更有场景感的对象池',
              body: '这些分类既足够具体，又能带出更多画面和人物动作，不容易卡死在表面词义上。',
            },
            {
              title: '视觉提示更快触发联想',
              body: '卡片模式能帮助你立刻脑补这个物品会出现在哪里、谁会碰到它、它意味着什么。',
            },
            {
              title: '适合多人创作活动',
              body: '批量模式适合给课堂、工作坊、故事接龙或即兴表演准备成组提示。',
            },
          ],
          categoryTitle: '更适合故事创作的分类',
          categoryLead:
            '这些分类能在“熟悉感”和“新鲜感”之间保持平衡，更容易延展成场景、道具和小冲突。',
          useCasesTitle: '常见故事创作场景',
          useCases: [
            '写作热身',
            '即兴表演提示',
            '角色道具灵感',
            '故事接龙',
            '提示词罐子制作',
            '课堂写作轮次',
          ],
          faqTitle: '故事页常见问题',
          faqs: [
            {
              question: '随机物品为什么适合讲故事？',
              answer:
                '一个具体物品常常能引出一个场景、一段记忆、一个线索或一个人物动作，能帮助你摆脱空白页焦虑。',
            },
            {
              question: '为什么还要单独做故事页？',
              answer:
                '因为故事创作的意图和聚会游戏不一样。这个页面会更强调能承载场景和剧情的对象。',
            },
            {
              question: '可以一次生成整组写作题目吗？',
              answer:
                '可以。你可以批量生成并复制，用于课堂、工作坊或自己的写作练习。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '物語の発想',
        title: '物語向けランダムオブジェクト',
        description:
          'シーン、手がかり、小道具、キャラクターの行動につながるようなオブジェクトを生成します。',
        visualTitle: '物語に使いやすいオブジェクトカード',
        visualDescription:
          'ただの名詞ではなく、場面や出来事を連想しやすい対象を中心に使えます。',
        bulkTitle: '物語用オブジェクトリストを作る',
        bulkDescription:
          '創作練習、ワークショップ、即興シーン、授業のストーリー活動用にまとめて生成できます。',
        seoTitle: '物語向けランダムオブジェクトジェネレーター',
        seoDescription:
          '物語づくりや創作練習向けのランダムオブジェクトを生成。視覚カードと一覧で使いやすく整理できます。',
        landing: {
          introTitle: '物語向けページでは、オブジェクトが場面の入口になることが大切です。',
          introBody:
            '書き手や進行役がランダムオブジェクトを使うとき、本当に欲しいのは“ただの単語”ではなく、場面や行動につながる具体的なきっかけです。このページは日用品、自然物、動物、少しユーモラスな対象を組み合わせ、物語の発想に向いたオブジェクトプールを作っています。',
          featureTitle: '物語向けに役立つ理由',
          featureLead: 'オブジェクトを、場面や展開の起点として使いやすくしています。',
          features: [
            {
              title: '場面につながりやすい対象',
              body: '具体的な見た目や使い道が想像しやすいので、シーンや登場人物の行動を広げやすくなります。',
            },
            {
              title: '視覚から発想しやすい',
              body: 'カード表示で見た瞬間に、どこで誰が使うかを考えやすくなります。',
            },
            {
              title: '創作ワークにも便利',
              body: '一括生成で、授業やワークショップ、即興シーン用のお題セットをまとめて用意できます。',
            },
          ],
          categoryTitle: '物語向けに使いやすいカテゴリ',
          categoryLead:
            '身近さと意外性のバランスがよく、シーンや小道具の発想に広げやすいカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '創作ウォームアップ',
            '即興シーンのお題',
            'キャラクター小道具の発想',
            '物語の連想ゲーム',
            'プロンプト瓶づくり',
            '授業の作文活動',
          ],
          faqTitle: '物語ページ FAQ',
          faqs: [
            {
              question: 'ランダムオブジェクトは物語にどう役立ちますか？',
              answer:
                'ひとつの物体から、場面、記憶、伏線、登場人物の行動などを考え始めることができます。',
            },
            {
              question: 'なぜ物語向け専用ページがあるのですか？',
              answer:
                '物語の発想は、ゲームや一般的なランダム表示とは少し違うため、場面化しやすい対象に寄せたページにしています。',
            },
            {
              question: '創作練習用にまとめて作れますか？',
              answer:
                'はい。複数のお題をまとめて生成して、授業やワークショップに使えます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-classroom',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Classroom prompts',
        title: 'Random Objects For Classroom Activities',
        description:
          'Generate object prompts that work well for classroom warmups, quick games, vocabulary review, and short group activities.',
        visualTitle: 'Classroom-ready object cards',
        visualDescription:
          'This page prioritizes concrete, familiar objects that teachers can use in low-prep activities right away.',
        bulkTitle: 'Build a classroom prompt list',
        bulkDescription:
          'Generate a longer set for worksheets, station cards, group games, or daily warmup routines.',
        seoTitle: 'Random Objects For Classroom Activities',
        seoDescription:
          'Generate random objects for classroom warmups, games, vocabulary activities, and quick teaching prompts.',
        landing: {
          introTitle: 'A classroom object page should be practical before it is clever.',
          introBody:
            'Teachers using random objects in lessons usually need fast prompts they can trust. This page narrows the results toward familiar, teachable objects that fit warmups, speaking tasks, guessing games, and vocabulary practice. It gives classroom users a clearer landing page than a fully general object generator.',
          featureTitle: 'Why this page works in class',
          featureLead: 'The strongest classroom prompts are simple, concrete, and easy to adapt.',
          features: [
            { title: 'Low-prep object pool', body: 'The categories lean toward objects students can recognize and use without much explanation.' },
            { title: 'Useful in multiple formats', body: 'The same prompt set works for speaking, drawing, charades, quick writing, and pair activities.' },
            { title: 'Easy to batch for teaching', body: 'Bulk generation makes it simple to create lists for slides, worksheets, or group cards.' },
          ],
          categoryTitle: 'Best classroom categories',
          categoryLead:
            'These categories are broad enough for reuse but specific enough to stay easy for learners and teachers.',
          useCasesTitle: 'Popular classroom uses',
          useCases: [
            'Bell ringers',
            'Vocabulary review',
            'Speaking warmups',
            'Guessing games',
            'Quick writing tasks',
            'Pair and group work',
          ],
          faqTitle: 'Classroom object generator FAQ',
          faqs: [
            { question: 'What age groups can this page support?', answer: 'It works for kids, teens, and adults because the object pool stays concrete and flexible.' },
            { question: 'Why not just use the main generator?', answer: 'A classroom-focused page keeps the results closer to teaching use cases and reduces distracting prompt types.' },
            { question: 'Can I make a list for tomorrow’s lesson?', answer: 'Yes. Generate a longer batch and copy it directly into your lesson notes or materials.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '课堂活动',
        title: '适合课堂活动的随机物品',
        description:
          '生成适合课堂热身、词汇练习、小组互动和快速活动的随机物品提示。',
        visualTitle: '适合课堂的物品卡片',
        visualDescription:
          '这里更偏具体、熟悉、低准备成本的对象，老师拿来就能用。',
        bulkTitle: '生成一组课堂题目',
        bulkDescription:
          '适合做练习纸、活动卡片、小组任务或每日课堂热身。',
        seoTitle: '适合课堂活动的随机物品生成器',
        seoDescription:
          '生成适合课堂活动的随机物品，适用于热身、词汇练习、口语互动和小组任务。',
        landing: {
          introTitle: '课堂页最重要的不是有趣，而是老师能马上拿来用。',
          introBody:
            '课堂活动场景里的随机物品，需要具体、熟悉、容易被理解，最好还能适配词汇、口语、写作和小游戏等多种玩法。这个页面就是为这种低准备成本的教学需求设计的。',
          featureTitle: '为什么这个页面更适合课堂',
          featureLead: '重点是可复用、可理解、可快速组织。',
          features: [
            { title: '更适合教学的对象池', body: '优先使用学生容易识别和描述的物品，减少冷门和过度发散内容。' },
            { title: '适合多种任务', body: '同一套对象既能做口语活动，也能做速写、词汇和猜词练习。' },
            { title: '方便批量备课', body: '批量模式可以快速生成题目列表，直接放进课件或练习纸。' },
          ],
          categoryTitle: '更适合课堂的分类',
          categoryLead:
            '这些分类既够具体又够通用，方便老师反复复用在不同活动里。',
          useCasesTitle: '常见课堂使用场景',
          useCases: ['上课热身', '词汇复习', '口语练习', '猜词活动', '快速写作', '双人或小组任务'],
          faqTitle: '课堂页常见问题',
          faqs: [
            { question: '这个页面适合什么年龄段？', answer: '从儿童到成人都能用，因为对象足够具体，也足够灵活。' },
            { question: '为什么还要单独做课堂页？', answer: '课堂场景更需要稳定、可教学的对象，独立页面能减少不适合教学的随机结果。' },
            { question: '可以直接做明天的题库吗？', answer: '可以。你可以批量生成并复制，直接放进教案、课件或活动卡片里。' },
          ],
        },
      },
      ja: {
        heroEyebrow: '授業向け',
        title: '授業で使えるランダムオブジェクト',
        description:
          '授業のウォームアップ、語彙練習、グループ活動に使いやすいオブジェクトを生成します。',
        visualTitle: '授業向けオブジェクトカード',
        visualDescription:
          '先生がそのまま活動に流し込みやすい、具体的で分かりやすい対象を優先しています。',
        bulkTitle: '授業用のお題リストを作る',
        bulkDescription:
          'ワークシート、活動カード、グループゲーム、日々の導入に使える一覧をまとめて作れます。',
        seoTitle: '授業向けランダムオブジェクトジェネレーター',
        seoDescription:
          '授業の導入、語彙練習、会話活動に使えるランダムオブジェクトを生成します。',
        landing: {
          introTitle: '授業向けページは、すぐ使えることが何より大切です。',
          introBody:
            '授業で使うランダムオブジェクトは、教師が説明しやすく、学習者が理解しやすいものである必要があります。このページはそうした低準備・高再利用の授業用途に合わせて設計しています。',
          featureTitle: '授業で使いやすい理由',
          featureLead: '分かりやすく、活動に変換しやすい対象を優先しています。',
          features: [
            { title: '授業に向く対象', body: '説明しやすい具体物が中心なので、導入や練習に使いやすいです。' },
            { title: '複数の活動に転用できる', body: '会話、語彙、絵、当てっこなどに同じ対象を再利用できます。' },
            { title: '教材化しやすい', body: '一括生成で、スライドやワークシート用の一覧をすぐ作れます。' },
          ],
          categoryTitle: '授業向けに使いやすいカテゴリ',
          categoryLead: '扱いやすさと再利用しやすさのバランスがよいカテゴリを使えます。',
          useCasesTitle: 'よくある授業での使い方',
          useCases: ['導入活動', '語彙復習', 'スピーキング', '当てっこゲーム', '短い作文', 'ペア・グループ活動'],
          faqTitle: '授業ページ FAQ',
          faqs: [
            { question: 'どの年齢層に向いていますか？', answer: '子どもから大人まで使えます。対象が具体的なので幅広い授業に合わせやすいです。' },
            { question: 'なぜ授業専用ページが必要ですか？', answer: '授業では、より安定して扱いやすい対象を出したいので、専用ページの方が使いやすくなります。' },
            { question: '授業用にまとめて作れますか？', answer: 'はい。一括生成で教材用の一覧をすぐに作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-party-games',
    categories: ['animals', 'food', 'funny', 'household'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Party games',
        title: 'Random Objects For Party Games',
        description:
          'Generate object prompts that are lively, recognizable, and easy to turn into party rounds and fast group games.',
        visualTitle: 'Party-game-ready object cards',
        visualDescription:
          'Use this page when you want faster, more playful prompts for guessing, acting, or improvising with friends.',
        bulkTitle: 'Build a party-game prompt list',
        bulkDescription:
          'Generate enough prompts for multiple rounds, teams, or group stations in one pass.',
        seoTitle: 'Random Objects For Party Games',
        seoDescription:
          'Generate random objects for party games, guessing rounds, and group activities with visual cards and copyable lists.',
        landing: {
          introTitle: 'Party-game prompts work best when they are lively and instantly recognizable.',
          introBody:
            'A party-game page should not feel like a generic word list. It should deliver prompts that people can react to fast, laugh at, and use without stopping the flow of the room. This page biases toward familiar, expressive objects that work well in guessing, acting, and improv-style activities.',
          featureTitle: 'Why this page fits party play',
          featureLead: 'Fast recognition and playful energy matter more than category breadth.',
          features: [
            { title: 'More game-friendly results', body: 'The prompt mix favors objects that are easier to act out, describe, and laugh about in a group setting.' },
            { title: 'Better pacing', body: 'Visual cards make it easier to scan prompts quickly and keep party rounds moving.' },
            { title: 'Enough prompts for a full night', body: 'Bulk generation lets you prepare longer lists for teams, rounds, or rotating activities.' },
          ],
          categoryTitle: 'Best categories for party games',
          categoryLead: 'These categories are expressive, familiar, and lively enough to support fast social gameplay.',
          useCasesTitle: 'Popular party-game uses',
          useCases: ['Guessing rounds', 'Act-it-out games', 'Team competitions', 'Icebreakers', 'Family game night', 'Improv challenges'],
          faqTitle: 'Party-games generator FAQ',
          faqs: [
            { question: 'What kinds of party games is this good for?', answer: 'It works well for charades, guessing games, improv rounds, family play, and quick social warmups.' },
            { question: 'Why not just use the main random object page?', answer: 'This page is tuned for faster, more playful prompts instead of broad general-purpose browsing.' },
            { question: 'Can I generate enough prompts for teams?', answer: 'Yes. You can make a longer list for multiple rounds or team-based play.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '聚会游戏',
        title: '适合聚会游戏的随机物品',
        description:
          '生成更适合聚会、猜词、即兴游戏和多人互动的随机物品提示。',
        visualTitle: '适合聚会游戏的物品卡片',
        visualDescription:
          '这里的对象更容易带气氛、更容易被理解，也更适合拿来现场玩。',
        bulkTitle: '生成一组聚会游戏题目',
        bulkDescription:
          '适合一次准备多轮、分组游戏或轮换活动的题目清单。',
        seoTitle: '适合聚会游戏的随机物品生成器',
        seoDescription:
          '生成适合聚会游戏的随机物品，适用于猜词、即兴、团队互动和家庭游戏夜。',
        landing: {
          introTitle: '聚会游戏更需要“马上能玩”的对象，而不是一长串普通词语。',
          introBody:
            '聚会里的随机物品，重点是反应快、理解快、能带动情绪。所以这个页面会优先选择更容易表演、更容易猜、也更有趣味感的对象，让它更适合多人互动场景。',
          featureTitle: '为什么它更适合聚会',
          featureLead: '重点是提高游戏感和节奏感。',
          features: [
            { title: '对象更适合游戏', body: '结果会更偏向容易演、容易猜、容易制造笑点的对象。' },
            { title: '更利于控场', body: '卡片式展示能帮助组织者更快扫题，不打断游戏节奏。' },
            { title: '能支撑多轮', body: '批量模式适合一次性准备足够长的题库。' },
          ],
          categoryTitle: '更适合聚会游戏的分类',
          categoryLead: '这些分类更轻松、更有画面感，也更适合多人轮次互动。',
          useCasesTitle: '常见聚会使用场景',
          useCases: ['猜词游戏', '表演游戏', '团队竞赛', '破冰活动', '家庭游戏夜', '即兴挑战'],
          faqTitle: '聚会页常见问题',
          faqs: [
            { question: '适合什么类型的聚会游戏？', answer: '适合你演我猜、猜词、即兴表演、家庭互动和快速热场活动。' },
            { question: '为什么不直接用首页？', answer: '这个页面会更强调“适合玩”的对象，而不是泛用型的随机浏览。' },
            { question: '可以准备整晚的题目吗？', answer: '可以。你可以一次生成更长的列表，给多轮或多组活动使用。' },
          ],
        },
      },
      ja: {
        heroEyebrow: 'パーティー向け',
        title: 'パーティーゲーム向けランダムオブジェクト',
        description:
          'パーティー、当てっこ、即興ゲームに使いやすいオブジェクトをランダム生成します。',
        visualTitle: 'パーティー向けオブジェクトカード',
        visualDescription:
          'その場で使いやすく、盛り上がりやすい対象を中心にした構成です。',
        bulkTitle: 'パーティー用お題リストを作る',
        bulkDescription:
          '複数ラウンドやチーム戦に使える長めのリストをまとめて作れます。',
        seoTitle: 'パーティーゲーム向けランダムオブジェクトジェネレーター',
        seoDescription:
          'パーティーゲーム、当てっこ、即興アクティビティ向けのランダムオブジェクトを生成します。',
        landing: {
          introTitle: 'パーティーゲームでは、その場で使いやすい対象がいちばん大事です。',
          introBody:
            'パーティー向けのお題は、見た瞬間に反応できて、すぐ遊びに変えられることが大切です。このページはそうした意図に合わせて、分かりやすく盛り上がりやすい対象を集めています。',
          featureTitle: 'パーティー向けに向いている理由',
          featureLead: 'テンポと楽しさを優先したお題構成です。',
          features: [
            { title: '遊びやすい対象', body: 'すぐ演じたり説明したりしやすい対象を中心にしています。' },
            { title: '進行しやすい', body: 'カード表示で、お題を素早く確認しながら進められます。' },
            { title: '長いリストを作りやすい', body: '一括生成で、複数ラウンド分をまとめて準備できます。' },
          ],
          categoryTitle: 'パーティー向けに使いやすいカテゴリ',
          categoryLead: '盛り上がりやすく、反応しやすいカテゴリを優先しています。',
          useCasesTitle: 'よくある使い方',
          useCases: ['当てっこゲーム', '演技ゲーム', 'チーム対抗', 'アイスブレイク', '家族ゲーム', '即興チャレンジ'],
          faqTitle: 'パーティーページ FAQ',
          faqs: [
            { question: 'どんなゲームに向いていますか？', answer: 'ジェスチャー、当てっこ、即興、家族ゲームなどに向いています。' },
            { question: 'なぜ専用ページがあるのですか？', answer: 'パーティーでは、より遊びやすい対象の方が使いやすいためです。' },
            { question: '何ラウンド分でも作れますか？', answer: 'はい。一括生成で長めのリストをまとめて作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-things-to-describe',
    categories: ['animals', 'food', 'household', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Description prompts',
        title: 'Random Things To Describe',
        description:
          'Generate concrete objects that are useful for speaking practice, descriptive writing, and observation exercises.',
        visualTitle: 'Description-friendly object cards',
        visualDescription:
          'This page favors objects with strong visual details, shapes, textures, and everyday familiarity.',
        bulkTitle: 'Build a description practice list',
        bulkDescription:
          'Generate a longer set for speaking exercises, descriptive paragraphs, or classroom writing rounds.',
        seoTitle: 'Random Things To Describe Generator',
        seoDescription:
          'Generate random things to describe for speaking practice, descriptive writing, observation tasks, and classroom exercises.',
        landing: {
          introTitle: 'Description prompts work best when the object has clear detail to talk about.',
          introBody:
            'People searching for things to describe usually want concrete prompts with visible shape, color, texture, or function. This page is designed around that need. It keeps the object pool grounded in categories that make descriptive speaking and writing easier to start and easier to teach.',
          featureTitle: 'Why this page is good for description practice',
          featureLead: 'Strong descriptive prompts are specific enough to observe but open enough to expand.',
          features: [
            { title: 'Objects with visible detail', body: 'The categories are chosen for surfaces, shapes, colors, and functions that give learners something real to describe.' },
            { title: 'Good for speaking and writing', body: 'The same prompt can support oral description, paragraph writing, or pair discussion tasks.' },
            { title: 'Easy to batch for exercises', body: 'Generate a longer list for classroom drills, workshop prompts, or self-study practice.' },
          ],
          categoryTitle: 'Best categories for describing',
          categoryLead: 'These categories create prompts with enough visual and functional detail to keep description tasks moving.',
          useCasesTitle: 'Popular uses',
          useCases: ['Speaking practice', 'Descriptive writing', 'Observation drills', 'Pair discussion', 'ESL vocabulary work', 'Classroom warmups'],
          faqTitle: 'Description generator FAQ',
          faqs: [
            { question: 'What makes a good object for description?', answer: 'A good prompt gives you something concrete to notice, such as texture, color, shape, use, or mood.' },
            { question: 'Why use a dedicated page for description prompts?', answer: 'Because descriptive practice benefits from objects that are easier to observe and talk about than generic random nouns.' },
            { question: 'Can I generate a full exercise list?', answer: 'Yes. Use bulk mode to build a longer list for writing or speaking practice.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '描述练习',
        title: '适合描述的随机物品',
        description:
          '生成更适合口语描述、观察练习和描写写作的随机物品提示。',
        visualTitle: '适合描述练习的物品卡片',
        visualDescription:
          '这里优先选择更有形状、材质、颜色和生活细节的对象。',
        bulkTitle: '生成一组描述练习题',
        bulkDescription:
          '适合课堂口语、描写写作、观察训练和自我练习时批量使用。',
        seoTitle: '适合描述的随机物品生成器',
        seoDescription:
          '生成适合描述练习的随机物品，适用于口语表达、描写写作、观察任务和课堂活动。',
        landing: {
          introTitle: '描述练习需要的不是随机，而是“有东西可说”的对象。',
          introBody:
            '想练描述的人，往往需要的是形状、颜色、材质、功能都比较明确的对象，这样才能真正展开表达。这个页面就是围绕这种需求设计的，让结果更适合口语练习、描写写作和观察任务。',
          featureTitle: '为什么这个页面更适合描述',
          featureLead: '重点是对象要足够具体，能真正撑起表达。',
          features: [
            { title: '更有细节可说', body: '这些分类里的对象更容易从颜色、形状、材质和用途上展开描述。' },
            { title: '口语写作都能用', body: '同一张卡既能做口语表达，也能做描写段落或观察练习。' },
            { title: '适合成组练习', body: '批量模式可以直接生成一整组练习题，适合课堂和自学。' },
          ],
          categoryTitle: '更适合描述的分类',
          categoryLead: '这些分类能提供更清晰的观察点，让描述不容易停在空泛层面。',
          useCasesTitle: '常见使用场景',
          useCases: ['口语练习', '描写写作', '观察训练', '双人表达', 'ESL 词汇练习', '课堂热身'],
          faqTitle: '描述页常见问题',
          faqs: [
            { question: '什么样的物品更适合描述？', answer: '越具体、越有细节、越能从外观和用途展开的物品，就越适合拿来练描述。' },
            { question: '为什么要单独做一个描述页？', answer: '因为描述练习更需要有细节的对象，而不是泛泛的随机词。' },
            { question: '可以一次生成整组练习题吗？', answer: '可以。批量模式可以帮你快速生成一整套口语或写作题目。' },
          ],
        },
      },
      ja: {
        heroEyebrow: '描写練習',
        title: '描写しやすいランダムオブジェクト',
        description:
          '話す・書く・観察する練習に使いやすい、具体的なオブジェクトを生成します。',
        visualTitle: '描写向けオブジェクトカード',
        visualDescription:
          '形、色、質感、用途などを言葉にしやすい対象を中心にしています。',
        bulkTitle: '描写練習用リストを作る',
        bulkDescription:
          'スピーキング、作文、観察課題、授業練習用にまとめて生成できます。',
        seoTitle: '描写しやすいランダムオブジェクトジェネレーター',
        seoDescription:
          '描写練習に向いたランダムオブジェクトを生成。スピーキング、作文、観察課題に便利です。',
        landing: {
          introTitle: '描写練習では、説明しがいのある対象が重要です。',
          introBody:
            '描写に向くお題は、形、色、手触り、用途などを言葉にしやすいことが大切です。このページはそうした具体性を持つ対象を中心にし、話す・書く・観察する練習に使いやすくしています。',
          featureTitle: '描写に向いている理由',
          featureLead: '見て言葉にしやすい対象を優先しています。',
          features: [
            { title: '細部を言いやすい', body: '色、形、質感、使い方などを具体的に説明しやすい対象が出やすいです。' },
            { title: '話す練習にも書く練習にも使える', body: '同じお題を会話、作文、観察活動に再利用できます。' },
            { title: 'まとめて練習しやすい', body: '一括生成で、授業や自習用のリストをすぐ作れます。' },
          ],
          categoryTitle: '描写向けに使いやすいカテゴリ',
          categoryLead: '観察ポイントが多く、説明を広げやすいカテゴリを使えます。',
          useCasesTitle: 'よくある使い方',
          useCases: ['スピーキング練習', '描写作文', '観察ドリル', 'ペア会話', 'ESL語彙練習', '授業の導入'],
          faqTitle: '描写ページ FAQ',
          faqs: [
            { question: '描写に向くオブジェクトとは？', answer: '見た目や用途を具体的に言葉にしやすい対象が、描写練習に向いています。' },
            { question: 'なぜ描写専用ページが必要ですか？', answer: '描写練習では、より具体的で観察しやすい対象の方が使いやすいからです。' },
            { question: 'まとめて練習用に作れますか？', answer: 'はい。一括生成で作文や会話練習用のリストをまとめて作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-writing-prompts',
    categories: ['animals', 'household', 'food', 'nature', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Writing prompts',
        title: 'Random Objects For Writing Prompts',
        description:
          'Generate concrete object cues that can unlock scenes, paragraphs, character details, and quick writing exercises.',
        visualTitle: 'Writing-prompt object cards',
        visualDescription:
          'These cards help you start with an object and expand outward into scene, memory, conflict, or voice.',
        bulkTitle: 'Build a writing prompt list',
        bulkDescription:
          'Generate a larger batch for journaling, classroom writing, workshops, or creativity exercises.',
        seoTitle: 'Random Objects For Writing Prompts Generator',
        seoDescription:
          'Generate random objects for writing prompts, journaling, classroom writing, and creative exercises with visual cards and bulk lists.',
        landing: {
          introTitle: 'Writing prompts become more useful when the object feels like a story trigger.',
          introBody:
            'Writers often use objects as anchors for detail, scene, memory, or conflict. This page is designed around that creative use instead of generic randomness. It combines familiar objects with a bit of variety so the results feel concrete enough to write from but open enough to branch into many directions.',
          featureTitle: 'Why this page helps writing',
          featureLead: 'Objects are easier to write from when they suggest detail and possibility at the same time.',
          features: [
            { title: 'Concrete starting points', body: 'The object pool helps you begin with something visible and specific instead of a vague abstract cue.' },
            { title: 'Works for short or long writing', body: 'You can use one object for a paragraph warmup or generate many for a larger prompt set.' },
            { title: 'Good for teaching and workshops', body: 'Bulk mode supports classroom writing, journaling prompts, and group exercises.' },
          ],
          categoryTitle: 'Best categories for writing prompts',
          categoryLead: 'These categories create a balance between familiar detail and imaginative stretch, which is ideal for writing exercises.',
          useCasesTitle: 'Popular writing uses',
          useCases: ['Journaling prompts', 'Creative writing warmups', 'Classroom paragraphs', 'Workshop exercises', 'Character detail prompts', 'Scene starters'],
          faqTitle: 'Writing prompts generator FAQ',
          faqs: [
            { question: 'How can random objects help writing?', answer: 'A single object can suggest voice, memory, conflict, setting, or detail, which makes it easier to start writing.' },
            { question: 'Why a writing-specific page?', answer: 'Writing prompts benefit from objects that are concrete but flexible, which is a different use case from games or general browsing.' },
            { question: 'Can I generate a full prompt pack?', answer: 'Yes. Use bulk mode to create a larger list for class, journaling, or workshop use.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '写作提示',
        title: '适合写作提示的随机物品',
        description:
          '生成更适合写作、日记、课堂练笔和创作热身的随机物品线索。',
        visualTitle: '适合写作的物品卡片',
        visualDescription:
          '这些对象更容易变成细节、场景、回忆和人物线索，而不是停留在表面词义上。',
        bulkTitle: '生成一组写作提示清单',
        bulkDescription:
          '适合课堂练笔、工作坊、日记训练和创意写作活动时批量使用。',
        seoTitle: '适合写作提示的随机物品生成器',
        seoDescription:
          '生成适合写作提示的随机物品，适用于日记、课堂写作、工作坊和创作热身。',
        landing: {
          introTitle: '写作提示真正有用的时候，是一个物品能把你带进一个段落，而不是只给你一个词。',
          introBody:
            '写作者用随机物品，并不是想机械地抽词，而是想找到一个能够展开成细节、回忆、冲突、人物道具或场景线索的对象。这个页面就是围绕这种写作用途设计的。',
          featureTitle: '为什么这个页面更适合写作',
          featureLead: '重点是让物品更像写作入口，而不是随机填空。',
          features: [
            { title: '更适合展开细节', body: '对象更具体，更容易转化成段落、场景和人物动作。' },
            { title: '短写长写都能用', body: '你可以用一个对象做热身，也可以批量生成一组做整套练习。' },
            { title: '适合课堂和工作坊', body: '批量模式方便老师和组织者准备一组写作题。' },
          ],
          categoryTitle: '更适合写作的分类',
          categoryLead: '这些分类既有现实感，又留有想象空间，更适合创作和练笔。',
          useCasesTitle: '常见写作使用场景',
          useCases: ['日记提示', '创意写作热身', '课堂短文', '工作坊练习', '人物细节提示', '场景开头练习'],
          faqTitle: '写作页常见问题',
          faqs: [
            { question: '随机物品为什么适合写作？', answer: '一个具体物品常常能引出记忆、场景、动作或冲突，让你更容易下笔。' },
            { question: '为什么需要单独的写作页？', answer: '写作场景更需要“可展开”的对象，这和游戏或泛浏览的意图不一样。' },
            { question: '可以一次生成整套写作提示吗？', answer: '可以。批量模式可以快速生成一组题目，适合课堂、日记或工作坊使用。' },
          ],
        },
      },
      ja: {
        heroEyebrow: 'ライティング',
        title: 'ライティング向けランダムオブジェクト',
        description:
          '作文、日記、授業の短文、創作ウォームアップに使いやすいオブジェクトを生成します。',
        visualTitle: 'ライティング向けオブジェクトカード',
        visualDescription:
          'ひとつの物体から、場面、記憶、人物、小さな衝突へ広げやすい対象を中心にしています。',
        bulkTitle: 'ライティング用お題リストを作る',
        bulkDescription:
          '授業、ジャーナリング、ワークショップ向けに複数のお題をまとめて作れます。',
        seoTitle: 'ライティング向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ライティングや創作練習向けのランダムオブジェクトを生成。授業、日記、ワークショップに便利です。',
        landing: {
          introTitle: 'ライティングでは、オブジェクトが書き出しのきっかけになることが大切です。',
          introBody:
            '書き手がランダムオブジェクトを使うのは、ただの単語ではなく、描写・記憶・場面・行動に広げられる具体物が欲しいからです。このページはそうした創作の入口として機能する対象を集めています。',
          featureTitle: 'ライティング向けに役立つ理由',
          featureLead: '具体性と広がりやすさの両方を持つ対象を優先しています。',
          features: [
            { title: '細部に広げやすい', body: '具体的な物体なので、描写や動作に落とし込みやすいです。' },
            { title: '短文にも長文にも使える', body: 'ひとつの対象で短い練習も、まとめて複数の課題作成もできます。' },
            { title: '授業やワークショップにも便利', body: '一括生成でライティング用のお題セットをすぐ作れます。' },
          ],
          categoryTitle: 'ライティング向けに使いやすいカテゴリ',
          categoryLead: '具体性と想像の余地のバランスがよいカテゴリを優先しています。',
          useCasesTitle: 'よくある使い方',
          useCases: ['日記のテーマ', '創作ウォームアップ', '授業の短文', 'ワークショップ課題', '人物小道具の発想', 'シーンの書き出し'],
          faqTitle: 'ライティングページ FAQ',
          faqs: [
            { question: 'ランダムオブジェクトはライティングにどう役立ちますか？', answer: 'ひとつの物体が、場面、記憶、行動、細部の入口になってくれるからです。' },
            { question: 'なぜライティング専用ページが必要ですか？', answer: '創作では、遊び用のお題よりも、書きやすく広げやすい対象の方が役立つためです。' },
            { question: '複数のお題をまとめて作れますか？', answer: 'はい。一括生成で授業や自習向けのリストをすぐ作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-pictionary',
    categories: ['animals', 'food', 'household', 'nature'],
    defaultVisualCount: 5,
    exampleObjectIds: ['animal-elephant', 'food-apple', 'house-kettle', 'nature-shell', 'animal-butterfly', 'food-popcorn'],
    i18n: {
      en: {
        heroEyebrow: 'Pictionary prompts',
        title: 'Random Objects For Pictionary',
        description:
          'Generate simple, drawable object prompts that work well for Pictionary rounds at home, in class, or during team games.',
        visualTitle: 'Pull a Pictionary-ready object',
        visualDescription:
          'This page leans toward objects people can sketch quickly and other players can recognize without a long explanation.',
        bulkTitle: 'Build a Pictionary round list',
        bulkDescription:
          'Generate a longer list when you need several rounds for game night, classrooms, or workshop warmups.',
        seoTitle: 'Random Objects For Pictionary Generator',
        seoDescription:
          'Generate random objects for Pictionary with visual cards, copyable lists, and prompt ideas that are easier to draw and guess.',
        examples: {
          title: 'Pictionary examples chosen for clear silhouettes',
          lead:
            'These examples show the kind of prompt that works well in a timed drawing game: easy outline, familiar meaning, and enough visual variety for several rounds.',
        },
        landing: {
          introTitle: 'Pictionary works best when the object is quick to draw and easy to guess.',
          introBody:
            'A good Pictionary page should not throw abstract or impossible prompts at the player. This page narrows the object pool toward things with clearer silhouettes, familiar meanings, and enough variety to keep the rounds lively. That makes it more useful for classrooms, family game nights, and team activities than a broad random object page.',
          featureTitle: 'Why this page fits Pictionary better',
          featureLead: 'The goal is faster rounds, cleaner guesses, and fewer dead prompts.',
          features: [
            { title: 'More drawable prompts', body: 'The object mix leans toward items that can be sketched in a few strokes instead of requiring detailed illustration.' },
            { title: 'More guessable results', body: 'Familiar animals, foods, and everyday items keep the game moving and lower the chance of confusion.' },
            { title: 'Ready for multiple rounds', body: 'Bulk mode makes it easy to prepare a whole set for a classroom, party, or workshop.' },
          ],
          categoryTitle: 'Best categories for Pictionary',
          categoryLead: 'Animals, food, household items, and nature prompts tend to produce the cleanest drawings and fastest guesses.',
          useCasesTitle: 'Common Pictionary use cases',
          useCases: ['Family game night', 'Classroom warmups', 'Team-building rounds', 'Kids party activities', 'ESL guessing games', 'Workshop icebreakers'],
          faqTitle: 'Pictionary page FAQ',
          faqs: [
            { question: 'What makes a good Pictionary object?', answer: 'The best prompts are familiar, visual, and easy to sketch quickly without extra explanation.' },
            { question: 'Why use a dedicated Pictionary page instead of the homepage?', answer: 'Because the game needs more drawable and guessable objects than a general-purpose random generator provides.' },
            { question: 'Can I generate a full set for several rounds?', answer: 'Yes. Use the quantity field or bulk mode to create a longer list for multiple rounds.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '你画我猜',
        title: '你画我猜随机物品',
        description:
          '生成更适合你画我猜的随机物品，适用于家庭游戏、课堂互动和团队破冰。',
        visualTitle: '抽一个更适合你画我猜的物品',
        visualDescription:
          '这里更偏向轮廓清楚、容易画、也容易被别人猜中的对象。',
        bulkTitle: '生成一整组你画我猜题目',
        bulkDescription:
          '如果你需要做多轮游戏，可以一次生成更长的题目列表，直接复制使用。',
        seoTitle: '你画我猜随机物品生成器',
        seoDescription:
          '生成适合你画我猜的随机物品，支持视觉卡片和批量复制，适合课堂、派对和团队活动。',
        examples: {
          title: '更适合你画我猜的示例物品',
          lead:
            '这些示例都偏向轮廓清楚、容易画、也容易被猜出来的对象，适合限时出题和多人互动。',
        },
        landing: {
          introTitle: '你画我猜最怕的，不是题目太简单，而是题目根本不好画。',
          introBody:
            '一个真正适合你画我猜的页面，应该优先给出轮廓清楚、容易下笔、又足够常见的物品，而不是把任何随机词都塞进来。这个页面就是围绕“更容易画、也更容易猜”的原则来组织对象池的，所以它比通用首页更适合直接开玩。',
          featureTitle: '为什么这个页面更适合你画我猜',
          featureLead: '重点不是更多，而是更适合快速出题和快速猜中。',
          features: [
            { title: '更容易画', body: '结果更偏向可快速勾出轮廓的对象，而不是需要复杂细节的题目。' },
            { title: '更容易猜', body: '常见动物、食物和日常物件更适合多人互动，也更少卡壳。' },
            { title: '适合多轮', body: '批量模式可以直接帮你准备一整组课堂或聚会题目。' },
          ],
          categoryTitle: '更适合你画我猜的分类',
          categoryLead: '动物、食物、家居和自然物体往往更直观，也更适合快速出题。',
          useCasesTitle: '常见使用场景',
          useCases: ['家庭聚会', '课堂热身', '团队破冰', '儿童派对', '英语猜词', '工作坊暖场'],
          faqTitle: '你画我猜页面常见问题',
          faqs: [
            { question: '什么样的物品更适合你画我猜？', answer: '常见、视觉特征明确、几笔就能表达出来的物品，通常最适合这个游戏。' },
            { question: '为什么要单独做你画我猜页面？', answer: '因为游戏场景更需要“好画、好猜”的对象，而不是泛泛的随机词。' },
            { question: '可以一次生成多轮题目吗？', answer: '可以。你可以直接输入数量或使用批量模式准备整套题目。' },
          ],
        },
      },
      ja: {
        heroEyebrow: 'お絵描き当てゲーム',
        title: 'ピクショナリー向けランダムオブジェクト',
        description:
          'ピクショナリーやお絵描き当てゲームに向いた、描きやすく分かりやすいオブジェクトを生成します。',
        visualTitle: 'ピクショナリー向けの対象を引く',
        visualDescription:
          '短時間で描けて、相手にも伝わりやすい対象を中心にしています。',
        bulkTitle: 'ゲーム用のお題リストを作る',
        bulkDescription:
          '授業やパーティーで何ラウンドも回すなら、まとめてお題を作ってそのまま使えます。',
        seoTitle: 'ピクショナリー向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ピクショナリー向けのランダムオブジェクトを生成。描きやすいお題をカード表示と一覧で使えます。',
        examples: {
          title: 'ピクショナリー向けに選んだサンプル',
          lead:
            '短時間で輪郭を描きやすく、相手にも伝わりやすい対象を優先して見せています。',
        },
        landing: {
          introTitle: 'ピクショナリーでは、描きやすさと伝わりやすさが最優先です。',
          introBody:
            'このページは、ただランダムに名詞を返すのではなく、短時間で描けて相手が推測しやすい対象を優先するために作られています。動物、食べ物、日用品、自然物のように、視覚的に分かりやすいカテゴリを中心にしているため、一般ページよりゲーム用途に向いています。',
          featureTitle: 'このページがゲーム向きな理由',
          featureLead: 'ゲームが止まりにくい対象を優先しています。',
          features: [
            { title: '描きやすい', body: '形が取りやすい対象が多く、短い制限時間でも対応しやすいです。' },
            { title: '当てやすい', body: '見慣れたモチーフが多いので、説明なしでも推測しやすくなります。' },
            { title: '複数ラウンド向き', body: '一括生成でゲーム用のお題セットをすぐ作れます。' },
          ],
          categoryTitle: 'ピクショナリー向きのカテゴリ',
          categoryLead: '動物、食べ物、日用品、自然物は、描く側にも当てる側にも扱いやすいカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: ['家族のゲーム時間', '授業の導入', 'チームビルディング', '子ども会', '英語クラス', 'ワークショップの導入'],
          faqTitle: 'ピクショナリーページ FAQ',
          faqs: [
            { question: 'ピクショナリー向きのオブジェクトとは？', answer: '短時間で描けて、見た相手が連想しやすいものが向いています。' },
            { question: 'なぜ専用ページが必要ですか？', answer: 'ゲームでは、一般的なランダム単語よりも、描きやすく伝わりやすい対象の方が役立つからです。' },
            { question: '複数ラウンド分をまとめて作れますか？', answer: 'はい。一括生成で複数ラウンド用のお題をすぐ用意できます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-improv',
    categories: ['household', 'funny', 'food', 'animals'],
    defaultVisualCount: 5,
    exampleObjectIds: ['funny-rubber-duck', 'house-key', 'food-taco', 'animal-penguin', 'funny-disco-ball', 'house-clock'],
    i18n: {
      en: {
        heroEyebrow: 'Improv prompts',
        title: 'Random Objects For Improv',
        description:
          'Generate prop-style object prompts for improv scenes, acting warmups, and fast creative performance games.',
        visualTitle: 'Get an improv-ready object prompt',
        visualDescription:
          'This page favors objects that can quickly turn into status cues, scene anchors, or prop jokes.',
        bulkTitle: 'Build a list for improv rounds',
        bulkDescription:
          'Create a larger batch when you need several rounds for rehearsal, class exercises, or workshop games.',
        seoTitle: 'Random Objects For Improv Generator',
        seoDescription:
          'Generate random objects for improv scenes, prop games, and acting warmups with visual cards and copyable lists.',
        examples: {
          title: 'Improv examples that can become scene props',
          lead:
            'These objects are useful because they can be held, hidden, argued over, gifted, misunderstood, or turned into a quick status cue in a scene.',
        },
        landing: {
          introTitle: 'In improv, the best object prompt is one that creates action, not just recognition.',
          introBody:
            'This page is tuned for improvisers who need fast scene fuel: props people can mime, react to, protect, lose, or transform into status signals. Instead of aiming for pure drawability, the object mix is shaped around playability, scene movement, and the kinds of prompts that make short-form or classroom improv easier to start.',
          featureTitle: 'Why this page fits improv better',
          featureLead: 'The results aim to create action and relationships, not just labels.',
          features: [
            { title: 'More playable props', body: 'Everyday items and slightly funny objects work better in scenes than abstract nouns or overly technical prompts.' },
            { title: 'Faster scene starts', body: 'Recognizable props give performers something to act on immediately instead of overthinking the setup.' },
            { title: 'Useful in workshops', body: 'Bulk lists help teachers and coaches prepare object rounds without building prompts by hand.' },
          ],
          categoryTitle: 'Best categories for improv prompts',
          categoryLead: 'Household objects, funny items, foods, and some animals tend to produce the most playable scene hooks.',
          useCasesTitle: 'Common improv use cases',
          useCases: ['Prop games', 'Scene warmups', 'Status exercises', 'Object transformation rounds', 'Class rehearsals', 'Workshop activities'],
          faqTitle: 'Improv page FAQ',
          faqs: [
            { question: 'What makes an object good for improv?', answer: 'It should be easy to mime, react to, or build a relationship around inside a short scene.' },
            { question: 'Why have a separate improv page?', answer: 'Because improv needs playable props and action cues, which is a narrower need than a general object generator.' },
            { question: 'Can I generate a full workshop set?', answer: 'Yes. Use the quantity field or bulk mode to build a larger prompt list for several rounds.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '即兴表演',
        title: '即兴表演随机物品',
        description:
          '为即兴表演、表演热身和创意小游戏生成更适合拿来做道具的随机物品。',
        visualTitle: '抽一个更适合即兴表演的物品',
        visualDescription:
          '这里更偏向能快速变成道具、关系线索或笑点触发器的对象。',
        bulkTitle: '生成一组即兴表演题目',
        bulkDescription:
          '如果你要做多轮练习、课堂活动或工作坊热身，可以一次生成更长的列表。',
        seoTitle: '即兴表演随机物品生成器',
        seoDescription:
          '生成适合即兴表演的随机物品，用于道具练习、表演热身和创意游戏，支持卡片和批量列表。',
        examples: {
          title: '更适合即兴表演的示例道具',
          lead:
            '这些对象更容易被拿来做动作、制造关系或触发反应，比纯粹好看的物品更适合舞台练习。',
        },
        landing: {
          introTitle: '即兴表演最需要的，不是一个词，而是一个能立刻引出动作的物品。',
          introBody:
            '这个页面专门偏向“可拿来演”的对象。好的即兴物品不仅要看得懂，更要容易被模仿、被争夺、被误用，或者能立刻变成场景中的一个关系支点。所以这里的对象比普通随机页更偏道具感，也更适合排练、课堂和工作坊。',
          featureTitle: '为什么这个页面更适合即兴表演',
          featureLead: '重点是可玩性，而不是单纯的随机。',
          features: [
            { title: '更像道具', body: '日常物件和带一点趣味感的对象，更容易立刻被演员拿来做动作。' },
            { title: '更容易开场', body: '结果更偏向能够迅速引出场景，而不是让大家停下来想半天。' },
            { title: '适合工作坊', body: '批量模式适合老师、主持人和教练直接准备整组练习。' },
          ],
          categoryTitle: '更适合即兴表演的分类',
          categoryLead: '家居、搞怪物品、食物和部分动物，往往更容易被转化成角色关系和舞台动作。',
          useCasesTitle: '常见使用场景',
          useCases: ['道具练习', '场景热身', '状态游戏', '物品变形', '课堂排练', '工作坊活动'],
          faqTitle: '即兴表演页面常见问题',
          faqs: [
            { question: '什么样的物品更适合即兴表演？', answer: '容易模仿、容易拿来做动作，或者能快速制造关系和冲突的物品，更适合即兴场景。' },
            { question: '为什么要单独做即兴页？', answer: '因为即兴表演需要的是可演的道具和动作线索，而不是泛泛的随机名词。' },
            { question: '可以一次准备一整组训练题吗？', answer: '可以。你可以批量生成一组对象，用于多轮练习或课堂活动。' },
          ],
        },
      },
      ja: {
        heroEyebrow: '即興演技',
        title: '即興向けランダムオブジェクト',
        description:
          '即興シーン、演技ウォームアップ、創作ゲームに使いやすいオブジェクトを生成します。',
        visualTitle: '即興で使いやすい対象を引く',
        visualDescription:
          '小道具として扱いやすく、場面や関係をすぐ作りやすい対象を中心にしています。',
        bulkTitle: '即興ラウンド用のお題を作る',
        bulkDescription:
          '授業、リハーサル、ワークショップ向けに複数ラウンド分の対象をまとめて用意できます。',
        seoTitle: '即興向けランダムオブジェクトジェネレーター',
        seoDescription:
          '即興シーンや小道具ゲームに向いたランダムオブジェクトを生成。カード表示と一覧コピーに対応しています。',
        examples: {
          title: '即興で小道具になりやすいサンプル',
          lead:
            '持つ、隠す、受け渡す、誤解するといった動きへつなげやすい対象を優先しています。',
        },
        landing: {
          introTitle: '即興では、見た瞬間に動けるオブジェクトが強いです。',
          introBody:
            'このページは、ただ分かりやすいだけでなく、演技のきっかけになりやすい対象を集めています。持つ、隠す、失う、奪い合う、誤解する、といった行動に結びつきやすい対象を優先しているため、一般ページよりも即興用途に向いています。',
          featureTitle: 'このページが即興向きな理由',
          featureLead: '重要なのは、見た目よりもシーンが動くことです。',
          features: [
            { title: '小道具として使いやすい', body: '日用品や少し変なアイテムは、すぐに演技へつなげやすくなります。' },
            { title: '場面が始まりやすい', body: '見た瞬間に扱い方を思いつきやすい対象が多く、立ち上がりが速くなります。' },
            { title: '授業やワークショップ向き', body: '一括生成で即興用のお題セットをすぐ作れます。' },
          ],
          categoryTitle: '即興向きのカテゴリ',
          categoryLead: '日用品、おもしろアイテム、食べ物、一部の動物は、シーンのきっかけを作りやすいカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: ['小道具ゲーム', 'シーンの導入', 'ステータス練習', '物体変換', '授業の練習', 'ワークショップ'],
          faqTitle: '即興ページ FAQ',
          faqs: [
            { question: '即興向きのオブジェクトとは？', answer: 'すぐに持てる、使える、反応できるなど、行動に結びつきやすいものが向いています。' },
            { question: 'なぜ即興専用ページが必要ですか？', answer: '即興では、一般的なランダム単語よりも、小道具として扱いやすい対象の方が役立つからです。' },
            { question: '複数ラウンド分をまとめて作れますか？', answer: 'はい。一括生成で授業やワークショップ向けのセットを作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-icebreakers',
    categories: ['household', 'funny', 'food'],
    defaultVisualCount: 5,
    exampleObjectIds: ['funny-rubber-duck', 'food-popcorn', 'house-lamp', 'funny-tiny-crown', 'house-key', 'food-birthday-cake'],
    i18n: {
      en: {
        heroEyebrow: 'Icebreaker prompts',
        title: 'Random Objects For Icebreakers',
        description:
          'Generate simple object prompts that help groups talk, compare, guess, and loosen up without complicated rules.',
        visualTitle: 'Get an object for a fast icebreaker',
        visualDescription:
          'The results are tuned for talking prompts, warmups, and group activities that need low-friction objects.',
        bulkTitle: 'Create an icebreaker prompt set',
        bulkDescription:
          'Build a longer list when you need several rounds for team meetings, classrooms, or workshops.',
        seoTitle: 'Random Objects For Icebreakers Generator',
        seoDescription:
          'Generate random objects for icebreakers, warmups, and group activities with visual cards and copyable prompt lists.',
        examples: {
          title: 'Icebreaker examples that are easy to talk about',
          lead:
            'These objects are selected because they invite quick stories, preferences, guesses, or comparisons without making the group learn complicated rules first.',
        },
        landing: {
          introTitle: 'A good icebreaker object should open a conversation instead of stopping one.',
          introBody:
            'This page is built for low-pressure speaking and group warmups. Instead of aiming for extreme surprise, it favors simple objects that invite quick stories, comparisons, preferences, and guesses. That makes it more useful in classrooms, onboarding sessions, team meetings, and workshops where people need to start talking fast.',
          featureTitle: 'Why this page works for icebreakers',
          featureLead: 'The object pool is tuned for easy conversation, not complexity.',
          features: [
            { title: 'Low-friction prompts', body: 'Simple objects reduce the time people spend interpreting the prompt and increase the time spent actually speaking.' },
            { title: 'Good for groups', body: 'The results work well for compare-and-share, memory prompts, and quick guessing activities.' },
            { title: 'Easy to scale', body: 'Bulk mode helps teachers and facilitators build a full warmup sequence in one go.' },
          ],
          categoryTitle: 'Best categories for icebreakers',
          categoryLead: 'Household items, funny objects, and familiar foods usually create the easiest talking prompts.',
          useCasesTitle: 'Common icebreaker use cases',
          useCases: ['Team meetings', 'Workshops', 'Class introductions', 'Conversation clubs', 'Camp warmups', 'Language classes'],
          faqTitle: 'Icebreaker page FAQ',
          faqs: [
            { question: 'What makes an object good for an icebreaker?', answer: 'The best prompts are familiar enough to talk about quickly and flexible enough to spark stories or opinions.' },
            { question: 'Why have a separate icebreaker page?', answer: 'Because group warmups need objects that reduce friction and open conversation, not just random novelty.' },
            { question: 'Can I prepare a whole session at once?', answer: 'Yes. Generate several prompts at once and copy the list into your lesson plan or agenda.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '破冰提示',
        title: '破冰活动随机物品',
        description:
          '生成更适合破冰和暖场的随机物品，帮助团队、课堂和活动参与者更快开口。',
        visualTitle: '抽一个适合破冰的物品',
        visualDescription:
          '这里更偏向简单、熟悉、容易引出联想和表达的对象。',
        bulkTitle: '生成一组破冰活动题目',
        bulkDescription:
          '如果你要带一个完整的暖场环节，可以一次生成多轮物品并直接复制使用。',
        seoTitle: '破冰活动随机物品生成器',
        seoDescription:
          '生成适合破冰、暖场和小组交流的随机物品，支持卡片和批量清单。',
        examples: {
          title: '更适合破冰开场的示例物品',
          lead:
            '这些对象更容易引出故事、偏好、比较和轻松猜测，适合让参与者快速进入交流状态。',
        },
        landing: {
          introTitle: '好的破冰物品，应该让人更容易开口，而不是先停下来理解规则。',
          introBody:
            '这个页面面向团队暖场、课堂开场和活动破冰。它会优先给出更熟悉、更容易引发故事、偏好和联想的对象，而不是为了随机而随机。这样用户拿到结果后，更容易快速进入交流状态。',
          featureTitle: '为什么这个页面更适合破冰',
          featureLead: '重点是降低开口门槛，让对话更快开始。',
          features: [
            { title: '更容易聊', body: '对象更简单、更熟悉，参与者不需要先想太久就能表达。' },
            { title: '更适合群体互动', body: '结果适合拿来做比较、回忆、偏好表达和猜测类小游戏。' },
            { title: '适合主持人准备', body: '批量模式可以快速生成整组暖场题目，方便直接放进流程。' },
          ],
          categoryTitle: '更适合破冰的分类',
          categoryLead: '家居物件、搞怪小物和熟悉食物，更容易让人迅速产生联想并愿意开口。',
          useCasesTitle: '常见使用场景',
          useCases: ['团队会议', '工作坊', '课堂开场', '口语角', '夏令营暖场', '语言课程'],
          faqTitle: '破冰页面常见问题',
          faqs: [
            { question: '什么样的物品更适合破冰？', answer: '常见、好理解、容易引出故事或偏好的对象，通常最适合暖场。' },
            { question: '为什么要单独做破冰页？', answer: '因为破冰活动需要的是低门槛、能促成交流的对象，而不是泛泛的随机词。' },
            { question: '可以一次准备完整一场暖场吗？', answer: '可以。你可以直接批量生成一组物品，作为整场活动的题目库。' },
          ],
        },
      },
      ja: {
        heroEyebrow: 'アイスブレイク',
        title: 'アイスブレイク向けランダムオブジェクト',
        description:
          '会話のきっかけ、授業の導入、チームの暖気運転に使いやすいオブジェクトを生成します。',
        visualTitle: 'アイスブレイク向けの対象を引く',
        visualDescription:
          '話しやすく、思い出や好みに結びつけやすい対象を中心にしています。',
        bulkTitle: 'アイスブレイク用のお題をまとめて作る',
        bulkDescription:
          '会議や授業で何ラウンドも使う場合は、複数のお題をまとめて生成できます。',
        seoTitle: 'アイスブレイク向けランダムオブジェクトジェネレーター',
        seoDescription:
          'アイスブレイクや会話ウォームアップ向けのランダムオブジェクトを生成。カード表示と一覧コピーに対応しています。',
        examples: {
          title: '会話を始めやすいサンプル',
          lead:
            '思い出、好み、比較、ちょっとした推測につなげやすい対象を優先して表示しています。',
        },
        landing: {
          introTitle: 'アイスブレイクでは、話しやすさがいちばん大切です。',
          introBody:
            'このページは、チームの導入、授業の始まり、ワークショップの暖気運転のために作られています。難しい対象や説明が必要な単語ではなく、すぐに思い出や好みや比較に結びつけられる対象を優先しているため、会話が始まりやすくなります。',
          featureTitle: 'このページがアイスブレイク向きな理由',
          featureLead: '会話の入口を作りやすい対象を集めています。',
          features: [
            { title: '話しやすい', body: '身近な対象が多いため、考え込みすぎずにすぐ話し始めやすくなります。' },
            { title: 'グループ向き', body: '比較、思い出、推測などの短い活動に使いやすい対象が多いです。' },
            { title: '進行がしやすい', body: '一括生成でファシリテーターが複数ラウンド分をすぐ用意できます。' },
          ],
          categoryTitle: 'アイスブレイク向きのカテゴリ',
          categoryLead: '日用品、おもしろアイテム、身近な食べ物は会話を始めやすいカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: ['チーム会議', 'ワークショップ', '授業の導入', '会話クラブ', '合宿の暖気運転', '語学クラス'],
          faqTitle: 'アイスブレイクページ FAQ',
          faqs: [
            { question: 'アイスブレイク向きのオブジェクトとは？', answer: 'すぐに話題にしやすく、思い出や好みにつなげやすい対象が向いています。' },
            { question: 'なぜ専用ページが必要ですか？', answer: 'アイスブレイクでは、ランダム性よりも話しやすさの方が重要だからです。' },
            { question: '複数ラウンド用にまとめて作れますか？', answer: 'はい。一括生成で会議や授業向けのセットを作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-scavenger-hunt',
    categories: ['household', 'food', 'nature'],
    defaultVisualCount: 5,
    exampleObjectIds: ['house-key', 'food-apple', 'nature-pinecone', 'house-clock', 'nature-shell', 'food-popcorn'],
    i18n: {
      en: {
        heroEyebrow: 'Scavenger hunt',
        title: 'Random Objects For Scavenger Hunt',
        description:
          'Generate easy-to-find object prompts for scavenger hunts at home, in class, or during team activities.',
        visualTitle: 'Pull a scavenger-hunt object',
        visualDescription:
          'The page favors concrete objects people can actually locate instead of abstract or impossible targets.',
        bulkTitle: 'Build a scavenger-hunt list',
        bulkDescription:
          'Generate a larger set when you need a full round for classrooms, camps, or at-home games.',
        seoTitle: 'Random Objects For Scavenger Hunt Generator',
        seoDescription:
          'Generate random objects for scavenger hunts with visual cards and copyable lists for home, classroom, and team activities.',
        examples: {
          title: 'Scavenger-hunt examples that are realistic to find',
          lead:
            'These examples stay close to objects people can actually locate in a home, classroom, or nearby environment, which keeps the game moving.',
        },
        landing: {
          introTitle: 'A scavenger-hunt object should be findable in the real world, not just interesting on paper.',
          introBody:
            'This page narrows the object pool toward items people are likely to spot around the home, classroom, or nearby environment. That matters because scavenger-hunt prompts fail when they are too abstract, too rare, or too context-specific. A dedicated page makes the task more practical and easier to run.',
          featureTitle: 'Why this page works for scavenger hunts',
          featureLead: 'The results aim for findability, not randomness for its own sake.',
          features: [
            { title: 'More realistic targets', body: 'Household items, simple foods, and nature objects are much easier to use than abstract nouns.' },
            { title: 'Better for kids and groups', body: 'The prompts are easier to explain, verify, and turn into fast-moving hunt rounds.' },
            { title: 'Simple to prepare', body: 'Bulk mode helps you create a whole hunt list without writing clues from scratch.' },
          ],
          categoryTitle: 'Best categories for scavenger hunts',
          categoryLead: 'Household, food, and nature prompts strike the best balance between recognizability and real-world availability.',
          useCasesTitle: 'Common scavenger-hunt use cases',
          useCases: ['Home hunts', 'Classroom games', 'Camp activities', 'Birthday parties', 'Team events', 'Rainy-day games'],
          faqTitle: 'Scavenger-hunt page FAQ',
          faqs: [
            { question: 'What makes an object good for a scavenger hunt?', answer: 'It should be realistic to find, easy to identify, and appropriate for the space people are searching in.' },
            { question: 'Why use a separate scavenger-hunt page?', answer: 'Because this use case needs findable real-world objects, not a fully open-ended random pool.' },
            { question: 'Can I generate a full hunt list at once?', answer: 'Yes. Use the count field or bulk mode to build a longer prompt set for one full game.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '寻宝游戏',
        title: '寻宝游戏随机物品',
        description:
          '生成更适合家庭、课堂和团队活动的寻宝物品，结果更具体也更容易找到。',
        visualTitle: '抽一个适合寻宝的物品',
        visualDescription:
          '这里更偏向现实中真的能找到的对象，而不是抽象或过于罕见的题目。',
        bulkTitle: '生成一整组寻宝题目',
        bulkDescription:
          '如果你要带完整一轮寻宝活动，可以一次生成更长的题目列表。',
        seoTitle: '寻宝游戏随机物品生成器',
        seoDescription:
          '生成适合家庭、课堂和团队活动的随机寻宝物品，支持视觉卡片和批量清单。',
        examples: {
          title: '更适合真实寻宝的示例物品',
          lead:
            '这些示例更接近家里、教室或周边环境里真的能找到的对象，能减少活动中途卡住的概率。',
        },
        landing: {
          introTitle: '寻宝活动最重要的，不是随机，而是真的找得到。',
          introBody:
            '这个页面会优先给出更容易在家里、教室或周边环境里找到的对象。因为寻宝类活动最怕的，就是题目虽然看起来有趣，但参与者根本没法在现实场景中快速找到。把对象池收窄到更具体的类别后，活动会顺畅很多。',
          featureTitle: '为什么这个页面更适合寻宝',
          featureLead: '重点是可执行，而不是随机得很离谱。',
          features: [
            { title: '更容易找到', body: '家居、食物和自然物件比抽象词更适合直接拿来做寻宝。' },
            { title: '更适合孩子和多人活动', body: '对象更好解释，也更容易快速核对结果。' },
            { title: '更方便主持人准备', body: '批量模式可以直接帮你生成一整套活动题目。' },
          ],
          categoryTitle: '更适合寻宝的分类',
          categoryLead: '家居、食物和自然物体在好找和好理解之间有更好的平衡。',
          useCasesTitle: '常见使用场景',
          useCases: ['家庭寻宝', '课堂游戏', '夏令营活动', '生日派对', '团队活动', '雨天室内游戏'],
          faqTitle: '寻宝页面常见问题',
          faqs: [
            { question: '什么样的物品更适合寻宝？', answer: '真实可找、容易识别、适合当前场景的物品，通常最适合拿来做寻宝题目。' },
            { question: '为什么要单独做寻宝页？', answer: '因为寻宝活动需要的是现实中可找到的对象，而不是完全开放的随机池。' },
            { question: '可以一次生成整场活动题目吗？', answer: '可以。你可以直接输入数量或使用批量模式准备完整题库。' },
          ],
        },
      },
      ja: {
        heroEyebrow: '宝探し',
        title: '宝探し向けランダムオブジェクト',
        description:
          '家や教室、グループ活動で使いやすい、見つけやすいオブジェクトを生成します。',
        visualTitle: '宝探し向けの対象を引く',
        visualDescription:
          '現実に探しやすい対象を優先し、抽象的すぎるお題を避けています。',
        bulkTitle: '宝探し用のお題リストを作る',
        bulkDescription:
          '授業やイベントで何問も必要な場合は、一括生成でまとめて作れます。',
        seoTitle: '宝探し向けランダムオブジェクトジェネレーター',
        seoDescription:
          '家や教室で使いやすい宝探し向けのランダムオブジェクトを生成。カード表示と一覧コピーに対応しています。',
        examples: {
          title: '実際に探しやすいサンプル',
          lead:
            '家、教室、近くの環境で見つけやすい対象を優先し、ゲームが止まりにくい例を見せています。',
        },
        landing: {
          introTitle: '宝探しでは、面白さより先に見つけられるかが重要です。',
          introBody:
            'このページは、家の中、教室、近くの環境で実際に見つけやすい対象を優先しています。宝探しのお題が抽象的すぎたり、珍しすぎたりするとゲームが止まってしまうため、現実に見つけやすいカテゴリへ絞ることが大切です。',
          featureTitle: 'このページが宝探し向きな理由',
          featureLead: '実行しやすさを優先した対象を集めています。',
          features: [
            { title: '見つけやすい', body: '日用品、食べ物、自然物は実際の空間で探しやすく、活動が止まりにくくなります。' },
            { title: '子どもやグループ向き', body: '説明しやすく、確認しやすい対象が多いです。' },
            { title: '準備が速い', body: '一括生成でイベント用のお題セットをすぐ作れます。' },
          ],
          categoryTitle: '宝探し向きのカテゴリ',
          categoryLead: '日用品、食べ物、自然物は、見つけやすさと分かりやすさのバランスが良いカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: ['家庭内の宝探し', '授業のゲーム', 'キャンプ活動', '誕生日会', 'チームイベント', '雨の日の室内遊び'],
          faqTitle: '宝探しページ FAQ',
          faqs: [
            { question: '宝探し向きのオブジェクトとは？', answer: '実際に探しやすく、見つけたかどうかを確認しやすいものが向いています。' },
            { question: 'なぜ専用ページが必要ですか？', answer: '宝探しでは、現実に存在して見つけやすい対象へ絞ることが重要だからです。' },
            { question: '一回でフルセットを作れますか？', answer: 'はい。一括生成で複数問のお題リストを作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'easy-objects-to-draw',
    categories: ['household', 'food', 'animals', 'nature'],
    defaultVisualCount: 5,
    exampleObjectIds: ['food-apple', 'house-lamp', 'animal-penguin', 'nature-mushroom', 'house-clock', 'nature-shell'],
    i18n: {
      en: {
        heroEyebrow: 'Easy drawing ideas',
        title: 'Easy Objects To Draw',
        description:
          'Generate simple, sketch-friendly object prompts when you want drawing ideas that feel approachable instead of overwhelming.',
        visualTitle: 'Pull an easy thing to draw',
        visualDescription:
          'This page favors objects with clear outlines and familiar forms so you can start drawing without spending time filtering difficult prompts.',
        bulkTitle: 'Make an easy drawing practice list',
        bulkDescription:
          'Create a longer set of easy objects when you need warmups for beginners, classrooms, or a daily sketch routine.',
        seoTitle: 'Easy Objects To Draw Generator With Visual Prompts',
        seoDescription:
          'Generate easy objects to draw with visual cards, copyable prompt lists, and beginner-friendly ideas for sketch practice.',
        examples: {
          title: 'Easy drawing examples with simple forms',
          lead:
            'These examples are chosen for clearer outlines, familiar proportions, and manageable detail so the page feels useful for beginners and warmups.',
        },
        landing: {
          introTitle: 'Easy drawing prompts should remove friction, not add another decision layer.',
          introBody:
            'People searching for easy objects to draw are usually not looking for novelty. They want a prompt that is recognizable, has a clean silhouette, and feels manageable enough to start right away. This page narrows the pool toward simpler everyday objects, foods, animals, and nature items so the first result is more likely to feel drawable for beginners and warmup sessions.',
          featureTitle: 'Why this page is better for easy drawing ideas',
          featureLead: 'The object pool is curated toward clarity, simplicity, and lower drawing resistance.',
          features: [
            {
              title: 'Cleaner shapes first',
              body: 'Objects with simple edges and familiar structures are easier to sketch than highly detailed or awkward prompts.',
            },
            {
              title: 'Useful for beginners',
              body: 'The page works well for new artists, casual doodlers, and teachers who need low-pressure prompts.',
            },
            {
              title: 'Good for repetition',
              body: 'Bulk mode helps you build a full set of manageable prompts for drills, homework, or daily warmups.',
            },
          ],
          categoryTitle: 'Best categories for easy drawing',
          categoryLead:
            'Food, household items, simple animals, and nature objects produce the cleanest, least intimidating prompts for sketch practice.',
          useCasesTitle: 'Common easy-drawing uses',
          useCases: [
            'Beginner sketch practice',
            'Daily doodle warmups',
            'Classroom drawing starters',
            'Kids art activities',
            'Low-pressure creative breaks',
            'Simple shape studies',
          ],
          faqTitle: 'Easy drawing page FAQ',
          faqs: [
            {
              question: 'What makes an object easy to draw?',
              answer:
                'Usually it has a clear silhouette, familiar proportions, and fewer small details, which makes it easier to start and finish confidently.',
            },
            {
              question: 'Why use a separate easy objects page?',
              answer:
                'Because the broader generator includes objects that may be fun but less approachable. This page keeps the prompt pool simpler and more beginner-friendly.',
            },
            {
              question: 'Can I use this for classes or daily practice?',
              answer:
                'Yes. It is well suited to classroom warmups, art homework, and daily sketch routines where easier prompts are more useful than random difficulty spikes.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '简单绘画题目',
        title: '简单物品绘画生成器',
        description:
          '生成更简单、更容易下笔的物品提示，适合初学者、日常速写和低门槛绘画练习。',
        visualTitle: '抽一个简单好画的物品',
        visualDescription:
          '这个页面会更偏向轮廓清晰、结构熟悉的对象，减少你在“太难了”上的犹豫时间。',
        bulkTitle: '生成一组简单绘画练习',
        bulkDescription:
          '如果你要做初学者练习、课堂热身或每日速写，可以一次生成一整组更简单的对象。',
        seoTitle: '简单物品绘画生成器 - 适合初学者的随机画画题目',
        seoDescription:
          '生成简单好画的随机物品，支持视觉卡片和批量清单，适合初学者、课堂和日常绘画练习。',
        examples: {
          title: '适合初学者练习的简单物品示例',
          lead:
            '这些对象轮廓更清晰、结构更熟悉、细节压力更低，更适合拿来做速写热身和基础练习。',
        },
        landing: {
          introTitle: '简单绘画页的意义，不是“更无聊”，而是更容易开始。',
          introBody:
            '搜“简单物品来画”的用户，真正要解决的问题通常不是“没题目”，而是“有题目也懒得画，因为看起来太难”。这个页面会把对象池往更清晰、更熟悉、更容易落笔的方向收窄，例如家居物、食物、简单动物和自然物体，让结果更适合初学者和日常热身。',
          featureTitle: '为什么这个页面更适合简单练习',
          featureLead: '重点是让你更快开始，而不是在随机结果里继续筛难度。',
          features: [
            {
              title: '优先更清晰的形状',
              body: '轮廓更明确、结构更熟悉的对象，会比细节过多的结果更适合马上拿来练习。',
            },
            {
              title: '对新手更友好',
              body: '它更适合刚开始画画的人，也适合老师给学生安排低门槛的热身题。',
            },
            {
              title: '适合整组重复训练',
              body: '批量模式可以直接生成一组简单对象，用来做重复练习、作业或每日打卡。',
            },
          ],
          categoryTitle: '更适合简单绘画的分类',
          categoryLead:
            '食物、家居、简单动物和自然物体通常更容易形成轮廓感，也更不容易让初学者卡住。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '初学者速写',
            '每日涂鸦热身',
            '课堂开场练习',
            '儿童绘画活动',
            '低压力创作休息',
            '基础形体练习',
          ],
          faqTitle: '简单绘画页常见问题',
          faqs: [
            {
              question: '什么样的物品算容易画？',
              answer: '通常是轮廓清晰、比例容易理解、细节不至于太多的对象，会更适合快速开始和完成。',
            },
            {
              question: '为什么要单独做一个简单绘画页？',
              answer: '因为大池子里会混进一些更复杂的结果。独立页面能更稳定地给出初学者友好的对象。',
            },
            {
              question: '这个页面适合课堂和日常练习吗？',
              answer: '很适合。它可以直接作为课堂热身、作业题库和每日速写材料来用。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '簡単なお絵描き',
        title: '簡単に描けるオブジェクト',
        description:
          '描き始めやすい、わかりやすい形のオブジェクトを生成。初心者や毎日のスケッチ練習に向いています。',
        visualTitle: '簡単に描けるモノを引く',
        visualDescription:
          '輪郭が取りやすく、形を理解しやすい対象を中心にしているため、迷わず描き始めやすくなります。',
        bulkTitle: '簡単なお題をまとめて作る',
        bulkDescription:
          '初心者練習、授業の導入、毎日のスケッチ用に、簡単な対象をまとめて生成できます。',
        seoTitle: '簡単に描けるオブジェクトジェネレーター',
        seoDescription:
          '簡単に描けるランダムオブジェクトを生成。初心者向けのスケッチ練習や授業のお題に便利です。',
        examples: {
          title: '簡単に描きやすいサンプル',
          lead:
            '輪郭が分かりやすく、細部が多すぎない対象を優先し、初心者やウォームアップに使いやすくしています。',
        },
        landing: {
          introTitle: '簡単に描けるページの役割は、発想を増やすより先に手を動かしやすくすることです。',
          introBody:
            '「簡単に描けるもの」を探している人は、珍しいお題よりも描き始めやすさを求めています。このページは日用品、食べ物、シンプルな動物、自然物に寄せることで、輪郭を取りやすく、初心者にも扱いやすい結果を出しやすくしています。',
          featureTitle: '簡単に描きやすい理由',
          featureLead: '難易度を下げるのではなく、始めやすさを高めるための構成です。',
          features: [
            {
              title: '形がわかりやすい',
              body: '輪郭や大まかな構造をつかみやすい対象が多く、描き始めのハードルが低くなります。',
            },
            {
              title: '初心者に向いている',
              body: 'はじめてのスケッチや、授業での軽いウォームアップにも使いやすい内容です。',
            },
            {
              title: '繰り返し練習しやすい',
              body: '一括生成で、毎日の練習や宿題用に複数のお題をまとめて作れます。',
            },
          ],
          categoryTitle: '簡単に描きやすいカテゴリ',
          categoryLead:
            '食べ物、日用品、シンプルな動物、自然物は、形を理解しやすく初心者に優しいカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '初心者のスケッチ練習',
            '毎日の落書き',
            '授業の導入',
            '子どものお絵描き',
            '気軽な創作休憩',
            '基本形の練習',
          ],
          faqTitle: '簡単に描けるページ FAQ',
          faqs: [
            {
              question: '何が「簡単に描ける」対象ですか？',
              answer: '輪郭がはっきりしていて、形を理解しやすく、細かすぎない対象が描きやすいです。',
            },
            {
              question: 'なぜ専用ページが必要ですか？',
              answer: '通常のランダム生成では少し難しい対象も混ざるため、初心者向けに絞った方が使いやすいからです。',
            },
            {
              question: '授業や毎日の練習にも使えますか？',
              answer: 'はい。授業の導入、宿題、毎日のスケッチ練習に向いています。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-kitchen-objects',
    categories: ['household', 'food'],
    defaultVisualCount: 5,
    exampleObjectIds: ['house-kettle', 'food-apple', 'food-ramen', 'house-broom', 'food-taco', 'house-clock'],
    i18n: {
      en: {
        heroEyebrow: 'Kitchen prompts',
        title: 'Random Kitchen Objects Generator',
        description:
          'Pick random kitchen objects for cooking classes, vocabulary practice, drawing prompts, scavenger hunts, and home activity ideas.',
        visualTitle: 'Pick a random kitchen object',
        visualDescription:
          'This page keeps the results centered on kitchen tools, foods, utensils, and familiar home items instead of fully open random results.',
        bulkTitle: 'Build a kitchen object list',
        bulkDescription:
          'Generate a larger kitchen-themed set for lesson plans, scavenger hunts, writing prompts, or family activities.',
        seoTitle: 'Random Kitchen Objects Generator',
        seoDescription:
          'Pick random kitchen objects with visual cards and copyable lists for cooking classes, ESL vocabulary, drawing prompts, scavenger hunts, and home games.',
        examples: {
          title: 'Kitchen examples that feel usable in real activities',
          lead:
            'These examples combine utensils, foods, and familiar home items so the page can support vocabulary, still-life drawing, scavenger hunts, and family games.',
        },
        landing: {
          introTitle: 'A kitchen-object page should feel practical, not just thematic.',
          introBody:
            'Users searching for random kitchen objects often want something more specific than a broad object generator. They may be looking for cooking vocabulary, drawing references, classroom prompts, or scavenger-hunt ideas around the home. By tightening the object pool around household and food-adjacent items, this page becomes more useful and more topically focused than a generic random list.',
          featureTitle: 'Why this page works for kitchen-themed use',
          featureLead: 'The object pool is narrowed around common kitchen contexts, which makes the results easier to use immediately.',
          features: [
            {
              title: 'More context-rich prompts',
              body: 'Kitchen tools and food-related objects are easier to place in practical tasks than disconnected random nouns.',
            },
            {
              title: 'Useful across home and classroom settings',
              body: 'The same objects can support cooking vocabulary, still-life drawing, scavenger hunts, and descriptive writing.',
            },
            {
              title: 'Better thematic batches',
              body: 'Bulk mode lets you build a kitchen-only list without manual filtering, which is useful for themed worksheets and games.',
            },
          ],
          categoryTitle: 'Best categories for kitchen objects',
          categoryLead:
            'Household and food categories work together here because kitchens sit between daily tools, ingredients, and familiar routines.',
          useCasesTitle: 'Common kitchen-object uses',
          useCases: [
            'Cooking vocabulary practice',
            'Kitchen scavenger hunts',
            'Still-life drawing prompts',
            'Home learning games',
            'Descriptive writing tasks',
            'Family activity cards',
          ],
          faqTitle: 'Kitchen objects page FAQ',
          faqs: [
            {
              question: 'Can I pick just one random kitchen object?',
              answer:
                'Yes. Use visual mode for a single kitchen object prompt, then switch to bulk mode when you need a longer themed list.',
            },
            {
              question: 'Why use a kitchen-specific random object page?',
              answer:
                'Because kitchen-related prompts are often used for themed lessons, games, and practical tasks where a generic random pool adds too much irrelevant noise.',
            },
            {
              question: 'Is this page only for cooking lessons?',
              answer:
                'No. It also works for drawing, writing prompts, vocabulary games, and home scavenger hunts where kitchen objects are easier to source.',
            },
            {
              question: 'Can I generate a longer themed list?',
              answer:
                'Yes. You can generate multiple kitchen-focused prompts at once and copy them into a worksheet, activity plan, or notes doc.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '厨房主题',
        title: '随机厨房物品',
        description:
          '生成更聚焦厨房场景的随机物品，适合烹饪课堂、词汇练习、绘画参考和家庭活动。',
        visualTitle: '抽一个厨房相关物品',
        visualDescription:
          '这里会把结果更集中在厨房工具、食物相关对象和常见家居用品上，而不是完全开放的随机池。',
        bulkTitle: '生成一组厨房物品清单',
        bulkDescription:
          '如果你要做主题课堂、家庭寻宝或写作练习，可以一次生成一整组厨房物品。',
        seoTitle: '随机厨房物品生成器',
        seoDescription:
          '生成随机厨房物品，支持视觉卡片和批量清单，适用于烹饪课堂、ESL、绘画和家庭活动。',
        examples: {
          title: '更贴近真实厨房场景的示例物品',
          lead:
            '这些示例把厨房工具、食物和日常家居对象放在一起，方便用于词汇、静物绘画、寻宝和家庭活动。',
        },
        landing: {
          introTitle: '厨房物品页的价值，在于它足够具体，能直接进入主题场景。',
          introBody:
            '搜“随机厨房物品”的用户，通常不是想要一个宽泛的随机词，而是想围绕厨房这个具体场景做课堂、活动、绘画或写作。所以这个页面会把对象池收缩到家居和食物相关对象，让结果更贴近日常厨房环境，也更适合真实使用。',
          featureTitle: '为什么厨房主题更适合独立成页',
          featureLead: '专题明确之后，结果就能直接服务于更具体的任务。',
          features: [
            {
              title: '结果更有场景感',
              body: '厨房工具和食物相关对象比散乱的名词更容易直接进入活动、课堂和创作任务。',
            },
            {
              title: '家庭和课堂都能用',
              body: '同一组对象可以同时服务词汇练习、静物绘画、寻宝游戏和描述写作。',
            },
            {
              title: '更容易做主题清单',
              body: '批量模式可以快速生成纯厨房主题的对象集，不用自己再手动筛选。',
            },
          ],
          categoryTitle: '更适合厨房主题的分类',
          categoryLead:
            '厨房同时连接着日用品和食物，所以家居类与食物类组合在这里会特别自然。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '烹饪词汇练习',
            '厨房寻宝游戏',
            '静物绘画提示',
            '家庭学习活动',
            '描述性写作任务',
            '亲子卡片游戏',
          ],
          faqTitle: '厨房物品页常见问题',
          faqs: [
            {
              question: '为什么要单独做一个厨房物品页？',
              answer: '因为很多任务本来就是围绕厨房场景展开的。独立页面能减少无关结果，让对象更贴近实际用途。',
            },
            {
              question: '这个页面只适合烹饪课吗？',
              answer: '不是。它也适合绘画、写作、词汇练习和家庭寻宝等需要厨房主题对象的场景。',
            },
            {
              question: '可以一次生成一长串厨房题目吗？',
              answer: '可以。你可以批量生成并复制，用到课堂、活动方案或素材清单里。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: 'キッチンテーマ',
        title: 'ランダムなキッチンオブジェクト',
        description:
          'キッチンに関係するオブジェクトを生成。料理授業、語彙練習、スケッチ、家庭アクティビティに使いやすい構成です。',
        visualTitle: 'キッチン系オブジェクトを引く',
        visualDescription:
          '結果はキッチン用品、食べ物まわりの対象、家庭で見つけやすい道具に寄せています。',
        bulkTitle: 'キッチンオブジェクトの一覧を作る',
        bulkDescription:
          '授業、宝探し、ライティング課題向けに、キッチンテーマの対象をまとめて生成できます。',
        seoTitle: 'ランダムなキッチンオブジェクトジェネレーター',
        seoDescription:
          'キッチン関連のランダムオブジェクトを生成。料理授業、ESL、描画、家庭ゲームに使えます。',
        examples: {
          title: '実際のキッチン活動に使いやすいサンプル',
          lead:
            '道具、食べ物、家庭内の身近な対象を組み合わせ、語彙、静物画、宝探し、家庭ゲームに使いやすくしています。',
        },
        landing: {
          introTitle: 'キッチン向けページは、テーマがはっきりしているぶん実用性が上がります。',
          introBody:
            'キッチンオブジェクトを探す人は、広いランダム性よりもテーマの一致を求めています。料理、家庭学習、スケッチ、語彙練習など、キッチンを軸にした使い方が多いため、日用品と食べ物系の対象を中心に絞ることで、ページ全体の使いやすさが大きく上がります。',
          featureTitle: 'キッチン向けに使いやすい理由',
          featureLead: '対象がテーマに沿っていると、授業や活動にそのまま流し込みやすくなります。',
          features: [
            {
              title: '場面が想像しやすい',
              body: 'キッチン用品や食べ物周辺の対象は、具体的な活動や説明につなげやすいです。',
            },
            {
              title: '家庭でも授業でも使える',
              body: '同じ対象群を語彙学習、静物画、宝探し、説明練習に使い回しやすくなります。',
            },
            {
              title: 'テーマ一覧を作りやすい',
              body: '一括生成で、キッチンだけに絞ったお題セットをすぐに作れます。',
            },
          ],
          categoryTitle: 'キッチン向きのカテゴリ',
          categoryLead:
            'キッチンは日用品と食べ物の中間にあるため、この二つのカテゴリが特に自然に機能します。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '料理語彙の練習',
            'キッチン宝探し',
            '静物スケッチ',
            '家庭学習ゲーム',
            '説明文の練習',
            '親子アクティビティ',
          ],
          faqTitle: 'キッチンページ FAQ',
          faqs: [
            {
              question: 'なぜキッチン専用ページが必要ですか？',
              answer: 'キッチン関連の使い方では、テーマに合った対象だけを出せる方が実用的だからです。',
            },
            {
              question: '料理授業以外にも使えますか？',
              answer: 'はい。描画、ライティング、語彙練習、家庭内ゲームなどにも使いやすいです。',
            },
            {
              question: 'まとめて一覧化できますか？',
              answer: 'できます。一括生成でキッチンテーマの対象をまとめて出力できます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-classroom-objects',
    categories: ['household', 'funny', 'food'],
    defaultVisualCount: 5,
    exampleObjectIds: ['house-key', 'food-apple', 'funny-rubber-duck', 'house-clock', 'food-popcorn', 'house-lamp'],
    i18n: {
      en: {
        heroEyebrow: 'Classroom prompts',
        title: 'Random Classroom Objects',
        description:
          'Generate school-friendly object prompts for warmups, speaking games, scavenger hunts, and classroom routines.',
        visualTitle: 'Pull a classroom-safe object prompt',
        visualDescription:
          'This page keeps the results closer to objects that are easy to explain, easy to use in class, and less likely to derail the activity.',
        bulkTitle: 'Build a classroom object set',
        bulkDescription:
          'Generate a larger list when you need object prompts for stations, quick games, worksheet work, or review rounds.',
        seoTitle: 'Random Classroom Objects Generator',
        seoDescription:
          'Generate classroom-friendly random objects with visual cards and copyable lists for warmups, ESL, games, and school activities.',
        examples: {
          title: 'Classroom examples that are easy to explain',
          lead:
            'These objects were picked because they are familiar enough for fast instructions and flexible enough for speaking, guessing, drawing, or review tasks.',
        },
        landing: {
          introTitle: 'A classroom object page should help a teacher move faster, not create more filtering work.',
          introBody:
            'When teachers or tutors search for random classroom objects, they usually want prompts they can use immediately in school-friendly contexts. That means the objects need to be familiar, easy to explain, and adaptable to warmups, vocabulary tasks, and short games. This page tightens the object pool so the results feel more usable for instruction than a wide-open generator.',
          featureTitle: 'Why this page works better for classroom use',
          featureLead: 'The page is built around teachability, quick comprehension, and repeatable classroom tasks.',
          features: [
            {
              title: 'School-friendly prompt pool',
              body: 'Objects are easier to adapt for warmups, group work, quick descriptions, and teacher-led activities.',
            },
            {
              title: 'Fast classroom setup',
              body: 'Visual cards make it easier to present prompts quickly without long explanation or extra prep.',
            },
            {
              title: 'Useful in multiple formats',
              body: 'The same page can support scavenger hunts, ESL practice, drawing tasks, and pair discussions.',
            },
          ],
          categoryTitle: 'Best categories for classroom objects',
          categoryLead:
            'Simple household objects, familiar foods, and light playful items often translate best to class-friendly tasks.',
          useCasesTitle: 'Common classroom uses',
          useCases: [
            'Morning warmups',
            'Vocabulary review',
            'Pair speaking rounds',
            'Classroom scavenger hunts',
            'Quick drawing tasks',
            'Exit-ticket prompts',
          ],
          faqTitle: 'Classroom objects page FAQ',
          faqs: [
            {
              question: 'Why use a classroom-specific page instead of the homepage?',
              answer:
                'Because classroom tasks benefit from more predictable, school-friendly objects. A focused page cuts down on irrelevant results and prep time.',
            },
            {
              question: 'Is this page only for teachers?',
              answer:
                'No. Tutors, parents, activity leaders, and anyone running structured group tasks can use it as well.',
            },
            {
              question: 'Can I build a full prompt set for one lesson?',
              answer:
                'Yes. Use a custom count or bulk mode to generate a longer list for one class period or activity block.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '课堂活动',
        title: '随机课堂物品',
        description:
          '生成更适合课堂环境的随机物品，用于热身、口语活动、寻物游戏和日常教学任务。',
        visualTitle: '抽一个适合课堂使用的物品',
        visualDescription:
          '这里更强调容易讲、容易看懂、容易放进课堂活动里的对象，而不是无边界的随机结果。',
        bulkTitle: '生成一组课堂物品题目',
        bulkDescription:
          '如果你要做分组任务、练习纸、课堂游戏或复习活动，可以一次生成更长的题目清单。',
        seoTitle: '随机课堂物品生成器',
        seoDescription:
          '生成适合课堂场景的随机物品，支持视觉卡片和批量清单，适用于热身、ESL、课堂游戏和教学活动。',
        examples: {
          title: '适合课堂快速使用的示例物品',
          lead:
            '这些对象更容易讲清楚，也更容易转成口语、猜测、绘画和复习任务，适合老师直接放进课堂流程。',
        },
        landing: {
          introTitle: '课堂物品页应该帮助老师更快进入活动，而不是再花时间筛结果。',
          introBody:
            '搜索“随机课堂物品”的人，往往要的是能立刻用进课堂的小对象，而不是随便一个随机名词。对象需要足够熟悉、足够容易解释，也要能灵活放进热身、词汇练习、口语任务或小游戏里。这个页面把对象池往更适合学校环境的方向收窄，让结果更省准备时间。',
          featureTitle: '为什么这个页面更适合课堂',
          featureLead: '它的重点是教学可用性、理解速度和活动复用率。',
          features: [
            {
              title: '对象更适合学校环境',
              body: '结果更容易直接拿来做热身、小组任务、描述练习和教师主导的课堂活动。',
            },
            {
              title: '课堂准备更快',
              body: '视觉卡片能帮助老师快速展示题目，减少额外解释和准备工作。',
            },
            {
              title: '一页能服务多种玩法',
              body: '同一组对象既能做寻物、ESL、画画，也能做配对讨论和口头表达。',
            },
          ],
          categoryTitle: '更适合课堂的分类',
          categoryLead:
            '简单家居物、熟悉食物和轻松一点的趣味对象，通常最容易转成课堂任务。',
          useCasesTitle: '常见课堂使用场景',
          useCases: [
            '晨间热身',
            '词汇复习',
            '双人口语轮次',
            '课堂寻物游戏',
            '快速绘画任务',
            '课末出口卡',
          ],
          faqTitle: '课堂物品页常见问题',
          faqs: [
            {
              question: '为什么要单独做一个课堂物品页？',
              answer: '因为课堂活动更依赖可预测、可讲解的对象。独立页面能减少不相关结果，也能减少备课时间。',
            },
            {
              question: '只有老师才能用这个页面吗？',
              answer: '不是。家教、家长、活动组织者，以及任何在带结构化小组任务的人都可以用。',
            },
            {
              question: '可以直接生成一整节课的题目吗？',
              answer: '可以。你可以输入数量或用批量模式，一次准备完整一轮活动素材。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '授業向け',
        title: 'ランダムな教室向けオブジェクト',
        description:
          '授業の導入、会話活動、宝探し、日常のクラス運営に使いやすいオブジェクトを生成します。',
        visualTitle: '授業向けのオブジェクトを引く',
        visualDescription:
          '結果は、説明しやすく、授業に組み込みやすい対象へ寄せています。',
        bulkTitle: '授業用オブジェクト一覧を作る',
        bulkDescription:
          'グループ活動、ワークシート、授業ゲーム向けに、複数のお題をまとめて作れます。',
        seoTitle: 'ランダムな教室向けオブジェクトジェネレーター',
        seoDescription:
          '授業向けのランダムオブジェクトを生成。ウォームアップ、ESL、授業ゲーム、学習活動に便利です。',
        examples: {
          title: '授業で説明しやすいサンプル',
          lead:
            'すぐ説明でき、会話、推測、描画、復習に変換しやすい対象を優先しています。',
        },
        landing: {
          introTitle: '教室向けページは、先生の準備を増やさずに活動へつなげられることが大切です。',
          introBody:
            '授業で使うランダムオブジェクトは、奇抜さよりも使いやすさが重要です。生徒に説明しやすく、すぐに活動へ変換しやすい対象の方が、授業の流れを壊しません。このページは学校で使いやすい対象へ絞ることで、ホームページよりも授業利用に向いた着地先になっています。',
          featureTitle: '授業向けに使いやすい理由',
          featureLead: '教えやすさ、理解しやすさ、再利用しやすさを優先しています。',
          features: [
            {
              title: '学校向きの対象',
              body: 'ウォームアップ、説明練習、グループ活動にそのまま使いやすい対象を中心にしています。',
            },
            {
              title: '提示が速い',
              body: 'カード表示なので、長い説明をせずにお題を出しやすくなります。',
            },
            {
              title: '複数の活動形式に対応',
              body: '宝探し、会話練習、描画、ペアワークなど複数の授業活動に転用できます。',
            },
          ],
          categoryTitle: '教室向けに使いやすいカテゴリ',
          categoryLead:
            '日用品、身近な食べ物、少し遊び心のある対象は、授業内で扱いやすいバランスです。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '授業の導入',
            '語彙復習',
            'ペア会話',
            '教室内宝探し',
            '短い描画課題',
            '終了前の小タスク',
          ],
          faqTitle: '教室向けページ FAQ',
          faqs: [
            {
              question: 'なぜ教室向けの専用ページが必要ですか？',
              answer: '授業では使いやすく説明しやすい対象が重要だからです。専用ページにすることで準備の手間を減らせます。',
            },
            {
              question: '教師以外も使えますか？',
              answer: 'はい。家庭教師、保護者、アクティビティ担当者にも使いやすいです。',
            },
            {
              question: '一授業分のお題をまとめて作れますか？',
              answer: 'はい。数量指定や一括生成で、授業一回分の素材をまとめて準備できます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-office-objects',
    categories: ['household', 'funny', 'food'],
    defaultVisualCount: 5,
    exampleObjectIds: ['house-lamp', 'house-clock', 'house-key', 'food-popcorn', 'funny-tiny-crown', 'funny-disco-ball'],
    i18n: {
      en: {
        heroEyebrow: 'Office prompts',
        title: 'Random Office Objects',
        description:
          'Generate office-friendly object prompts for team games, workshops, writing exercises, naming sessions, and icebreakers.',
        visualTitle: 'Pull an office object prompt',
        visualDescription:
          'This page leans toward desk items, familiar workday objects, and prompt types that fit team or work-related settings.',
        bulkTitle: 'Build an office object list',
        bulkDescription:
          'Generate a longer office-themed set for workshops, onboarding activities, brainstorming sessions, or team facilitation.',
        seoTitle: 'Random Office Objects Generator',
        seoDescription:
          'Generate random office objects with visual cards and copyable lists for workshops, team games, icebreakers, and writing prompts.',
        examples: {
          title: 'Office examples for team and workshop prompts',
          lead:
            'These examples feel closer to desks, meetings, breaks, and shared work spaces, so they are easier to reuse in facilitation and team activities.',
        },
        landing: {
          introTitle: 'Office-object searches usually want context, not just randomness.',
          introBody:
            'People looking for random office objects often need them for specific tasks: team warmups, workplace charades, product naming exercises, facilitation sessions, or descriptive writing around work settings. A generic generator can produce technically valid objects that still feel off-theme. This page narrows the pool toward everyday office-adjacent prompts so the results are more immediately useful.',
          featureTitle: 'Why this page works for office-themed tasks',
          featureLead: 'The page is built to keep the prompts grounded in familiar workday contexts.',
          features: [
            {
              title: 'More relevant workday prompts',
              body: 'Objects feel closer to desks, meeting rooms, snacks, and shared spaces than to unrelated random nouns.',
            },
            {
              title: 'Good for facilitation',
              body: 'The prompts are easier to reuse in icebreakers, workshop exercises, and team games without extra rewriting.',
            },
            {
              title: 'Helpful for creative exercises',
              body: 'Office-themed batches work well for naming sessions, short writing tasks, improv, and communication drills.',
            },
          ],
          categoryTitle: 'Best categories for office objects',
          categoryLead:
            'Household-style tools, light novelty items, and familiar snack objects tend to map well onto office use cases.',
          useCasesTitle: 'Common office-object uses',
          useCases: [
            'Workshop icebreakers',
            'Team charades',
            'Creative writing prompts',
            'Naming exercises',
            'Onboarding games',
            'Meeting warmups',
          ],
          faqTitle: 'Office objects page FAQ',
          faqs: [
            {
              question: 'Why use an office-specific random object page?',
              answer:
                'Because work-related activities often need prompts that feel familiar in desk, meeting, or team settings. A narrower pool makes the results easier to use.',
            },
            {
              question: 'Is this only for corporate workshops?',
              answer:
                'No. It can also be useful for remote teams, coworking groups, trainers, and anyone running work-themed creative exercises.',
            },
            {
              question: 'Can I generate enough prompts for a full workshop?',
              answer:
                'Yes. You can generate a larger batch and copy it into slides, facilitation notes, or activity docs.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '办公场景',
        title: '随机办公物品',
        description:
          '生成更适合办公室、团队活动和工作坊的随机物品，用于破冰、写作、命名和小游戏。',
        visualTitle: '抽一个办公相关物品',
        visualDescription:
          '这里的结果会更贴近日常工位、会议和团队场景，而不是完全脱离上下文的随机对象。',
        bulkTitle: '生成一组办公物品清单',
        bulkDescription:
          '如果你要做工作坊、培训、入职活动或团队游戏，可以一次生成更长的办公主题列表。',
        seoTitle: '随机办公物品生成器',
        seoDescription:
          '生成随机办公物品，支持视觉卡片和批量清单，适用于工作坊、团队破冰、写作练习和命名活动。',
        examples: {
          title: '更贴近办公活动的示例物品',
          lead:
            '这些对象更容易联想到工位、会议、茶水间和团队互动，适合工作坊、破冰和创意练习。',
        },
        landing: {
          introTitle: '搜办公物品的人，通常需要的是“贴合工作场景”的结果，而不是更随机。',
          introBody:
            '办公物品的使用场景通常很具体，比如团队破冰、会议热身、工作坊活动、命名练习，或者围绕办公室写短文。泛用随机生成器虽然也会给出对象，但很容易缺乏场景感。这个页面会把结果拉回到工位、会议室、零食角和共享空间这类更熟悉的办公语境里。',
          featureTitle: '为什么这个页面更适合办公场景',
          featureLead: '重点是让结果更贴近日常工作环境，减少主持人再加工的成本。',
          features: [
            {
              title: '更贴近日常办公',
              body: '对象更容易让人联想到工位、会议、茶水间和共享空间，而不是跑偏到无关名词。',
            },
            {
              title: '适合工作坊和带领活动',
              body: '这些对象更容易直接拿去做破冰、互动题和团队小游戏，不需要额外改写。',
            },
            {
              title: '也适合创意练习',
              body: '办公主题列表可以直接用于命名、短写作、即兴表达和沟通训练。',
            },
          ],
          categoryTitle: '更适合办公主题的分类',
          categoryLead:
            '家居工具类、轻趣味对象和熟悉零食类物品，往往更容易映射到真实办公场景。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '工作坊破冰',
            '团队你演我猜',
            '创意写作提示',
            '命名练习',
            '入职游戏',
            '会议热身',
          ],
          faqTitle: '办公物品页常见问题',
          faqs: [
            {
              question: '为什么要单独做一个办公物品页？',
              answer: '因为工作相关活动更依赖有场景感的对象。独立页面能让结果更贴近日常办公环境，也更好直接使用。',
            },
            {
              question: '这个页面只适合企业培训吗？',
              answer: '不是。远程团队、共享办公群体、培训师和任何围绕工作主题做活动的人都可以用。',
            },
            {
              question: '能不能一次生成一整场活动的题目？',
              answer: '可以。你可以批量生成并复制进幻灯片、主持稿或活动文档里。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: 'オフィス向け',
        title: 'ランダムなオフィスオブジェクト',
        description:
          'オフィス、チーム活動、ワークショップで使いやすいオブジェクトを生成。アイスブレイクやライティングにも向いています。',
        visualTitle: 'オフィス系オブジェクトを引く',
        visualDescription:
          '結果はデスク、会議、共有スペースなど、仕事の文脈に近い対象へ寄せています。',
        bulkTitle: 'オフィス用オブジェクト一覧を作る',
        bulkDescription:
          'ワークショップ、研修、オンボーディング、チームゲーム向けに、複数のお題をまとめて作れます。',
        seoTitle: 'ランダムなオフィスオブジェクトジェネレーター',
        seoDescription:
          'オフィス向けのランダムオブジェクトを生成。ワークショップ、アイスブレイク、ライティング、命名活動に便利です。',
        examples: {
          title: 'チーム活動に使いやすいオフィス系サンプル',
          lead:
            'デスク、会議、休憩、共有スペースを連想しやすい対象を優先し、進行やチーム活動に使いやすくしています。',
        },
        landing: {
          introTitle: 'オフィス向け検索では、単なるランダムさよりも場面との一致が重要です。',
          introBody:
            'オフィスオブジェクトを探す人の多くは、チームのアイスブレイク、会議のウォームアップ、ワークショップ、命名演習、短いライティング課題などに使いたいと考えています。そこでこのページは、仕事の日常に近い対象へ寄せることで、より使いやすい結果を返せるようにしています。',
          featureTitle: 'オフィス向けに使いやすい理由',
          featureLead: '仕事の場面に結びつきやすい対象へ絞り込んでいます。',
          features: [
            {
              title: '仕事の日常に近い',
              body: 'デスク、会議室、共有スペース、おやつ周辺などを連想しやすい対象が多くなります。',
            },
            {
              title: '進行役が扱いやすい',
              body: 'アイスブレイク、ゲーム、ワークショップでそのまま使いやすく、追加調整が少なくて済みます。',
            },
            {
              title: '創作課題にも向く',
              body: '命名、短文作成、即興表現、コミュニケーション練習にも流用しやすいです。',
            },
          ],
          categoryTitle: 'オフィス向きのカテゴリ',
          categoryLead:
            '日用品寄りの道具、軽いユーモアのある対象、身近なおやつ系はオフィス文脈に乗せやすいです。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            'ワークショップの導入',
            'チームのジェスチャーゲーム',
            '創作ライティング',
            '命名演習',
            'オンボーディングゲーム',
            '会議のウォームアップ',
          ],
          faqTitle: 'オフィスページ FAQ',
          faqs: [
            {
              question: 'なぜオフィス専用ページが必要ですか？',
              answer: '仕事関連の活動では、文脈に合った対象の方が使いやすいからです。狭いプールの方が進行しやすくなります。',
            },
            {
              question: '企業研修以外にも使えますか？',
              answer: 'はい。リモートチーム、コワーキング、ファシリテーター、トレーナーにも使いやすいです。',
            },
            {
              question: '一度に長い一覧を作れますか？',
              answer: 'できます。複数のお題をまとめて生成して、スライドや進行メモにコピーできます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'animal-prompt-generator',
    categories: ['animals'],
    defaultVisualCount: 5,
    exampleObjectIds: ['animal-elephant', 'animal-cat', 'animal-dolphin', 'animal-eagle', 'animal-penguin', 'animal-turtle'],
    i18n: {
      en: {
        heroEyebrow: 'Animal prompts',
        title: 'Animal Prompt Generator',
        description:
          'Generate animal prompts for drawing, classroom games, charades, ESL warmups, and story ideas.',
        visualTitle: 'Generate one animal prompt',
        visualDescription:
          'Use the visual card when you need a quick animal idea that is easy to picture, draw, describe, or act out.',
        bulkTitle: 'Create an animal prompt list',
        bulkDescription:
          'Bulk mode builds a copyable animal list for worksheets, game rounds, sketch challenges, and lesson plans.',
        seoTitle: 'Animal Prompt Generator for Drawing, Games, and Classes',
        seoDescription:
          'Generate animal prompts for drawing, charades, ESL classes, storytelling, and creative warmups with visual cards and copyable lists.',
        examples: {
          title: 'Example animal prompts from this page',
          lead:
            'These examples show the kind of recognizable animals this page prioritizes, so the prompts stay useful for drawing, classrooms, games, and story exercises.',
        },
        landing: {
          introTitle: 'An animal prompt generator should be more specific than a generic random animal picker.',
          introBody:
            'People searching for animal prompts usually have a task in mind. They might need an animal to draw, an animal for charades, an ESL vocabulary warmup, a classroom question, or a story starter. This page keeps the generator focused on recognizable animals and explains how to use the results in real activities instead of treating every animal keyword as the same search.',
          featureTitle: 'Why this page is built around prompt use',
          featureLead: 'The page combines a narrower animal pool with examples, batch generation, FAQ, and links to nearby creative intents.',
          features: [
            {
              title: 'Drawable animals',
              body: 'Animals with clear shapes and familiar features work better for sketch practice and classroom drawing tasks.',
            },
            {
              title: 'Game-ready prompts',
              body: 'Animal names are easy to act out, describe, guess, and adapt into party games or group warmups.',
            },
            {
              title: 'Copyable lists',
              body: 'Bulk mode helps teachers and facilitators prepare a full animal prompt set instead of clicking one card at a time.',
            },
          ],
          intentTitle: 'The page covers animal prompt generator and animals to draw intent together.',
          intentBody:
            'Search Console data shows interest around animal prompt generator and animals to draw generator terms. Rather than creating several thin pages for the same need, this page acts as a stronger hub for animal prompts and sends users toward drawing, charades, ESL, and classroom pages when the use case becomes narrower.',
          intentBullets: [
            'Use it as an animal drawing prompt generator when the goal is sketch practice.',
            'Use it as a classroom animal prompt list for vocabulary, description, or speaking practice.',
            'Use related intent pages when the activity is clearly charades, ESL, drawing, or classroom use.',
          ],
          qualityTitle: 'E-E-A-T notes for this animal prompt page',
          qualityBody:
            'This is a creative and educational utility page. It does not provide animal care, wildlife safety, veterinary, or biological advice. The content is written around observable user tasks, and future updates should be guided by query data, engagement data, and whether the examples remain useful to teachers, artists, and facilitators.',
          qualityBullets: [
            'Recognizable animals are preferred over obscure species for broad usefulness.',
            'Prompt language is kept simple so children, ESL learners, and casual players can use it.',
            'The page links to relevant internal generators to keep users on a clearer path.',
          ],
          categoryTitle: 'Related animal prompt categories',
          categoryLead:
            'The animal category is intentionally narrow here, but it connects to nearby pages for drawing, classroom, ESL, and game use.',
          useCasesTitle: 'Best ways to use animal prompts',
          useCases: [
            'Animals to draw',
            'Animal charades',
            'ESL vocabulary',
            'Classroom warmups',
            'Story starters',
            'Daily sketch practice',
          ],
          faqTitle: 'Animal prompt generator FAQ',
          faqs: [
            {
              question: 'What is an animal prompt generator?',
              answer:
                'It is a tool that picks animal ideas you can use for drawing, games, lessons, writing, or quick creative warmups.',
            },
            {
              question: 'Can I use it as an animals to draw generator?',
              answer:
                'Yes. The animal results are concrete and visual, so they work well for sketch practice, drawing classes, and art challenges.',
            },
            {
              question: 'Is this page for professional animal advice?',
              answer:
                'No. It is for creative prompts and educational activities, not animal care, veterinary, wildlife, or safety guidance.',
            },
            {
              question: 'Can I generate a full animal prompt list?',
              answer:
                'Yes. Bulk mode creates multiple animal prompts at once so you can copy them into worksheets, slides, or game notes.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '动物提示词',
        title: '动物提示词生成器',
        description:
          '生成适合绘画、课堂、你演我猜、英语热身和故事创作的动物提示词。',
        visualTitle: '抽一个动物提示词',
        visualDescription:
          '当你只需要一个容易画、容易描述或容易表演的动物灵感时，用卡片模式最快。',
        bulkTitle: '生成动物提示词清单',
        bulkDescription:
          '批量模式可以生成一整组动物题目，适合课件、游戏、速写挑战和活动主持稿。',
        seoTitle: '动物提示词生成器 - 绘画、课堂和游戏动物题目',
        seoDescription:
          '生成动物提示词和动物绘画题目，支持视觉卡片和批量清单，适合课堂、你演我猜、ESL 和故事创作。',
        examples: {
          title: '这个页面会生成的动物提示词示例',
          lead:
            '这些示例展示了页面会优先使用的熟悉动物，方便用于绘画、课堂、游戏和故事练习。',
        },
        landing: {
          introTitle: '动物提示词页应该比普通随机动物页更明确。',
          introBody:
            '搜索动物提示词的人，通常已经有具体任务：想找一个动物来画、课堂上做词汇热身、玩动物你演我猜、写故事，或者准备一组儿童活动题目。这个页面会把对象池、示例、FAQ 和内链都围绕“动物提示”组织起来，而不是简单复用首页文本。',
          featureTitle: '为什么这个页面围绕提示词来写',
          featureLead: '它不仅能抽动物，还解释这些动物结果适合怎样被使用。',
          features: [
            {
              title: '适合绘画',
              body: '清晰、熟悉的动物更容易形成轮廓、动作和细节，适合速写和绘画课。',
            },
            {
              title: '适合游戏',
              body: '动物名很容易表演、描述和猜测，适合你演我猜、派对和课堂互动。',
            },
            {
              title: '方便整理清单',
              body: '批量模式能直接生成一组动物提示词，方便复制进课件或活动文档。',
            },
          ],
          intentTitle: '这个页面同时承接动物提示词和动物绘画题目需求。',
          intentBody:
            '从搜索数据看，动物提示词、动物绘画题目、动物随机抽取这类需求高度相关。与其拆成多个薄页面，不如把它们集中成一个更厚的动物提示词页，再通过内链分流到绘画、课堂、ESL 和游戏专题。',
          intentBullets: [
            '想找动物来画时，可以把它当动物绘画题目生成器。',
            '想做课堂活动时，可以批量生成动物词汇或描述题。',
            '如果活动已经明确是你演我猜、课堂或绘画，可继续进入对应专题页。'
          ],
          qualityTitle: '这个动物提示词页面的 E-E-A-T 边界',
          qualityBody:
            '这个页面是创意和教育用途的轻量工具，不提供动物饲养、野外安全、兽医或生物学专业建议。内容会围绕老师、创作者、活动主持人和普通玩家的真实任务整理，后续更新也会结合搜索表现和页面参与度。',
          qualityBullets: [
            '优先选择大众熟悉、全年龄更容易使用的动物。',
            '提示词语言保持简单，方便儿童、ESL 学习者和普通玩家理解。',
            '页面通过相关内链把用户继续带到更明确的用途页。'
          ],
          categoryTitle: '相关动物提示分类',
          categoryLead:
            '这个页面以动物为核心，同时连接绘画、课堂、ESL 和游戏等相邻需求。',
          useCasesTitle: '动物提示词最适合这些场景',
          useCases: [
            '动物绘画题目',
            '动物你演我猜',
            'ESL 词汇练习',
            '课堂热身',
            '故事开头',
            '每日速写',
          ],
          faqTitle: '动物提示词生成器常见问题',
          faqs: [
            {
              question: '动物提示词生成器是什么？',
              answer:
                '它会随机给出动物灵感，可用于绘画、游戏、课堂、写作和快速创意热身。',
            },
            {
              question: '可以当动物绘画题目生成器用吗？',
              answer:
                '可以。动物结果比较具体、容易想象，适合速写练习、绘画课和日常绘画挑战。',
            },
            {
              question: '这个页面提供专业动物建议吗？',
              answer:
                '不提供。它只面向创意提示和教育活动，不替代动物饲养、兽医、野外安全或生物学专业建议。',
            },
            {
              question: '能一次生成一整组动物提示词吗？',
              answer:
                '可以。批量模式可以一次生成多个动物提示词，方便复制到课件、幻灯片或游戏说明里。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '動物のお題',
        title: '動物プロンプトジェネレーター',
        description:
          '描画、授業、ジェスチャーゲーム、語学練習、物語づくりに使える動物のお題を生成します。',
        visualTitle: '動物のお題を一つ生成',
        visualDescription:
          'すぐに一つ決めたいときは、見やすいカードで動物のお題を引けます。',
        bulkTitle: '動物のお題リストを作る',
        bulkDescription:
          '授業、ゲーム、スケッチ練習、進行メモ用に複数の動物お題をまとめて作れます。',
        seoTitle: '動物プロンプトジェネレーター：描画、授業、ゲーム向け',
        seoDescription:
          '描画、授業、ジェスチャーゲーム、語学練習、物語づくりに使える動物のお題をカードと一覧で生成します。',
        examples: {
          title: 'このページで出る動物のお題例',
          lead:
            '描画、授業、ゲーム、物語づくりに使いやすい、見分けやすい動物を中心にしています。',
        },
        landing: {
          introTitle: '動物プロンプトページは、普通のランダム動物ページより用途を明確にします。',
          introBody:
            '動物のお題を探す人は、絵を描く、授業で使う、ジェスチャーゲームをする、語彙を練習する、物語を作るなど、具体的な目的を持っていることが多いです。このページは動物プール、例、FAQ、関連リンクをその用途に合わせて整理しています。',
          featureTitle: 'お題として使いやすい理由',
          featureLead: 'ただ動物名を出すだけでなく、使う場面まで分かる構成です。',
          features: [
            {
              title: '描きやすい',
              body: '形や特徴を想像しやすい動物は、スケッチや授業のお題に向いています。',
            },
            {
              title: 'ゲームに使いやすい',
              body: '動物名は演じる、説明する、当てる活動に自然に使えます。',
            },
            {
              title: '一覧化できる',
              body: '一括生成で授業やゲーム用の動物リストをすぐ作れます。',
            },
          ],
          intentTitle: '動物のお題と描く動物の検索意図を一つにまとめます。',
          intentBody:
            '動物プロンプト、描く動物、ランダム動物リストは近い検索意図です。このページは薄い複数ページに分けず、動物のお題用ハブとしてまとめ、必要に応じて描画、授業、ゲーム系ページへつなげます。',
          intentBullets: [
            '描く対象が欲しいときは、動物のお題として使えます。',
            '授業では語彙、説明、会話練習に使えます。',
            '用途が明確な場合は関連ページへ進めます。'
          ],
          qualityTitle: 'このページの E-E-A-T 上の位置づけ',
          qualityBody:
            'このページは創作と教育向けの軽いツールであり、動物飼育、獣医、野生動物、安全に関する専門助言ではありません。教師、進行役、アーティスト、プレイヤーが実際に使いやすいかを基準に内容を改善します。',
          qualityBullets: [
            '多くの人が知っている動物を優先します。',
            '子どもや語学学習者にも分かりやすい表現にします。',
            '関連する内部リンクで近い用途へ移動しやすくします。'
          ],
          categoryTitle: '関連する動物お題カテゴリ',
          categoryLead:
            '動物を中心にしながら、描画、授業、語学、ゲームの近い用途につなげます。',
          useCasesTitle: '動物のお題の使い方',
          useCases: [
            '描く動物',
            'ジェスチャーゲーム',
            '語彙練習',
            '授業の導入',
            '物語の出発点',
            '毎日のスケッチ',
          ],
          faqTitle: '動物プロンプトジェネレーター FAQ',
          faqs: [
            {
              question: '動物プロンプトジェネレーターとは何ですか？',
              answer:
                '描画、授業、ゲーム、文章、短い創作練習に使える動物のお題をランダムに出すツールです。',
            },
            {
              question: '描く動物を決める用途に使えますか？',
              answer:
                'はい。具体的で想像しやすい動物が多いため、スケッチや授業のお題に使えます。',
            },
            {
              question: '専門的な動物情報として使えますか？',
              answer:
                'いいえ。創作と教育活動向けであり、獣医、飼育、安全、生物学の専門助言ではありません。',
            },
            {
              question: '複数のお題をまとめて作れますか？',
              answer:
                'はい。一括生成で複数の動物お題を作り、資料やゲームメモにコピーできます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-object-list-generator',
    categories: ['animals', 'household', 'food', 'nature', 'funny'],
    defaultVisualCount: 10,
    exampleObjectIds: ['animal-elephant', 'house-kettle', 'food-apple', 'nature-rainbow', 'funny-rubber-duck', 'house-key'],
    i18n: {
      en: {
        heroEyebrow: 'Copyable lists',
        title: 'Random Object List Generator',
        description:
          'Generate a random object list for drawing prompts, classroom games, charades, writing, and quick brainstorms.',
        visualTitle: 'Preview object cards before you copy',
        visualDescription:
          'Use visual cards to check whether the object mix fits your activity before creating a longer list.',
        bulkTitle: 'Generate a copyable object list',
        bulkDescription:
          'Choose a quantity, generate a list, and copy it into worksheets, slides, docs, game sheets, or prompt libraries.',
        seoTitle: 'Random Object List Generator for Prompts and Games',
        seoDescription:
          'Generate random object lists with visual cards and copyable bulk output for drawing prompts, classroom games, writing, charades, and brainstorms.',
        examples: {
          title: 'Example objects that can appear in a generated list',
          lead:
            'A strong random object list should mix familiar items, animals, food, nature, and playful prompts so it works across different activities.',
        },
        landing: {
          introTitle: 'A random object list generator is for people who need usable output, not just one surprise word.',
          introBody:
            'Many searches around random object list, random list of objects, object prompt generator, and random things list come from users who need multiple ideas at once. A teacher may need worksheet prompts, a facilitator may need a game sheet, an artist may need ten drawing ideas, and a writer may need a compact prompt bank. This page focuses on the list workflow so users can generate, review, and copy results quickly.',
          featureTitle: 'What makes the list workflow different',
          featureLead: 'The page emphasizes quantity, copyability, and practical reuse while still keeping the visual generator available.',
          features: [
            {
              title: 'Built for batches',
              body: 'The default flow supports longer output, making it better for worksheets, group activities, and prompt libraries.',
            },
            {
              title: 'Broad object mix',
              body: 'Animals, household items, food, nature prompts, and funny objects keep lists varied without becoming abstract.',
            },
            {
              title: 'Easy to repurpose',
              body: 'Generated lists can be copied into documents, slides, notes, or game instructions without extra formatting work.',
            },
          ],
          intentTitle: 'This page targets random object list and object prompt generator searches.',
          intentBody:
            'The homepage covers the broad random object generator intent, while this page is tuned for people who specifically want a list. That distinction matters for SEO and usability: list-searchers expect multiple results, copy behavior, examples, and guidance on how to use the output in a real setting.',
          intentBullets: [
            'Use it for a random object list when you need many prompts at once.',
            'Use it as an object prompt generator when the output will feed drawing, writing, or game activities.',
            'Use category links when the list should contain only animals, food, household items, or another narrower type.',
          ],
          qualityTitle: 'How this list page avoids becoming thin pSEO',
          qualityBody:
            'This page has a distinct workflow, distinct copy, examples, FAQ, and internal links. It does not replace the homepage or duplicate category pages. Its job is to serve users who need a copyable list, while the homepage remains the broad entry point and category pages remain the best answer for narrower object types.',
          qualityBullets: [
            'The page explains list-specific use cases rather than repeating homepage copy.',
            'The generator supports practical output that can be copied into real materials.',
            'Internal links keep users moving to more precise pages when their list needs a narrower theme.',
          ],
          categoryTitle: 'Object categories that work well in lists',
          categoryLead:
            'Mixed lists are most useful when the object pool stays concrete. These categories keep prompts recognizable enough for games, classrooms, drawing, and writing.',
          useCasesTitle: 'Common list generator use cases',
          useCases: [
            'Drawing prompt lists',
            'Classroom worksheets',
            'Charades word banks',
            'Writing prompt banks',
            'Improv warmups',
            'Brainstorming sessions',
          ],
          faqTitle: 'Random object list generator FAQ',
          faqs: [
            {
              question: 'What is a random object list generator?',
              answer:
                'It is a tool that generates multiple object prompts at once so you can copy the list into games, classes, writing sessions, or creative exercises.',
            },
            {
              question: 'How is this different from the homepage?',
              answer:
                'The homepage is built around broad discovery and single-card generation. This page is specifically focused on creating longer copyable lists.',
            },
            {
              question: 'Can I make the list more specific?',
              answer:
                'Yes. Use the related category pages if you only want animals, food, household items, nature prompts, or funny objects.',
            },
            {
              question: 'Is the list safe for classroom use?',
              answer:
                'The object pool is designed for light educational and creative use, but teachers and facilitators should still review generated lists before sharing them.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '可复制清单',
        title: '随机物品清单生成器',
        description:
          '生成随机物品清单，可用于绘画题、课堂活动、你演我猜、写作和快速脑暴。',
        visualTitle: '先预览物品卡片',
        visualDescription:
          '生成清单前，可以先用卡片看对象组合是否适合你的活动。',
        bulkTitle: '生成可复制的随机物品清单',
        bulkDescription:
          '输入数量后生成一组结果，直接复制到课件、文档、游戏题卡或提示词库里。',
        seoTitle: '随机物品清单生成器 - 物品提示词和游戏题库',
        seoDescription:
          '生成随机物品清单和对象提示词，支持视觉卡片和批量复制，适合绘画、课堂、写作、你演我猜和脑暴。',
        examples: {
          title: '随机物品清单里可能出现的示例',
          lead:
            '好的随机物品清单应该混合熟悉物品、动物、食物、自然元素和轻松有趣的对象，方便不同活动直接使用。',
        },
        landing: {
          introTitle: '随机物品清单生成器服务的是“需要一组结果”的用户。',
          introBody:
            '搜索随机物品清单、random object list、随机物品列表或 object prompt generator 的用户，通常不是只想抽一个词。他们可能要准备课堂题目、游戏题卡、绘画练习、写作提示或团队活动素材。这个页面专门围绕“生成、查看、复制一整组结果”的流程来写。',
          featureTitle: '清单页和首页有什么不同',
          featureLead: '它更重视数量、复制和实际复用，同时保留视觉卡片方便预览。',
          features: [
            {
              title: '适合批量生成',
              body: '默认更适合输出一组结果，用于课件、工作坊、小游戏和素材库。',
            },
            {
              title: '对象类型更丰富',
              body: '动物、家居、食物、自然和搞怪对象混合出现，让清单不至于太单调。',
            },
            {
              title: '方便二次使用',
              body: '生成结果可以直接复制进文档、幻灯片、笔记或游戏说明。',
            },
          ],
          intentTitle: '这个页面承接随机物品清单和对象提示词需求。',
          intentBody:
            '首页继续承接宽泛的随机物品生成器主词，而这个页面专门服务想要“多个结果”的用户。这样既不会稀释首页，也能让搜索随机物品清单、随机物品列表、object prompt generator 的用户看到更匹配的内容。',
          intentBullets: [
            '需要一次拿到很多提示时，用它生成随机物品清单。',
            '要做绘画、写作或游戏素材时，可以把它当对象提示词生成器。',
            '如果只想要动物、食物或家居等单一主题，可以进入对应分类页。'
          ],
          qualityTitle: '这个清单页怎样避免变成薄 SEO 页面',
          qualityBody:
            '它有独立的使用流程、正文、示例、FAQ 和内链，并不是把首页换个标题。首页负责宽泛入口，分类页负责更窄主题，而这个页面负责可复制清单场景。三者分工清楚，才能减少重复和门页风险。',
          qualityBullets: [
            '正文围绕清单场景写，不复用首页话术。',
            '生成器输出能直接复制进真实材料里。',
            '内链会把更明确的需求引导到动物、食物、家居等页面。'
          ],
          categoryTitle: '适合组成随机物品清单的分类',
          categoryLead:
            '混合清单最好保持对象具体可理解，这些分类适合课堂、游戏、绘画和写作。',
          useCasesTitle: '随机物品清单常见用途',
          useCases: [
            '绘画题目清单',
            '课堂练习题',
            '你演我猜题库',
            '写作提示库',
            '即兴热身',
            '团队脑暴',
          ],
          faqTitle: '随机物品清单生成器常见问题',
          faqs: [
            {
              question: '随机物品清单生成器是什么？',
              answer:
                '它可以一次生成多个物品提示词，方便复制到游戏、课堂、写作或创意练习里。',
            },
            {
              question: '它和首页有什么不同？',
              answer:
                '首页更适合宽泛浏览和单张卡片生成，这个页面更专注于生成更长、更方便复制的物品清单。',
            },
            {
              question: '清单可以更具体吗？',
              answer:
                '可以。如果你只想要动物、食物、家居、自然或搞怪对象，可以进入对应分类页。',
            },
            {
              question: '适合课堂使用吗？',
              answer:
                '对象池面向轻量教育和创意用途，但老师或主持人在分享前仍建议快速检查一次生成结果。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: 'コピーできる一覧',
        title: 'ランダムオブジェクト一覧ジェネレーター',
        description:
          '描画、授業、ゲーム、文章、ブレストに使えるランダムオブジェクト一覧を生成します。',
        visualTitle: '一覧化する前にカードで確認',
        visualDescription:
          '活動に合う対象かどうか、カード表示で先に雰囲気を確認できます。',
        bulkTitle: 'コピーできる一覧を生成',
        bulkDescription:
          '必要な数を指定して、資料、スライド、ゲーム用シート、メモに貼り付けられる一覧を作れます。',
        seoTitle: 'ランダムオブジェクト一覧ジェネレーター：お題とゲーム向け',
        seoDescription:
          '描画、授業、文章、ゲーム、ブレスト向けに、カード表示と一括コピー対応のランダムオブジェクト一覧を生成します。',
        examples: {
          title: '一覧に出てくるオブジェクト例',
          lead:
            '使いやすい一覧は、身近な物、動物、食べ物、自然、おもしろい対象をバランスよく含みます。',
        },
        landing: {
          introTitle: 'ランダムオブジェクト一覧は、一つではなく複数のお題が必要な人のためのページです。',
          introBody:
            'ランダムオブジェクト一覧、ランダムな物リスト、オブジェクトプロンプトを探す人は、授業、ゲーム、描画、文章、ブレストで使うために複数の候補を欲しがっています。このページは生成、確認、コピーという一覧向けの流れを中心にしています。',
          featureTitle: '一覧向けページとしての違い',
          featureLead: '量、コピーしやすさ、実際の再利用を重視しています。',
          features: [
            {
              title: 'まとめて作れる',
              body: '授業、ゲーム、ワークショップ、プロンプト集に使える複数候補を作れます。',
            },
            {
              title: '対象が広い',
              body: '動物、日用品、食べ物、自然、おもしろ系を混ぜて、使いやすい一覧にします。',
            },
            {
              title: '転用しやすい',
              body: '生成した一覧は、資料、スライド、メモ、ゲーム説明に貼り付けやすいです。',
            },
          ],
          intentTitle: 'このページは、一覧とオブジェクトプロンプトの検索意図を受け止めます。',
          intentBody:
            'トップページは広いランダム生成を担い、このページは複数候補をコピーしたい人に合わせています。検索意図を分けることで、ユーザーにも検索エンジンにもページの役割が分かりやすくなります。',
          intentBullets: [
            '複数のお題が必要なときは一覧生成として使えます。',
            '描画、文章、ゲームの素材としてオブジェクトプロンプトを作れます。',
            'テーマを絞りたい場合はカテゴリページに進めます。'
          ],
          qualityTitle: '薄い SEO ページにしないために',
          qualityBody:
            'このページは一覧生成という明確なワークフローを持ち、本文、例、FAQ、内部リンクもその用途に合わせています。トップページやカテゴリページを置き換えるのではなく、コピー可能なリストが必要な場面を担当します。',
          qualityBullets: [
            '本文は一覧利用に特化し、トップページの言い換えにしません。',
            '出力は実際の資料や活動に貼り付けやすい形を目指します。',
            '内部リンクで、より具体的なテーマのページへ進めます。'
          ],
          categoryTitle: '一覧に向くカテゴリ',
          categoryLead:
            '具体的で分かりやすいカテゴリを組み合わせることで、授業、ゲーム、描画、文章に使いやすい一覧になります。',
          useCasesTitle: '一覧ジェネレーターの使い方',
          useCases: [
            '描画お題リスト',
            '授業プリント',
            'ゲーム用単語集',
            '文章プロンプト集',
            '即興練習',
            'ブレスト',
          ],
          faqTitle: 'ランダムオブジェクト一覧ジェネレーター FAQ',
          faqs: [
            {
              question: 'ランダムオブジェクト一覧ジェネレーターとは何ですか？',
              answer:
                '複数の物のお題を一度に生成し、授業、ゲーム、文章、創作練習にコピーして使えるツールです。',
            },
            {
              question: 'トップページと何が違いますか？',
              answer:
                'トップページは広い発見と単発カード向けで、このページは長めのコピー可能な一覧作成に特化しています。',
            },
            {
              question: 'テーマを絞った一覧にできますか？',
              answer:
                'はい。動物、食べ物、日用品、自然、おもしろ系だけが欲しい場合はカテゴリページを使えます。',
            },
            {
              question: '授業で使えますか？',
              answer:
                '軽い教育用途を想定していますが、共有前には教師や進行役が生成結果を確認してください。',
            },
          ],
        },
      },
    },
  },
]

type GrowthLocaleCopy = {
  heroEyebrow: string
  title: string
  description: string
  visualTitle: string
  visualDescription: string
  bulkTitle: string
  bulkDescription: string
  seoTitle: string
  seoDescription: string
  exampleTitle: string
  exampleLead: string
  primaryPhrase: string
  audience: string
  workflow: string
  featureLead: string
  categoryLead: string
  useCasesTitle: string
  useCases: string[]
  faqs: Array<{ question: string; answer: string }>
  disclaimer?: string
}

type GrowthIntentSeed = {
  slug: Extract<
    IntentPageConfig['slug'],
    | 'random-animal-to-draw'
    | 'random-food-picker'
    | 'random-object-picker'
    | 'random-esl-vocabulary-generator'
    | 'random-charades-generator'
    | 'random-object-games'
    | 'classroom-random-object-activities'
    | 'esl-object-vocabulary-games'
  >
  categories: string[]
  defaultVisualCount: number
  exampleObjectIds: string[]
  i18n: Record<Locale, GrowthLocaleCopy>
}

const growthIntentSeeds: GrowthIntentSeed[] = [
  {
    slug: 'random-object-games',
    categories: ['animals', 'household', 'food', 'funny'],
    defaultVisualCount: 8,
    exampleObjectIds: ['animal-fox', 'house-key', 'food-pizza', 'funny-rubber-duck', 'house-clock', 'food-apple'],
    i18n: {
      en: {
        heroEyebrow: 'Game resource',
        title: 'Random Object Games',
        description:
          'Use random objects to run quick party games, classroom warmups, drawing rounds, charades, storytelling, and team icebreakers.',
        visualTitle: 'Pick objects for a game round',
        visualDescription:
          'Generate concrete objects that are easy to describe, draw, act out, compare, or fold into a short game prompt.',
        bulkTitle: 'Build a game-ready object list',
        bulkDescription:
          'Create a reusable prompt list for multiple rounds, teams, worksheets, or a facilitator script.',
        seoTitle: 'Random Object Games for Classrooms, Parties, and Icebreakers',
        seoDescription:
          'Run random object games with visual prompt cards, copyable lists, activity ideas, FAQ, and practical game formats for classrooms and groups.',
        exampleTitle: 'Game-ready object examples',
        exampleLead:
          'These objects are concrete enough for guessing, drawing, describing, sorting, and storytelling games, which makes the page useful beyond a single random click.',
        primaryPhrase: 'random object games',
        audience: 'teachers, party hosts, team facilitators, parents, and anyone who needs a fast object-based activity',
        workflow: 'choose a game format, generate a short object list, remove any poor-fit result, then use the remaining cards as rounds or team prompts',
        featureLead: 'The page turns random objects into repeatable game formats instead of leaving visitors with a raw list.',
        categoryLead:
          'Animals, household items, foods, and funny objects give clearer actions, comparisons, and stories than abstract prompts.',
        useCasesTitle: 'Object games you can run from this page',
        useCases: ['Object charades', 'Describe and guess', 'Fast drawing rounds', 'Story chain games', 'Team icebreakers', 'Sorting challenges'],
        faqs: [
          { question: 'How do you play a random object game?', answer: 'Pick a format first, such as describe-and-guess, drawing, charades, or story chain. Then generate objects and use each result as one round.' },
          { question: 'Why use objects instead of general words?', answer: 'Objects are concrete, easier to picture, and easier to turn into actions or descriptions, so games move faster.' },
          { question: 'Can I use this for a classroom?', answer: 'Yes. Generate a short list, assign one object per student or team, and use the cards for speaking, drawing, or vocabulary review.' },
          { question: 'Should I keep every generated result?', answer: 'No. For real games, it is normal to remove results that do not fit the age group, room, or activity rules.' },
        ],
      },
      zh: {
        heroEyebrow: '游戏资源',
        title: '随机物品游戏',
        description:
          '用随机物品快速组织聚会游戏、课堂热身、绘画回合、你演我猜、故事接龙和团队破冰。',
        visualTitle: '抽取一轮游戏物品',
        visualDescription:
          '生成具体、容易描述、容易画、容易表演和容易比较的物品，让活动更快开始。',
        bulkTitle: '生成一组可直接游戏的物品清单',
        bulkDescription:
          '为多轮游戏、小组题卡、课件或主持人流程准备可复制的物品列表。',
        seoTitle: '随机物品游戏：课堂、聚会和破冰活动题库',
        seoDescription:
          '用随机物品组织课堂、聚会和破冰活动，支持视觉卡片、可复制清单、活动玩法和常见问题。',
        exampleTitle: '适合游戏的物品示例',
        exampleLead:
          '这些物品足够具体，适合猜词、绘画、描述、分类和故事接龙，让页面不只是一个随机按钮。',
        primaryPhrase: '随机物品游戏',
        audience: '老师、聚会主持人、团队引导师、家长，以及需要快速组织物品活动的人',
        workflow: '先选一种游戏玩法，再生成短清单，删掉不合适结果，最后把剩下卡片作为回合或小组题目',
        featureLead: '这个页面会把随机物品转化成可重复的游戏流程，而不是只给用户一串原始词。',
        categoryLead:
          '动物、家居、食物和搞怪物品更容易产生动作、比较和故事，比抽象提示更适合游戏。',
        useCasesTitle: '这个页面可以组织的物品游戏',
        useCases: ['物品你演我猜', '描述并猜测', '快速绘画回合', '故事接龙', '团队破冰', '分类挑战'],
        faqs: [
          { question: '随机物品游戏怎么玩？', answer: '先确定玩法，比如描述猜测、绘画、你演我猜或故事接龙，再生成物品，把每个结果当成一个回合。' },
          { question: '为什么用物品而不是普通词语？', answer: '物品更具体、更容易想象，也更容易转化成动作和描述，活动节奏会更顺。' },
          { question: '课堂可以用吗？', answer: '可以。生成短清单后给每个学生或小组分配一个物品，用来练口语、绘画或词汇复习。' },
          { question: '每个生成结果都要保留吗？', answer: '不用。真实活动里，删掉不适合年龄、场地或规则的结果是正常流程。' },
        ],
      },
      ja: {
        heroEyebrow: 'ゲーム用リソース',
        title: 'ランダムオブジェクトゲーム',
        description:
          'ランダムなオブジェクトを使って、授業導入、パーティー、描画、ジェスチャー、物語づくり、チーム交流をすぐ始められます。',
        visualTitle: 'ゲーム用の対象を選ぶ',
        visualDescription:
          '説明しやすく、描きやすく、演じやすく、比べやすい具体物を生成します。',
        bulkTitle: 'ゲーム用オブジェクトリストを作る',
        bulkDescription:
          '複数ラウンド、チーム、ワークシート、進行台本に使える一覧を作成できます。',
        seoTitle: 'ランダムオブジェクトゲーム',
        seoDescription:
          '授業、パーティー、アイスブレイク向けのランダムオブジェクトゲーム。カード表示、一覧コピー、活動案、FAQ 付き。',
        exampleTitle: 'ゲームに使いやすい例',
        exampleLead:
          '当てる、描く、説明する、分類する、物語に入れるなどの活動に使いやすい具体物を例として示しています。',
        primaryPhrase: 'ランダムオブジェクトゲーム',
        audience: '先生、パーティー主催者、進行役、保護者、短い活動を作りたい人',
        workflow: 'ゲーム形式を決め、短いリストを生成し、合わない結果を外して、残りをラウンドやチームのお題にします',
        featureLead: '単なるランダム一覧ではなく、活動として使える形に整理したページです。',
        categoryLead:
          '動物、日用品、食べ物、おもしろアイテムは、動作、比較、物語にしやすいカテゴリです。',
        useCasesTitle: 'このページでできるゲーム',
        useCases: ['オブジェクトジェスチャー', '説明して当てる', '短時間スケッチ', '物語リレー', 'チーム交流', '分類チャレンジ'],
        faqs: [
          { question: 'ランダムオブジェクトゲームはどう遊びますか？', answer: '説明して当てる、描く、ジェスチャー、物語リレーなどの形式を決め、生成した対象を一ラウンドのお題にします。' },
          { question: 'なぜ普通の単語ではなくオブジェクトを使うのですか？', answer: '具体物は想像しやすく、動作や説明に変えやすいため、ゲームが止まりにくくなります。' },
          { question: '授業でも使えますか？', answer: '使えます。短い一覧を作って、生徒やチームに一つずつ割り当てると、会話、描画、語彙復習に使えます。' },
          { question: '生成結果は全部使うべきですか？', answer: 'いいえ。年齢、場所、ルールに合わない結果は外して使うのが自然です。' },
        ],
      },
    },
  },
  {
    slug: 'classroom-random-object-activities',
    categories: ['household', 'animals', 'food', 'nature'],
    defaultVisualCount: 10,
    exampleObjectIds: ['house-lamp', 'animal-rabbit', 'food-apple', 'nature-pinecone', 'house-chair', 'nature-shell'],
    i18n: {
      en: {
        heroEyebrow: 'Classroom activities',
        title: 'Classroom Random Object Activities',
        description:
          'Plan quick classroom activities with random object prompts for vocabulary, drawing, speaking, writing, sorting, and group warmups.',
        visualTitle: 'Pick a classroom object prompt',
        visualDescription:
          'Generate classroom-safe prompts that can become a speaking turn, drawing cue, sentence starter, or group challenge.',
        bulkTitle: 'Build a classroom prompt set',
        bulkDescription:
          'Create a copyable list for stations, worksheets, small groups, early finishers, or a full warmup routine.',
        seoTitle: 'Classroom Random Object Activities and Prompt Ideas',
        seoDescription:
          'Use random object prompts for classroom activities, vocabulary practice, drawing, writing, sorting, group warmups, and lesson starters.',
        exampleTitle: 'Classroom-friendly object examples',
        exampleLead:
          'These objects are familiar enough for students to describe, sort, draw, compare, or place into a sentence without long setup.',
        primaryPhrase: 'classroom random object activities',
        audience: 'teachers, tutors, homeschool parents, camp leaders, and facilitators who need low-prep classroom prompts',
        workflow: 'choose the activity goal, generate a list, assign prompts to students or groups, and let students explain, draw, sort, or write with the object',
        featureLead: 'The page is organized around classroom use, not just a generic random generator.',
        categoryLead:
          'Household, animal, food, and nature objects are familiar enough for mixed-age classroom activities.',
        useCasesTitle: 'Classroom activities this page supports',
        useCases: ['Vocabulary review', 'Speaking warmups', 'Quick writes', 'Drawing starters', 'Sorting games', 'Exit tickets'],
        faqs: [
          { question: 'How can teachers use random objects in class?', answer: 'Use each object as a speaking prompt, drawing subject, sentence starter, sorting card, or group discussion cue.' },
          { question: 'Is this useful for low-prep lessons?', answer: 'Yes. The page gives fast concrete prompts that can be adapted without printing custom materials.' },
          { question: 'Can I use it with younger students?', answer: 'Yes, but keep the prompt count low and remove results that do not fit the age group or classroom context.' },
          { question: 'Can it support writing activities?', answer: 'Yes. Ask students to write a sentence, short description, story detail, or comparison using the generated object.' },
        ],
      },
      zh: {
        heroEyebrow: '课堂活动',
        title: '课堂随机物品活动',
        description:
          '用随机物品快速设计词汇、绘画、口语、写作、分类和小组热身活动。',
        visualTitle: '抽取一个课堂物品提示',
        visualDescription:
          '生成适合课堂的具体物品，可转化成口语回合、绘画题、造句开头或小组挑战。',
        bulkTitle: '生成一组课堂提示',
        bulkDescription:
          '为学习站、工作纸、小组活动、提前完成任务或完整热身流程准备可复制清单。',
        seoTitle: '课堂随机物品活动：词汇、口语、绘画和写作提示',
        seoDescription:
          '用随机物品组织课堂活动，适合词汇复习、口语热身、绘画、写作、分类游戏和小组任务。',
        exampleTitle: '适合课堂的物品示例',
        exampleLead:
          '这些物品足够熟悉，学生可以直接描述、分类、绘画、比较或放进句子里。',
        primaryPhrase: '课堂随机物品活动',
        audience: '老师、家教、家庭教育家长、营地负责人和需要低准备课堂提示的人',
        workflow: '先确定活动目标，生成清单，把物品分配给学生或小组，再让他们描述、绘画、分类或写作',
        featureLead: '这个页面围绕课堂使用组织，而不是泛泛的随机生成器。',
        categoryLead:
          '家居、动物、食物和自然物品更适合不同年龄段课堂活动，因为学生更容易理解。',
        useCasesTitle: '这个页面支持的课堂活动',
        useCases: ['词汇复习', '口语热身', '快速写作', '绘画开场', '分类游戏', '退出票'],
        faqs: [
          { question: '老师怎么在课堂上用随机物品？', answer: '可以把每个物品当作口语提示、绘画对象、造句开头、分类卡片或小组讨论题。' },
          { question: '适合低准备课程吗？', answer: '适合。页面提供具体提示，不需要提前制作复杂材料。' },
          { question: '低龄学生能用吗？', answer: '可以，但建议减少提示数量，并删掉不适合年龄或课堂场景的结果。' },
          { question: '能支持写作活动吗？', answer: '可以。学生可以围绕生成物品写一句话、短描述、故事细节或比较句。' },
        ],
      },
      ja: {
        heroEyebrow: '授業アクティビティ',
        title: '授業向けランダムオブジェクト活動',
        description:
          '語彙、描画、会話、作文、分類、小グループ活動に使えるランダムオブジェクトお題を作れます。',
        visualTitle: '授業用のお題を一つ選ぶ',
        visualDescription:
          '会話、描画、文づくり、グループ課題に変えやすい具体物を生成します。',
        bulkTitle: '授業用プロンプトセットを作る',
        bulkDescription:
          'ステーション活動、ワークシート、小グループ、早く終わった生徒、導入活動に使える一覧を作れます。',
        seoTitle: '授業向けランダムオブジェクト活動',
        seoDescription:
          'ランダムオブジェクトを使った授業活動。語彙、会話、描画、作文、分類、導入活動に使えます。',
        exampleTitle: '授業で使いやすい例',
        exampleLead:
          '生徒が説明、分類、描画、比較、作文に使いやすい身近な対象を例として示しています。',
        primaryPhrase: '授業向けランダムオブジェクト活動',
        audience: '先生、チューター、家庭学習の保護者、キャンプリーダー、準備の少ない活動が必要な人',
        workflow: '活動目的を決め、一覧を生成し、生徒やグループに割り当て、説明、描画、分類、作文に使います',
        featureLead: '汎用ジェネレーターではなく、授業での使い方を中心に整理しています。',
        categoryLead:
          '日用品、動物、食べ物、自然物は、幅広い年齢の授業で扱いやすいカテゴリです。',
        useCasesTitle: 'このページでできる授業活動',
        useCases: ['語彙復習', '会話導入', '短い作文', '描画導入', '分類ゲーム', '終了チケット'],
        faqs: [
          { question: '授業でランダムオブジェクトをどう使えますか？', answer: '会話のお題、描画対象、文の始まり、分類カード、グループ討論のきっかけとして使えます。' },
          { question: '準備が少ない授業に向いていますか？', answer: 'はい。具体的なお題をすぐ出せるため、複雑な教材を作らなくても使えます。' },
          { question: '低学年でも使えますか？', answer: '使えますが、生成数を少なめにし、年齢や教室に合わない結果は外してください。' },
          { question: '作文にも使えますか？', answer: 'はい。生成された対象を使って文、短い説明、物語の一部、比較文を書けます。' },
        ],
      },
    },
  },
  {
    slug: 'esl-object-vocabulary-games',
    categories: ['household', 'food', 'animals', 'nature'],
    defaultVisualCount: 8,
    exampleObjectIds: ['food-banana', 'house-key', 'animal-fox', 'nature-shell', 'house-lamp', 'food-apple'],
    i18n: {
      en: {
        heroEyebrow: 'ESL vocabulary games',
        title: 'ESL Object Vocabulary Games',
        description:
          'Use random object cards for ESL vocabulary games, speaking practice, description drills, guessing rounds, and classroom warmups.',
        visualTitle: 'Pick an ESL object card',
        visualDescription:
          'Generate familiar objects that learners can name, describe, compare, spell, sort, or act out in English.',
        bulkTitle: 'Build an ESL vocabulary list',
        bulkDescription:
          'Create a copyable set for vocabulary review, pair work, speaking stations, or a no-prep class game.',
        seoTitle: 'ESL Object Vocabulary Games With Random Object Cards',
        seoDescription:
          'Practice ESL object vocabulary with random object cards, copyable lists, speaking games, description drills, guessing rounds, and classroom ideas.',
        exampleTitle: 'ESL-friendly object examples',
        exampleLead:
          'These objects are common enough for learners to name, describe, spell, compare, and use in short speaking activities.',
        primaryPhrase: 'ESL object vocabulary games',
        audience: 'ESL teachers, tutors, conversation club hosts, homeschool parents, and learners practicing everyday object vocabulary',
        workflow: 'generate a small set, model one answer, then ask learners to name, describe, compare, spell, or act out each object',
        featureLead: 'The page turns object cards into language practice instead of showing an unstructured word list.',
        categoryLead:
          'Household, food, animal, and nature prompts are strong ESL categories because they are visual, concrete, and easy to describe.',
        useCasesTitle: 'ESL games and drills on this page',
        useCases: ['Name the object', 'Describe and guess', 'Adjective practice', 'Spelling relay', 'Category sorting', 'Act it out'],
        faqs: [
          { question: 'How do random objects help ESL learners?', answer: 'Concrete objects give learners something visible and familiar to name, describe, compare, and use in sentences.' },
          { question: 'What level is this best for?', answer: 'It works best for beginner to intermediate learners, but advanced groups can use the cards for timed speaking and storytelling.' },
          { question: 'Can I use this without preparing materials?', answer: 'Yes. Generate a small list on screen and run a speaking, spelling, sorting, or guessing round immediately.' },
          { question: 'Should I translate every object?', answer: 'Not always. For vocabulary practice, it is often better to model the English word, add one sentence, and repeat it in a short activity.' },
        ],
      },
      zh: {
        heroEyebrow: 'ESL 词汇游戏',
        title: 'ESL 物品词汇游戏',
        description:
          '用随机物品卡片组织 ESL 词汇游戏、口语练习、描述训练、猜词回合和课堂热身。',
        visualTitle: '抽一张 ESL 物品卡',
        visualDescription:
          '生成学习者能命名、描述、比较、拼写、分类或表演的熟悉物品。',
        bulkTitle: '生成一组 ESL 词汇清单',
        bulkDescription:
          '为词汇复习、两人练习、口语学习站或零准备课堂游戏准备可复制清单。',
        seoTitle: 'ESL 物品词汇游戏：随机物品卡片和口语练习',
        seoDescription:
          '用随机物品卡片练习 ESL 物品词汇，适合口语游戏、描述训练、猜词回合、拼写和课堂热身。',
        exampleTitle: '适合 ESL 的物品示例',
        exampleLead:
          '这些物品足够常见，学习者可以命名、描述、拼写、比较，并用于短口语活动。',
        primaryPhrase: 'ESL 物品词汇游戏',
        audience: 'ESL 老师、家教、会话俱乐部主持人、家庭教育家长，以及练习日常物品词汇的学习者',
        workflow: '先生成小清单，示范一个回答，再让学习者围绕每个物品命名、描述、比较、拼写或表演',
        featureLead: '这个页面会把物品卡片变成语言练习，而不是无结构词表。',
        categoryLead:
          '家居、食物、动物和自然物品适合 ESL，因为它们可视、具体、容易描述。',
        useCasesTitle: '这个页面支持的 ESL 游戏和练习',
        useCases: ['说出物品名', '描述并猜测', '形容词练习', '拼写接力', '分类游戏', '动作表演'],
        faqs: [
          { question: '随机物品为什么适合 ESL？', answer: '具体物品能让学习者围绕可见、熟悉的对象命名、描述、比较和造句。' },
          { question: '适合什么水平？', answer: '最适合初级到中级学习者，高阶学习者也可以用来做限时口语和故事练习。' },
          { question: '不备课也能用吗？', answer: '可以。直接在屏幕上生成小清单，就能开始口语、拼写、分类或猜词回合。' },
          { question: '每个物品都要翻译吗？', answer: '不一定。词汇练习里，通常先示范英文词，再加一个句子，并通过短活动重复会更有效。' },
        ],
      },
      ja: {
        heroEyebrow: 'ESL 語彙ゲーム',
        title: 'ESL オブジェクト語彙ゲーム',
        description:
          'ランダムオブジェクトカードを使って、ESL 語彙、会話、説明、推測、授業導入を練習できます。',
        visualTitle: 'ESL 用カードを一つ選ぶ',
        visualDescription:
          '名前を言う、説明する、比べる、つづりを言う、分類する、演じることができる身近な対象を生成します。',
        bulkTitle: 'ESL 語彙リストを作る',
        bulkDescription:
          '語彙復習、ペアワーク、会話ステーション、準備なしゲームに使える一覧を作れます。',
        seoTitle: 'ESL オブジェクト語彙ゲーム',
        seoDescription:
          'ランダムオブジェクトカードで ESL 語彙を練習。会話、説明、推測、スペリング、分類、授業導入に使えます。',
        exampleTitle: 'ESL に使いやすい例',
        exampleLead:
          '名前、説明、スペリング、比較、短い発話に使いやすい身近な対象を例として示しています。',
        primaryPhrase: 'ESL オブジェクト語彙ゲーム',
        audience: 'ESL の先生、チューター、会話クラブ主催者、家庭学習の保護者、日常語彙を練習する学習者',
        workflow: '小さなリストを生成し、一つ答えを見せてから、名前、説明、比較、スペリング、ジェスチャーで練習します',
        featureLead: '単なる単語リストではなく、カードを言語練習に変えるページです。',
        categoryLead:
          '日用品、食べ物、動物、自然物は、視覚的で具体的なため ESL に向いています。',
        useCasesTitle: 'このページでできる ESL ゲーム',
        useCases: ['名前を言う', '説明して当てる', '形容詞練習', 'スペリングリレー', '分類ゲーム', '演じる'],
        faqs: [
          { question: 'ランダムオブジェクトは ESL にどう役立ちますか？', answer: '具体物は、名前、説明、比較、文づくりの対象として分かりやすいためです。' },
          { question: 'どのレベルに向いていますか？', answer: '初級から中級に特に向いていますが、上級者は制限時間つき会話や物語づくりにも使えます。' },
          { question: '準備なしで使えますか？', answer: 'はい。画面で短いリストを生成し、会話、スペリング、分類、推測ゲームをすぐ始められます。' },
          { question: 'すべて翻訳するべきですか？', answer: '必ずしも必要ありません。英語の単語と一文を見せ、短い活動で繰り返す方が効果的なことがあります。' },
        ],
      },
    },
  },
  {
    slug: 'random-animal-to-draw',
    categories: ['animals', 'nature'],
    defaultVisualCount: 6,
    exampleObjectIds: ['animal-fox', 'animal-rabbit', 'animal-owl', 'animal-butterfly', 'animal-elephant', 'animal-turtle'],
    i18n: {
      en: {
        heroEyebrow: 'Animal drawing prompts',
        title: 'Random Animal To Draw',
        description:
          'Pick a drawable animal prompt with visual cards, examples, and copyable lists for sketch practice, art classes, and daily drawing challenges.',
        visualTitle: 'Pick an animal to draw',
        visualDescription:
          'Use this mode when you want one animal with a clear shape, silhouette, and enough visual detail to start sketching immediately.',
        bulkTitle: 'Build an animal drawing prompt list',
        bulkDescription:
          'Generate a longer animal list for warmups, art homework, classroom drawing rounds, or a weekly sketch challenge.',
        seoTitle: 'Random Animal To Draw Generator',
        seoDescription:
          'Generate random animals to draw with visual cards, copyable animal prompt lists, examples, and FAQ for artists, students, and art teachers.',
        exampleTitle: 'Animal drawing prompt examples',
        exampleLead:
          'These examples are recognizable animals with shapes and details that work well for sketching, classroom drawing, and daily prompt lists.',
        primaryPhrase: 'random animal to draw',
        audience: 'artists, students, teachers, and anyone who wants an animal sketch prompt without browsing a long list',
        workflow: 'choose one animal, decide whether to study its silhouette or texture, then copy a longer list if you are planning a full practice session',
        featureLead: 'The page is tuned for animals that are easy to picture, describe, and turn into a drawing exercise.',
        categoryLead:
          'Animal and nature prompts give stronger shapes, textures, and habitat cues than a generic object pool.',
        useCasesTitle: 'Best uses for animal drawing prompts',
        useCases: ['Daily sketch warmups', 'Art class prompts', 'Kids drawing games', 'Creature studies', 'Portfolio practice', 'Prompt jar ideas'],
        faqs: [
          { question: 'What animal should I draw today?', answer: 'Use the visual generator for one animal prompt, then refresh until you find a subject with a shape or texture you want to practice.' },
          { question: 'Is this different from the random animal generator?', answer: 'Yes. The random animal page is broader, while this page explains drawing use cases and keeps the content focused on sketch practice.' },
          { question: 'Can I make a list for an art class?', answer: 'Yes. Bulk mode creates a copyable list so every student can receive a different animal prompt.' },
          { question: 'Are these prompts beginner friendly?', answer: 'Most animals in the pool are recognizable enough for beginners, but they still leave room for more advanced studies of pose, texture, and habitat.' },
        ],
      },
      zh: {
        heroEyebrow: '动物绘画提示',
        title: '随机动物绘画生成器',
        description:
          '抽取适合拿来画的动物提示，支持视觉卡片、示例和批量清单，适合速写、课堂和每日练习。',
        visualTitle: '抽一个今天要画的动物',
        visualDescription:
          '当你想快速得到一个有轮廓、有质感、能马上开画的动物题目时，用这个模式最合适。',
        bulkTitle: '生成一组动物绘画题目',
        bulkDescription:
          '批量生成动物清单，适合课堂作业、速写热身、每日挑战或给不同学生分发题目。',
        seoTitle: '随机动物绘画生成器 - 抽一个动物来画',
        seoDescription:
          '生成适合绘画的随机动物提示，支持视觉卡片、批量清单、示例和 FAQ，适合画师、学生和美术课堂。',
        exampleTitle: '动物绘画提示示例',
        exampleLead:
          '这些动物有清晰轮廓和容易观察的特征，适合速写、课堂绘画和每日练习。',
        primaryPhrase: '随机动物绘画题目',
        audience: '画师、学生、老师，以及想快速找一个动物来画的人',
        workflow: '先抽一个动物，再决定练轮廓、质感还是场景；需要整组练习时再复制批量清单',
        featureLead: '这个页面更重视“可画性”，而不是随机列出动物名。',
        categoryLead:
          '动物和自然类对象更容易提供轮廓、纹理和场景线索，比泛物品池更适合绘画。',
        useCasesTitle: '动物绘画题目适合这些场景',
        useCases: ['每日速写', '美术课堂', '儿童绘画游戏', '生物造型练习', '作品集练习', '提示词罐子'],
        faqs: [
          { question: '今天画什么动物？', answer: '可以先抽一张动物卡片，再根据轮廓、毛发、羽毛或动作选择是否继续练习。' },
          { question: '它和随机动物生成器有什么区别？', answer: '随机动物页更宽泛，这个页面专门围绕绘画练习、课堂和速写提示来组织内容。' },
          { question: '可以给美术课批量出题吗？', answer: '可以。批量模式能生成可复制的动物清单，方便给每个学生分配不同题目。' },
          { question: '新手适合用吗？', answer: '适合。对象池会优先使用容易识别的动物，同时也能支持更高级的姿态、质感和场景练习。' },
        ],
      },
      ja: {
        heroEyebrow: '動物のお絵描きお題',
        title: '描く動物ランダムジェネレーター',
        description:
          'スケッチ、授業、毎日の練習に使える動物のお題を、カード表示と一覧で生成します。',
        visualTitle: '描く動物を一つ選ぶ',
        visualDescription:
          '輪郭や質感を想像しやすい動物を引いて、すぐにスケッチを始められます。',
        bulkTitle: '動物のお題リストを作る',
        bulkDescription:
          '授業、練習、毎日のチャレンジ向けに、複数の動物お題をまとめて生成できます。',
        seoTitle: '描く動物ランダムジェネレーター',
        seoDescription:
          '描く動物をランダム生成。視覚カード、コピーできる一覧、例、FAQ 付きでスケッチや授業に使えます。',
        exampleTitle: '動物のお絵描きお題例',
        exampleLead:
          '形や特徴が分かりやすい動物を例として見せることで、練習に使いやすくしています。',
        primaryPhrase: '描く動物のお題',
        audience: 'アーティスト、学生、先生、すぐに動物スケッチを始めたい人',
        workflow: '一つ引いて輪郭や質感を決め、長めの練習には一覧生成を使います',
        featureLead: '描きやすさと視覚的な分かりやすさを重視したページです。',
        categoryLead:
          '動物と自然は、形、質感、背景を考えやすく、描画練習に向いています。',
        useCasesTitle: '動物お題の使い道',
        useCases: ['毎日のスケッチ', '美術授業', '子どものお絵描き', '生き物の練習', '作品練習', 'お題メモ'],
        faqs: [
          { question: '今日は何の動物を描けばいいですか？', answer: 'カードを一つ引き、形や質感が気に入ったものを練習題材にできます。' },
          { question: 'ランダム動物ページと違いますか？', answer: 'はい。このページは描画練習に特化して、説明や FAQ もその用途に合わせています。' },
          { question: '授業用に一覧を作れますか？', answer: 'はい。一括生成で、生徒ごとに違う動物お題を用意できます。' },
          { question: '初心者でも使えますか？', answer: '使えます。見分けやすい動物を中心にしているため、練習の入口に向いています。' },
        ],
      },
    },
  },
  {
    slug: 'random-food-picker',
    categories: ['food'],
    defaultVisualCount: 5,
    exampleObjectIds: ['food-apple', 'food-pizza', 'food-sushi', 'food-croissant', 'food-ramen', 'food-taco'],
    i18n: {
      en: {
        heroEyebrow: 'Food picker',
        title: 'Random Food Picker',
        description:
          'Pick a random food item for games, drawing prompts, menu brainstorming, ESL lessons, or a lighthearted decision prompt.',
        visualTitle: 'Pick one random food',
        visualDescription:
          'Use the picker when you need a single food idea quickly, whether for a game, lesson, drawing prompt, or menu brainstorm.',
        bulkTitle: 'Build a random food list',
        bulkDescription:
          'Generate multiple food ideas for classroom cards, party rounds, menu naming, or creative prompt libraries.',
        seoTitle: 'Random Food Picker and Food Idea Generator',
        seoDescription:
          'Use a random food picker to choose one food item or generate copyable food lists for games, ESL lessons, drawing prompts, and menu ideas.',
        exampleTitle: 'Food picker examples',
        exampleLead:
          'A useful food picker should include familiar foods that people can picture, describe, draw, or turn into a quick activity.',
        primaryPhrase: 'random food picker',
        audience: 'teachers, game hosts, creators, and anyone who wants a quick food idea without treating it as nutrition advice',
        workflow: 'pick one food for a fast decision, or generate a longer list when the food theme needs to support a class, game, or brainstorm',
        featureLead: 'This page separates creative food picking from recipes, dieting, restaurant search, or medical nutrition advice.',
        categoryLead:
          'The food category keeps the result set tightly aligned with food items instead of mixing in unrelated objects.',
        useCasesTitle: 'Best uses for a random food picker',
        useCases: ['Food drawing prompts', 'Menu naming', 'ESL food vocabulary', 'Party games', 'Writing prompts', 'Classroom warmups'],
        disclaimer: 'This is a creative picker for prompts and activities, not nutrition, allergy, medical, or restaurant advice.',
        faqs: [
          { question: 'Can this picker choose dinner for me?', answer: 'It can give a playful food idea, but it is not a meal planner and does not account for diet, allergies, budget, or local availability.' },
          { question: 'Is this the same as the random food generator?', answer: 'It is narrower. The food generator is the category hub, while this page targets people who specifically want to pick one food item or build a food idea list.' },
          { question: 'Can teachers use it for food vocabulary?', answer: 'Yes. Bulk mode is useful for ESL vocabulary cards, speaking prompts, and food-themed classroom games.' },
          { question: 'Can I use the results for drawing?', answer: 'Yes. Foods are visual and familiar, so they work well as sketch prompts and quick creative warmups.' },
        ],
      },
      zh: {
        heroEyebrow: '食物选择器',
        title: '随机食物选择器',
        description:
          '随机抽取一个食物，适合游戏、绘画提示、菜单发想、英语课堂和轻松决策。',
        visualTitle: '随机选一个食物',
        visualDescription:
          '当你需要一个食物灵感来做游戏、课堂、绘画或菜单脑暴时，可以直接抽取。',
        bulkTitle: '生成一组随机食物清单',
        bulkDescription:
          '批量生成食物题目，用于课堂卡片、聚会轮次、菜单命名或创意提示库。',
        seoTitle: '随机食物选择器 - 抽取食物和食物灵感',
        seoDescription:
          '使用随机食物选择器抽取一个食物，或生成可复制食物清单，适合游戏、ESL、绘画提示和菜单发想。',
        exampleTitle: '随机食物示例',
        exampleLead:
          '好的食物选择器应该包含熟悉、容易想象、容易描述和容易转化成活动的食物。',
        primaryPhrase: '随机食物选择器',
        audience: '老师、游戏主持人、创作者，以及想快速获得食物灵感的人',
        workflow: '需要一个答案时抽一张卡片；需要课堂、游戏或脑暴时再生成更长清单',
        featureLead: '这个页面专门区分创意食物选择和菜谱、减肥、餐厅搜索或医疗营养建议。',
        categoryLead:
          '食物分类能让结果始终围绕食品和菜品，不会混入其他无关物品。',
        useCasesTitle: '随机食物选择器适合这些场景',
        useCases: ['食物绘画提示', '菜单命名', 'ESL 食物词汇', '聚会游戏', '写作提示', '课堂热身'],
        disclaimer: '这个工具用于创意提示和轻量活动，不提供营养、过敏、医疗或餐厅建议。',
        faqs: [
          { question: '它可以帮我决定晚饭吃什么吗？', answer: '可以给你一个轻松的食物灵感，但它不是正餐规划工具，也不会考虑饮食限制、过敏、预算或附近餐厅。' },
          { question: '它和随机食物生成器一样吗？', answer: '更窄一点。食物生成器是分类中心，这个页面专门承接“随机选一个食物”或“食物灵感清单”的需求。' },
          { question: '老师可以拿来教食物词汇吗？', answer: '可以。批量模式适合做 ESL 词汇卡、口语题和食物主题课堂游戏。' },
          { question: '可以当绘画题目吗？', answer: '可以。食物视觉特征明显，适合速写和创意热身。' },
        ],
      },
      ja: {
        heroEyebrow: '食べ物ピッカー',
        title: 'ランダム食べ物ピッカー',
        description:
          'ゲーム、描画、メニュー発想、ESL 授業に使える食べ物をランダムに選びます。',
        visualTitle: '食べ物を一つ選ぶ',
        visualDescription:
          'ゲーム、授業、描画、メニューの発想に使える食べ物をすばやく選べます。',
        bulkTitle: '食べ物リストを作る',
        bulkDescription:
          '授業カード、パーティー、メニュー案、創作プロンプト用に複数の食べ物を生成できます。',
        seoTitle: 'ランダム食べ物ピッカー',
        seoDescription:
          'ランダム食べ物ピッカーで一つ選ぶ、またはゲーム、ESL、描画、メニュー発想向けの一覧を作れます。',
        exampleTitle: '食べ物ピッカーの例',
        exampleLead:
          '見てすぐ分かり、説明や描画に使いやすい食べ物を中心にしています。',
        primaryPhrase: 'ランダム食べ物ピッカー',
        audience: '先生、ゲーム進行役、クリエイター、食べ物の発想が欲しい人',
        workflow: '一つ選びたいときはカード表示、授業やゲーム用には一覧生成を使います',
        featureLead: 'このページは創作用の食べ物選びであり、栄養、レシピ、医療助言ではありません。',
        categoryLead:
          '食べ物カテゴリに絞ることで、他の物体が混ざらない結果になります。',
        useCasesTitle: '食べ物ピッカーの使い道',
        useCases: ['描画お題', 'メニュー発想', 'ESL 食べ物語彙', 'パーティーゲーム', '作文お題', '授業導入'],
        disclaimer: 'このツールは創作と活動向けで、栄養、アレルギー、医療、レストラン助言ではありません。',
        faqs: [
          { question: '夕食を決めるために使えますか？', answer: '軽い食べ物アイデアには使えますが、食事計画、アレルギー、予算、近くの店は考慮しません。' },
          { question: 'ランダム食べ物ジェネレーターと同じですか？', answer: 'こちらは一つ選ぶ意図や食べ物リスト作成により寄せたページです。' },
          { question: '授業で使えますか？', answer: 'はい。ESL の語彙カード、会話練習、食べ物テーマのゲームに使えます。' },
          { question: '描画にも使えますか？', answer: '使えます。食べ物は形や色を想像しやすく、スケッチ題材に向いています。' },
        ],
      },
    },
  },
  {
    slug: 'random-object-picker',
    categories: ['animals', 'household', 'food', 'nature', 'funny'],
    defaultVisualCount: 5,
    exampleObjectIds: ['animal-elephant', 'house-kettle', 'food-apple', 'nature-rainbow', 'funny-rubber-duck', 'house-key'],
    i18n: {
      en: {
        heroEyebrow: 'Object picker',
        title: 'Random Object Picker',
        description:
          'Pick one random object fast, or generate a clean object list for games, classrooms, writing prompts, and brainstorming.',
        visualTitle: 'Pick one random object',
        visualDescription:
          'Use this picker when the decision should be quick and neutral: one object, one prompt, one next step.',
        bulkTitle: 'Build a random object picker list',
        bulkDescription:
          'Generate multiple objects for games, worksheets, idea sessions, writing prompts, or facilitation notes.',
        seoTitle: 'Random Object Picker With Visual Cards',
        seoDescription:
          'Pick one random object or generate a copyable object list with visual cards for games, classrooms, writing, drawing, and brainstorming.',
        exampleTitle: 'Object picker examples',
        exampleLead:
          'A broad picker works best when the object pool mixes familiar, visual, and playful items without becoming a thin noun list.',
        primaryPhrase: 'random object picker',
        audience: 'people who need a quick neutral prompt for games, classes, writing, drawing, or group facilitation',
        workflow: 'pick one object when you need a fast prompt, or switch to bulk mode when the activity needs a balanced set of objects',
        featureLead: 'This page is the decision-oriented version of the main generator, with clearer language around picking one object.',
        categoryLead:
          'A mixed object pool keeps the picker flexible while still linking to narrower animal, food, household, drawing, and classroom pages.',
        useCasesTitle: 'Best uses for a random object picker',
        useCases: ['One-click decisions', 'Drawing prompts', 'Classroom warmups', 'Writing sparks', 'Group games', 'Workshop facilitation'],
        faqs: [
          { question: 'What is a random object picker?', answer: 'It is a simple tool that chooses one object from a curated pool so you can use it as a prompt, game item, or quick creative constraint.' },
          { question: 'How is this different from the homepage?', answer: 'The homepage is a broad landing page. This page targets users who specifically describe the task as picking one random object.' },
          { question: 'Can I pick more than one object?', answer: 'Yes. Bulk mode lets you generate a longer list while keeping the picker useful for single-card decisions.' },
          { question: 'Can I narrow the result type?', answer: 'Yes. Use the related animal, food, household, drawing, classroom, or game pages when the activity needs a tighter theme.' },
        ],
      },
      zh: {
        heroEyebrow: '物品选择器',
        title: '随机物品选择器',
        description:
          '快速抽取一个随机物品，或生成清晰的物品清单，用于游戏、课堂、写作、绘画和脑暴。',
        visualTitle: '随机选一个物品',
        visualDescription:
          '当你只需要一个中性的提示物、一个游戏对象或一个下一步灵感时，用这个选择器。',
        bulkTitle: '生成一组随机物品',
        bulkDescription:
          '批量生成物品清单，适合游戏题库、课堂练习、写作提示和工作坊记录。',
        seoTitle: '随机物品选择器 - 物品卡片和可复制清单',
        seoDescription:
          '使用随机物品选择器抽取一个物品，或生成可复制清单，适合游戏、课堂、写作、绘画和脑暴。',
        exampleTitle: '随机物品选择器示例',
        exampleLead:
          '宽泛选择器需要混合熟悉、直观和有趣的对象，而不是只给一堆薄薄的名词。',
        primaryPhrase: '随机物品选择器',
        audience: '需要快速获得中性提示物的人，比如老师、主持人、写作者、画师和团队引导师',
        workflow: '需要一个灵感时抽单张卡片；需要一组对象时切换到批量模式',
        featureLead: '这个页面是首页的“选择器版本”，更明确承接随机选一个物品的搜索需求。',
        categoryLead:
          '混合对象池保证选择器足够灵活，同时继续通过内链连接到动物、食物、家居、绘画和课堂页。',
        useCasesTitle: '随机物品选择器适合这些场景',
        useCases: ['一键决策', '绘画提示', '课堂热身', '写作灵感', '小组游戏', '工作坊引导'],
        faqs: [
          { question: '随机物品选择器是什么？', answer: '它会从整理过的对象池里选择一个物品，让你把它当作提示、游戏题目或创意限制使用。' },
          { question: '它和首页有什么不同？', answer: '首页是宽泛落地页，这个页面专门承接“随机选一个物品”这种更明确的任务描述。' },
          { question: '可以一次选多个物品吗？', answer: '可以。批量模式可以生成更长清单，同时保留单张卡片的快速选择体验。' },
          { question: '可以限制结果类型吗？', answer: '可以。如果你需要更窄主题，可以进入动物、食物、家居、绘画、课堂或游戏专题页。' },
        ],
      },
      ja: {
        heroEyebrow: 'オブジェクトピッカー',
        title: 'ランダムオブジェクトピッカー',
        description:
          '一つのランダムな物をすばやく選ぶ、または授業、ゲーム、創作向けの一覧を作れます。',
        visualTitle: 'ランダムな物を一つ選ぶ',
        visualDescription:
          '一つだけ中立的なお題が欲しいとき、すぐに選べるページです。',
        bulkTitle: 'オブジェクト一覧を作る',
        bulkDescription:
          'ゲーム、授業、文章、ワークショップ向けに複数の物を生成できます。',
        seoTitle: 'ランダムオブジェクトピッカー',
        seoDescription:
          'ランダムな物を一つ選ぶ、またはゲーム、授業、文章、描画向けのコピー可能な一覧を作れます。',
        exampleTitle: 'オブジェクトピッカーの例',
        exampleLead:
          '幅広いピッカーでは、身近で視覚的な対象を混ぜることで使いやすさを保ちます。',
        primaryPhrase: 'ランダムオブジェクトピッカー',
        audience: 'ゲーム、授業、文章、描画、進行用に中立的なお題が欲しい人',
        workflow: '一つ欲しいときはカード表示、複数必要なときは一括生成を使います',
        featureLead: 'トップページよりも、一つ選ぶ行為を明確にしたページです。',
        categoryLead:
          '混合カテゴリにより柔軟に使え、必要なら動物、食べ物、描画、授業ページへ進めます。',
        useCasesTitle: 'オブジェクトピッカーの使い道',
        useCases: ['一つ選ぶ', '描画お題', '授業導入', '文章の発想', 'グループゲーム', '進行補助'],
        faqs: [
          { question: 'ランダムオブジェクトピッカーとは何ですか？', answer: '整理された対象プールから一つの物を選び、お題やゲームの材料に使うツールです。' },
          { question: 'トップページと違いますか？', answer: 'トップページは広い入口で、このページは一つ選ぶ検索意図に寄せています。' },
          { question: '複数選べますか？', answer: 'はい。一括生成で長めの一覧も作れます。' },
          { question: 'テーマを絞れますか？', answer: 'はい。動物、食べ物、日用品、描画、授業、ゲーム向けページに進めます。' },
        ],
      },
    },
  },
  {
    slug: 'random-esl-vocabulary-generator',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 8,
    exampleObjectIds: ['animal-rabbit', 'food-apple', 'house-chair', 'nature-cloud', 'house-key', 'food-banana'],
    i18n: {
      en: {
        heroEyebrow: 'ESL vocabulary',
        title: 'Random ESL Vocabulary Generator',
        description:
          'Generate concrete object vocabulary for ESL speaking warmups, guessing games, worksheets, pronunciation practice, and classroom review.',
        visualTitle: 'Pick ESL vocabulary cards',
        visualDescription:
          'Use visual cards when learners need concrete nouns they can see, describe, pronounce, and reuse in short speaking tasks.',
        bulkTitle: 'Build an ESL vocabulary list',
        bulkDescription:
          'Create copyable vocabulary sets for worksheets, pair work, flashcards, classroom games, and quick review rounds.',
        seoTitle: 'Random ESL Vocabulary Generator With Object Cards',
        seoDescription:
          'Generate ESL vocabulary with random object cards and copyable lists for speaking games, worksheets, flashcards, and classroom warmups.',
        exampleTitle: 'ESL vocabulary examples',
        exampleLead:
          'Concrete nouns are easier for learners to describe, spell, pronounce, and reuse than abstract prompt words.',
        primaryPhrase: 'random ESL vocabulary generator',
        audience: 'ESL teachers, tutors, homeschool parents, and language learners who need concrete vocabulary prompts',
        workflow: 'pick visual cards for quick speaking practice, then copy a longer list for worksheets, flashcards, or group games',
        featureLead: 'This page focuses on teachable objects and classroom reuse rather than random novelty.',
        categoryLead:
          'Animals, food, household items, and nature prompts create familiar vocabulary sets that work across beginner and intermediate lessons.',
        useCasesTitle: 'Best uses for ESL vocabulary prompts',
        useCases: ['Vocabulary review', 'Speaking warmups', 'Flashcards', 'Worksheet creation', 'Pronunciation drills', 'Guessing games'],
        faqs: [
          { question: 'How can I use random objects for ESL vocabulary?', answer: 'Ask learners to name, spell, describe, compare, or use each object in a sentence. The visual card gives context before speaking starts.' },
          { question: 'Is this better for beginners or advanced learners?', answer: 'It works best for beginner to intermediate learners, but advanced students can use the same objects for longer descriptions and storytelling.' },
          { question: 'Can I make printable vocabulary lists?', answer: 'Yes. Bulk mode creates a copyable list that can be moved into a worksheet, slide deck, or flashcard tool.' },
          { question: 'Why make this separate from the ESL objects page?', answer: 'The ESL objects page covers activities broadly. This page targets vocabulary generation and classroom material preparation more directly.' },
        ],
      },
      zh: {
        heroEyebrow: 'ESL 词汇',
        title: '随机 ESL 词汇生成器',
        description:
          '生成具体物品词汇，适合 ESL 口语热身、猜词游戏、练习纸、发音练习和课堂复习。',
        visualTitle: '抽取 ESL 词汇卡片',
        visualDescription:
          '当学生需要看得见、说得出、能描述和能造句的具体名词时，用视觉卡片更高效。',
        bulkTitle: '生成 ESL 词汇清单',
        bulkDescription:
          '生成可复制词汇组，用于练习纸、双人活动、闪卡、课堂游戏和快速复习。',
        seoTitle: '随机 ESL 词汇生成器 - 物品词汇卡片',
        seoDescription:
          '生成 ESL 物品词汇卡片和可复制清单，适合口语游戏、练习纸、闪卡和课堂热身。',
        exampleTitle: 'ESL 词汇示例',
        exampleLead:
          '具体名词比抽象提示更容易被学习者描述、拼写、发音和造句。',
        primaryPhrase: '随机 ESL 词汇生成器',
        audience: 'ESL 老师、家教、家庭学习者，以及需要具体词汇提示的语言学习者',
        workflow: '先用视觉卡片做快速口语练习，再复制长清单用于练习纸、闪卡或小组游戏',
        featureLead: '这个页面强调可教学、可复用的具体名词，而不是新奇随机词。',
        categoryLead:
          '动物、食物、家居和自然对象更适合初中级课程中的词汇和描述任务。',
        useCasesTitle: 'ESL 词汇提示适合这些场景',
        useCases: ['词汇复习', '口语热身', '闪卡制作', '练习纸制作', '发音练习', '猜词游戏'],
        faqs: [
          { question: '随机物品怎么用于 ESL 词汇课？', answer: '可以让学生命名、拼写、描述、比较，或者用这个物品造句。视觉卡片能降低开口前的理解成本。' },
          { question: '更适合初学者还是进阶学习者？', answer: '最适合初中级学习者，但高阶学生也可以用同一组对象做更长的描述和故事表达。' },
          { question: '可以做成可打印词汇表吗？', answer: '可以。批量模式会生成可复制清单，可以放进练习纸、课件或闪卡工具。' },
          { question: '为什么要和 ESL objects 页面分开？', answer: 'ESL objects 页面覆盖活动更宽泛，这个页面更直接服务词汇生成和课堂材料准备。' },
        ],
      },
      ja: {
        heroEyebrow: 'ESL 語彙',
        title: 'ランダム ESL 語彙ジェネレーター',
        description:
          'ESL のスピーキング、語彙復習、ワークシート、発音練習に使える具体名詞を生成します。',
        visualTitle: 'ESL 語彙カードを引く',
        visualDescription:
          '見て、言って、説明し、文にしやすい具体名詞をカードで表示します。',
        bulkTitle: 'ESL 語彙リストを作る',
        bulkDescription:
          'ワークシート、ペア活動、フラッシュカード、授業ゲーム用の一覧を作れます。',
        seoTitle: 'ランダム ESL 語彙ジェネレーター',
        seoDescription:
          'ESL 語彙をランダム生成。物体カードとコピーできる一覧で、授業、ワークシート、会話練習に使えます。',
        exampleTitle: 'ESL 語彙の例',
        exampleLead:
          '具体名詞は、抽象的なお題よりも説明、発音、文作りに使いやすいです。',
        primaryPhrase: 'ランダム ESL 語彙ジェネレーター',
        audience: 'ESL 教師、家庭学習、チューター、具体語彙のお題が欲しい学習者',
        workflow: 'カードで会話練習をし、必要なら一覧をコピーして教材にします',
        featureLead: '新奇さよりも、授業で再利用できる具体名詞を重視しています。',
        categoryLead:
          '動物、食べ物、日用品、自然は、初中級の語彙練習に使いやすいカテゴリです。',
        useCasesTitle: 'ESL 語彙お題の使い道',
        useCases: ['語彙復習', 'スピーキング導入', 'フラッシュカード', '教材作成', '発音練習', '当てっこゲーム'],
        faqs: [
          { question: 'ランダムな物を ESL 語彙にどう使えますか？', answer: '名前、つづり、説明、比較、例文作りなどに使えます。画像があると話し始めやすくなります。' },
          { question: '初心者向けですか？', answer: '初中級に特に向いていますが、上級者は長い説明や物語づくりにも使えます。' },
          { question: '語彙リストを作れますか？', answer: 'はい。一括生成でワークシートやスライドに貼りやすい一覧を作れます。' },
          { question: 'ESL objects ページと違いますか？', answer: 'こちらは語彙生成と教材準備をより直接的に扱うページです。' },
        ],
      },
    },
  },
  {
    slug: 'random-charades-generator',
    categories: ['animals', 'household', 'food', 'funny'],
    defaultVisualCount: 8,
    exampleObjectIds: ['animal-penguin', 'house-broom', 'food-pizza', 'funny-party-hat', 'animal-turtle', 'funny-rubber-duck'],
    i18n: {
      en: {
        heroEyebrow: 'Charades generator',
        title: 'Random Charades Generator',
        description:
          'Generate charades-ready object prompts for parties, classrooms, team icebreakers, family games, and ESL speaking rounds.',
        visualTitle: 'Pick a charades prompt',
        visualDescription:
          'Use visual cards to pick prompts that are easier to act out, guess, and explain before the round starts.',
        bulkTitle: 'Build a charades prompt list',
        bulkDescription:
          'Generate a longer list for teams, multiple rounds, classroom activities, or family game night.',
        seoTitle: 'Random Charades Generator With Object Prompts',
        seoDescription:
          'Generate random charades prompts with object cards and copyable lists for parties, classrooms, teams, family games, and ESL rounds.',
        exampleTitle: 'Charades prompt examples',
        exampleLead:
          'Good charades prompts should be recognizable, physical, and easy enough for a group to guess without stopping the game.',
        primaryPhrase: 'random charades generator',
        audience: 'party hosts, teachers, team facilitators, families, and ESL tutors who need quick act-it-out prompts',
        workflow: 'pick one card for a fast round, or build a longer list when you need team play, classroom rotation, or several rounds',
        featureLead: 'This page focuses on objects people can act out, not abstract words that slow down the game.',
        categoryLead:
          'Animals, household items, foods, and funny objects tend to create clearer gestures and faster guesses.',
        useCasesTitle: 'Best uses for charades prompts',
        useCases: ['Party charades', 'Family games', 'Classroom warmups', 'Team icebreakers', 'ESL speaking games', 'Kids activities'],
        faqs: [
          { question: 'What makes a good charades prompt?', answer: 'A good prompt is concrete, recognizable, and physical enough that players can act it out without needing a long explanation.' },
          { question: 'Can I generate prompts for multiple teams?', answer: 'Yes. Bulk mode can create a longer list for teams, rounds, or classroom groups.' },
          { question: 'How is this different from random objects for charades?', answer: 'The existing page explains the use case broadly. This page targets people searching for a charades generator and emphasizes gameplay flow.' },
          { question: 'Can ESL teachers use this?', answer: 'Yes. Charades prompts are useful for movement-based vocabulary review, speaking warmups, and low-pressure classroom interaction.' },
        ],
      },
      zh: {
        heroEyebrow: '你演我猜生成器',
        title: '随机你演我猜生成器',
        description:
          '生成适合你演我猜的物品题目，适用于聚会、课堂、团队破冰、家庭游戏和 ESL 口语活动。',
        visualTitle: '抽取一个你演我猜题目',
        visualDescription:
          '用视觉卡片快速选择更容易表演、更容易猜、更容易解释的题目。',
        bulkTitle: '生成一组你演我猜题库',
        bulkDescription:
          '批量生成题目，适合分组、多轮游戏、课堂活动和家庭游戏夜。',
        seoTitle: '随机你演我猜生成器 - 物品题目和批量题库',
        seoDescription:
          '生成适合你演我猜的随机物品题目，支持卡片和可复制清单，适合聚会、课堂、团队、家庭和 ESL。',
        exampleTitle: '你演我猜题目示例',
        exampleLead:
          '好的你演我猜题目应该具体、容易表演、容易被猜到，不会让游戏停下来解释半天。',
        primaryPhrase: '随机你演我猜生成器',
        audience: '聚会主持人、老师、团队引导师、家庭玩家和 ESL 老师',
        workflow: '快速一轮时抽一张卡片；需要分组、多轮或课堂轮转时生成长清单',
        featureLead: '这个页面专门选择更容易表演的对象，而不是拖慢游戏节奏的抽象词。',
        categoryLead:
          '动物、家居、食物和搞怪对象通常更容易做动作，也更容易让别人猜到。',
        useCasesTitle: '你演我猜题目适合这些场景',
        useCases: ['聚会游戏', '家庭游戏', '课堂热身', '团队破冰', 'ESL 口语游戏', '儿童活动'],
        faqs: [
          { question: '什么样的题目适合你演我猜？', answer: '好的题目应该具体、辨识度高、能转化成动作，不需要长时间解释规则或背景。' },
          { question: '可以给多个队伍生成题目吗？', answer: '可以。批量模式能生成更长清单，适合分组、多轮或课堂小组活动。' },
          { question: '它和 random objects for charades 页面有什么区别？', answer: '原页面更宽泛解释场景，这个页面专门承接“你演我猜生成器”这种搜索意图，并强调游戏流程。' },
          { question: 'ESL 老师可以用吗？', answer: '可以。你演我猜很适合词汇复习、口语热身和低压力课堂互动。' },
        ],
      },
      ja: {
        heroEyebrow: 'ジェスチャーゲーム',
        title: 'ランダムジェスチャーお題ジェネレーター',
        description:
          'パーティー、授業、チームのアイスブレイク、家族ゲーム、ESL に使えるお題を生成します。',
        visualTitle: 'ジェスチャーお題を一つ選ぶ',
        visualDescription:
          '演じやすく、当てやすいお題をカードで選べます。',
        bulkTitle: 'ジェスチャーお題リストを作る',
        bulkDescription:
          'チーム戦、複数ラウンド、授業、家族ゲーム向けに長めの一覧を生成できます。',
        seoTitle: 'ランダムジェスチャーお題ジェネレーター',
        seoDescription:
          'ジェスチャーゲームのお題をランダム生成。カード表示とコピーできる一覧で、パーティー、授業、ESL に使えます。',
        exampleTitle: 'ジェスチャーお題の例',
        exampleLead:
          '良いお題は、分かりやすく、体で表現しやすく、説明なしでも当てやすいものです。',
        primaryPhrase: 'ランダムジェスチャーお題',
        audience: 'パーティー主催者、先生、進行役、家族、ESL チューター',
        workflow: '一つのラウンドにはカード表示、複数ラウンドやチーム戦には一覧生成を使います',
        featureLead: '抽象語ではなく、演じやすい具体物を重視したページです。',
        categoryLead:
          '動物、日用品、食べ物、おもしろアイテムは動作にしやすく、当てやすいカテゴリです。',
        useCasesTitle: 'ジェスチャーお題の使い道',
        useCases: ['パーティー', '家族ゲーム', '授業導入', 'チーム交流', 'ESL 会話ゲーム', '子ども活動'],
        faqs: [
          { question: '良いジェスチャーお題とは何ですか？', answer: '具体的で、見て分かりやすく、体で表現しやすいお題です。' },
          { question: '複数チーム用に作れますか？', answer: 'はい。一括生成でチームやラウンド分の一覧を作れます。' },
          { question: '既存の charades ページと違いますか？', answer: 'こちらはジェネレーターとして検索する人向けに、ゲームの流れをより強調しています。' },
          { question: 'ESL 授業でも使えますか？', answer: '使えます。語彙復習、会話導入、低負荷のクラス活動に向いています。' },
        ],
      },
    },
  },
]

function buildGrowthLanding(locale: Locale, copy: GrowthLocaleCopy): IntentLandingContent {
  const featureTitle = {
    en: `Why this ${copy.primaryPhrase} page is useful`,
    zh: `为什么这个${copy.primaryPhrase}页面值得单独做`,
    ja: `この${copy.primaryPhrase}ページが役立つ理由`,
  }[locale]
  const intentTitle = {
    en: `Search intent covered by this ${copy.primaryPhrase} page`,
    zh: `这个页面承接的搜索意图`,
    ja: `このページが受け止める検索意図`,
  }[locale]
  const qualityTitle = {
    en: `How this page avoids thin SEO content`,
    zh: `这个页面如何避免薄 SEO 内容`,
    ja: `薄い SEO ページにしないために`,
  }[locale]
  const categoryTitle = {
    en: 'Best categories for this generator',
    zh: '更适合这个生成器的分类',
    ja: 'このジェネレーターに向いたカテゴリ',
  }[locale]

  return {
    introTitle: copy.title,
    introBody:
      locale === 'en'
        ? `This page is built for ${copy.audience}. Instead of sending every visitor back to the broad homepage, it narrows the generator, examples, FAQ, and internal links around the ${copy.primaryPhrase} intent. The practical workflow is simple: ${copy.workflow}.`
        : locale === 'zh'
          ? `这个页面面向${copy.audience}。它不会把所有用户都推回宽泛首页，而是围绕“${copy.primaryPhrase}”这个明确意图来组织生成器、示例、FAQ 和内链。实际流程很简单：${copy.workflow}。`
          : `このページは${copy.audience}のために作っています。広いトップページへ戻すだけではなく、「${copy.primaryPhrase}」という意図に合わせて、生成器、例、FAQ、内部リンクを整理しています。使い方はシンプルで、${copy.workflow}。`,
    featureTitle,
    featureLead: copy.featureLead,
    features: [
      {
        title: locale === 'en' ? 'Clearer intent match' : locale === 'zh' ? '更贴近搜索意图' : '検索意図に合う',
        body:
          locale === 'en'
            ? `People searching for ${copy.primaryPhrase} need a page that answers that task directly, not a generic list with a swapped heading.`
            : locale === 'zh'
              ? `搜索“${copy.primaryPhrase}”的人，需要的是直接回答这个任务的页面，而不是只换标题的通用列表。`
              : `「${copy.primaryPhrase}」を探す人には、見出しだけを変えた汎用ページではなく、その用途に合うページが必要です。`,
      },
      {
        title: locale === 'en' ? 'Practical examples' : locale === 'zh' ? '示例更能落地' : '具体例がある',
        body:
          locale === 'en'
            ? 'The example section shows concrete results so users and search engines can understand what the tool actually produces.'
            : locale === 'zh'
              ? '示例区会展示具体结果，让用户和搜索引擎都能理解这个工具实际会生成什么。'
              : 'サンプルを見せることで、ユーザーにも検索エンジンにも実際の出力が伝わります。',
      },
      {
        title: locale === 'en' ? 'Better next clicks' : locale === 'zh' ? '更好的下一步内链' : '次の導線が明確',
        body:
          locale === 'en'
            ? 'Related pages point visitors toward narrower generators when the task becomes more specific.'
            : locale === 'zh'
              ? '相关页面会把用户导向更窄的生成器，避免所有需求都挤在一个页面里。'
              : '関連ページに進めることで、より具体的な用途にも自然につながります。',
      },
    ],
    categoryTitle,
    categoryLead: copy.categoryLead,
    useCasesTitle: copy.useCasesTitle,
    useCases: copy.useCases,
    faqTitle: locale === 'en' ? `${copy.title} FAQ` : locale === 'zh' ? `${copy.title}常见问题` : `${copy.title} FAQ`,
    faqs: copy.faqs,
    intentTitle,
    intentBody:
      locale === 'en'
        ? `The target query is ${copy.primaryPhrase}, but related searches often include list, picker, prompt, classroom, game, drawing, and copyable-output language. This page supports those adjacent needs without taking over the broader homepage.`
        : locale === 'zh'
          ? `这个页面的核心词是“${copy.primaryPhrase}”，但相近搜索常常会带上清单、选择器、提示词、课堂、游戏、绘画和可复制结果等表达。这个页面会承接这些相邻需求，同时不挤占首页主词定位。`
          : `中心となる検索語は「${copy.primaryPhrase}」ですが、一覧、ピッカー、お題、授業、ゲーム、描画、コピー可能な出力などの近い意図も含まれます。このページはトップページの役割を奪わず、その周辺意図を受け止めます。`,
    intentBullets: [
      locale === 'en'
        ? 'Use visual mode when one prompt is enough.'
        : locale === 'zh'
          ? '只需要一个提示时，用视觉卡片模式。'
          : '一つだけ欲しいときはカード表示を使います。',
      locale === 'en'
        ? 'Use bulk mode when the activity needs a reusable list.'
        : locale === 'zh'
          ? '需要可复用清单时，用批量模式。'
          : '再利用できる一覧が必要なときは一括生成を使います。',
      locale === 'en'
        ? 'Use related links when a narrower category or use case would answer the visitor better.'
        : locale === 'zh'
          ? '如果需求更窄，用相关内链进入更匹配的分类或专题页。'
          : 'より狭い用途には、関連リンクから専用ページへ進みます。',
    ],
    qualityTitle,
    qualityBody:
      locale === 'en'
        ? `This page has its own generator settings, examples, FAQ, use cases, and internal links. ${copy.disclaimer ?? 'The copy is written for real creative, educational, and facilitation tasks instead of repeating exact-match keywords.'}`
        : locale === 'zh'
          ? `这个页面有独立的生成器设置、示例、FAQ、使用场景和内链。${copy.disclaimer ?? '正文围绕真实创意、教育和活动组织任务来写，而不是机械重复关键词。'}`
          : `このページには独自の生成設定、例、FAQ、利用場面、内部リンクがあります。${copy.disclaimer ?? '本文はキーワードの繰り返しではなく、実際の創作、教育、進行の用途を前提にしています。'}`,
    qualityBullets: [
      locale === 'en'
        ? 'The page explains who should use it and when a narrower page is better.'
        : locale === 'zh'
          ? '页面会说明谁适合使用，以及什么时候应该进入更窄的页面。'
          : '誰が使うべきか、いつ専用ページに進むべきかを説明します。',
      locale === 'en'
        ? 'Examples and FAQ make the content useful even before the visitor clicks generate.'
        : locale === 'zh'
          ? '示例和 FAQ 让页面在点击生成之前也有实际信息价值。'
          : '例と FAQ により、生成前からページの価値が伝わります。',
      locale === 'en'
        ? 'Canonical, hreflang, sitemap, FAQ schema, and breadcrumb schema remain handled by the shared site system.'
        : locale === 'zh'
          ? 'Canonical、hreflang、sitemap、FAQ schema 和面包屑 schema 继续由站点系统统一处理。'
          : 'canonical、hreflang、sitemap、FAQ schema、パンくず schema は共通システムで扱います。',
    ],
  }
}

const growthIntentPages: IntentPageConfig[] = growthIntentSeeds.map((seed) => ({
  slug: seed.slug,
  categories: seed.categories,
  defaultVisualCount: seed.defaultVisualCount,
  exampleObjectIds: seed.exampleObjectIds,
  i18n: {
    en: {
      ...seed.i18n.en,
      examples: { title: seed.i18n.en.exampleTitle, lead: seed.i18n.en.exampleLead },
      landing: buildGrowthLanding('en', seed.i18n.en),
    },
    zh: {
      ...seed.i18n.zh,
      examples: { title: seed.i18n.zh.exampleTitle, lead: seed.i18n.zh.exampleLead },
      landing: buildGrowthLanding('zh', seed.i18n.zh),
    },
    ja: {
      ...seed.i18n.ja,
      examples: { title: seed.i18n.ja.exampleTitle, lead: seed.i18n.ja.exampleLead },
      landing: buildGrowthLanding('ja', seed.i18n.ja),
    },
  },
}))

export const intentPages: IntentPageConfig[] = [...baseIntentPages, ...growthIntentPages]

export function getIntentPageBySlug(slug: string) {
  return intentPages.find((page) => page.slug === slug) ?? null
}

export function getLocalizedIntentLinks(locale: Locale): LocalizedIntentLink[] {
  return intentPages.map((page) => {
    const copy = page.i18n[locale] ?? page.i18n.en

    return {
      href: `/${page.slug}`,
      title: copy.title,
      description: copy.description,
      categories: page.categories,
    }
  })
}
