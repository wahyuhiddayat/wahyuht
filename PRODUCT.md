# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, and potential collaborators evaluating Wahyu Hidayat for Data Scientist, Machine Learning Engineer, AI Engineer, Data Engineer, or Software Engineer roles — both full-time and internship. Also serves as Wahyu's general professional presence for networking and opportunities outside a specific hiring process.

## Product Purpose

Personal portfolio site (wahyuht.com) presenting Wahyu Hidayat's experience, projects, education, and skills. Success means a visitor comes away able to evaluate him for a DS/ML/AI/SWE role or opportunity and has a clear path to contact him.

## Positioning

Not yet confirmed. Wahyu was unsure what makes his portfolio distinct from other CS-student portfolios when asked directly. Candidates visible in the evidence on hand: applied AI/legal-tech research (RAG for legal QA at Lexin), a combined technical + organizational leadership track record (BEM Fasilkom VP alongside ML/fraud-detection work), and real production fintech work (Sokratech). Do not commit to one of these as the stated differentiator without asking again.

## Operating Context

Single-page site with sections for hero/intro, about, experience, education, projects, skills, and contact, plus dark/light theme switching. Content is maintained as static TypeScript data files (`src/data/*.ts`), not a CMS.

## Capabilities and Constraints

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, next-themes, lucide-react. Deployed at wahyuht.com with full SEO/structured-data setup (Person + WebSite JSON-LD, OpenGraph, Twitter cards, sitemap, robots).

## Brand Commitments

Name: Wahyu Hidayat, site/handle: "wahyuht". Bio voice is first-person, warm, and casual (uses an emoji in the tagline and casual note). Confirmed social links: GitHub (wahyuhiddayat), LinkedIn (wahyuuhidayat), Instagram (wahyyuht), Spotify.

## Evidence on Hand

Real, current content only — no fabricated testimonials, metrics, or claims:
- Experience: AI Engineer/Researcher Intern at UI's Lexin (legal AI/RAG), Vice President and prior roles at BEM Fasilkom UI, Teaching Assistant for Computer Organization.
- Projects: Sokratech fraud-detection dashboard (live), anomaly detection on 541K+ retail transactions (live demo + GitHub), this portfolio itself, Letterbookd (GitHub only, no live demo).
- Education: Bachelor of Computer Science, Universitas Indonesia (2022–present, in progress).
- Assets: profile photo and per-project/employer logos/screenshots in `public/images/`.
- Skills list in `src/data/skills.ts` (languages, ML, web frameworks, tools, data/analytics).

## Product Principles

- Every claim on the site must trace to real, verifiable work — no invented metrics or testimonials.
- The site serves both an active job/internship search and a durable professional presence; do not design only for a single hiring moment.
- Content lives in typed data files; new work should extend that pattern rather than hardcoding content into components.
