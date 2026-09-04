import Image from 'next/image'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export function PartnersPage({ lang }: { lang: 'zh' | 'en' }) {
  const isEn = lang === 'en'
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang={lang} altHref={isEn ? '/partners' : '/en/partners'} />
      <main className="flex-1">
        <BreadcrumbNav lang={lang} items={[{ label: isEn ? 'Home' : '首页', href: isEn ? '/en' : '/' }, { label: isEn ? 'Partners' : '合作伙伴' }]} />
        <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{isEn ? 'Global network' : '全球合作网络'}</p><h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-6xl">{isEn ? 'Built with trusted partners worldwide.' : '与全球值得信赖的伙伴同行。'}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{isEn ? 'Our equipment and mineral processing solutions serve partners across China and international markets. Together with leading mining, metallurgy, and industrial groups, we turn engineering expertise into dependable results.' : '我们的设备与选矿解决方案服务于中国及海外市场，与众多矿业、冶金及工业集团建立长期合作，共同将工程经验转化为可靠成果。'}</p></div>
            <div className="overflow-hidden rounded-2xl border border-border bg-muted"><Image src="/images/partners.jpg" alt={isEn ? 'Partner logos from mining and metallurgy companies' : '矿业与冶金合作伙伴标识'} width={750} height={940} className="h-auto w-full object-cover" priority /></div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  )
}
