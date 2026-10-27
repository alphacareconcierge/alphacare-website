import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | AlphaCare Concierge Care Management",
  description:
    "Learn about AlphaCare’s philosophy of care, healthcare operations expertise, and our commitment to discretion, judgment, and thoughtful advocacy.",
  alternates: { canonical: "https://alphacareconcierge.com/about" }
};

const principles = [
  {
    title: "The person remains central.",
    copy: "Care is considered in the context of the individual’s priorities, preferences, and permissions—not only the demands of the system."
  },
  {
    title: "Follow-through is deliberate.",
    copy: "Attention stays on what was decided, what remains unresolved, and what needs to happen next."
  },
  {
    title: "Communication is purposeful and discreet.",
    copy: "Information is shared thoughtfully, with the people the individual has chosen to involve and in keeping with the scope of the engagement."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="ac-shell py-12 lg:py-16" aria-labelledby="about-heading">
        <div className="max-w-3xl">
          <p className="ac-eyebrow">ABOUT ALPHACARE</p>
          <h1 id="about-heading" className="ac-heading-1 ac-eyebrow-gap">
            Care may involve many people. <em className="block">Families still experience all of it.</em>
          </h1>
          <p className="ac-body ac-copy-gap">
            Care is not experienced as a series of isolated appointments. It unfolds through decisions, transitions, unanswered questions, and the follow-up in between. AlphaCare exists to bring continuity to that experience—while keeping the person, their priorities, and what comes next clearly in view.
          </p>
        </div>
      </section>

      <section
        className="ac-shell ac-grid grid items-start pb-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:pb-[72px]"
        aria-labelledby="experience-heading"
      >
        <div className="min-w-0">
          <h2 id="experience-heading" className="ac-eyebrow">
            EXPERIENCE BEHIND THE PRACTICE
          </h2>
          <span className="mt-4 block h-px w-8 bg-gold/40" aria-hidden="true" />
          <p className="mt-6 max-w-[42ch] font-serif text-[23px] font-light leading-[1.4] lg:text-[26px]">
            AlphaCare is informed by more than 15 years of experience across healthcare and senior care, including primary care, population health, complex medical and behavioral care, care coordination, and assisted-living leadership.
          </p>
          <p className="ac-body mt-5 lg:text-[17px]">
            That breadth of experience brings a grounded understanding of how care settings operate, where communication can break down, and how much responsibility can fall to individuals and families between appointments.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full min-w-0 max-w-md overflow-hidden rounded-sm border border-divider/70 lg:max-w-none">
          <Image
            src="/about-hero.png?v=lighter-20260922"
            alt="White hydrangeas in a ceramic vase on books in a sunlit coastal room"
            fill
            priority
            sizes="(min-width: 1200px) 440px, (min-width: 1024px) 40vw, (min-width: 768px) 448px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="ac-shell" aria-labelledby="approach-heading">
        <p className="ac-eyebrow">OUR APPROACH</p>
        <h2 id="approach-heading" className="ac-heading-2 ac-eyebrow-gap">
          How experience shapes the work
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:gap-y-4">
          {principles.map((principle) => (
            <article key={principle.title} className="grid min-w-0 gap-y-4 lg:row-span-3 lg:grid-rows-subgrid">
              <h3 className="ac-heading-3">{principle.title}</h3>
              <span className="block h-px w-8 bg-gold/40" aria-hidden="true" />
              <p className="ac-body">{principle.copy}</p>
            </article>
          ))}
        </div>
        <Link href="/services" className="ac-body ac-text-link mt-6 inline-flex min-h-11 items-center">
          Explore our services →
        </Link>
      </section>

      <section className="ac-shell py-14 lg:py-16" aria-labelledby="about-invitation-heading">
        <h2 id="about-invitation-heading" className="ac-heading-2">
          When you’re ready, tell us what’s happening.
        </h2>
        <p className="ac-body mt-4"><em>We’ll begin by listening.</em></p>
        <Link href="/contact" className="ac-button ac-cta-gap">
          START THE CONVERSATION
        </Link>
      </section>
    </div>
  );
}
