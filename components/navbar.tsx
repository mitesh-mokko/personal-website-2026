import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav
      className="border-border border-b"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/mitesh-320.jpg"
            alt="Mitesh Shah - Profile Shot"
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
        </div>
      </div>
    </nav>
  )
}
