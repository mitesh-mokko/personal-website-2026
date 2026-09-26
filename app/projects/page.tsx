import { ParallaxTile } from "@/components/parallax-tile"

type Project = {
  id: string
  name: string
  link: string
  bg: string
  color?: string
  logo: string
  context: string
  summary: string
}

const projects: Project[] = [
  {
    id: "codapet",
    name: "CodaPet",
    link: "https://www.codapet.com",
    bg: "#e9f1f5",
    color: "#3f5675",
    logo: "/img/projects/codapet.svg",
    context: "Head of Engineering · Full-time",
    summary:
      "I joined as founding engineer and now lead engineering. CodaPet brings licensed vets into homes across 30+ metros — the most successful startup of my career.",
  },
  {
    id: "exchange",
    name: "Route Exchange",
    link: "https://exchange.getroute.com",
    bg: "#171717",
    logo: "/img/projects/exchange.png",
    context: "Founding engineer · Current client",
    summary:
      "Route's subcontractor marketplace. Primes find vetted subs, subs surface for matched work, the paperwork lives in one place.",
  },
  {
    id: "scroodles",
    name: "Scroodles",
    link: "https://apps.apple.com/us/app/scroodles/id912236766",
    bg: "#ffe5eb",
    color: "#36212b",
    logo: "/img/projects/scroodles.webp",
    context: "Partner · Coming back online",
    summary:
      "iOS word game. Form words from tiles to battle the Scroodles across 180+ levels.",
  },
  {
    id: "personify",
    name: "Personify",
    link: "https://personifyhq.com",
    bg: "#f2eee7",
    color: "#000f37",
    logo: "/img/projects/personify.svg",
    context: "Co-founder",
    summary:
      "Product discovery tool. User stories, personas, and journey maps share one narrative spine instead of living in three disconnected docs.",
  },
  {
    id: "route",
    name: "Route",
    link: "https://getroute.com",
    bg: "#000000",
    logo: "/img/projects/route.png",
    context: "Co-founder · Exited",
    summary:
      "B2B platform for the commercial cleaning industry. Subcontractor marketplace, mobile proposals, peer forum — three products under one brand.",
  },
  {
    id: "alogent-adl",
    name: "Alogent Design Language",
    link: "https://alogent-design-language.netlify.app",
    bg: "#eaf0ff",
    color: "#202020",
    logo: "/img/projects/alogent.png",
    context: "Former client",
    summary:
      "React design system for a banking software suite. Tokens, components, and the patterns the product teams build on top of.",
  },
  {
    id: "alogent-nxt",
    name: "Alogent NXT Scout",
    link: "https://nxt-scout.netlify.app",
    bg: "#e7f1e4",
    color: "#202020",
    logo: "/img/projects/alogent.png",
    context: "Former client",
    summary:
      "Next-generation banking demo built on the design language above. The system in motion, end to end.",
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <section className="section-prose mb-10">
        <h1 className="type-page-title mb-6">Projects</h1>
        <p className="type-lead">
          Fifteen years of products. B2B platforms, banking design systems,
          consumer apps, an iOS word game. Range on purpose. Small teams across
          all of them, simple stacks when the call was mine.
        </p>
      </section>

      <section className="section-wide grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="space-y-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ParallaxTile
                label={project.name}
                logo={project.logo}
                project
                bg={project.bg}
                color={project.color}
              />
            </a>
            <div className="space-y-1.5">
              <p className="text-xs font-semibold tracking-wide text-foreground">
                {project.context}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
