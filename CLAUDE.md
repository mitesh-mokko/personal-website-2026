# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server with Turbopack
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint (`eslint-config-next` + Next TypeScript rules)
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` — Prettier over `**/*.{ts,tsx}`
- `npx shadcn@latest add <component>` — add a shadcn primitive into `components/ui/`

There is no test suite configured.

## Architecture

Static personal site, Next.js 16 App Router + React 19, deployed as a single SSR app. The whole site is two routes (`app/page.tsx`, `app/projects/page.tsx`) sharing the layout in `app/layout.tsx`.

**Styling stack — Tailwind v4 + shadcn (style "base-lyra", baseColor "mauve")**
- Tailwind v4 has **no `tailwind.config.js`**. All theming lives in `app/globals.css`: `@import "tailwindcss"`, `@import "shadcn/tailwind.css"`, `@theme inline { … }` mapping CSS variables to Tailwind tokens, and `:root` / `.dark` blocks defining the actual oklch values. Add new design tokens by editing those blocks, not a JS config.
- `@custom-variant dark (&:is(.dark *))` — `.dark` is applied to `<html>` by `next-themes` (see `theme-provider.tsx`).
- Prettier is configured with `tailwindStylesheet: "app/globals.css"` and `tailwindFunctions: ["cn", "cva"]`, so class ordering inside `cn(...)` / `cva(...)` is auto-sorted.
- `components.json` declares aliases (`@/components`, `@/components/ui`, `@/lib`, `@/hooks`, `@/lib/utils`) and `iconLibrary: "phosphor"` — use `@phosphor-icons/react` for icons added by shadcn.

**Component primitives** — shadcn components in this project wrap Base UI (`@base-ui/react`), not Radix. See `components/ui/button.tsx` for the pattern: `cva` for variants + `cn` for merging, with the underlying primitive imported from `@base-ui/react/<name>`.

**Animation** — `motion/react` (the `motion` package, successor to Framer Motion). `ParallaxTile` (`components/parallax-tile.tsx`) is the main animated component and is reused for both the tech-stack grid (home) and the projects grid (projects page).

**Theming** — `components/theme-provider.tsx` wraps `next-themes` with `defaultTheme: "system"`. The user-facing toggle lives in the navbar (`components/theme-toggle.tsx`) — a Base UI `Switch` whose thumb shows a Phosphor sun/moon for the current mode. It guards against hydration mismatch by waiting for `mounted` before reflecting `resolvedTheme`.

**Fonts** — Geist (sans, `--font-sans`) and JetBrains Mono (`--font-mono`) loaded via `next/font/google` in `app/layout.tsx`. The site applies `font-mono` globally in `globals.css`; `--font-heading` is also aliased to mono.

**Path alias** — `@/*` resolves to the project root (`tsconfig.json` baseUrl is `.`).

## Conventions

- Prettier: no semicolons, double quotes, 2-space indent, `trailingComma: "es5"`, `printWidth: 80`.
- Use the `cn()` helper from `@/lib/utils` whenever composing class strings; it's `twMerge(clsx(...))`.
- Page-level data (tech stack, project list) is currently inlined as typed const arrays inside the page file — see `app/page.tsx` and `app/projects/page.tsx`.
