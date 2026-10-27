import Image from "next/image";
import Link from "next/link";
import { ClosingInvitation } from "@/components/closing-invitation";

const services = [
  {
    title: "Healthcare Advocacy",
    description: "Helping you arrive prepared, with the right questions, priorities, and concerns brought forward."
  },
  {
    title: "Care Coordination & Follow-Through",
    description: "Keeping track of recommendations, referrals, and the details that still need attention."
  },
  {
    title: "Care Transitions",
    description: "Bringing greater continuity to the move from one care setting to another."
  },
  {
    title: "Family Communication",
    description: "Keeping the people you choose informed as plans, needs, and next steps change."
  }
];

export default function HomePage() {
  return (
    <div className="ac-home">
      <section className="ac-home-hero" aria-labelledby="home-heading">
        <div className="ac-hero-landscape">
          <Image
            src="/hero-coastal-beacon.png?v=lighter-20260922"
            alt="Coastal New England lighthouse above rocky shoreline at golden hour"
            fill
            priority
            sizes="100vw"
            className="ac-hero-image object-[right_20%]"
          />
          <div className="ac-hero-wash" aria-hidden="true" />
        </div>

        <div className="ac-shell ac-hero-content max-lg:py-[calc(var(--ac-section-space)/2)]">
          <div className="ac-hero-copy">
            <p className="ac-eyebrow ac-hero-eyebrow">
              EXCEPTIONAL CARE. A MORE CERTAIN PATH.
            </p>
            <h1 id="home-heading" className="ac-home-heading">
              When care becomes complicated, <em>it helps to have someone beside you.</em>
            </h1>
            <p className="ac-body ac-hero-body">
              Support for individuals and families managing multiple providers, changes in care, and the follow-up between appointments.
            </p>
            <Link href="/contact" className="ac-button">
              Start the conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="ac-home-narrative" aria-labelledby="home-services-heading">
        <div className="ac-shell">
          <h2 id="home-services-heading" className="ac-heading-2">
            Support with the work around care
          </h2>
          <ul className="ac-home-services ac-grid ac-cta-gap grid md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.title} className="ac-home-service">
                <div>
                  <h3 className="ac-heading-3">{service.title}</h3>
                  <span className="ac-home-service-rule" aria-hidden="true" />
                </div>
                <p className="ac-body">{service.description}</p>
              </li>
            ))}
          </ul>
          <Link href="/services" className="ac-body ac-text-link ac-cta-gap inline-flex min-h-11 items-center">
            Explore our services
          </Link>
        </div>
      </section>

      <section className="ac-shell ac-home-experience" aria-labelledby="home-experience-heading">
        <h2 id="home-experience-heading" className="ac-heading-2">
          Experience behind the practice
        </h2>
        <p className="ac-body ac-copy-gap">
          AlphaCare draws on more than 15 years of experience across healthcare and senior care, including assisted-living leadership.
        </p>
        <Link href="/about" className="ac-body ac-text-link ac-cta-gap inline-flex min-h-11 items-center">
          About the practice
        </Link>
      </section>

      <ClosingInvitation buttonLabel="Start the conversation" />
    </div>
  );
}
