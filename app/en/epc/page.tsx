import Image from 'next/image'
import Link from 'next/link'
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
      image: '/images/mining-plant.png',
    },
    {
      number: 'Step 2',
      name: 'Procurement',
      subtitle: 'Manufacturing & supply chain',
      description:
        'Core equipment is manufactured in-house while we coordinate global sourcing, keeping delivery schedules and quality standards on track.',
      image: '/images/hero-flotation-workshop.png',
    },
    {
      number: 'Step 3',
      name: 'Construction',
      subtitle: 'Site installation & commissioning',
      description:
        'On-site engineering teams handle installation, single-unit testing and full system commissioning with precision.',
      image: '/images/aggregates-production.png',
    },
    {
      number: 'Step 4',
      name: 'Management',
      subtitle: 'Operations & continuous optimization',
      description:
        'We provide staff training and ongoing operational support, tracking plant performance to continuously optimize output.',
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment

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
          <EpcProcess steps={steps} ariaLabel="EPCM project steps" />
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden="true" />
            {mining.lastUpdated}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-center text-lg leading-relaxed text-foreground/85">
            {currentSection.body}
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
                    href={`/en/products/${product.slug}`}
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
      <SiteFooter lang="en" />
    </div>
  )
}
