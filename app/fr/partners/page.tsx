import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PartnersPage } from '@/components/partners-page'

export const metadata: Metadata = { title: 'Partenaires | SINOMINING', description: 'Réseau mondial de partenaires miniers et métallurgiques de SINOMINING.' }

export default function PartnersPageFr() {
  return <PartnersPage lang="fr" />
}
