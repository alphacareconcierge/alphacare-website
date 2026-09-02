import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | AlphaCare Concierge Care Management",
  description:
    "Privacy practices for AlphaCare Concierge Care Management website inquiries and communications.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl bg-ivory px-6 py-20 md:py-24">
      <h1 className="mb-2 text-center font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light leading-[1.2] text-navy">
        Privacy Policy
      </h1>
      <p className="mb-12 text-center font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold">
        Effective 2026
      </p>

      <div>
        <p className="mb-4 font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
          AlphaCare respects the privacy of families who contact us for healthcare advocacy and care coordination support. This policy explains how information submitted through this website may be used.
        </p>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E3DBCF]/60 pb-2 font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            Information We Collect
          </h2>
          <p className="mb-4 font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
            The consultation form may collect your name, email address, optional phone number, preferred contact method, and a brief description of what brings you to AlphaCare.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E3DBCF]/60 pb-2 font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            Protected Health Information
          </h2>
          <p className="mb-4 font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
            Please do not submit detailed medical information, medical records, or protected health information through this website form. A general overview is all that is needed to begin. If additional information is needed, AlphaCare will provide a dedicated, secure way to share it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E3DBCF]/60 pb-2 font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            How We Use Information
          </h2>
          <p className="mb-4 font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
            Information submitted through the website is used to respond to your inquiry, understand the general nature of your request, and coordinate next steps for an initial conversation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E3DBCF]/60 pb-2 font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            Email Communications
          </h2>
          <p className="mb-4 font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
            When you submit an inquiry, AlphaCare may contact you using the email address, phone number, or preferred contact method you provide. Website form submissions are routed to AlphaCare for review and response.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E3DBCF]/60 pb-2 font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            Contact
          </h2>
          <p className="mb-4 font-sans text-[0.9375rem] font-normal leading-[1.75] text-grayblue">
            Questions about this privacy policy may be sent to{" "}
            <a className="text-navy underline decoration-gold underline-offset-4 transition-colors hover:text-gold" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
