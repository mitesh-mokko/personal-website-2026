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
        "type-pullquote my-10 border-l-2 border-border pl-5 sm:my-12 sm:pl-6",
        className
      )}
    >
      {children}
    </p>
  )
}
