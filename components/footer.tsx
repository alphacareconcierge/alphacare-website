import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { DecorativeRule } from "@/components/decorative-rule";
import { business, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <BrandMark inverted />
            <p className="mt-8 max-w-md text-sm leading-7 text-ivory/72">
              Healthcare advocacy and care coordination for families navigating
              aging with clarity, continuity, and calm.
            </p>
            <DecorativeRule className="mt-8 max-w-xs" />
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Contact
            </h2>
            <address className="mt-6 space-y-4 text-sm not-italic text-ivory/78">
              <p className="flex items-center gap-3">
                <MapPin size={17} aria-hidden="true" />
                {business.location}
              </p>
              <a className="flex items-center gap-3 hover:text-gold" href={`mailto:${business.email}`}>
                <Mail size={17} aria-hidden="true" />
                {business.email}
              </a>
              <p className="flex items-center gap-3">
                <Phone size={17} aria-hidden="true" />
                Consultation by appointment
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Explore
            </h2>
            <div className="mt-6 grid gap-3 text-sm text-ivory/78">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              ))}
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-gold">
                Terms of Use
              </Link>
            </div>
            <div className="mt-8 flex gap-3" aria-label="Social links reserved for future use">
              <span className="flex h-10 w-10 items-center justify-center border border-ivory/20 text-ivory/45">
                <Linkedin size={17} aria-hidden="true" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center border border-ivory/20 text-ivory/45">
                <Instagram size={17} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/12 pt-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>{business.website}</p>
        </div>
      </div>
    </footer>
  );
}
