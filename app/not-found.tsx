import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="type-eyebrow text-gold">
        Page not found
      </p>
      <h1 className="type-hero mt-5 text-navy">
        This page is unavailable.
      </h1>
      <p className="type-body mt-5 text-grayblue">
        Return to AlphaCare for healthcare advocacy and care coordination support.
      </p>
      <Link
        href="/"
        className="type-cta mt-8 inline-flex border border-gold bg-gold px-6 py-3 text-navy"
      >
        Return Home
      </Link>
    </section>
  );
}
