import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export function generateStaticParams() {
  const { pressReleaseDetails } = getContent('en')
  return pressReleaseDetails.map((item) => ({ slug: item.slug }))
}

export default async function PressReleasePageEn({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { breadcrumb, pressReleaseDetails } = getContent('en')
  const detail = pressReleaseDetails.find((item) => item.slug === slug)

  if (!detail) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref={`/newsroom/${slug}`} />
      <main className="flex-1">
        <BreadcrumbNav
          lang="en"
          items={[
            { label: breadcrumb.home, href: '/en' },
            { label: breadcrumb.newsroom, href: '/en/newsroom' },
            { label: detail.category ?? breadcrumb.newsroom },
          ]}
        />
        <ArticlePage lang="en" content={detail} />
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
