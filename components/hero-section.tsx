'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getContent, type Lang } from '@/lib/content'

const SLIDE_DURATION = 7000

export function HeroSection({ lang }: { lang: Lang }) {
  const { hero } = getContent(lang)
  const slides = useMemo(() => hero.slides, [hero])
  const slideCount = slides.length
  const ctaHrefs = useMemo(
    () => (lang === 'zh' ? ['/contact', '/products'] : ['/en/contact', '/en/products']),
    [lang],
  )

  const [active, setActive] = useState(0)

  useEffect(() => {
    console.log('[HeroSection] mounted, slideCount=', slideCount)
    if (slideCount < 2) return
    const timer = window.setInterval(() => {
      console.log('[HeroSection] interval tick, active would update')
      setActive((prev) => (prev + 1) % slideCount)
    }, SLIDE_DURATION)
    return () => window.clearInterval(timer)
  }, [slideCount])

  const goTo = (index: number) => {
    setActive(((index % slideCount) + slideCount) % slideCount)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.currentTarget.dataset.touchStartX = String(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const target = e.currentTarget
    const startX = target.dataset.touchStartX
    if (startX === undefined) return
    const endX = e.changedTouches[0]?.clientX
    if (endX === undefined) {
      delete target.dataset.touchStartX
      return
    }
    const delta = endX - Number(startX)
    if (Math.abs(delta) > 50) {
      goTo(active + (delta < 0 ? 1 : -1))
    }
    delete target.dataset.touchStartX
  }

  return (
    <section className="relative">
      <div
        className="relative h-[560px] w-full overflow-hidden touch-pan-y sm:h-[640px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            aria-hidden={index !== active}
            className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
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
            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-center px-6 text-center text-primary-foreground pointer-events-auto">
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
                className="hero-cta mt-8 h-12 rounded-none px-8 text-base font-semibold"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}

        {slideCount > 1 && (
          <>
            <button
              type="button"
              onClick={() => { console.log('[HeroSection] prev clicked'); goTo(active - 1) }}
              aria-label={lang === 'zh' ? '上一张' : 'Previous slide'}
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-black/50 active:scale-95 sm:left-6"
            >
              <ChevronLeft className="size-6 sm:size-8" />
            </button>
            <button
              type="button"
              onClick={() => { console.log('[HeroSection] next clicked'); goTo(active + 1) }}
              aria-label={lang === 'zh' ? '下一张' : 'Next slide'}
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-black/50 active:scale-95 sm:right-6"
            >
              <ChevronRight className="size-6 sm:size-8" />
            </button>
          </>
        )}

        <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(index)}
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
