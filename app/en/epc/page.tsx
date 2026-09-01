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

export default function EnglishEPCPage() {
  const { breadcrumb, mining } = getContent('en')

  const steps: EpcStep[] = [
    {
      number: 'Step 1',
      name: 'Engineering',
      subtitle: 'Mine plant design & process flow',
      description:
        'We define the process flow and plant layout based on ore properties and site conditions, locking in the flowsheet and equipment selection.',
      summary: 'Providing precise, customized engineering solutions from ore testing to full metallurgical plant design, backed by advanced research labs and academic collaborations.',
      features: [
        { title: 'Mineral Testing & Scheme Design', description: 'Combine laboratory mineral characterization with site surveys to map process routes that maximize recovery and economic value.' },
        { title: '3D Modeling & Digital Engineering', description: 'Use CAD, SolidWorks and ANSYS to develop adaptable process flows and digital general layout designs.' },
        { title: 'Optimal Equipment Selection', description: 'Integrate 70+ authorized patented technologies to match capacity with low-energy equipment configurations.' },
      ],
      image: '/images/mining-plant.png',
    },
    {
      number: 'Step 2',
      name: 'Procurement',
      subtitle: 'Manufacturing & supply chain · Production workshop equipment',
      description:
        'Core equipment is manufactured in-house while we coordinate global sourcing, keeping delivery schedules and quality standards on track.',
      summary: 'Sinomining possesses robust in-house manufacturing capabilities. Backed by a 110,000 m² modern production facility and over 160 sets of high-precision processing equipment, we focus on the independent R&D and high-quality production of core mineral processing equipment.',
      features: [
        { title: 'In-House Precision Manufacturing', description: 'Equipped with CNC lathes, CNC plasma cutting machines, automatic submerged arc welding, and specialized casting/sandblasting workshops to achieve 100% self-controlled production of core equipment such as flotation machines and thickeners.' },
        { title: 'Global High-Standard Supply Chain', description: 'Coordinate high-quality auxiliary component supply chains with strict schedule management, ensuring reliable turnkey delivery capabilities for full processing lines.' },
        { title: 'Strict Quality Assurance', description: 'Implement dynamic and static balancing devices, ultrasonic testing, magnetic particle flaw detectors, and other precision testing equipment while fully executing the ISO9001 quality management system across the entire production cycle.' },
      ],
      image: '/images/step2-production-workshop.png',
    },
    {
      number: 'Step 3',
      name: 'Construction',
      subtitle: 'Site installation & commissioning',
      description:
        'Deploying experienced engineering teams directly to site to oversee physical installation, no-load testing, and full-system load commissioning.',
      summary:
        'Deploying experienced engineering teams directly to site to oversee physical installation, no-load testing, and full-system load commissioning.',
      features: [
        { title: 'On-Site Professional Guidance', description: 'Leveraging over 20 years of field construction and 400+ global project implementations to guarantee safe and standardized operations even under complex terrain conditions.' },
        { title: 'Precision Installation & Testing', description: 'Perform micron-level calibration and individual running tests across mechanical structures, drive systems, and automated control nodes.' },
        { title: 'Systematic Integrated Trial Run', description: 'Execute full-process automated commissioning to ensure dynamic integration and stable target capacity for the entire mineral processing line.' },
      ],
      image: '/images/step3-flotation-line.png',
    },
    {
      number: 'Step 4',
      name: 'Management',
      subtitle: 'Operations & continuous optimization',
      description:
        'Delivering comprehensive workforce training and long-term operational tracking to optimize production indicators and ensure sustainable capacity.',
      summary:
        'Delivering comprehensive workforce training and long-term operational tracking to optimize production indicators and ensure sustainable capacity.',
      features: [
        { title: 'Tailored Workforce Training', description: 'Provide integrated training covering theory, practical operations, and equipment maintenance for local client teams, enabling them to rapidly build autonomous O&M capabilities.' },
        { title: 'Performance Tracking & Optimization', description: 'Dynamically monitor energy-saving, consumption-reduction, and recovery rate indicators, maximizing line value through automation upgrades and process fine-tuning.' },
        { title: 'Global Rapid After-Sales Support', description: 'Rely on a 24-hour response hotline, domestic and overseas service centers, and fully stocked spare parts inventories to provide rapid technical support for mining projects worldwide.' },
      ],
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment
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
      <SiteHeader lang="en" altHref="/epc" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="en"
          items={[
            { label: breadcrumb.home, href: '/en' },
            { label: breadcrumb.mining },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <EpcProcess
            steps={steps}
            ariaLabel="EPCM project steps"
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

          <p className="mx-auto mt-8 max-w-5xl text-balance text-center text-xl leading-relaxed text-foreground/85">
            {activeStep.summary}
          </p>
          {activeStep.features.length > 0 ? (
            <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3">
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
          {activeStepIndex === 2 ? (
            <div className="mx-auto mt-8 max-w-5xl">
              <Image src="/images/step3-site-commissioning.png" alt="Processing line equipment" width={1920} height={1080} className="h-auto w-full object-cover" />
            </div>
          ) : null}
          <div className="mt-6 flex justify-center">
            <Link
              href="/en/contact"
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
                    href={`/en/products/${product.slug}`}
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
      <SiteFooter lang="en" />
    </div>
  )
}
