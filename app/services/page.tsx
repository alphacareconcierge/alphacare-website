import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Healthcare advocacy, care coordination, provider communication support, care transition guidance, and family updates for aging support in Greater Boston.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy px-5 py-20 text-ivory sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            Concierge Care Management
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-tight md:text-7xl">
            Healthcare advocacy and coordination for families navigating aging.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-ivory/74">
            AlphaCare supports families with high-touch guidance across healthcare
            communication, care transitions, appointments, and ongoing family needs.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Structured for today, ready for future expansion."
            copy="Each service can stand alone or become part of an ongoing concierge care management relationship."
          />
          <div className="mt-12 grid gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="grid gap-6 border border-gold/30 bg-white/60 p-7 md:grid-cols-[4rem_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center border border-gold/55 bg-ivory">
                    <Icon className="text-gold" size={27} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-serif text-4xl font-medium text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-5 max-w-4xl text-base leading-8 text-grayblue">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-12 border border-navy/10 bg-navy p-8 text-ivory md:p-10">
            <p className="max-w-3xl font-serif text-3xl leading-snug">
              AlphaCare is a trusted healthcare guide and care coordination
              partner. We do not provide home health, nursing agency, medical
              practice, or transportation services.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border border-gold bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-transparent hover:text-ivory"
            >
              Start the Conversation
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
