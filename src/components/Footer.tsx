import Link from "next/link";
import Wordmark from "./Wordmark";
import { contactNav, primaryNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-luxe pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <Wordmark size="md" />
            <p className="display mt-8 max-w-md text-[2rem] md:text-[2.4rem]">
              A fresh take <em className="accent text-terracotta-light">on the shave.</em>
            </p>
            <p className="mt-4 text-cream/70">{site.secondary}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="label mb-5 text-sage-light">Explore</p>
            <ul className="space-y-3 text-cream/85">
              <li>
                <Link href="/" className="link-draw hover:text-cream">
                  Home
                </Link>
              </li>
              {[...primaryNav, contactNav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label mb-5 text-sage-light">For barbers</p>
            <p className="leading-relaxed text-cream/75">
              Shavista is made for licensed barbers and barbershop professionals.
            </p>
            <Link
              href="/professionals#request"
              className="link-draw mt-5 inline-block font-medium text-terracotta-light"
            >
              Professional inquiries →
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-cream/15 pt-8 text-sm leading-relaxed text-cream/65 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl">
            Shavista is currently in development and not yet available for purchase. Some imagery is
            placeholder artwork or concept visualization pending final photography.
          </p>
          <p>© 2026 Shavista · shavista.com</p>
        </div>
      </div>
    </footer>
  );
}
