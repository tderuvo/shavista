# SHAVISTA — The Art of a Better Shave

Brand website for **SHAVISTA** (shavista.com), a professional-only shaving brand in development.

SHAVISTA makes single-use capsules of concentrated powdered shaving soap. A barber mixes one with warm water and whips it into a lather with a traditional brush, and can add a compatible, skin-safe fragrance. The brand sells to barbers and barbershop owners, not to consumers.

The site introduces the brand and the vision behind it, and collects interest from professionals. It deliberately has **no e-commerce**: no prices, no cart, and nothing that says the product can be bought yet.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components). Every route is prerendered as static.
- TypeScript
- Tailwind CSS v4, with design tokens in `src/app/globals.css`
- `next/font` for Cormorant Garamond (display) and Manrope (body), self-hosted at build time
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

| Token | Value | Use |
| --- | --- | --- |
| `charcoal` | `#202321` | Primary dark |
| `ivory` | `#F4F0E8` | Primary light |
| `bronze` | `#A88658` | Accent, used sparingly. Text use on dark backgrounds only. |
| `bronze-deep` | `#7A5F3C` | Bronze text on light backgrounds (meets WCAG AA) |
| `bronze-light` | `#CDB083` | Small bronze text on forest green (meets WCAG AA) |
| `forest` | `#34453D` | Secondary dark section tone |
| `stone` | `#D9D3C8` | Soft neutral |

Typography: **Cormorant Garamond** for headings, **Manrope** for body and labels.

## Replacing placeholder imagery

Every image on the site goes through `MediaFrame`. While a file lives in `/images/placeholders/`, the frame shows a small *"Placeholder · …"* caption describing the photograph that belongs there.

To swap in real photography:

1. Add the photo, for example `public/images/hero-lather.jpg`. Photos at least 2400px wide work best for full-bleed sections.
2. Change the `src` where it is used, for example `/images/placeholders/hero-lather.svg` becomes `/images/hero-lather.jpg`.
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
