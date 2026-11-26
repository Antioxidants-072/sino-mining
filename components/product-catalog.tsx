'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import reviewedCards from '@/lib/content/reviewed-cards.json'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { localizedHref, type Lang, type Product, type ProductCategory } from '@/lib/content'

export function ProductCatalog({
  lang,
  categories,
  products,
  allLabel,
  viewDetails,
  resultsLabelTemplate,
}: {
  lang: Lang
  categories: ProductCategory[]
  products: Product[]
  allLabel: string
  viewDetails: string
  resultsLabelTemplate: string
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredItems = useMemo(() => {
    const items = activeCategory === 'all'
      ? products
      : products.filter((item) => item.categoryId === activeCategory)

    return [...items].sort((a, b) => {
      const xcfKyfFirst = 'xcf-kyf-flotation-cell'
      if (a.slug === xcfKyfFirst) return -1
      if (b.slug === xcfKyfFirst) return 1
      return 0
    })
  }, [activeCategory, products])

  return (
    <div>
      <div
        role="tablist"
        aria-label={lang === 'zh' ? '产品分类' : lang === 'fr' ? 'Catégories de produits' : 'Product categories'}
        className="grid grid-cols-4 items-stretch gap-px bg-border [&>button]:flex [&>button]:min-h-16 [&>button]:items-center [&>button]:justify-center [&>button]:px-3 [&>button]:py-3 [&>button]:text-center"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}

          className={`col-span-4 px-3 py-3 text-sm font-medium leading-6 tracking-wide transition-colors duration-200 ${
              activeCategory === 'all'
              ? 'bg-accent text-accent-foreground'
              : 'tab-hover-inactive'
          }`}
        >
          {allLabel}
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-3 text-sm font-medium leading-6 tracking-wide transition-colors duration-200 ${
              activeCategory === category.id
                ? 'bg-accent text-accent-foreground'
                : 'tab-hover-inactive'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {resultsLabelTemplate.replace(
          '{count}',
          String(filteredItems.length),
        )}
      </p>

      <div className="mt-6 grid gap-9 sm:grid-cols-2 lg:grid-cols-4" style={{ gridAutoRows: '1fr' }}>
        {filteredItems.map((product) => {
          const card = lang !== 'zh' && Object.hasOwn(reviewedCards, product.slug)
            ? reviewedCards[product.slug as keyof typeof reviewedCards] : undefined
          const categoryLabel = categories.find(
            (category) => category.id === product.categoryId,
          )?.label

          return (
            <div
              key={product.slug}
              className="group flex w-[90%] flex-col transition-colors duration-200"
            >
              <div className="relative h-64 w-full overflow-hidden" style={card ? { backgroundColor: '#f1f4f4' } : undefined}>
                <Image
                  src={card?.image ?? product.image}
                  alt={product.name}
                  fill
                  className={card ? 'object-top' : 'object-cover object-top transition-transform duration-300 group-hover:scale-105'}
                  style={card ? {
                    objectFit: card.fit === 'contain' ? 'contain' : 'cover',
                    objectPosition: 'center top', transformOrigin: 'center center',
                    transform: `translate(${card.x}%, ${card.y}%) scale(${card.zoom / 100})`,
                  } : undefined}
                />
                {categoryLabel && (
                  <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                    {categoryLabel}
                  </span>
                )}
              </div>
              <div className="cut-bl flex flex-1 flex-col justify-between gap-4 bg-secondary p-6 text-secondary-foreground transition-colors duration-200 group-hover:bg-secondary/75">
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    {product.name}
                  </h3>
                  {product.spec && <p className="mt-1 text-xs font-medium text-accent">
                    {product.spec}
                  </p>}
                  <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', overflowWrap: 'anywhere', height: '4.5rem', lineHeight: '1.5rem' }}>
                    {product.description}
                  </p>
                </div>
                {product.detail ? (
                  <Button
                    render={
                      <Link href={localizedHref(lang, `/products/${product.slug}`)} />
                    }
                    nativeButton={false}
                    size="sm"
                    className="cta-swap w-fit rounded-none px-6"
                  >
                    {viewDetails}
                  </Button>
                ) : (
                  <Button size="sm" className="cta-swap w-fit rounded-none px-6">
                    {viewDetails}
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
