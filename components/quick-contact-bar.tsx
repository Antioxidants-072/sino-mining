'use client'

import { Mail, MessageCircle, Phone, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import type { Lang } from '@/lib/content'

export function QuickContactBar({ lang }: { lang: Lang }) {
  const [isWechatOpen, setIsWechatOpen] = useState(false)
  const isZh = lang === 'zh'
  const isEn = lang === 'en'
  const isRu = lang === 'ru'

  const contactIcon = (
    <span className="flex size-12 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-sm sm:size-14">
      <MessageCircle className="size-6 sm:size-7" aria-hidden="true" />
    </span>
  )

  return (
    <>
      <section className="border-t border-border bg-muted/40" aria-label={isZh ? '快速联系方式' : isEn ? 'Quick contact' : isRu ? 'Быстрые контакты' : 'Contacto rapido'}>
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-start gap-x-10 gap-y-5 px-6 py-6 font-sans text-base text-muted-foreground sm:gap-x-14 sm:py-7 lg:justify-center lg:px-10">
          <div className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm sm:size-14">
              <Phone className="size-6 text-primary-foreground sm:size-7" aria-hidden="true" />
            </span>
            <span className="flex flex-col text-lg font-bold sm:text-xl">
              <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+8618805086690">+86 18805086690</a>
              {isZh ? <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+8615212631188">+86 15212631188</a> : null}
            </span>
          </div>
          {isZh ? (
            <button type="button" className="group inline-flex items-center gap-4 text-left transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" onClick={() => setIsWechatOpen(true)} aria-label="打开微信名片二维码">
              {contactIcon}
              <span className="text-lg font-bold sm:text-xl">微信咨询</span>
            </button>
          ) : (
            <Link className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://wa.me/13142011201" target="_blank" rel="noreferrer" aria-label={isEn ? 'Contact us on WhatsApp' : isRu ? 'Связаться через WhatsApp' : 'Contactenos por WhatsApp'}>
              {contactIcon}
              <span className="text-lg font-bold sm:text-xl">WhatsApp</span>
            </Link>
          )}
          <a className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={isZh ? 'mailto:a87945298@163.com' : 'mailto:marketing1@ahznkjzz.com'}>
            <span className="flex size-12 items-center justify-center rounded-full bg-[#f97316] text-white shadow-sm sm:size-14">
              <Mail className="size-6 sm:size-7" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold sm:text-xl">{isZh ? 'a87945298@163.com' : 'marketing1@ahznkjzz.com'}</span>
          </a>
        </div>
      </section>
      {isZh && isWechatOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="presentation" onClick={() => setIsWechatOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="wechat-card-title" className="relative max-h-[calc(100vh-2rem)] w-full max-w-md overflow-auto rounded-2xl bg-background p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-4 top-4 z-10 rounded-full bg-background/90 p-2 text-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" onClick={() => setIsWechatOpen(false)} aria-label="关闭微信名片二维码">
              <X className="size-5" aria-hidden="true" />
            </button>
            <h2 id="wechat-card-title" className="sr-only">微信名片二维码</h2>
            <img src="/images/wechat-contact-card.jpg" alt="Sinomining Brand Group 微信名片二维码，可保存后添加好友" className="h-auto w-full rounded-xl" />
          </div>
        </div>
      ) : null}
    </>
  )
}
