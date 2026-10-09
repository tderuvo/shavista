import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "light" | "dark" | "outline-light" | "outline-dark" | "text-light" | "text-dark";

const styles: Record<Variant, string> = {
  light: "bg-ivory text-charcoal border border-ivory hover:bg-transparent hover:text-ivory",
  dark: "bg-charcoal text-ivory border border-charcoal hover:bg-transparent hover:text-charcoal",
  "outline-light": "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal",
  "outline-dark": "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  "text-light": "text-ivory px-0! py-0!",
  "text-dark": "text-charcoal px-0! py-0!",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Arrow() {
  return (
    <span aria-hidden className="relative ml-4 inline-flex h-px w-6 items-center bg-current transition-all duration-500 ease-[var(--ease-luxe)] group-hover:w-10">
      <span className="absolute right-0 h-1.5 w-1.5 rotate-45 border-r border-t border-current" />
    </span>
  );
}

export default function ButtonLink({ href, children, variant = "dark", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`label group inline-flex items-center justify-center px-8 py-5 transition-colors duration-500 ease-[var(--ease-luxe)] ${styles[variant]} ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}
