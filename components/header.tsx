"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="z-50 border-b border-divider bg-ivory">
      <div className="relative h-auto min-h-[7.125rem] px-5 py-5 lg:h-[7.125rem] lg:px-8 lg:py-0">
        <Link
          href="/"
          className="flex items-center gap-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:gap-8 lg:absolute lg:left-8 lg:top-[1.625rem]"
          aria-label="Alpha Care home"
        >
          <Image
            src="/brand/alphacare-monogram.png"
            alt=""
            width={88}
            height={107}
            priority
            className="h-auto w-[4.25rem] object-contain sm:w-[5.25rem]"
          />
          <span className="hidden h-[4.25rem] w-px bg-gold/55 sm:block" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.55rem] font-medium uppercase tracking-[0.16em] text-navy sm:text-[2.375rem] sm:tracking-[0.18em]">
              Alpha<span className="text-gold">Care</span>
            </span>
            <span className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-navy sm:mt-4 sm:text-[0.75rem] sm:tracking-[0.34em]">
              Concierge Care Management
            </span>
          </span>
        </Link>

        <nav
          className="mt-7 flex flex-wrap items-center gap-x-9 gap-y-4 lg:absolute lg:left-[43.5rem] lg:top-[3.1875rem] lg:mt-0 lg:gap-x-[3.875rem]"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
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
          className="mt-4 inline-flex h-[3.5rem] items-center justify-center whitespace-nowrap rounded-[0.625rem] border border-gold bg-navy px-7 text-[0.8125rem] font-semibold uppercase tracking-[0.13em] text-gold transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:px-8 lg:absolute lg:right-8 lg:top-[1.8125rem] lg:mt-0 lg:w-[16.125rem]"
        >
          Start the Conversation
        </Link>
      </div>
    </header>
  );
}
