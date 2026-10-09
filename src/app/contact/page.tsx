import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with SHAVISTA. Professional enquiries from barbers and barbershop owners.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Compact dark band so the transparent header reads correctly */}
      <section className="grain relative overflow-hidden bg-charcoal pb-20 pt-44 text-ivory md:pb-28 md:pt-56">
        <div className="container-luxe relative">
          <SectionHeading
            as="h1"
            tone="dark"
            size="xl"
            eyebrow="Contact"
            title={["Let’s elevate", "the shave."]}
          />
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-10 lg:col-span-4">
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              Whether you run a single chair or a group of shops, we’d like to hear from you. SHAVISTA
              is being developed with professionals in mind — your perspective matters.
            </p>
            <div className="border-t border-charcoal/15 pt-8">
              <p className="label mb-3 text-[0.62rem] text-bronze-deep">Professional enquiries</p>
              <p className="text-sm leading-relaxed text-ink-muted">
                For barbers and barbershop professionals interested in the SHAVISTA program.
              </p>
            </div>
            <div className="border-t border-charcoal/15 pt-8">
              <p className="label mb-3 text-[0.62rem] text-bronze-deep">Please note</p>
              <p className="text-sm leading-relaxed text-ink-muted">
                SHAVISTA is in development and not yet available for purchase. We are not able to
                take consumer orders.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
