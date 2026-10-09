import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Our Philosophy",
  description:
    "The traditional barber shave deserves a modern renaissance. The principles behind SHAVISTA.",
  path: "/philosophy",
});

const principles = [
  {
    title: "Respect for craftsmanship",
    body: "A straight-razor shave is one of the oldest skills in the trade, and one of the hardest to master. We build for the people who have mastered it — never around them.",
  },
  {
    title: "The importance of ritual",
    body: "Ritual is what separates a service from an experience. The warm towel, the brush, the measured pace: these details are the point, not the decoration.",
  },
  {
    title: "The value of personal service",
    body: "In a world of self-checkout and subscription razors, being cared for by a skilled professional has become rare. That rarity is worth protecting.",
  },
  {
    title: "Innovation that supports tradition",
    body: "Modern formulation should serve the barber’s hand, not replace it. SHAVISTA brings consistency and freshness to a ritual that remains entirely human.",
  },
  {
    title: "Better experiences for modern men",
    body: "Today’s client values time, quality and authenticity. A great shave offers all three — twenty quiet minutes that feel genuinely his.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <Hero
        eyebrow="Our philosophy"
        title={["A modern", "renaissance."]}
        subtitle="The traditional barber shave deserves one."
        image={{
          src: "/images/placeholders/brush-portrait.svg",
          alt: "A traditional shaving brush standing upright in dramatic light.",
          brief: "The brush, a study in craft",
        }}
      />

      <section className="bg-ivory py-28 md:py-44">
        <div className="container-luxe">
          <Reveal>
            <p className="display mx-auto max-w-5xl text-center text-[clamp(2rem,4.4vw,4rem)] leading-[1.12]">
              Somewhere along the way, the shave became an afterthought — quick, disposable,
              done at the sink. <span className="italic text-bronze-deep">We believe it deserves better.</span>
            </p>
          </Reveal>
          <Reveal delay={150} className="mx-auto mt-14 max-w-xl text-center text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              SHAVISTA exists to return the shave to where it belongs: in the hands of a skilled
              professional, as a ritual worth making time for. Everything we create begins with that
              conviction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-deep py-24 md:py-36" aria-labelledby="principles">
        <div className="container-luxe">
          <Reveal className="mb-16 flex items-center gap-4 md:mb-24">
            <span className="rule" aria-hidden />
            <h2 id="principles" className="label text-bronze-deep">
              What we believe
            </h2>
          </Reveal>
          <ol className="border-t border-charcoal/15">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                className="group grid gap-6 border-b border-charcoal/15 py-12 md:grid-cols-12 md:py-16"
              >
                <span className="display text-5xl italic leading-none text-bronze-deep md:col-span-2 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[clamp(2rem,3.6vw,3.2rem)] uppercase leading-[1.02] transition-colors duration-500 group-hover:text-bronze-deep md:col-span-5">
                  {p.title}
                </h3>
                <p className="max-w-md leading-relaxed text-ink-muted md:col-span-4 md:col-start-9 md:pt-2 md:text-lg">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <EditorialSection
        tone="charcoal"
        eyebrow="Understated by design"
        title={["Quiet", "confidence."]}
        image={{
          src: "/images/placeholders/hot-towels.svg",
          alt: "Rolled white towels with steam rising in warm light.",
          brief: "Warm towels, the quiet before the shave",
        }}
        imageShape="landscape"
      >
        <p>
          We don’t believe luxury needs to shout. It shows in the weight of a good brush, the warmth
          of a towel, the care in a barber’s hands.
        </p>
        <p>
          SHAVISTA is still being developed — carefully, and in conversation with the professionals
          it is made for. We would rather get it right than get it out quickly.
        </p>
      </EditorialSection>

      <CTASection
        tone="ivory"
        eyebrow="Join the conversation"
        title={["Craft first.", "Always."]}
        cta={{ label: "For professionals", href: "/professionals" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />
    </>
  );
}
