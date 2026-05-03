"use client"

import * as React from "react"
import { Switch } from "@base-ui/react/switch"
import { Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const subscribe = () => () => {}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  const isDark = mounted ? resolvedTheme === "dark" : false

  return (
    <Switch.Root
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label="Toggle dark mode"
      className={cn(
        "group/switch relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-border p-0.5 outline-none",
        "bg-secondary transition-colors duration-300 ease-out data-[checked]:bg-primary",
        "focus-visible:ring-2 focus-visible:ring-ring/50",
        !mounted && "opacity-0"
      )}
    >
      <Switch.Thumb
        className={cn(
          "relative size-5 rounded-full bg-background shadow-sm ring-1 ring-black/5",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "data-[checked]:translate-x-5"
        )}
      >
        <Sun
          weight="fill"
          className={cn(
            "absolute inset-0 m-auto size-3 text-foreground",
            "transition-all duration-300 ease-out",
            "group-data-[checked]/switch:scale-0 group-data-[checked]/switch:-rotate-90 group-data-[checked]/switch:opacity-0"
          )}
        />
        <Moon
          weight="fill"
          className={cn(
            "absolute inset-0 m-auto size-3 text-foreground",
            "scale-0 rotate-90 opacity-0 transition-all duration-300 ease-out",
            "group-data-[checked]/switch:scale-100 group-data-[checked]/switch:rotate-0 group-data-[checked]/switch:opacity-100"
          )}
        />
      </Switch.Thumb>
    </Switch.Root>
  )
}
