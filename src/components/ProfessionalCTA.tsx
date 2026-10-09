import CTASection from "./CTASection";
import type { Tone } from "./EditorialSection";

type ProfessionalCTAProps = {
  /** Page that holds the inquiry form. Use "" when the form is on the current page. */
  formPage?: string;
  tone?: Tone;
};

/**
 * Professional conversion area. Both CTAs open the inquiry form with the matching
 * interest pre-selected; nothing here implies samples or kits are available yet.
 */
export default function ProfessionalCTA({ formPage = "/professionals", tone = "sand" }: ProfessionalCTAProps) {
  return (
    <CTASection
      tone={tone}
      eyebrow="For professionals"
      title={[
        "Bring Something New",
        <>
          to <em className="accent text-terracotta-deep">Your Chair.</em>
        </>,
      ]}
      body={
        <>
          <p>
            Be among the first professionals to learn about Shavista. Discover the shaving
            experience we’re developing for modern barbershops.
          </p>
          <p className="mt-4 text-base">
            Shavista is in development. Samples and starter kits aren’t available yet. Your request
            registers interest in future availability.
          </p>
        </>
      }
      cta={{ label: "Request professional samples", href: `${formPage}#request-samples` }}
      secondaryCta={{ label: "Explore the Shavista starter kit", href: `${formPage}#request-starter-kit` }}
    />
  );
}
