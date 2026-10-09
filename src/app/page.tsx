import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import { IconDistinction, IconExperience, IconOpportunity } from "@/components/Icons";

const experience = [
  {
    title: "Freshly prepared",
    body: "Rich shaving lather prepared by your barber.",
    image: {
      src: "/images/placeholders/lather-macro.svg",
      alt: "Close-up of rich, creamy shaving lather.",
      brief: "Barber’s hands whipping fresh lather",
    },
  },
  {
    title: "Personalized",
    body: "An experience tailored to individual preferences.",
    image: {
      src: "/images/placeholders/fragrance-light.svg",
      alt: "Glass fragrance bottles on a sunlit shelf beside a plant.",
      brief: "Client choosing a fragrance",
    },
  },
  {
    title: "Expertly delivered",
    body: "Professional skill makes the difference.",
    image: {
      src: "/images/placeholders/chair-light.svg",
      alt: "A modern barber chair in natural light with a towel over the backrest.",
      brief: "Barber at work, client relaxed in the chair",
    },
  },
];

const qualities = [
  { title: "Comfortable razor glide", body: "A cushion of lather that helps the blade move smoothly." },
  { title: "Rich lather", body: "Creamy and generous, built fresh with a brush." },
  { title: "A smooth shave", body: "Made for an unhurried, confident pass." },
  { title: "Skin comfort", body: "Developed with how the skin feels during the shave in mind." },
  { title: "A soft finish", body: "Intended to leave skin feeling comfortable afterward." },
];

