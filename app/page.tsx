import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { FlotationShowcase } from '@/components/flotation-showcase'
import { AboutTeaser } from '@/components/about-teaser'
import { BusinessGrid } from '@/components/business-grid'
import { ContactCTA } from '@/components/contact-cta'
import { QuickContactBar } from '@/components/quick-contact-bar'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en" />
      <main className="flex-1">
        <HeroSection lang="zh" />
        <QuickContactBar lang="zh" />
        <FlotationShowcase lang="zh" />
        <BusinessGrid lang="zh" />
        <AboutTeaser lang="zh" />
        <ContactCTA lang="zh" />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
