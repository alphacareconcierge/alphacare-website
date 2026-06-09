import type { Metadata } from "next";
import Image from "next/image";
import { DecorativeRule } from "@/components/decorative-rule";
import { SectionHeading } from "@/components/section-heading";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Janet Adusei, LPN",
  description:
    "Meet Janet Adusei, LPN, founder of AlphaCare Concierge Care Management and healthcare advocate serving families in the Greater Boston Area.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy px-5 py-20 text-ivory sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
              Founder & Healthcare Advocate
            </p>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-tight md:text-7xl">
              Janet Adusei, LPN
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-ivory/74">
              A calm, experienced advocate for families who need trusted healthcare
              guidance, continuity, and clear next steps.
            </p>
          </div>
          <div className="border border-gold/45 bg-ivory p-6 shadow-2xl shadow-black/20">
            <Image
              src="/brand/business-card-mockup.png"
              alt="AlphaCare business card branding"
              width={1624}
              height={1000}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeading
            eyebrow="About AlphaCare"
            title="Advocacy shaped by healthcare experience and family trust."
          />
          <div className="space-y-7 text-base leading-8 text-grayblue">
            <p>
              AlphaCare Concierge Care Management was founded by {business.founder},
              a Licensed Practical Nurse with a practical understanding of healthcare
              environments, family communication, and the strain that aging-related
              decisions can place on loved ones.
            </p>
            <p>
              Janet created AlphaCare for families who need a steady healthcare
              advocate: someone who can listen carefully, organize concerns, support
              provider communication, and help families move forward with greater
              confidence.
            </p>
            <p>
              The AlphaCare philosophy is rooted in continuity. Families should not
              have to reconstruct the story at every turn or navigate healthcare
              complexity alone. With a concierge approach, AlphaCare brings calm,
              discretion, and attentive follow-through to each engagement.
            </p>
            <DecorativeRule className="max-w-sm" />
            <p className="font-serif text-3xl leading-snug text-navy">
              The work is personal, but the approach is precise: clarify the concern,
              protect the family’s voice, and keep the next step visible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
