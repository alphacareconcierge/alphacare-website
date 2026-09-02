import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | AlphaCare Concierge Care Management",
  description:
    "Start the conversation with AlphaCare. Share what your family is navigating, and we’ll begin by listening.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="bg-ivory text-navy">
      <section className="grid items-start px-6 pb-[5.75rem] pt-12 sm:px-12 lg:grid-cols-[46%_54%] lg:px-[19.25rem] lg:pb-[5.3125rem] lg:pt-16 min-[2200px]:px-[25.5rem]">
        <div className="pt-2 lg:pr-[4.5rem] lg:pt-4">
          <div>
            <p className="mb-4 font-sans text-[0.65625rem] font-medium uppercase tracking-[0.16em] text-gold">
              Let&apos;s Begin
            </p>
            <h1 className="mb-5 max-w-md font-serif text-[clamp(1.75rem,2.4vw,2.15rem)] font-light leading-[1.3] text-navy">
              Tell us what you&apos;re navigating.<br />
              <em className="font-serif font-light italic">We&apos;ll begin by listening.</em>
            </h1>
            <p className="max-w-sm font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
              Every conversation starts with where things stand today. You don’t need to have every detail organized or know exactly what support you need—share what is on your mind, and we can explore how to help.
            </p>
          </div>
        </div>
        <div className="border-divider lg:border-l lg:pl-[4.5rem]">
          <div className="max-w-[52.5rem]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-6 pb-[5.75rem] text-center sm:px-12">
        <div className="mx-auto max-w-[48rem]">
          <h2 className="mb-2 font-serif text-[1.5rem] font-normal leading-[1.25] text-navy">
            What happens next
          </h2>
          <p className="mx-auto max-w-lg text-center font-sans text-[0.9375rem] font-light leading-[1.85] tracking-[0.015em] text-[#3D3B39]">
            We will review what you’ve shared and get in touch via your selected preference. This initial conversation gives us a chance to walk through what you’re facing together and explore the right path forward.
          </p>
          <p className="mx-auto mt-4 max-w-[42rem] text-center font-sans text-[0.8125rem] font-normal italic leading-[1.6] text-gold">
            We frequently collaborate with trusted advisors, physicians, and family representatives. You are welcome to use this form to initiate an introduction on behalf of a client.
          </p>
        </div>
      </section>
    </div>
  );
}
