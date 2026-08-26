import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Lang, Product } from '@/lib/content'

export function ProductDetail({
  lang,
  product,
}: {
  lang: Lang
  product: Product
}) {
  const detail = product.detail!

  return (
    <div>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-auto">
          <Image
            src={detail.heroImage}
            alt={detail.heroAlt}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="cut-tl-lg flex flex-col gap-8 bg-secondary p-8 text-secondary-foreground sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {detail.modelSeries}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/60">
              {detail.applicationLabel}
            </h2>
            <p className="mt-2 text-pretty leading-relaxed text-secondary-foreground/85">
              {detail.applicationRange}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/60">
              {detail.advantagesLabel}
            </h2>
            <ul className="mt-3 flex flex-col gap-2.5">
              {detail.advantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 size-4 flex-shrink-0 text-highlight"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-secondary-foreground/85">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            render={<Link href="#contact" />}
            nativeButton={false}
            className="w-fit rounded-none bg-accent px-8 text-accent-foreground hover:bg-highlight hover:text-highlight-foreground"
          >
            {detail.contactCta}
          </Button>
        </div>
      </div>

      <section className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-[6.75rem]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {detail.featuresLabel}
            </h2>
            <ol className="mt-6 flex flex-col gap-4">
              {detail.features.map((feature, index) => (
                <li key={feature} className="flex gap-4">
                  <span className="flex size-7 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-accent-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {detail.workingPrincipleLabel}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-foreground/85">
              {detail.workingPrinciple}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {detail.specTable?.caption}
        </h2>
        <div className="mt-6 overflow-x-auto border border-border">
          <table className="w-full min-w-[960px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                {detail.specTable?.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="whitespace-nowrap border border-border/40 px-4 py-3 font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {detail.specTable?.rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={
                    rowIndex % 2 === 0 ? 'bg-card' : 'bg-muted/40'
                  }
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={`whitespace-nowrap border border-border px-4 py-3 text-foreground/85 ${
                        cellIndex === 0 ? 'font-semibold text-foreground' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          {lang === 'zh'
            ? '如需了解特定工况下的选型建议，请联系我们的销售工程师获取详细方案。'
            : 'For sizing recommendations tailored to your specific operating conditions, please contact our sales engineers for a detailed proposal.'}
        </p>
      </section>
    </div>
  )
}
