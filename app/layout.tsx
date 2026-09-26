import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Mitesh Shah - Software Engineer / CTO",
  description:
    "A website where I express my love of building software for startups.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#ff4400" },
    ],
  },
  openGraph: {
    type: "website",
    title: "Mitesh Shah - Software Engineer / CTO",
    url: "/",
    images: [{ url: "/img/og-image-lower.jpg" }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f3" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontDisplay.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-[96rem] flex-1 px-6 py-10 sm:px-8 lg:px-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
