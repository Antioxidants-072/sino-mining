import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import type { Lang } from '@/lib/content'

export function BreadcrumbNav({
  items,
  lang = 'zh',
}: {
  items: { label: string; href?: string }[]
  lang?: Lang
}) {
  return (
    <nav
      aria-label={lang === 'zh' ? '面包屑导航' : 'Breadcrumb'}
      className="mx-auto flex max-w-[1600px] items-center gap-2 px-6 py-5 text-sm text-muted-foreground lg:px-10"
    >
      <ArrowRight className="size-3.5 text-highlight" aria-hidden="true" />
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-highlight">{item.label}</span>
          )}
          {index !== items.length - 1 && (
            <ChevronRight className="size-3.5" aria-hidden="true" />
          )}
        </span>
      ))}
    </nav>
  )
}
