import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactPage } from '@/components/contact-page'
import { getContent } from '@/lib/content'

export const metadata: Metadata = { title: 'Свяжитесь с нами | SINOMINING', description: 'Свяжитесь с Sinomining для получения информации о продукции и услугах.' }

export default function ContactRu() {
  const { breadcrumb, contactPage } = getContent('ru')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="ru" altHref="/contact" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="ru"
          items={[
            { label: breadcrumb.home, href: '/ru' },
            { label: 'Свяжитесь с нами' },
          ]}
        />
        <ContactPage content={contactPage} />
      </main>
      <SiteFooter lang="ru" />
    </div>
  )
}
