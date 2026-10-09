import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Use an array to break the headline into deliberate lines. */
  title: ReactNode | ReactNode[];
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "md" | "lg" | "xl";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

const titleSizes = {
  md: "text-[clamp(2.1rem,4vw,3.4rem)]",
  lg: "text-[clamp(2.5rem,5.4vw,4.75rem)]",
  xl: "text-[clamp(3rem,8vw,7rem)]",
};

export function Eyebrow({ children, tone = "light", center = false }: { children: ReactNode; tone?: "light" | "dark"; center?: boolean }) {
  return (
    <div className={`mb-6 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="rule" aria-hidden />
      <p className={`label ${tone === "dark" ? "text-terracotta-light" : "text-terracotta-deep"}`}>{children}</p>
    </div>
  );
}

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
        <Eyebrow tone={tone} center={centered}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag className={`display ${titleSizes[size]} ${onDark ? "text-cream" : "text-espresso"}`}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
      {intro && (
        <div className={`lede mt-7 max-w-xl ${centered ? "mx-auto" : ""} ${onDark ? "text-cream/75" : "text-muted"}`}>
          {intro}
        </div>
      )}
    </Reveal>
  );
}
