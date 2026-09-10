import type { Locale } from '@/lib/i18n-config'

type TrustPage = {
  title: string
  description: string
  eyebrow: string
  body: string[]
}

export const trustPageCopy: Record<
  Locale,
  {
    about: TrustPage
    privacy: TrustPage
    terms: TrustPage
    contact: TrustPage
    editorialPolicy: TrustPage
    ui: {
      home: string
      about: string
      privacy: string
      terms: string
      contact: string
      editorialPolicy: string
      legal: string
      quickLinks: string
      connect: string
      relatedGenerators: string
      howToUse: string
      breadcrumbHome: string
      featureRandomTitle: string
      featureRandomBody: string
      featureRandomValue: string
      featureCopyTitle: string
      featureCopyBody: string
      visualMode: string
      bulkMode: string
      count: string
      allowRepeats: string
      limitedTo: string
      generateCta: string
      generateAgainCta: string
      jumpToCards: string
      jumpToList: string
      refreshList: string
      copyObject: string
      copyList: string
      copied: string
      object: string
      descriptionLabel: string
      bestFor: string
      chipDrawing: string
      chipClassroom: string
      chipBrainstorm: string
      chipGames: string
      whyThisExists: string
      whatLabel: string
      whyLabel: string
      howToLabel: string
      featuredCategoriesLabel: string
      categoryLabel: string
      openGenerator: string
      useCasesLabel: string
      faqLabel: string
      internalLinksLabel: string
      drawPromptsLink: string
      kidsObjectsLink: string
      sourceCode: string
      reportIssue: string
      emailUs: string
    }
  }
