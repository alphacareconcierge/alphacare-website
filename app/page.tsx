import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid overflow-hidden border-b border-gold/45 lg:h-[34rem] lg:grid-cols-[45.45%_54.55%] min-[1400px]:h-[35.75rem]">
        <div className="px-6 py-16 sm:px-12 lg:px-0 lg:py-0">
          <div className="lg:ml-[4.1875rem] lg:pt-16 min-[1400px]:pt-[5.25rem]">
            <p className="text-[1rem] font-medium uppercase tracking-[0.08em] text-[#B56F0B]">
              Greater Boston Concierge Care Management
            </p>
            <span className="mt-[1.625rem] block h-px w-[2.8125rem] bg-[#B56F0B]" aria-hidden="true" />

            <h1 className="mt-[1.25rem] max-w-[21rem] font-serif text-[2.375rem] font-medium leading-[1.24] tracking-[-0.01em] text-navy sm:max-w-[39.25rem] lg:text-[2.375rem] min-[1400px]:text-[2.6875rem]">
              <span className="block">When care becomes complicated,</span>
              <em className="block font-serif font-medium italic">
                it helps to have someone beside you.
              </em>
            </h1>

            <span className="mt-[1.8125rem] block h-px w-[2.8125rem] bg-[#B56F0B]" aria-hidden="true" />

            <p className="mt-[1.5625rem] max-w-[21rem] text-[1.0625rem] font-normal leading-[1.68] tracking-[0.005em] text-navy sm:max-w-[31.5rem]">
              Alpha Care works with families to understand what is happening, keep important information connected, and navigate decisions as needs change. We provide advocacy and coordination so you can spend less time managing care—and more time being family.
            </p>

            <Link
              href="/services"
              className="mt-5 inline-flex h-[3.5rem] items-center justify-center gap-5 rounded-[0.625rem] bg-navy px-[1.375rem] text-[0.875rem] font-semibold uppercase tracking-[0.17em] text-gold transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:min-w-[18.375rem] min-[1400px]:mt-[2.1875rem]"
            >
              Discover How We Help
              <ArrowRight size={22} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-0">
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

      <section className="border-b border-gold/35 px-6 pb-[1.1875rem] pt-[1.1875rem] text-center">
        <h2 className="font-serif text-[1.75rem] font-medium leading-tight text-[#B56F0B]">
          Care rarely happens in one place.
        </h2>
        <span className="mx-auto mt-2 block h-px w-10 bg-[#B56F0B]" aria-hidden="true" />
        <p className="mx-auto mt-[0.875rem] max-w-[48.875rem] text-[0.96875rem] font-normal leading-[1.52] tracking-[0.01em] text-navy">
          A hospital discharge may lead to new medications, follow-up appointments, questions for several clinicians, changes at home, and decisions that continue long after everyone has left the hospital. Alpha Care helps keep important information connected, follows what still needs attention, and helps families understand what has changed and what comes next.
        </p>
      </section>

      <section className="px-6 pb-[1.75rem] pt-[1.1875rem] text-center">
        <h2 className="font-serif text-[1.75rem] font-medium leading-tight text-[#B56F0B]">
          Good care management is often quiet work.
        </h2>
        <span className="mx-auto mt-2 block h-px w-10 bg-[#B56F0B]" aria-hidden="true" />
        <p className="mx-auto mt-[0.875rem] max-w-[47.5rem] text-[0.96875rem] font-normal leading-[1.52] tracking-[0.01em] text-navy">
          It is noticing what changed, making sure the right people have the right information, following what still needs attention, and helping families make informed decisions as circumstances evolve.
        </p>
      </section>
    </div>
  );
}
