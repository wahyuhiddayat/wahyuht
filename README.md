Personal portfolio for Wahyu Hidayat, live at [wahyyuht.com](https://wahyyuht.com).

A single-page Next.js site. All content (experience, projects, skills, education) lives in typed data files under `src/data/`, not hardcoded into components.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling, with CSS variables driving light/dark theming
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals and transitions
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode

## Getting started

```bash
npm install
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

There is no test suite configured.

## Project structure

- `src/app/` — routes, layout, and metadata (`sitemap.ts`, `robots.ts`, `manifest.ts`)
- `src/components/sections/` — one component per page section (About, Experience, Projects, ...), presentational only
- `src/components/` — shared UI (Navbar, ProjectCard, ThemeSwitcher, ...)
- `src/data/` — typed content: personal info, experience, education, projects, skills
- `src/lib/` — structured data (JSON-LD) generation
- `src/hooks/` — `useActiveSection`, which drives nav highlighting on scroll
