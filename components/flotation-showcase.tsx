import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getContent, type Lang } from '@/lib/content'

export function FlotationShowcase({ lang }: { lang: Lang }) {
  const content = getContent(lang)
  const flotationProducts = content.productsPage.products
    .filter((product) => product.categoryId === 'flotation')
    .slice(0, 5)

  return (
    <section className="border-y border-border bg-muted/40 py-14 sm:py-18" aria-labelledby="flotation-showcase-title">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="flotation-showcase-title" className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {lang === 'zh' ? '高效浮选机系列' : 'High-performance flotation machines'}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {lang === 'zh'
                ? '面向不同矿物与工艺需求，提供稳定可靠的浮选设备。'
                : 'Reliable flotation equipment engineered for diverse minerals and process requirements.'}
            </p>
          </div>
          <Button
            render={<Link href={lang === 'zh' ? '/products' : '/en/products'} />}
            nativeButton={false}
            className="w-fit rounded-none px-6"
          >
            {lang === 'zh' ? '产品中心' : 'Products Center'}
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-6 [scrollbar-width:thin]">
          {flotationProducts.map((product) => (
            <Link
              key={product.slug}
              href={lang === 'zh' ? `/products/${product.slug}` : `/en/products/${product.slug}`}
              className="group min-w-[calc((100%-1rem)/2)] snap-start sm:min-w-[calc((100%-1rem)/2)] lg:min-w-[calc((100%-2rem)/3)]"
            >
              <article className="h-full overflow-hidden bg-card transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 360px, 78vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-36 flex-col justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{product.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.spec}</p>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-accent">
                    {lang === 'zh' ? '查看详情' : 'View details'}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
