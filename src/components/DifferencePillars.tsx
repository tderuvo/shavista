import type { ReactNode } from "react";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Pillar = {
  label: string;
  title: string;
  subtitle: string;
  body: ReactNode;
  image: { src: string; alt: string; brief: string };
  /** Development-stage specifics, always shown with their status. */
  details?: { heading: string; items: ReactNode[]; note: string };
  steps?: string[];
};

const pillars: Pillar[] = [
  {
    label: "Formulation",
    title: "Designed With the Skin Barrier in Mind",
    subtitle: "Advanced Formulation. Exceptional Comfort.",
    body: (
      <>
        <p>
          Traditional shaving soaps can be highly alkaline, and some formulations may leave skin
          feeling dry or tight.
        </p>
        <p>
          Shavista is being developed around a near-neutral pH formulation designed to support skin
          comfort throughout the shave. The proposed formulation incorporates skin-conditioning
          ingredients such as Hyaluronic Acid and Allantoin.
        </p>
        <p>
          The goal is a rich, cushioning lather that supports comfortable razor glide and leaves skin
          feeling soft and refreshed.
        </p>
      </>
    ),
    image: {
      src: "/images/placeholders/lather-macro.svg",
      alt: "Close-up of rich, creamy shaving lather.",
      brief: "Lather texture on the brush, close-up",
    },
    details: {
      heading: "Formulation targets",
      items: [
        <>
          Target pH: <strong className="font-medium text-espresso">approximately 6.5–7.5</strong>
        </>,
        <>
          Proposed conditioning ingredients:{" "}
          <strong className="font-medium text-espresso">Hyaluronic Acid, Allantoin</strong>
        </>,
      ],
      note: "Development targets, not final specifications. Subject to formulation and testing.",
    },
  },
  {
    label: "Preparation",
    title: "Simple Warm-Water Activation",
    subtitle: "Rich Lather. Less Preparation.",
    body: (
      <>
        <p>
          Shavista’s single-serve shaving concentrate is designed to simplify traditional lather
          preparation.
        </p>
        <p>
          No traditional soap puck to load. No shared soap container to work from. Just a fresh
          portion prepared for each individual shave.
        </p>
        <p>
          The objective is to make preparation more consistent and convenient while preserving the
          ritual customers enjoy, and the barber’s skill that makes it.
        </p>
      </>
    ),
    steps: [
      "Add the capsule contents to warm water in a scuttle or bowl.",
      "Work with a shaving brush into a rich, luxurious lather.",
      "Apply, and shave the way only you can.",
    ],
    image: {
      src: "/images/placeholders/scuttle-light.svg",
      alt: "A ceramic shaving scuttle topped with fresh lather and a brush, beside a jug of warm water.",
      brief: "Scuttle, warm water, brush and fresh lather",
    },
  },
  {
    label: "Precision & hygiene",
    title: "Single-Serve Precision",
    subtitle: "A Fresh Portion. Every Time.",
    body: (
      <>
        <p>
          Every Shavista capsule is designed to provide a measured, single-use portion of shaving
          concentrate.
        </p>
        <p>
          Prepared fresh for each customer, the system helps reduce repeated handling of shared
          shaving products. A cleaner, more organized approach to the professional shaving station,
          designed for consistency, convenience and professional presentation.
        </p>
        <p>The system is designed to complement proper professional cleaning and sanitation procedures.</p>
      </>
    ),
    image: {
      src: "/images/placeholders/station-light.svg",
      alt: "An organized barber’s station from above: lather bowl, brush, folded towels on an oak tray.",
      brief: "Organized station, ready for the next client",
    },
    details: {
      heading: "Capsule",
      items: [
        <>
          Proposed shell: <strong className="font-medium text-espresso">plant-based HPMC</strong>
        </>,
      ],
      note: "Packaging specifications are still being finalized.",
    },
  },
];

/** "The Shavista Difference": three professional pillars in alternating editorial rows. */
export default function DifferencePillars() {
  return (
    <section id="difference" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="container-luxe">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="The Shavista difference"
            title={[
              "A Better Shave Starts",
              <>
                <em className="accent text-terracotta">Before the Blade.</em>
              </>,
            ]}
          />
          <Reveal delay={150} className="lede text-muted lg:col-span-5">
            <p>
              From formulation to preparation, every detail of Shavista is being developed around
              the needs of professional barbers and their clients.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {pillars.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.label} className="grid items-center gap-10 md:grid-cols-12 md:gap-x-10">
                <Reveal className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
                  <MediaFrame
                    src={p.image.src}
                    alt={p.image.alt}
                    brief={p.image.brief}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="aspect-4/5"
                  />
                </Reveal>
                <Reveal
                  delay={120}
                  className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="accent text-5xl leading-none text-terracotta">0{i + 1}</span>
                    <span className="label text-sage-deep">{p.label}</span>
                  </div>
                  <h3 className="display mt-6 text-[clamp(2rem,3.6vw,3.2rem)]">{p.title}</h3>
                  <p className="mt-3 text-[1.2rem] font-medium tracking-[-0.01em] text-terracotta-deep">
                    {p.subtitle}
                  </p>
                  <div className="lede mt-6 max-w-xl space-y-4 text-muted">{p.body}</div>

                  {p.steps && (
                    <ol className="mt-8 max-w-xl border-t border-espresso/15">
                      {p.steps.map((step, n) => (
                        <li key={step} className="flex gap-4 border-b border-espresso/15 py-3.5">
                          <span className="accent w-6 shrink-0 text-xl leading-snug text-terracotta-deep">
                            {n + 1}
                          </span>
                          <span className="text-espresso">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {p.details && (
                    <div className="mt-8 max-w-xl rounded-xl bg-sage-wash px-6 py-5">
                      <p className="label text-sage-deep">
                        {p.details.heading} <span className="text-muted">· In development</span>
                      </p>
                      <ul className="mt-3 space-y-1.5 text-muted">
                        {p.details.items.map((item, n) => (
                          <li key={n}>{item}</li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm text-muted">{p.details.note}</p>
                    </div>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-20 max-w-2xl text-sm leading-relaxed text-muted">
            Shavista is in development. Formulation and packaging details are targets, not final
            specifications, and descriptions reflect intended benefits, not clinical or
            comparative claims.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
