import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactCTA } from '@/components/contact-cta'

export const metadata: Metadata = { title: 'Digitalización | SINOMINING', description: 'Soluciones de digitalizacion para la industria minera.' }

export default function DigitalizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/en/digitalization" />
      <main className="flex-1">
        <BreadcrumbNav lang="es" items={[{ label: 'Inicio', href: '/' }, { label: 'Digitalización' }]} />
        <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Innovación digital</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Soluciones de digitalizacion
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore nuestras soluciones de digitalizacion para optimizar sus operaciones mineras.
          </p>
        </section>
        <ContactCTA lang="es" />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
