"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";

export function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="ac-contact bg-ivory text-navy">
        <section className="flex min-h-[calc(100vh-5.75rem)] items-center justify-center px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl border border-[#E3DBCF]/80 bg-ivory px-6 py-16 text-center md:px-10 md:py-24" aria-live="polite">
            <h1 className="ac-heading-1">
              Thank you for reaching out.
            </h1>
            <div className="mx-auto my-6 w-12 border-t border-gold/60" aria-hidden="true" />
            <div className="ac-secondary-copy mx-auto max-w-md space-y-5">
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
      <section className="grid items-start px-6 pb-[5.75rem] pt-12 sm:px-12 lg:grid-cols-[46%_54%] lg:px-[clamp(4rem,calc((100%_-_72rem)/2),19.25rem)] lg:pb-[5.3125rem] lg:pt-16 min-[2200px]:px-[25.5rem]">
        <div className="pt-2 lg:pr-[4.5rem] lg:pt-4">
          <div>
            <p className="ac-eyebrow mb-4">
              Let&apos;s Begin
            </p>
            <h1 className="ac-heading-1 mb-5 max-w-md">
              Tell us what you&apos;re navigating.<br />
              <em className="italic">We&apos;ll begin by listening.</em>
            </h1>
            <p className="ac-body-copy max-w-sm">
              Every conversation starts with where things stand today. You don’t need to have every detail organized or know exactly what support you need—share what is on your mind, and we can explore how to help.
            </p>
          </div>
        </div>
        <div className="border-divider lg:border-l lg:pl-[4.5rem]">
          <div className="max-w-[52.5rem]">
            <ContactForm onSuccess={() => setIsSubmitted(true)} />
          </div>
        </div>
      </section>

      <section className="px-6 pb-[5.75rem] text-center sm:px-12">
        <div className="mx-auto max-w-[48rem]">
          <h2 className="ac-heading-2 mb-2">
            What happens next
          </h2>
          <p className="ac-secondary-copy mx-auto max-w-lg text-center">
            We will review what you’ve shared and get in touch via your selected preference. This initial conversation gives us a chance to walk through what you’re facing together and explore the right path forward.
          </p>
          <p className="ac-secondary-copy mx-auto mt-4 max-w-[42rem] text-center italic">
            We frequently collaborate with trusted advisors, physicians, and family representatives. You are welcome to use this form to initiate an introduction on behalf of a client.
          </p>
        </div>
      </section>
    </div>
  );
}
