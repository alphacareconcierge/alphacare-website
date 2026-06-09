import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a confidential AlphaCare consultation for healthcare advocacy and concierge care management in the Greater Boston Area.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy px-5 py-20 text-ivory sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            Confidential inquiry
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-tight md:text-7xl">
            Begin with a discreet consultation request.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/74">
            AlphaCare responds with compassion, professionalism, and careful
            attention to privacy. Share only a brief overview here; sensitive
            details will be gathered through a secure process after initial contact.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Professional support for families ready for clarity."
              copy="For urgent medical concerns, call emergency services or your healthcare provider. For care coordination and healthcare advocacy support, AlphaCare welcomes your inquiry."
            />
            <address className="mt-10 space-y-4 text-base not-italic leading-7 text-grayblue">
              <p>{business.location}</p>
              <a className="block text-navy hover:text-gold" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              <p>{business.website}</p>
            </address>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
