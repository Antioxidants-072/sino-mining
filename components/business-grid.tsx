import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getContent, type Lang } from '@/lib/content'

export function BusinessGrid({ lang }: { lang: Lang }) {
  const { businessGrid } = getContent(lang)

  const miningHref = lang === 'zh' ? '/epc' : '/en/epc'

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">
      <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {businessGrid.heading}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {businessGrid.subtitle}
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {businessGrid.items.map((item, index) => {
          const href = index === 1 ? miningHref : '#'
          const cardImage =
            index === 0
              ? '/images/mining-plant.png'
              : index === 1
                ? '/images/step2-production-workshop.png'
                : index === 2
                  ? '/images/step3-flotation-line.png'
                  : '/images/services-workers.png'
          return (
            <div key={item.title} className="group flex flex-col-reverse overflow-hidden sm:flex-row">
              <div className="cut-bl flex w-full shrink-0 flex-col justify-between bg-secondary p-6 text-secondary-foreground transition-colors duration-200 group-hover:bg-secondary/75 sm:w-[42%] sm:p-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
                    {item.description}
                  </p>
                </div>
                <Button
                  render={<Link href={href} />}
                  nativeButton={false}
                  className="cta-swap mt-6 w-fit rounded-none px-6"
                  size="sm"
                >
                  {item.cta}
                </Button>
              </div>
              <div className="relative aspect-[16/9] w-full sm:aspect-auto sm:w-[58%]">
                <Image
                  src={cardImage}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
