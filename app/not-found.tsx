import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
        Page not found
      </p>
      <h1 className="mt-5 font-serif text-5xl font-medium text-navy">
        This page is unavailable.
      </h1>
      <p className="mt-5 text-grayblue">
        Return to AlphaCare for healthcare advocacy and care coordination support.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex border border-gold bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-navy"
      >
        Return Home
      </Link>
    </section>
  );
}
