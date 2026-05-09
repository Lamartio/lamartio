# DESIGN.md — lamartio

## 1. Visual Theme & Atmosphere

Dark-first, developer-focused portfolio. Code aesthetics — monospace accents, terminal-inspired subtle details, clean grid. Minimal but not sterile. Professional yet approachable. Think Linear meets a dev's personal site.

- Default: dark mode
- Density: comfortable, generous whitespace
- Mood: precise, technical, confident

## 2. Color Palette & Roles

```css
/* Primary — Indigo */
--color-primary-50: #eef2ff;
--color-primary-100: #e0e7ff;
--color-primary-200: #c7d2fe;
--color-primary-300: #a5b4fc;
--color-primary-400: #818cf8;
--color-primary-500: #6366f1;
--color-primary-600: #4f46e5;
--color-primary-700: #4338ca;
--color-primary-800: #3730a3;
--color-primary-900: #312e81;
--color-primary-950: #1e1b4b;

/* Neutral — Slate */
--color-neutral-50: #f8fafc;
--color-neutral-900: #0f172a;
--color-neutral-950: #020617;
```

- **Primary (indigo)**: CTAs, links, active states, accents
- **Neutral (slate)**: Backgrounds, text, borders, surfaces
- **Success**: green-500 for status indicators
- **Error**: red-500 for form validation

## 3. Typography Rules

- **Headings**: JetBrains Mono (monospace), bold, tight tracking (-0.02em)
- **Body**: Public Sans (sans-serif), regular weight, relaxed line-height (1.7)
- **Code/accents**: JetBrains Mono, used for tags, badges, and technical callouts
- **Scale**: 14/16/18/20/24/30/36/48/60px

## 4. Component Stylings

- **Buttons**: Rounded-lg, primary uses solid indigo, secondary uses ghost/subtle variant with slate border
- **Cards**: Slate-900 bg, subtle border (slate-800), rounded-xl, no heavy shadows in dark mode
- **Badges/Tags**: Monospace text, subtle variant, rounded-full, small size
- **Links**: Indigo-400 in dark mode, underline on hover
- **Inputs**: Slate-800 bg, slate-700 border, focus ring indigo-500

## 5. Layout Principles

- **Spacing scale**: 4/8/12/16/24/32/48/64/96/128px
- **Max content width**: 1280px (Container)
- **Grid**: CSS Grid, 12-column on desktop, single column mobile
- **Section padding**: py-24 desktop, py-16 mobile
- **Whitespace**: Generous — let content breathe

## 6. Depth & Elevation

- Minimal shadows in dark mode — rely on border contrast
- Surface hierarchy: 950 (page bg) → 900 (cards) → 800 (elevated/hover)
- Subtle glow on primary interactive elements (box-shadow with indigo/10%)
- No more than 2 elevation levels

## 7. Do's and Don'ts

**Do:**
- Use monospace for technical terms, skill tags, and headings
- Maintain consistent spacing rhythm
- Use indigo sparingly — accent, not overwhelm
- Let dark backgrounds create depth through layering

**Don't:**
- Use gradients on text
- Add decorative elements that don't serve content
- Use more than 2 font families
- Create busy layouts — favor single focus per section

## 8. Responsive Behavior

- **Breakpoints**: sm(640) md(768) lg(1024) xl(1280)
- **Mobile**: Stack all columns, increase touch targets to 44px min
- **Nav**: Collapse to hamburger/modal below lg
- **Typography**: Scale down headings 20-30% on mobile
- **Cards**: Full-width on mobile, grid on desktop

## 9. Agent Prompt Guide

When generating new screens for lamartio:
- "Build a dark-themed section with indigo accents using Nuxt UI components"
- "Use JetBrains Mono for headings and technical labels"
- "Cards should be slate-900 with slate-800 borders, rounded-xl"
- "CTAs use solid indigo buttons, secondary actions use ghost variant"
- "Maintain generous spacing — py-24 between sections"
