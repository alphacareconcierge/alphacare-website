import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | AlphaCare Concierge Care Management",
  description:
    "Learn about AlphaCare’s philosophy of care, healthcare operations expertise, and our commitment to discretion, judgment, and thoughtful advocacy.",
  alternates: { canonical: "https://alphacareconcierge.com/about" }
};

const values = [
  {
    title: "Listen Without Rushing",
    copy: "Taking the time to understand what matters most to your loved one, what brings comfort, and where your family feels the most strain."
  },
  {
    title: "A Calm, Steady Presence",
    copy: "Healthcare decisions rarely follow a straight line. We provide a grounded perspective beside you, helping you weigh options and move through difficult moments with clarity."
  },
  {
    title: "Attentive Follow-Through",
    copy: "From organizing discharge notes to tracking shifting appointments, we handle the administrative friction so you can focus entirely on being family."
  },
  {
    title: "Dignity & Advocacy",
    copy: "Keeping your loved one’s personal values at the center of every conversation—honoring their autonomy, safeguarding their privacy, and ensuring their wishes lead the way."
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
          <h1 className="mt-[2.3125rem] max-w-2xl font-serif text-4xl font-normal leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Care may involve many people.<br />
            <span className="font-serif italic font-normal">Families still experience all of it.</span>
          </h1>
          <span className="mt-[2.125rem] block h-px w-10 bg-gold/60" aria-hidden="true" />
          <p className="type-body mt-[2rem] max-w-xl text-grayblue">
            Complex care rarely breaks down in the exam room—it fractures in the quiet spaces between appointments, providers, and family members. Built on years of direct clinical experience, AlphaCare provides the steady coordination and attentive oversight families need to navigate each step with clarity.
          </p>
        </div>
        <div className="px-6 pb-16 sm:px-12 lg:px-[4.1875rem] lg:pb-0 lg:pt-[4.375rem]">
          <div className="relative aspect-[4/3] min-h-[24rem] overflow-hidden rounded-sm border border-[#E3DBCF]/70 lg:aspect-auto lg:h-[31.25rem] lg:max-h-[31.25rem]">
            <Image
              src="/about-hero.png"
              alt="White hydrangeas in a ceramic vase beside books and a brass dish"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center brightness-[0.98] contrast-[0.96] saturate-[0.92]"
            />
            <div className="pointer-events-none absolute inset-0 bg-ivory/10" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="px-6 py-14 text-center sm:px-12 lg:px-[4.3125rem] lg:py-16">
        <h2 className="mx-auto max-w-3xl font-serif text-[1.375rem] font-light italic leading-[1.35] text-navy sm:text-[1.625rem]">
          When someone you love needs more care, you shouldn&apos;t have to carry every decision alone.
        </h2>
        <span className="mx-auto my-4 block h-px w-11 bg-gold" aria-hidden="true" />
        <p className="type-body mx-auto mt-3 max-w-2xl">
          AlphaCare brings clarity, coordination, and a steady presence when families need it most.
        </p>
      </section>

      <section className="grid gap-10 px-6 pb-20 sm:px-12 lg:grid-cols-[42%_58%] lg:gap-16 lg:px-[4.3125rem]">
        <div>
          <p className="type-eyebrow">
            What Guides Us
          </p>
          <span className="mt-[1.1875rem] block h-px w-8 bg-gold" aria-hidden="true" />
          <h2 className="type-section mt-8 max-w-[28rem] text-[2rem] font-normal leading-[1.25] text-navy sm:text-[2.5rem]">
            How we work beside your family <em className="font-serif italic">matters just as much</em> as the logistics we manage.
          </h2>
        </div>
        <div>
          {values.map((value) => (
            <article key={value.title} className="mb-6 border-b border-[#E3DBCF]/50 pb-6 last:mb-0 last:border-b-0 last:pb-0">
              <h3 className="font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
                {value.title}
              </h3>
              <p className="type-body-sm mt-1.5 max-w-md">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
