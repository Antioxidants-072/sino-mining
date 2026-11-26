import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SolutionsExplorer } from '@/components/solutions-explorer'
import { ContactCTA } from '@/components/contact-cta'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'

export const metadata: Metadata = { title: 'Solutions | SINOMINING', description: 'Trouvez le schéma de procédé le plus adapté selon le type de minerai.' }

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/solutions" />
      <main className="flex-1">
        <BreadcrumbNav lang="fr" items={[{ label: 'Accueil', href: '/fr' }, { label: 'Solutions' }]} />
        <section className="mx-auto max-w-[1600px] px-6 pb-10 pt-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Traitement minéral intelligent</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-bold tracking-tight text-foreground text-balance lg:text-7xl">
            Une voie de procédé plus claire pour chaque minerai.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Des propriétés du minerai jusqu’au concentré cible, nous concevons des solutions de traitement des minéraux vérifiables et viables pour chaque type de minerai.
          </p>
        </section>
        <SolutionsExplorer lang="fr" />
        <ContactCTA lang="fr" />
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
