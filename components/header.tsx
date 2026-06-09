import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <BrandMark compact />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/78 transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden border border-gold bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:inline-flex"
        >
          Start the Conversation
        </Link>
        <Link
          href="/contact"
          className="inline-flex border border-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-navy transition hover:bg-gold md:hidden"
        >
          Start
        </Link>
      </div>
      <nav
        className="flex justify-center gap-6 border-t border-navy/10 px-5 py-3 md:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-navy/80">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
