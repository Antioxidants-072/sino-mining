import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'À propos de nous | SINOMINING',
  description: 'SINOMINING – Plus de 60 ans d’expérience dans la fabrication d’équipements de traitement des minéraux.',
}

export default function AboutPage() {
  const { breadcrumb, about } = getContent('fr')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/about" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="fr"
          items={[
            { label: breadcrumb.home, href: '/fr' },
            { label: 'À propos de nous' },
          ]}
        />
        <ArticlePage lang="fr" content={about} />
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
