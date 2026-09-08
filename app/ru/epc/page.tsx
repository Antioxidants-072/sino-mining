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

export default function EPCPageRu() {
  const { breadcrumb, mining } = getContent('ru')

  const steps: EpcStep[] = [
    {
      number: 'Шаг 1',
      name: 'Инжиниринг',
      subtitle: 'Проектирование процесса и шахты',
      description: 'Мы определяем технологическую схему и общее проектирование фабрики.',
      summary: 'Мы предлагаем индивидуальные инженерные решения от испытаний руды до полных проектов.',
      features: [
        { title: 'Испытания руды и проектирование схемы', description: 'На основе свойств руды мы научно выбираем технологический путь.' },
        { title: 'Цифровое проектирование', description: 'Используем CAD, SolidWorks и ANSYS для цифрового проектирования.' },
        { title: 'Моделирование и подбор оборудования', description: 'Используем 3D моделирование и более 70 патентов.' },
      ],
      image: '/images/mining-plant.png',
    },
    {
      number: 'Шаг 2',
      name: 'Производство',
      subtitle: 'Производство основного оборудования',
      description: 'Основное оборудование производится на собственных мощностях.',
      summary: 'Sinomining имеет современную производственную базу 120 000 м² и более 160 единиц высокоточного оборудования.',
      features: [
        { title: 'Прецизионное производство', description: 'Станки с ЧПУ, лазерная резка, автоматическая сварка.' },
        { title: 'Глобальная цепочка поставок', description: 'Координируем поставки с строгим управлением сроками.' },
        { title: 'Строгий контроль качества', description: 'ISO9001 система менеджмента качества.' },
      ],
      image: '/images/step2-manufacturing.jpg',
    },
    {
      number: 'Шаг 3',
      name: 'Строительство',
      subtitle: 'Монтаж на месте и пуск',
      description: 'Опытные инженеры на площадке для монтажа и пуска.',
      summary: 'Профессиональные инженеры завершают монтаж, пуск и интегрированные испытания.',
      features: [
        { title: 'Профессиональное руководство', description: 'Более 20 лет опыта строительства и более 400 проектов.' },
        { title: 'Прецизионный монтаж', description: 'Калибровка механических конструкций и систем.' },
        { title: 'Систематические испытания', description: 'Автоматический пуск всего процесса.' },
      ],
      image: '/images/step3-flotation-line.png',
    },
    {
      number: 'Шаг 4',
      name: 'Управление',
      subtitle: 'Эксплуатация и оптимизация',
      description: 'Обучение персонала и долгосрочное сопровождение.',
      summary: 'Мы обеспечиваем обучение и долгосрочное сопровождение для оптимизации показателей.',
      features: [
        { title: 'Персонализированное обучение', description: 'Охватываем теорию, практику и обслуживание.' },
        { title: 'Мониторинг и оптимизация', description: 'Динамический мониторинг показателей.' },
        { title: 'Быстрая поддержка', description: '24/7 горячая линия и сервисные центры.' },
      ],
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment
  const recommendedProducts = [
    { slug: 'xcf-kyf-flotation-cell', name: 'Флотационная машина XCF/KYF', description: 'Для основной и перечистной флотации.', image: '/images/About_us.jpg' },
    { slug: 'bf-flotation-cell', name: 'Флотационная камера BF', description: 'Для расширения мощности фабрики.', image: '/images/image.png' },
    { slug: 'linear-vibrating-screen', name: 'Линейный виброгрохот', description: 'Низкое энергопотребление, высокая эффективность.', image: '/images/linear-vibrating-screen.jpg' },
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
      <SiteHeader lang="ru" altHref="/ru/epc" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="ru"
          items={[
            { label: breadcrumb.home, href: '/ru' },
            { label: breadcrumb.mining },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <EpcProcess
            steps={steps}
            ariaLabel="Шаги проекта EPCM"
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
              <Image src="/images/angola.jpg" alt="Проект тантала и ниобия в Анголе" width={1920} height={1080} className="h-auto w-full object-cover" />
              <p className="mt-3 text-center text-sm text-muted-foreground">Проект тантала и ниобия в Анголе</p>
            </div>
          ) : null}
          {activeStepIndex === 2 ? (
            <div className="mx-auto mt-8 max-w-5xl">
              <Image src="/images/step3-site-commissioning.png" alt="Медно-свинцово-цинково-серный проект в провинции Цинхай на высоте 4 700 м" width={1920} height={1080} className="h-auto w-full object-cover" />
              <p className="mt-3 text-center text-sm text-muted-foreground">Медно-свинцово-цинково-серный проект в провинции Цинхай на высоте 4 700 м</p>
            </div>
          ) : null}
          <div className="mt-6 flex justify-center">
            <Link
              href="/ru/contact"
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
                    href={`/ru/products/${product.slug}`}
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
      <SiteFooter lang="ru" />
    </div>
  )
}
