import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Alpha Care",
  description:
    "Learn about Alpha Care Concierge Care Management and the steady advocacy, coordination, and judgment that guide families through complicated care.",
  alternates: { canonical: "/about" }
};

const values = [
  {
    title: "Listen Carefully",
    copy: "We take time to understand what is happening, what matters most, and what may be easy to miss."
  },
  {
    title: "Use Good Judgment",
    copy: "We consider the circumstances carefully before recommending a path forward."
  },
  {
    title: "Look Ahead",
    copy: "We pay attention to what may need follow-up so families can be better prepared."
  },
  {
    title: "Handle With Care",
    copy: "We approach every family’s circumstances with discretion, respect, and responsibility."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid border-b border-divider lg:min-h-[36.9375rem] lg:grid-cols-[43.25%_56.75%]">
        <div className="px-6 py-16 sm:px-12 lg:px-[4.1875rem] lg:pb-0 lg:pt-[4.375rem]">
          <p className="type-eyebrow">
            About Alpha Care
          </p>
          <span className="mt-5 block h-px w-8 bg-gold" aria-hidden="true" />
          <h1 className="type-hero mt-[2.3125rem] max-w-[25rem] text-[2.75rem] sm:text-[3.5rem] lg:text-[2.625rem] min-[1400px]:text-[3.25rem]">
            <span className="block">Care may involve</span>
            <span className="block">many people.</span>
            <em className="block font-serif text-[2.35rem] italic sm:text-[3rem] lg:text-[2.1875rem] min-[1400px]:text-[2.625rem]">
              Families still experience all of it.
            </em>
          </h1>
          <span className="mt-[2.125rem] block h-px w-8 bg-gold" aria-hidden="true" />
          <p className="type-body mt-[2rem] max-w-[22.5rem] text-navy">
            Alpha Care grew from experience in nursing and healthcare operations, alongside the personal experience of navigating complicated care within a family. We saw how easily the work of keeping up with different people, information, and next steps can become part of what a family carries.
          </p>
        </div>
        <div className="relative min-h-[24rem] lg:min-h-0">
          <Image
            src="/brand/alphacare-about-still-life.jpg"
            alt="White hydrangeas in a ceramic vase beside books and a brass dish"
            fill
            priority
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-14 text-center sm:px-12 md:text-left lg:px-[4.3125rem] lg:py-16">
        <h2 className="type-section mx-auto max-w-[54rem] text-2xl leading-[1.25] text-gold sm:text-[2.25rem] md:mx-0 lg:text-[2.75rem]">
          When someone you love needs more care,<br className="hidden md:block" />
          you shouldn’t have to carry every decision alone.
        </h2>
        <span className="mx-auto my-4 block h-px w-11 bg-gold md:mx-0" aria-hidden="true" />
        <p className="type-body mx-auto max-w-[52rem] text-navy md:mx-0">
          Alpha Care brings clarity, coordination, and a steady presence when families need it most.
        </p>
      </section>

      <section className="px-6 pb-20 sm:px-12 lg:px-[4.3125rem]">
        <p className="type-eyebrow">
          What Guides Us
        </p>
        <span className="mt-[1.1875rem] block h-px w-8 bg-gold" aria-hidden="true" />
        <div className="mt-8 grid max-w-[58rem] gap-x-16 gap-y-6 md:grid-cols-2 md:gap-y-10">
          {values.map((value) => (
            <article key={value.title}>
              <h3 className="type-card text-[2rem]">
                {value.title}
              </h3>
              <p className="type-body mt-2 max-w-[17.75rem] text-navy">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
