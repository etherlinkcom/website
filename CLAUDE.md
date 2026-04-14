# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Etherlink.com is the marketing and ecosystem directory website for the Etherlink blockchain. It is a **statically exported Next.js 13 site** (App Router) using **Strapi v5 (GraphQL)** as the headless CMS for project listings and tags. Built with TypeScript, Tailwind CSS, and Flowbite React.

## Commands

```bash
bun install --no-save   # Install dependencies (without modifying lockfile)
bun dev                  # Dev server at localhost:3000
npm run build            # Static export to out/
npm start                # Serve the static out/ directory
npm run lint             # ESLint check
npm run lint:fix         # ESLint auto-fix
npm run format           # Prettier format
```

Pre-commit hook runs `bunx lint-staged` which applies `eslint --fix` to staged `.js/.ts/.tsx` files.

## Architecture

### Static Export

`next.config.js` sets `output: 'export'` with `distDir: 'out'`. All pages are pre-rendered at build time. There are **no API routes**. Images are unoptimized (required for static export).

### Strapi CMS

Data is fetched from Strapi v5 via GraphQL (`utils/strapi/client.ts`):
- **Ecosystem Projects** (`utils/strapi/ecosystem.ts`) — `EtherlinkEcosystemProject` collection. Fetched with `fetchEcosystemProjects()`, filtered to approved + published, sorted by rank.
- **Tags** (`utils/strapi/ecosystem.ts`) — `EtherlinkProjectTag` collection. Fetched with `getDynamicTagsMap()` to build a slug→label map.
- **TagsContext** (`utils/strapi/TagsContext.tsx`) — tag map fetched once in root layout and provided via React Context to client components.

The `Project` interface in `utils/strapi/ecosystem.ts` maps Strapi fields to the shape expected by UI components (e.g., Strapi `name` → `Project`, Strapi `description` → `Description`). This keeps component code unchanged from the original structure.

### Homepage Featured Section

The featured banner section is **hardcoded** in `app/components/pages/RevampHome/FeaturedSection.tsx` — not CMS-driven.

### Routing

File-based App Router routes under `/app`. Dynamic route: `/defi/[slug]/page.tsx`. Server Components by default; `'use client'` directive for interactive components.

### Styling

- Tailwind CSS with JIT mode, Flowbite React plugin
- Custom color palette: `darkGreen`, `neonGreen`, `grey`, `newGreen`, `lightGreen`, `lightBlack`, `midBlack`, `darkBlack`
- Max-width breakpoints: `max-sm`, `max-md`, `max-lg`, `max-xl`, `max-2xl`
- Font: Inter (sans-serif)

### Analytics

Triple-stack: PostHog (product analytics), Fathom (privacy-friendly), Vercel Analytics (performance).

## Environment Variables

Server-only (see `.env.sample`):
```
NEXT_PUBLIC_WEBSITE_URL      # Public URL for metadata/Twitter cards
STRAPI_URL                   # Strapi instance URL (e.g., http://localhost:1337)
STRAPI_TOKEN                 # Strapi API token (read access to ecosystem projects + tags)
```

## Code Style

- Prettier: single quotes, no semicolons, no trailing commas, 2-space tabs, no parens on single arrow params
- Custom ESLint rule `local/require-page-metadata` (in `eslint-plugin-local/`) enforces that every `app/**/page.tsx` exports proper metadata (title, description, canonical URL)
