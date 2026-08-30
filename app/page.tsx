import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { AboutTeaser } from '@/components/about-teaser'
import { BusinessGrid } from '@/components/business-grid'
import { ContactCTA } from '@/components/contact-cta'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en" />
      <main className="flex-1">
        <HeroSection lang="zh" />
        <AboutTeaser lang="zh" />
        <BusinessGrid lang="zh" />
        <ContactCTA lang="zh" />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
