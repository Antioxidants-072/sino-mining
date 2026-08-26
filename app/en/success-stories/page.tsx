import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Success Stories - AnHui Sinomining Machinery',
  description: 'Explore AnHui Sinomining Machinery customer success stories across mining and mineral processing projects worldwide.',
}

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/en/success-stories" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Success Stories
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A selection of AnHui Sinomining Machinery projects delivered at mines and mineral processing plants worldwide, highlighting our capabilities across crushing, screening, grinding and beneficiation.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">Project delivery capabilities</h2>
          <p className="mt-4 text-muted-foreground">
            From process design and core equipment supply to commissioning and aftermarket support, AnHui Sinomining Machinery delivers pit-to-port solutions that help customers lift throughput and lower operating costs.
          </p>
        </section>
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
