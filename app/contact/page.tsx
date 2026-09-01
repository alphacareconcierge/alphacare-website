import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | AlphaCare Concierge Care Management",
  description:
    "Start the conversation with AlphaCare. Share what your family is navigating, and we’ll begin by listening.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid items-start px-6 pb-[5.75rem] pt-12 sm:px-12 lg:grid-cols-[46%_54%] lg:px-[19.25rem] lg:pb-[5.3125rem] lg:pt-16 min-[2200px]:px-[25.5rem]">
        <div className="pt-2 lg:pr-[4.5rem] lg:pt-4">
          <div>
            <p className="type-eyebrow text-[0.8125rem]">
              Let&apos;s Begin
            </p>
            <h1 className="type-hero mt-[1.75rem] max-w-full break-words text-[2.125rem] min-[420px]:text-[2.5rem] sm:text-[3.75rem] lg:max-w-[42rem]">
              Tell us what’s happening.<br />
              <em className="font-serif italic">We’ll start there.</em>
            </h1>
            <p className="type-body mt-[1.5rem] max-w-full text-navy sm:max-w-[25rem]">
              You don’t need to know exactly what kind of help you need. Share what’s weighing on your family, and we’ll begin by listening.
            </p>
          </div>
        </div>
        <div className="border-divider lg:border-l lg:pl-[4.5rem]">
          <div className="max-w-[52.5rem]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-6 pb-[5.75rem] text-center sm:px-12">
        <div className="mx-auto max-w-[48rem]">
          <h2 className="type-card text-[2rem]">
            What happens next
          </h2>
          <p className="type-body-sm mx-auto mt-[1.125rem] max-w-[33rem] text-navy">
            We’ll review your message and contact you using the method you prefer. The first conversation is simply a chance to understand what’s happening and whether Alpha Care may be the right fit.
          </p>
          <div className="mx-auto mt-[1.5rem] h-px max-w-[33.5rem] bg-divider" aria-hidden="true" />
          <p className="type-body-sm mx-auto mt-[1rem] max-w-[42rem] text-navy">
            <em className="italic text-gold">Professional referrals are welcome.</em> Attorneys, physicians, financial advisors, and other professionals may use this form to introduce a client or family.
          </p>
        </div>
      </section>
    </div>
  );
}
