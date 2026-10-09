import ButtonLink from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-cream">
      <div className="container-luxe py-40 text-center">
        <p className="label text-terracotta-deep">404</p>
        <h1 className="display mt-6 text-[clamp(2.8rem,7vw,6rem)]">
          This Chair Is <em className="accent text-terracotta">Empty.</em>
        </h1>
        <p className="lede mx-auto mt-6 max-w-md text-muted">
          The page you’re looking for isn’t here. Let’s get you back to the shop.
        </p>
        <div className="mt-10">
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
