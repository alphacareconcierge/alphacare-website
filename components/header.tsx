"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="z-50 border-b border-gold/45 bg-ivory">
      <div className="relative h-auto min-h-[7.625rem] px-5 py-5 lg:h-[7.625rem] lg:px-8 lg:py-0">
        <Link
          href="/"
          className="block w-[20rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-[25.375rem] lg:absolute lg:left-8 lg:top-[1.0625rem]"
          aria-label="Alpha Care home"
        >
          <Image
            src="/brand/alphacare-header-lockup.png"
            alt="Alpha Care Concierge Care Management"
            width={406}
            height={84}
            priority
            className="h-auto w-full"
          />
        </Link>

        <nav
          className="mt-7 flex flex-wrap items-center gap-x-9 gap-y-4 lg:absolute lg:left-[37.25rem] lg:top-[3.0625rem] lg:mt-0 lg:gap-x-[4.25rem]"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-5 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
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
          className="mt-4 inline-flex h-[3.75rem] items-center justify-center whitespace-nowrap rounded-[0.625rem] border border-gold bg-navy px-7 text-[0.8125rem] font-semibold uppercase tracking-[0.13em] text-gold transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:px-8 lg:absolute lg:right-8 lg:top-[1.8125rem] lg:mt-0 lg:w-[16.8125rem]"
        >
          Start the Conversation
        </Link>
      </div>
    </header>
  );
}
