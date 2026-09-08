import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PartnersPage } from '@/components/partners-page'

export const metadata: Metadata = { title: 'Socios | SINOMINING', description: 'Red de socios de minería y metalurgia de SINOMINING en todo el mundo.' }

export default function PartnersPageEs() {
  return <PartnersPage lang="es" />
}
