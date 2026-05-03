import { ParallaxTile } from "@/components/parallax-tile"

type Project = {
  id: string
  name: string
  link: string
  bg: string
  color?: string
}

const projects: Project[] = [
  { id: "0", name: "Personify", link: "https://personifyhq.com", bg: "#ca9052" },
  { id: "0.1", name: "Piano UI", link: "https://piano-ui.netlify.app", bg: "#f0f0f0", color: "#000000" },
  { id: "1", name: "Route", link: "https://getroute.com", bg: "black" },
  { id: "2", name: "Alogent Design Language", link: "https://alogent-design-language.netlify.app", bg: "#18b422" },
  { id: "3", name: "Alogent NXT Scout", link: "https://nxt-scout.netlify.app", bg: "#18b422" },
  { id: "4", name: "SQRL Workforce / Design System", link: "https://sqrl.me", bg: "#9013fe" },
  { id: "5", name: "Tiffinity", link: "https://demo.tiffinity.com", bg: "#df4937" },
  { id: "6", name: "Scroodles", link: "https://apps.apple.com/us/app/scroodles/id912236766", bg: "#fe87a8" },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">Projects</h1>
      <p className="mb-8 max-w-3xl leading-relaxed">
        Take a look at some of my finest work in the last 15 years. Lately I
        have been obsessed with React based Design Systems.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
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
        ))}
      </div>
    </div>
  )
}
