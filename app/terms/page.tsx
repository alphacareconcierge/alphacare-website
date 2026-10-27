import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | AlphaCare Concierge Care Management",
  description:
    "Website terms for AlphaCare Concierge Care Management.",
  alternates: { canonical: "https://alphacareconcierge.com/terms" }
};

export default function TermsPage() {
  return (
    <section className="ac-shell ac-section bg-ivory">
      <h1 className="ac-heading-1 mb-4 text-center">
        Terms of Service
      </h1>
      <p className="type-eyebrow mb-12 text-center">
        Effective 2026
      </p>

      <div className="ac-legal-copy">
        <p>
          By using this website, you agree to these terms. The information on this website is provided for general informational purposes about AlphaCare’s private care management, healthcare advocacy, and family coordination services.
        </p>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            No Medical Advice
          </h2>
          <p>
            AlphaCare Concierge Care Management is not a medical practice and does not provide diagnosis, treatment, emergency services, or medical advice through this website. For medical concerns, contact a licensed healthcare provider. For emergencies, call emergency services.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Service Scope
          </h2>
          <p>
            AlphaCare provides private care management, coordination, and family advocacy. AlphaCare does not provide direct emergency medical response and does not replace the medical diagnosis, clinical judgment, or legal advice of physicians, attorneys, financial advisors, or other licensed professionals.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Website Content
          </h2>
          <p>
            Website content may be updated from time to time. Use of this website does not create a client relationship until AlphaCare and the family have mutually agreed to proceed with services.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Website Inquiries
          </h2>
          <p>
            Please do not submit detailed medical records, protected health information, or urgent medical requests through this website. If clinical details are ever helpful later, AlphaCare will provide a secure channel for sharing additional information.
          </p>
        </section>

        <section>
          <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">
            Contact
          </h2>
          <p>
            Questions about these terms may be sent to{" "}
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
