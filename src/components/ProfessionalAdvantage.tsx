import FeatureGrid, { type Feature } from "./FeatureGrid";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { isDarkTone, toneClasses, type Tone } from "./EditorialSection";

const benefits: Feature[] = [
  {
    number: "01",
    tag: "Predictable portions",
    title: "One Capsule. One Shave.",
    body: (
      <>
        <p>
          A precisely portioned preparation designed to simplify inventory planning and make
          product costs easier to manage.
        </p>
        <p className="mt-3">Professional consistency starts with knowing what goes into every service.</p>
      </>
    ),
  },
  {
    number: "02",
    tag: "Simplified preparation",
    title: "Less Mess. More Experience.",
    body: (
      <>
        <p>
          A single-serve system designed to reduce preparation friction and keep the barber’s
          station organized.
        </p>
        <p className="mt-3">
          Spend less time managing product and more time delivering a memorable professional shave.
        </p>
      </>
    ),
  },
  {
    number: "03",
    tag: "Professional focus",
    title: "Made for the Trade.",
    body: (
      <>
        <p>
          Shavista is being developed for professional barbers and barbershops. Our
          professional-first approach is designed to support the people who deliver the experience.
        </p>
        <p className="mt-3">The barber remains at the center of the Shavista system.</p>
      </>
    ),
  },
];

/** "The Shavista Professional Advantage": the core B2B proposition, shared by Home and For Professionals. */
export default function ProfessionalAdvantage({ tone = "espresso" }: { tone?: Tone }) {
  const dark = isDarkTone(tone);

  return (
    <section className={`py-24 md:py-32 ${toneClasses[tone]}`}>
      <div className="container-luxe">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-7"
            tone={dark ? "dark" : "light"}
            eyebrow="The Shavista professional advantage"
            title={[
              "Better Shaves.",
              <>
                Better{" "}
                <em className={`accent ${dark ? "text-terracotta-light" : "text-terracotta"}`}>Business.</em>
              </>,
            ]}
          />
          <Reveal delay={150} className={`lede space-y-4 lg:col-span-5 ${dark ? "text-cream/75" : "text-muted"}`}>
            <p>A memorable shaving experience is more than a service upgrade.</p>
            <p>
              It’s an opportunity to differentiate your barbershop, introduce premium service
              options, and give customers another reason to return.
            </p>
          </Reveal>
        </div>
        <FeatureGrid items={benefits} tone={dark ? "dark" : "light"} columns={3} className="mt-14 md:mt-20" />
      </div>
    </section>
  );
}
