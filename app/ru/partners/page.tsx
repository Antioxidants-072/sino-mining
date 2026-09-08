import type { Metadata } from 'next'
import { PartnersPage } from '@/components/partners-page'

export const metadata: Metadata = { title: 'Партнёры | SINOMINING', description: 'Глобальная сеть партнёров Sinomining Machinery.' }

export default function PartnersRu() {
  return <PartnersPage lang="ru" />
}
