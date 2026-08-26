import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export default function AboutPage() {
  const { breadcrumb, about } = getContent('zh')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/about" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="zh"
          items={[{ label: breadcrumb.home, href: '/' }, { label: '关于我们' }]}
        />
        <ArticlePage lang="zh" content={about} />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
