import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactPage } from '@/components/contact-page'
import { getContent } from '@/lib/content'

export default function ContactRoute() {
  const { breadcrumb, contactPage } = getContent('zh')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/contact" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="zh"
          items={[{ label: breadcrumb.home, href: '/' }, { label: '联系我们' }]}
        />
        <ContactPage content={contactPage} />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
