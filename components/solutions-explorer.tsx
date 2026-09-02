'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, FlaskConical, Gem, Mountain, Waves } from 'lucide-react'
import { cn } from '@/lib/utils'

const solutions = [
  { id: 'antimony', zh: '锑矿', en: 'Antimony', image: '/images/solutions/antimony.jpg', stages: ['破碎与筛分', '跳汰重选', '磨矿分级', '浮选精选'], stagesEn: ['Crushing & screening', 'Gravity separation', 'Grinding & classification', 'Flotation cleaning'], note: '针对氧化矿与硫化矿共生特性，兼顾粗粒预选与细粒浮选。' },
  { id: 'gold', zh: '金矿', en: 'Gold', image: '/images/solutions/gold.jpg', stages: ['破碎与磨矿', '重选浓缩', '氰化浸出', '炭浆吸附与冶炼'], stagesEn: ['Crushing & grinding', 'Gravity concentration', 'Cyanide leaching', 'CIP adsorption & smelting'], note: '以重选预富集和炭浆工艺提升回收率，适配含金矿石的连续处理。' },
  { id: 'manganese-iron', zh: '锰铁分离', en: 'Manganese–Iron', image: '/images/solutions/manganese-iron.jpg', stages: ['两段破碎', '焙烧还原', '冷却与磨矿', '磁选分离'], stagesEn: ['Two-stage crushing', 'Rotary kiln reduction', 'Cooling & grinding', 'Magnetic separation'], note: '通过焙烧与磁选实现铁、锰资源高效分离和分别回收。' },
  { id: 'manganese', zh: '锰矿', en: 'Manganese', image: '/images/solutions/manganese.jpg', stages: ['破碎与磨矿', '物理分选', '焙烧浸出', '沉淀与电解'], stagesEn: ['Crushing & grinding', 'Physical separation', 'Roasting & leaching', 'Precipitation & electrowinning'], note: '结合物理分选和湿法冶金，为复杂锰矿提供灵活的综合利用路径。' },
  { id: 'bauxite', zh: '铝土矿', en: 'Bauxite', image: '/images/solutions/bauxite.jpg', stages: ['磨矿', '分级', '调浆', '浮选精选'], stagesEn: ['Grinding', 'Classification', 'Pulp conditioning', 'Flotation cleaning'], note: '围绕磨矿分级与反浮选流程，稳定获得高品质铝土矿精矿。' },
  { id: 'silica', zh: '硅石', en: 'Silica', image: '/images/solutions/silica.jpg', stages: ['擦洗脱泥', '水力分级', '调浆', '石英反浮选'], stagesEn: ['Scrubbing & desliming', 'Hydroclassification', 'Pulp preparation', 'Silica flotation'], note: '有效去除铁质与重矿物杂质，生产高纯石英砂及长石精矿。' },
  { id: 'ilmenite', zh: '钛铁矿', en: 'Ilmenite', image: '/images/solutions/ilmenite.jpg', stages: ['破碎分级', '重选预富集', '磁选', '钛铁矿精选'], stagesEn: ['Crushing & classification', 'Gravity pre-concentration', 'Magnetic separation', 'Ilmenite cleaning'], note: '多段重选、磁选组合，针对粒度差异实现钛铁矿高效回收。' },
  { id: 'copper', zh: '铜矿', en: 'Copper', image: '/images/solutions/copper.jpg', stages: ['破碎磨矿', '分级', '粗选', '精选与扫选'], stagesEn: ['Crushing & grinding', 'Classification', 'Rougher flotation', 'Cleaning & scavenging'], note: '采用分段磨矿和多级浮选，兼顾铜精矿品位、回收率与循环负荷。' },
  { id: 'alluvial-tin', zh: '砂锡矿', en: 'Alluvial Tin', image: '/images/solutions/alluvial-tin.jpg', stages: ['筛分', '擦洗与滚筒筛', '跳汰', '摇床精选'], stagesEn: ['Screening', 'Scrubbing & trommel', 'Jigging', 'Shaking table cleaning'], note: '以重选为核心，减少泥化影响，适合砂锡矿的低能耗回收。' },
  { id: 'alluvial-gold', zh: '砂金矿', en: 'Alluvial Gold', image: '/images/solutions/alluvial-gold.jpg', stages: ['解离与分级', '粗选', '重砂精选', '扫选回收'], stagesEn: ['Disintegration & classification', 'Roughing', 'Heavy-sand cleaning', 'Scavenging'], note: '分级回收粗粒金与细粒金，提升砂金资源的综合回收效率。' },
  { id: 'iron-ore', zh: '铁矿石', en: 'Iron Ore', image: '/images/solutions/iron-ore.jpg', stages: ['两段破碎', '磨矿分级', '弱磁选', '强磁选与重选'], stagesEn: ['Two-stage crushing', 'Grinding & classification', 'Low-intensity magnetic separation', 'High-intensity separation & gravity'], note: '通过磨矿、磁选与重选组合，适配磁铁矿及复杂共生铁矿。' },
  { id: 'lead-zinc', zh: '铅锌矿', en: 'Lead–Zinc', image: '/images/solutions/lead-zinc.jpg', stages: ['破碎磨矿', '铅浮选', '锌浮选', '精矿脱水'], stagesEn: ['Crushing & grinding', 'Lead flotation', 'Zinc flotation', 'Concentrate dewatering'], note: '优先浮选铅、再浮选锌，构建稳定的铅锌分离流程。' },
  { id: 'fluorite', zh: '萤石矿', en: 'Fluorite', image: '/images/solutions/fluorite.jpg', stages: ['破碎筛分', '重介质分选', '磨矿调浆', '萤石浮选精选'], stagesEn: ['Crushing & screening', 'Dense medium separation', 'Grinding & conditioning', 'Fluorite flotation cleaning'], note: '通过预选、重介质和多级浮选，提升萤石精矿品位与回收率。' },
]

