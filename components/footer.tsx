import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

import { ObfuscatedEmail } from "@/components/obfuscated-contact"

export function Footer() {
  return (
    <footer className="border-border mt-16 border-t py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-6 text-sm">
        <ObfuscatedEmail className="hover:underline" />
        <a
          href="https://linkedin.com/in/theprotagony"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-foreground/80 hover:text-foreground transition-colors"
        >
          <LinkedinLogo weight="fill" className="size-7" />
        </a>
        <a
          href="https://github.com/mitesh-mokko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-foreground/80 hover:text-foreground transition-colors"
        >
          <GithubLogo weight="fill" className="size-7" />
        </a>
      </div>
    </footer>
  )
}
