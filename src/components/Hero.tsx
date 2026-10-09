import type { CSSProperties, ReactNode } from "react";
import ButtonLink from "./Button";
import MediaFrame from "./MediaFrame";

type HeroCta = { label: string; href: string };

type HeroProps = {
  eyebrow?: string;
  title: string[];
  subtitle?: string;
  body?: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  image: {
    src: string;
    alt: string;
    brief?: string;
    /** Responsive object-position classes, e.g. "object-[62%_50%] md:object-center" */
    position?: string;
  };
  /** "full" fills the viewport (home); "page" is a shorter interior-page hero. */
  size?: "full" | "page";
  /**
   * "overlay" sets the copy over the image. "editorial" shows the image
   * uncropped at its own aspect ratio with the copy in a band beneath it —
   * for photography whose branding must stay unobstructed.
   */
  layout?: "overlay" | "editorial";
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
  size = "page",
  layout = "overlay",
}: HeroProps) {
  const full = size === "full";

  const ctas = (primaryCta || secondaryCta) && (
    <div className="rise mt-12 flex flex-col gap-4 sm:flex-row" style={rise(1050)}>
      {primaryCta && (
        <ButtonLink href={primaryCta.href} variant="light">
          {primaryCta.label}
        </ButtonLink>
      )}
      {secondaryCta && (
        <ButtonLink href={secondaryCta.href} variant="outline-light">
          {secondaryCta.label}
        </ButtonLink>
      )}
    </div>
  );

  if (layout === "editorial") {
    return (
      <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
        <div className="relative">
          {/* Square crop on phones keeps the packaging centred; the full frame from md up */}
          <MediaFrame
            src={image.src}
            alt={image.alt}
            brief={image.brief}
            preload
            zoom
            sizes="100vw"
            className="aspect-square w-full sm:aspect-[4/3] md:aspect-[1672/941] md:max-h-[100svh]"
            imageClassName={image.position}
          />
          {/* Soft veil behind the navigation only — clear of the packaging */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/65 to-transparent md:h-32"
          />
          {/* Blends the image's lower edge into the copy band */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal to-transparent md:h-24"
          />
        </div>

        <div className="grain relative">
          <div className="container-luxe relative grid gap-10 pb-20 pt-10 md:pb-28 md:pt-12 lg:grid-cols-12 lg:gap-12">
            <h1 className="display text-[clamp(2.9rem,7.4vw,7.25rem)] uppercase lg:col-span-7">
              {title.map((line, i) => (
                <span key={i} className="rise block" style={rise(250 + i * 160)}>
                  {line}
                </span>
              ))}
            </h1>
            <div className="lg:col-span-5 lg:pt-3">
              {subtitle && (
                <p
                  className="rise display text-[clamp(1.5rem,2.4vw,2.1rem)] italic leading-snug text-bronze"
                  style={rise(600)}
                >
                  {subtitle}
                </p>
              )}
              {body && (
                <div className="rise mt-6 max-w-md text-base leading-relaxed text-ivory/70" style={rise(750)}>
                  {body}
                </div>
              )}
              {ctas}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`grain relative isolate flex overflow-hidden bg-charcoal text-ivory ${
        full ? "min-h-[100svh] items-end" : "min-h-[78svh] items-end md:min-h-[86svh]"
      }`}
    >
      <MediaFrame
        src={image.src}
        alt={image.alt}
        brief={image.brief}
        preload
        zoom
        sizes="100vw"
        className="absolute! inset-0 -z-10"
      />
      {/* Legibility veil: darker at the base and left, where the copy sits */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(32,35,33,0.94)_0%,rgba(32,35,33,0.55)_45%,rgba(32,35,33,0.25)_100%)] md:bg-[linear-gradient(100deg,rgba(32,35,33,0.92)_0%,rgba(32,35,33,0.6)_45%,rgba(32,35,33,0.1)_100%)]"
      />

      <div className={`container-luxe relative ${full ? "pb-20 pt-40 md:pb-28" : "pb-16 pt-40 md:pb-24"}`}>
        <div className="max-w-4xl">
          {eyebrow && (
            <div className="rise mb-8 flex items-center gap-4" style={rise(200)}>
              <span className="rule" aria-hidden />
              <p className="label text-bronze">{eyebrow}</p>
            </div>
          )}

          <h1
            className={`display uppercase ${
              full ? "text-[clamp(3.2rem,9.5vw,9rem)]" : "text-[clamp(2.8rem,7vw,6.5rem)]"
            }`}
          >
            {title.map((line, i) => (
              <span key={i} className="rise block" style={rise(350 + i * 160)}>
                {line}
              </span>
            ))}
          </h1>

          {subtitle && (
            <p
              className="rise display mt-8 max-w-2xl text-[clamp(1.4rem,2.4vw,2rem)] italic leading-snug text-ivory/85"
              style={rise(750)}
            >
              {subtitle}
            </p>
          )}

          {body && (
            <div className="rise mt-6 max-w-lg text-base leading-relaxed text-ivory/70" style={rise(900)}>
              {body}
            </div>
          )}

          {ctas}
        </div>

        {full && (
          <div
            aria-hidden
            className="rise absolute bottom-10 right-12 hidden flex-col items-center gap-4 md:flex"
            style={rise(1500)}
          >
            <span className="label text-[0.6rem] text-ivory/50 [writing-mode:vertical-rl]">Scroll</span>
            <span className="drift block h-12 w-px bg-ivory/40" />
          </div>
        )}
      </div>
    </section>
  );
}
