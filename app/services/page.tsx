import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Alpha Care helps families with healthcare advocacy, care coordination, care transitions, and family communication in the Greater Boston Area.",
  alternates: { canonical: "/services" }
};

const helpItems = [
  {
    title: "Healthcare Advocacy",
    copy: "Helping your family organize the questions and concerns that need to be raised, and recognize what still needs clarification as care moves forward."
  },
  {
    title: "Care Coordination & Follow-Through",
    copy: "Alpha Care follows what an appointment, recommendation, or change sets in motion—and keeps track of what still needs attention afterward."
  },
  {
    title: "Care Transitions",
    copy: "When care changes, Alpha Care helps your family understand what is different and what now requires attention."
  },
  {
    title: "Family Communication",
    copy: "When several family members are involved, Alpha Care helps the appropriate people stay connected to the same care picture, so important changes do not have to be pieced together separately."
  }
];

const detailItems = [
  {
    title: "The Appointment That Moved",
    copy: "We notice when something changes—and make sure the next step doesn’t get missed."
  },
  {
    title: "The Forgotten Question",
    copy: "We capture what should be asked so clarification happens while it’s still relevant."
  },
  {
    title: "The Recommendation That Needs Follow-Up",
    copy: "We track what was recommended and confirm what still needs attention."
  },
  {
    title: "The Sibling Three States Away",
    copy: "We keep important people aligned so everyone is working from the same understanding."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid px-6 pb-[3.875rem] pt-[3.25rem] sm:px-12 lg:grid-cols-[45%_55%] lg:px-[6.375rem] lg:pb-[0.625rem] lg:pt-[1.625rem]">
        <div className="pt-[2.25rem]">
          <h1 className="max-w-[34rem] font-serif text-[3rem] font-medium leading-[1.05] text-navy sm:text-[3.5rem] min-[1400px]:text-[3.875rem]">
            Care does not stop<br />
            at the appointment.
          </h1>
          <p className="mt-[1.5625rem] max-w-[29rem] text-[1rem] font-medium leading-[1.65] text-navy">
            What happens during care can create things that still need attention afterward. Alpha Care helps families recognize what those are and understand where to begin.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:max-w-[26rem]">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <p className="mt-5 font-serif text-[1.5rem] font-medium uppercase leading-tight text-navy">
            How We Can Help
          </p>
          <div className="mt-[1.1875rem]">
            {helpItems.map((item, index) => (
              <article key={item.title} className={`${index > 0 ? "border-t border-divider" : ""} py-[0.625rem] first:pt-0`}>
                <h2 className="font-serif text-[1.375rem] font-medium leading-tight text-navy">
                  {item.title}
                </h2>
                <p className="mt-[0.375rem] text-[0.75rem] font-semibold leading-[1.45] text-navy">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-[1rem] font-serif text-[1.3125rem] font-medium italic leading-tight text-navy">
            No predetermined package. We begin by listening.
          </p>
        </div>
      </section>

      <section className="grid gap-10 px-6 pb-[3.625rem] pt-2 sm:px-12 lg:grid-cols-[38%_30%_32%] lg:gap-0 lg:px-[6.375rem]">
        <div className="lg:pr-[3.125rem]">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <h2 className="mt-[1.125rem] font-serif text-[1.5rem] font-medium uppercase leading-tight text-navy">
            The Details Matter
          </h2>
          <div className="mt-[1.125rem] grid gap-x-8 gap-y-[1.25rem] md:grid-cols-2">
            {detailItems.map((item) => (
              <article key={item.title} className="grid grid-cols-[0.5rem_1fr] gap-4">
                <span className="mt-[0.5rem] h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.75rem] font-extrabold uppercase leading-[1.45] tracking-[0.04em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] font-semibold leading-[1.6] text-navy">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="border-divider lg:border-l lg:px-[2.375rem]">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <h2 className="mt-[1.125rem] font-serif text-[1.5rem] font-medium uppercase leading-tight text-navy">
            Our Role
          </h2>
          <p className="mt-2 text-[0.8125rem] font-semibold leading-[1.55] text-navy">
            Alpha Care works alongside your family and the professionals already involved in your care. We do not replace the guidance or decisions of your physicians, financial advisors, attorneys, or other trusted experts. Our role is to help you understand, coordinate, and follow through on what needs attention.
          </p>
        </div>
        <div className="border-divider text-center lg:border-l lg:pl-[3.5rem] lg:pt-[1.625rem]">
          <span className="mx-auto block h-px w-14 bg-gold" aria-hidden="true" />
          <h2 className="mx-auto mt-[2rem] max-w-[23rem] font-serif text-[1.875rem] font-medium leading-[1.1] text-navy">
            Tell us what your family is navigating.<br />
            <em className="font-serif font-medium italic">We’ll begin there.</em>
          </h2>
          <Link
            href="/contact"
            className="mt-[1.5rem] inline-flex h-[2.75rem] min-w-[14.75rem] items-center justify-center rounded-[0.125rem] bg-navy px-7 text-[0.875rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Contact Alpha Care
          </Link>
        </div>
      </section>
    </div>
  );
}
