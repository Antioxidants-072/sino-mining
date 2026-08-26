import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export function generateStaticParams() {
  const { pressReleaseDetails } = getContent('zh')
  return pressReleaseDetails.map((item) => ({ slug: item.slug }))
}

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { breadcrumb, pressReleaseDetails } = getContent('zh')
  const detail = pressReleaseDetails.find((item) => item.slug === slug)

  if (!detail) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref={`/en/newsroom/${slug}`} />
      <main className="flex-1">
        <BreadcrumbNav
          lang="zh"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: breadcrumb.newsroom, href: '/newsroom' },
            { label: detail.category ?? breadcrumb.newsroom },
          ]}
        />
        <ArticlePage lang="zh" content={detail} />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
