import ButtonLink from "@/components/Button";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80svh] items-center overflow-hidden bg-charcoal text-ivory">
      <div className="container-luxe relative py-40 text-center">
        <p className="label text-bronze">404</p>
        <h1 className="display mt-8 text-[clamp(2.8rem,7vw,6rem)] uppercase">
          A missed <span className="italic text-bronze">pass.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-ivory/70">
          The page you’re looking for isn’t here. Let’s get you back to the chair.
        </p>
        <div className="mt-12">
          <ButtonLink href="/" variant="light">
            Return home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
