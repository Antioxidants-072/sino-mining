import Link from 'next/link'
import { getContent, localizedHref, type Lang } from '@/lib/content'

// Footer link labels that map to real routes already built in the site.
// Any label not listed here falls back to "#" until its page exists.
const FOOTER_LINK_ROUTES: Record<string, string> = {
  // Chinese
  关于我们: '/about',
  联系销售: '/contact',
  全球网点: 'https://maps.app.goo.gl/dDP9fJ4TMrK9t1jGA',
  合作伙伴: '/partners',
  解决方案: '/solutions',
  选矿EPC: '/epc',
  选矿设备: '/products',
  // English
  'About us': '/about',
  'Contact sales': '/contact',
  'Contact Sales': '/contact',
  Locations: 'https://maps.app.goo.gl/dDP9fJ4TMrK9t1jGA',
  Partners: '/partners',
  Solutions: '/solutions',
  'Mineral processing EPC': '/epc',
  'Mineral Processing EPC': '/epc',
  'Mineral processing equipment': '/products',
  'Mineral Processing Equipment': '/products',
  // Spanish
  'Sobre nosotros': '/about',
  'Contactar ventas': '/contact',
  Ubicaciones: 'https://maps.app.goo.gl/dDP9fJ4TMrK9t1jGA',
  Socios: '/partners',
  Soluciones: '/solutions',
  'EPCM de procesamiento mineral': '/epc',
  'Equipos de procesamiento mineral': '/products',
  // Russian
  'О нас': '/about',
  'Партнёры': '/partners',
  'Решения': '/solutions',
  'EPCM обогащения': '/epc',
  'Оборудование для обогащения': '/products',
  'Офисы': 'https://maps.app.goo.gl/dDP9fJ4TMrK9t1jGA',
  'Связаться с продажами': '/contact',
} as const

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
                  const isExternal = route?.startsWith('https://')
                  return (
                    <li key={link}>
                      <Link
                        href={route ? (isExternal ? route : localizedHref(lang, route)) : '#'}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
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
