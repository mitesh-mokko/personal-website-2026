import {
  ObfuscatedEmail,
  ObfuscatedPhone,
} from "@/components/obfuscated-contact"
import { ParallaxTile } from "@/components/parallax-tile"
import { PullQuote } from "@/components/pull-quote"

type Tech = {
  id: string
  name: string
  bg: string
  color?: string
  logo?: string
  reason: string
}

const techStack: Tech[] = [
  {
    id: "next",
    name: "Next.js",
    bg: "#000",
    color: "#fff",
    logo: "/img/tech/nextjs.svg",
    reason:
      "Front-end and back-end in one mental model. Three boxes on the architecture diagram collapse into one.",
  },
  {
    id: "react",
    name: "React",
    bg: "#222",
    color: "#61DAFB",
    logo: "/img/tech/react.svg",
    reason:
      "The component model. Universal, predictable, and every tool — human or AI — already knows it.",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    bg: "#38BDF8",
    color: "#0F172A",
    logo: "/img/tech/tailwind.svg",
    reason: "Stop naming things. Style where you write the markup.",
  },
  {
    id: "supabase",
    name: "Supabase",
    bg: "#3ECF8E",
    color: "#1C1C1C",
    logo: "/img/tech/supabase.svg",
    reason:
      "Postgres, auth, storage, realtime. One service, four problems solved. Still just Postgres underneath.",
  },
  {
    id: "expo",
    name: "Expo",
    bg: "#000",
    color: "#fff",
    logo: "/img/tech/expo.svg",
    reason:
      "React Native without the native pain. iOS and Android from one codebase, one toolchain.",
  },
  {
    id: "tanstack",
    name: "TanStack Start",
    bg: "#181818",
    color: "#FFD814",
    logo: "/img/tech/tanstack.svg",
    reason:
      "Type-safe full-stack with sharper routing. The right call when Next isn't.",
  },
  {
    id: "vercel",
    name: "Vercel",
    bg: "#000",
    color: "#fff",
    logo: "/img/tech/vercel.svg",
    reason:
      "git push is the deploy. The infrastructure layer that disappears.",
  },
  {
    id: "linear",
    name: "Linear",
    bg: "#5E6AD2",
    color: "#fff",
    logo: "/img/tech/linear.svg",
    reason:
      "The project tool that respects your time. Built for shipping, not ticket archaeology.",
  },
  {
    id: "claude",
    name: "Claude",
    bg: "#D97757",
    color: "#fff",
    logo: "/img/tech/claude.svg",
    reason:
      "The thoughtful AI. Pair-programmer for code and prose, with judgment to spare.",
  },
  {
    id: "openai",
    name: "OpenAI",
    bg: "#FAFAF9",
    color: "#0D0D0D",
    logo: "/img/tech/openai.svg",
    reason:
      "The other half of the modern AI toolbox. Reach for them where their strengths line up.",
  },
  {
    id: "cursor",
    name: "Cursor",
    bg: "#000",
    color: "#fff",
    logo: "/img/tech/cursor.svg",
    reason:
      "An AI-first IDE. The whole thing was designed around it, not retrofitted to fit it in.",
  },
]

