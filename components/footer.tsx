import Link from "next/link";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto box-border w-full max-w-[100rem] px-6 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-serif text-xl font-normal uppercase leading-7 tracking-[0.15em] text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="AlphaCare home"
            >
              AlphaCare
            </Link>
            <p className="mt-0.5 font-sans text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-gold">
              Private Concierge Care Management
            </p>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center font-sans text-sm font-normal leading-relaxed text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <div className="my-6 border-t border-ivory/15" aria-hidden="true" />

        <p className="mb-4 max-w-4xl font-sans text-sm font-normal leading-relaxed text-ivory">
          AlphaCare provides private care management, coordination, and family advocacy. We do not provide direct emergency medical response or replace the clinical diagnoses of your physicians.
        </p>

        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <p className="font-sans text-sm font-normal leading-relaxed text-ivory">
            © 2026 AlphaCare Concierge Care Management. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center font-sans text-sm font-normal leading-relaxed text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-11 items-center font-sans text-sm font-normal leading-relaxed text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
