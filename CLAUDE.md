# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Danny Lamarti (lamart.io) — a freelance senior software engineer. Built with Nuxt 4, Nuxt UI, and Tailwind CSS. Deployed to GitHub Pages.

## Commands

```bash
bun install              # Install dependencies
bun run dev              # Dev server on port 3100 (clears .nuxt first)
bun run build            # Production build
bun run preview          # Preview production build
bun run lint             # ESLint check
bun run typecheck        # Nuxt type checking
```

Production build for GitHub Pages uses preset: `nuxt build --preset github_pages` (output in `.output/public`).

## Architecture

- **Package manager**: Bun
- **Framework**: Nuxt 4 with Vue 3 `<script setup>` composition API
- **UI library**: Nuxt UI v4 — all UI uses `U*` components (UPageHero, UPageSection, UPageCTA, UCard, UBadge, etc.)
- **Styling**: Tailwind CSS v4 with custom indigo/slate theme tokens in `app/assets/css/main.css`
- **Fonts**: JetBrains Mono (headings, mono elements), Public Sans (body)

### App Structure

- `app/app.vue` — Main shell: header with nav, footer, SEO meta
- `app/app.config.ts` — UI color config (primary: indigo, neutral: slate)
- `app/pages/` — File-based routing (index.vue, about.vue)
- `app/assets/css/main.css` — Theme tokens and font imports
- `public/CNAME` — Custom domain config for GitHub Pages (lamart.io)

### Design System

Documented in `DESIGN.md`. Key points: dark-first theme, monospace headings with tight tracking, indigo primary color, minimal elevation. All spacing follows 4px base scale.

### CI/CD

Two GitHub Actions workflows in `.github/workflows/`:
- `ci.yml` — Runs lint + typecheck on every push (Node 22 + Bun)
- `deploy.yml` — Builds and deploys to GitHub Pages on push to `main`

### ESLint

Configured via `nuxt.config.ts` stylistic rules: `commaDangle: 'never'`, `braceStyle: '1tbs'`. Config extends Nuxt defaults in `eslint.config.mjs`.

## Key Conventions

- Zero custom components — uses Nuxt UI components exclusively
- No custom composables, middleware, or plugins yet
- No tests configured
- `@takumi-rs/core` is a personal dependency
