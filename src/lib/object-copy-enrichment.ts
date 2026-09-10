import type { Locale } from '@/lib/i18n-config'
import type { ObjectRecord } from '@/lib/objects'

type LocalizedDescription = {
  en: string[]
  zh: string[]
  ja: string[]
}

const genericDescriptionPatterns = [
  /works well for drawing prompts/i,
  /prompt with clear mood/i,
  /gives the generator/i,
  /适合绘画提示/,
  /短い物語づくりに使いやすい対象/,
]

const categoryDescriptions: Record<string, LocalizedDescription> = {
  animals: {
    en: [
      'Its silhouette is easy to recognize, which makes it useful for quick sketches, guessing games, and beginner vocabulary work.',
      'Use it to ask about movement, habitat, sound, size, or personality, then turn those answers into a drawing pose or short story beat.',
      'For group activities, it gives players a clear physical cue without needing a long explanation first.',
    ],
    zh: [
      '它的轮廓和动作特征比较容易识别，适合速写、猜词游戏和基础词汇练习。',
      '可以围绕动作、栖息地、声音、体型或性格提问，再把答案延展成绘画姿势或短故事。',
      '在多人活动里，它能提供明确的表演线索，不需要先解释很久。',
    ],
    ja: [
      '形や動きが伝わりやすく、スケッチ、当てっこゲーム、語彙練習に使いやすい対象です。',
      '動き、すみか、鳴き声、大きさ、性格を質問にすると、絵や短い物語へ自然に広げられます。',
      'グループ活動でも、長い説明なしに身体表現へ移しやすいお題になります。',
    ],
  },
  household: {
    en: [
      'Because it belongs to everyday life, it works well for describing rooms, routines, materials, and small domestic problems.',
      'Ask who uses it, where it sits, what it is made from, and what changes when it is missing from the scene.',
      'It is especially helpful for ESL warmups because learners can connect the word to a real place in a home or classroom.',
    ],
    zh: [
      '它来自日常生活，很适合描述房间、生活习惯、材质和小型家务场景。',
      '可以追问谁会使用它、它通常放在哪里、由什么材料做成，以及场景里少了它会发生什么。',
      '对 ESL 或课堂热身也很友好，因为学习者能把词和真实的家庭、教室空间联系起来。',
    ],
    ja: [
      '日常生活に近いものなので、部屋、習慣、素材、家の中の小さな出来事を説明する練習に向いています。',
      '誰が使うのか、どこに置くのか、何でできているのか、なくなると場面がどう変わるのかを考えられます。',
      '家庭や教室の具体的な場所と結びつけやすく、ESL や授業導入にも使いやすいです。',
    ],
  },
  food: {
    en: [
      'Food prompts are concrete and sensory, so they quickly lead to color, texture, taste, smell, and memory details.',
      'Use it for “describe it without naming it,” menu design, party games, or a short writing prompt about who made it and why.',
      'It also helps mixed-age groups because most players can recognize the object and add a personal association.',
    ],
    zh: [
      '食物类提示很具体，也自带感官信息，容易展开颜色、质地、味道、气味和记忆。',
      '可以用来做“不说名称来描述”、菜单设计、聚会小游戏，或写一段“是谁做了它、为什么做”的短文。',
      '它适合不同年龄的人一起玩，因为大多数人都能识别，并补充自己的生活联想。',
    ],
    ja: [
      '食べ物のお題は具体的で、色、質感、味、香り、思い出へ広げやすいです。',
      '名前を言わずに説明する練習、メニュー作り、パーティーゲーム、誰が作ったかを考える短文に使えます。',
      '多くの人が知っているため、年齢が混ざる場でも個人的な連想を足しやすい題材です。',
    ],
  },
  nature: {
    en: [
      'Nature objects are strong for atmosphere: they can suggest weather, season, scale, light, and the mood of a whole scene.',
      'Use it to practice descriptive language, background drawing, story settings, or comparisons between calm and dramatic versions.',
      'For creative prompts, it gives the result more than a noun; it gives the activity a place, texture, and emotional direction.',
    ],
    zh: [
      '自然类物品很适合营造氛围，能带出天气、季节、尺度、光线和整幅画面的情绪。',
      '可以用于描写训练、背景绘制、故事场景设置，或者比较安静版和戏剧版的不同表达。',
      '对创作提示来说，它提供的不只是一个名词，还能给活动带来地点、质感和情绪方向。',
    ],
    ja: [
      '自然物は雰囲気づくりに強く、天気、季節、スケール、光、場面全体の気分を出せます。',
      '描写練習、背景づくり、物語の舞台設定、静かな表現とドラマチックな表現の比較に使えます。',
      '単語だけでなく、場所、質感、感情の方向まで与えてくれるお題です。',
    ],
  },
  funny: {
    en: [
      'Funny objects work best when the room needs energy, because they invite exaggeration, quick reactions, and playful rules.',
      'Use it for improv, party rounds, silly drawing constraints, or “invent a backstory for this object” activities.',
      'The prompt stays light, but it still gives players a real object to describe, act, draw, or remix.',
    ],
    zh: [
      '趣味道具适合需要活跃气氛的场景，因为它天然鼓励夸张反应、快速接梗和轻松规则。',
      '可以用于即兴表演、聚会轮次、搞笑绘画限制，或“给这个物品编一个来历”的活动。',
      '提示保持轻松，但仍然是一个真实可描述、可表演、可绘制、可改编的对象。',
    ],
    ja: [
      '楽しい小物は場を明るくしたいときに向いていて、大げさな反応や即興のルールを作りやすいです。',
      '即興、パーティー、おもしろい描画制限、この物の由来を考える活動に使えます。',
      '軽い題材でありながら、説明、演技、描画、アレンジに使える具体物として機能します。',
    ],
  },
}

function isGenericDescription(description: string) {
  return genericDescriptionPatterns.some((pattern) => pattern.test(description))
}

function getSentenceOffset(id: string, length: number) {
  let hash = 0

  for (let index = 0; index < id.length; index += 1) {
    hash = (hash * 33 + id.charCodeAt(index)) >>> 0
  }

  return hash % length
}

function rotateSentences(sentences: string[], offset: number) {
  return [...sentences.slice(offset), ...sentences.slice(0, offset)]
}

export function enrichObjectDescription(item: ObjectRecord, locale: Locale, description: string) {
  const categoryCopy = categoryDescriptions[item.category]

  if (!categoryCopy) {
    return description
  }

  const name = item.i18n[locale]?.name ?? item.i18n.en.name
  const sentences = rotateSentences(categoryCopy[locale], getSentenceOffset(item.id, categoryCopy[locale].length))
  const shouldReplace = isGenericDescription(description)
  const intro = shouldReplace
    ? {
        en: `${name} is a concrete prompt with enough visual detail to support more than one activity.`,
        zh: `${name} 是一个足够具体的提示，可以支撑不止一种活动用法。`,
        ja: `${name} は、複数の活動に使える具体的なお題です。`,
      }[locale]
    : description

  return [intro, ...sentences.slice(0, 2)].join(' ')
}