> = {
  en: {
    about: {
      title: 'About Random Object Generator',
      description:
        'Learn who made Random Object Generator, why it exists, and how it helps teachers, writers, artists, and facilitators find fast prompt ideas.',
      eyebrow: 'About this project',
      body: [
        'Random Object Generator is an independent utility site built to make prompt generation feel more useful, more visual, and more reusable than the average random noun page. The project is maintained as a lightweight public web tool rather than a closed product with a sign-in wall, which is why the core generator is available immediately on the homepage and on category-specific pages.',
        'The site is designed for people who need fast creative input without friction: teachers planning classroom warmups, artists looking for drawing prompts, facilitators running icebreakers, language tutors preparing speaking rounds, and writers who need a quick object to start from. Instead of burying the result behind forms or content gates, the product tries to show the utility immediately and let people move from idea to activity in seconds.',
        'The project is maintained by an independent maker-led team under the Random Object Generator name. Updates are guided by Search Console queries, analytics engagement, bug reports, and hands-on review of whether a page actually helps someone use a random object in a real activity.',
        'From an operational perspective, the site currently runs on Cloudflare infrastructure and uses Google Analytics 4 to understand which pages are being used, which generators are clicked, and where the experience needs work. The goal is not to collect unnecessary personal data, but to keep the product stable, measure usefulness, and improve the information architecture over time.',
        'If you need to verify how the site is built or want to suggest improvements, the source repository and issue tracker are the primary public contact points for the project. That makes the site easier to audit, easier to improve, and clearer about who is responsible for its current direction.'
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Read the privacy policy for Random Object Generator, including how basic analytics, logs, and voluntary interactions may be handled.',
      eyebrow: 'Privacy',
      body: [
        'Random Object Generator is designed as a lightweight public utility. You do not need an account to use the core generator, and the site does not intentionally ask for unnecessary personal information in order to show random object results.',
        'Like most websites, the service may collect basic technical data such as server logs, page requests, device and browser information, referrer data, and anonymous usage events. At the time of writing, the product uses Cloudflare for delivery and Google Analytics 4 for basic measurement, which helps the project understand page performance, click behavior, and which pages are actually useful to visitors.',
        'The purpose of this data handling is operational: keep the service stable, improve page quality, measure feature adoption, and identify which search-oriented pages satisfy user intent. The site is not designed as a personal profile system, and the core generator can be used without creating an account or providing a name.',
        'The site uses Google AdSense to request and display advertising. Third-party vendors, including Google, may use cookies or similar technologies to serve ads based on a user’s prior visits to this website or to other websites. Google’s use of advertising cookies enables Google and its partners to serve ads to visitors based on visits to this site and other sites on the Internet.',
        'The site shows a cookie choice banner before non-essential Google advertising or analytics storage is granted. If you decline, the core generator remains available, but advertising and analytics storage stay disabled for that browser until you change or clear your local browser preferences. The current implementation keeps Google ad personalization and ad user data consent disabled by default.',
        'Users may opt out of personalized advertising by visiting Google Ads Settings at https://www.google.com/settings/ads. Visitors may also learn more about third-party advertising choices at https://www.aboutads.info. If additional advertising vendors or ad networks are used, this policy should be updated with the relevant vendor information and opt-out links.',
        'If the site later introduces additional third-party services such as email capture, account features, or richer analytics, this page should be updated so the policy reflects the live production setup. For questions, corrections, or privacy-related concerns, the public repository issue tracker and contact email are the clearest contact routes.'
      ],
    },
    terms: {
      title: 'Terms of Use',
      description:
        'Review the usage terms for Random Object Generator, including basic limitations, permitted use, and content ownership expectations.',
      eyebrow: 'Terms',
      body: [
        'Random Object Generator is provided as a free online utility for personal, educational, workshop, and general creative use. The purpose of the product is to help people generate object prompts quickly, not to restrict access behind a paid wall for the core experience.',
        'Generated objects, lists, and prompts are intended as inspiration rather than professional advice or factual recommendations. You are responsible for deciding whether a generated prompt is appropriate for your classroom, event, publication, game, or creative project.',
        'You agree not to abuse the service, automate excessive requests in ways that damage site stability, attempt to interfere with availability, or reuse the site in a way that harms the project or other users. The content and interface may change as the object pool, intent pages, and multilingual support continue to evolve.',
        'The project may add, remove, or refine features at any time, including category pages, structured content, analytics, or visual assets. Continued use of the site means you accept the live version of the product and these terms as they are presented on the site.',
        'If you discover a factual issue, a policy mismatch, or a technical bug that affects trust or usability, the recommended route today is to report it through the public project issue tracker so it can be reviewed and resolved transparently.'
      ],
    },
    contact: {
      title: 'Contact Random Object Generator',
      description:
        'Contact the Random Object Generator team for product feedback, privacy questions, content corrections, image concerns, and partnership requests.',
      eyebrow: 'Contact',
      body: [
        'Random Object Generator is maintained as a small independent web utility, so the best contact route depends on the kind of request. For product feedback, bug reports, broken links, inaccurate object data, or requests for new generator pages, the public GitHub issue tracker is the preferred channel because it keeps the discussion visible and makes fixes easier to verify.',
        'For privacy questions, advertising review questions, image usage concerns, or requests that should not be discussed in public, you can use the contact email listed on this page. The site does not require accounts, but it still treats operational feedback seriously because trust pages, image sources, analytics disclosures, and content quality all affect whether the tool remains useful and safe for everyday visitors.',
        'When reporting a problem, include the page URL, your device or browser if the issue is technical, and a short description of what you expected to happen. If the issue concerns a generated object, image, alt text, translation, or classroom use case, include the object name and language version so it can be reviewed without guesswork.',
        'The project is not a general advertising marketplace or a scraped directory. Outreach that helps improve the tool for teachers, artists, writers, ESL tutors, workshop hosts, and party-game players is welcome; bulk spam, unrelated link exchange requests, and automated promotional messages are not useful and may be ignored.'
      ],
    },
    editorialPolicy: {
      title: 'Editorial Policy',
      description:
        'How Random Object Generator selects objects, writes multilingual content, reviews images, handles analytics, and improves pages over time.',
      eyebrow: 'Editorial standards',
      body: [
        'Random Object Generator is built around a simple editorial promise: every indexed page should help a real person do a concrete task. A category page should help someone generate a relevant set of objects, and an intent page should explain how to use those objects in a drawing exercise, classroom activity, writing prompt, icebreaker, party game, or vocabulary practice session.',
        'Objects are selected for recognizability, usefulness, and prompt value. The pool favors everyday items, foods, animals, classroom materials, office objects, household items, funny props, and nature references because those categories are easy to explain, easy to draw, and easy to reuse in group activities. When a page needs a narrower context, examples are chosen to match the intent instead of being randomly copied from a generic list.',
        'Images and visual metadata are reviewed as product assets, not decoration. The preferred image should clearly represent the object, avoid misleading scenes, load quickly, and include descriptive alt text. When a real photo is not a good fit, the fallback should still be honest and useful rather than pretending to be a high-quality image reference.',
        'Multilingual content is written to match the search intent of each language version, not merely swapped word by word. Japanese pages can emphasize common Japanese search phrasing, Chinese pages can explain classroom or creative use in natural Chinese, and English pages can target drawing, games, and brainstorming workflows. The goal is to reduce thin-content risk by giving each page a clear reason to exist.',
        'Analytics are used to improve usefulness, not to inflate vanity metrics. Google Analytics 4 and Search Console help identify pages with high bounce rates, weak engagement, missing intent coverage, or promising queries such as random object to draw and food randomizer. Those signals guide updates to object pools, page copy, internal links, and generator defaults.',
        'Advertising does not decide which objects, examples, FAQs, or internal links appear on the site. Ad placements should stay clearly separated from generator controls, copy buttons, navigation links, and result cards so visitors are not pushed into accidental clicks. Sponsored areas should be treated as advertising, while editorial and utility content should remain useful on its own.'
      ],
    },
    ui: {
      home: 'Home',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      editorialPolicy: 'Editorial Policy',
      legal: 'Trust & Legal',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      relatedGenerators: 'Related generators',
      howToUse: 'How to use this generator',
      breadcrumbHome: 'Home',
      featureRandomTitle: 'Random picks',
      featureRandomBody: 'Generate a fresh object instantly for drawing prompts, games, warmups, or creative sprints.',
      featureRandomValue: '1 click',
      featureCopyTitle: 'Copy-ready lists',
      featureCopyBody: 'Create a clean batch on the current page and copy it fast for docs, worksheets, or brainstorming.',
      visualMode: 'Visual mode',
      bulkMode: 'Bulk mode',
      count: 'Count',
      allowRepeats: 'Allow repeats',
      limitedTo: 'Limited to {count} unique items on this page.',
      generateCta: 'Generate now',
      generateAgainCta: 'Show {count} new objects',
      jumpToCards: 'Jump to cards',
      jumpToList: 'Open bulk list',
      refreshList: 'Refresh list',
      copyObject: 'Copy object',
      copyList: 'Copy list',
      copied: 'Copied',
      object: 'Object',
      descriptionLabel: 'Description',
      bestFor: 'Best for',
      chipDrawing: 'Drawing prompts',
      chipClassroom: 'Classroom warmups',
      chipBrainstorm: 'Brainstorming',
      chipGames: 'Party games',
      whyThisExists: 'Why this homepage exists',
      whatLabel: 'What',
      whyLabel: 'Why',
      howToLabel: 'How to use',
      featuredCategoriesLabel: 'Featured categories',
      categoryLabel: 'Category',
      openGenerator: 'Open generator',
      useCasesLabel: 'Use cases',
      faqLabel: 'FAQ',
      internalLinksLabel: 'Internal links',
      drawPromptsLink: 'Random object to draw',
      kidsObjectsLink: 'Random objects for kids',
      sourceCode: 'Source code',
      reportIssue: 'Report an issue',
      emailUs: 'Email us',
    },
  },
  zh: {
    about: {
      title: '关于 Random Object Generator',
      description:
        '了解这个网站是谁做的、为什么要做，以及它如何帮助老师、写作者、画师和活动组织者快速获得灵感。',
      eyebrow: '关于这个项目',
      body: [
        'Random Object Generator 是一个由独立开发者维护的小型工具站，目标是把随机提示词做得比普通随机名词网站更直观、更好用、更容易复用。它不是一个需要先登录才能使用的封闭产品，而是一个尽量降低摩擦、打开即可生成结果的公开工具。',
        '这个项目主要服务于那些需要快速灵感输入的人，比如准备课堂热身的老师、寻找绘画提示的画师、组织破冰活动的主持人、做语言训练的老师，以及需要一个起点的写作者。相比只吐出一个词的工具，这个站点更强调视觉化结果、批量复制能力和更清晰的分类结构。',
        '项目由 Random Object Generator 名义下的独立团队维护。更新优先级会参考 Search Console 查询、GA4 互动数据、用户反馈以及人工检查：一个页面是否真的能帮助用户把随机物品用于绘画、课堂、游戏或写作，而不是只为了生成更多 URL。',
        '从运行方式来看，站点目前部署在 Cloudflare 环境中，并接入 Google Analytics 4 来观察页面访问、按钮点击和使用行为。这样做的目的不是采集多余信息，而是为了让产品更稳定，判断哪些页面真的满足用户意图，并持续优化站点结构。',
        '如果你想确认站点是如何建设的，或者想反馈问题、提出改进建议，当前最明确的公开联系入口是项目源码仓库和 issue 列表。对一个工具站来说，明确的责任主体和公开的反馈通道，本身也是 EEAT 的一部分。'
      ],
    },
    privacy: {
      title: '隐私政策',
      description:
        '查看 Random Object Generator 的隐私政策，包括基础日志、匿名统计以及必要的技术数据处理方式。',
      eyebrow: '隐私',
      body: [
        'Random Object Generator 是一个轻量级公开工具，核心生成器不需要注册，也不会为了展示随机结果而主动索取不必要的个人信息。',
        '和大多数网站一样，为了保障稳定性、改进体验以及了解页面使用情况，系统可能会记录基础技术数据，例如服务日志、页面请求、设备与浏览器信息、来源信息以及匿名化的交互事件。当前站点部署在 Cloudflare 环境中，并使用 Google Analytics 4 做基础访问与行为统计。',
        '这些技术数据的用途主要是运维和改进产品，例如判断页面是否正常工作、哪些页面点击率更高、哪些生成器被真正使用，以及哪些专题页需要继续优化，而不是建立用户画像或要求用户先交出身份信息。',
        '本站已接入 Google AdSense 用于请求和展示广告。包括 Google 在内的第三方供应商可能会使用 Cookie 或类似技术，根据用户此前访问本站或其他网站的情况投放广告。Google 使用广告 Cookie 后，可以让 Google 及其合作伙伴基于用户对本站和互联网上其他网站的访问情况展示广告。',
        '本站会在授予非必要 Google 广告或统计存储权限前显示 Cookie 选择提示。如果你选择拒绝，核心随机生成器仍可正常使用，但该浏览器中的广告和统计存储会保持关闭，直到你修改或清除本地浏览器偏好。当前实现默认不授予 Google 个性化广告和广告用户数据权限。',
        '用户可以访问 Google Ads Settings（https://www.google.com/settings/ads）退出个性化广告。访客也可以通过 https://www.aboutads.info 了解更多第三方广告选择。如果本站未来使用更多广告供应商或广告网络，本政策应继续补充相关供应商信息和退出链接。',
        '如果未来站点接入更多第三方服务，例如邮件订阅、账号功能或更复杂的统计方案，本页面应同步更新为真实运行状态。若你认为隐私描述与实际行为不一致，当前推荐通过公开 issue 或联系邮箱提出反馈。'
      ],
    },
    terms: {
      title: '服务条款',
      description:
        '查看 Random Object Generator 的使用条款，包括可接受使用方式、限制以及功能变更说明。',
      eyebrow: '条款',
      body: [
        'Random Object Generator 目前作为免费的在线工具提供服务，你可以将其用于个人、教育、活动组织和一般创意场景。当前产品定位是一个公开的随机灵感工具，而不是对核心能力设置付费墙的封闭 SaaS。',
        '网站生成的物品、清单和提示词主要用于启发灵感，不构成专业建议或事实推荐。你需要自行判断某个生成结果是否适合你的课堂、活动、出版物、小游戏或创意项目。',
        '你不得滥用服务、进行过量自动请求、影响网站稳定性，或以损害项目和其他用户的方式使用网站内容。站点中的图片、文案、结构化页面和分类功能可能会持续调整，以便更好地服务课堂、创作和游戏类使用场景。',
        '随着产品迭代，我们可能会新增、修改或删除功能，包括分类页、专题页、分析埋点、对象素材和多语言支持。继续使用网站，即表示你接受当下线上版本及其展示出来的服务规则。',
        '如果你发现条款、事实描述或页面行为存在明显问题，建议通过公开 issue 入口提交反馈，这样站点维护者可以以可追踪的方式处理问题。'
      ],
    },
    contact: {
      title: '联系 Random Object Generator',
      description:
        '联系 Random Object Generator，反馈产品问题、隐私疑问、内容修正、图片问题或合作请求。',
      eyebrow: '联系入口',
      body: [
        'Random Object Generator 是一个由独立团队维护的小型工具站，因此不同类型的问题适合走不同的反馈入口。如果你发现按钮不可用、页面 404、生成结果不准确、分类不够完整、翻译不自然，或者希望新增某个专题生成器，推荐优先通过公开 GitHub issue 反馈。公开反馈更容易追踪，也方便后续确认问题是否已经修复。',
        '如果你的问题涉及隐私、广告审核、图片使用、品牌合作，或不适合公开讨论，可以使用本页列出的联系邮箱。这个网站不要求用户注册账号，但我们仍然认真对待信任相关问题，因为清晰的联系方式、真实的隐私说明、可解释的图片来源和可持续维护的内容质量，都会影响用户是否愿意继续使用这个工具。',
        '提交问题时，建议附上页面 URL、使用设备或浏览器、你看到的具体问题，以及你期望发生的结果。如果问题和某个物品、图片、alt 文本、语言版本或课堂活动场景有关，也请尽量写出对应物品名称和语言版本，这样维护者可以更快定位。',
        '我们欢迎能让工具对老师、画师、写作者、英语学习者、工作坊主持人和小游戏玩家更有帮助的建议。但与站点主题无关的批量推广、垃圾外链交换和自动化营销信息不会被优先处理。'
      ],
    },
    editorialPolicy: {
      title: '编辑与内容政策',
      description:
        '了解 Random Object Generator 如何选择物品、编写多语言内容、审核图片、使用统计数据并持续改进页面。',
      eyebrow: '内容标准',
      body: [
        'Random Object Generator 的内容原则很简单：每一个被索引的页面都应该帮助真实用户完成一个具体任务。分类页应该让用户快速得到相关物品集合；专题页则应该解释这些物品如何用于绘画练习、课堂活动、写作提示、破冰游戏、派对游戏或词汇训练。',
        '物品选择优先考虑可识别性、实用性和提示价值。对象库会优先覆盖日常物品、食物、动物、教室用品、办公用品、家庭用品、搞笑道具和自然元素，因为这些类别更容易解释、绘制和在集体活动中复用。当某个页面服务更明确的搜索意图时，示例会按照场景挑选，而不是从通用清单里机械替换几个词。',
        '图片与视觉元数据被当作产品资产处理，而不是装饰。理想图片应该清楚展示物品本身，不误导用户，加载速度足够快，并配有准确的 alt 文本。如果某个真实图片不适合用作物品参考，我们宁可使用诚实、清楚的备用展示，也不会用不相干的图片冒充高质量素材。',
        '多语言内容不会只做逐字替换。日文页面会尽量贴近日语用户实际搜索表达，中文页面会用自然中文解释课堂和创作场景，英文页面会重点覆盖 drawing prompts、games 和 brainstorming 等工作流。这样做的目标是让每个页面都有独立存在的价值，而不是制造薄内容。',
        '统计数据用于改进实用性，而不是追求表面数字。Google Analytics 4 和 Search Console 会帮助我们识别跳出率高、互动不足、搜索意图覆盖不完整或正在出现机会的页面，例如 random object to draw、食べ物 ランダム、随机物品生成器等查询。后续更新会围绕对象库、页面文案、内链结构和默认交互配置展开。',
        '广告不会决定网站展示哪些物品、示例、FAQ 或站内链接。广告位应该和生成器控件、复制按钮、导航链接、结果卡片保持清晰区分，避免诱导或造成误点。带有商业属性的区域应被当作广告处理，而编辑内容和工具功能本身仍应独立有用。'
      ],
    },
    ui: {
      home: '首页',
      about: '关于我们',
      privacy: '隐私政策',
      terms: '服务条款',
      contact: '联系我们',
      editorialPolicy: '编辑政策',
      legal: '信任与合规',
      quickLinks: '快速入口',
      connect: '相关链接',
      relatedGenerators: '相关生成器',
      howToUse: '如何使用这个生成器',
      breadcrumbHome: '首页',
      featureRandomTitle: '随机生成',
      featureRandomBody: '一键刷新随机物品，可用于绘画题、课堂热身、小游戏和创意发散。',
      featureRandomValue: '一键',
      featureCopyTitle: '可复制清单',
      featureCopyBody: '在当前页面快速生成一批结果，并直接复制到文档、教案、表格或脑暴清单里。',
      visualMode: '卡片模式',
      bulkMode: '批量模式',
      count: '数量',
      allowRepeats: '允许重复',
      limitedTo: '当前页面最多可展示 {count} 个不重复结果。',
      generateCta: '立即生成',
      generateAgainCta: '再来 {count} 个新结果',
      jumpToCards: '查看卡片结果',
      jumpToList: '打开批量列表',
      refreshList: '刷新列表',
      copyObject: '复制物品',
      copyList: '复制列表',
      copied: '已复制',
      object: '物品',
      descriptionLabel: '描述',
      bestFor: '适合用于',
      chipDrawing: '绘画灵感',
      chipClassroom: '课堂热身',
      chipBrainstorm: '头脑风暴',
      chipGames: '小游戏',
      whyThisExists: '为什么需要这个首页',
      whatLabel: '是什么',
      whyLabel: '为什么',
      howToLabel: '如何使用',
      featuredCategoriesLabel: '精选分类',
      categoryLabel: '分类',
      openGenerator: '打开生成器',
      useCasesLabel: '使用场景',
      faqLabel: '常见问题',
      internalLinksLabel: '站内链接',
      drawPromptsLink: '随机绘画物品',
      kidsObjectsLink: '适合孩子的随机物品',
      sourceCode: '源码仓库',
      reportIssue: '反馈问题',
      emailUs: '发送邮件',
    },
  },
  ja: {
    about: {
      title: 'Random Object Generator について',
      description:
        'このサイトの目的、制作者、そして教師・ライター・イラスト制作者・進行役にどう役立つかを紹介します。',
      eyebrow: 'このプロジェクトについて',
      body: [
        'Random Object Generator は、一般的なランダム名詞サイトよりも、見やすく、使いやすく、再利用しやすい発想ツールを目指して作られた独立系のユーティリティサイトです。ログインを前提にした閉じたサービスではなく、まず結果を見せることを重視した公開ツールとして設計されています。',
        'このプロジェクトは、授業の導入ネタを探す先生、描画のお題が欲しい人、アイスブレイクを回すファシリテーター、語彙練習をしたい講師、そして物語のきっかけが欲しい書き手のように、短時間で発想の起点が必要な人のために存在しています。視覚カード、コピーできる一覧、カテゴリ別ページを組み合わせて、単なるランダム単語サイトよりも実用性を高めています。',
        'プロジェクトは Random Object Generator 名義の独立した運営チームによって維持されています。更新の優先順位は、Search Console の検索語、GA4 の利用傾向、ユーザーからの報告、そして各ページが実際の活動に役立つかどうかの手作業レビューをもとに決めています。',
        '現在のサイトは Cloudflare 環境で配信され、Google Analytics 4 を使って閲覧やクリックの傾向を把握しています。目的は余計な個人情報を集めることではなく、どのページが役に立っているか、どこに改善余地があるかを判断して、情報設計を良くしていくことです。',
        '技術的な実装や改善方針を確認したい場合は、公開リポジトリと issue 一覧が現時点で最も明確な問い合わせ先です。誰が運営していて、どう改善しているかが見えることも、信頼性の一部だと考えています。'
      ],
    },
    privacy: {
      title: 'プライバシーポリシー',
      description:
        'Random Object Generator のプライバシーポリシーです。基本ログ、匿名解析、技術データの扱いについて説明します。',
      eyebrow: 'プライバシー',
      body: [
        'Random Object Generator は、ログイン不要で使える軽量な公開ツールです。コア機能の利用にあたり、不要な個人情報の提出は求めません。',
        '多くのウェブサイトと同様に、安定運用、使い勝手の改善、どのページが使われているかの把握のために、基本的な技術データが記録される場合があります。これには、サーバーログ、ページリクエスト、端末やブラウザ情報、参照元、匿名の利用イベントなどが含まれます。現在のサイトは Cloudflare 環境で配信され、Google Analytics 4 を用いて基礎的なアクセス計測を行っています。',
        'こうしたデータ処理の目的は、サービスを安定させ、役に立つページを判断し、ジェネレーターや導線の改善点を見つけることです。ユーザーアカウントを作らせたり、個人プロフィールを構築したりするための設計ではありません。',
        'このサイトでは、広告のリクエストと表示のために Google AdSense を利用しています。Google を含む第三者ベンダーは、ユーザーがこのサイトまたは他のウェブサイトを過去に訪問した情報に基づいて広告を配信するため、Cookie または類似技術を使用する場合があります。Google の広告 Cookie により、Google とそのパートナーは、このサイトおよびインターネット上の他サイトへの訪問に基づく広告を表示できます。',
        'このサイトでは、必須ではない Google 広告または解析ストレージを有効にする前に Cookie 選択バナーを表示します。拒否した場合でもコアのジェネレーターは利用できますが、そのブラウザでは広告と解析ストレージが無効のままになります。現在の実装では、Google の広告パーソナライズと広告ユーザーデータの同意は初期状態で無効のままです。',
        'ユーザーは Google Ads Settings（https://www.google.com/settings/ads）でパーソナライズ広告を無効にできます。また、https://www.aboutads.info で第三者広告に関する選択肢を確認できます。今後、追加の広告ベンダーまたは広告ネットワークを使用する場合は、関連するベンダー情報とオプトアウト方法をこのポリシーに追記します。',
        '将来、メール購読、アカウント機能、追加の解析ツールなど別の第三者サービスを導入する場合は、このページを更新して実際の本番構成と一致させるべきです。説明と実態に差があると思われる場合は、公開 issue または連絡先メールを通じて知らせてください。'
      ],
    },
    terms: {
      title: '利用規約',
      description:
        'Random Object Generator の利用規約です。利用方法、制限事項、機能更新に関する基本方針を確認できます。',
      eyebrow: '利用規約',
      body: [
        'Random Object Generator は、個人利用、教育利用、ワークショップ、一般的な創作目的で利用できる無料オンラインツールです。現時点では、コア機能を有料の壁で囲うよりも、すぐ使える公開ツールとしての価値を優先しています。',
        '生成されるオブジェクト、一覧、プロンプトは発想のきっかけであり、専門的な助言や事実上の推奨ではありません。授業、イベント、出版物、ゲーム、創作プロジェクトで使う場合は、利用者自身が適切性を判断してください。',
        'サービスを乱用したり、過剰な自動リクエストを送ったり、可用性を妨げたり、プロジェクトや他ユーザーに害を与える形でコンテンツを利用したりしてはいけません。画像、カテゴリページ、構造化された説明文、多言語ページなどは、品質改善のために随時見直される可能性があります。',
        '今後の改善にあわせて、機能は追加・変更・削除される場合があります。カテゴリ構成、意図別ページ、分析タグ、画像素材、多言語サポートもその対象です。サイトを使い続けることで、その時点の公開版に同意したものとみなされます。',
        'もし事実誤認、ポリシーの不一致、または利用に関わる重大な問題を見つけた場合は、公開 issue を通じて知らせるのが現在の推奨ルートです。'
      ],
    },
    contact: {
      title: 'Random Object Generator へのお問い合わせ',
      description:
        'Random Object Generator への連絡方法です。製品フィードバック、プライバシー、内容修正、画像に関する相談を受け付けます。',
      eyebrow: 'お問い合わせ',
      body: [
        'Random Object Generator は小さな独立系ユーティリティとして運営されているため、内容によって適した連絡方法が異なります。バグ、リンク切れ、翻訳の違和感、オブジェクトデータの誤り、新しいジェネレーター案などは、公開 GitHub issue で知らせてもらうのが最も確認しやすい方法です。',
        'プライバシー、広告審査、画像利用、または公開の場で扱いにくい相談については、このページに記載されたメールアドレスを利用できます。このサイトはアカウント登録を必要としませんが、信頼に関わる連絡先、画像の扱い、解析ツールの説明、内容品質は、利用者が安心して使えるかどうかに直結します。',
        '問題を報告する場合は、対象ページの URL、利用端末やブラウザ、実際に起きたこと、期待していた動作を簡潔に書いてください。特定のオブジェクト、画像、alt テキスト、翻訳、授業やゲームでの利用シーンに関する指摘であれば、対象名と言語版もあると確認が早くなります。',
        '教師、イラスト制作者、ライター、語学学習者、ワークショップ進行役、パーティーゲーム利用者にとって役立つ改善提案は歓迎します。一方で、テーマと関係のない大量営業、リンク交換、機械的な宣伝依頼は優先的には扱いません。'
      ],
    },
    editorialPolicy: {
      title: '編集ポリシー',
      description:
        'Random Object Generator がオブジェクト、画像、多言語コンテンツ、解析データをどのように扱うかを説明します。',
      eyebrow: '編集基準',
      body: [
        'Random Object Generator の編集方針は、インデックスされる各ページが実際の利用場面に役立つことです。カテゴリページは関連するオブジェクトをすばやく生成できるべきであり、目的別ページはそれらを描画練習、授業、文章作成、アイスブレイク、パーティーゲーム、語彙練習にどう使うかを説明する必要があります。',
        'オブジェクトは、認識しやすさ、実用性、お題としての使いやすさを基準に選びます。日用品、食べ物、動物、教室用品、オフィス用品、家庭用品、面白い小物、自然物を優先するのは、説明しやすく、描きやすく、複数人の活動でも再利用しやすいからです。',
        '画像とメタデータは、単なる装飾ではなくプロダクトの一部として扱います。理想的な画像は対象物を明確に示し、誤解を招かず、読み込みが速く、説明的な alt テキストを持つものです。実物写真が目的に合わない場合は、無関係な画像を使うより、正直で分かりやすい代替表現を選びます。',
        '多言語コンテンツは機械的な置換ではなく、各言語の検索意図に合わせて調整します。日本語ページでは日本語の検索表現を意識し、中国語ページでは授業や創作での使い方を自然に説明し、英語ページでは drawing prompts、games、brainstorming といった具体的なワークフローを重視します。',
        'Google Analytics 4 と Search Console のデータは、ページの改善に使います。直帰率が高いページ、検索表示はあるがクリックされないページ、または random object to draw や 食べ物 ランダム のように伸び始めている検索語を確認し、オブジェクトプール、本文、内部リンク、既定の生成設定を見直します。',
        '広告は、このサイトに表示されるオブジェクト、例、FAQ、内部リンクを決めるものではありません。広告枠は、生成ボタン、コピー操作、ナビゲーション、結果カードと明確に分け、誤クリックを誘発しない配置にするべきです。広告領域は広告として扱い、編集コンテンツとツール機能はそれ自体で役に立つ状態を保ちます。'
      ],
    },
    ui: {
      home: 'ホーム',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'お問い合わせ',
      editorialPolicy: '編集ポリシー',
      legal: '信頼と法務',
      quickLinks: 'クイックリンク',
      connect: 'リンク',
      relatedGenerators: '関連ジェネレーター',
      howToUse: 'このジェネレーターの使い方',
      breadcrumbHome: 'ホーム',
      featureRandomTitle: 'ランダム生成',
      featureRandomBody: 'ワンクリックで新しいお題を出せるので、描画練習、授業導入、ゲーム、発想整理に使えます。',
      featureRandomValue: '1クリック',
      featureCopyTitle: 'コピーしやすい一覧',
      featureCopyBody: 'このページ内で複数の結果をすばやく作成し、ドキュメントやワークシートへそのままコピーできます。',
      visualMode: 'カード表示',
      bulkMode: '一括表示',
      count: '数',
      allowRepeats: '重複を許可',
      limitedTo: 'このページでは重複なしで最大 {count} 件まで表示できます。',
      generateCta: '今すぐ生成',
      generateAgainCta: '{count} 件の新しい結果を表示',
      jumpToCards: 'カードを見る',
      jumpToList: '一覧を見る',
      refreshList: '一覧を更新',
      copyObject: '項目をコピー',
      copyList: '一覧をコピー',
      copied: 'コピー済み',
      object: '項目',
      descriptionLabel: '説明',
      bestFor: 'おすすめ用途',
      chipDrawing: '描画のお題',
      chipClassroom: '授業の導入',
      chipBrainstorm: '発想整理',
      chipGames: 'パーティーゲーム',
      whyThisExists: 'このホームページの役割',
      whatLabel: '何ができるか',
      whyLabel: 'なぜ重要か',
      howToLabel: '使い方',
      featuredCategoriesLabel: '注目カテゴリ',
      categoryLabel: 'カテゴリ',
      openGenerator: 'ジェネレーターを開く',
      useCasesLabel: '活用シーン',
      faqLabel: 'FAQ',
      internalLinksLabel: '内部リンク',
      drawPromptsLink: '描くためのランダムオブジェクト',
      kidsObjectsLink: '子ども向けランダムオブジェクト',
      sourceCode: 'ソースコード',
      reportIssue: '問題を報告',
      emailUs: 'メールする',
    },
  },
}
