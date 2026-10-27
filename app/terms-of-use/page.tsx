import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Website terms for AlphaCare Concierge Care Management.",
  alternates: { canonical: "https://alphacareconcierge.com/terms" }
};

export default function TermsOfUsePage() {
  return (
    <section className="ac-shell ac-section bg-ivory">
      <div>
        <p className="type-eyebrow text-gold">
          AlphaCare Concierge Care Management
        </p>
        <h1 className="type-hero ac-eyebrow-gap">
          Terms of Use
        </h1>
        <div className="ac-legal-copy ac-copy-gap ac-paragraphs">
          <p>
            By using this website, you agree to these terms. The information on
            this website is provided for general informational purposes about
            AlphaCare’s healthcare advocacy and care coordination services.
          </p>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">No Medical Advice</h2>
            <p>
              AlphaCare Concierge Care Management is not a medical practice and
              does not provide diagnosis, treatment, emergency services, or medical
              advice through this website. For medical concerns, contact a licensed
              healthcare provider. For emergencies, call emergency services.
            </p>
          </section>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">Service Scope</h2>
            <p>
              AlphaCare provides healthcare advocacy, care coordination, provider
              communication support, care transition guidance, and family support.
              AlphaCare is not a home health agency, nursing agency, transportation
              company, or medical practice.
            </p>
          </section>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">Website Content</h2>
            <p>
              Website content may be updated from time to time. Use of this website
              does not create a client relationship until AlphaCare and the family
              have mutually agreed to proceed with services.
            </p>
          </section>
          <section>
            <h2 className="ac-heading-2 border-b border-[#E7E0D6] pb-2">Contact</h2>
            <p>
              Questions about these terms may be sent to{" "}
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
