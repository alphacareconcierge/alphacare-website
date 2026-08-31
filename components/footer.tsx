import { Mail, MapPin, Phone } from "lucide-react";
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
            <p className="type-body-sm mt-8 max-w-md text-ivory/72">
              Healthcare advocacy, care coordination, and continuity for families
              navigating aging with clarity and calm.
            </p>
            <DecorativeRule className="mt-8 max-w-xs" />
          </div>
          <div>
            <h2 className="type-eyebrow text-gold">
              Contact
            </h2>
            <address className="type-body-sm mt-6 space-y-4 not-italic text-ivory/78">
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
            <h2 className="type-eyebrow text-gold">
              Explore
            </h2>
            <div className="type-body-sm mt-6 grid gap-3 text-ivory/78">
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
          </div>
        </div>
        <div className="type-meta mt-12 flex flex-col gap-3 border-t border-ivory/12 pt-6 text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>{business.website}</p>
        </div>
      </div>
    </footer>
  );
}
