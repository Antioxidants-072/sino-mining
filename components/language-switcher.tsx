'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import type { Lang } from '@/lib/content'
import type { LanguageOption } from '@/lib/content/types'

/**
 * Computes the URL for the same page in a different language.
 * Strips any existing /en, /es, /ru prefix, then adds the target prefix.
 * zh has no prefix.
 */
function computeAltHref(currentPath: string, targetLang: Lang): string {
  // Strip existing language prefix (e.g. /en/products → /products)
  const stripped = currentPath.replace(/^\/(en|es|ru)(?=\/|$)/, '') || '/'
  if (targetLang === 'zh') return stripped
  return `/${targetLang}${stripped}`
}

export function LanguageSwitcher({
  lang,
  ariaLabel,
  languages,
}: {
  lang: Lang
  ariaLabel: string
  languages: LanguageOption[]
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname() || '/'

  const current = languages.find((l) => l.code === lang)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
      >
        <Globe className="size-5 flex-shrink-0" aria-hidden="true" />
        <span className="hidden flex-col items-start leading-tight sm:flex">
          <span className="font-semibold text-foreground">{current?.nativeName ?? lang.toUpperCase()}</span>
          {current?.label && current.label !== current.nativeName && (
            <span className="text-xs text-foreground/50">{current.label}</span>
          )}
        </span>
        <ChevronDown
          className={`hidden size-3.5 flex-shrink-0 transition-transform sm:inline ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={ariaLabel}
          className="absolute right-0 top-full z-[60] mt-2 min-w-[200px] overflow-hidden rounded-lg border border-border bg-background shadow-lg ring-1 ring-foreground/5"
        >
          <ul className="py-1">
            {languages.map((option) => {
              const isCurrent = option.code === lang
              const isDisabled = !option.available
              const href = computeAltHref(pathname, option.code)

              if (isDisabled) {
                return (
                  <li key={option.code} role="option" aria-selected={false} aria-disabled="true">
                    <div
                      className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-foreground/40 cursor-not-allowed"
                      title={option.comingSoonLabel ?? 'Coming soon'}
                    >
                      <span className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="text-base leading-none">
                          {option.flag}
                        </span>
                        <span className="flex flex-col leading-tight">
                          <span className="font-medium">{option.nativeName}</span>
                          <span className="text-xs text-foreground/40">
                            {option.comingSoonLabel ?? 'Coming soon'}
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                )
              }

              return (
                <li key={option.code} role="option" aria-selected={isCurrent}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    <span className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="text-base leading-none">
                        {option.flag}
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="font-medium">{option.nativeName}</span>
                        <span className="text-xs text-foreground/50">{option.label}</span>
                      </span>
                    </span>
                    {isCurrent && (
                      <Check
                        className="size-4 flex-shrink-0 text-accent"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
