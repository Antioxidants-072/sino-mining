import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactPage } from '@/components/contact-page'
import { getContent } from '@/lib/content'

export default function ContactRouteEn() {
  const { breadcrumb, contactPage } = getContent('en')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/contact" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="en"
          items={[
            { label: breadcrumb.home, href: '/en' },
            { label: 'Contact us' },
          ]}
        />
        <ContactPage content={contactPage} />
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
