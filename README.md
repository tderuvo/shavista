# Shavista — A Fresh Take on the Shave

Brand website for **Shavista** (shavista.com), a B2B company in development that is introducing a new kind of premium shaving experience to modern barbershops.

Shavista helps barbers deliver a better shave and a more memorable customer experience. The product is a single-use shaving capsule: the barber adds warm water and builds a fresh lather with a brush, and can personalize it with a compatible, skin-safe fragrance. The barber is the professional, the capsule makes the experience possible, and the client remembers it. Shavista sells to barbers and barbershop owners, not to consumers.

The site introduces the brand and the vision behind it, and collects interest from professionals. It deliberately has **no e-commerce**: no prices, no cart, and nothing that says the product can be bought yet.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components). Every route is prerendered as static.
- TypeScript
- Tailwind CSS v4, with design tokens in `src/app/globals.css`
- `next/font` for DM Sans (headings and body) and Instrument Serif (accents), self-hosted at build time
- No animation library. Scroll reveals use a small `IntersectionObserver` component and CSS transitions, and they respect `prefers-reduced-motion`.

## Getting started

Requirements: Node.js 20.9 or newer, and npm.

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build   # type-check, lint config and prerender all pages
npm run start   # serve the production build on http://localhost:3000
```

### Lint

```bash
npm run lint
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, capsule, the better shave, B2B proposition |
| `/experience` | The SHAVISTA Experience: the six-step ritual |
| `/professionals` | For Professionals: main B2B page and enquiry form |
| `/philosophy` | Our Philosophy |
| `/academy` | Shavista Academy (Coming Soon) |
| `/contact` | Contact form |

The site also generates `robots.txt`, `sitemap.xml`, an Open Graph image (`/opengraph-image`), a favicon (`src/app/icon.svg`) and a custom 404 page.

## Folder structure

```text
shavista/
├── public/
│   └── images/
│       └── placeholders/      # SVG placeholder artwork (replace with photography)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout: fonts, metadata, header/footer
│   │   ├── globals.css        # Tailwind + design tokens + motion
│   │   ├── page.tsx           # Home
│   │   ├── experience/        # The SHAVISTA Experience
│   │   ├── professionals/     # For Professionals
│   │   ├── philosophy/        # Our Philosophy
│   │   ├── academy/           # Shavista Academy (Coming Soon)
│   │   ├── contact/           # Contact
│   │   ├── not-found.tsx      # 404
│   │   ├── icon.svg           # Favicon placeholder
│   │   ├── opengraph-image.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Header.tsx         # Responsive nav, transparent → solid on scroll
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx           # Full-screen (home) or page hero
│   │   ├── SectionHeading.tsx
│   │   ├── EditorialSection.tsx  # Split image/text layout, 4 tones
│   │   ├── FeatureGrid.tsx    # Hairline-divided feature columns
│   │   ├── CTASection.tsx
│   │   ├── ContactForm.tsx    # UI only, no backend (see below)
│   │   ├── MediaFrame.tsx     # next/image wrapper, auto-labels placeholders
│   │   ├── Reveal.tsx         # Scroll-reveal animation
│   │   ├── Button.tsx
│   │   ├── Icons.tsx          # Fine-line icon set
│   │   └── Wordmark.tsx       # Typographic logo
│   └── lib/
│       └── site.ts            # Brand constants, navigation, page metadata helper
└── README.md
```

## Design system

The look is warm, light and contemporary, closer to modern hospitality than to traditional grooming. Tokens live in `src/app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `cream` | `#F7F3EC` | Main page background |
| `sand` | `#E8DDCC` | Alternating sections |
| `espresso` | `#49382E` | Primary text and headings; dark sections |
| `charcoal` | `#33312D` | Navigation, footer and contrast sections |
| `muted` | `#655950` | Secondary body text (AA on cream, sand and sage-wash) |
| `terracotta` | `#B7795C` | Warm accent. Large display text on cream only |
| `terracotta-deep` | `#8E5339` | Terracotta for small text on light backgrounds |
| `terracotta-light` | `#D39A7E` | Terracotta on dark backgrounds |
| `sage` | `#84917B` | Subtle secondary accent (decorative) |
| `sage-deep` / `sage-light` | `#586551` / `#B4BFAA` | Sage for text or icons on light / dark backgrounds |
| `sage-wash` | `#E3E6DC` | Soft sage section background |

Typography: **DM Sans** for headings and body, with **Instrument Serif** italic for accent words. Wrap a word in `<em className="accent">` to use the serif accent. Headlines are sentence or title case; uppercase is reserved for small eyebrow labels.

Section tones (`cream`, `sand`, `sage`, `espresso`, `charcoal`) are shared by `EditorialSection` and `CTASection`. Alternate them to keep the page from feeling uniformly beige.

## Replacing placeholder imagery

Every image on the site goes through `MediaFrame`. While a file lives in `/images/placeholders/`, the frame shows a small *"Placeholder · …"* caption describing the photograph that belongs there.

To swap in real photography:

1. Add the photo, for example `public/images/hero-lather.jpg`. Photos at least 2400px wide work best for full-bleed sections.
2. Change the `src` where it is used, for example `/images/placeholders/lather-bowl-light.svg` becomes `/images/lather-bowl.jpg`.
3. The placeholder caption disappears automatically, and `next/image` optimizes the photo.

The capsule artwork (`capsule-concept.svg`) is deliberately abstract. **The final capsule design has not been decided**, so replace it only with approved product photography.

## Contact forms (not yet active)

`ContactForm` is UI only. It validates in the browser, then discards the submission and shows a message that nothing was sent. The form also tells visitors up front that submissions are not active.

To go live, connect `handleSubmit` in `src/components/ContactForm.tsx` to a Server Action, an API route or a form service. Then remove the "Form preview · Not yet active" notice and change the confirmation message.

## Content guardrails

These rules are part of the brand brief. Keep them when editing copy:

- Don't present products as available to buy. No prices, no cart.
- Don't use invented testimonials, customer logos or test results.
- Don't make medical, dermatological or comparative performance claims. Describe the *intended* experience.
- Present Academy certification as a future concept only, never as available or accredited.
- Don't make financial guarantees. Revenue language stays at "revenue potential".

## Deployment

The site has not been deployed yet. When it is, the site works on any Next.js host, such as Vercel or a Node server. Update `site.url` in `src/lib/site.ts` if the production domain changes.
