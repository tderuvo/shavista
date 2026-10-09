import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  primary: "bg-espresso text-cream hover:bg-terracotta-deep",
  secondary: "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream",
  light: "bg-cream text-espresso hover:bg-sand",
  "outline-light": "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-espresso",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Arrow() {
  return (
    <span
      aria-hidden
      className="ml-3 inline-block transition-transform duration-500 ease-luxe group-hover:translate-x-1"
    >
      →
    </span>
  );
}

/** Pill-shaped call to action. */
export default function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full px-7 py-4 text-[0.95rem] font-medium transition-colors duration-500 ease-luxe ${styles[variant]} ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}
