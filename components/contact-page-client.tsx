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
      <section className="ac-shell grid items-start gap-y-8 py-12 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:py-16">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <div className="mb-4 flex items-center gap-4">
            <span className="block h-px w-8 shrink-0 bg-gold/40" aria-hidden="true" />
            <p className="ac-eyebrow">
              CONTACT ALPHACARE
            </p>
          </div>
          <h1 className="ac-heading-1">
            Tell us what’s happening. <em className="block">We’ll start there.</em>
          </h1>
          <p className="ac-body ac-copy-gap">
            You do not need to know exactly what kind of support you need before reaching out. A brief overview of what is happening is enough to begin.
          </p>
        </div>
        <div className="min-w-0 border-divider lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:border-l lg:pl-6">
          <div className="w-full">
            <ContactForm onSuccess={() => setIsSubmitted(true)} />
          </div>
        </div>
        <section className="min-w-0 lg:col-start-1 lg:row-start-2" aria-labelledby="contact-next-heading">
          <h2 id="contact-next-heading" className="ac-heading-2">
            What happens next
          </h2>
          <p className="ac-body mt-4">
            Each inquiry is reviewed thoughtfully. If AlphaCare may be an appropriate fit, we will reach out to arrange a complimentary introductory conversation.
          </p>
        </section>
      </section>
    </div>
  );
}
