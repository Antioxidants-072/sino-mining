import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export default function AboutPageEn() {
  const { breadcrumb, about } = getContent('en')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/about" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="en"
          items={[
            { label: breadcrumb.home, href: '/en' },
            { label: 'About us' },
          ]}
        />
        <ArticlePage lang="en" content={about} />
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
