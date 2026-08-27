'use client'

import { useRef, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import {
  localizedHref,
  type Lang,
  type Product,
  type ArticlePageContent,
} from '@/lib/content'

interface SiteSearchProps {
  lang: Lang
  isOpen: boolean
  onClose: () => void
  placeholder: string
  noResultsLabel: string
  sectionProducts: string
  sectionNews: string
  seeAllLabel: string
  products: Product[]
  releases: ArticlePageContent[]
}

interface SearchResult {
  type: 'product' | 'news'
  slug: string
  title: string
  meta: string
  image?: string
}

export function SiteSearch({
  lang,
  isOpen,
  onClose,
  placeholder,
  noResultsLabel,
  sectionProducts,
  sectionNews,
  seeAllLabel,
  products,
  releases,
}: SiteSearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const results = useMemo<{ products: SearchResult[]; news: SearchResult[] }>(() => {
    if (!query.trim()) return { products: [], news: [] }
    const q = query.trim()
    const ql = q.toLowerCase()

    const matchProduct = (p: Product) =>
      p.name.includes(q) ||
      p.spec.includes(q) ||
      p.name.toLowerCase().includes(ql) ||
      p.spec.toLowerCase().includes(ql)

    const matchRelease = (r: ArticlePageContent) =>
      r.title.includes(q) ||
      r.title.toLowerCase().includes(ql)

    return {
      products: products
        .filter(matchProduct)
        .slice(0, 6)
        .map((p) => ({
          type: 'product' as const,
          slug: p.slug,
          title: p.name,
          meta: p.spec,
          image: p.image,
        })),
      news: releases
        .filter(matchRelease)
        .slice(0, 6)
        .map((r) => ({
          type: 'news' as const,
          slug: r.slug,
          title: r.title,
          meta: r.category ?? '',
          image: r.heroImage,
        })),
    }
  }, [query, products, releases])

  const hasResults = results.products.length > 0 || results.news.length > 0

  const handleEnter = () => {
    if (results.products.length > 0) {
      const first = results.products[0]
      window.location.href = localizedHref(lang, `/products/${first.slug}`)
    } else if (results.news.length > 0) {
      const first = results.news[0]
      window.location.href = localizedHref(lang, `/newsroom/${first.slug}`)
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search
          className="absolute left-3 size-4 text-muted-foreground pointer-events-none"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
          placeholder={placeholder}
          className="h-9 w-full rounded-none border-b border-border bg-background pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="absolute right-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>

      {isOpen && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 z-50 mt-0 bg-background shadow-md">
          {!hasResults ? (
            <p className="px-4 py-6 text-center text-sm text-muted-foreground">
              {noResultsLabel}
            </p>
          ) : (
            <div className="flex max-h-[60vh] flex-col overflow-y-auto sm:max-h-[50vh] md:flex-row">
              {results.products.length > 0 && (
                <section className="min-w-0 flex-1 border-b border-border md:border-b-0 md:border-r">
                  <div className="px-4 py-2 border-b border-border md:border-b-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {sectionProducts}
                    </span>
                  </div>
                  {results.products.map((item) => (
                    <Link
                      key={item.slug}
                      href={localizedHref(lang, `/products/${item.slug}`)}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-muted/50"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-10 w-14 flex-shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {item.meta}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-border px-4 py-2">
                    <Link
                      href={localizedHref(lang, '/products')}
                      onClick={onClose}
                      className="text-xs text-primary hover:underline"
                    >
                      {seeAllLabel} →
                    </Link>
                  </div>
                </section>
              )}

              {results.news.length > 0 && (
                <section className="min-w-0 flex-1">
                  <div className="px-4 py-2 border-b border-border md:border-b-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {sectionNews}
                    </span>
                  </div>
                  {results.news.map((item) => (
                    <Link
                      key={item.slug}
                      href={localizedHref(lang, `/newsroom/${item.slug}`)}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-muted/50"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-10 w-14 flex-shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="line-clamp-1 text-sm font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.meta}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-border px-4 py-2">
                    <Link
                      href={localizedHref(lang, '/newsroom')}
                      onClick={onClose}
                      className="text-xs text-primary hover:underline"
                    >
                      {seeAllLabel} →
                    </Link>
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
