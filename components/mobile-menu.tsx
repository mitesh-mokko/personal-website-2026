"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/idea-loop", label: "Product IDEA Loop" },
  { href: "/fsd-hints", label: "FSD Hints" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }

    function closeOnOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", closeOnEscape)
    document.addEventListener("mousedown", closeOnOutsideClick)

    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.removeEventListener("mousedown", closeOnOutsideClick)
    }
  }, [])

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-23 items-center justify-center gap-2 rounded-md border border-border px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="relative block size-4">
          <span
            className={`absolute top-1 left-0 block h-px w-full bg-current transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`absolute bottom-1 left-0 block h-px w-full bg-current transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full border-b border-border bg-card px-4 pb-4 shadow-lg sm:px-6"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="mx-auto max-w-6xl border-t border-border pt-2"
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.035 } } }}
            >
              {links.map(({ href, label }) => (
                <motion.div
                  key={href}
                  variants={
                    reduceMotion
                      ? undefined
                      : {
                          hidden: { opacity: 0, y: -5 },
                          show: { opacity: 1, y: 0 },
                        }
                  }
                >
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-border/70 px-2 text-base font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring aria-[current=page]:font-semibold"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between px-2 pt-4 text-sm text-muted-foreground">
                <span>Appearance</span>
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
