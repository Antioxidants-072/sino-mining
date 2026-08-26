import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { BusinessGrid } from '@/components/business-grid'
import { LatestReleases } from '@/components/latest-releases'
import { ContactCTA } from '@/components/contact-cta'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en" />
      <main className="flex-1">
        <HeroSection lang="zh" />
        <BusinessGrid lang="zh" />
        <LatestReleases lang="zh" />
        <ContactCTA lang="zh" />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
