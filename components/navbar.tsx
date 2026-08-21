import Image from "next/image"
import Link from "next/link"

import { IdeasMenu } from "@/components/ideas-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav
      className="border-b border-border"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/mitesh-avatar.png"
            alt="Mitesh Shah"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <strong>Mitesh Shah</strong>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <IdeasMenu />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
