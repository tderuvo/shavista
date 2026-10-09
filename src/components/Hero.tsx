import type { CSSProperties, ReactNode } from "react";
import ButtonLink from "./Button";
import MediaFrame from "./MediaFrame";
import { Eyebrow } from "./SectionHeading";

type HeroCta = { label: string; href: string };

type HeroImage = {
  src: string;
  alt: string;
  brief?: string;
  /** Always-visible caption, e.g. "Concept visualization" */
  note?: string;
  /** Responsive object-position classes */
  position?: string;
};

type HeroProps = {
  eyebrow?: string;
  /** One entry per line; wrap words in <em className="accent"> for the serif accent. */
  title: ReactNode[];
  subtitle?: ReactNode;
  body?: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  image?: HeroImage;
  /**
   * "split": copy beside a supporting image (home).
   * "stacked": copy, then a wide editorial image beneath (interior pages).
   */
  layout?: "split" | "stacked";
  tone?: "cream" | "sand";
};

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export default function Hero({
  eyebrow,
  title,
  subtitle,
  body,
  primaryCta,
  secondaryCta,
  image,
  layout = "stacked",
  tone = "cream",
}: HeroProps) {
  const split = layout === "split";

  const copy = (
    <>
      {eyebrow && (
        <div className="rise" style={rise(100)}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h1
        className={`display text-espresso ${
          split ? "text-[clamp(3rem,6.6vw,6.25rem)]" : "text-[clamp(2.9rem,7vw,6.5rem)]"
        }`}
      >
        {title.map((line, i) => (
          <span key={i} className="rise block" style={rise(200 + i * 140)}>
            {line}
          </span>
        ))}
      </h1>
      {subtitle && (
        <p
          className="rise mt-6 text-[clamp(1.35rem,2.2vw,1.8rem)] font-medium leading-snug tracking-[-0.02em] text-terracotta-deep"
          style={rise(520)}
        >
          {subtitle}
        </p>
      )}
      {body && (
        <div className="rise lede mt-6 max-w-xl space-y-4 text-muted" style={rise(660)}>
          {body}
        </div>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={rise(800)}>
          {primaryCta && <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>}
          {secondaryCta && (
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          )}
        </div>
      )}
    </>
  );

  const bg = tone === "sand" ? "bg-sand" : "bg-cream";

  if (split) {
    return (
      <section className={`relative overflow-hidden ${bg}`}>
        <div className="container-luxe grid items-center gap-12 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-12 lg:gap-10 lg:pt-36">
          <div className="lg:col-span-6">{copy}</div>
          {image && (
            <div className="rise lg:col-span-6" style={rise(400)}>
              <MediaFrame
                src={image.src}
                alt={image.alt}
                brief={image.brief}
                note={image.note}
                preload
                settle
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-4/3 lg:aspect-square"
                imageClassName={image.position}
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="container-luxe pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="max-w-4xl">{copy}</div>
        {image && (
          <div className="rise mt-14 md:mt-20" style={rise(600)}>
            <MediaFrame
              src={image.src}
              alt={image.alt}
              brief={image.brief}
              note={image.note}
              preload
              settle
              sizes="(min-width: 1408px) 1280px, 100vw"
              className="aspect-4/3 md:aspect-21/9"
              imageClassName={image.position}
            />
          </div>
        )}
      </div>
    </section>
  );
}
