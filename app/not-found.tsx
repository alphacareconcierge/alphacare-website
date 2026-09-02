import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl bg-ivory px-6 py-24 text-center sm:px-8">
      <p className="type-eyebrow text-gold">
        Page not found
      </p>
      <span className="mx-auto mt-4 block h-px w-8 bg-gold" aria-hidden="true" />
      <h1 className="type-hero mt-6 text-[2.75rem] text-navy sm:text-[3.5rem]">
        The page you&apos;re looking for<br />
        <em className="font-serif italic">isn&apos;t here.</em>
      </h1>
      <p className="type-body mt-5 text-grayblue">
        The link may have moved or no longer exists. Let&apos;s get you back to where you need to be.
      </p>
      <Link
        href="/"
        className="type-cta mt-8 inline-flex min-h-11 items-center justify-center rounded-[0.1875rem] border border-gold bg-navy px-7 py-3.5 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        Return Home
      </Link>
    </section>
  );
}
