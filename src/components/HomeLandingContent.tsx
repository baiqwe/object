import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import { buildFaqJsonLd, getLocalizedPath } from '@/lib/seo'
import type { LocalizedCategory } from '@/lib/objects'

interface HomeLandingContentProps {
  locale: Locale
  categories: LocalizedCategory[]
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
  }
}

export function HomeLandingContent({ locale, categories, content }: HomeLandingContentProps) {
  const faqJsonLd = buildFaqJsonLd({ faqs: content.faqs })

  return (
    <>
      <div className="container mx-auto space-y-10 px-4 pb-20 md:px-6">
        <section className="grid gap-8 rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Why this homepage exists</p>
            <h2 className="max-w-3xl text-4xl leading-tight text-slate-950 md:text-5xl">{content.introTitle}</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">{content.introBody}</p>
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

        <section className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Featured categories</p>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Category</p>
                    <h3 className="mt-3 text-2xl text-slate-950">{category.translation.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{category.translation.description}</p>
                  </div>
                  <p className="mt-8 text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
                    Open generator
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/5 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Use cases</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">FAQ</p>
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
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
