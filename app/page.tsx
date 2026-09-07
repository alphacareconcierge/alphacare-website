import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-ivory text-navy">
      <section className="relative min-h-[37.125rem] overflow-hidden bg-ivory [contain:paint]">
        <Image
          src="/hero-coastal-beacon.png"
          alt="Coastal New England lighthouse above rocky shoreline at golden hour"
          fill
          priority
          sizes="100vw"
          className="origin-[82%_58%] scale-[1.18] object-cover object-[76%_center] brightness-[0.99] contrast-[0.96] saturate-[0.94] sm:scale-110 lg:scale-100 lg:object-center"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(247, 243, 236, 0.86) 0%, rgba(247, 243, 236, 0.72) 25%, rgba(247, 243, 236, 0.22) 48%, rgba(247, 243, 236, 0) 72%)"
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-ivory/45 lg:hidden" />

        <div className="relative z-10 flex min-h-[37.125rem] w-full flex-col justify-end px-6 pb-12 pt-[8.875rem] sm:px-10 lg:px-[6.75rem]">
          <div className="w-full max-w-[calc(100vw-3rem)] sm:max-w-[36rem]">
            <div className="mb-5 flex items-center gap-4 lg:gap-7">
              <span className="h-px w-8 bg-gold lg:w-11" aria-hidden="true" />
              <p className="font-sans text-[0.6875rem] font-light uppercase leading-[1.2] tracking-[0.1em] text-navy lg:leading-none lg:tracking-[0.28em]">
                Exceptional Care. A More Certain Path.
              </p>
            </div>

            <h1 className="font-serif text-[2.45rem] font-normal leading-[1.06] tracking-[-0.02em] text-navy sm:text-[3.2rem] lg:text-[3.875rem] lg:leading-[0.98] lg:tracking-[-0.03em] max-[1200px]:lg:text-[3.35rem]">
              <span className="lg:hidden">
                When care becomes complicated, it helps to have someone beside you.
              </span>
              <span className="hidden lg:block">
                When care becomes<br />
                complicated, it helps<br />
                to have someone<br />
                beside you.
              </span>
            </h1>

            <p className="mt-5 w-full max-w-[calc(100vw-3rem)] font-sans text-[1.0625rem] font-light leading-[1.55] text-navy sm:max-w-[34rem] sm:text-[1.125rem] lg:font-normal lg:leading-[1.35]">
              AlphaCare works with families to understand what is happening,{" "}<br className="hidden lg:block" />
              keep important information connected, and navigate decisions{" "}<br className="hidden lg:block" />
              as needs change.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-10 min-w-[12.875rem] items-center justify-center bg-navy px-6 py-3 font-sans text-[0.6875rem] font-medium uppercase leading-none tracking-[0.11em] text-ivory transition-colors duration-300 hover:bg-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Start the Conversation
            </Link>
          </div>

          <div className="absolute bottom-[3.25rem] right-[4.2rem] hidden items-center gap-6 lg:flex">
            <span className="h-[4.25rem] w-px bg-ivory" aria-hidden="true" />
            <p className="font-sans text-[0.75rem] font-semibold uppercase leading-[1.55] tracking-[0.24em] text-ivory">
              Steady<br />
              Through<br />
              What<br />
              Changes
            </p>
          </div>
        </div>
      </section>

      <section className="grid min-h-[26.875rem] border-t border-[#E3DBCF]/70 bg-ivory lg:grid-cols-[48%_35%_17%]">
        <div className="px-6 pb-12 pt-8 sm:px-10 lg:px-0 lg:pb-0 lg:pl-[6.75rem] lg:pr-12">
          <div className="mb-6 flex items-center gap-7">
            <span className="h-px w-11 bg-gold" aria-hidden="true" />
            <p className="font-sans text-[0.6875rem] font-light uppercase leading-none tracking-[0.16em] text-navy lg:tracking-[0.28em]">
              Life Doesn&apos;t Come With a Roadmap.
            </p>
          </div>

          <h2 className="w-full max-w-[calc(100vw-3rem)] font-serif text-[2.85rem] font-normal leading-[1.05] tracking-[-0.03em] text-navy sm:max-w-[39rem] max-[1200px]:text-[2.5rem] max-md:text-[2.15rem]">
            There is a great deal to hold<br className="hidden lg:block" />{" "}
            when someone you love needs care.
          </h2>

          <div className="mt-6 w-full max-w-[calc(100vw-3rem)] space-y-5 font-sans text-[1.0625rem] font-light leading-[1.58] text-navy sm:max-w-[37rem] sm:text-[1.125rem] lg:text-[1.25rem] lg:leading-[1.35]">
            <p>
              Appointments. Decisions. Questions that arise later.{" "}<br className="hidden lg:block" />
              Information shared with one person but needed by another.{" "}<br className="hidden lg:block" />
              Changes that seem small until they are not.
            </p>
            <p>
              AlphaCare brings thoughtful attention to the details,{" "}<br className="hidden lg:block" />
              helping families understand what is happening,{" "}<br className="hidden lg:block" />
              what needs attention, and what comes next.
            </p>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
          <Image
            src="/brand/about page-hero.png"
            alt="White hydrangeas in a ceramic vase beside books in a quiet coastal interior"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover object-[62%_center] brightness-[0.99] contrast-[0.96] saturate-[0.94]"
          />
        </div>

        <aside className="flex items-center bg-ivory px-6 py-12 sm:px-10 lg:px-14">
          <div>
            <span className="mb-7 block h-px w-11 bg-gold" aria-hidden="true" />
            <p className="font-serif text-[1.55rem] font-normal italic leading-[1.22] text-gold">
              Thoughtful<br />
              support for<br />
              what matters<br />
              most.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
