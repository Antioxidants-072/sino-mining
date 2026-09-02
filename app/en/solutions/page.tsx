import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactCTA } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SolutionsExplorer } from '@/components/solutions-explorer'

export const metadata: Metadata = { title: 'Solutions | AnHui Sinomining Machinery', description: 'Ore-specific mineral processing solutions from testwork to engineered plant delivery.' }

export default function EnglishSolutionsPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader lang="en" altHref="/solutions" /><main className="flex-1"><BreadcrumbNav lang="en" items={[{ label: 'Home', href: '/en' }, { label: 'Solutions' }]} /><section className="mx-auto max-w-[1600px] px-6 pb-10 pt-8 lg:px-10"><p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Mineral processing intelligence</p><h1 className="mt-4 max-w-4xl font-heading text-5xl font-bold tracking-tight text-foreground text-balance lg:text-7xl">A clearer process path for every ore.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">From ore properties and particle size to concentrate targets, we build testable and practical processing solutions for each mineral.</p></section><SolutionsExplorer lang="en" /><ContactCTA lang="en" /></main><SiteFooter lang="en" /></div>
}
