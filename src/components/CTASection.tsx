import type { ReactNode } from "react";
import ButtonLink from "./Button";
import Reveal from "./Reveal";
import { isDarkTone, toneClasses, type Tone } from "./EditorialSection";

type CTASectionProps = {
  eyebrow?: string;
  title: string[];
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
  tone = "charcoal",
  size = "default",
}: CTASectionProps) {
  const dark = isDarkTone(tone);
  const statement = size === "statement";

  return (
    <section
      className={`relative overflow-hidden ${dark ? "grain" : ""} ${toneClasses[tone]} ${
        statement ? "py-32 md:py-48" : "py-24 md:py-36"
      }`}
    >
      <div className="container-luxe relative text-center">
        {eyebrow && (
          <Reveal className="mb-10 flex items-center justify-center gap-4">
            <span className="rule" aria-hidden />
            <p className={`label ${dark ? "text-bronze" : "text-bronze-deep"}`}>{eyebrow}</p>
            <span className="rule" aria-hidden />
          </Reveal>
        )}
        <h2
          className={`display mx-auto uppercase ${
            statement ? "text-[clamp(3rem,9vw,9.5rem)]" : "max-w-5xl text-[clamp(2.4rem,5.5vw,5rem)]"
          }`}
        >
          {title.map((line, i) => (
            <Reveal as="span" key={i} delay={i * 180} className={`block ${statement && i > 0 ? "italic text-bronze" : ""}`}>
              {line}
            </Reveal>
          ))}
        </h2>
        {body && (
          <Reveal
            delay={300}
            className={`mx-auto mt-10 max-w-xl text-base leading-relaxed md:text-lg ${
              dark ? "text-ivory/70" : "text-ink-muted"
            }`}
          >
            {body}
          </Reveal>
        )}
        <Reveal delay={420} className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={cta.href} variant={dark ? "light" : "dark"}>
            {cta.label}
          </ButtonLink>
          {secondaryCta && (
            <ButtonLink href={secondaryCta.href} variant={dark ? "outline-light" : "outline-dark"}>
              {secondaryCta.label}
            </ButtonLink>
          )}
        </Reveal>
      </div>
    </section>
  );
}
