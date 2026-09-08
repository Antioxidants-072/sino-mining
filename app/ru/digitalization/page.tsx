import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactCTA } from '@/components/contact-cta'

export const metadata: Metadata = { title: 'Цифровизация | SINOMINING', description: 'Решения цифровизации для горной промышленности.' }

export default function DigitalizationRu() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="ru" altHref="/ru/digitalization" />
      <main className="flex-1">
        <BreadcrumbNav lang="ru" items={[{ label: 'Главная', href: '/' }, { label: 'Цифровизация' }]} />
        <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Цифровые инновации</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Решения цифровизации
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Изучите наши решения цифровизации для оптимизации горнодобывающих операций.
          </p>
        </section>
        <ContactCTA lang="ru" />
      </main>
      <SiteFooter lang="ru" />
    </div>
  )
}
