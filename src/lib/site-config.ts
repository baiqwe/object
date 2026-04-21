export const siteConfig = {
  name: 'Random Object Generator',
  shortName: 'ROG',
  description:
    'Generate random objects, animals, foods, and funny prompts in seconds. Fast, visual, and ready for games, classrooms, and creative work.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://random-object-generator.example.com',
  featuredCategories: ['animals', 'household', 'food', 'funny'] as const,
  quantities: [1, 5, 10, 20, 50, 100],
} as const
