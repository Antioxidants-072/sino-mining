import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { AboutTeaser } from '@/components/about-teaser'
import { BusinessGrid } from '@/components/business-grid'
import { ContactCTA } from '@/components/contact-cta'

export const metadata: Metadata = {
  title:
    'AnHui Sinomining Machinery | Mining and Aggregates Equipment Solutions',
  description:
    'AnHui Sinomining Machinery delivers pit-to-port crushing, screening, wear parts and field service solutions for aggregates and mining customers worldwide.',
}

export default function EnglishHome() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/" />
      <main className="flex-1">
        <HeroSection lang="en" />
        <AboutTeaser lang="en" />
        <BusinessGrid lang="en" />
        <ContactCTA lang="en" />
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
