"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { Button } from '@/components/ui/button'
import { getContent } from '@/lib/content'

export default function EnglishEPCPage() {
  const { breadcrumb, mining } = getContent('en')
  const [activeTab, setActiveTab] = useState(0)

  const steps = [
    { title: 'Step 1. Engineering', description: 'Plan the process and engineering scope.' },
    { title: 'Step 2. Procurement', description: 'Coordinate equipment and material delivery.' },
    { title: 'Step 3. Construction', description: 'Build, install and commission with precision.' },
    { title: 'Step 4. Management', description: 'Manage the project from plan to performance.' },
  ]
  const currentSection = activeTab === 0 ? mining.miningEquipment : mining.conveying

  const heroImages = {
    0: '/images/mining-plant.png',
    1: '/images/aggregates-production.png',
    2: '/images/mining-plant.png',
    3: '/images/aggregates-production.png',
  }

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
          <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
            <Image
              src={heroImages[activeTab as keyof typeof heroImages]}
              alt={currentSection.title}
              fill
              priority
              className="object-cover"
            />
            <div className="cut-tl-lg absolute bottom-0 right-0 w-full max-w-lg bg-secondary p-8 text-secondary-foreground sm:p-10">
              <h1 className="font-heading text-3xl font-bold sm:text-4xl">
                {currentSection.title}
              </h1>
              <p className="mt-3 text-pretty text-secondary-foreground/80">
                {currentSection.subtitle}
              </p>
            </div>
          </div>

          <nav aria-label="EPCM project steps" className="flex overflow-x-auto bg-secondary py-5 text-secondary-foreground">
            {steps.map((step, index) => (
              <button key={step.title} onClick={() => setActiveTab(index)} aria-current={activeTab === index ? 'step' : undefined} className={`relative min-w-[210px] flex-1 px-6 text-left transition-colors after:absolute after:right-0 after:top-1/2 after:size-3 after:-translate-y-1/2 after:rotate-45 after:border-r after:border-t after:border-border last:after:hidden ${activeTab === index ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'}`}>
                <span className="block text-base font-bold">{step.title}</span>
                <span className="mt-1 block text-xs opacity-75">{step.description}</span>
              </button>
            ))}
          </nav>
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
                  <Link href={`/en/products/${product.slug}`} legacyBehavior>
                    <Button
                      size="sm"
                      className="cta-swap w-fit rounded-none px-6"
                    >
                      {currentSection.viewDetails}
                    </Button>
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
