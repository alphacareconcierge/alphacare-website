import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy practices for AlphaCare Concierge Care Management website inquiries and communications.",
  alternates: { canonical: "https://alphacareconcierge.com/privacy" }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="ac-shell ac-section bg-ivory">
      <div>
        <p className="type-eyebrow text-gold">
          AlphaCare Concierge Care Management
        </p>
        <h1 className="type-hero ac-eyebrow-gap">
          Privacy Policy
        </h1>
        <div className="ac-legal-copy ac-copy-gap ac-paragraphs">
          <p>
            AlphaCare respects the privacy of families who contact us for
            healthcare advocacy and care coordination support. This policy explains
            how information submitted through this website may be used.
          </p>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">Information We Collect</h2>
            <p>
              The consultation form may collect your name, email address, optional
              phone number, relationship to the client, preferred contact method,
              and a brief description of your needs.
            </p>
          </section>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">Protected Health Information</h2>
            <p>
              Please do not submit detailed medical information or protected health
              information through this website form. Sensitive information will be
              collected through a secure process after initial contact when
              appropriate.
            </p>
          </section>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">How We Use Information</h2>
            <p>
              Information submitted through the website is used to respond to your
              inquiry, understand the general nature of your request, and coordinate
              next steps for a consultation.
            </p>
          </section>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">Contact</h2>
            <p>
              Questions about this privacy policy may be sent to{" "}
            <a className="ac-text-link ac-focus" href={`mailto:${business.email}`}>
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
