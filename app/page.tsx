import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { DecorativeRule } from "@/components/decorative-rule";
import { SectionHeading } from "@/components/section-heading";
import {
  audienceCards,
  business,
  processSteps,
  services,
  trustPoints,
  whyAlphaCare
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-navy text-ivory">
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
              Greater Boston Concierge Care Management
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-medium leading-[1.04] md:text-7xl">
              {business.tagline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-ivory/74">
              AlphaCare provides calm, organized, high-touch support for families
              managing complex healthcare needs, provider communication,
              appointments, and care transitions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-gold bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-transparent hover:text-ivory"
              >
                Request a Consultation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-ivory/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ivory transition hover:border-gold hover:text-gold"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl soft-reveal">
            <div className="border border-gold/45 bg-ivory p-5 shadow-2xl shadow-black/25">
              <Image
                src="/brand/alphacare-logo.png"
                alt="AlphaCare Concierge Care Management logo"
                width={1200}
                height={1200}
                priority
                className="aspect-square w-full object-contain p-8"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="border border-ivory/15 px-4 py-4 text-center">
                    <Icon className="mx-auto text-gold" size={20} aria-hidden="true" />
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ivory/72">
                      {point.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we help"
            title="For families carrying the invisible work of care."
            copy="When healthcare becomes fragmented, families need more than information. They need a trusted guide who can bring order to appointments, communication, transitions, and next steps."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audienceCards.map((card) => (
              <article key={card.title} className="border border-gold/30 bg-white/55 p-8">
                <h3 className="font-serif text-3xl font-medium text-navy">{card.title}</h3>
                <p className="mt-5 text-sm leading-7 text-grayblue">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Premium healthcare advocacy, organized around continuity."
            copy="AlphaCare is not a home health agency, nursing agency, medical practice, or transportation company. We are a care coordination and healthcare advocacy partner for families navigating aging."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="border border-navy/10 bg-ivory p-6">
                  <Icon className="text-gold" size={26} aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-2xl font-medium text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-grayblue">{service.preview}</p>
                </article>
              );
            })}
          </div>
          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-navy hover:text-gold"
          >
            View services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Why AlphaCare"
              title="Calm guidance for consequential moments."
              copy="Every engagement is built around quiet competence, attentive communication, and a clear sense of what families need next."
            />
            <DecorativeRule className="mt-10 max-w-sm" />
          </div>
          <div className="grid gap-px bg-gold/25 md:grid-cols-2">
            {whyAlphaCare.map((item) => (
              <article key={item.title} className="bg-ivory p-7">
                <h3 className="font-serif text-3xl font-medium text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-grayblue">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-20 text-ivory sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Consultation process"
            title="A clear path from first conversation to ongoing support."
            copy="The process is designed to feel structured, discreet, and reassuring from the first point of contact."
            inverted
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border border-ivory/15 p-6">
                <p className="font-serif text-5xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-ivory">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ivory/70">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Request a consultation"
              title="Begin with a private, thoughtful conversation."
              copy="Share a brief overview of your family’s needs and preferred way to connect. AlphaCare will follow up with professionalism and discretion."
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
