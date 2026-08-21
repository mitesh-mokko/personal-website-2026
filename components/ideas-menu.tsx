"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function IdeasMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        className="ideas-menu-trigger hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        onClick={() => setOpen((current) => !current)}
      >
        Ideas
        <span
          aria-hidden="true"
          className={`ideas-menu-caret ${open ? "ideas-menu-caret-open" : ""}`}
        />
      </button>

      {open ? (
        <div className="ideas-menu-panel" role="menu">
          <Link
            href="/fsd-hints"
            role="menuitem"
            className="ideas-menu-item"
            onClick={() => setOpen(false)}
          >
            <span>
              <span className="ideas-menu-item-title">FSD Hints</span>
              <span className="ideas-menu-item-description">
                Context, not control.
              </span>
            </span>
            <span aria-hidden="true" className="ideas-menu-arrow">
              ↗
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  )
}
