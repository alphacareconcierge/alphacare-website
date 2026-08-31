import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alpha Care to begin a confidential conversation about healthcare advocacy and care coordination support.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid px-6 pb-[5.75rem] pt-[3.75rem] sm:px-12 lg:grid-cols-[46%_54%] lg:px-[19.25rem] lg:pb-[5.3125rem] lg:pt-[3.75rem] min-[2200px]:px-[25.5rem]">
        <div className="flex items-center py-12 lg:min-h-[39.875rem] lg:pr-[4.5rem]">
          <div>
            <p className="text-[1.25rem] font-medium uppercase tracking-[0.18em] text-gold">
              Let&apos;s Begin
            </p>
            <h1 className="mt-[1.75rem] font-serif text-[3rem] font-medium leading-[1.08] text-navy sm:text-[3.75rem] lg:max-w-[42rem]">
              Tell us what’s happening.<br />
              <em className="font-serif font-medium italic">We’ll start there.</em>
            </h1>
            <p className="mt-[1.5rem] max-w-[25rem] text-[1.125rem] font-medium leading-[1.75] text-navy">
              You don’t need to know exactly what kind of help you need. Share what’s weighing on your family, and we’ll begin by listening.
            </p>
          </div>
        </div>
        <div className="border-divider lg:border-l lg:pl-[4.5rem]">
          <div className="max-w-[52.5rem] lg:pt-[2.125rem]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-6 pb-[5.75rem] text-center sm:px-12">
        <div className="mx-auto max-w-[48rem]">
          <h2 className="font-serif text-[2rem] font-medium leading-tight text-navy">
            What happens next
          </h2>
          <p className="mx-auto mt-[1.125rem] max-w-[33rem] text-[0.875rem] font-semibold leading-[1.6] text-navy">
            We’ll review your message and contact you using the method you prefer. The first conversation is simply a chance to understand what’s happening and whether Alpha Care may be the right fit.
          </p>
          <div className="mx-auto mt-[1.5rem] h-px max-w-[33.5rem] bg-divider" aria-hidden="true" />
          <p className="mx-auto mt-[1rem] max-w-[42rem] text-[0.875rem] font-semibold leading-[1.6] text-navy">
            <em className="font-semibold italic text-gold">Professional referrals are welcome.</em> Attorneys, physicians, financial advisors, and other professionals may use this form to introduce a client or family.
          </p>
        </div>
      </section>
    </div>
  );
}
