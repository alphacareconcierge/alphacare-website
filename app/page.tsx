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
          className="object-cover object-right brightness-[0.99] contrast-[0.96] saturate-[0.94]"
          style={{ transform: "scale(2.75)", transformOrigin: "100% 65%" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(250, 247, 242, 0.86) 0%, rgba(250, 247, 242, 0.72) 25%, rgba(250, 247, 242, 0.22) 48%, rgba(250, 247, 242, 0) 72%)"
          }}
        />

        <div className="relative z-10 flex min-h-[37.125rem] w-full flex-col justify-end px-6 pb-12 pt-[8.875rem] sm:px-10 lg:px-[6.75rem]">
          <div className="max-w-[36rem]">
            <div className="mb-5 flex items-center gap-7">
              <span className="h-px w-11 bg-gold" aria-hidden="true" />
              <p className="font-sans text-[0.6875rem] font-light uppercase leading-none tracking-[0.36em] text-navy">
                Exceptional Care. A More Certain Path.
              </p>
            </div>

            <h1 className="font-serif text-[3.875rem] font-normal leading-[0.98] tracking-[-0.03em] text-navy max-[1200px]:text-[3.35rem] max-md:text-[2.85rem]">
              When care becomes<br />
              complicated, it helps<br />
              to have someone<br />
              beside you.
            </h1>

            <p className="mt-5 max-w-[34rem] font-serif text-[1.25rem] font-normal leading-[1.26] text-navy max-md:text-lg">
              AlphaCare works with families to understand what is happening,
              keep important information connected, and navigate decisions
              as needs change.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex h-11 min-w-[14.625rem] items-center justify-center gap-8 bg-navy px-6 font-serif text-[1rem] font-normal leading-none text-ivory transition-colors duration-300 hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Start the Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="absolute bottom-[3.25rem] right-[4.2rem] hidden items-center gap-6 lg:flex">
            <span className="h-[4.25rem] w-px bg-ivory" aria-hidden="true" />
            <p className="font-sans text-[0.75rem] font-semibold uppercase leading-[1.55] tracking-[0.34em] text-ivory">
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
            <p className="font-sans text-[0.6875rem] font-light uppercase leading-none tracking-[0.36em] text-navy">
              Life Doesn&apos;t Come With a Roadmap.
            </p>
          </div>

          <h2 className="max-w-[39rem] font-serif text-[2.85rem] font-normal leading-[1.05] tracking-[-0.03em] text-navy max-[1200px]:text-[2.5rem] max-md:text-[2.15rem]">
            There is a great deal to hold<br className="hidden lg:block" />
            when someone you love needs care.
          </h2>

          <div className="mt-6 max-w-[37rem] space-y-5 font-serif text-[1.25rem] font-normal leading-[1.25] text-navy max-md:text-lg">
            <p>
              Appointments. Decisions. Questions that arise later.<br />
              Information shared with one person but needed by another.<br />
              Changes that seem small until they are not.
            </p>
            <p>
              AlphaCare brings thoughtful attention to the details,<br />
              helping families understand what is happening,<br />
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
