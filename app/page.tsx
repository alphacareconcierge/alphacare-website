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
  whyAlphaCare
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-ivory">
        <Image
          src="/brand/boston-waterfront-hero.jpg"
          alt="Boston waterfront skyline at night"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,36,63,0.94)_0%,rgba(16,36,63,0.84)_30%,rgba(16,36,63,0.52)_58%,rgba(16,36,63,0.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,36,63,0.20)_0%,rgba(16,36,63,0.10)_45%,rgba(16,36,63,0.72)_100%)]" />
        <div className="mx-auto flex min-h-[calc(100vh-5.75rem)] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[42rem]">
          <div className="w-full min-w-0 max-w-[22rem] soft-reveal sm:max-w-3xl">
            <div className="flex items-center gap-5">
              <p className="type-eyebrow max-w-[18rem] text-gold sm:max-w-none">
                Greater Boston Concierge Care Management
              </p>
              <span className="hidden h-px w-28 bg-gold/70 sm:block" aria-hidden="true" />
            </div>
            <h1 className="type-hero mt-8 max-w-4xl">
              Healthcare
              <br className="sm:hidden" /> advocacy,
              <br className="sm:hidden" /> care
              <br className="sm:hidden" /> coordination,
              <br className="sm:hidden" /> and continuity
              <br className="sm:hidden" /> for families
              <br className="sm:hidden" /> navigating the complexities
              <br className="sm:hidden" /> of aging.
            </h1>
            <p className="type-body mt-8 max-w-[21rem] text-ivory/78 sm:max-w-xl">
              AlphaCare provides calm, organized, high-touch support for families
              managing complex healthcare needs, provider communication,
              appointments, and care transitions.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="type-cta inline-flex items-center justify-center gap-3 border border-gold bg-gold px-7 py-4 text-navy transition hover:bg-transparent hover:text-ivory"
              >
                Start the Conversation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we help"
            title="For families carrying the invisible work of care."
            copy="When healthcare becomes fragmented, families need more than information. They need a trusted guide who can bring order to appointments, communication, transitions, and next steps."
            align="center"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {audienceCards.map((card) => (
              <article key={card.title} className="border-t border-gold/45 pt-7">
                <h3 className="type-card text-navy">{card.title}</h3>
                <p className="type-body-sm mt-5 text-grayblue">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/50 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we support your family"
            title="Premium healthcare advocacy, organized around continuity."
            copy="AlphaCare is not a home health agency, nursing agency, medical practice, or transportation company. We are a care coordination and healthcare advocacy partner for families navigating aging."
            align="center"
          />
          <div className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="sm:odd:pr-8 sm:even:border-l sm:even:border-gold/25 sm:even:pl-8 lg:border-l lg:border-gold/25 lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="mb-7 block h-px w-full bg-gold/35 lg:hidden" aria-hidden="true" />
                  <Icon className="text-gold" size={26} aria-hidden="true" />
                  <h3 className="type-card mt-7 min-h-[4.5rem] text-navy lg:min-h-[5.25rem]">
                    {service.title}
                  </h3>
                  <span className="mt-6 block h-px w-8 bg-gold/70" aria-hidden="true" />
                  <p className="type-body-sm mt-4 text-grayblue">{service.preview}</p>
                </article>
              );
            })}
          </div>
          <Link
            href="/services"
            className="type-cta mt-10 inline-flex items-center gap-3 text-navy hover:text-gold"
          >
            View services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Why AlphaCare"
              title="Calm guidance for consequential moments."
              copy="Every engagement is built around quiet competence, attentive communication, and a clear sense of what families need next."
            />
            <DecorativeRule className="mt-10 max-w-sm" />
            <p className="type-editorial mt-8 max-w-xl text-navy">
              {business.founderStatement}
            </p>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {whyAlphaCare.map((item) => (
              <article key={item.title} className="border-t border-navy/10 pt-6">
                <h3 className="type-card text-navy">{item.title}</h3>
                <p className="type-body-sm mt-4 text-grayblue">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-24 text-ivory sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Consultation process"
            title="A clear path from first conversation to ongoing support."
            copy="The process is designed to feel structured, discreet, and reassuring from the first point of contact."
            inverted
          />
          <div className="mt-16 grid gap-y-10 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="border-t border-ivory/20 pt-6 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <p className="type-process-number text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="type-eyebrow mt-7 text-ivory">
                  {step.title}
                </h3>
                <p className="type-body-sm mt-4 text-ivory/70">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Start the conversation"
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
