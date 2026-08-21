import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "FSD Hints — Mitesh Shah",
  description:
    "A product concept for giving Tesla FSD context without taking over.",
  openGraph: {
    title: "FSD can finally take a hint.",
    description:
      "A product concept for giving Tesla FSD context without taking over.",
  },
}

type UseCase = {
  label: string
  scope: string
  phrases: string[]
  note: string
}

const useCases: UseCase[] = [
  {
    label: "Lane",
    scope: "bounded preference",
    phrases: [
      "Stay in this lane until the exit.",
      "Stay in this lane for the next 5 minutes.",
      "Stay in this lane for the next 5 miles.",
    ],
    note: "The hint expires when its boundary is reached.",
  },
  {
    label: "Comfort",
    scope: "situational context",
    phrases: [
      "Slow down—there’s a cop.",
      "Slow down—there’s construction.",
      "Slow down. I’m feeling uncomfortable.",
    ],
    note: "FSD still obeys speed limits; the hint adds a caution window.",
  },
  {
    label: "Parking",
    scope: "arrival intent",
    phrases: [
      "Park nearest to the destination.",
      "Reverse into the driveway.",
      "Parallel park on this street.",
    ],
    note: "A preference about the final maneuver, not a command to break route logic.",
  },
]

export default function FsdHintsPage() {
  return (
    <div className="fsd-page space-y-20 pb-10">
      <section className="border-b border-border pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-[0.16em] uppercase">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                FSD Hints
              </span>
              <Separator
                orientation="vertical"
                className="h-3 w-px"
                aria-hidden="true"
              />
              <span className="flex items-center gap-3 text-muted-foreground">
                <span className="fsd-live-dot text-foreground" />
                Independent product concept / Tesla FSD
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-5xl">
              FSD can finally take a hint.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Give Tesla&apos;s driving agent the context you have in your head—
              without taking over the wheel.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <a
                href="#the-idea"
                className="inline-flex items-center gap-2 bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                See the idea <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <HeroImage />
        </div>
      </section>

      <section id="the-idea" className="border-b border-border pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
          <div>
            <p className="fsd-kicker text-muted-foreground">The idea</p>
            <h2 className="mt-4 max-w-sm text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              A disengagement is an expensive way to say, “not that.”
            </h2>
          </div>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Today, when FSD makes a choice a driver dislikes, the driver often
              has one blunt instrument: take over. The entire driving task is
              interrupted to communicate a preference that could be as small as
              “don&apos;t change lanes yet.”
            </p>
            <p>
              FSD Hints creates a lower-cost communication channel. The human
              provides context. FSD keeps authority over the vehicle, evaluates
              the hint against safety and the route, then lets it expire when it
              is no longer useful.
            </p>
            <div className="border-l-2 border-foreground pl-5 text-xl leading-tight font-semibold text-foreground">
              Context, not control.
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="border-b border-border pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="fsd-kicker text-muted-foreground">What you can say</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Hints have a scope.
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-5 tracking-[0.12em] text-muted-foreground uppercase">
            Preference + context window, bounded by the driving system
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card
              key={useCase.label}
              role="article"
              className="use-case-card rounded-none bg-background py-0 shadow-none ring-0"
            >
              <CardHeader className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {useCase.label}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-[0.6rem] tracking-[0.1em] text-muted-foreground uppercase"
                  >
                    {useCase.scope}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                <ul className="space-y-5">
                  {useCase.phrases.map((phrase, index) => (
                    <li
                      key={phrase}
                      className="flex gap-3 text-lg leading-tight font-semibold tracking-tight"
                    >
                      <span className="pt-1 text-[0.6rem] tracking-[0.1em] text-muted-foreground">
                        0{index + 1}
                      </span>
                      <span>“{phrase}”</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto p-6 sm:p-8">
                <p className="text-[0.62rem] leading-5 tracking-[0.08em] text-muted-foreground uppercase">
                  {useCase.note}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="boundary" className="border-b border-border pb-20">
        <div className="mb-10 max-w-md">
          <p className="fsd-kicker text-muted-foreground">The boundary</p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            A hint is not a command.
          </h2>
        </div>
        <BoundaryDiagram />
        <div className="mt-4 border border-border bg-muted/30 p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-5">
            <div>
              <p className="fsd-kicker text-muted-foreground">V1 constraint</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                One active hint at a time.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              A new hint supersedes the previous one. Completed, canceled, or
              irrelevant hints expire.
            </p>
          </div>
        </div>
      </section>

      <section id="experiment" className="border-b border-border pb-20">
        <p className="fsd-kicker text-muted-foreground">The experiment</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <h2 className="max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Make disagreement cheaper.
          </h2>
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Start with a small, supervised experiment. Measure whether drivers
              use hints to communicate preferences that would otherwise cause a
              disengagement—and whether FSD can honor them without eroding
              trust.
            </p>
            <p className="mt-4 text-xs tracking-[0.1em] text-muted-foreground uppercase">
              No results claimed yet. This is the proposed measurement plan.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              <Metric
                category="Primary outcome"
                value="↓"
                label="Fewer disengagements over minor frustrations"
                description="Takeovers associated with common preference moments: lane choice, passing, speed comfort, and parking."
              />
              <Metric
                category="Primary outcome"
                value="↑"
                label="Longer FSD streaks"
                description="Median time or miles between manual takeovers."
              />
              <Metric
                category="Secondary"
                value="↗"
                label="Hint resolution rate"
                description="Hints accepted, completed, or clearly declined by FSD."
              />
              <Metric
                category="Guardrail"
                value="!"
                label="Post-hint intervention rate"
                description="Manual takeovers, cancellations, or repeated corrections after a hint."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl text-center">
        <p className="fsd-kicker text-muted-foreground">
          A small idea about a big transition
        </p>
        <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Let the driver stay in the conversation.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Autonomous driving gets better when people have more ways to
          communicate—and fewer reasons to take over.
        </p>
        <div className="mx-auto mt-10 max-w-2xl border-t border-border pt-6">
          <p className="fsd-kicker text-muted-foreground">
            Built for the transition to autonomy
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            With a driver, a hint shapes the moment. In a robotaxi, the same
            channel expresses passenger intent: “Drop me at this entrance,”
            “wait here,” “go around back,” or “take the accessible route.”
          </p>
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Independent product concept · August 2026
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Not affiliated with Tesla.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm text-foreground underline decoration-foreground underline-offset-8 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Back to Mitesh&apos;s site
        </Link>
      </section>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="mx-auto w-full max-w-[35rem]">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/img/tesla-fsd-hints-hero.png"
          alt="Tesla FSD interface showing a driver asking to stay in the lane for five miles"
          width={1536}
          height={1024}
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="block h-auto w-full"
        />
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Concept render of a distance-bounded preference: the driver asks, FSD
        acknowledges, and the hint expires when the scope is complete.
      </p>
    </div>
  )
}

function BoundaryDiagram() {
  return (
    <figure
      className="hint-diagram bg-muted/40 p-3 sm:p-4"
      aria-labelledby="hint-diagram-caption"
    >
      <figcaption id="hint-diagram-caption" className="sr-only">
        A hint flows from human context to FSD&apos;s safety decision, then
        expires. The driver can take over at any point.
      </figcaption>

      <div className="hint-diagram-flow">
        <DiagramNode
          step="01"
          title="The human provides"
          copy="Intent, context, and a preference about what would make this moment better."
        />
        <DiagramArrow />
        <DiagramNode
          step="02"
          title="FSD decides"
          copy="Whether the hint is safe, legal, feasible, and still relevant to the route."
        />
        <DiagramArrow />
        <DiagramNode
          step="03"
          title="Hints expire"
          copy="A request should not silently become a permanent driving preference."
        />
      </div>

      <div className="hint-diagram-escape">
        <span className="hint-diagram-escape-label">Always available</span>
        <DiagramNode
          step="↗"
          title="Takeover remains"
          copy="The driver can always take control. This is a new channel, not a replacement."
        />
      </div>
    </figure>
  )
}

function DiagramNode({
  step,
  title,
  copy,
}: {
  step: string
  title: string
  copy: string
}) {
  return (
    <div className="hint-diagram-node bg-background p-5 sm:p-6">
      <span
        className={`hint-diagram-node-step ${step === "↗" ? "hint-diagram-node-step-branch" : ""}`}
        aria-hidden={step === "↗" ? true : undefined}
        style={
          step === "↗" ? { fontSize: "1.75rem", lineHeight: 1 } : undefined
        }
      >
        {step}
      </span>
      <h3 className="mt-10 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {copy}
      </p>
    </div>
  )
}

function DiagramArrow() {
  return (
    <span className="hint-diagram-arrow" aria-hidden="true">
      <span className="hint-diagram-arrow-wide">→</span>
      <span className="hint-diagram-arrow-stack">↓</span>
    </span>
  )
}

function Metric({
  category,
  value,
  label,
  description,
}: {
  category: string
  value: string
  label: string
  description: string
}) {
  return (
    <Card size="sm" className="rounded-none bg-muted py-0 shadow-none ring-0">
      <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
        <Badge
          variant="ghost"
          className="w-fit px-0 text-[0.62rem] tracking-[0.1em] text-muted-foreground uppercase"
        >
          {category}
        </Badge>
        <CardAction>
          <span className="text-3xl leading-none font-semibold tracking-tight">
            {value}
          </span>
        </CardAction>
      </CardHeader>
      <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
        <p className="mt-8 text-lg leading-tight font-semibold tracking-tight">
          {label}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
