import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="relative flex min-h-[40rem] w-full items-center overflow-hidden bg-[#FAF7F2] sm:min-h-[43.75rem] lg:min-h-[47.5rem]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/brand/alphacare-lighthouse-hero.jpg"
            alt="Tranquil coastal shoreline with foreground beach roses and distant historic lighthouse on the horizon"
            fill
            priority
            sizes="100vw"
            className="mask-gradient-left object-cover object-[78%_center] brightness-[0.98] contrast-[0.96] sm:object-[75%_center] lg:object-[78%_center]"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(250, 247, 242, 0.94) 0%, rgba(250, 247, 242, 0.85) 30%, rgba(250, 247, 242, 0.45) 55%, transparent 80%)"
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#FAF7F2]/40 lg:hidden" />

        <div className="relative z-10 mx-auto flex min-h-[36.25rem] w-full max-w-7xl flex-col justify-between px-6 py-20 sm:min-h-[40rem] sm:px-10 lg:min-h-[43.75rem] lg:px-16 lg:py-24">
          <div className="max-w-xl space-y-6 pt-4 sm:pt-8 lg:max-w-2xl">
            <div className="space-y-3">
              <p className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold sm:text-xs">
                Private Concierge Care Management
              </p>
              <div className="h-px w-12 bg-gold/60" aria-hidden="true" />
            </div>

            <h1 className="font-serif text-4xl font-light leading-[1.12] tracking-tight text-[#1C2430] sm:text-5xl lg:text-[3.6rem]">
              When care becomes complicated,<br />
              <span className="font-normal italic">it helps to have someone beside you.</span>
            </h1>

            <p className="max-w-lg pt-1 font-sans text-base font-light leading-relaxed text-[#4A5568] sm:text-lg">
              AlphaCare works with families to understand what is happening, keep important information connected, and navigate decisions as needs change.
            </p>

            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-sm bg-[#0F1E36] px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#FAF7F2] shadow-soft transition-colors duration-200 hover:bg-[#1A2E4C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Start the Conversation
                <span className="text-sm" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-12 sm:pt-16">
            <div className="h-5 w-[1.5px] bg-gold" aria-hidden="true" />
            <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.26em] text-[#5A6472] sm:text-[0.6875rem]">
              Clarity &nbsp;/&nbsp; Coordination &nbsp;/&nbsp; Peace of Mind
            </span>
          </div>
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
        <p className="mx-auto mb-6 max-w-md font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
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
