import Image from "next/image"
import Link from "next/link"

import { IdeasMenu } from "@/components/ideas-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/mitesh-avatar.png"
            alt="Mitesh Shah"
            width={48}
            height={48}
            className="size-10 rounded-full md:size-12"
            priority
          />
          <strong>Mitesh Shah</strong>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm md:flex"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <IdeasMenu />
          <ThemeToggle />
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}