export default function HomePage() {
  return (
    <div>
      <h1 className="sr-only">Mitesh Shah</h1>

      <section className="mb-14 max-w-3xl leading-relaxed">
        <h2 className="mb-5 text-2xl font-semibold">Get to know me</h2>

        <p className="text-lg">
          As a kid, I played with Legos a lot. At first, I built the picture.
          Then, I built what I could picture. Eventually I wanted to build
          things that I didn&apos;t have the pieces for. And that&apos;s
          where it began.
        </p>

        <PullQuote>Solve the problem by building your own pieces.</PullQuote>

        <div className="space-y-5">
          <p>
            I&apos;ve been a builder ever since. I couldn&apos;t afford the
            Lego motors, so I soldered cheap model motors into the housings.
            I wanted a PlayStation steering wheel, so I broke apart a
            controller and built one out of styrofoam and cardboard with the
            original circuitry intact. I fixed a VCR. Wrote songs in Logo
            beep. Made games. Made apps. Now I bring bigger ideas to life
            through startups. And I feel like I&apos;m just getting started.
          </p>
          <p>
            Snap together the right pieces, and we can build anything we
            want — the right teams, the right software, the right products,
            and even the right robots.
          </p>
        </div>
      </section>

      <section className="mb-14 max-w-3xl space-y-5 leading-relaxed">
        <h2 className="mb-2 text-2xl font-semibold">How I work</h2>

        <p className="text-lg font-semibold">
          Small teams. Simple stacks. Surface area you can hold in your head.
        </p>

        <p>
          The work I&apos;m proudest of has come from groups tight enough that
          one person can hold the whole product in their head, and stacks
          simple enough that the whole architecture fits there too. People
          mistake this for a constraint. It&apos;s the opposite. Simplicity is
          what makes ambitious work possible.
        </p>

        <p>
          Every tool, every framework, every additional person has to earn its
          place. Not by what it&apos;d look like at Netflix scale. Not by
          what&apos;s in fashion this quarter. The bar is:{" "}
          <em>does this help us make the thing?</em>
        </p>

        <p>
          The hardest one to defend in big organizations is the one I&apos;m
          most right about: <strong>trust over process.</strong> Process is
          what you reach for when you don&apos;t trust anyone in the room.
          With the right people, you don&apos;t need much of it. With the
          wrong people, no amount of it will save you. And it&apos;s even
          easier to trust when the team is shipping actual product instead
          of closing tickets.
        </p>
      </section>

      <section className="mb-14 max-w-3xl leading-relaxed">
        <h2 className="mb-5 text-2xl font-semibold">Why it works</h2>

        <p>
          Big teams have a quiet failure mode. Coordination scales
          geometrically. Meetings and ceremony eat the runway. Each person
          looks busy and productive. The organization atrophies.
        </p>

        <PullQuote>
          A small group with the right stack will outpace a committee of
          forty. Almost always.
        </PullQuote>

        <div className="space-y-5">
          <p>
            In the AI era, this is even more true. The bottleneck isn&apos;t
            building speed. It&apos;s decision quality. And decision quality
            lives in small groups thinking clearly together.
          </p>

          <p>That&apos;s the whole game.</p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-semibold">The operating system</h2>
        <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          Generally true. Not universal. Each product and startup makes its
          own intentional choices.
        </p>

        <ol className="mb-10 max-w-3xl list-none space-y-8">
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              00
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">AI-first from here on out.</p>
              <p>Think with AI. Do with AI. Build with AI.</p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              01
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">Sketch it out.</p>
              <p>
                Build a prototype with AI in v0 or Replit instead of a doc or
                slide deck. It answers questions up front. Kills bad ideas
                earlier. Strengthens great ones until your teammates are
                thrilled to build them.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              02
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">
                TypeScript / JavaScript everywhere.
              </p>
              <p>
                Frontend, backend, even native. Seamless prototyping. Code
                reuse across boundaries.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              03
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">Intentional frugality.</p>
              <p>
                Not chasing token leaderboards. Not opening 10 agent windows
                at once. Not hiring 5 engineers at once.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              04
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">
                Assume rewrites are cheap when needed.
              </p>
              <p>
                Need a native Swift app? Cutting-edge Apple SDKs?
                Platform-grade transitions? First we answer why. By Series B,
                the native team is affordable.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              05
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">
                5 people × 10 hours ≠ 10 people × 5 hours.
              </p>
              <p>
                Same person-hours on paper. One ships. The other ships
                nothing.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-muted-foreground w-8 shrink-0 pt-1 font-mono text-sm">
              06
            </span>
            <div className="flex-1 space-y-2 leading-relaxed">
              <p className="font-semibold">Less ceremony.</p>
              <p>
                Minimize recurring meetings. Match &ldquo;talk about
                work&rdquo; with at least as much &ldquo;do the work.&rdquo;
                Agile and Scrum? While you&apos;re at it, throw the whole
                thing out.
              </p>
            </div>
          </li>
        </ol>

        <p className="text-muted-foreground mb-6 text-sm font-medium">
          Some preferred tools and technologies
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {techStack.map((t) => (
            <div key={t.id} className="space-y-3">
              <ParallaxTile
                label={t.name}
                color={t.color}
                bg={t.bg}
                logo={t.logo}
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <span>Want to chat more?</span>
        <ObfuscatedEmail className="hover:underline" />
        <ObfuscatedPhone className="hover:underline" prefix="text: " />
      </section>
    </div>
  )
}
