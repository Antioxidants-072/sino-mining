import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { getContent } from '@/lib/content'

export default function NewsroomPage() {
  const { breadcrumb, newsroom, releases } = getContent('zh')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/newsroom" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="zh"
          items={[{ label: breadcrumb.home, href: '/' }, { label: breadcrumb.newsroom }]}
        />

        <section className="mx-auto max-w-[1600px] px-6 pb-6 lg:px-10">
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            {newsroom.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {newsroom.subtitle}
          </p>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">
          <div className="border border-border">
            {releases.map((item, index) => (
              <a
                key={item.slug}
                id={item.slug}
                href={`/newsroom/${item.slug}`}
                className={`group flex flex-col gap-4 px-8 py-8 transition-colors hover:bg-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 ${
                  index !== releases.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-10">
                  <div className="flex shrink-0 flex-col gap-1 sm:w-40">
                    <span className="text-xs font-semibold tracking-wide text-highlight">
                      {item.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <div>
                    <p className="text-pretty text-lg font-medium leading-snug text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 self-start text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:self-center"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
