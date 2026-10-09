import type { Metadata } from "next";

export const site = {
  name: "SHAVISTA",
  url: "https://shavista.com",
  tagline: "The Art of a Better Shave.",
  secondary: "Modern Luxury. Timeless Craftsmanship.",
  description:
    "SHAVISTA is a professional-only shaving brand in development — single-use capsules of concentrated shaving soap, crafted for barbers who believe the experience matters as much as the result.",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "The Experience", href: "/experience" },
  { label: "For Professionals", href: "/professionals" },
  { label: "Our Philosophy", href: "/philosophy" },
  { label: "Academy", href: "/academy" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

type PageMetaInput = {
  /** Used as-is in the browser tab when `absolute`, otherwise suffixed with " — SHAVISTA" */
  title: string;
  absolute?: boolean;
  description: string;
  path: string;
};

/**
 * Builds complete per-page metadata. Next.js replaces (rather than merges)
 * nested objects like `openGraph`, so each page needs the full set.
 */
export function pageMetadata({ title, absolute, description, path }: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} — ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
