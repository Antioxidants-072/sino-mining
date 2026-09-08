import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export const metadata: Metadata = { title: 'О нас | SINOMINING', description: 'Два десятилетия экспертизы в горном оборудовании, Anhui Sinomining Machinery.' }

export default function AboutRu() {
  const { breadcrumb, about } = getContent('ru')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="ru" altHref="/about" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="ru"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: 'О нас' },
          ]}
        />
        <ArticlePage lang="ru" content={about} />
      </main>
      <SiteFooter lang="ru" />
    </div>
  )
}
