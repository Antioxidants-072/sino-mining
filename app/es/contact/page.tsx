import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactPage } from '@/components/contact-page'
import { getContent } from '@/lib/content'

export default function ContactRouteEs() {
  const { breadcrumb, contactPage } = getContent('es')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/contact" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="es"
          items={[
            { label: breadcrumb.home, href: '/es' },
            { label: 'Contactenos' },
          ]}
        />
        <ContactPage content={contactPage} />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
