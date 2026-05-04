import { ParallaxTile } from "@/components/parallax-tile"

type Project = {
  id: string
  name: string
  link: string
  bg: string
  color?: string
  summary: string
}

const projects: Project[] = [
  {
    id: "personify",
    name: "Personify",
    link: "https://personifyhq.com",
    bg: "#ca9052",
    summary:
      "Product discovery tool. User stories, personas, and journey maps share one narrative spine instead of living in three disconnected docs.",
  },
  {
    id: "codapet",
    name: "CodaPet",
    link: "https://www.codapet.com",
    bg: "#527cac",
    summary:
      "In-home end-of-life care for pets. A network of licensed vets across 30+ metros, so the goodbye happens at home, not in a clinic.",
  },
  {
    id: "route",
    name: "Route",
    link: "https://getroute.com",
    bg: "#000000",
    summary:
      "B2B platform for the commercial cleaning industry. Subcontractor marketplace, mobile proposals, peer forum — three products under one brand.",
  },
  {
    id: "exchange",
    name: "Route Exchange",
    link: "https://exchange.getroute.com",
    bg: "#0081CC",
    summary:
      "Route's subcontractor marketplace. Primes find vetted subs, subs surface for matched work, the paperwork lives in one place.",
  },
  {
    id: "alogent-adl",
    name: "Alogent Design Language",
    link: "https://alogent-design-language.netlify.app",
    bg: "#18b422",
    summary:
      "React design system for a banking software suite. Tokens, components, and the patterns the product teams build on top of.",
  },
  {
    id: "alogent-nxt",
    name: "Alogent NXT Scout",
    link: "https://nxt-scout.netlify.app",
    bg: "#0e7a18",
    summary:
      "Next-generation banking demo built on the design language above. The system in motion, end to end.",
  },
  {
    id: "sqrl",
    name: "SQRL",
    link: "https://sqrl.me",
    bg: "#9013fe",
    summary:
      "Wellness app that auto-saves money based on what your body did that day. Steps, gratitude, and a transfer to your savings account every week.",
  },
  {
    id: "scroodles",
    name: "Scroodles",
    link: "https://apps.apple.com/us/app/scroodles/id912236766",
    bg: "#fe87a8",
    summary:
      "iOS word game. Form words from tiles to battle the Scroodles across 180+ levels.",
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">Projects</h1>
      <p className="mb-10 max-w-3xl leading-relaxed">
        Fifteen years of products. B2B platforms, banking design systems,
        consumer apps, an iOS word game. Range on purpose. Small teams across
        all of them, simple stacks when the call was mine.
      </p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
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
                bg={project.bg}
                color={project.color}
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
