'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getContent, type Lang } from '@/lib/content'

const SLIDE_DURATION = 7000

export function HeroSection({ lang }: { lang: Lang }) {
  const { hero } = getContent(lang)
  const slides = hero.slides
  const ctaHrefs =
    lang === 'zh' ? ['/contact', '/products'] : ['/en/contact', '/en/products']

  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [slides.length, active])

  return (
    <section className="relative">
      <div className="relative h-[560px] w-full overflow-hidden sm:h-[640px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image || '/placeholder.svg'}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-center px-6 text-center text-primary-foreground">
              <h1 className="max-w-4xl text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {slide.titleLines.map((line, lineIndex) => (
                  <span key={line}>
                    {line}
                    {lineIndex !== slide.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed tracking-[0.06em] text-primary-foreground/85 sm:text-base lg:text-lg">
                {slide.subtitle}
              </p>
              <Button
                render={<Link href={ctaHrefs[index] ?? ctaHrefs[0]} />}
                nativeButton={false}
                size="lg"
                tabIndex={index === active ? undefined : -1}
                className="cta-swap mt-8 h-12 rounded-none px-8 text-base font-semibold"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${lang === 'zh' ? '切换到第' : 'Go to slide '}${index + 1}${lang === 'zh' ? ' 张主图' : ''}`}
              aria-current={index === active}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === active ? 'bg-highlight' : 'bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
