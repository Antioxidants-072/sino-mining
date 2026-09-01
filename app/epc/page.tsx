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
      description: '基于矿石性质与场地条件，完成工艺流程与总平面设计，确定选矿方案与设备选型。',
      summary: '依托专业科研实验室与顶尖高校合作，提供从矿石试验到选矿厂整体工程的精准定制设计。',
      features: [
        { title: '选矿试验与方案制定', description: '结合矿石性质实验室与现场地理条件考察，科学选定工艺路线，最大化矿石回收率与经济效益。' },
        { title: '三维仿真与数字化设计', description: '采用 CAD、SolidWorks 及 ANSYS 有限元分析系统，完成高宽容度的工艺流程与总平面数字化设计。' },
        { title: '精准设备选型', description: '结合 70+ 项授权专利技术，匹配最佳处理能力与低能耗的设备配置。' },
      ],
      image: '/images/mining-plant.png',
    },
    {
      number: '步骤 2',
      name: '采购',
      subtitle: '设备制造与材料统筹',
      description: '自有工厂制造核心设备，统筹全球供应链，严格把控交期与质量标准。',
      summary: '中能矿机具备强大设备自主制造能力。依托 110,000 m² 现代制造基地与 160+ 台套高精加工设备，专注核心选矿装备的自主研发与高质量生产。',
      features: [
        { title: '自有工厂高精制造', description: '拥有数控车床、数控等离子切割机、自动埋弧焊及铸造/喷砂车间，实现浮选机、浓缩机等核心装备的 100% 自主可控生产。' },
        { title: '全球高标准供应链', description: '统筹优质配套零部件供应链，严格把控交期，确保整套产线的交钥匙交付能力。' },
        { title: '严苛质量控制体系', description: '引入动静平衡仪、超声波及磁粉探伤仪等精密检测手段，全流程执行 ISO9001 质量管理体系。' },
      ],
      image: '/images/hero-flotation-workshop.png',
    },
    {
      number: '步骤 3',
      name: '施工',
      subtitle: '现场安装与调试',
      description: '专业工程团队驻场施工，完成设备安装、单机调试与系统联动试车。',
      summary: '覆盖现场安装、调试与生产线建设，确保工程安全有序推进。',
      features: [],
      image: '/images/aggregates-production.png',
    },
    {
      number: '步骤 4',
      name: '管理',
      subtitle: '运营监测与持续优化',
      description: '提供人员培训与运营支持，长期跟踪产线表现，持续优化生产指标。',
      summary: '实施全过程管理，帮助客户实现长期稳定的生产目标。',
      features: [],
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment
  const [activeStep, setActiveStep] = useState(steps[0])
  const [activeStepIndex, setActiveStepIndex] = useState(0)

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
            onActiveStepChange={(step, index) => {
              setActiveStep(step)
              setActiveStepIndex(index)
            }}
          />
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden="true" />
            {mining.lastUpdated}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-center text-xl leading-relaxed text-foreground/85">
            {activeStep.summary}
          </p>
          {activeStep.features.length > 0 ? (
            <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-3">
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
          <div className="mt-6 flex justify-center">
            <Link
              href="#"
              className="text-sm font-semibold text-accent hover:text-accent/80"
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
        </section> : null}
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
