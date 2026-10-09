import type { ReactNode } from "react";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

export type Tone = "ivory" | "stone" | "charcoal" | "forest";

export const toneClasses: Record<Tone, string> = {
  ivory: "bg-ivory text-charcoal",
  stone: "bg-ivory-deep text-charcoal",
  charcoal: "bg-charcoal text-ivory",
  forest: "bg-forest text-ivory",
};

export const isDarkTone = (tone: Tone) => tone === "charcoal" || tone === "forest";

type EditorialSectionProps = {
  eyebrow?: string;
  /** Large chapter number, e.g. "01" */
  index?: string;
  title: string[];
  children: ReactNode;
  image: { src: string; alt: string; brief?: string };
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
  tone = "ivory",
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
    <section id={id} className={`relative overflow-hidden py-24 md:py-36 ${toneClasses[tone]}`}>
      <div className="container-luxe grid items-center gap-y-14 md:grid-cols-12 md:gap-x-8 lg:gap-x-10">
        <Reveal className={`md:row-start-1 ${imageCols}`}>
          <MediaFrame
            src={image.src}
            alt={image.alt}
            brief={image.brief}
            className={portrait ? "aspect-[4/5]" : "aspect-[5/4]"}
          />
        </Reveal>

        <div className={`md:row-start-1 ${textCols}`}>
          <Reveal delay={120}>
            {index && (
              <p
                aria-hidden
                className={`display mb-6 text-[clamp(4rem,8vw,7rem)] italic leading-none ${
                  tone === "forest" ? "text-bronze-light" : dark ? "text-bronze" : "text-bronze-deep"
                }`}
              >
                {index}
              </p>
            )}
            {eyebrow && (
              <div className="mb-8 flex items-center gap-4">
                <span className="rule" aria-hidden />
                <p className={`label ${tone === "forest" ? "text-bronze-light" : dark ? "text-bronze" : "text-bronze-deep"}`}>{eyebrow}</p>
              </div>
            )}
            <h2 className="display text-[clamp(2.3rem,4.6vw,4.2rem)] uppercase">
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div
              className={`mt-10 max-w-lg space-y-5 text-base leading-relaxed md:text-[1.0625rem] ${
                dark ? "text-ivory/75" : "text-ink-muted"
              }`}
            >
              {children}
            </div>
            {footer && <div className="mt-12">{footer}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
