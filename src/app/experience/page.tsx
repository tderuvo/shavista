import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "The SHAVISTA Experience",
  absolute: true,
  description:
    "The complete SHAVISTA shaving ritual — preparation, capsule, warm lather, fragrance, the barber’s craft and the finished shave.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <Hero
        eyebrow="The Shavista experience"
        title={["A ritual,", "prepared by hand."]}
        subtitle="Like a fine espresso or a well-made cocktail, the best shave begins long before the first pass of the blade."
        image={{
          src: "/images/placeholders/mise-en-place.svg",
          alt: "Overhead view of a barber’s station: lather bowl, shaving brush, straight razor, folded towel and a small fragrance vial.",
          brief: "Overhead mise en place at the barber’s station",
        }}
      />

      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label text-bronze-deep">Six moments</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.15]">
              Every element of a SHAVISTA shave is considered — the warmth of the water, the weight
              of the brush, the rhythm of the barber’s hand. Nothing is rushed. Nothing is
              automatic. <span className="italic text-bronze-deep">This is the shave, made deliberate again.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <EditorialSection
        index="01"
        eyebrow="The preparation"
        title={["Setting", "the stage."]}
        tone="stone"
        image={{
          src: "/images/placeholders/hot-towels.svg",
          alt: "Rolled hot towels stacked on a tray, steam rising in warm light.",
          brief: "Hot towels, steam, warm tray",
        }}
        imageShape="landscape"
      >
        <p>
          The chair reclines. Hot towels are rolled and waiting. The bowl is warmed, the brush
          softened in water.
        </p>
        <p>
          A great barista warms the cup before pulling the shot. A great barber prepares the skin,
          the tools and the moment — so the client feels it before a word is spoken.
        </p>
      </EditorialSection>

      <EditorialSection
        index="02"
        eyebrow="The capsule"
        title={["One shave.", "Precisely", "measured."]}
        reverse
        image={{
          src: "/images/placeholders/capsule-concept.svg",
          alt: "Abstract concept artwork representing the SHAVISTA capsule, whose final design is in development.",
          brief: "Capsule design in development",
        }}
      >
        <p>
          Each single-use capsule holds a concentrated, powdered shaving soap — one measure, for one
          client.
        </p>
        <p>
          No shared tubs. No guesswork. Just a fresh, consistent beginning every time, opened in
          front of the client like a fine ingredient.
        </p>
      </EditorialSection>

      <EditorialSection
        index="03"
        eyebrow="The warm lather"
        title={["From powder", "to cream."]}
        tone="charcoal"
        image={{
          src: "/images/placeholders/lather-macro.svg",
          alt: "Close-up of rich, dense shaving lather with fine bubbles.",
          brief: "Macro: lather building under the brush",
        }}
        imageShape="landscape"
      >
        <p>
          Warm water meets the powder in the bowl. The brush begins to turn — slowly at first, then
          with rhythm — folding air into the soap.
        </p>
        <p>
          Within moments, the lather thickens and turns glossy: dense, creamy and generous. Like
          steamed milk built by a practiced hand, the texture is made, not dispensed.
        </p>
      </EditorialSection>

      <EditorialSection
        index="04"
        eyebrow="The fragrance experience"
        title={["A signature,", "chosen for", "the client."]}
        reverse
        image={{
          src: "/images/placeholders/fragrance.svg",
          alt: "Three glass flacons of amber fragrance on a dark ledge, softly backlit.",
          brief: "Fragrance flacons, backlit",
        }}
      >
        <p>
          The experience can be personalized with compatible, skin-safe fragrances — a few drops
          worked into the lather.
        </p>
        <p>
          Warm woods, fresh citrus, quiet herbs. Like the final note of a well-made cocktail, the
          scent is what clients remember on the walk home.
        </p>
      </EditorialSection>

      <EditorialSection
        index="05"
        eyebrow="The barber’s craftsmanship"
        title={["Skill is", "the essential", "ingredient."]}
        tone="forest"
        image={{
          src: "/images/placeholders/brush-portrait.svg",
          alt: "A traditional shaving brush standing upright in dramatic side light.",
          brief: "Barber’s hands with brush, close-up",
        }}
      >
        <p>
          The lather is brushed on in slow circles, lifting the beard and warming the skin. Then the
          razor: steady, unhurried, precise.
        </p>
        <p>
          SHAVISTA doesn’t replace any of this. It exists to give a skilled barber better material
          to work with — and a stage worthy of the craft.
        </p>
      </EditorialSection>

      <EditorialSection
        index="06"
        eyebrow="The finished shave"
        title={["The moment", "after."]}
        reverse
        image={{
          src: "/images/placeholders/ritual-razor.svg",
          alt: "A folded straight razor resting on clean white towels.",
          brief: "Razor at rest, towels folded",
        }}
      >
        <p>
          A cool towel. A final touch. The client sits up, runs a hand along the jaw — and pauses.
        </p>
        <p>
          A smooth, comfortable finish and a sense of having been genuinely cared for. That pause is
          what brings clients back to the chair.
        </p>
      </EditorialSection>

      <CTASection
        eyebrow="For professionals"
        title={["Bring the ritual", "to your chair."]}
        body={<p>Learn how SHAVISTA is being designed to fit into the modern barbershop.</p>}
        cta={{ label: "For professionals", href: "/professionals" }}
        secondaryCta={{ label: "Our philosophy", href: "/philosophy" }}
      />
    </>
  );
}
