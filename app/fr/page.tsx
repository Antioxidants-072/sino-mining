import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { FlotationShowcase } from '@/components/flotation-showcase'
import { AboutTeaser } from '@/components/about-teaser'
import { BusinessGrid } from '@/components/business-grid'
import { ContactCTA } from '@/components/contact-cta'
import { QuickContactBar } from '@/components/quick-contact-bar'

export const metadata: Metadata = {
  title:
    'AnHui Sinomining Machinery | Solutions EPC de Traitement des Minéraux',
  description:
    'AnHui Sinomining Machinery propose des solutions complètes d’équipements de concassage, de criblage, de pièces d’usure et de service sur site pour les clients du secteur des granulats et de l’exploitation minière dans le monde entier.',
}

export default function FrenchHome() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/" />
      <main className="flex-1">
        <HeroSection lang="fr" />
        <QuickContactBar lang="fr" />
        <FlotationShowcase lang="fr" />
        <BusinessGrid lang="fr" />
        <AboutTeaser lang="fr" />
        <ContactCTA lang="fr" />
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
