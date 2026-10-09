import Link from "next/link";
import Wordmark from "./Wordmark";
import { contactNav, primaryNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-charcoal text-ivory">
      <div className="container-luxe relative pb-10 pt-24 md:pt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Wordmark size="md" />
            <p className="display mt-8 max-w-sm text-3xl italic text-ivory/80">
              {site.tagline}
            </p>
            <p className="label mt-6 text-bronze">{site.secondary}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="label mb-6 text-ivory/50">Explore</p>
            <ul className="space-y-4 text-sm text-ivory/80">
              <li>
                <Link href="/" className="link-draw hover:text-ivory">
                  Home
                </Link>
              </li>
              {[...primaryNav, contactNav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label mb-6 text-ivory/50">Professionals</p>
            <p className="text-sm leading-relaxed text-ivory/70">
              SHAVISTA is created exclusively for licensed barbers and barbershop
              professionals.
            </p>
            <Link
              href="/professionals#request"
              className="label link-draw mt-6 inline-block text-bronze"
            >
              Request information
            </Link>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs leading-relaxed text-ivory/50 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl">
            SHAVISTA is currently in development. Products are not yet available for
            purchase. Imagery shown is placeholder artwork pending final photography.
          </p>
          <p>© 2026 SHAVISTA · shavista.com</p>
        </div>
      </div>
    </footer>
  );
}
