import type { Metadata } from "next"
import Link from "next/link"

const frameworkUrl = "https://mitesh-mokko.github.io/product-idea-loop/"
const manifestoUrl = `${frameworkUrl}manifesto/`
const repositoryUrl = "https://github.com/mitesh-mokko/product-idea-loop"

export const metadata: Metadata = {
  title: "Product IDEA Loop — Mitesh Shah",
  description:
    "Mitesh Shah's framework for building, learning, and making better product decisions in focused loops.",
  openGraph: {
    title: "Product IDEA Loop",
    description:
      "Insight, Design, Engineering, and Analysis together in one working session.",
  },
}

const disciplines = [
  {
    letter: "I",
    name: "Insight",
    question: "What problem are we solving, and for whom?",
  },
  {
    letter: "D",
    name: "Design",
    question: "What should the experience feel like?",
  },
  {
    letter: "E",
    name: "Engineering",
    question: "How does it actually work?",
  },
  {
    letter: "A",
    name: "Analysis",
    question: "How will we know it worked?",
  },
]

export default function IdeaLoopPage() {
  return (
    <div className="pb-12">
      <section className="section-wide border-b border-border pb-16">
        <div className="section-prose">
          <p className="mb-8 text-sm font-semibold text-muted-foreground">
            Product IDEA Loop
          </p>
          <h1 className="type-page-title">
            More affordable attempts. Better decisions.
          </h1>
          <p className="type-lead mt-8 max-w-xl text-muted-foreground">
            A way to build software in the AI era: bring the whole product
            conversation into one focused working session, make something real,
            and use what you learn to choose the next move.
          </p>
          <a
            href={frameworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Read the full framework <span aria-hidden="true">↗</span>
          </a>
        </div>

        <figure className="mx-auto mt-12 max-w-4xl border border-border bg-muted/30 p-5 sm:p-7">
          <figcaption className="mb-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Four disciplines stay active together. Each can change the others
            before the loop closes.
          </figcaption>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {disciplines.map((discipline) => (
              <div
                key={discipline.letter}
                className="flex min-h-40 flex-col justify-between bg-background p-4 sm:min-h-44 sm:p-5"
              >
                <span className="text-5xl leading-none font-semibold tracking-tight sm:text-6xl">
                  {discipline.letter}
                </span>
                <div>
                  <p className="font-semibold">{discipline.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {discipline.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            One working session, all four perspectives
          </p>
        </figure>
      </section>

      <section className="section-prose border-b border-border py-16">
        <h2 className="type-section-title mb-6">
          The loop replaces a long wait with a useful attempt.
        </h2>
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            Most teams do not run out of ideas. They run out of affordable
            attempts. AI makes it possible to explore a question with working
            software sooner. The challenge becomes making sense of what that
            attempt teaches you.
          </p>
          <p>
            In an IDEA Loop, insight, design, engineering, and analysis inform
            each other while the work is happening. A user insight can reshape
            the interface. A technical constraint can sharpen the scope. An
            early measurement can change what gets built next.
          </p>
          <p className="border-l-2 border-foreground pl-5 font-semibold text-foreground">
            The product is the evidence. The decision is the outcome.
          </p>
        </div>
      </section>

      <section className="section-prose border-b border-border py-16">
        <div>
          <div>
            <h2 className="type-section-title">A loop has a finish line.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Most loops run for 1–6 hours. You can pause, but each loop closes
              within 72 hours with a clear record of what changed.
            </p>
          </div>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            <li className="flex gap-5 py-5">
              <span className="w-7 shrink-0 text-sm text-muted-foreground">
                01
              </span>
              <div>
                <h3 className="type-subsection-title">Something concrete</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  A prototype, flow, screen, or working slice.
                </p>
              </div>
            </li>
            <li className="flex gap-5 py-5">
              <span className="w-7 shrink-0 text-sm text-muted-foreground">
                02
              </span>
              <div>
                <h3 className="type-subsection-title">What you learned</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  The evidence that strengthened or challenged the idea.
                </p>
              </div>
            </li>
            <li className="flex gap-5 py-5">
              <span className="w-7 shrink-0 text-sm text-muted-foreground">
                03
              </span>
              <div>
                <h3 className="type-subsection-title">What happens next</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Ship, iterate, pivot, or stop.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section-prose py-16">
        <h2 className="type-section-title">Start the next loop stronger.</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          The framework is open and evolving. Read the practical playbook, the
          manifesto, and the ways to contribute on the Product IDEA Loop site.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
          <a
            href={frameworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Explore the framework ↗
          </a>
          <a
            href={manifestoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Read the manifesto ↗
          </a>
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            View the GitHub repository ↗
          </a>
          <Link
            href="/"
            className="underline underline-offset-4 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Back to Mitesh&apos;s site
          </Link>
        </div>
      </section>
    </div>
  )
}
