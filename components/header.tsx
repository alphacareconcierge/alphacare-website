"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="z-50 border-b border-divider bg-ivory">
      <div className="flex min-h-[5.75rem] flex-col gap-5 px-5 py-5 lg:h-[5.75rem] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-9 lg:py-0 min-[1400px]:h-[7.625rem] min-[1400px]:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:gap-5 min-[1400px]:gap-7"
          aria-label="Alpha Care home"
        >
          <Image
            src="/brand/alphacare-monogram.png"
            alt=""
            width={88}
            height={107}
            priority
            className="h-auto w-[4.25rem] object-contain lg:w-[4.25rem] min-[1400px]:w-[5.5rem]"
          />
          <span className="hidden h-[3.75rem] w-px bg-gold/55 sm:block min-[1400px]:h-[4.25rem]" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="type-brand-name text-[1.55rem] text-navy sm:text-[1.75rem] min-[1400px]:text-[2.375rem]">
              Alpha<span className="text-gold">Care</span>
            </span>
            <span className="type-brand-subline mt-3 text-[0.55rem] text-navy sm:text-[0.5625rem] min-[1400px]:mt-4 min-[1400px]:text-[0.75rem]">
              Concierge Care Management
            </span>
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center gap-x-9 gap-y-4 lg:flex-nowrap lg:gap-x-9 min-[1400px]:gap-x-[4.25rem]"
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
          className="type-cta inline-flex h-[3.125rem] shrink-0 items-center justify-center whitespace-nowrap rounded-[0.3125rem] border border-gold bg-navy px-5 text-[0.75rem] text-gold transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:w-[12.5rem] min-[1400px]:h-[3.75rem] min-[1400px]:w-[16.75rem] min-[1400px]:px-8 min-[1400px]:text-[0.8125rem]"
        >
          Start the Conversation
        </Link>
      </div>
    </header>
  );
}
