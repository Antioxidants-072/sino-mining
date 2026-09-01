'use client'

import { Mail, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import type { Lang } from '@/lib/content'

export function QuickContactBar({ lang }: { lang: Lang }) {
  const isChinese = lang === 'zh'

  return (
    <section className="border-t border-border bg-muted/40" aria-label={isChinese ? '快速联系方式' : 'Quick contact'}>
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-3 font-sans text-[13px] text-muted-foreground sm:gap-x-8 lg:px-10">
        <a className="group inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="mailto:marketing1@ahznkjzz.com">
          <Mail className="size-4 text-accent transition-colors group-hover:text-foreground" aria-hidden="true" />
          <span>marketing1@ahznkjzz.com</span>
        </a>
        <a className="group inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+865551234567">
          <Phone className="size-4 text-accent transition-colors group-hover:text-foreground" aria-hidden="true" />
          <span>+86 555 1234567</span>
        </a>
        <Link className="group inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://wa.me/865551234567" target="_blank" rel="noreferrer" aria-label={isChinese ? '通过 WhatsApp 联系我们' : 'Contact us on WhatsApp'}>
          <MessageCircle className="size-4 text-accent transition-colors group-hover:text-foreground" aria-hidden="true" />
          <span>WhatsApp Us</span>
        </Link>
      </div>
    </section>
  )
}
