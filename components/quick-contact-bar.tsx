'use client'

import Image from 'next/image'
import { Mail, MessageCircle, MessagesSquare, Phone, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import type { Lang } from '@/lib/content'

export function QuickContactBar({ lang }: { lang: Lang }) {
  const [isWechatOpen, setIsWechatOpen] = useState(false)
  const isZh = lang === 'zh'
  const isEn = lang === 'en'
  const isRu = lang === 'ru'
  const isFr = lang === 'fr'

  const contactIcon = (
    <span className="flex size-12 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-sm sm:size-14">
      <MessageCircle className="size-6 sm:size-7" aria-hidden="true" />
    </span>
  )

  const email = isZh ? 'a87945298@163.com' : 'marketing2@ahznkjzz.com'
  const emailItem = (
    <a className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={`mailto:${email}`}>
      <span className="flex size-12 items-center justify-center rounded-full bg-[#f97316] text-white shadow-sm sm:size-14">
        <Mail className="size-6 sm:size-7" aria-hidden="true" />
      </span>
      <span className="text-lg font-bold sm:text-xl">{email}</span>
    </a>
  )

  return (
    <>
      <section className="border-t border-border bg-muted/40" aria-label={isZh ? '快速联系方式' : isEn ? 'Quick contact' : isRu ? 'Быстрые контакты' : isFr ? 'Contact rapide' : 'Contacto rapido'}>
        <div className={isZh ? 'mx-auto flex max-w-[1600px] flex-wrap items-center justify-start gap-x-10 gap-y-[18px] md:gap-y-5 px-6 max-md:pl-[44px] max-md:pr-[4px] py-6 font-sans text-base text-muted-foreground sm:gap-x-14 sm:py-7 lg:justify-center lg:gap-x-12 lg:px-10' : 'mx-auto grid max-w-[1600px] auto-rows-fr grid-cols-1 items-center gap-x-10 gap-y-[14px] md:gap-y-[18px] max-md:pl-[calc(clamp(20px,7vw,40px)_+_20px)] max-md:pr-[calc(clamp(20px,7vw,40px)_-_20px)] py-6 font-sans text-muted-foreground md:grid-cols-2 md:px-8 xl:max-w-[1440px] xl:grid-cols-4 xl:gap-x-4 xl:px-8 xl:[&>*>span:first-child]:shrink-0 xl:[&>a[href^=mailto]]:gap-3 xl:[&>a[href^=mailto]>span:last-child]:text-lg'}>
          <div className="group inline-flex items-center gap-4 transition-all hover:-translate-y-1 hover:text-foreground">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm sm:size-14">
              <Phone className="size-6 text-primary-foreground sm:size-7" aria-hidden="true" />
            </span>
            <span className="flex flex-col text-lg font-bold sm:text-xl">
              <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+8618805086690">+86 18805086690</a>
              {isZh ? <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+8615212631188">+86 15212631188</a> : <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="tel:+8615756159188">+86 15756159188</a>}
            </span>
          </div>
          {!isZh && emailItem}
          {isZh ? (
            <button type="button" className="group inline-flex items-center gap-4 text-left transition-all hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" onClick={() => setIsWechatOpen(true)} aria-label="打开微信名片二维码">
              {contactIcon}
              <span className="text-lg font-bold sm:text-xl">微信咨询</span>
              <Image unoptimized src="/images/wechat-contact-qr.png" alt="" width={64} height={64} className="quick-contact-qr shrink-0 max-md:-translate-x-[10px]" />
            </button>
          ) : (
            <>
              <Link className="flex items-center gap-3 font-bold transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://wa.me/85269704599" target="_blank" rel="noreferrer" aria-label={isEn ? 'Contact us on WhatsApp' : isRu ? 'Связаться через WhatsApp' : isFr ? 'Nous contacter sur WhatsApp' : 'Contáctenos por WhatsApp'}>
                {contactIcon}
                <span className="text-lg max-md:w-[5em] sm:text-xl">WhatsApp</span>
                <Image unoptimized src="/images/whatsapp-contact-qr.png" alt="" width={64} height={64} className="ml-[clamp(12px,calc(100%_-_238px),82px)] max-md:-translate-x-[20px] max-md:-translate-y-[5px] shrink-0 quick-contact-qr bg-white md:ml-auto xl:ml-[0.15rem]" />
              </Link>
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-sm sm:size-14"><MessagesSquare className="size-6 sm:size-7" aria-hidden="true" /></span>
                <span className="text-lg font-bold max-md:w-[5em] sm:text-xl">WeChat</span>
                <Image unoptimized src="/images/wechat-contact-qr.png" alt={isEn ? 'WeChat contact QR code' : isRu ? 'QR-код контакта WeChat' : isFr ? 'QR code de contact WeChat' : 'Código QR de contacto de WeChat'} width={64} height={64} className="ml-[clamp(12px,calc(100%_-_238px),82px)] max-md:-translate-x-[20px] max-md:-translate-y-[5px] shrink-0 quick-contact-qr bg-white md:ml-auto xl:ml-[0.15rem]" />
              </div>
            </>
          )}
          {isZh && emailItem}
        </div>
      </section>
      {isZh && isWechatOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="presentation" onClick={() => setIsWechatOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="wechat-card-title" className="relative max-h-[calc(100vh-2rem)] w-full max-w-md overflow-auto rounded-2xl bg-background p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-4 top-4 z-10 rounded-full bg-background/90 p-2 text-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" onClick={() => setIsWechatOpen(false)} aria-label="关闭微信名片二维码">
              <X className="size-5" aria-hidden="true" />
            </button>
            <h2 id="wechat-card-title" className="sr-only">微信名片二维码</h2>
            <Image unoptimized src="/images/wechat-contact-card-full.png" alt="sino中能矿机浮选机完整微信名片，可保存后扫码添加好友" width={924} height={1427} className="mx-auto h-auto max-h-[calc(100dvh-4rem)] w-auto max-w-full rounded-xl object-contain" />
          </div>
        </div>
      ) : null}
    </>
  )
}
