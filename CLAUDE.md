# Claude Instructions — Daniel Portfolio (Next.js)

Always read this file before touching any file in this project.

---

## Project Overview

Personal portfolio website for **Daniel Enantomhen** (`@dantelarge`).
**This is a Next.js 15 app** — NOT the old static `index.html`.

- **Framework:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Dev server:** `npm run dev` (runs on port 3000, may shift to 3002+ if busy)
- **Active files:** `app/`, `components/portfolio/`, `components/ui/`, `components/blocks/`
- **Static assets:** `public/` (profile.jpeg, dashboard-bg.png)
- **Profile photo:** `public/profile.jpeg`
- **Background image:** `public/dashboard-bg.png` (analytics dashboard screenshot)
- **GitHub repo:** https://github.com/dantelarge/daniel-portfolio
- **Live URL:** https://dantelarge.github.io/daniel-portfolio/

---

## Owner Info

| Field        | Value                                      |
|--------------|--------------------------------------------|
| Name         | Daniel Enantomhen                          |
| Alias        | @dantelarge                                |
| Email        | danielenantomhen@gmail.com                 |
| Phone 1      | +234 816 063 0956                          |
| Phone 2      | +234 901 918 5203                          |
| LinkedIn     | daniel-enantomhen-97259612b                |
| GitHub       | github.com/dantelarge                      |
| Location     | Kubwa, Abuja, Nigeria                      |
| Background   | B.Eng. Materials & Production Engineering  |
| Role         | AI Developer & Data Analyst                |

---

## Tech Stack

- **Next.js 15** + **React 19** + **TypeScript**
- **Tailwind CSS v3** (utility classes only — no custom CSS files unless in globals.css)
- **framer-motion** — installed but use cautiously (see pitfalls below)
- **lucide-react** — for all icons
- **shadcn/ui** structure — components in `components/ui/`

---

## File Structure

```
app/
  layout.tsx        — root layout, sets dark class on <html>
  page.tsx          — assembles all sections
  globals.css       — Tailwind base + CSS variables (dark navy theme)

components/
  portfolio/
    hero.tsx        — Hero section (profile photo + bg image + stats)
    projects.tsx    — Projects masonry grid with Unsplash photos
    skills.tsx      — Skills grouped tags
    about.tsx       — About section
    contact.tsx     — Contact links
  ui/
    button.tsx      — shadcn Button
    animated-group.tsx — framer-motion wrapper
  blocks/
    scroll-expansion-hero.tsx — DO NOT use on main page (blocks scrolling)

public/
  profile.jpeg      — Daniel's profile photo
  dashboard-bg.png  — Analytics dashboard background image
```

---

## Design System (Tailwind / globals.css)

- **Background:** `hsl(222, 47%, 6%)` — dark navy (NOT pure black)
- **Primary accent:** `teal-400` / `teal-500`
- **Secondary accent:** `indigo-400` / `indigo-500`
- **Text:** white, `white/70`, `white/50` for hierarchy
- **Cards:** `bg-white/5` or `bg-black/50` with `backdrop-blur-md`
- **Borders:** `border-white/10` or `border-white/15`

---

## Sections

1. **Hero** — profile photo (spinning teal ring), name, role chips, tagline, CTA buttons, stat cards, data analytics background image
2. **Projects** — masonry grid, 9 projects with Unsplash cover photos, filter pills, live badges
3. **Skills** — grouped tags (AI & APIs / Languages / Data & Analytics / DevOps)
4. **About** — bio + education highlights
5. **Contact** — link cards (email, WhatsApp, GitHub, LinkedIn)
6. **Footer** — copyright

---

## All 9 Projects (from GitHub)

| Project | Stack | Link | Live |
|---------|-------|------|------|
| ExamReady Nigeria | Node.js, Express, PWA | github.com/dantelarge/examready-nigeria | No |
| CheckCBT.ng | Node.js, Express, Multi-Role | cbt-system-rvb4.onrender.com | Yes |
| CheckResult.ng | Node.js, Express, CSV | result-checker-1r74.onrender.com | Yes |
| WhatsApp Automation | Node.js, Meta API | whatsapp-automation-b7s2.onrender.com | Yes |
| Crypto Trading Bot | Python, Binance API | crypto-bot-d1bt.onrender.com | Yes |
| MatCompat Pro | Python, Claude API, Streamlit | github.com/dantelarge/matcompat-pro | No |
| Study Habits Analysis | R, ggplot2 | github.com/dantelarge/Analysing_study... | No |
| Sportify Dashboard | R, tidyverse | github.com/dantelarge/sportify-dashboard | No |
| Name Popularity App | R, Shiny | github.com/dantelarge/name-popularity-app | No |

---

## Critical Code Rules

### Background images
- Use inline `style={{ backgroundImage: 'url(...)' }}` on the element — NOT `next/image` with `fill` for backgrounds
- Never use `absolute inset-0` + `next/image fill` for full-section backgrounds (sizing fails)
- `public/` files are served as `/filename.ext` — e.g. `/profile.jpeg`, `/dashboard-bg.png`

### Framer-motion pitfalls
- **NEVER** use `initial={{ opacity: 0 }}` on critical content (name, profile photo, headings)
- If framer-motion animations hide content on hydration failure, replace with plain CSS
- Safe to use for decorative animations only

### Next.js Image component
- Always include `sizes` prop when using `fill`
- Use `unoptimized` for external images that don't come from allowed domains
- Allowed remote hostnames: `ik.imagekit.io`, `tailark.com`, `images.unsplash.com`, `me7aitdbxq.ufs.sh`

### z-index layering (hero)
- Background image: z-0 (default)
- Overlay divs: z-[1]
- Colour orbs: z-[2]
- **Content: z-10 — always set this explicitly**
- Bottom fade: z-[3]

### General
- Mobile-first, Tailwind utilities only
- No external CSS frameworks
- Use `cn()` from `@/lib/utils` for conditional classes
- All icons from `lucide-react`
- `'use client'` at top of any file using hooks or browser APIs

---

## Unsplash Images Already in Use

| Section | URL |
|---------|-----|
| Hero bg | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85` |
| ExamReady | `photo-1434030216411-0b793f4b4173` |
| CheckCBT | `photo-1461749280684-dccba630e2f6` |
| CheckResult | `photo-1488590528505-98d2b5aba04b` |
| WhatsApp | `photo-1577563908411-5077b6dc7624` |
| Crypto Bot | `photo-1611974789855-9c2a0a7236a3` |
| MatCompat | `photo-1532187863486-abf9dbad1b69` |
| Study Habits | `photo-1551288049-bebda4e38f71` |
| Sportify | `photo-1460925895917-afdab827c52f` |
| Name App | `photo-1526374965328-7f61d4dc18c5` |

---

## What NOT to do

- Do NOT touch `index.html` — it's the old static version, superseded by the Next.js app
- Do NOT use `ScrollExpandMedia` in the hero — it intercepts all scroll events and locks the page
- Do NOT use `next/image` with `fill` inside `absolute inset-0` divs for backgrounds
- Do NOT use `initial={{ opacity: 0 }}` on content that must always be visible
- Do NOT run `npm run dev` via Claude's bash — start it manually in your terminal

---

## Communication Style

- Be concise — no recap of what was just done
- Always ask clarifying questions before making large changes
- Don't add comments unless logic isn't obvious
- Don't create new files unless absolutely necessary
