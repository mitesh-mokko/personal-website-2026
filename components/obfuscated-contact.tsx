"use client"

import * as React from "react"
import { ArrowUpRight, CalendarBlank, Check, Copy } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

const subscribe = () => () => {}

function useMounted() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}

const decode = (codes: readonly number[]) => String.fromCharCode(...codes)

const EMAIL_CODES = [
  109, 105, 116, 101, 115, 104, 64, 109, 111, 107, 107, 111, 46, 105, 111,
]
const MAILTO_CODES = [109, 97, 105, 108, 116, 111]

type Props = { className?: string }

function Placeholder({ width }: { width: string }) {
  return (
    <span
      aria-hidden
      className="inline-block animate-pulse text-muted-foreground select-none"
      style={{ width }}
    >
      &nbsp;
    </span>
  )
}

export function ObfuscatedEmail({ className }: Props) {
  const mounted = useMounted()
  if (!mounted) return <Placeholder width="11ch" />
  const email = decode(EMAIL_CODES)
  return (
    <a href={`${decode(MAILTO_CODES)}:${email}`} className={cn(className)}>
      {email}
    </a>
  )
}

export function ContactActions() {
  const mounted = useMounted()
  const [copied, setCopied] = React.useState(false)
  const [copyFailed, setCopyFailed] = React.useState(false)
  const resetTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const email = mounted ? decode(EMAIL_CODES) : ""

  React.useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      setCopied(true)
      setCopyFailed(false)
      resetTimer.current = setTimeout(() => {
        setCopied(false)
        resetTimer.current = null
      }, 2500)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={mounted ? `${decode(MAILTO_CODES)}:${email}` : undefined}
          aria-disabled={!mounted}
          className={cn(
            "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            !mounted && "pointer-events-none opacity-50"
          )}
        >
          Email me
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
        <a
          href="https://calendly.com/mitesh-mokko/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <CalendarBlank aria-hidden="true" className="size-4" />
          Book a 30-min call
        </a>
      </div>
      <button
        type="button"
        disabled={!mounted}
        onClick={copyEmail}
        className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50"
      >
        {copied ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}
        {copied ? "Copied" : "Copy email instead"}
      </button>
      {copyFailed && (
        <span role="status" className="text-sm text-muted-foreground">
          Copy unavailable. Use the email button instead.
        </span>
      )}
    </div>
  )
}
