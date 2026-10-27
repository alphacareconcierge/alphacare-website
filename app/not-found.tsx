import Link from "next/link";

export default function NotFound() {
  return (
    <section className="ac-shell ac-section bg-ivory text-center">
      <p className="type-eyebrow text-gold">
        Page not found
      </p>
      <span className="mx-auto mt-4 block h-px w-8 bg-gold" aria-hidden="true" />
      <h1 className="type-hero ac-eyebrow-gap">
        The page you&apos;re looking for{" "}
        <em className="font-serif italic">isn&apos;t here.</em>
      </h1>
      <p className="type-body ac-copy-gap mx-auto">
        The link may have moved or no longer exists. Let&apos;s get you back to where you need to be.
      </p>
      <Link
        href="/"
        className="ac-button ac-cta-gap"
      >
        Return Home
      </Link>
    </section>
  );
}
