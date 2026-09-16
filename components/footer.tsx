import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="ac-footer">
      <div className="ac-shell">
        <div className="ac-footer-top">
          <div>
            <Link href="/" className="ac-footer-name ac-focus" aria-label="AlphaCare home">
              AlphaCare
            </Link>
            <p className="ac-footer-descriptor">Private Concierge Care Management</p>
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
        <p className="ac-footer-scope">
          AlphaCare provides private care management, coordination, and family advocacy. We do not provide direct emergency medical response or replace the clinical diagnoses of your physicians.
        </p>
        <div className="ac-footer-bottom">
          <p>© 2026 AlphaCare Concierge Care Management. All rights reserved.</p>
          <div className="ac-footer-links">
            <Link href="/privacy" className="ac-footer-link ac-focus">Privacy Policy</Link>
            <Link href="/terms" className="ac-footer-link ac-focus">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
