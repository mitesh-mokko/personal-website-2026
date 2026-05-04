import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PullQuoteProps = {
  children: ReactNode
  className?: string
}

export function PullQuote({ children, className }: PullQuoteProps) {
  return (
    <p
      className={cn(
        "border-border my-14 border-l-2 pl-6 text-3xl leading-[1.1] font-semibold tracking-tight md:my-16 md:pl-8 md:text-4xl",
        className
      )}
    >
      {children}
    </p>
  )
}
