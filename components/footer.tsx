export function Footer() {
  return (
    <footer className="border-border mt-16 border-t py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-6 text-sm">
        <a href="mailto:mitesh@mokko.io" className="hover:underline">
          mitesh@mokko.io
        </a>
        <a
          href="https://linkedin.com/in/theprotagony"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="/img/social/linkedin.svg"
            alt="LinkedIn"
            className="h-8 w-8"
          />
        </a>
        <a
          href="https://github.com/mitesh-mokko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src="/img/github-icon.svg"
            alt="GitHub"
            className="h-8 w-8"
          />
        </a>
      </div>
    </footer>
  )
}
