import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy practices for AlphaCare Concierge Care Management website inquiries and communications.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl bg-ivory px-6 py-20 md:py-24">
      <div>
        <p className="type-eyebrow text-gold">
          AlphaCare Concierge Care Management
        </p>
        <h1 className="type-hero mt-6 text-[clamp(2rem,3.5vw,2.75rem)] text-navy">
          Privacy Policy
        </h1>
        <div className="type-body mt-10 space-y-8">
          <p>
            AlphaCare respects the privacy of families who contact us for
            healthcare advocacy and care coordination support. This policy explains
            how information submitted through this website may be used.
          </p>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">Information We Collect</h2>
            <p className="mt-3">
              The consultation form may collect your name, email address, optional
              phone number, relationship to the client, preferred contact method,
              and a brief description of your needs.
            </p>
          </section>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">Protected Health Information</h2>
            <p className="mt-3">
              Please do not submit detailed medical information or protected health
              information through this website form. Sensitive information will be
              collected through a secure process after initial contact when
              appropriate.
            </p>
          </section>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">How We Use Information</h2>
            <p className="mt-3">
              Information submitted through the website is used to respond to your
              inquiry, understand the general nature of your request, and coordinate
              next steps for a consultation.
            </p>
          </section>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">Contact</h2>
            <p className="mt-3">
              Questions about this privacy policy may be sent to{" "}
              <a className="text-navy underline decoration-gold underline-offset-4" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
