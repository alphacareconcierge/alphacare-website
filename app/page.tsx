import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid overflow-hidden border-b border-gold/45 lg:h-[34rem] lg:grid-cols-[45.45%_54.55%] min-[1400px]:h-[35.75rem]">
        <div className="px-6 py-16 sm:px-12 lg:px-0 lg:py-0">
          <div className="lg:ml-[4.1875rem] lg:pt-16 min-[1400px]:pt-[5.25rem]">
            <p className="type-eyebrow max-w-[20rem] sm:max-w-none">
              Greater Boston Concierge Care Management
            </p>
            <span className="mt-[1.625rem] block h-px w-[2.8125rem] bg-gold" aria-hidden="true" />

            <h1 className="type-hero mt-[1.25rem] max-w-[21rem] text-[2.375rem] sm:max-w-[39.25rem] lg:text-[2.375rem] min-[1400px]:text-[2.6875rem]">
              <span className="block">When care becomes</span>
              <span className="block">complicated,</span>
              <em className="block font-serif italic">
                it helps to have someone beside you.
              </em>
            </h1>

            <span className="mt-[1.8125rem] block h-px w-[2.8125rem] bg-gold" aria-hidden="true" />

            <p className="type-body mt-[1.5625rem] max-w-[21rem] text-navy sm:max-w-[31.5rem]">
              When health needs evolve, keeping track of recommendations, appointments, and next steps can quickly become overwhelming. AlphaCare brings clarity and dedicated oversight to the process—helping families stay informed, aligned, and confident in every decision.
            </p>

            <Link
              href="/services"
              className="type-cta mt-5 inline-flex h-[3.5rem] items-center justify-center gap-5 rounded-[0.625rem] bg-navy px-[1.375rem] text-gold transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:min-w-[18.375rem] min-[1400px]:mt-[2.1875rem]"
            >
              Discover How We Help
              <ArrowRight size={22} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-6 mb-8 aspect-[4/3] min-h-0 overflow-hidden rounded-[0.375rem] sm:mx-12 lg:m-0 lg:aspect-auto lg:min-h-0 lg:rounded-none">
          <Image
            src="/brand/alphacare-lighthouse-hero.jpg"
            alt="Lighthouse and coastal home overlooking the water"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-b border-divider px-6 py-20 text-center sm:px-12 sm:py-24">
        <p className="mx-auto max-w-2xl font-serif text-[1.625rem] font-light italic leading-[1.3] text-navy sm:text-[1.875rem]">
          Good care management is quiet work—bringing order to complexity so your family can simply focus on what matters most.
        </p>
        <span className="mx-auto mt-6 block h-px w-8 bg-gold" aria-hidden="true" />
      </section>

      <section className="px-6 py-16 text-center sm:px-12 sm:py-20">
        <h2 className="font-serif text-[1.5rem] font-normal leading-[1.25] text-navy sm:text-[1.75rem]">
          A thoughtful partner in navigating care.
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-sans text-[0.9375rem] font-normal leading-[1.7] text-grayblue">
          Whether you are coordinating care from a distance or managing an unexpected transition, we begin by listening to what your family is experiencing.
        </p>
        <Link
          href="/contact"
          className="type-cta mt-8 inline-flex min-h-11 items-center justify-center rounded-[0.25rem] bg-navy px-7 py-3 text-gold transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Start the Conversation
        </Link>
      </section>
    </div>
  );
}
