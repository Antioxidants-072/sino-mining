import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SolutionsExplorer } from '@/components/solutions-explorer'
import { ContactCTA } from '@/components/contact-cta'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'

export const metadata: Metadata = { title: 'Решения | SINOMINING', description: 'Найдите оптимальный путь обогащения для вашего типа руды.' }

export default function SolutionsPageRu() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="ru" altHref="/solutions" />
      <main className="flex-1">
        <BreadcrumbNav lang="ru" items={[{ label: 'Главная', href: '/' }, { label: 'Решения' }]} />
        <section className="mx-auto max-w-[1600px] px-6 pb-10 pt-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Интеллектуальное обогащение</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-bold tracking-tight text-foreground text-balance lg:text-7xl">
            Найдите оптимальный путь обогащения для вашего типа руды.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            От свойств руды до целевого концентрата мы разрабатываем проверенные и эффективные решения для различных типов руды.
          </p>
        </section>
        <SolutionsExplorer lang="ru" />
        <ContactCTA lang="ru" />
      </main>
      <SiteFooter lang="ru" />
    </div>
  )
}
