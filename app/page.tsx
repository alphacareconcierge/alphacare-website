import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="ac-home">
      <section className="ac-home-hero" aria-labelledby="home-heading">
        <div className="ac-hero-landscape">
          <Image
            src="/hero-coastal-beacon.png"
            alt="Coastal New England lighthouse above rocky shoreline at golden hour"
            fill
            priority
            sizes="100vw"
            className="ac-hero-image"
          />
          <div className="ac-hero-wash" aria-hidden="true" />
          <p className="ac-hero-caption">Steady Through<br />What Changes</p>
        </div>

        <div className="ac-shell ac-hero-content">
          <div className="ac-hero-copy">
            <p className="ac-eyebrow ac-hero-eyebrow">
              Exceptional Care. A More Certain Path.
            </p>
            <h1 id="home-heading" className="ac-home-heading">
              When care becomes complicated, it helps to have someone beside you.
            </h1>
            <p className="ac-body ac-hero-body">
              AlphaCare works with families to understand what is happening, keep important information connected, and navigate decisions as needs change.
            </p>
            <Link href="/contact" className="ac-button">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="ac-home-narrative" aria-labelledby="home-narrative-heading">
        <div className="ac-shell ac-narrative-layout">
          <div className="ac-narrative-copy">
            <p className="ac-eyebrow">Life Doesn&apos;t Come With a Roadmap.</p>
            <h2 id="home-narrative-heading" className="ac-heading-2">
              There is a great deal to hold when someone you love needs care.
            </h2>
            <div className="ac-body ac-narrative-body">
              <p>
                Appointments. Decisions. Questions that arise later. Information shared with one person but needed by another. Changes that seem small until they are not.
              </p>
              <p>
                AlphaCare brings thoughtful attention to the details, helping families understand what is happening, what needs attention, and what comes next.
              </p>
            </div>
          </div>
          <aside className="ac-narrative-note">
            <span className="ac-rule" aria-hidden="true" />
            <p className="ac-heading-3 italic">Thoughtful support for what matters most.</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
