'use client'

import Link from 'next/link'
import { Globe, Search } from 'lucide-react'
import { getContent, localizedHref, type Lang } from '@/lib/content'
import { SiteSearch } from './site-search'
import { useState } from 'react'

export function SiteHeader({
  lang,
  altHref,
}: {
  lang: Lang
  altHref: string
}) {
  const content = getContent(lang)
  const { header, brandName } = content
  const homeHref = lang === 'zh' ? '/' : '/en'

  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility row */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <Link
            href={homeHref}
            className="font-heading text-2xl font-bold tracking-tight text-foreground"
          >
            {brandName}
          </Link>
          <nav
            aria-label={lang === 'zh' ? '辅助导航' : 'Utility navigation'}
            className="hidden h-full items-stretch text-base text-muted-foreground lg:flex"
          >
            {header.utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={localizedHref(lang, link.href)}
                className="flex h-full items-center px-4 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label={header.searchLabel}
              onClick={() => setSearchOpen((v) => !v)}
              className="flex items-center justify-center p-1 text-foreground/70 transition-colors hover:text-foreground"
            >
              {searchOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <Search className="size-5" aria-hidden="true" />
              )}
            </button>
            <Link
              href={altHref}
              aria-label={header.langLabel}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              <Globe className="size-5 flex-shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{header.langSwitchLabel}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar — drops below utility row, full content-width */}
      {searchOpen && (
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1600px] px-4 pb-3 pt-2 sm:px-6 lg:px-10">
            <SiteSearch
              lang={lang}
              isOpen={searchOpen}
              onClose={() => setSearchOpen(false)}
              placeholder={header.searchPlaceholder}
              noResultsLabel={header.searchNoResults}
              sectionProducts={header.searchSectionProducts}
              sectionNews={header.searchSectionNews}
              seeAllLabel={header.searchSeeAll}
              products={content.productsPage.products}
              releases={content.pressReleaseDetails}
            />
          </div>
        </div>
      )}

      {/* Product row */}
      <div className="bg-secondary">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <nav
            aria-label={lang === 'zh' ? '产品导航' : 'Product navigation'}
            className="flex h-full items-stretch gap-0 overflow-x-auto text-base font-medium text-secondary-foreground/80"
          >
            {header.productLinks.map((link) => (
              <Link
                key={link.label}
                href={localizedHref(lang, link.href)}
                className="flex h-full items-center whitespace-nowrap px-4 first:pl-0 transition-colors hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
