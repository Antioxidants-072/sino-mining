import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sala de prensa | SINOMINING',
  description: 'Mantengase informado sobre los ultimos lanzamientos de productos, colaboraciones de proyectos y noticias de la empresa.',
}

export default function NewsroomPage() {
  const { breadcrumb, newsroom, releases } = getContent('es')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/en/newsroom" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="es"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: breadcrumb.newsroom },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              Sala de prensa
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {newsroom.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {newsroom.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {releases.map((release) => (
              <Link
                key={release.slug}
                href={`/es/newsroom/${release.slug}`}
                className="group flex flex-col overflow-hidden border border-border transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="relative h-48 w-full bg-muted">
                  {release.image && (
                    <img
                      src={release.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-wide text-highlight">
                      {release.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {release.date}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-accent">
                    {release.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {release.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                    Leer mas
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
