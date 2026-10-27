"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";

export function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="ac-contact bg-ivory text-navy">
        <section className="ac-shell ac-section flex min-h-[calc(100vh-5.75rem)] items-center justify-center">
          <div className="mx-auto max-w-2xl border border-[#E3DBCF]/80 bg-ivory px-6 py-16 text-center md:px-10 md:py-24" aria-live="polite">
            <h1 className="ac-heading-1">
              Thank you for reaching out.
            </h1>
            <div className="mx-auto my-6 w-12 border-t border-gold/60" aria-hidden="true" />
            <div className="ac-body ac-paragraphs mx-auto">
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
    <div className="ac-contact bg-ivory text-navy">
      <section className="ac-shell ac-section ac-grid grid items-start lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]">
        <div>
          <div>
            <p className="ac-eyebrow mb-4">
              Let&apos;s Begin
            </p>
            <h1 className="ac-heading-1">
              Tell us what you&apos;re navigating. <em>We&apos;ll begin by listening.</em>
            </h1>
            <p className="ac-body ac-copy-gap">
              Every conversation starts with where things stand today. You don’t need to have every detail organized or know exactly what support you need—share what is on your mind, and we can explore how to help.
            </p>
          </div>
        </div>
        <div className="border-divider lg:border-l lg:pl-6">
          <div className="w-full">
            <ContactForm onSuccess={() => setIsSubmitted(true)} />
          </div>
        </div>
      </section>

      <section className="ac-shell ac-section-end text-center">
        <div className="mx-auto max-w-[48rem]">
          <h2 className="ac-heading-2">
            What happens next
          </h2>
          <p className="ac-body ac-copy-gap mx-auto text-center">
            We will review what you’ve shared and get in touch via your selected preference. This initial conversation gives us a chance to walk through what you’re facing together and explore the right path forward.
          </p>
          <p className="ac-body mx-auto mt-[var(--ac-paragraph-gap)] text-center">
            We frequently collaborate with trusted advisors, physicians, and family representatives. You are welcome to use this form to initiate an introduction on behalf of a client.
          </p>
        </div>
      </section>
    </div>
  );
}
