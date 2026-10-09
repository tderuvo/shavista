import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Use an array to break the headline into deliberate lines. */
  title: string | string[];
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "md" | "lg" | "xl";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

const titleSizes = {
  md: "text-[clamp(2.2rem,4.2vw,3.6rem)]",
  lg: "text-[clamp(2.6rem,5.6vw,5rem)]",
  xl: "text-[clamp(3rem,8vw,7.5rem)]",
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  size = "lg",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  const centered = align === "center";
  const onDark = tone === "dark";

  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className={`mb-8 flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
          <span className="rule" aria-hidden />
          <p className={`label ${onDark ? "text-bronze" : "text-bronze-deep"}`}>{eyebrow}</p>
        </div>
      )}
      <Tag className={`display uppercase ${titleSizes[size]} ${onDark ? "text-ivory" : "text-charcoal"}`}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
      {intro && (
        <div
          className={`mt-8 max-w-xl text-base leading-relaxed md:text-lg ${centered ? "mx-auto" : ""} ${
            onDark ? "text-ivory/70" : "text-ink-muted"
          }`}
        >
          {intro}
        </div>
      )}
    </Reveal>
  );
}
