import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Our Philosophy",
  description:
    "Everyday experiences deserve to feel special. The beliefs behind Shavista, a new kind of professional shave for modern barbershops.",
  path: "/philosophy",
});

const principles = [
  {
    title: "Hospitality first",
    body: "The best experiences make people feel welcome. Shavista is designed to be warm and inviting, never stiff or exclusive.",
  },
  {
    title: "The barber is the professional",
    body: "Skill, judgment and personal attention can’t be packaged. Our job is to support the people behind the chair, not to replace a single thing they do.",
  },
  {
    title: "Fresh, every time",
    body: "A lather prepared in front of you, from a capsule opened just for you. Freshness is something clients can see and feel.",
  },
  {
    title: "Personal, not precious",
    body: "Choosing a fragrance or how you like your shave should feel easy. Premium doesn’t have to mean complicated.",
  },
  {
    title: "Good for business",
    body: "A great experience gives clients a reason to return. We want Shavista to be as good for barbershops as it is for the people in the chair.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <Hero
        eyebrow="Our philosophy"
        title={[
          "Everyday,",
          <>
            <em className="accent text-terracotta">Made Special.</em>
          </>,
        ]}
        subtitle="We believe an ordinary service can become something worth looking forward to."
        image={{
          src: "/images/placeholders/lather-bowl-light.svg",
          alt: "Fresh lather and a shaving brush in a sage-green bowl, lit by morning sun.",
          brief: "Lather being prepared, warm natural light",
        }}
      />

      <section className="bg-sand py-24 md:py-36">
        <div className="container-luxe">
          <Reveal>
            <p className="display mx-auto max-w-5xl text-center text-[clamp(1.9rem,4vw,3.6rem)] leading-[1.15]">
              The best everyday experiences aren’t the most expensive ones. They’re the ones made
              with care, by people who are good at what they do.{" "}
              <em className="accent text-terracotta-deep">That’s the shave we want to bring to every barbershop.</em>
            </p>
          </Reveal>
          <Reveal delay={150} className="lede mx-auto mt-12 max-w-2xl text-center text-muted">
            <p>
              Shavista starts with a simple idea: take something people already enjoy, prepare it
              fresh, make it personal and put it in skilled hands. Familiar enough to understand
              right away. Different enough to remember.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32" aria-labelledby="principles">
        <div className="container-luxe">
          <Reveal className="mb-14 flex items-center gap-3 md:mb-20">
            <span className="rule" aria-hidden />
            <h2 id="principles" className="label text-terracotta-deep">
              What we believe
            </h2>
          </Reveal>
          <ol className="border-t border-espresso/15">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                className="group grid gap-5 border-b border-espresso/15 py-10 md:grid-cols-12 md:py-14"
              >
                <span className="accent text-5xl leading-none text-terracotta md:col-span-2 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[clamp(1.9rem,3.2vw,2.9rem)] transition-colors duration-500 group-hover:text-terracotta-deep md:col-span-5">
                  {p.title}
                </h3>
                <p className="lede max-w-md text-muted md:col-span-4 md:col-start-9 md:pt-1">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <EditorialSection
        tone="sage"
        eyebrow="Taking our time"
        title={[
          "Built With",
          <>
            <em className="accent text-terracotta-deep">Barbers in Mind.</em>
          </>,
        ]}
        imageShape="landscape"
        image={{
          src: "/images/placeholders/shop-light.svg",
          alt: "A bright modern barbershop with plants and arched windows.",
          brief: "Barbers and clients in a lively modern shop",
        }}
      >
        <p>
          Shavista is still in development, and we’re building it in conversation with the
          professionals it’s made for.
        </p>
        <p>We’d rather get it right than get it out quickly.</p>
      </EditorialSection>

      <CTASection
        tone="espresso"
        eyebrow="Join the conversation"
        title={[
          "Something Better Is",
          <>
            <em className="accent text-terracotta-light">On the Way.</em>
          </>,
        ]}
        cta={{ label: "For professionals", href: "/professionals" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
