import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | AlphaCare Concierge Care Management",
  description:
    "Website terms for AlphaCare Concierge Care Management.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl bg-ivory px-6 py-20 md:py-24">
      <h1 className="mb-2 text-center font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light leading-[1.2] text-navy">
        Terms of Service
      </h1>
      <p className="mb-12 text-center font-sans text-[0.65625rem] font-medium uppercase tracking-[0.16em] text-gold">
        Effective 2026
      </p>

      <div>
        <p className="mb-4 max-w-2xl font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
          By using this website, you agree to these terms. The information on this website is provided for general informational purposes about AlphaCare’s private care management, healthcare advocacy, and family coordination services.
        </p>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
            No Medical Advice
          </h2>
          <p className="mb-4 max-w-2xl font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
            AlphaCare Concierge Care Management is not a medical practice and does not provide diagnosis, treatment, emergency services, or medical advice through this website. For medical concerns, contact a licensed healthcare provider. For emergencies, call emergency services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
            Service Scope
          </h2>
          <p className="mb-4 max-w-2xl font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
            AlphaCare provides private care management, coordination, and family advocacy. AlphaCare does not provide direct emergency medical response and does not replace the medical diagnosis, clinical judgment, or legal advice of physicians, attorneys, financial advisors, or other licensed professionals.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
            Website Content
          </h2>
          <p className="mb-4 max-w-2xl font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
            Website content may be updated from time to time. Use of this website does not create a client relationship until AlphaCare and the family have mutually agreed to proceed with services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
            Website Inquiries
          </h2>
          <p className="mb-4 max-w-2xl font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
            Please do not submit detailed medical records, protected health information, or urgent medical requests through this website. If clinical details are ever helpful later, AlphaCare will provide a secure channel for sharing additional information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 mt-10 border-b border-[#E7E0D6] pb-2 font-serif text-[1.375rem] font-normal leading-[1.25] text-navy">
            Contact
          </h2>
          <p className="mb-4 max-w-2xl font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
            Questions about these terms may be sent to{" "}
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
