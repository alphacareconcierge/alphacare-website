"use client";

import { FormEvent, useState } from "react";

const contactMethods = ["Email", "Phone", "Either"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Unable to send inquiry");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-[1.375rem]">
      <label className="type-form-label grid gap-2 text-navy">
        <span>Your name <span className="text-gold">*</span></span>
        <input
          name="name"
          required
          autoComplete="name"
          className="type-input h-[2.625rem] border border-divider bg-ivory px-3 text-navy outline-none transition focus:border-gold"
        />
      </label>
      <label className="type-form-label grid gap-2 text-navy">
        <span>Email <span className="text-gold">*</span></span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="type-input h-[2.625rem] border border-divider bg-ivory px-3 text-navy outline-none transition focus:border-gold"
        />
      </label>
      <label className="type-form-label grid gap-2 text-navy">
        Phone (optional)
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className="type-input h-[2.625rem] border border-divider bg-ivory px-3 text-navy outline-none transition focus:border-gold"
        />
      </label>
      <fieldset className="grid gap-3">
        <legend className="type-form-label text-navy">
          How would you prefer we reach you?
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <label key={method} className="type-form-label flex items-center gap-3 text-navy">
              <input
                type="radio"
                name="preferredContactMethod"
                value={method}
                required
                className="h-5 w-5 appearance-none rounded-full border border-divider bg-ivory checked:border-gold checked:bg-[radial-gradient(circle_at_center,#BA8338_0_35%,transparent_39%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="type-form-label grid gap-2 text-navy">
        <span>What brings you to Alpha Care? <span className="text-gold">*</span></span>
        <textarea
          name="message"
          required
          rows={5}
          className="type-input min-h-[7.5rem] resize-y border border-divider bg-ivory px-3 py-3 text-navy outline-none transition focus:border-gold"
        />
      </label>
      <p className="type-helper max-w-[39rem]">
        There’s no need to share medical records or sensitive health information here.
        If additional information is needed, we’ll provide a secure way to share it.
      </p>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="type-cta h-[3.0625rem] w-full rounded-[0.25rem] border border-navy bg-navy text-gold transition hover:bg-navy/95 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Sending" : "Send Message"}
      </button>
      <div aria-live="polite" className="type-body-sm min-h-6">
        {status === "success" ? (
          <p className="text-navy">Thank you. Alpha Care will follow up with you soon.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-red-700">
            Your message could not be sent. Please email hello@alphacareconcierge.com.
          </p>
        ) : null}
      </div>
    </form>
  );
}
