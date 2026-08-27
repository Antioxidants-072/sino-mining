import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { localizedHref, type ArticlePageContent, type Lang } from '@/lib/content'

/**
 * Standard article-style page. Reused for the About page (company profile)
 * and for individual press-release detail pages so both share the same
 * hero, key-facts, body-section and contact-CTA structure.
 */
export function ArticlePage({
  lang,
  content,
}: {
  lang: Lang
  content: ArticlePageContent
}) {
  const isPressRelease = content.kind === 'press-release'

  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="relative h-[440px] w-full overflow-hidden sm:h-[420px]">
          <Image
            src={content.heroImage}
            alt={content.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.15]"
          />
          <div className="cut-tl-lg absolute bottom-0 right-0 w-full max-w-xl bg-secondary p-8 text-secondary-foreground sm:p-10">
            {isPressRelease && (
              <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-wide text-accent">
                <span className="uppercase">{content.category}</span>
                {content.date && (
                  <span className="flex items-center gap-1.5 text-secondary-foreground/60">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {content.date}
                  </span>
                )}
              </div>
            )}
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              {content.title}
            </h1>
            {content.subtitle && (
              <p className="mt-3 text-pretty leading-relaxed text-secondary-foreground/80">
                {content.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {content.facts && content.facts.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-6 pt-10 lg:px-10">
          <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border sm:grid-cols-4 sm:divide-y-0">
            {content.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-6 py-6">
                <span className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {fact.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {content.sections.map((section, index) => (
            <div key={`${section.heading ?? 'section'}-${index}`}>
              {section.heading && (
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {section.heading}
                </h2>
              )}
              {section.body && (
                <p
                  className={`text-pretty leading-relaxed text-foreground/85 ${
                    section.heading ? 'mt-4' : ''
                  }`}
                >
                  {section.body}
                </p>
              )}
              {section.image && (
                <figure className={`mt-6 ${section.heading || section.body ? 'mt-4' : ''}`}>
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {section.imageAlt && (
                    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                      {section.imageAlt}
                    </figcaption>
                  )}
                </figure>
              )}
              {section.list && (
                <ul
                  className={`flex flex-col gap-3 ${section.heading || section.body ? 'mt-4' : ''}`}
                >
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-pretty leading-relaxed text-foreground/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="flex flex-wrap items-center gap-6 border-t border-border pt-8">
            <Link
              href={content.backHref}
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {content.backLabel}
            </Link>
            {content.productsLabel && content.productsHref && (
              <Button
                render={<Link href={localizedHref(lang, content.productsHref)} />}
                nativeButton={false}
                variant="outline"
                className="cta-swap rounded-none border-accent px-8 text-accent"
              >
                {content.productsLabel}
              </Button>
            )}
            {content.contactCta && (
              <Button
                render={<Link href={localizedHref(lang, '/contact')} />}
                nativeButton={false}
                className="cta-swap rounded-none px-8"
              >
                {content.contactCta}
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
