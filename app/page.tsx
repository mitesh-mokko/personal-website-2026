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
  { id: "next", name: "Next.js", bg: "#000", color: "#fff", logo: "/img/tech/nextjs.svg" },
  { id: "react", name: "React", bg: "#222", color: "#61DAFB", logo: "/img/tech/react.svg" },
  { id: "tailwind", name: "Tailwind", bg: "#38BDF8", color: "#0F172A", logo: "/img/tech/tailwind.svg" },
  { id: "supabase", name: "Supabase", bg: "#3ECF8E", color: "#1C1C1C", logo: "/img/tech/supabase.svg" },
  { id: "expo", name: "Expo", bg: "#000", color: "#fff", logo: "/img/tech/expo.svg" },
  { id: "tanstack", name: "TanStack Start", bg: "#181818", color: "#FFD814", logo: "/img/tech/tanstack.svg" },
  { id: "vercel", name: "Vercel", bg: "#000", color: "#fff", logo: "/img/tech/vercel.svg" },
  { id: "linear", name: "Linear", bg: "#5E6AD2", color: "#fff", logo: "/img/tech/linear.svg" },
  { id: "claude", name: "Claude", bg: "#D97757", color: "#fff", logo: "/img/tech/claude.svg" },
  { id: "openai", name: "OpenAI", bg: "#FAFAF9", color: "#0D0D0D", logo: "/img/tech/openai.svg" },
  { id: "cursor", name: "Cursor", bg: "#000", color: "#fff", logo: "/img/tech/cursor.svg" },
]

const availableFullTime = false
const availableFreelance = false

export default function HomePage() {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">Hi 👋</h1>
      <p className="mb-10 max-w-3xl leading-relaxed">
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
        <h2 className="mb-4 text-2xl font-semibold">What I build with</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
