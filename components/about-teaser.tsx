import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getContent, localizedHref, type Lang } from '@/lib/content'

export function AboutTeaser({ lang }: { lang: Lang }) {
  const { aboutTeaser } = getContent(lang)
  const href = localizedHref(lang, '/about')

  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-20 lg:px-10">
      <h2 className="mb-8 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {aboutTeaser.eyebrow}
      </h2>
      <div className="flex flex-col-reverse overflow-hidden sm:flex-row">
        <div className="cut-bl flex w-full shrink-0 flex-col justify-between gap-8 bg-secondary p-6 text-secondary-foreground sm:cut-tl-lg sm:w-[46%] sm:p-10">
          <h3 className="whitespace-pre-line font-heading text-3xl font-bold leading-tight sm:text-4xl">
            {aboutTeaser.title}
          </h3>
          <p className="text-pretty text-base leading-relaxed text-secondary-foreground/80">
            {aboutTeaser.body}
          </p>
          <dl className="grid grid-cols-3 gap-x-3 sm:gap-x-6 border-t border-secondary-foreground/15 pt-6">
            {aboutTeaser.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 text-left ${
                  index === 0
                    ? 'pr-2 sm:pr-5'
                    : index === 1
                      ? 'pr-3 sm:pr-8'
                      : 'pl-2 sm:pl-5'
                }`}
              >
                <dt
                  className={`whitespace-nowrap font-heading text-base font-bold sm:text-2xl ${
                    index === 0
                      ? 'text-[#12ddff]'
                      : index === 1
                        ? 'text-[#00ddff]'
                        : 'text-[#04d3ff]'
                  }`}
                >
                  {stat.value}
                </dt>
                <dd className="whitespace-nowrap text-xs uppercase tracking-wide text-secondary-foreground/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <Button
            render={<Link href={href} />}
            nativeButton={false}
            className="cta-swap w-fit rounded-none px-8"
          >
            {aboutTeaser.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="relative aspect-[16/9] w-full sm:aspect-auto sm:w-[54%]">
          <Image
            src={aboutTeaser.image}
            alt={aboutTeaser.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
