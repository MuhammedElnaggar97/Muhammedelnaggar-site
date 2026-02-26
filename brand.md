# Brand Identity — Naggar | نجار

Visual identity reference for the website. Use this file whenever you need colors, fonts, spacing, or logo guidance.

---

## Logo

| Asset | File | Use case |
|---|---|---|
| Navigation bar | `assets/img/logo20.png` | Top navbar on all pages (height: 45px) |
| Main / Hero | `assets/img/logo.png` | Large displays, hero sections |
| Transparent background | `assets/img/without bg.webp` | Overlays, dark backgrounds — prefer WebP |
| Transparent background (PNG) | `assets/img/without bg.png` | Fallback only (1.2MB — avoid if possible) |
| Logo animation | `assets/img/logo_na.webm` | Preloader / animated intro |

**Brand Name:** Naggar — نجار
**Tagline language:** Arabic (RTL)
**Brand color on logo:** `#3d6498` (Steel Blue)

### Logo Do's and Don'ts
- Do: Use on a light `#F4F7F9` or white `#FFFFFF` background in light mode.
- Do: Use the transparent WebP version on dark or colored backgrounds.
- Don't: Stretch or change the aspect ratio.
- Don't: Place the logo on a color that reduces contrast.

---

## Color Palette

### Light Theme (Default)

| Token | CSS Variable | Hex | Use |
|---|---|---|---|
| Brand Blue | `--logo` | `#3d6498` | Logo, brand accents, secondary buttons |
| Page Background | `--bg` | `#F4F7F9` | Main page background |
| Surface | `--surface` | `#FFFFFF` | Cards, panels, modals |
| Primary CTA | `--accent` | `#5F7D76` | Buttons, links, hover highlights |
| Primary Text | `--text` | `#1a2332` | Headings, body text |
| Secondary Text | `--text-secondary` | `#4a5568` | Subtitles, captions |
| Muted Text | `--text-muted` | `#8896a6` | Placeholders, disabled states |
| Border | `--border` | `#e2e8f0` | Card borders, dividers |

### Dark Theme

| Token | CSS Variable | Hex | Use |
|---|---|---|---|
| Brand Blue | `--logo` | `#4A7FB9` | Slightly lighter for readability |
| Page Background | `--bg` | `#0F172A` | Very dark navy |
| Surface | `--surface` | `#1E293B` | Dark card/panel background |
| Primary CTA | `--accent` | `#84A59D` | Lighter teal for dark mode contrast |
| Primary Text | `--text` | `#e2e8f0` | Light text on dark bg |
| Secondary Text | `--text-secondary` | `#94a3b8` | |
| Muted Text | `--text-muted` | `#64748b` | |
| Border | `--border` | `#2d3a4e` | Dark border |

### Functional / Status Colors

| Color | Hex | Use |
|---|---|---|
| Success / Download | `#22c55e` | Download buttons, success states |
| Highlight (marker) | `rgba(22, 160, 133, 0.4)` | Text marker/highlight effects |
| YouTube Red | `#FF0000` | Video play button overlays |
| Star / Rating | `#f1c40f` | Review star ratings |

### How to use colors in CSS

```css
/* Always use CSS variables — never hard-code hex values */
.my-button {
    background-color: var(--accent);
    color: var(--surface);
    border: 1px solid var(--border);
}

/* Dark mode override */
[data-theme="dark"] .my-button {
    /* Variables automatically update — usually no override needed */
}
```

---

## Typography

### Font Family

**Primary Font:** Handicrafts (TheYearofHandicrafts)
- A custom Arabic-compatible display font loaded from `assets/fonts/`.
- Fallback: `'Tajawal', sans-serif`

```css
font-family: var(--font); /* Always use the variable */
/* Resolves to: 'Handicrafts', 'Tajawal', sans-serif */
```

### Available Font Weights

| Weight Name | CSS weight | File |
|---|---|---|
| Regular | `400` | TheYearofHandicrafts-Regular.otf |
| Medium | `500` | TheYearofHandicrafts-Medium.otf |
| SemiBold | `600` | TheYearofHandicrafts-SemiBold.otf |
| Bold | `700` | TheYearofHandicrafts-Bold.otf |
| Black | `900` | TheYearofHandicrafts-Black.otf |

**Note:** Only use weights 400, 500, 600, 700, 900. Other weights do not have matching font files.

### Type Scale

| Element | Size | Weight | Use |
|---|---|---|---|
| H1 | `clamp(2rem, 5vw, 3.2rem)` | 700–900 | Page hero headings |
| H2 | `clamp(1.5rem, 3vw, 2.2rem)` | 700 | Section headings |
| H3 | `clamp(1.15rem, 2vw, 1.5rem)` | 600 | Card/sub-section headings |
| Body | `1.12rem` | 400 | General body text |
| Paragraph | `1.05rem` | 400 | Article paragraphs |
| Blog body | `24px` | 300–400 | Blog/article content |
| Blog heading | `28px` | 600–700 | Blog section headings |
| Muted/meta | `0.9rem` | 400 | Dates, tags, captions |

### Text Direction

- **RTL (Right to Left):** All Arabic content — the entire site is RTL by default.
- **LTR (Left to Right):** Only for inline code, URLs, or explicitly English text.
- Use `dir="ltr"` on individual elements only when needed for English fragments.

---

## Spacing & Layout

### Container Width
```css
max-width: 1200px;   /* Site-wide container max width */
max-width: 800px;    /* Blog/article content max width */
```

### Common Spacing Values
```css
padding: 2rem 1.5rem;    /* Section padding (mobile) */
padding: 4rem 2rem;      /* Section padding (desktop) */
gap: 1.5rem;             /* Grid card gap */
border-radius: 16px;     /* Cards */
border-radius: 12px;     /* Buttons */
border-radius: 8px;      /* Small elements */
```

### Breakpoints
```css
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 1024px) { /* Tablet */ }
```

---

## Shadows

```css
--shadow:    0 2px 12px rgba(0, 0, 0, 0.06);   /* Subtle — cards at rest */
--shadow-md: 0 6px 24px rgba(0, 0, 0, 0.08);   /* Medium — cards on hover */

/* Dark mode equivalents (defined automatically via CSS variables) */
--shadow:    0 2px 12px rgba(0, 0, 0, 0.2);
--shadow-md: 0 6px 24px rgba(0, 0, 0, 0.3);
```

---

## Buttons

| Class | Color | Use |
|---|---|---|
| `.btn-accent` | Teal (`--accent`) | Primary CTA — most important action |
| `.btn-outline` | Border only | Secondary action |
| `.btn-logo` | Blue (`--logo`) | Brand-colored action |

---

## Partner / Credential Logos

| Institution | File |
|---|---|
| Cochrane | `assets/img/Cochrane_Logo_Stacked_RGB.png` |
| Nature Journal | `assets/img/Nature.png` |
| GUC (German University in Cairo) | `assets/img/guc.png` |
| CPD Certification | `assets/img/cpd.png` |

---

## Voice & Tone (for content)

- **Language:** Arabic-first. Professional but approachable.
- **Audience:** Researchers, medical students, academics in the Arab world.
- **Tone:** Expert, trustworthy, helpful — not overly formal.
- **CTA style:** Direct and action-oriented (e.g., "احجز الآن", "ابدأ الدورة").
