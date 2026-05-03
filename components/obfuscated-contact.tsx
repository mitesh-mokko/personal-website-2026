"use client"

import * as React from "react"

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

const PHONE_DISPLAY_CODES = [
  40, 51, 49, 50, 41, 32, 52, 48, 57, 45, 49, 56, 48, 51,
]
const PHONE_TEL_CODES = [43, 49, 51, 49, 50, 52, 48, 57, 49, 56, 48, 51]
const TEL_CODES = [116, 101, 108]

type Props = { className?: string }

function Placeholder({ width }: { width: string }) {
  return (
    <span
      aria-hidden
      className="text-muted-foreground inline-block animate-pulse select-none"
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

export function ObfuscatedPhone({
  className,
  prefix,
}: Props & { prefix?: string }) {
  const mounted = useMounted()
  if (!mounted) return <Placeholder width="14ch" />
  const display = decode(PHONE_DISPLAY_CODES)
  const tel = decode(PHONE_TEL_CODES)
  return (
    <a
      href={`${decode(TEL_CODES)}:${tel}`}
      className={cn(className)}
    >
      {prefix}
      {display}
    </a>
  )
}
