type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[1.05rem]",
  md: "text-[1.35rem]",
  lg: "text-[clamp(2.75rem,9vw,7.5rem)]",
};

/** Typographic wordmark — a placeholder until a final logo is designed. */
export default function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  return (
    <span
      className={`font-display font-medium uppercase leading-none tracking-[var(--tracking-wordmark)] ${sizes[size]} ${className}`}
      // The trailing letter-spacing would offset optical centering
      style={{ marginRight: "calc(var(--tracking-wordmark) * -1)" }}
    >
      Shavista
    </span>
  );
}
