"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header ref={header} className="ac-header">
      <div className="ac-shell ac-header-row">
        <Link href="/" onClick={() => setMenuOpen(false)} className="ac-brand-link ac-focus" aria-label="AlphaCare home">
          {/* Approved AlphaCare brand asset — do not alter or replace. */}
          <span className="ac-header-logo-frame">
            <Image
              src="/brand/alphacare-logo.png"
              alt=""
              width={1254}
              height={1254}
              sizes="157px"
              priority
              className="ac-header-logo"
            />
          </span>
          {/* Approved AlphaCare brand asset — do not alter or replace. */}
          <Image
            src="/brand/alphacare-monogram.png"
            alt=""
            width={88}
            height={107}
            priority
            className="ac-header-mark"
          />
        </Link>

        <nav className="ac-desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="ac-nav-link ac-focus"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="ac-button ac-header-cta">
          START THE CONVERSATION
        </Link>

        <button
          ref={menuButton}
          type="button"
          className="ac-menu-toggle ac-focus"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} strokeWidth={1.25} aria-hidden="true" /> : <Menu size={24} strokeWidth={1.25} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="ac-mobile-menu">
          <div className="ac-shell">
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="ac-nav-link ac-focus"
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </nav>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="ac-button">
              START THE CONVERSATION
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
