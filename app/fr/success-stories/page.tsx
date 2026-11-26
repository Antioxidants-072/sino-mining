import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Réalisations - SINOMINING',
  description: 'Découvrez les projets réalisés par SINOMINING dans des mines et usines de traitement des minéraux à travers le monde.',
}

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/success-stories" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Réalisations
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Sélection de projets livrés par SINOMINING dans des mines et usines de traitement des minéraux dans le monde entier, démontrant nos compétences en concassage, criblage, broyage et valorisation intégrale des minerais.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">Capacité de réalisation de projets</h2>
          <p className="mt-4 text-muted-foreground">
            De la conception des procédés et la fourniture des équipements principaux jusqu’à la mise en service et au service après-vente, SINOMINING fournit des solutions complètes de la mine au port pour accroître le débit et réduire les coûts d’exploitation.
          </p>
        </section>
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
