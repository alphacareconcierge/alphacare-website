import Link from "next/link";

export function ClosingInvitation({ buttonLabel = "Begin a conversation" }: { buttonLabel?: string }) {
  return (
    <section
      className="ac-closing-invitation bg-ivory"
      aria-labelledby="closing-invitation-heading"
    >
      <div className="ac-shell">
        <h2 id="closing-invitation-heading" className="ac-heading-2">
          When you&rsquo;re ready, tell us what&rsquo;s happening.
        </h2>
        <p className="ac-body ac-copy-gap">
          We&rsquo;ll begin by discussing your circumstances and whether AlphaCare may be a fit.
        </p>
        <Link href="/contact" className="ac-button ac-cta-gap">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
