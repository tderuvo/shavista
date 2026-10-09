import type { ReactNode } from "react";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

export type Feature = {
  title: string;
  body: ReactNode;
  number?: string;
  icon?: ReactNode;
  /** Large photograph above the text — for image-led rows */
  image?: { src: string; alt: string; brief?: string; position?: string };
  /** Small status tag, e.g. "Planned" */
  tag?: string;
};

type FeatureGridProps = {
  items: Feature[];
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  className?: string;
};

const cols = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/**
 * Text features sit in hairline-divided columns (no cards).
 * When items carry images, the grid becomes an open, image-led row.
 */
export default function FeatureGrid({ items, tone = "light", columns = 3, className = "" }: FeatureGridProps) {
  const dark = tone === "dark";
  const imageLed = items.some((item) => item.image);
  const line = dark ? "border-cream/20" : "border-espresso/15";
  const accent = dark ? "text-terracotta-light" : "text-terracotta-deep";
  const bodyColor = dark ? "text-cream/75" : "text-muted";

  if (imageLed) {
    return (
      <div className={`grid gap-12 md:gap-8 ${cols[columns]} ${className}`}>
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            {item.image && (
              <MediaFrame
                src={item.image.src}
                alt={item.image.alt}
                brief={item.image.brief}
                imageClassName={item.image.position}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-4/5"
              />
            )}
            <div className="mt-6">
              {item.tag && <p className={`label mb-3 ${accent}`}>{item.tag}</p>}
              <h3 className="display text-[1.75rem]">{item.title}</h3>
              <div className={`mt-2 max-w-sm leading-relaxed ${bodyColor}`}>{item.body}</div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid border-t ${line} ${cols[columns]} ${className}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 120}
          className={`group relative border-b ${line} py-10 md:px-8 md:py-12 md:first:pl-0 md:not-first:border-l ${
            columns === 4 ? "lg:px-7" : ""
          }`}
        >
          {/* Accent hairline that draws across on hover */}
          <span
            aria-hidden
            className="absolute -top-px left-0 h-px w-0 bg-terracotta transition-all duration-700 ease-luxe group-hover:w-full"
          />
          <div className="flex items-start justify-between gap-6">
            {item.number && (
              <span className={`accent text-5xl leading-none ${dark ? "text-terracotta-light" : "text-terracotta-deep"}`}>
                {item.number}
              </span>
            )}
            {item.icon && (
              <span
                className={`block h-11 w-11 shrink-0 transition-transform duration-700 ease-luxe group-hover:-translate-y-1 ${
                  dark ? "text-sage-light" : "text-sage-deep"
                }`}
              >
                {item.icon}
              </span>
            )}
          </div>
          <div className={item.number || item.icon ? "mt-8" : ""}>
            {item.tag && <p className={`label mb-3 ${accent}`}>{item.tag}</p>}
            <h3 className="display text-[1.7rem] leading-tight">{item.title}</h3>
            <div className={`mt-3 max-w-sm leading-relaxed ${bodyColor}`}>{item.body}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
