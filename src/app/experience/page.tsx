import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "The Shavista Experience",
  absolute: true,
  description:
    "What a Shavista feels like: a warm welcome, freshly prepared lather, a fragrance chosen for you, the skill of your barber and a finish worth coming back for.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <Hero
        eyebrow="The Shavista experience"
        title={[
          "A Shave Worth",
          <>
            <em className="accent text-terracotta">Looking Forward To.</em>
          </>,
        ]}
        subtitle="Familiar enough to feel easy. Different enough to remember."
        image={{
          src: "/images/placeholders/shop-light.svg",
          alt: "A bright, welcoming modern barbershop with arched windows and plants.",
          brief: "Welcoming modern barbershop, morning light",
        }}
      />

      <section className="bg-sand py-24 md:py-32">
        <div className="container-luxe grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label text-terracotta-deep">Six simple moments</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.15]">
              Think of your favorite coffee, made fresh, just the way you like it, by someone who
              knows what they’re doing. <em className="accent text-terracotta-deep">Now imagine your shave felt the same.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <EditorialSection
        index="01"
        eyebrow="The welcome"
        title={["Take a Seat."]}
        image={{
          src: "/images/placeholders/chair-light.svg",
          alt: "A modern barber chair in natural light, a fresh towel over the backrest.",
          brief: "Client greeted and settling into the chair",
        }}
      >
        <p>
          It starts the moment you sit down. A warm towel, an unhurried pace, a barber who asks how
          you’d like it today.
        </p>
        <p>No rush. No routine. Just twenty minutes that are entirely yours.</p>
      </EditorialSection>

      <EditorialSection
        index="02"
        eyebrow="The capsule"
        title={[
          "One Client.",
          <>
            <em className="accent text-terracotta-deep">One Capsule.</em>
          </>,
        ]}
        tone="sage"
        reverse
        image={{
          src: "/images/placeholders/capsule-concept.svg",
          alt: "Abstract artwork standing in for the Shavista capsule while its design is developed.",
          brief: "Capsule design in development",
        }}
      >
        <p>
          Every Shavista begins with a fresh, single-use capsule: one portion of shaving soap,
          opened just for you.
        </p>
        <p>Nothing shared, nothing left over. A fresh start, every time.</p>
      </EditorialSection>

      <EditorialSection
        index="03"
        eyebrow="The fresh lather"
        title={[
          "Made Fresh,",
          <>
            <em className="accent text-terracotta-light">Made for You.</em>
          </>,
        ]}
        tone="espresso"
        imageShape="landscape"
        image={{
          src: "/images/placeholders/lather-bowl-light.svg",
          alt: "A shaving brush resting in fresh, creamy lather in a sage-green bowl.",
          brief: "Barber whipping lather in a bowl, close-up",
        }}
      >
        <p>
          Warm water meets the capsule in the bowl. The brush begins to turn, and within moments
          there’s a rich, creamy lather.
        </p>
        <p>
          Like steamed milk at a good café, it’s prepared right in front of you. That’s half the
          pleasure.
        </p>
      </EditorialSection>

      <EditorialSection
        index="04"
        eyebrow="Your fragrance"
        title={[
          "A Scent",
          <>
            <em className="accent text-terracotta-deep">Chosen by You.</em>
          </>,
        ]}
        reverse
        image={{
          src: "/images/placeholders/fragrance-light.svg",
          alt: "Glass fragrance bottles in soft sunlight beside a plant.",
          brief: "Client choosing a fragrance with the barber",
        }}
      >
        <p>
          Fresh citrus, soft woods, quiet herbs. The experience can be personalized with
          compatible, skin-safe fragrances worked into the lather.
        </p>
        <p>It’s a small choice that makes the shave feel like yours.</p>
      </EditorialSection>

      <EditorialSection
        index="05"
        eyebrow="The barber’s skill"
        title={[
          "Where the",
          <>
            <em className="accent text-terracotta-deep">Magic Happens.</em>
          </>,
        ]}
        tone="sand"
        image={{
          src: "/images/placeholders/lather-macro.svg",
          alt: "Close-up of rich shaving lather.",
          brief: "Barber’s hands applying lather with a brush",
        }}
      >
        <p>
          The lather goes on in slow circles. Then the razor: steady, precise, confident. This is
          what your barber does best.
        </p>
        <p>
          Shavista doesn’t change that. It simply gives great barbers a great new experience to
          offer.
        </p>
      </EditorialSection>

      <EditorialSection
        index="06"
        eyebrow="The finish"
        title={[
          "Feel the",
          <>
            <em className="accent text-terracotta-deep">Difference.</em>
          </>,
        ]}
        reverse
        imageShape="landscape"
        image={{
          src: "/images/placeholders/towel-light.svg",
          alt: "Rolled warm towels on a wooden tray.",
          brief: "Warm towel finish, relaxed client",
        }}
      >
        <p>
          A cool towel. A last look in the mirror. A smooth, comfortable finish, and a reason to book
          the next one before you leave.
        </p>
      </EditorialSection>

      <CTASection
        eyebrow="For barbers"
        title={[
          "Bring Shavista",
          <>
            to <em className="accent text-terracotta-light">Your Chair.</em>
          </>,
        ]}
        body={<p>See how Shavista is being designed to fit into your shop and your services.</p>}
        cta={{ label: "For professionals", href: "/professionals" }}
        secondaryCta={{ label: "Our philosophy", href: "/philosophy" }}
      />
    </>
  );
}
