'use client'

import { Mail, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import type { Lang } from '@/lib/content'

export function QuickContactBar({ lang }: { lang: Lang }) {
  const isChinese = lang === 'zh'

  return (
    <section className="border-t border-border bg-muted/40" aria-label={isChinese ? '快速联系方式' : 'Quick contact'}>
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-start gap-x-10 gap-y-5 px-6 py-6 font-sans text-base text-muted-foreground sm:gap-x-14 sm:py-7 lg:justify-center lg:px-10">
        <a className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+8618805086690">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm sm:size-14">
            <Phone className="size-6 text-primary-foreground sm:size-7" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold sm:text-xl">+86 18805086690</span>
        </a>
        <Link className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://wa.me/8618805086690" target="_blank" rel="noreferrer" aria-label={isChinese ? '通过 WhatsApp 联系我们' : 'Contact us on WhatsApp'}>
          <span className="flex size-12 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-sm sm:size-14">
            <MessageCircle className="size-6 sm:size-7" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold sm:text-xl">WhatsApp Us</span>
        </Link>
        <a className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="mailto:marketing1@ahznkjzz.com">
          <span className="flex size-12 items-center justify-center rounded-full bg-[#f97316] text-white shadow-sm sm:size-14">
            <Mail className="size-6 sm:size-7" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold sm:text-xl">marketing1@ahznkjzz.com</span>
        </a>
      </div>
    </section>
  )
}
