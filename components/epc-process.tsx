"use client"

import Image from "next/image"
import { useState } from "react"

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
}

export function EpcProcess({ steps, ariaLabel }: EpcProcessProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = steps[activeIndex]

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
          <p className="mt-3 text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
            {active.description}
          </p>
        </div>
      </div>

      {/* Chevron step bar */}
      <nav
        aria-label={ariaLabel}
        className="grid grid-cols-2 bg-[#1b2a4a] sm:flex sm:flex-row sm:overflow-x-auto"
      >
        {steps.map((step, index) => {
          const isActive = index === activeIndex
          const isLast = index === steps.length - 1
          return (
            <button
              key={step.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={isActive ? "step" : undefined}
              style={{
                clipPath: isLast
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12px 50%)"
                  : "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
                marginLeft: index === 0 ? 0 : "-12px",
              }}
              className={`relative flex min-h-[88px] flex-1 flex-col justify-center px-6 py-4 text-left transition-colors duration-300 sm:min-w-[200px] ${
                isActive
                  ? "bg-[#ff6b00] text-white"
                  : "border-r border-white/30 bg-[#1b2a4a] text-white hover:bg-[#243761]"
              }`}
            >
              <span className="block text-xs font-bold uppercase tracking-wide opacity-80">
                {step.number}
              </span>
              <span className="mt-1 block text-base font-bold sm:text-lg">{step.name}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
