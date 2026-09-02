import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ContactCTA } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SolutionsExplorer } from '@/components/solutions-explorer'

export const metadata: Metadata = { title: '解决方案 | AnHui Sinomining Machinery', description: '按矿种匹配选矿工艺方案，从试验研究到工程落地提供专业支持。' }

export default function SolutionsPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader lang="zh" altHref="/en/solutions" /><main className="flex-1"><BreadcrumbNav lang="zh" items={[{ label: '首页', href: '/' }, { label: '解决方案' }]} /><section className="mx-auto max-w-[1600px] px-6 pb-10 pt-8 lg:px-10"><p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Mineral processing intelligence</p><h1 className="mt-4 max-w-4xl font-heading text-5xl font-bold tracking-tight text-foreground text-balance lg:text-7xl">按矿种，找到更清晰的工艺路径。</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">从矿石性质、粒度组成到目标精矿，我们为不同矿种构建可验证、可落地的选矿解决方案。</p></section><SolutionsExplorer lang="zh" /><ContactCTA lang="zh" /></main><SiteFooter lang="zh" /></div>
}
