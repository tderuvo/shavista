import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Say hello to Shavista. Professional inquiries from barbers and barbershop owners.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-36 md:pb-20 md:pt-48">
        <div className="container-luxe">
          <SectionHeading
            as="h1"
            size="xl"
            eyebrow="Contact"
            title={[
              "Pull Up",
              <>
                a <em className="accent text-terracotta">Chair.</em>
              </>,
            ]}
            intro={
              <p>
                Whether you run a single chair or a group of shops, we’d love to hear from you.
                Shavista is being built with barbers, and your perspective matters.
              </p>
            }
          />
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12">
          <Reveal className="space-y-8 lg:col-span-4">
            <div className="border-t border-espresso/15 pt-6">
              <p className="label mb-2 text-terracotta-deep">Professional inquiries</p>
              <p className="text-muted">
                For barbers and barbershop professionals interested in bringing Shavista to their
                clients.
              </p>
            </div>
            <div className="border-t border-espresso/15 pt-6">
              <p className="label mb-2 text-terracotta-deep">Please note</p>
              <p className="text-muted">
                Shavista is in development and not yet available for purchase. We aren’t able to
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
