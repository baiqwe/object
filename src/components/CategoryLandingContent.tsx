import { buildFaqJsonLd } from '@/lib/seo'

interface CategoryLandingContentProps {
  content: {
    introTitle: string
    introBody: string
    reasonsTitle: string
    reasons: Array<{ title: string; body: string }>
    useCasesTitle: string
    useCases: string[]
    faqTitle: string
    faqs: Array<{ question: string; answer: string }>
  }
}

export function CategoryLandingContent({ content }: CategoryLandingContentProps) {
  const faqJsonLd = buildFaqJsonLd({ faqs: content.faqs })

  return (
    <>
      <section className="container mx-auto space-y-8 px-4 pb-20 md:px-6">
        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Category guide</p>
          <h2 className="mt-3 text-4xl leading-tight text-slate-950 md:text-5xl">{content.introTitle}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{content.introBody}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/5 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Use cases</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Why this page is different</p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
