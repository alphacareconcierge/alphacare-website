"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";

export function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="bg-ivory text-navy">
        <section className="flex min-h-[calc(100vh-5.75rem)] items-center justify-center px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl border border-[#E3DBCF]/80 bg-ivory px-6 py-16 text-center md:px-10 md:py-24" aria-live="polite">
            <h1 className="page-heading text-navy">
              Thank you for reaching out.
            </h1>
            <div className="mx-auto my-6 w-12 border-t border-gold/60" aria-hidden="true" />
            <div className="page-body-secondary mx-auto max-w-md space-y-5 text-muted">
              <p>Navigating care decisions requires clarity and deliberate coordination.</p>
              <p>
                We have received your note and are reviewing the details with quiet discretion. We will connect with you via your preferred method shortly to discuss how we can assist your family.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-ivory text-navy">
      <section className="mx-auto box-border grid w-full max-w-[100rem] grid-cols-1 items-start gap-10 px-6 pb-[5.75rem] pt-12 sm:px-10 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] lg:gap-12 lg:px-16 lg:pb-[5.3125rem] lg:pt-16 xl:gap-20">
        <div className="min-w-0">
          <div>
            <p className="type-eyebrow mb-4">
              Let&apos;s Begin
            </p>
            <h1 className="page-heading mb-5 max-w-md text-navy">
              Tell us what you&apos;re navigating.<br />
              <em className="italic">We&apos;ll begin by listening.</em>
            </h1>
            <p className="page-body max-w-sm text-muted">
              Every conversation starts with where things stand today. You don’t need to have every detail organized or know exactly what support you need—share what is on your mind, and we can explore how to help.
            </p>
          </div>
        </div>
        <div className="min-w-0">
          <div className="w-full min-w-0 max-w-[40rem] [&>form]:mt-0">
            <ContactForm onSuccess={() => setIsSubmitted(true)} />
          </div>
        </div>
      </section>

      <section className="mx-auto box-border w-full max-w-[100rem] px-6 pb-[5.75rem] text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[48rem]">
          <h2 className="page-section-heading mb-2 text-navy">
            What happens next
          </h2>
          <p className="page-body-secondary mx-auto max-w-lg text-center text-muted">
            We will review what you’ve shared and get in touch via your selected preference. This initial conversation gives us a chance to walk through what you’re facing together and explore the right path forward.
          </p>
          <p className="page-body-secondary mx-auto mt-4 max-w-[42rem] text-center italic text-gold">
            We frequently collaborate with trusted advisors, physicians, and family representatives. You are welcome to use this form to initiate an introduction on behalf of a client.
          </p>
        </div>
      </section>
    </div>
  );
}
