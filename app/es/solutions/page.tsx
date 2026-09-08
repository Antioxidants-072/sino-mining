import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SolutionsExplorer } from '@/components/solutions-explorer'
import { ContactCTA } from '@/components/contact-cta'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'

export const metadata: Metadata = { title: 'Soluciones | SINOMINING', description: 'Encuentre la ruta de proceso más clara según el tipo de mineral.' }

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/solutions" />
      <main className="flex-1">
        <BreadcrumbNav lang="es" items={[{ label: 'Inicio', href: '/' }, { label: 'Soluciones' }]} />
        <section className="mx-auto max-w-[1600px] px-6 pb-10 pt-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Procesamiento mineral inteligente</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-bold tracking-tight text-foreground text-balance lg:text-7xl">
            Encuentre una ruta de proceso más clara según el tipo de mineral.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Desde las propiedades del mineral hasta el concentrado objetivo, construimos soluciones de procesamiento de mineral verificables y viables para diferentes tipos de mineral.
          </p>
        </section>
        <SolutionsExplorer lang="es" />
        <ContactCTA lang="es" />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
