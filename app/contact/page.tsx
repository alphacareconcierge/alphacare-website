import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact-page-client";

export const metadata: Metadata = {
  title: "Contact | AlphaCare Concierge Care Management",
  description:
    "Start the conversation with AlphaCare. Share what your family is navigating, and we’ll begin by listening.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return <ContactPageClient />;
}
