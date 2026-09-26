"use client"

import Image from "next/image"
import { useRef, type ReactNode } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "motion/react"

type ParallaxTileProps = {
  label: string
  logo?: string
  project?: boolean
  bg?: string
  color?: string
  children?: ReactNode
  rotateAmplitude?: number
  scaleOnHover?: number
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

export function ParallaxTile({
  label,
  logo,
  project = false,
  bg = "#48e",
  color = "white",
  children,
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
}: ParallaxTileProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude)
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude)
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
  }

  function handleMouseLeave() {
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div
      ref={ref}
      className="relative aspect-video w-full [perspective:800px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg p-8 font-bold shadow-sm transition-shadow duration-500 ease-out [transform-style:preserve-3d] hover:shadow-xl"
        style={{
          backgroundColor: bg,
          color,
          rotateX,
          rotateY,
          scale,
        }}
      >
        {project ? (
          <>
            {logo && (
              <div
                className="pointer-events-none relative h-20 w-full max-w-60 sm:h-24"
                style={{ transform: "translateZ(30px)" }}
              >
                <Image
                  src={logo}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 240px, 240px"
                  className="object-contain"
                  unoptimized={logo.endsWith(".svg")}
                />
              </div>
            )}
            <span className="pointer-events-none absolute bottom-5 left-6 text-left text-xs font-semibold tracking-wide">
              {label}
            </span>
          </>
        ) : (
          <div
            className="pointer-events-none flex flex-col items-center text-center antialiased"
            style={{ transform: "translateZ(30px)" }}
          >
            {logo && (
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-auto"
                unoptimized={logo.endsWith(".svg")}
              />
            )}
            {label}
            {children}
          </div>
        )}
      </motion.div>
    </div>
  )
}
