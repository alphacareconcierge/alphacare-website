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
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
          AlphaCare Concierge Care Management
        </p>
        <h1 className="mt-6 font-serif text-5xl font-medium text-navy">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-grayblue">
          <p>
            AlphaCare respects the privacy of families who contact us for
            healthcare advocacy and care coordination support. This policy explains
            how information submitted through this website may be used.
          </p>
          <section>
            <h2 className="font-serif text-3xl text-navy">Information We Collect</h2>
            <p className="mt-3">
              The consultation form may collect your name, email address, optional
              phone number, relationship to the client, preferred contact method,
              and a brief description of your needs.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">Protected Health Information</h2>
            <p className="mt-3">
              Please do not submit detailed medical information or protected health
              information through this website form. Sensitive information will be
              collected through a secure process after initial contact when
              appropriate.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">How We Use Information</h2>
            <p className="mt-3">
              Information submitted through the website is used to respond to your
              inquiry, understand the general nature of your request, and coordinate
              next steps for a consultation.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">Contact</h2>
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
