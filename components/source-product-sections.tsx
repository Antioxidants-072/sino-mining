import Image from 'next/image'
import type { ProductDetail } from '@/lib/content/types'

type Section = NonNullable<ProductDetail['sourceSections']>[number]
export function SourceSection({ section, hero = false }: { section: Section; hero?: boolean }) {
  return <section data-source-section={section.kind} className={section.kind === 'specifications' ? 'lg:col-span-2' : ''}>
    <h2 className={hero ? 'text-sm font-semibold uppercase tracking-wide text-secondary-foreground/60' : 'font-heading text-2xl font-bold text-foreground'}>{section.heading}</h2>
    <div className={hero ? 'mt-2 space-y-2 leading-relaxed' : 'mt-6 space-y-4 leading-relaxed'}>{section.blocks.map((block, i) => typeof block === 'string'
      ? <p key={i}>{block}</p>
      : <a key={i} href={block.src} target="_blank" rel="noopener noreferrer" className="block w-fit max-w-full cursor-zoom-in"><Image unoptimized src={block.src} width={block.width} height={block.height} alt={`${section.heading} (${i + 1})`} className="h-auto max-w-full" /></a>)}</div>
  </section>
}
