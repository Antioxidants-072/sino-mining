import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ArticlePage } from '@/components/article-page'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sobre nosotros | SINOMINING',
  description: 'SINOMINING – Más de 60 años de experiencia en la fabricación de equipos de procesamiento mineral.',
}

export default function AboutPage() {
  const { breadcrumb, about } = getContent('es')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/about" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="es"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: 'Sobre nosotros' },
          ]}
        />
        <ArticlePage lang="es" content={about} />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
