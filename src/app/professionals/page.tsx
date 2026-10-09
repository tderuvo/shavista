import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import SectionHeading, { Eyebrow } from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import EditorialSection from "@/components/EditorialSection";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import ProfessionalAdvantage from "@/components/ProfessionalAdvantage";
import ProfessionalCTA from "@/components/ProfessionalCTA";
import { IconKit, IconSupply, IconTraining } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Shavista for Professionals",
  absolute: true,
  description:
    "Give your clients something new to enjoy. Shavista helps barbers introduce a distinctive premium shaving experience that complements their existing services.",
  path: "/professionals",
});

const businessCase = [
  { title: "Differentiation", body: "A signature shave that sets your shop apart from the one down the street." },
  { title: "Customer experience", body: "A service clients notice, enjoy and talk about." },
  { title: "Repeat visits", body: "One more reason for clients to book the next appointment." },
  { title: "Service upgrades", body: "A natural add-on to haircuts, beard trims and existing shave services." },
  { title: "Predictable portioning", body: "One capsule per shave, designed to make product costs easier to plan." },
  {
    title: "Potential premium pricing",
    body: "A differentiated experience that may support a higher service price, set entirely by you.",
  },
];

const planned = [
  {
    tag: "Planned",
    title: "Starter kits",
    body: "Everything a shop needs to introduce Shavista to its clients.",
    icon: <IconKit />,
  },
  {
    tag: "Planned",
    title: "Training",
    body: "Guidance on preparing and presenting the experience, through the future Shavista Academy.",
    icon: <IconTraining />,
  },
  {
    tag: "Planned",
    title: "Recurring supply",
    body: "Dependable capsule replenishment, so you’re always ready for the next client.",
    icon: <IconSupply />,
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <Hero
        layout="split"
        eyebrow="For professionals"
        title={[
          "A Better Shave.",
          <>
            A Better <em className="accent text-terracotta">Opportunity.</em>
          </>,
        ]}
        subtitle="Your clients will love it. Your business will, too."
        body={
          <p>
            Shavista is a new branded shaving experience that barbers can introduce to their
            clients, built to sit alongside everything you already do well.
          </p>
        }
        primaryCta={{ label: "Request professional information", href: "#request" }}
        image={{
          src: "/images/placeholders/chair-light.svg",
          alt: "A modern barber chair in natural light.",
          brief: "Barber and client mid-service, natural light",
        }}
      />

      {/* Clients first */}
      <EditorialSection
        tone="sand"
        eyebrow="First, your clients"
        title={[
          "“My Clients",
          <>
            <em className="accent text-terracotta-deep">Would Love This.”</em>
          </>,
        ]}
        image={{
          src: "/images/placeholders/lather-bowl-light.svg",
          alt: "Fresh lather and a shaving brush in a sage-green bowl.",
          brief: "Lather being prepared at the client’s side",
        }}
      >
        <p>
          A freshly prepared lather. A fragrance they choose. Your full attention. Shavista turns a
          shave into something clients talk about, look forward to and book again.
        </p>
        <p>
          It feels special without feeling formal. Welcoming, not exclusive. The kind of upgrade
          people are happy to make part of their routine.
        </p>
      </EditorialSection>

      {/* Then, the business */}
      <ProfessionalAdvantage tone="cream" />
      <ProfessionalCTA formPage="" />

      {/* Become a Shavista shop */}
      <section className="bg-espresso py-24 text-cream md:py-36">
        <div className="container-luxe">
          <Reveal>
            <Eyebrow tone="dark">Professional first</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display text-[clamp(3rem,9vw,8.5rem)]">
              Become a <em className="accent text-terracotta-light">Shavista</em> Barber.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-[1.6rem] leading-snug tracking-[-0.01em] text-cream/90 md:text-[1.9rem]">
                <em className="accent">shav·is·ta</em> <span className="text-cream/65">(n.)</span> a
                freshly prepared, personalized professional shave, delivered by a skilled barber.
              </p>
            </Reveal>
            <Reveal delay={300} className="lede space-y-5 text-cream/75 md:col-span-6 md:col-start-7">
              <p>
                Shavista is being developed for licensed barbers and barbershop professionals. Our
                professional-first approach is designed to keep the experience centered on your
                chair.
              </p>
              <p>
                We’re shaping the partner program with barbers now. Request information to be among
                the first we talk to.
              </p>
              <p className="label pt-2 text-sage-light">In development · Not yet available for purchase</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it fits */}
      <EditorialSection
        tone="sage"
        reverse
        eyebrow="How it fits"
        title={[
          "Simple to Offer.",
          <>
            <em className="accent text-terracotta-deep">Easy to Love.</em>
          </>,
        ]}
        image={{
          src: "/images/placeholders/fragrance-light.svg",
          alt: "Glass fragrance bottles on a sunlit shelf.",
          brief: "Fragrance options displayed at the station",
        }}
      >
        <p>
          Open a capsule. Prepare the lather. Offer a fragrance. Shave the way you always do. Finish
          with a warm towel.
        </p>
        <p>
          Each step is visible and personal, which is what turns a routine shave into something
          clients remember and recommend.
        </p>
        <p className="text-sm text-muted">
          Revenue potential will vary by shop, market and pricing. Shavista makes no guarantee of
          financial results.
        </p>
      </EditorialSection>

      {/* Economics */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The business case"
              title={[
                "Make Every",
                <>
                  Service <em className="accent text-terracotta">Count.</em>
                </>,
              ]}
              intro={
                <p>
                  Shavista is intended to help barbers introduce a differentiated service that may
                  support premium pricing, without changing how they work.
                </p>
              }
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-espresso/15">
              {businessCase.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 70}
                  className="grid gap-1 border-b border-espresso/15 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
                >
                  <span className="display text-[1.3rem]">{item.title}</span>
                  <span className="text-muted">{item.body}</span>
                </Reveal>
              ))}
            </ul>

            {/* Reserved for a future service-margin calculator — intentionally not built yet */}
            <Reveal className="mt-10 rounded-media border-2 border-dashed border-espresso/20 px-6 py-8 md:px-8">
              <p className="label text-sage-deep">Coming later</p>
              <p className="display mt-3 text-[1.6rem]">Service planner</p>
              <p className="mt-2 max-w-md text-muted">
                We’re planning a simple tool to help you model a Shavista service with your own
                prices and costs. It isn’t available yet.
              </p>
            </Reveal>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              Pricing is always set by your shop. Results will vary by market, location and
              clientele, and Shavista makes no guarantee of revenue or profit.
            </p>
          </div>
        </div>
      </section>

      {/* Planned */}
      <section className="bg-sand py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What’s planned"
            title={[
              "Building the",
              <>
                <em className="accent text-terracotta">Partner Program.</em>
              </>,
            ]}
            intro={
              <p>
                These offerings are being planned and are not yet available. Barbers who request
                information will hear about them first.
              </p>
            }
          />
          <FeatureGrid items={planned} columns={3} className="mt-14 md:mt-20" />
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="relative scroll-mt-20 bg-charcoal py-24 text-cream md:py-32">
        {/* CTA anchors: each pre-selects its interest in the form */}
        <span id="request-samples" className="absolute top-0 scroll-mt-20" aria-hidden />
        <span id="request-starter-kit" className="absolute top-0 scroll-mt-20" aria-hidden />
        <div className="container-luxe grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Request professional information"
              title={[
                "Let’s Talk",
                <>
                  <em className="accent text-terracotta-light">Shop.</em>
                </>,
              ]}
              intro={
                <p>
                  Tell us a little about your barbershop. We’re talking with professionals as the
                  Shavista program takes shape.
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
