import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import EditorialSection from "@/components/EditorialSection";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  IconDistinction,
  IconExperience,
  IconKit,
  IconOpportunity,
  IconSupply,
  IconTraining,
  IconElevate,
} from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "SHAVISTA for Professionals",
  absolute: true,
  description:
    "SHAVISTA is a professional-only shaving brand in development. Learn how barbers can introduce a distinctive premium shave — and request professional information.",
  path: "/professionals",
});

const advantages = [
  {
    title: "Differentiation",
    body: "Offer a shave that clients can’t find on every corner — a signature service with its own name and ritual.",
    icon: <IconDistinction />,
  },
  {
    title: "The ritual",
    body: "A clear, repeatable sequence — capsule, lather, fragrance, blade — that feels personal every time.",
    icon: <IconExperience />,
  },
  {
    title: "Opportunity",
    body: "A premium service designed to increase revenue potential per appointment, priced at your discretion.",
    icon: <IconOpportunity />,
  },
  {
    title: "Your craft, intact",
    body: "SHAVISTA adds to your menu. It doesn’t replace your existing services, tools or technique.",
    icon: <IconElevate />,
  },
];

const planned = [
  {
    tag: "Planned",
    title: "Starter kits",
    body: "A professional introduction to SHAVISTA, designed to bring the ritual into the shop.",
    icon: <IconKit />,
  },
  {
    tag: "Planned",
    title: "Training",
    body: "Guidance on the SHAVISTA ritual and its presentation, through the future Shavista Academy.",
    icon: <IconTraining />,
  },
  {
    tag: "Planned",
    title: "Recurring supply",
    body: "Dependable capsule replenishment, so the experience is always ready for the next client.",
    icon: <IconSupply />,
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <Hero
        eyebrow="For professionals"
        title={["A better shave.", "A better opportunity."]}
        subtitle="For the barbers who still believe a shave can be the best part of the day."
        primaryCta={{ label: "Request professional information", href: "#request" }}
        image={{
          src: "/images/placeholders/shop-interior.svg",
          alt: "An empty barber chair in a quiet barbershop, window light across the floor.",
          brief: "Barbershop interior, morning light",
        }}
      />

      {/* Professional-only */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe grid gap-14 md:grid-cols-12">
          <SectionHeading
            className="md:col-span-6"
            eyebrow="Professional only"
            title={["Not sold", "on shelves."]}
            size="md"
          />
          <Reveal delay={150} className="space-y-5 text-base leading-relaxed text-ink-muted md:col-span-5 md:col-start-8 md:text-lg">
            <p>
              SHAVISTA is created exclusively for licensed barbers and barbershop professionals. It
              won’t appear in supermarkets or on consumer websites.
            </p>
            <p>
              That exclusivity is deliberate. The SHAVISTA shave is something a client experiences
              in your chair — and nowhere else.
            </p>
            <p className="label pt-4 text-[0.65rem] text-bronze-deep">
              In development · Not yet available for purchase
            </p>
          </Reveal>
        </div>
      </section>

      {/* Become a Shavista */}
      <section className="grain relative overflow-hidden bg-charcoal py-28 text-ivory md:py-44">
        <div className="container-luxe relative">
          <Reveal className="flex items-center gap-4">
            <span className="rule" aria-hidden />
            <p className="label text-bronze">A new professional identity</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-10 text-[clamp(3.2rem,10vw,10rem)] uppercase">
              Become a <span className="italic text-bronze">Shavista.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <Reveal delay={200} className="md:col-span-5">
              <p className="display text-2xl italic leading-snug text-ivory/90 md:text-3xl">
                shav·is·ta <span className="not-italic text-ivory/40">(n.)</span> — a professional
                barber who practices the art of the SHAVISTA shave.
              </p>
            </Reveal>
            <Reveal delay={300} className="space-y-5 leading-relaxed text-ivory/70 md:col-span-6 md:col-start-7 md:text-lg">
              <p>
                Becoming a Shavista means participating in the SHAVISTA experience: offering the
                ritual, representing its standards, and being part of a community of barbers who
                take the shave seriously.
              </p>
              <p>
                We are shaping this program with professionals now. Request information to be among
                the first barbers we speak with as it takes form.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Shavista Advantage */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Shavista advantage"
            title={["A premium experience.", "Nothing taken away."]}
            intro={
              <p>
                SHAVISTA is designed to sit alongside everything you already do well — adding a
                signature service, not replacing a single one.
              </p>
            }
          />
          <FeatureGrid items={advantages} columns={4} className="mt-16 md:mt-24" />
        </div>
      </section>

      {/* The ritual in the shop */}
      <EditorialSection
        tone="stone"
        eyebrow="The Shavista ritual"
        title={["A service", "worth naming."]}
        image={{
          src: "/images/placeholders/mise-en-place.svg",
          alt: "Overhead view of a barber’s station set for a shave.",
          brief: "The station, set for the ritual",
        }}
      >
        <p>
          Open the capsule in front of the client. Build the lather by hand. Offer a choice of
          fragrance. Shave with care. Finish with a cool towel.
        </p>
        <p>
          Each step is visible and intentional — which is exactly what turns a routine shave into
          something clients talk about, return for, and recommend.
        </p>
        <p className="text-sm text-ink-muted/80">
          Revenue potential will vary by shop, market and pricing. SHAVISTA makes no guarantee of
          financial results.
        </p>
      </EditorialSection>

      {/* Planned */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What’s planned"
            title={["Building the", "professional program."]}
            intro={
              <p>
                These offerings are in planning and are not yet available. Professionals who request
                information will hear about them first.
              </p>
            }
          />
          <FeatureGrid items={planned} columns={3} className="mt-16 md:mt-24" />
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="grain relative scroll-mt-20 overflow-hidden bg-charcoal py-24 text-ivory md:py-36">
        <div className="container-luxe relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Request professional information"
              title={["Let’s talk", "shop."]}
              intro={
                <p>
                  Tell us about your barbershop. We’re speaking with professionals as the SHAVISTA
                  program develops.
                </p>
              }
            />
          </div>
          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <ContactForm variant="professional" tone="dark" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
