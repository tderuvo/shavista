import type { ReactNode } from "react";
import ButtonLink from "./Button";
import Reveal from "./Reveal";
import { Eyebrow } from "./SectionHeading";
import { isDarkTone, toneClasses, type Tone } from "./EditorialSection";

type CTASectionProps = {
  eyebrow?: string;
  /** One entry per line; wrap words in <em className="accent"> for the serif accent. */
  title: ReactNode[];
  body?: ReactNode;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tone?: Tone;
  /** "statement" renders oversized closing typography */
  size?: "default" | "statement";
};

export default function CTASection({
  eyebrow,
  title,
  body,
  cta,
  secondaryCta,
  tone = "espresso",
  size = "default",
}: CTASectionProps) {
  const dark = isDarkTone(tone);
  const statement = size === "statement";

  return (
    <section className={`relative overflow-hidden ${toneClasses[tone]} ${statement ? "py-28 md:py-40" : "py-24 md:py-32"}`}>
      <div className="container-luxe text-center">
        {eyebrow && (
          <Reveal>
            <Eyebrow tone={dark ? "dark" : "light"} center>
              {eyebrow}
            </Eyebrow>
          </Reveal>
        )}
        <h2
          className={`display mx-auto ${
            statement ? "max-w-6xl text-[clamp(2.8rem,7.4vw,7.25rem)]" : "max-w-4xl text-[clamp(2.3rem,5vw,4.5rem)]"
          }`}
        >
          {title.map((line, i) => (
            <Reveal as="span" key={i} delay={i * 160} className="block">
              {line}
            </Reveal>
          ))}
        </h2>
        {body && (
          <Reveal delay={280} className={`lede mx-auto mt-8 max-w-xl ${dark ? "text-cream/75" : "text-muted"}`}>
            {body}
          </Reveal>
        )}
        <Reveal delay={400} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={cta.href} variant={dark ? "light" : "primary"}>
            {cta.label}
          </ButtonLink>
          {secondaryCta && (
            <ButtonLink href={secondaryCta.href} variant={dark ? "outline-light" : "secondary"}>
              {secondaryCta.label}
            </ButtonLink>
          )}
        </Reveal>
      </div>
    </section>
  );
}
