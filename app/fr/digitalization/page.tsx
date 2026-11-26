import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactCTA } from '@/components/contact-cta'

export const metadata: Metadata = { title: 'Numérisation | SINOMINING', description: 'Solutions de numérisation pour l’industrie minière.' }

export default function DigitalizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/en/digitalization" />
      <main className="flex-1">
        <BreadcrumbNav lang="fr" items={[{ label: 'Accueil', href: '/fr' }, { label: 'Numérisation' }]} />
        <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Innovation numérique</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Solutions de numérisation
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Découvrez nos solutions de numérisation pour optimiser vos opérations minières.
          </p>
        </section>
        <ContactCTA lang="fr" />
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
