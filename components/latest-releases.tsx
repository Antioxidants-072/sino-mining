import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getContent, localizedHref, type Lang } from '@/lib/content'

export function LatestReleases({ lang }: { lang: Lang }) {
  const { latestReleases, releases } = getContent(lang)
  const items = releases.slice(0, 3)
  const newsroomHref = localizedHref(lang, '/newsroom')

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10">
      <div className="cut-tl flex items-center justify-between bg-secondary px-8 py-6 text-secondary-foreground">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          {latestReleases.heading}
        </h2>
        <Link
          href={newsroomHref}
          className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide text-accent transition-colors hover:text-highlight"
        >
          {latestReleases.allLink}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="border border-t-0 border-border">
        {items.map((item, index) => (
          <Link
            key={item.slug}
            href={`${newsroomHref}/${item.slug}`}
            className={`group flex items-center justify-between gap-6 px-8 py-8 transition-colors hover:bg-muted ${
              index !== items.length - 1 ? 'border-b border-border' : ''
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
              <p className="text-pretty text-lg font-medium leading-snug text-foreground">
                {item.title}
              </p>
            </div>
            <ArrowUpRight
              className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
