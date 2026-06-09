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
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
          AlphaCare Concierge Care Management
        </p>
        <h1 className="mt-6 font-serif text-5xl font-medium text-navy">
          Terms of Use
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-grayblue">
          <p>
            By using this website, you agree to these terms. The information on
            this website is provided for general informational purposes about
            AlphaCare’s healthcare advocacy and care coordination services.
          </p>
          <section>
            <h2 className="font-serif text-3xl text-navy">No Medical Advice</h2>
            <p className="mt-3">
              AlphaCare Concierge Care Management is not a medical practice and
              does not provide diagnosis, treatment, emergency services, or medical
              advice through this website. For medical concerns, contact a licensed
              healthcare provider. For emergencies, call emergency services.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">Service Scope</h2>
            <p className="mt-3">
              AlphaCare provides healthcare advocacy, care coordination, provider
              communication support, care transition guidance, and family support.
              AlphaCare is not a home health agency, nursing agency, transportation
              company, or medical practice.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">Website Content</h2>
            <p className="mt-3">
              Website content may be updated from time to time. Use of this website
              does not create a client relationship until AlphaCare and the family
              have mutually agreed to proceed with services.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">Contact</h2>
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