export function SolutionsExplorer({ lang = 'zh' }: { lang?: 'zh' | 'en' }) {
  const [activeId, setActiveId] = useState('antimony')
  const active = useMemo(() => solutions.find((item) => item.id === activeId) ?? solutions[0], [activeId])
  const isEn = lang === 'en'
  const name = isEn ? active.en : active.zh
  const stages = isEn ? active.stagesEn : active.stages

  return (
    <section className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 pb-24 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-2xl border border-border bg-card p-3 lg:sticky lg:top-28">
          <p className="px-4 pb-3 pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{isEn ? 'Ore types' : '矿种分类'}</p>
          <div className="grid grid-cols-2 gap-1 lg:grid-cols-1">
            {solutions.map((item) => (
              <button key={item.id} type="button" onClick={() => setActiveId(item.id)} className={cn('flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors', activeId === item.id ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-muted')} aria-pressed={activeId === item.id}>
                <span>{isEn ? item.en : item.zh}</span><ArrowUpRight className="size-4 opacity-60" aria-hidden="true" />
              </button>
            ))}
          </div>
        </aside>
        <div className="min-w-0">
          <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[360px] bg-muted lg:min-h-[600px]">
              <Image src={active.image} alt={`${name} ${isEn ? 'process flow chart' : '工艺流程图'}`} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain p-4" priority={active.id === 'antimony'} />
            </div>
            <div className="flex flex-col justify-between gap-8 p-7 lg:p-12">
              <div>
                <div className="flex items-center gap-3 text-accent"><FlaskConical className="size-5" aria-hidden="true" /><span className="text-xs font-bold uppercase tracking-[0.22em]">{isEn ? 'Process solution' : '工艺方案'}</span></div>
                <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-6xl">{name}</h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{isEn ? 'A tailored process route for stable recovery, clear product targets, and dependable plant performance.' : active.note}</p>
              </div>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{isEn ? 'Core process' : '核心流程'}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stages.map((stage, index) => <div key={stage} className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{index + 1}</span><span className="font-semibold text-foreground">{stage}</span></div>)}
                </div>
              </div>
              <a href={isEn ? '/en/contact' : '/contact'} className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">{isEn ? 'Discuss your ore' : '咨询你的矿石方案'}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-border bg-card p-5"><Mountain className="size-5 text-accent" aria-hidden="true" /><p className="mt-3 text-sm font-semibold">{isEn ? 'Ore-specific design' : '按矿种定制'}</p></div><div className="rounded-xl border border-border bg-card p-5"><Gem className="size-5 text-accent" aria-hidden="true" /><p className="mt-3 text-sm font-semibold">{isEn ? 'Recovery-focused' : '围绕回收率优化'}</p></div><div className="rounded-xl border border-border bg-card p-5"><Waves className="size-5 text-accent" aria-hidden="true" /><p className="mt-3 text-sm font-semibold">{isEn ? 'Pilot-tested routes' : '试验验证流程'}</p></div></div>
        </div>
      </div>
    </section>
  )
}
