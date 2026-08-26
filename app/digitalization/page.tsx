import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '数字化 - 皖矿机械',
  description: '探索皖矿机械的数字化解决方案，助力矿业智能化升级。',
}

export default function DigitalizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/digitalization" />
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              数字化
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              通过数字化技术提升矿山运营效率，降低运营成本，实现智能化管理。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold">数字化解决方案</h2>
          <p className="mt-4 text-muted-foreground">
            皖矿机械致力于为客户提供全面的数字化解决方案，包括设备远程监控、智能运维、
            数据分析等服务，助力矿业企业实现数字化转型。
          </p>
        </section>
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
