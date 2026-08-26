import Link from 'next/link'
import { Globe, Search } from 'lucide-react'
import { getContent, localizedHref, type Lang } from '@/lib/content'

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
            className="hidden h-full items-stretch text-sm text-muted-foreground lg:flex"
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
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label={header.searchLabel}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <Search className="size-5" aria-hidden="true" />
            </button>
            <Link
              href={altHref}
              aria-label={header.langLabel}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              <Globe className="size-5" aria-hidden="true" />
              <span>{header.langSwitchLabel}</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Product row */}
      <div className="bg-secondary">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <nav
            aria-label={lang === 'zh' ? '产品导航' : 'Product navigation'}
            className="flex h-full items-stretch gap-0 overflow-x-auto text-sm font-medium text-secondary-foreground/80"
          >
            {header.productLinks.map((link) => (
              <Link
                key={link.label}
                href={localizedHref(lang, link.href)}
                className="flex h-full items-center whitespace-nowrap px-4 transition-colors hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
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
