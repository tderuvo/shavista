/* Fine-line icon set. 48×48, 1px strokes, inherits currentColor. */

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** 01 Open — a vessel with its lid lifted */
export function IconOpen({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 26h24v10a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V26Z" />
      <path d="M14 18.5 34.5 13" />
      <path d="M15 18c-.8-2.6.4-4.3 3-5l12-3.2c2.6-.7 4.4.2 5 2.8" />
      <path d="M24 31v5M21 33.5h6" opacity=".6" />
    </svg>
  );
}

/** 02 Create — brush over a bowl with rising lather */
export function IconCreate({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 30h32a16 12 0 0 1-32 0Z" />
      <path d="M15 30c0-3 2.5-5 5-4.5 1-2.5 5-3 7-1 2.5-1 5.5 1 5.5 4.5" />
      <path d="M27 21 33 6" />
      <path d="M31.6 9.5 35 4.5l3 1.2-1.2 5.8" />
      <path d="M17 44h14" opacity=".6" />
    </svg>
  );
}

/** 03 Elevate — straight razor beneath a rising mark */
export function IconElevate({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 34h24l6-4H10a4 4 0 0 0-4 4Z" />
      <path d="M36 30l6-2v4l-6 2" />
      <path d="M24 22V6M18 12l6-6 6 6" />
      <path d="M14 40h20" opacity=".6" />
    </svg>
  );
}

/** Distinction — faceted diamond */
export function IconDistinction({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 10h20l8 10-18 20L6 20l8-10Z" />
      <path d="M6 20h36M18 10l-4 10 10 20 10-20-4-10M24 10v10" opacity=".7" />
    </svg>
  );
}

/** Experience — concentric ritual circles */
export function IconExperience({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="10" opacity=".7" />
      <circle cx="24" cy="24" r="3" />
      <path d="M24 3v4M24 41v4M3 24h4M41 24h4" opacity=".6" />
    </svg>
  );
}

/** Opportunity — ascending steps with a horizon */
export function IconOpportunity({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 40h36" />
      <path d="M10 40V32h8v-8h8v-8h8v-6" />
      <path d="M30 10h4v4" opacity=".7" />
      <path d="M38 28v12" opacity=".5" />
    </svg>
  );
}

/** Fragrance — a stoppered flacon */
export function IconFragrance({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 22h20v16a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V22Z" />
      <path d="M20 22v-5h8v5M18 17h12M21 12h6v5h-6z" />
      <path d="M19 30c3-2 7 2 10 0" opacity=".6" />
    </svg>
  );
}

/** Training — an open book */
export function IconTraining({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 13c-4-3-10-4-16-3v26c6-1 12 0 16 3 4-3 10-4 16-3V10c-6-1-12 0-16 3Z" />
      <path d="M24 13v26" />
      <path d="M12 17c3-.3 6 .2 8 1.2M12 23c3-.3 6 .2 8 1.2M28 18.2c2-1 5-1.5 8-1.2" opacity=".6" />
    </svg>
  );
}

/** Supply — stacked parcels */
export function IconSupply({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 26h16v14H8zM24 26h16v14H24zM16 12h16v14H16z" />
      <path d="M14 26v4M32 26v4M22 12v4" opacity=".6" />
    </svg>
  );
}

/** Kit — a case with a handle */
export function IconKit({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="16" width="36" height="24" rx="1" />
      <path d="M18 16v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <path d="M6 26h36M22 26v3h4v-3" opacity=".7" />
    </svg>
  );
}

/** Mastery — a laurel-like seal */
export function IconSeal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="24" cy="20" r="12" />
      <circle cx="24" cy="20" r="8" opacity=".6" />
      <path d="M17 30l-4 12 6-3 3 5 2-11M31 30l4 12-6-3-3 5-2-11" />
    </svg>
  );
}
