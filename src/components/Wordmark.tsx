type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[0.95rem]",
  md: "text-[1.15rem]",
  lg: "text-[clamp(2.5rem,8vw,6rem)]",
};

/** Typographic wordmark — a placeholder until a final logo is designed. */
export default function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  return (
    <span
      className={`font-sans font-semibold uppercase leading-none tracking-[0.24em] ${sizes[size]} ${className}`}
      // Offset the trailing letter-spacing so the mark centres optically
      style={{ marginRight: "-0.24em" }}
    >
      Shavista
    </span>
  );
}
