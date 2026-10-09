"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { contactNav, primaryNav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,padding] duration-700 ease-luxe ${
        open
          ? "border-b border-transparent py-5 text-cream"
          : scrolled
            ? "border-b border-espresso/10 bg-cream/90 py-4 text-charcoal backdrop-blur-md"
            : "border-b border-transparent py-5 text-charcoal md:py-7"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-8">
        <Link href="/" aria-label="Shavista — Home" className="relative z-10">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem] font-medium">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="link-draw"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={contactNav.href}
                aria-current={isActive(contactNav.href) ? "page" : undefined}
                className="rounded-full bg-charcoal px-5 py-2.5 text-cream transition-colors duration-500 hover:bg-terracotta-deep"
              >
                {contactNav.label}
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-7">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-500 ${
                open ? "translate-y-1.25 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-500 ${
                open ? "-translate-y-1.25 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 bg-espresso text-cream transition-opacity duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-luxe flex h-full flex-col justify-between pb-12 pt-32">
          <ul className="space-y-5">
            {[{ label: "Home", href: "/" }, ...primaryNav, contactNav].map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-700 ease-luxe ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="display block text-[2.4rem] text-cream transition-colors hover:text-terracotta-light aria-[current=page]:text-terracotta-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-cream/70">A Fresh Take on the Shave. · Coming to barbershops.</p>
        </nav>
      </div>
    </header>
  );
}