const opportunity = [
  { title: "Stand out", body: "Offer something different.", icon: <IconDistinction /> },
  { title: "Delight clients", body: "Create a memorable experience.", icon: <IconExperience /> },
  { title: "Grow", body: "Introduce a new premium service opportunity.", icon: <IconOpportunity /> },
];

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        layout="split"
        eyebrow="Coming to barbershops"
        title={[
          "A Fresh Take",
          <>
            on the <em className="accent text-terracotta">Shave.</em>
          </>,
        ]}
        subtitle="Made for Barbers. Remembered by Clients."
        body={
          <>
            <p>
              Meet Shavista. A new professional shaving experience combining freshly prepared
              lather, personalization, and the skill of your barber.
            </p>
            <p className="font-medium text-espresso">A better shave is just the beginning.</p>
          </>
        }
        primaryCta={{ label: "Discover the experience", href: "/experience" }}
        secondaryCta={{ label: "For barbers", href: "/professionals" }}
        image={{
          src: "/images/shavista-hero.png",
          alt: "Concept visualization of the Shavista professional collection on a barbershop counter.",
          note: "Concept visualization · Packaging in development",
          position: "object-[75%_50%]",
        }}
      />

      {/* 2 — Introducing Shavista */}
      <EditorialSection
        tone="sand"
        eyebrow="Introducing Shavista"
        title={[
          "Not Just a Shave.",
          <>
            A <em className="accent text-terracotta-deep">Shavista.</em>
          </>,
        ]}
        image={{
          src: "/images/placeholders/lather-bowl-light.svg",
          alt: "A shaving brush resting in fresh lather in a sage-green bowl, lit by morning sun.",
          brief: "Barber preparing warm lather, natural light",
        }}
      >
        <p>Some experiences are worth slowing down for.</p>
        <p className="space-y-1 border-l-2 border-terracotta/60 pl-5 text-espresso">
          <span className="block">A freshly prepared lather.</span>
          <span className="block">A fragrance chosen for you.</span>
          <span className="block">The attention of a skilled barber.</span>
        </p>
        <p>
          Shavista brings these details together to make an everyday service feel like something
          special.
        </p>
      </EditorialSection>

      {/* 3 — The Experience */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow="The experience"
            title={
              <>
                It’s All in the <em className="accent text-terracotta">Experience.</em>
              </>
            }
          />
          <FeatureGrid items={experience} columns={3} className="mt-14 md:mt-20" />
        </div>
      </section>

      {/* 4 — The Innovation */}
      <EditorialSection
        tone="sage"
        reverse
        eyebrow="The innovation"
        title={[
          "Something Small.",
          <>
            Something <em className="accent text-terracotta-deep">Different.</em>
          </>,
        ]}
        image={{
          src: "/images/placeholders/capsule-concept.svg",
          alt: "Abstract artwork of a soft, glowing form above a stone plinth, standing in for the Shavista capsule while its design is developed.",
          brief: "Capsule design in development",
        }}
      >
        <p>
          At the heart of every Shavista is a single-use capsule: one fresh portion of shaving soap,
          ready for one client.
        </p>
        <p>
          Your barber opens it, adds warm water and works it with a brush into a rich, creamy
          lather, prepared fresh in front of you.
        </p>
        <p className="text-espresso">Simple for the barber. Memorable for the client.</p>
      </EditorialSection>

      {/* 5 — The Better Shave */}
      <section className="bg-espresso py-24 text-cream md:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="The better shave"
              title={[
                "Feels Better.",
                <>
                  <em className="accent text-terracotta-light">By Design.</em>
                </>,
              ]}
              intro={
                <p>
                  Shavista is being developed around one simple question: how should a great shave
                  feel?
                </p>
              }
            />
            <Reveal delay={200} className="mt-12 hidden lg:block">
              <MediaFrame
                src="/images/placeholders/towel-light.svg"
                alt="Rolled warm towels on a wooden tray with soft steam."
                brief="Warm towel, relaxed client"
                className="aspect-4/3"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="label mb-3 text-sage-light">Developed with an emphasis on</p>
            </Reveal>
            <ol className="border-t border-cream/20">
              {qualities.map((q, i) => (
                <Reveal
                  as="li"
                  key={q.title}
                  delay={i * 80}
                  className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-cream/20 py-7 md:grid-cols-[4rem_1fr]"
                >
                  <span className="accent text-3xl leading-none text-terracotta-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-[1.6rem] transition-colors duration-500 group-hover:text-terracotta-light md:text-[1.9rem]">
                      {q.title}
                    </h3>
                    <p className="mt-1 text-cream/75">{q.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/65">
                Shavista is in development. These describe the experience we are designing for. They
                are not clinical or comparative claims.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — The Barber's Opportunity */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-luxe">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              className="lg:col-span-7"
              eyebrow="The barber’s opportunity"
              title={[
                "Better Shaves.",
                <>
                  Better <em className="accent text-terracotta">Business.</em>
                </>,
              ]}
            />
            <Reveal delay={150} className="lede space-y-4 text-muted lg:col-span-5">
              <p>Give your clients something new to enjoy and another reason to come back.</p>
              <p>
                Shavista helps professional barbers introduce a distinctive premium shaving
                experience that complements their existing services.
              </p>
            </Reveal>
          </div>
          <FeatureGrid items={opportunity} columns={3} className="mt-14 md:mt-20" />
          <Reveal className="mt-12">
            <ButtonLink href="/professionals">Explore Shavista for professionals</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* 7 — The Professional Community */}
      <EditorialSection
        tone="sand"
        eyebrow="The professional community"
        title={[
          "Made for the People",
          <>
            Behind the <em className="accent text-terracotta-deep">Chair.</em>
          </>,
        ]}
        imageShape="landscape"
        image={{
          src: "/images/placeholders/shop-light.svg",
          alt: "A bright, welcoming modern barbershop with arched windows, plants and two barber chairs.",
          brief: "A busy, welcoming modern barbershop",
        }}
      >
        <p>
          Barbers are skilled professionals and independent business owners. They know their
          clients by name and turn a quick visit into the best part of someone’s week.
        </p>
        <p>
          Shavista is built to support that craft, not replace it. The skill stays yours. We simply
          add something new for your clients to look forward to.
        </p>
      </EditorialSection>

      {/* Final CTA */}
      <CTASection
        tone="charcoal"
        size="statement"
        title={[
          "Something Better Is Coming",
          <>
            to the <em className="accent text-terracotta-light">Barbershop.</em>
          </>,
        ]}
        cta={{ label: "Get to know Shavista", href: "/experience" }}
        secondaryCta={{ label: "Professional inquiries", href: "/professionals#request" }}
      />
    </>
  );
}
