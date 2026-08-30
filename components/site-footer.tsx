import Link from 'next/link'
import { getContent, localizedHref, type Lang } from '@/lib/content'

// Footer link labels that map to real routes already built in the site.
// Any label not listed here falls back to "#" until its page exists.
const FOOTER_LINK_ROUTES: Record<string, string> = {
  关于我们: '/about',
  'About us': '/about',
  联系销售: '/contact',
  'Contact sales': '/contact',
  选矿EPC: '/epc',
  'Mineral processing EPC': '/en/epc',
  选矿设备: '/products',
  'Mineral processing equipment': '/products',
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const { brandName, footer } = getContent(lang)

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-heading text-xl font-bold tracking-tight">
              {brandName}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              {footer.description}
            </p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wide text-secondary-foreground/50">
                {col.title.toUpperCase()}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-secondary-foreground/80">
                {col.links.map((link) => {
                  const route = FOOTER_LINK_ROUTES[link]
                  return (
                    <li key={link}>
                      <Link
                        href={route ? localizedHref(lang, route) : '#'}
                        className="transition-colors hover:text-accent"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs text-secondary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary-foreground">
              {footer.privacy}
            </Link>
            <Link href="#" className="hover:text-secondary-foreground">
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
