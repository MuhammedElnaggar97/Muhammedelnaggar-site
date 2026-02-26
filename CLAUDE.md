# CLAUDE.md — Naggar | نجار Website

Project guide for Claude Code when working on this site.

---

## Project Overview

**Owner:** Mohammed Naggar (محمد نجار)
**Purpose:** Personal website for a Research & Biostatistics Consultant — courses, articles, free resources, and consulting booking.
**Language:** Arabic (RTL) primary, with English support.
**Type:** Static HTML/CSS/JavaScript site — no framework, no build tool, no npm.

---

## Tech Stack

| Layer | Technology |
|---|---|
| HTML | Plain HTML5, RTL (`dir="rtl"`, `lang="ar"`) |
| CSS | Custom CSS with CSS variables (no Tailwind, no SASS) |
| JavaScript | Vanilla JS (ES6), no framework |
| Animation | GSAP v3 + ScrollTrigger (loaded from `assets/js/vendor/`) |
| Analytics | Google Analytics 4 (`G-YBZ9P9EPNN`) |
| Forms | Google Forms/Sheets macro for newsletter and resource gating |
| Fonts | Custom OTF font: "Handicrafts" (TheYearofHandicrafts) |

---

## File Structure

```
/
├── index.html               Homepage
├── about.html               About / Bio
├── courses.html             Training courses grid
├── advising.html            Consulting booking + FAQ accordion
├── articles.html            Article index
├── resources.html           Free gated downloads
├── stats.html               Statistics service page
├── master-stats.html        Master statistics page
├── reviews-types.html       Systematic review types guide
├── risk-of-bias-assesment.html  Bias assessment guide
├── telegram-bot.html        Telegram bot info
├── podcast.html             Podcast page
├── booking.html             Booking redirect/page
├── blog-template.html       Template for new articles
├── robots.txt               SEO crawl rules
├── sitemap.xml              Sitemap (update when adding pages)
├── CLAUDE.md                This file
├── brand.md                 Brand identity: colors, fonts, logo
└── assets/
    ├── css/
    │   ├── style.css            Main design system (3000+ lines)
    │   ├── product-cards.css    Course/product card component
    │   ├── resource-cards.css   Resource card + gating component
    │   ├── blog.css             Blog/article page styles
    │   ├── highlight.css        Text highlight effects
    │   └── nav-icons.css        Navigation icon sizing
    ├── js/
    │   ├── main.js              All site JS: nav, theme, animations, forms
    │   └── vendor/
    │       ├── gsap.min.js
    │       └── ScrollTrigger.min.js
    ├── fonts/
    │   └── TheYearofHandicrafts-[weight].otf   (5 weights)
    └── img/
        ├── logo20.png           Nav bar logo (use this one in navbars)
        ├── logo.png             Main logo
        ├── without bg.webp      Logo without background (PREFER WebP over PNG)
        └── [other images]
```

---

## Key Conventions

### CSS Variables
All colors and core values are defined as CSS variables in `style.css`. **Always use variables, never hard-code hex values.**

```css
/* Always use these — do not hard-code colors */
var(--bg)              /* Page background */
var(--surface)         /* Card/panel background */
var(--text)            /* Primary text */
var(--text-secondary)  /* Secondary text */
var(--text-muted)      /* Muted/disabled text */
var(--accent)          /* Primary CTA color (teal) */
var(--logo)            /* Brand blue */
var(--border)          /* Borders */
var(--shadow)          /* Subtle shadow */
var(--shadow-md)       /* Medium shadow */
var(--font)            /* Font family stack */
```

See `brand.md` for exact hex values per theme.

### Theme System
- Light/dark theme is toggled via `data-theme="dark"` on `<html>`.
- Theme preference is saved in `localStorage`.
- When writing CSS, always include dark mode variants using `[data-theme="dark"] .my-class { }`.

### RTL Layout
- The entire site is RTL. Use `padding-inline-start` / `padding-inline-end` where possible instead of `padding-left` / `padding-right`.
- For directional overrides, test in both Arabic and any LTR content blocks.

### Navigation
- The navbar HTML is **duplicated in every HTML file**. When editing nav items, you must update all pages.
- The active nav link is highlighted via JavaScript in `main.js` (compares current URL to href).

### Adding a New Page
1. Copy `blog-template.html` as a starting point.
2. Add the page to `sitemap.xml`.
3. Add a nav link in **every existing HTML file's** `<nav>` section.
4. Update `robots.txt` if the page should not be indexed.

### Images
- Prefer `.webp` format for all images.
- Always add `width` and `height` attributes to `<img>` tags to prevent layout shift.
- Use `loading="lazy"` for below-the-fold images; use `fetchpriority="high" loading="eager"` for hero/above-fold images.

---

## Performance Warnings

The following files are very large and should not be made larger:

| File | Size | Issue |
|---|---|---|
| `assets/img/meta-analysis.svg` | 6.5MB | Needs SVGO compression |
| `assets/img/stats.svg` | 5.4MB | Needs SVGO compression |
| `assets/img/Searching Databases.svg` | 5.1MB | Needs SVGO compression |
| `assets/img/without bg.png` | 1.2MB | Use the `.webp` version instead |
| `assets/img/Nature.png` | 970KB | Needs compression |

**When adding new images:** Always compress before adding. Target under 200KB per image.

---

## Google Integrations

- **Analytics:** GA4 tag in every `<head>`. ID: `G-YBZ9P9EPNN`.
- **Newsletter form:** Submits to a Google Forms macro endpoint. Logic in `main.js`.
- **Resource gating:** Email collected via Google Forms before download link reveals.

---

## What NOT to Do

- Do not add npm, React, or any framework — keep this as a static site.
- Do not hard-code color hex values in CSS — use variables from `style.css`.
- Do not edit only one HTML file when the change applies to the navbar or footer — edit all pages.
- Do not add `.png` images without checking if a `.webp` version can be used.
- Do not add font weights that don't exist in `assets/fonts/`.
