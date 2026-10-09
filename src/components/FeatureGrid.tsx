import type { ReactNode } from "react";
import Reveal from "./Reveal";

export type Feature = {
  title: string;
  body: ReactNode;
  number?: string;
  icon?: ReactNode;
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

/** Hairline-divided columns — no cards, no shadows. */
export default function FeatureGrid({ items, tone = "light", columns = 3, className = "" }: FeatureGridProps) {
  const dark = tone === "dark";
  const line = dark ? "border-ivory/15" : "border-charcoal/15";

  return (
    <div className={`grid border-t ${line} ${cols[columns]} ${className}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 120}
          className={`group relative border-b ${line} py-12 md:px-10 md:py-14 md:first:pl-0 md:[&:not(:first-child)]:border-l ${
            columns === 4 ? "lg:px-8" : ""
          }`}
        >
          {/* Bronze hairline that draws across on hover */}
          <span
            aria-hidden
            className="absolute left-0 top-[-1px] h-px w-0 bg-bronze transition-all duration-700 ease-[var(--ease-luxe)] group-hover:w-full"
          />
          <div className="flex items-start justify-between gap-6">
            {item.number && (
              <span className={`display text-6xl italic leading-none ${dark ? "text-bronze" : "text-bronze-deep"}`}>
                {item.number}
              </span>
            )}
            {item.icon && (
              <span
                className={`block h-12 w-12 shrink-0 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:-translate-y-1 ${
                  dark ? "text-bronze" : "text-bronze-deep"
                }`}
              >
                {item.icon}
              </span>
            )}
          </div>
          <div className={item.number || item.icon ? "mt-10" : ""}>
            {item.tag && (
              <p className={`label mb-4 text-[0.6rem] ${dark ? "text-bronze" : "text-bronze-deep"}`}>{item.tag}</p>
            )}
            <h3 className="display text-[2rem] uppercase leading-tight">{item.title}</h3>
            <div className={`mt-4 max-w-sm leading-relaxed ${dark ? "text-ivory/70" : "text-ink-muted"}`}>
              {item.body}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
