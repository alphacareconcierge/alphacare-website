import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | AlphaCare Concierge Care Management",
  description:
    "Explore AlphaCare’s bespoke healthcare advocacy, care coordination, transitions support, and family communication services.",
  alternates: { canonical: "/services" }
};

const helpItems = [
  {
    title: "Healthcare Advocacy",
    copy: "Helping you organize priorities, prepare meaningful questions, and clarify complex recommendations so your family can make informed, thoughtful decisions with your providers."
  },
  {
    title: "Care Coordination & Continuity",
    copy: "Assisting with follow-up tracking, organizing communication across different clinicians, and helping maintain day-to-day order across your care network."
  },
  {
    title: "Care Transitions Support",
    copy: "Providing an attentive, steady presence when moving from hospital to home or adjusting to new living arrangements, helping your family understand changes and next steps."
  },
  {
    title: "Family & Team Alignment",
    copy: "Facilitating clear, consistent updates so local and long-distance family members share a common understanding of care plans and evolving needs."
  }
];

const detailItems = [
  {
    title: "The Appointment That Moved",
    copy: "Helping track schedule adjustments and transition details so your family stays prepared when dates or providers shift."
  },
  {
    title: "The Forgotten Question",
    copy: "Capturing what matters most ahead of time so important questions are raised and clarified during clinical visits."
  },
  {
    title: "The Post-Visit Instruction",
    copy: "Organizing discharge notes, follow-up recommendations, and next steps into a clear, manageable plan for the family."
  },
  {
    title: "The Sibling Three States Away",
    copy: "Keeping everyone informed and aligned from the same page, regardless of distance or time zones."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid px-6 pb-[3.875rem] pt-[3.25rem] sm:px-12 lg:grid-cols-[45%_55%] lg:px-[6.375rem] lg:pb-[0.625rem] lg:pt-[1.625rem]">
        <div className="pt-[2.25rem]">
          <p className="mb-4 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold">
            How We Can Help
          </p>
          <h1 className="max-w-[34rem] font-serif text-[clamp(2rem,3.2vw,2.6rem)] font-light leading-[1.25] text-navy">
            Care does not stop<br />
            at the appointment.
          </h1>
          <p className="mt-[1.5625rem] max-w-md font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
            A single consultation or hospital discharge often sets off a complex sequence of instructions, follow-ups, and daily adjustments. AlphaCare provides attentive oversight and practical coordination to help families navigate each step with clarity.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:max-w-[26rem]">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <p className="mt-5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold">
            How We Can Help
          </p>
          <div className="mt-[1.1875rem]">
            {helpItems.map((item, index) => (
              <article key={item.title} className={`${index > 0 ? "mt-8 border-t border-divider pt-8" : ""}`}>
                <h2 className="mb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
                  {item.title}
                </h2>
                <p className="font-sans text-[0.9375rem] font-normal leading-[1.7] text-grayblue">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 font-sans text-sm font-normal italic leading-[1.6] text-navy">
            Tailored support shaped around your family&apos;s unique circumstances.
          </p>
        </div>
      </section>

      <section className="grid gap-10 px-6 pb-[3.625rem] pt-2 sm:px-12 lg:grid-cols-[38%_30%_32%] lg:gap-0 lg:px-[6.375rem]">
        <div className="lg:pr-[3.125rem]">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <h2 className="mb-6 mt-[1.125rem] font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold">
            The Details Matter
          </h2>
          <div className="grid gap-x-8 gap-y-[1.25rem] md:grid-cols-2">
            {detailItems.map((item) => (
              <article key={item.title} className="grid grid-cols-[0.5rem_1fr] gap-4">
                <span className="mt-[0.5rem] h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-sans text-[0.75rem] font-semibold uppercase leading-[1.45] tracking-[0.08em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-normal leading-[1.6] text-grayblue">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="border-divider border-t pt-8 lg:border-l lg:border-t-0 lg:px-[2.375rem] lg:pt-0">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <h2 className="mb-6 mt-[1.125rem] font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold">
            Our Role
          </h2>
          <p className="font-sans text-sm font-normal leading-[1.75] text-grayblue">
            AlphaCare works alongside your family and existing care network. We do not replace the medical diagnosis, clinical judgment, or legal advice of your physicians, attorneys, or financial advisors. Our purpose is to provide dedicated coordination, clear communication, and steady advocacy to support you along the way.
          </p>
        </div>
        <div className="border-divider border-t pt-8 text-center lg:border-l lg:border-t-0 lg:pl-[3.5rem] lg:pt-[1.625rem]">
          <span className="mx-auto block h-px w-14 bg-gold" aria-hidden="true" />
          <h2 className="mx-auto mt-[2rem] max-w-[23rem] font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            Tell us what your family is navigating.
          </h2>
          <p className="mb-4 mt-2 font-serif text-[1.125rem] font-normal italic leading-[1.25] text-navy">
            We’ll begin by listening.
          </p>
          <Link
            href="/contact"
            className="type-cta mt-[1.5rem] inline-flex min-h-11 min-w-[14.75rem] items-center justify-center rounded-[0.1875rem] border border-gold bg-navy px-7 py-3.5 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Contact AlphaCare
          </Link>
        </div>
      </section>
    </div>
  );
}
