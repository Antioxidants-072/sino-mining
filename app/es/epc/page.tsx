'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { EpcProcess, type EpcStep } from '@/components/epc-process'
import { getContent } from '@/lib/content'

export default function EPCPageEs() {
  const { breadcrumb, mining } = getContent('es')

  const steps: EpcStep[] = [
    {
      number: 'Paso 1',
      name: 'Ingenieria',
      subtitle: 'Diseno de proceso y planta minera',
      description: 'Definimos el flujo de proceso y el diseno general de la planta segun las propiedades del mineral y las condiciones del sitio.',
      summary: 'Respaldado por laboratorios de investigacion profesionales, ofrecemos disenos de ingenieria personalizados desde pruebas de mineral hasta proyectos completos de plantas de procesamiento.',
      features: [
        { title: 'Pruebas de mineral y diseno de esquema', description: 'Basandonos en las propiedades del mineral, seleccionamos cientificamente la ruta del proceso para maximizar el rendimiento y el valor economico.' },
        { title: 'Diseno digital', description: 'Utilizamos CAD, SolidWorks y analisis de elementos finitos ANSYS para completar disenos digitales altamente adaptables.' },
        { title: 'Simulacion y seleccion precisa de equipos', description: 'Usamos simulacion 3D y mas de 70 tecnologias patentadas autorizadas para igualar la capacidad optima con configuraciones de bajo consumo.' },
      ],
      image: '/images/mining-plant.png',
    },
    {
      number: 'Paso 2',
      name: 'Fabricacion',
      subtitle: 'Fabricacion de equipos principales y control de calidad',
      description: 'Los equipos principales se fabrican internamente mientras coordinamos el abastecimiento global, manteniendo los cronogramas y estandares de calidad.',
      summary: 'Sinomining posee robustas capacidades de fabricacion interna. Respaldados por una base de fabricacion moderna de 120,000 m2 y mas de 160 equipos de alta precision, nos enfocamos en la investigacion independiente y produccion de alta calidad de equipos principales de procesamiento mineral.',
      features: [
        { title: 'Fabricacion de precision interna', description: 'Con tornos CNC, maquinas de corte laser, soldadura automatica submerged arc, una planta de fundicion y una planta de materiales de caucho, logramos produccion 100% autocontrolada de equipos principales.' },
        { title: 'Cadena de suministro global de alto estandar', description: 'Coordinamos cadenas de suministro auxiliares de alta calidad con gestion estricta de cronogramas, asegurando capacidades confiables de entrega llave en mano.' },
        { title: 'Aseguramiento estricto de calidad', description: 'Implementamos dispositivos de equilibrio dinamico y estatico, pruebas ultrasonicas, detectores de defectos por particulas magneticas, ejecutando el sistema de gestion de calidad ISO9001.' },
      ],
      image: '/images/step2-manufacturing.jpg',
    },
    {
      number: 'Paso 3',
      name: 'Construccion',
      subtitle: 'Instalacion en sitio y puesta en marcha',
      description: 'Desplegando equipos de ingenieria experimentados directamente en el sitio para supervisar la instalacion fisica, pruebas sin carga y comisionamiento con carga completa.',
      summary: 'Desplegando equipos de ingenieria profesionales experimentados directamente en el sitio para completar eficientemente la instalacion de equipos, comisionamiento de maquinas individuales y pruebas de operacion integradas de linea completa.',
      features: [
        { title: 'Orientacion profesional en sitio', description: 'Guiamos la instalacion y comisionamiento, aprovechando mas de 20 anos de experiencia en construccion en campo y mas de 400 proyectos globales para garantizar un trabajo seguro y estandarizado.' },
        { title: 'Instalacion y pruebas de precision', description: 'Calibramos rigurosamente las estructuras mecanicas, sistemas de transmision y nodos de control automatico, seguidos de pruebas de funcionamiento de maquinas individuales.' },
        { title: 'Prueba integrada sistematica', description: 'Ejecutamos comisionamiento automatico de todo el proceso para garantizar la integracion dinamica y la capacidad objetivo estable para toda la linea de procesamiento mineral.' },
      ],
      image: '/images/step3-flotation-line.png',
    },
    {
      number: 'Paso 4',
      name: 'Gestion',
      subtitle: 'Operaciones y optimizacion continua',
      description: 'Entregamos capacitacion integral de la fuerza laboral y seguimiento operativo a largo plazo para optimizar los indicadores de produccion y garantizar la capacidad sostenible.',
      summary: 'Entregamos capacitacion integral de la fuerza laboral y seguimiento operativo a largo plazo para optimizar los indicadores de produccion y garantizar la capacidad sostenible.',
      features: [
        { title: 'Capacitacion personalizada de la fuerza laboral', description: 'Proporcionamos capacitacion integrada que cubre teoria, operaciones practicas y mantenimiento de equipos para equipos locales de clientes, permitiendoles construir rapidamente capacidades autonomas de operacion y mantenimiento.' },
        { title: 'Seguimiento de rendimiento y optimizacion', description: 'Monitoreamos dinamicamente el ahorro de energia, reduccion de consumo y tasas de recuperacion, maximizando el valor de la linea a traves de actualizaciones de automatizacion y ajuste de procesos.' },
        { title: 'Soporte posventa rapido global', description: 'Confiamos en una linea directa de respuesta 24 horas, centros de servicio nacionales y en el extranjero, e inventarios completos de repuestos para proporcionar soporte tecnico rapido para proyectos mineros en todo el mundo.' },
      ],
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment
  const recommendedProducts = [
    { slug: 'xcf-kyf-flotation-cell', name: 'Maquina de flotacion XCFII / KYFII', description: 'Maquina de flotacion por aire forzado para operaciones de rougher, scavenger y cleaner.', image: '/images/About_us.jpg' },
    { slug: 'bf-flotation-cell', name: 'Celda de flotacion BF', description: 'Celda de flotacion de aire forzado de gran capacidad para expandir la capacidad de la planta de procesamiento.', image: '/images/image.png' },
    { slug: 'linear-vibrating-screen', name: 'Criba vibratoria lineal', description: 'Bajo consumo de energia, alta eficiencia de cribado para desagüe, deslamado y clasificacion.', image: '/images/linear-vibrating-screen.jpg' },
  ]
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  useEffect(() => {
    const step = Number(new URLSearchParams(window.location.search).get('step'))
    if (Number.isInteger(step) && step >= 0 && step < steps.length) {
      setActiveStepIndex(step)
    }
  }, [steps.length])

  const activeStep = steps[activeStepIndex]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/en/epc" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="es"
          items={[
            { label: breadcrumb.home, href: '/es' },
            { label: breadcrumb.mining },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <EpcProcess
            steps={steps}
            ariaLabel="Pasos del proyecto EPCM"
            onActiveStepChange={(_, index) => {
              setActiveStepIndex(index)
            }}
          />
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden="true" />
            {mining.lastUpdated}
          </div>

          <p className="mx-auto mt-8 max-w-[77rem] text-balance text-center text-xl leading-relaxed text-foreground/85">
            {activeStep.summary}
          </p>
          {activeStep.features.length > 0 ? (
            <div className="mx-auto mt-8 grid max-w-[77rem] gap-14 sm:grid-cols-3">
              {activeStep.features.map((feature) => (
                <div key={feature.title} className="flex gap-3 text-left">
                  <span className="mt-1 text-accent" aria-hidden="true">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {activeStepIndex === 0 ? (
            <div className="mx-auto mt-8 max-w-5xl">
              <Image src="/images/angola.jpg" alt="Proyecto de tántalo y niobio de Angola" width={1920} height={1080} className="h-auto w-full object-cover" />
              <p className="mt-3 text-center text-sm text-muted-foreground">Proyecto de tántalo y niobio de Angola</p>
            </div>
          ) : null}
          {activeStepIndex === 2 ? (
            <div className="mx-auto mt-8 max-w-5xl">
              <Image src="/images/step3-site-commissioning.png" alt="Proyecto de cobre-plomo-zinc-azufre en la provincia de Qinghai a 4.700 m de altitud" width={1920} height={1080} className="h-auto w-full object-cover" />
              <p className="mt-3 text-center text-sm text-muted-foreground">Proyecto de cobre-plomo-zinc-azufre en la provincia de Qinghai a 4.700 m de altitud</p>
            </div>
          ) : null}
          <div className="mt-6 flex justify-center">
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {currentSection.contactExperts}
            </Link>
          </div>
        </section>

        {activeStepIndex === 1 ? <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            {currentSection.recommendedHeading}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {recommendedProducts.map((product) => (
              <div key={product.name} className="flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover scale-[1.15]"
                  />
                </div>
                <div className="cut-bl flex flex-1 flex-col justify-between gap-4 bg-secondary p-6 text-secondary-foreground">
                  <div>
                    <h3 className="font-heading text-xl font-bold">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/75">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={`/es/products/${product.slug}`}
                    className="cta-swap inline-flex h-9 w-fit items-center justify-center rounded-none bg-primary px-6 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {currentSection.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section> : null}
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
