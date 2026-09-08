import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Casos de éxito - SINOMINING',
  description: 'Descubra los proyectos entregados por SINOMINING en minas y plantas de procesamiento mineral en todo el mundo.',
}

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/success-stories" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Casos de éxito
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Selección de proyectos entregados por SINOMINING en minas y plantas de procesamiento mineral en todo el mundo, demostrando nuestra capacidad en trituración, cribado, molienda y procesamiento mineral integral.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">Capacidad de entrega de proyectos</h2>
          <p className="mt-4 text-muted-foreground">
            Desde el diseño de procesos, el suministro de equipos principales hasta la puesta en marcha y el servicio posventa, SINOMINING proporciona soluciones integrales desde la mina hasta el puerto para las minas y plantas de procesamiento de mineral de los clientes.
          </p>
        </section>
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
