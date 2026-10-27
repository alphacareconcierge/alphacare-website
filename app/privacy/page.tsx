import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | AlphaCare Concierge Care Management",
  description:
    "Privacy practices for AlphaCare Concierge Care Management website inquiries and communications.",
  alternates: { canonical: "https://alphacareconcierge.com/privacy" }
};

export default function PrivacyPage() {
  return (
    <section className="ac-shell ac-section bg-ivory">
      <h1 className="ac-heading-1 mb-4 text-center">
        Privacy Policy
      </h1>
      <p className="type-eyebrow mb-12 text-center">
        Effective 2026
      </p>

      <div className="ac-legal-copy">
        <p>
          AlphaCare respects the privacy of families who contact us for healthcare advocacy and care coordination support. This policy explains how information submitted through this website may be used.
        </p>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Information We Collect
          </h2>
          <p>
            The consultation form may collect your name, email address, optional phone number, preferred contact method, and a brief description of what brings you to AlphaCare.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Protected Health Information
          </h2>
          <p>
            Please do not submit detailed medical information, medical records, or protected health information through this website form. A general overview is all that is needed to begin. If additional information is needed, AlphaCare will provide a dedicated, secure way to share it.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            How We Use Information
          </h2>
          <p>
            Information submitted through the website is used to respond to your inquiry, understand the general nature of your request, and coordinate next steps for an initial conversation.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Email Communications
          </h2>
          <p>
            When you submit an inquiry, AlphaCare may contact you using the email address, phone number, or preferred contact method you provide. Website form submissions are routed to AlphaCare for review and response.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Contact
          </h2>
          <p>
            Questions about this privacy policy may be sent to{" "}
            <a className="ac-text-link ac-focus" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
