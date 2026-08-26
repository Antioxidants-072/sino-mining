import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '成功案例 - 中能矿机',
  description: '了解中能矿机在全球矿山与选矿厂的项目交付与客户成功故事。',
}

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/success-stories" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              成功案例
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              精选中能矿机在全球矿山与选矿厂的项目交付案例，展示我们在破碎、筛分、磨矿与选矿全流程的实战能力。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">项目交付能力</h2>
          <p className="mt-4 text-muted-foreground">
            从工艺设计、核心装备供货到现场调试与售后，中能矿机为客户矿山与选矿厂提供从矿坑到码头的整体解决方案，助力客户提升产能、降低运营成本。
          </p>
        </section>
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
