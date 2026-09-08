'use client'

import { useRef, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getContent, localizedHref, type Lang } from '@/lib/content'

export function FlotationShowcase({ lang }: { lang: Lang }) {
  const content = getContent(lang)
  const flotationProducts = content.productsPage.products
    .filter((product) => product.categoryId === 'flotation')
    .slice(0, 5)
  const scrollRef = useRef<HTMLDivElement>(null)
  const displayProducts = [...flotationProducts, ...flotationProducts]

  const isZh = lang === 'zh'
  const isEn = lang === 'en'
  const isEs = lang === 'es'
  const isRu = lang === 'ru'

  return (
    <section className="border-y border-border bg-muted/40 py-12 sm:py-14" aria-labelledby="flotation-showcase-title">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="flotation-showcase-title" className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {isZh ? '高效设备' : isEn ? 'High-performance Equipment' : isRu ? 'Высокопроизводительное оборудование' : 'Equipos de alto rendimiento'}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {isZh
                ? '面向不同矿物与工艺需求，提供稳定可靠的浮选设备。'
                : isEn
                ? 'Versatile Flotation, Proven Reliability.'
                : isRu
                ? 'Универсальная флотация, проверенная надёжность.'
                : 'Flotacion versatil, confiabilidad comprobada.'}
            </p>
          </div>
          <Button
            render={<Link href={localizedHref(lang, '/products')} />}
            nativeButton={false}
            className="cta-swap w-fit rounded-none px-6"
          >
            {isZh ? '产品中心' : isEn ? 'Products Center' : isRu ? 'Каталог продукции' : 'Centro de productos'}
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Button>
        </div>

        <div
          ref={scrollRef}
          className="equipment-marquee mt-8 flex gap-4 overflow-x-hidden pb-4 pr-6 [scrollbar-width:none]"
          style={{ '--equipment-count': flotationProducts.length } as CSSProperties}
          aria-label={isZh ? '浮选机产品展示' : isEn ? 'Flotation equipment showcase' : isRu ? 'Выставка флотационного оборудования' : 'Exhibicion de equipos de flotacion'}
        >
          {displayProducts.map((product, index) => (
            <Link
              key={`${product.slug}-${index}`}
              href={localizedHref(lang, `/products/${product.slug}`)}
              className="group w-[280px] shrink-0 snap-start sm:w-[320px] lg:w-[360px]"
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
                    {isZh ? '查看详情' : isEn ? 'View details' : isRu ? 'Подробнее' : 'Ver detalles'}
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
