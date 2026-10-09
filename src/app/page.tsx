import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import {
  IconCreate,
  IconDistinction,
  IconElevate,
  IconExperience,
  IconOpen,
  IconOpportunity,
} from "@/components/Icons";

const stages = [
  {
    number: "01",
    title: "Open",
    body: "A precisely measured shaving preparation.",
    icon: <IconOpen />,
  },
  {
    number: "02",
    title: "Create",
    body: "Combine with warm water and work into a rich, luxurious lather.",
    icon: <IconCreate />,
  },
  {
    number: "03",
    title: "Elevate",
    body: "Deliver a personalized professional shaving experience.",
    icon: <IconElevate />,
  },
];

const qualities = [
  { title: "Rich, luxurious lather", body: "Dense, creamy and generous — built by hand, with the brush." },
  { title: "Comfortable razor glide", body: "A cushion that lets the blade move with confidence." },
  { title: "A smooth shave", body: "Designed to support a clean, unhurried pass." },
  { title: "A soft skin feel", body: "Intended to leave skin feeling comfortable after the towel." },
  {
    title: "Considerate formulation",
    body: "Developed to help minimize the tight, dry sensation some clients notice after a shave.",
  },
];

const advantages = [
  {
    title: "Distinction",
    body: "Stand apart with a memorable shaving ritual.",
    icon: <IconDistinction />,
  },
  {
    title: "Experience",
    body: "Give clients something worth returning for.",
    icon: <IconExperience />,
  },
  {
    title: "Opportunity",
    body: "Introduce a premium service designed to increase revenue potential per appointment.",
    icon: <IconOpportunity />,
  },
];

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        layout="editorial"
        title={["The Art of a", "Better Shave."]}
        subtitle="Modern Luxury. Timeless Craftsmanship."
        body={
          <p>
            Elevating the professional shave through innovation, ritual, and the art of barbering.
          </p>
        }
        primaryCta={{ label: "Discover Shavista", href: "/experience" }}
        secondaryCta={{ label: "For Professionals", href: "/professionals" }}
        image={{
          src: "/images/shavista-hero.png",
          alt: "The SHAVISTA professional collection on a barber’s wooden counter: a black presentation box with brush and bowl, pre-shave oil bottles, a jar of SHAVISTA capsules, and a straight razor on slate.",
          position: "object-[75%_50%] md:object-[50%_40%]",
        }}
      />

      {/* 2 — The Forgotten Art */}
      <EditorialSection
        eyebrow="The forgotten art"
        title={["Some traditions", "are worth", "perfecting."]}
        image={{
          src: "/images/placeholders/ritual-razor.svg",
          alt: "A closed straight razor resting on a stack of folded white towels.",
          brief: "Straight razor and hot towels, side light",
        }}
      >
        <p>There was a time when a shave was more than a routine.</p>
        <p className="display space-y-1 border-l border-bronze/50 py-1 pl-6 text-2xl italic leading-snug text-charcoal md:text-[1.75rem]">
          <span className="block">The preparation.</span>
          <span className="block">The warm lather.</span>
          <span className="block">The brush.</span>
          <span className="block">The precision of a skilled barber.</span>
        </p>
        <p>It was a ritual.</p>
        <p>SHAVISTA brings that experience into the modern barbershop.</p>
        <p className="text-charcoal">
          Not by replacing tradition.
          <br />
          By giving it new possibilities.
        </p>
      </EditorialSection>

      {/* 3 — Introducing the Capsule */}
      <section className="relative overflow-hidden bg-ivory-deep py-24 md:py-36">
        <div className="container-luxe">
          <div className="grid items-end gap-12 md:grid-cols-12">
            <SectionHeading
              className="md:col-span-7"
              eyebrow="Introducing the capsule"
              title={["A small capsule.", "A remarkable", "experience."]}
            />
            <Reveal delay={150} className="md:col-span-5 md:pb-3">
              <p className="max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
                Each single-use capsule holds a concentrated, powdered shaving soap — measured for one
                exceptional shave. Warm water and a traditional brush do the rest, in the barber’s
                hands.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <MediaFrame
              src="/images/placeholders/capsule-concept.svg"
              alt="Abstract concept artwork: a softly glowing form above a stone plinth, representing the capsule while its final design is in development."
              brief="Capsule design in development"
              className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
              sizes="100vw"
            />
          </Reveal>

          <FeatureGrid items={stages} columns={3} className="mt-4" />
        </div>
      </section>

      {/* 4 — The Better Shave */}
      <section className="grain relative overflow-hidden bg-charcoal py-24 text-ivory md:py-36">
        <div className="container-luxe relative grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="The better shave"
              title={["Crafted for", "the blade.", "Considerate", "of the skin."]}
              intro={
                <p>
                  SHAVISTA is being developed to transform a few grams of powder into something
                  generous and calm — a lather that serves the razor and respects the face beneath
                  it.
                </p>
              }
            />
            <Reveal delay={200} className="mt-14 hidden lg:block">
              <MediaFrame
                src="/images/placeholders/lather-macro.svg"
                alt="Close-up texture of dense, creamy shaving lather."
                brief="Macro of lather texture"
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="label mb-2 text-ivory/50">In development to deliver</p>
            </Reveal>
            <ol className="border-t border-ivory/15">
              {qualities.map((q, i) => (
                <Reveal
                  as="li"
                  key={q.title}
                  delay={i * 90}
                  className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-ivory/15 py-8 md:grid-cols-[4.5rem_1fr]"
                >
                  <span className="display pt-1 text-2xl italic text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-[1.85rem] leading-tight transition-colors duration-500 group-hover:text-bronze md:text-[2.2rem]">
                      {q.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ivory/65">{q.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="mt-8 max-w-md text-xs leading-relaxed text-ivory/45">
                SHAVISTA is in development. Descriptions reflect the intended experience of the
                formulation and are not clinical or comparative claims.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — The Barber's Advantage */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The barber’s advantage"
            title={["Elevate your craft.", "Elevate your business."]}
            intro={
              <p>
                SHAVISTA gives professional barbers the opportunity to introduce a distinctive,
                premium shaving service — one that clients remember and ask for by name.
              </p>
            }
          />
          <FeatureGrid items={advantages} columns={3} className="mt-16 md:mt-24" />
          <Reveal className="mt-16">
            <ButtonLink href="/professionals" variant="dark">
              Explore the professional experience
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* 6 — Professional Exclusivity */}
      <EditorialSection
        tone="forest"
        reverse
        eyebrow="Professional exclusivity"
        title={["Created for", "professionals."]}
        image={{
          src: "/images/placeholders/shop-interior.svg",
          alt: "A barber chair in a quiet barbershop, window light falling across the floor.",
          brief: "The chair, before the first client",
        }}
        imageShape="landscape"
        footer={
          <ButtonLink href="/professionals#request" variant="light">
            Become a Shavista partner
          </ButtonLink>
        }
      >
        <p className="display text-3xl italic leading-snug text-ivory">
          Great tools belong in skilled hands.
        </p>
        <p>
          SHAVISTA is designed for professional barbers who understand that craftsmanship,
          attention, and experience make the difference.
        </p>
        <p>Our professional-only approach celebrates the people behind the chair.</p>
      </EditorialSection>

      {/* 7 — Closing statement */}
      <CTASection
        size="statement"
        title={["The shave is an art.", "Let’s treat it that way."]}
        cta={{ label: "Discover Shavista", href: "/experience" }}
      />
    </>
  );
}
