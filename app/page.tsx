import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid overflow-hidden border-b border-gold/45 lg:h-[34rem] lg:grid-cols-[45.45%_54.55%] min-[1400px]:h-[35.75rem]">
        <div className="px-6 py-16 sm:px-12 lg:px-0 lg:py-0">
          <div className="lg:ml-[4.1875rem] lg:pt-16 min-[1400px]:pt-[5.25rem]">
            <p className="max-w-[20rem] font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold sm:max-w-none">
              PRIVATE CONCIERGE CARE MANAGEMENT
            </p>
            <span className="mt-[1.625rem] block h-px w-[2.8125rem] bg-gold" aria-hidden="true" />

            <h1 className="type-hero mt-[1.25rem] max-w-[21rem] text-[clamp(2rem,3.2vw,2.6rem)] font-light sm:max-w-[39.25rem]">
              <span className="block">When care becomes complicated,</span>
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
              className="type-cta mt-5 inline-flex min-h-11 items-center justify-center gap-5 rounded-[0.1875rem] border border-gold bg-navy px-7 py-3.5 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:min-w-[18.375rem] min-[1400px]:mt-[2.1875rem]"
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

      <section className="border-b border-divider px-6 py-10 text-center sm:px-12 md:py-12">
        <p className="mx-auto max-w-xl font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light italic leading-[1.45] text-navy">
          Good care management is quiet work—bringing order to complexity so your family can simply focus on what matters most.
        </p>
        <span className="mx-auto mb-0 mt-4 block h-px w-8 bg-gold" aria-hidden="true" />
      </section>

      <section className="px-6 pb-14 pt-8 text-center sm:px-12 md:pb-16 md:pt-10">
        <h2 className="mb-3 font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] font-normal leading-[1.25] text-navy">
          A thoughtful partner in navigating care.
        </h2>
        <p className="mx-auto mb-6 max-w-md font-sans text-sm font-normal leading-[1.6] text-grayblue md:text-base">
          Whether you are coordinating care from a distance or managing an unexpected transition, we begin by listening to what your family is experiencing.
        </p>
        <Link
          href="/contact"
          className="type-cta mt-2 inline-flex min-h-11 items-center justify-center rounded-[0.1875rem] border border-gold bg-navy px-7 py-3.5 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Start the Conversation
        </Link>
      </section>
    </div>
  );
}
