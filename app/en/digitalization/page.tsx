import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Digitalization - AnHui Sinomining Machinery',
  description: 'Explore AnHui Sinomining Machinery digitalization solutions for intelligent mining upgrades.',
}

export default function DigitalizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref="/en/digitalization" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Digitalization
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Enhance mining operational efficiency, reduce costs, and achieve intelligent management through digital technologies.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">Digital Solutions</h2>
          <p className="mt-4 text-muted-foreground">
            AnHui Sinomining Machinery is committed to providing comprehensive digital solutions for customers, including remote equipment monitoring,
            intelligent operations, and data analytics services, helping mining enterprises achieve digital transformation.
          </p>
        </section>
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
