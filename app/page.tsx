import { AvailablePill } from "@/components/available-pill"
import { ParallaxTile } from "@/components/parallax-tile"

type Tech = {
  id: string
  name: string
  bg: string
  color?: string
  logo?: string
}

const techStack: Tech[] = [
  { id: "1", name: "React", color: "#61dafb", bg: "#222", logo: "/img/react-icon.svg" },
  { id: "2", name: "React Native", color: "#61dafb", bg: "#222", logo: "/img/react-icon.svg" },
  { id: "3", name: "Node.js", bg: "#026e00", logo: "/img/nodejs-icon.svg" },
  { id: "4", name: "MongoDB", bg: "#13aa52", logo: "/img/mongodb-icon.svg" },
  { id: "5", name: "Express", bg: "#eeeeee", color: "black" },
  { id: "6", name: "Expo", bg: "#4630eb", logo: "/img/expo-icon.svg" },
  { id: "7", name: "Next.js", bg: "#2a84ff" },
]

const availableFullTime = false
const availableFreelance = false

export default function HomePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Hi 👋</h1>
      <p className="mb-10 leading-relaxed">
        I&apos;m Mitesh Shah and I love to build stuff. I am a startup CTO,
        full stack software engineer, game maker and music composer. I also
        dabble - in coffee, wine, science fiction, writing, food plating +
        photography and legos. Got ideas? Let&apos;s talk!
      </p>

      <section className="mb-10">
        <div className="mb-4 flex flex-wrap gap-4">
          <AvailablePill
            available={availableFullTime}
            label={`${availableFullTime ? "Available" : "Currently unavailable"} for full-time remote work`}
          />
          <AvailablePill
            available={availableFreelance}
            label={`${availableFreelance ? "Available" : "Currently unavailable"} for freelance projects`}
          />
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <span>Connect for work:</span>
          <a href="mailto:mitesh@mokko.io" className="hover:underline">
            mitesh@mokko.io
          </a>
          <a href="tel:(312) 409-1803" className="hover:underline">
            text: (312) 409-1803
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Technologies</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {techStack.map((t) => (
            <ParallaxTile
              key={t.id}
              label={t.name}
              color={t.color}
              bg={t.bg}
              logo={t.logo}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
