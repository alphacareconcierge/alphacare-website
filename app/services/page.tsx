import type { Metadata } from "next";
import { ClosingInvitation } from "@/components/closing-invitation";

export const metadata: Metadata = {
  title: "Our Services | AlphaCare Concierge Care Management",
  description:
    "Explore AlphaCare’s bespoke healthcare advocacy, care coordination, transitions support, and family communication services.",
  alternates: { canonical: "https://alphacareconcierge.com/services" }
};

const helpItems = [
  {
    title: "Healthcare Advocacy",
    copy: "We prepare questions and priorities for appointments, organize relevant concerns, and help communicate them to the appropriate healthcare professionals."
  },
  {
    title: "Care Coordination & Follow-Through",
    copy: "We organize recommendations, referrals, and next steps; follow up with the providers and services involved; and keep outstanding items visible."
  },
  {
    title: "Care Transitions",
    copy: "We support the practical coordination around a change in care setting, including communication, planned services, appointments, and unresolved arrangements."
  },
  {
    title: "Family Communication",
    copy: "We keep designated family members informed about what has changed, what remains outstanding, and what needs a decision, in accordance with the client’s permissions."
  }
];

const detailItems = [
  {
    title: "The Appointment That Moved",
    copy: "Helping track schedule adjustments and transition details so your family stays prepared when dates or providers shift."
  },
  {
    title: "The Forgotten Question",
    copy: "Capturing what matters most ahead of time so important questions are raised and clarified during clinical visits."
  },
  {
    title: "The Sibling Three States Away",
    copy: "Keeping everyone informed and aligned from the same page, regardless of distance or time zones."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="ac-shell ac-section" aria-labelledby="services-heading">
        <div className="max-w-3xl">
          <p className="ac-eyebrow mb-4">
            How We Can Help
          </p>
          <h1 id="services-heading" className="ac-heading-1">
            Care does not stop at the appointment.
          </h1>
          <p className="ac-body ac-copy-gap">
            From preparing for appointments to following up afterward, AlphaCare helps keep the next steps organized and the right people informed.
          </p>
        </div>
      </section>

      <section className="ac-shell ac-section-end" aria-label="Care management services">
        <div className="ac-grid grid md:grid-cols-2">
          {helpItems.map((item) => (
            <article key={item.title}>
              <h2 className="ac-heading-3">{item.title}</h2>
              <p className="ac-body ac-copy-gap">{item.copy}</p>
            </article>
          ))}
        </div>
        <p className="ac-body ac-cta-gap">
          Tailored support shaped around your family&apos;s unique circumstances.
        </p>
      </section>

      <section className="ac-shell ac-section-end" aria-labelledby="services-examples-heading">
        <h2 id="services-examples-heading" className="ac-heading-2">
          What this can look like
        </h2>
        <div className="ac-grid ac-cta-gap grid xl:grid-cols-3">
          {detailItems.map((item) => (
            <article key={item.title}>
              <h3 className="ac-heading-3">{item.title}</h3>
              <p className="ac-body ac-copy-gap">{item.copy}</p>
            </article>
          ))}
        </div>
        <article className="mt-[var(--ac-column-gap)]">
          <h3 className="ac-heading-3">The Post-Visit Instruction</h3>
          <p className="ac-body ac-copy-gap">
            Organizing discharge notes, follow-up recommendations, and next steps into a clear, manageable plan for the family.
          </p>
        </article>
      </section>

      <section className="ac-shell ac-section-end" aria-labelledby="services-process-heading">
        <h2 id="services-process-heading" className="ac-heading-2">
          How we begin
        </h2>
        <p className="ac-body ac-copy-gap">
          We begin with a complimentary conversation about your circumstances and whether AlphaCare may be an appropriate fit. If you choose to proceed, a Comprehensive Care Assessment informs an individualized Care Management Plan and Initial Recommendations. You can then decide whether to arrange ongoing support.
        </p>
        <p className="ac-body ac-copy-gap">
          The introductory conversation is not a clinical assessment.
        </p>
        <div className="ac-cta-gap">
          <h3 className="ac-heading-3">In-person support</h3>
          <p className="ac-body ac-copy-gap">
            Where appropriate and agreed in advance, support may include appointment accompaniment, care conferences, facility visits, or transition-related visits.
          </p>
        </div>
      </section>

      <section className="ac-shell ac-section-end" aria-labelledby="services-role-heading">
        <h2 id="services-role-heading" className="ac-heading-2">
          Our Role
        </h2>
        <p className="ac-body ac-copy-gap">
          AlphaCare works alongside your family and existing care network. We do not replace the medical diagnosis, clinical judgment, or legal advice of your physicians, attorneys, or financial advisors. Our purpose is to provide dedicated coordination, clear communication, and steady advocacy to support you along the way.
        </p>
      </section>

      <ClosingInvitation />
    </div>
  );
}
