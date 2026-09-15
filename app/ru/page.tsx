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
  title: 'SINOMINING | EPC-решения для обогащения полезных ископаемых',
  description:
    'Anhui Sinomining Machinery предлагает комплексные решения горного оборудования для клиентов по всему миру.',
}

export default function HomeRu() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="ru" altHref="/ru" />
      <main className="flex-1">
        <HeroSection lang="ru" />
        <QuickContactBar lang="ru" />
        <FlotationShowcase lang="ru" />
        <BusinessGrid lang="ru" />
        <AboutTeaser lang="ru" />
        <ContactCTA lang="ru" />
      </main>
      <SiteFooter lang="ru" />
    </div>
  )
}
