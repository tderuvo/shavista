import Link from "next/link";
import Reveal from "./Reveal";

/** Professional value proposition band, placed directly beneath the home hero. */
export default function ValueProposition() {
  return (
    <section className="bg-sand" aria-labelledby="value-proposition">
      <div className="container-luxe grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal className="lg:col-span-7">
          <h2 id="value-proposition" className="display text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.08]">
            <em className="accent block text-terracotta-deep">Built for the Chair.</em>
            <span className="block">Backed by Advanced Cosmetic Science.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <div className="lede space-y-3 border-espresso/15 text-muted lg:border-l lg:pl-10">
            <p>Upgrade your back-bar with a new generation of single-serve shaving concentrate.</p>
            <p>Designed for effortless warm-water lather, skin comfort, and precise professional preparation.</p>
          </div>
          <Link
            href="#difference"
            className="link-draw mt-6 inline-block font-medium text-terracotta-deep lg:ml-10"
          >
            See the Shavista difference →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
