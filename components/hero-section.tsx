import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getContent, type Lang } from '@/lib/content'

export function HeroSection({ lang }: { lang: Lang }) {
  const { hero } = getContent(lang)
  const contactHref = lang === 'zh' ? '/contact' : '/en/contact'

  return (
    <section className="relative">
      <div className="relative h-[560px] w-full overflow-hidden sm:h-[640px]">
        <Image
          src="/images/hero-mining-pit.png"
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {hero.titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index !== hero.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-primary-foreground/85">
            {hero.subtitle}
          </p>
          <Button
            render={<Link href={contactHref} />}
            nativeButton={false}
            size="lg"
            className="cta-swap mt-8 h-12 rounded-none px-8 text-base font-semibold"
          >
            {hero.cta}
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-3">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`h-2.5 w-2.5 rounded-full ${
                i === 2 ? 'bg-highlight' : 'bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
