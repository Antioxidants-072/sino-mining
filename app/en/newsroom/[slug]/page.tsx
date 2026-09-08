import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactCTA } from '@/components/contact-cta'
import { getContent } from '@/lib/content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { pressReleaseDetails } = getContent('en')
  const release = pressReleaseDetails.find((r) => r.slug === slug)

  if (!release) {
    return { title: 'Not Found | SINOMINING' }
  }

  return {
    title: `${release.title} | Newsroom | SINOMINING`,
    description: release.sections[0]?.body?.slice(0, 160),
  }
}

export default async function PressReleasePage({ params }: Props) {
  const { slug } = await params
  const { pressReleaseDetails } = getContent('en')
  const release = pressReleaseDetails.find((r) => r.slug === slug)

  if (!release) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/newsroom" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="en"
          items={[
            { label: 'Home', href: '/en' },
            { label: 'Newsroom', href: '/en/newsroom' },
            { label: release.title },
          ]}
        />

        <article className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
          <header className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {release.category}
              </span>
              <span className="text-sm text-muted-foreground">{release.date}</span>
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {release.title}
            </h1>
          </header>

          {release.heroImage && (
            <div className="mb-12 overflow-hidden">
              <img
                src={release.heroImage}
                alt={release.heroAlt}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {release.sections.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && (
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {section.heading}
                  </h2>
                )}
                {section.body && (
                  <p className="mt-4 leading-relaxed text-foreground/85 whitespace-pre-line">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span className="text-foreground/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.image && (
                  <figure className="mt-6">
                    <img
                      src={section.image}
                      alt={section.imageAlt || ''}
                      className="h-auto w-full rounded-lg"
                    />
                    {section.imageAlt && (
                      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                        {section.imageAlt}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <Link
              href="/en/newsroom"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ← {release.backLabel}
            </Link>
            {release.contactCta && (
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                {release.contactCta}
              </Link>
            )}
          </div>
        </article>

        <ContactCTA lang="en" />
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
