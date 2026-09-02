"use client";

import { FormEvent, useState } from "react";

const contactMethods = ["Email", "Phone", "Either"];
type FieldName = "name" | "email" | "message" | "preferredContactMethod";
type FieldErrors = Partial<Record<FieldName, string>>;

const baseFieldClass =
  "type-input border border-divider bg-softivory text-navy outline-none transition focus:border-gold focus:ring-1 focus:ring-gold";
const errorFieldClass = "border-[#A63A3A] focus:border-[#A63A3A] focus:ring-[#A63A3A]";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: FormDataEntryValue | null) {
  const text = typeof value === "string" ? value.trim() : "";

  if (name === "name" && !text) {
    return "Please enter your name.";
  }

  if (name === "email") {
    if (!text) {
      return "Please enter your email address so we can reach you.";
    }
    if (!emailPattern.test(text)) {
      return "Please enter a valid email address.";
    }
  }

  if (name === "message" && !text) {
    return "Please share a brief note about what brings you to Alpha Care.";
  }

  if (name === "preferredContactMethod" && !text) {
    return "Please select how you would prefer we reach you.";
  }

  return "";
}

function validateForm(formData: FormData) {
  const nextErrors: FieldErrors = {};
  (["name", "email", "message", "preferredContactMethod"] as FieldName[]).forEach((field) => {
    const message = validateField(field, formData.get(field));
    if (message) {
      nextErrors[field] = message;
    }
  });
  return nextErrors;
}

type ContactFormProps = {
  onSuccess?: () => void;
};

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function fieldClass(field: FieldName, className: string) {
    return `${baseFieldClass} ${errors[field] ? errorFieldClass : ""} ${className}`;
  }

  function handleBlur(field: FieldName, value: FormDataEntryValue | null) {
    const message = validateField(field, value);
    setErrors((current) => {
      const next = { ...current };
      if (message) {
        next[field] = message;
      } else {
        delete next[field];
      }
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");
    const payload = {
      ...Object.fromEntries(formData.entries()),
      preferredMethod: formData.get("preferredContactMethod")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;

      if (!response.ok || result?.success !== true) {
        throw new Error("Unable to send inquiry");
      }

      form.reset();
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#E3DBCF]/80 bg-ivory px-6 py-16 text-center md:px-10 md:py-24" aria-live="polite">
        <h2 className="font-serif text-2xl font-normal leading-[1.25] text-navy md:text-3xl">
          Thank you for reaching out.
        </h2>
        <span className="mx-auto my-6 block w-12 border-t border-[#BA8338]/60" aria-hidden="true" />
        <div className="mx-auto max-w-md space-y-5 font-sans text-[0.9375rem] font-light leading-relaxed text-[#383431]">
          <p>Navigating care decisions requires clarity and deliberate coordination.</p>
          <p>
            We have received your note and are reviewing the details with quiet discretion. We will connect with you via your preferred method shortly to discuss how we can assist your family.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 grid">
      <label className="type-form-label mb-6 grid gap-2 text-navy">
        <span>Your name <span className="text-gold">*</span></span>
        <input
          name="name"
          required
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          onBlur={(event) => handleBlur("name", event.currentTarget.value)}
          className={fieldClass("name", "h-12 px-3")}
        />
        {errors.name ? <span id="name-error" className="text-xs text-[#A63A3A]">{errors.name}</span> : null}
      </label>
      <label className="type-form-label mb-6 grid gap-2 text-navy">
        <span>Email <span className="text-gold">*</span></span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          onBlur={(event) => handleBlur("email", event.currentTarget.value)}
          className={fieldClass("email", "h-12 px-3")}
        />
        {errors.email ? <span id="email-error" className="text-xs text-[#A63A3A]">{errors.email}</span> : null}
      </label>
      <label className="type-form-label grid gap-2 text-navy">
        Phone (optional)
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className={`${baseFieldClass} h-12 px-3`}
        />
      </label>
      <fieldset className="my-6">
        <legend className="type-form-label text-navy">
          How would you prefer we reach you?
        </legend>
        <div className="mt-3 grid gap-y-4 sm:grid-cols-3 sm:gap-x-8">
          {contactMethods.map((method) => (
            <label key={method} className="type-form-label flex min-h-11 items-center gap-2 text-navy">
              <input
                type="radio"
                name="preferredContactMethod"
                value={method}
                required
                onBlur={(event) => {
                  const form = event.currentTarget.form;
                  handleBlur("preferredContactMethod", form ? new FormData(form).get("preferredContactMethod") : null);
                }}
                onChange={() => setErrors((current) => {
                  const next = { ...current };
                  delete next.preferredContactMethod;
                  return next;
                })}
                className="h-5 w-5 appearance-none rounded-full border border-divider bg-ivory checked:border-gold checked:bg-[radial-gradient(circle_at_center,#BA8338_0_35%,transparent_39%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              />
              {method}
            </label>
          ))}
        </div>
        {errors.preferredContactMethod ? (
          <p className="mt-2 text-xs text-[#A63A3A]">{errors.preferredContactMethod}</p>
        ) : null}
      </fieldset>
      <label className="grid gap-2 font-sans text-sm font-medium text-navy">
        <span>How can we best support your family? <span className="text-gold">*</span></span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Feel free to share what is on your mind, what care needs have come up, or simply where you would like to begin..."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          onBlur={(event) => handleBlur("message", event.currentTarget.value)}
          className={fieldClass("message", "min-h-[7.5rem] resize-y px-3 py-3 placeholder:text-sm placeholder:text-grayblue/50")}
        />
        {errors.message ? <span id="message-error" className="text-xs text-[#A63A3A]">{errors.message}</span> : null}
      </label>
      <p className="my-3 max-w-2xl font-sans text-[0.9375rem] font-light italic leading-[1.85] tracking-[0.015em] text-[#3D3B39]/75">
        Your privacy is important to us. A general overview is all that’s needed to begin—we will provide a dedicated, secure channel if clinical details are ever helpful later.
      </p>
      {status === "error" ? (
        <div className="mt-6 border border-[#A63A3A]/50 bg-softivory px-4 py-3 text-sm leading-6 text-[#A63A3A]" role="alert">
          Something went wrong while sending your message. Please try again or reach out directly.
        </div>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="type-cta mt-0 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-[0.1875rem] border border-gold bg-navy px-7 py-3.5 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] disabled:cursor-wait disabled:opacity-85"
      >
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border border-gold/35 border-t-gold" aria-hidden="true" />
            SENDING...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
