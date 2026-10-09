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
    "Shavista Academy is a future concept for professional training in the Shavista experience. Coming soon.",
  path: "/academy",
});

const offerings = [
  {
    tag: "Future concept",
    title: "Experience training",
    body: "Preparing and presenting the Shavista experience, from capsule to finish.",
    icon: <IconExperience />,
  },
  {
    tag: "Future concept",
    title: "Professional techniques",
    body: "Lather, brush work and client care, explored with the barbers who practice them.",
    icon: <IconTraining />,
  },
  {
    tag: "Future concept",
    title: "Certified Shavista program",
    body: "A possible future way to recognize barbers who master the Shavista experience. Not yet available or accredited.",
    icon: <IconSeal />,
  },
];

export default function AcademyPage() {
  return (
    <>
      <Hero
        eyebrow="Shavista Academy · Coming soon"
        title={[
          "Mastery Deserves",
          <>
            <em className="accent text-terracotta">Recognition.</em>
          </>,
        ]}
        subtitle="A future home for Shavista professional training."
        image={{
          src: "/images/placeholders/lather-macro.svg",
          alt: "Close-up of rich shaving lather.",
          brief: "Barbers learning together, natural light",
        }}
      />

      <section className="bg-sand py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The concept"
            title={[
              "Learning,",
              <>
                <em className="accent text-terracotta-deep">Barber to Barber.</em>
              </>,
            ]}
            intro={
              <>
                <p>
                  Great barbers never stop learning from each other. Shavista Academy is our future
                  concept for sharing the Shavista experience with the professionals who bring it to
                  life.
                </p>
                <p className="mt-5">
                  The Academy is not open yet. The programs below are ideas under consideration. No
                  training or certification is currently offered.
                </p>
              </>
            }
          />
          <FeatureGrid items={offerings} columns={3} className="mt-14 md:mt-20" />
        </div>
      </section>

      <CTASection
        eyebrow="Coming soon"
        title={[
          "Be the First",
          <>
            <em className="accent text-terracotta-light">to Know.</em>
          </>,
        ]}
        body={<p>Register your professional interest and we’ll share Academy news as it develops.</p>}
        cta={{ label: "Register interest", href: "/contact" }}
      />
    </>
  );
}
