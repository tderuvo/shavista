import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  /** Short description of the intended final photograph (shown on placeholders only). */
  brief?: string;
  /** Always-visible caption for real images, e.g. "Concept visualization". */
  note?: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  /** Gentle scale-in on load (hero images) */
  settle?: boolean;
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
  note,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload = false,
  settle = false,
  imageClassName = "",
}: MediaFrameProps) {
  const isPlaceholder = src.includes("/placeholders/");
  const caption = isPlaceholder ? `Placeholder${brief ? ` · ${brief}` : ""}` : note;

  return (
    <figure className={`group relative overflow-hidden rounded-media bg-sand ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.02] ${
          settle ? "settle" : ""
        } ${imageClassName}`}
      />
      {caption && (
        <figcaption className="absolute bottom-3 left-3 right-3 flex">
          <span className="inline-flex max-w-full items-center gap-2 truncate rounded-full bg-cream/85 px-3 py-1.5 text-[0.7rem] font-medium text-espresso backdrop-blur-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
            <span className="truncate">{caption}</span>
          </span>
        </figcaption>
      )}
    </figure>
  );
}
