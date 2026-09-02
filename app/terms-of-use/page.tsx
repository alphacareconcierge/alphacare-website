import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Website terms for AlphaCare Concierge Care Management.",
  alternates: { canonical: "/terms-of-use" }
};

export default function TermsOfUsePage() {
  return (
    <section className="mx-auto max-w-3xl bg-ivory px-6 py-20 md:py-24">
      <div>
        <p className="type-eyebrow text-gold">
          AlphaCare Concierge Care Management
        </p>
        <h1 className="type-hero mt-6 text-[clamp(2rem,3.5vw,2.75rem)] text-navy">
          Terms of Use
        </h1>
        <div className="type-body mt-10 space-y-8">
          <p>
            By using this website, you agree to these terms. The information on
            this website is provided for general informational purposes about
            AlphaCare’s healthcare advocacy and care coordination services.
          </p>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">No Medical Advice</h2>
            <p className="mt-3">
              AlphaCare Concierge Care Management is not a medical practice and
              does not provide diagnosis, treatment, emergency services, or medical
              advice through this website. For medical concerns, contact a licensed
              healthcare provider. For emergencies, call emergency services.
            </p>
          </section>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">Service Scope</h2>
            <p className="mt-3">
              AlphaCare provides healthcare advocacy, care coordination, provider
              communication support, care transition guidance, and family support.
              AlphaCare is not a home health agency, nursing agency, transportation
              company, or medical practice.
            </p>
          </section>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">Website Content</h2>
            <p className="mt-3">
              Website content may be updated from time to time. Use of this website
              does not create a client relationship until AlphaCare and the family
              have mutually agreed to proceed with services.
            </p>
          </section>
          <section>
            <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">Contact</h2>
            <p className="mt-3">
              Questions about these terms may be sent to{" "}
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
