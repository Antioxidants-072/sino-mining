'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { EpcProcess, type EpcStep } from '@/components/epc-process'
import { getContent } from '@/lib/content'

export default function EPCPage() {
  const { breadcrumb, mining } = getContent('zh')

  const steps: EpcStep[] = [
    {
      number: '步骤 1',
      name: '工程',
      subtitle: '矿山工艺与总体设计',
      description: '基于矿石性质与场地条件,完成工艺流程与总平面设计,确定选矿方案与设备选型。',
      image: '/images/mining-plant.png',
    },
    {
      number: '步骤 2',
      name: '采购',
      subtitle: '设备制造与材料统筹',
      description: '自有工厂制造核心设备,统筹全球供应链,严格把控交期与质量标准。',
      image: '/images/hero-flotation-workshop.png',
    },
    {
      number: '步骤 3',
      name: '施工',
      subtitle: '现场安装与调试',
      description: '专业工程团队驻场施工,完成设备安装、单机调试与系统联动试车。',
      image: '/images/aggregates-production.png',
    },
    {
      number: '步骤 4',
      name: '管理',
      subtitle: '运营监测与持续优化',
      description: '提供人员培训与运营支持,长期跟踪产线表现,持续优化生产指标。',
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment
  const [activeDescription, setActiveDescription] = useState(steps[0].description)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/epc" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="zh"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: breadcrumb.mining },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <EpcProcess
            steps={steps}
            ariaLabel="EPCM项目步骤"
            onActiveStepChange={(step) => setActiveDescription(step.description)}
          />
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden="true" />
            {mining.lastUpdated}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-center text-lg leading-relaxed text-foreground/85">
            {activeDescription}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="#"
              className="text-sm font-semibold text-accent hover:text-accent/80"
            >
              {currentSection.contactExperts}
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            {currentSection.recommendedHeading}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {currentSection.products.map((product) => (
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
                    href={`/products/${product.slug}`}
                    className="cta-swap inline-flex h-9 w-fit items-center justify-center rounded-none bg-primary px-6 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {currentSection.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
