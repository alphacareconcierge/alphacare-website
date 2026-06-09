"use client";

import { FormEvent, useState } from "react";

const relationshipOptions = [
  "Adult child",
  "Spouse or partner",
  "Sibling",
  "Extended family",
  "Professional advisor",
  "Other"
];

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
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 border border-gold/35 bg-white/65 p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="border border-navy/15 bg-ivory px-4 py-3 font-normal text-navy outline-none transition focus:border-gold"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="border border-navy/15 bg-ivory px-4 py-3 font-normal text-navy outline-none transition focus:border-gold"
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone <span className="font-normal text-grayblue">(optional)</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="border border-navy/15 bg-ivory px-4 py-3 font-normal text-navy outline-none transition focus:border-gold"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Relationship to Client
          <select
            name="relationship"
            required
            className="border border-navy/15 bg-ivory px-4 py-3 font-normal text-navy outline-none transition focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {relationshipOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Preferred Contact Method
        <select
          name="preferredContactMethod"
          required
          className="border border-navy/15 bg-ivory px-4 py-3 font-normal text-navy outline-none transition focus:border-gold"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {contactMethods.map((method) => (
            <option key={method}>{method}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Brief Description of Needs
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y border border-navy/15 bg-ivory px-4 py-3 font-normal text-navy outline-none transition focus:border-gold"
        />
      </label>
      <p className="border-l-2 border-gold pl-4 text-sm leading-6 text-grayblue">
        Please do not include detailed medical information or protected health
        information (PHI) in this form. Sensitive information will be collected
        through a secure process after initial contact.
      </p>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex justify-center border border-gold bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-transparent disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting" : "Start the Conversation"}
      </button>
      <div aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="text-navy">Thank you. AlphaCare will follow up with you soon.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-red-700">
            Your inquiry could not be sent. Please email hello@alphacareconcierge.com.
          </p>
        ) : null}
      </div>
    </form>
  );
}
