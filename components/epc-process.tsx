"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export interface EpcStep {
  number: string
  name: string
  subtitle: string
  description: string
  image: string
}

interface EpcProcessProps {
  steps: EpcStep[]
  ariaLabel: string
  onActiveStepChange?: (step: EpcStep, index: number) => void
}

export function EpcProcess({ steps, ariaLabel, onActiveStepChange }: EpcProcessProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = steps[activeIndex]

  useEffect(() => {
    onActiveStepChange?.(active, activeIndex)
  }, [active, activeIndex, onActiveStepChange])

  return (
    <div className="flex flex-col">
      {/* Hero showcase area */}
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[560px]">
        {steps.map((step, index) => (
          <Image
            key={step.name}
            src={step.image}
            alt={step.name}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div
          key={active.name}
          className="cut-tl-lg absolute bottom-0 left-0 w-full max-w-xl bg-[#1b2a4a] p-8 text-white sm:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <span className="inline-flex h-8 items-center bg-[#ff6b00] px-3 text-xs font-bold uppercase tracking-wide text-white">
            {active.number}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">{active.name}</h1>
          <p className="mt-2 text-base font-semibold text-[#ff8c3f] sm:text-lg">{active.subtitle}</p>
        </div>
      </div>

      {/* Chevron step bar */}
      <nav
        aria-label={ariaLabel}
        className="grid grid-cols-2 divide-x divide-y divide-white/20 bg-[#1b2a4a] sm:flex sm:flex-row sm:divide-none sm:overflow-x-auto"
      >
        {steps.map((step, index) => {
          const isActive = index === activeIndex
          const isFirst = index === 0
          const isLast = index === steps.length - 1
          const shadeClass = ['bg-[#16233f]', 'bg-[#1b2a4a]', 'bg-[#203257]', 'bg-[#263b64]'][index] ?? 'bg-[#1b2a4a]'
          const clipPathClass = isFirst
            ? "sm:[clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]"
            : isLast
              ? "sm:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,12px_50%)]"
              : "sm:[clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%,12px_50%)]"
          const marginClass = isFirst ? "" : "sm:-ml-3"
          return (
            <button
              key={step.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={isActive ? "step" : undefined}
              className={`relative flex min-h-[88px] flex-1 flex-col justify-center px-6 py-4 text-left transition-colors duration-300 sm:min-w-[200px] ${clipPathClass} ${marginClass} ${
                isActive
                  ? "bg-[#ff6b00] text-white"
                  : `${shadeClass} text-white hover:brightness-110 sm:border-r sm:border-white/30`
              }`}
            >
              <span className="block text-sm font-bold uppercase tracking-wide opacity-80">
                {step.number}
              </span>
              <span className="mt-1 block text-lg font-bold sm:text-xl">{step.name}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
