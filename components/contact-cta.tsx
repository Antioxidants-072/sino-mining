import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getContent, type Lang } from '@/lib/content'

export function ContactCTA({ lang }: { lang: Lang }) {
  const { contactCTA } = getContent(lang)
  const contactHref = lang === 'zh' ? '/contact' : '/en/contact'

  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10">
      <div className="cut-bl flex flex-col items-start gap-8 border border-primary/40 bg-muted/40 p-10 sm:flex-row sm:items-center sm:justify-between lg:p-14">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {contactCTA.heading}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {contactCTA.description}
          </p>
        </div>
        <Button
          render={<Link href={contactHref} />}
          nativeButton={false}
          size="lg"
          className="h-12 shrink-0 rounded-none bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-highlight hover:text-highlight-foreground"
        >
          {contactCTA.cta}
        </Button>
      </div>
    </section>
  )
}
