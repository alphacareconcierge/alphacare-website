import Link from "next/link";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-8 pt-10 text-ivory md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-12">
          <div>
            <Link
              href="/"
              className="font-serif text-[0.9375rem] font-normal uppercase tracking-[0.15em] text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="AlphaCare home"
            >
              AlphaCare
            </Link>
            <p className="mt-0.5 font-sans text-[0.625rem] font-medium uppercase tracking-[0.12em] text-gold">
              Private Concierge Care Management
            </p>
            <p className="mt-2 max-w-[16.25rem] font-sans text-xs font-normal leading-[1.5] text-ivory/75">
              Serving families throughout Massachusetts, New England, and coordinating care across state lines.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-2 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-gold">
              Navigation
            </h2>
            <ul className="space-y-1.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-xs font-normal text-ivory/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-2 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-gold">
              Inquiries
            </h2>
            <p className="mb-2 font-sans text-xs font-normal leading-[1.5] text-ivory/80">
              Every conversation begins with where things stand today.
            </p>
            <Link
              href="/contact"
              className="font-sans text-xs font-medium leading-[1.5] text-gold transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Start the conversation →
            </Link>
          </div>
        </div>

        <div className="my-6 border-t border-[#1E2F45]" />

        <p className="mx-auto mb-3 max-w-xl text-center font-sans text-[0.65625rem] font-normal leading-[1.5] text-ivory/60">
          AlphaCare provides private care management, coordination, and family advocacy. We do not provide direct emergency medical response or replace the clinical diagnoses of your physicians.
        </p>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-sans text-[0.65625rem] font-normal text-ivory/50">
            © 2026 AlphaCare Concierge Care Management. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-sans text-[0.65625rem] font-normal text-ivory/50 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-[0.65625rem] font-normal text-ivory/50 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
