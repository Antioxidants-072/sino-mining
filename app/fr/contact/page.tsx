import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactPage } from '@/components/contact-page'
import { getContent } from '@/lib/content'

export default function ContactRouteFr() {
  const { breadcrumb, contactPage } = getContent('fr')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/contact" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="fr"
          items={[
            { label: breadcrumb.home, href: '/fr' },
            { label: 'Nous contacter' },
          ]}
        />
        <ContactPage content={contactPage} />
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
