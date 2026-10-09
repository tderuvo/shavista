import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  /** Short description of the intended final photograph (shown on placeholders only). */
  brief?: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  zoom?: boolean;
  /** Extra classes for the <img>, e.g. responsive object-position */
  imageClassName?: string;
};

/**
 * Image frame used for every photograph on the site.
 * Files under /images/placeholders/ are labelled automatically —
 * drop a real photo in at a new path and the label disappears.
 */
export default function MediaFrame({
  src,
  alt,
  brief,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload = false,
  zoom = false,
  imageClassName = "",
}: MediaFrameProps) {
  const isPlaceholder = src.includes("/placeholders/");

  return (
    <figure className={`group relative overflow-hidden bg-charcoal ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover transition-transform duration-[2s] ease-[var(--ease-luxe)] group-hover:scale-[1.03] ${
          zoom ? "slow-zoom" : ""
        } ${imageClassName}`}
      />
      {isPlaceholder && (
        <figcaption className="label absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[0.6rem] tracking-[0.2em] text-ivory/55">
          <span className="h-1 w-1 shrink-0 rounded-full bg-bronze" aria-hidden />
          <span className="truncate">Placeholder{brief ? ` · ${brief}` : ""}</span>
        </figcaption>
      )}
    </figure>
  );
}
