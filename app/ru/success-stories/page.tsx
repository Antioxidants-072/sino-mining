import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Истории успеха - SINOMINING',
  description: 'Успешные проекты Sinomining Machinery по всему миру.',
}

export default function SuccessStoriesRu() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="ru" altHref="/success-stories" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Истории успеха
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Избранные проекты Sinomining в шахтах и обогатительных фабриках по всему миру, демонстрирующие наши возможности в дроблении, грохочении, измельчении и комплексном обогащении.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">Возможности реализации проектов</h2>
          <p className="mt-4 text-muted-foreground">
            От проектирования процессов, поставки основного оборудования до пуска и послепродажного обслуживания, Sinomining предоставляет комплексные решения от шахты до порта.
          </p>
        </section>
      </main>
      <SiteFooter lang="ru" />
    </div>
  )
}
