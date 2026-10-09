import type { ReactNode } from "react";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { Eyebrow } from "./SectionHeading";

export type Tone = "cream" | "sand" | "sage" | "espresso" | "charcoal";

export const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-espresso",
  sand: "bg-sand text-espresso",
  sage: "bg-sage-wash text-espresso",
  espresso: "bg-espresso text-cream",
  charcoal: "bg-charcoal text-cream",
};

export const isDarkTone = (tone: Tone) => tone === "espresso" || tone === "charcoal";

type EditorialSectionProps = {
  eyebrow?: string;
  /** Large chapter number, e.g. "01" */
  index?: string;
  /** One entry per line; wrap words in <em className="accent"> for the serif accent. */
  title: ReactNode[];
  children: ReactNode;
  image: { src: string; alt: string; brief?: string; note?: string; position?: string };
  reverse?: boolean;
  tone?: Tone;
  /** Tall portrait or wider landscape image */
  imageShape?: "portrait" | "landscape";
  id?: string;
  footer?: ReactNode;
};

/** Split editorial layout: photograph on one side, large type and copy on the other. */
export default function EditorialSection({
  eyebrow,
  index,
  title,
  children,
  image,
  reverse = false,
  tone = "cream",
  imageShape = "portrait",
  id,
  footer,
}: EditorialSectionProps) {
  const dark = isDarkTone(tone);
  const portrait = imageShape === "portrait";

  // Explicit 12-column placement; portrait images take 5 columns on large screens
  const imageCols = reverse
    ? portrait
      ? "md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
      : "md:col-span-6 md:col-start-7"
    : portrait
      ? "md:col-span-6 md:col-start-1 lg:col-span-5"
      : "md:col-span-6 md:col-start-1";
  const textCols = reverse
    ? "md:col-span-6 md:col-start-1 lg:col-span-6"
    : portrait
      ? "md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7"
      : "md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8";

  return (
    <section id={id} className={`relative overflow-hidden py-24 md:py-32 ${toneClasses[tone]}`}>
      <div className="container-luxe grid items-center gap-y-12 md:grid-cols-12 md:gap-x-8 lg:gap-x-10">
        <Reveal className={`md:row-start-1 ${imageCols}`}>
          <MediaFrame
            src={image.src}
            alt={image.alt}
            brief={image.brief}
            note={image.note}
            imageClassName={image.position}
            className={portrait ? "aspect-4/5" : "aspect-5/4"}
          />
        </Reveal>

        <div className={`md:row-start-1 ${textCols}`}>
          <Reveal delay={120}>
            {index && (
              <p
                aria-hidden
                className={`accent mb-4 text-[clamp(3.5rem,7vw,5.5rem)] leading-none ${
                  dark ? "text-terracotta-light" : tone === "cream" ? "text-terracotta" : "text-terracotta-deep"
                }`}
              >
                {index}
              </p>
            )}
            {eyebrow && <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow>}
            <h2 className="display text-[clamp(2.3rem,4.4vw,4rem)]">
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className={`lede mt-8 max-w-lg space-y-5 ${dark ? "text-cream/75" : "text-muted"}`}>
              {children}
            </div>
            {footer && <div className="mt-10">{footer}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
