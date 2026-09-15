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
    'AnHui Sinomining Machinery | Soluciones EPC de Procesamiento de Minerales',
  description:
    'AnHui Sinomining Machinery ofrece soluciones integrales de equipos de trituración, cribado, piezas de desgaste y servicio en campo para clientes de agregados y minería en todo el mundo.',
}

export default function SpanishHome() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/" />
      <main className="flex-1">
        <HeroSection lang="es" />
        <QuickContactBar lang="es" />
        <FlotationShowcase lang="es" />
        <BusinessGrid lang="es" />
        <AboutTeaser lang="es" />
        <ContactCTA lang="es" />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
