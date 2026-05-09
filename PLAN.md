# Lamartio Portfolio Website — Implementation Plan

## Brand Profile
- **Type**: Personal portfolio (Danny Lamarti)
- **Vibe**: Dark & techy, developer-focused
- **Primary color**: Blue / indigo
- **Neutral**: Slate (keep existing)
- **Font**: Monospace-leaning (JetBrains Mono for headings, Inter/Public Sans for body)
- **Pages**: Home, About

## Phase 1: DESIGN.md + Theme Foundation

### 1a. Create `DESIGN.md`
Write a DESIGN.md with 9 sections defining the lamartio brand:
- Dark theme default, code aesthetics, subtle grid/dot patterns
- Blue/indigo palette with CSS variables
- Typography: monospace headings, clean sans body
- Component styles: glass-morphism cards, subtle borders, code-block accents
- Spacing scale, elevation/shadow tokens
- Do's/Don'ts, responsive rules

### 1b. Update `app.config.ts`
- Change primary: `'green'` → `'indigo'`
- Keep neutral: `'slate'`

### 1c. Update `app/assets/css/main.css`
- Replace green color tokens with indigo
- Add font imports (JetBrains Mono)
- Add dark theme base styles

## Phase 2: Layout Shell (`app.vue`)

Update the app shell:
- **Header**: Logo (text-based "lamartio" in monospace) + nav links (Home, About) + GitHub + color mode toggle
- **Footer**: Copyright, social links (GitHub, LinkedIn, etc.)
- Remove template-specific components (AppLogo.vue, TemplateMenu.vue)
- Add new nav component

## Phase 3: Home Page (`app/pages/index.vue`)

Using Nuxt UI components, build:
- **Hero section**: Name, title/tagline, short intro, CTA buttons (Contact, View Projects)
- **Skills/tech section**: Grid of tech icons/badges showing expertise
- **Featured work section**: 2-3 project cards with image, title, description, tech tags
- **CTA section**: Contact prompt

Nuxt UI components to use: `UPageHero`, `UPageSection`, `UPageCTA`, `UCard`, `UBadge`, `UButton`, `UIcon`

## Phase 4: About Page (`app/pages/about.vue`)

- **Bio section**: Photo/avatar + extended bio text
- **Experience timeline**: Work history using cards or custom timeline
- **Tech stack**: Categorized grid (Languages, Frameworks, Tools)
- **Contact/social links**: GitHub, LinkedIn, email

Nuxt UI components: `UPageHero`, `UPageSection`, `UCard`, `UAvatar`, `UBadge`

## Phase 5: SEO + Meta

Update `app.vue`:
- Title: "Danny Lamarti — Software Engineer"
- Description: Portfolio-appropriate
- OG image placeholder
- Per-page meta via `useSeoMeta`

## Phase 6: Polish + Preview

- Run dev server
- Browser preview via Chrome MCP
- Dark/light mode check
- Mobile responsive check
- Iterate on design

## Tools Used
- `frontend-design` skill — high-quality UI generation
- `nuxt-ui-remote` MCP — component API reference
- `nuxt-remote` MCP — Nuxt framework docs
- `chrome-devtools` MCP — browser preview
- `context7` MCP — latest docs

## File Changes Summary
| File | Action |
|------|--------|
| `DESIGN.md` | Create — brand system definition |
| `app.config.ts` | Edit — green → indigo |
| `app/assets/css/main.css` | Edit — indigo tokens + fonts |
| `app/app.vue` | Edit — new header/footer/meta |
| `app/pages/index.vue` | Rewrite — portfolio home |
| `app/pages/about.vue` | Create — about page |
| `app/components/AppLogo.vue` | Delete or rewrite — text logo |
| `app/components/TemplateMenu.vue` | Delete — replaced by nav |
