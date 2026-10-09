import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { IconExperience, IconSeal, IconTraining } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Shavista Academy — Coming Soon",
  absolute: true,
  description:
    "Shavista Academy is a future professional training concept from SHAVISTA. Coming soon.",
  path: "/academy",
});

const offerings = [
  {
    tag: "Future concept",
    title: "Ritual training",
    body: "The SHAVISTA ritual, step by step — from capsule to finished shave — and how to present it to clients.",
    icon: <IconExperience />,
  },
  {
    tag: "Future concept",
    title: "Professional techniques",
    body: "Lather building, brush work and presentation, explored with the professionals who practice them.",
    icon: <IconTraining />,
  },
  {
    tag: "Future concept",
    title: "Certified Shavista program",
    body: "A possible future path to recognize barbers who master the SHAVISTA ritual. Not yet available or accredited.",
    icon: <IconSeal />,
  },
];

export default function AcademyPage() {
  return (
    <>
      <Hero
        eyebrow="Shavista Academy · Coming soon"
        title={["Mastery deserves", "recognition."]}
        subtitle="A future home for professional SHAVISTA training."
        image={{
          src: "/images/placeholders/ritual-razor.svg",
          alt: "A folded straight razor resting on a stack of white towels.",
          brief: "Academy imagery to come",
        }}
      />

      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The concept"
            title={["Where the ritual", "is passed on."]}
            intro={
              <>
                <p>
                  Great shaving is learned in the chair, refined over years and handed down from one
                  barber to the next. Shavista Academy is our future concept for honoring that
                  tradition — and sharing the SHAVISTA ritual with the professionals who carry it.
                </p>
                <p className="mt-5">
                  The Academy is not yet open. The programs below are concepts under consideration,
                  and no training or certification is currently offered.
                </p>
              </>
            }
          />
          <FeatureGrid items={offerings} columns={3} className="mt-16 md:mt-24" />
        </div>
      </section>

      <CTASection
        eyebrow="Coming soon"
        title={["Be the first", "to know."]}
        body={<p>Register your professional interest and we’ll share news of the Academy as it develops.</p>}
        cta={{ label: "Register interest", href: "/contact" }}
      />
    </>
  );
}
