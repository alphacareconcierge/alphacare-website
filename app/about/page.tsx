import type { Metadata } from "next";
import Image from "next/image";
import { ClosingInvitation } from "@/components/closing-invitation";

export const metadata: Metadata = {
  title: "About Us | AlphaCare Concierge Care Management",
  description:
    "Learn about AlphaCare’s philosophy of care, healthcare operations expertise, and our commitment to discretion, judgment, and thoughtful advocacy.",
  alternates: { canonical: "https://alphacareconcierge.com/about" }
};

const values = [
  {
    title: "Listen Without Rushing",
    copy: "Taking the time to understand what matters most to your loved one, what brings comfort, and where your family feels the most strain."
  },
  {
    title: "A Calm, Steady Presence",
    copy: "Healthcare decisions rarely follow a straight line. We provide a grounded perspective beside you, helping you weigh options and move through difficult moments with clarity."
  },
  {
    title: "Attentive Follow-Through",
    copy: "From organizing discharge notes to tracking shifting appointments, we handle the administrative friction so you can focus entirely on being family."
  },
  {
    title: "Dignity & Advocacy",
    copy: "Keeping your loved one’s personal values at the center of every conversation—honoring their autonomy, safeguarding their privacy, and ensuring their wishes lead the way."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="border-b border-divider">
        <div className="ac-shell ac-section ac-grid grid grid-cols-1 lg:grid-cols-[minmax(0,43.25fr)_minmax(0,56.75fr)]">
          <div>
            <p className="ac-eyebrow">
              About AlphaCare
            </p>
            <h1 className="ac-heading-1 ac-eyebrow-gap">
              Care may involve many people. <em>Families still experience all of it.</em>
            </h1>
            <span className="ac-copy-gap block h-px w-10 bg-gold/60" aria-hidden="true" />
            <p className="ac-body ac-copy-gap">
              Complex care rarely breaks down in the exam room—it fractures in the quiet spaces between appointments, providers, and family members. Built on years of direct clinical experience, AlphaCare provides the steady coordination and attentive oversight families need to navigate each step with clarity.
            </p>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full min-h-[24rem] overflow-hidden rounded-sm border border-[#E3DBCF]/70 lg:aspect-auto lg:h-[31.25rem] lg:max-h-[31.25rem]">
              <Image
                src="/about-hero.png?v=lighter-20260922"
                alt="White hydrangeas in a ceramic vase beside books and a brass dish"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[56%_center] brightness-[0.98] contrast-[0.96] saturate-[0.92]"
              />
              <div className="pointer-events-none absolute inset-0 bg-ivory/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="ac-shell ac-section text-center">
        <h2 className="ac-heading-2 mx-auto max-w-3xl">
          When someone you love needs more care, you shouldn&apos;t have to carry every decision alone.
        </h2>
        <span className="ac-copy-gap mx-auto block h-px w-11 bg-gold" aria-hidden="true" />
        <p className="ac-body ac-copy-gap mx-auto">
          AlphaCare brings clarity, coordination, and a steady presence when families need it most.
        </p>
      </section>

      <section className="ac-shell ac-section-end ac-grid grid lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)]">
        <div>
          <p className="ac-eyebrow">
            What Guides Us
          </p>
          <span className="ac-eyebrow-gap block h-px w-8 bg-gold" aria-hidden="true" />
          <h2 className="ac-heading-2 ac-eyebrow-gap">
            How we work beside your family <em className="font-serif italic">matters just as much</em> as the logistics we manage.
          </h2>
        </div>
        <div>
          {values.map((value) => (
            <article key={value.title} className="mb-6 border-b border-[#E3DBCF]/50 pb-6 last:mb-0 last:border-b-0 last:pb-0">
              <h3 className="ac-heading-3">
                {value.title}
              </h3>
              <p className="ac-body ac-copy-gap">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ClosingInvitation />
    </div>
  );
}
