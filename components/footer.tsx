import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="ac-footer">
      <div className="ac-shell">
        <div className="ac-footer-top">
          <div>
            <Link href="/" className="ac-footer-name ac-focus" aria-label="AlphaCare home">
              {/* Approved AlphaCare brand asset - do not alter or replace. */}
              <Image
                src="/brand/alphacare-monogram.png"
                alt=""
                width={440}
                height={535}
                sizes="(min-width: 1024px) 53px, 46px"
                className="ac-footer-monogram"
              />
              <span className="ac-footer-wordmark">
                <span className="ac-footer-brand-name">
                  ALPHA<span className="text-gold">CARE</span>
                </span>
                <span className="ac-footer-descriptor">CONCIERGE CARE MANAGEMENT</span>
              </span>
            </Link>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="ac-footer-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="ac-footer-link ac-focus">{item.label.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="ac-footer-rule" aria-hidden="true" />
        <div className="ac-footer-lower">
          <p className="ac-footer-scope">
            AlphaCare provides private care management, coordination, and family advocacy. We do not provide direct emergency medical response or replace the clinical diagnoses of your physicians.
          </p>
          <div className="ac-footer-bottom">
            <p>© 2026 AlphaCare Concierge Care Management. All rights reserved.</p>
            <div className="ac-footer-links">
              <Link href="/privacy" className="ac-footer-link ac-text-link ac-focus">Privacy Policy</Link>
              <Link href="/terms" className="ac-footer-link ac-text-link ac-focus">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
