"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-50 overflow-x-hidden border-b border-divider bg-ivory">
      <div className="relative flex min-h-[5.75rem] w-full max-w-full items-center justify-between gap-3 px-5 py-4 lg:h-[5.75rem] lg:gap-6 lg:px-9 lg:py-0 min-[1400px]:h-[7.625rem] min-[1400px]:px-8">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 shrink items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:gap-5 lg:max-w-none lg:shrink-0 min-[1400px]:gap-7"
          aria-label="Alpha Care home"
        >
          <Image
            src="/brand/alphacare-monogram.png"
            alt=""
            width={88}
            height={107}
            priority
            className="h-auto w-[3.75rem] object-contain lg:w-[4.25rem] min-[1400px]:w-[5.5rem]"
          />
          <span className="hidden h-[3.75rem] w-px bg-gold/55 sm:block min-[1400px]:h-[4.25rem]" aria-hidden="true" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="type-brand-name text-[1.125rem] text-navy sm:text-[1.75rem] lg:text-[1.75rem] min-[1400px]:text-[2.375rem]">
              Alpha<span className="text-gold">Care</span>
            </span>
            <span className="type-brand-subline mt-2 text-[0.5rem] text-navy sm:text-[0.5625rem] lg:mt-3 min-[1400px]:mt-4 min-[1400px]:text-[0.75rem]">
              Concierge Care Management
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="fixed right-5 top-6 z-[60] flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.25rem] border border-gold/60 bg-ivory text-navy transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden"
          style={{ position: "fixed", right: "1.25rem", top: "1.5rem", zIndex: 60 }}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative h-4 w-6" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-px w-6 bg-gold transition ${menuOpen ? "translate-y-[0.4375rem] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[0.4375rem] h-px w-6 bg-navy transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-gold transition ${menuOpen ? "-translate-y-[0.4375rem] -rotate-45" : ""}`} />
          </span>
        </button>

        <nav
          className="hidden flex-wrap items-center gap-x-9 gap-y-4 lg:flex lg:flex-nowrap lg:gap-x-9 min-[1400px]:gap-x-[4.25rem]"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`type-nav relative pb-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                pathname === item.href
                  ? "text-gold after:absolute after:bottom-2 after:left-0 after:h-px after:w-12 after:bg-gold"
                  : "text-navy hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="type-cta hidden shrink-0 items-center justify-center whitespace-nowrap rounded-[0.1875rem] border border-gold bg-navy px-[1.625rem] py-3 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:inline-flex min-[1400px]:px-8 min-[1400px]:py-3.5"
        >
          Start the Conversation
        </Link>
      </div>
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[5.75rem] z-40 border-b border-divider bg-ivory px-6 py-8 shadow-soft transition duration-300 lg:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="grid gap-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`type-nav flex min-h-11 items-center justify-center border-b border-divider/70 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                pathname === item.href ? "text-gold" : "text-navy hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="type-cta mt-8 flex min-h-12 items-center justify-center rounded-[0.1875rem] border border-gold bg-navy px-7 py-3.5 text-gold transition-all duration-300 ease-in-out hover:border-gold hover:bg-[#132640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Start the Conversation
        </Link>
      </div>
    </header>
  );
}
