"use client";

import { FadeIn } from "@/components/MotionPrimitives";

const results = ["Operator Score", "Risk areas", "Automation fit", "30-day cleanup plan"];

export default function HomePage() {
  return (
    <main className="site-shell app-site">
      <Nav />
      <section className="three-page-hero preview-hero">
        <div className="phone-watermark" aria-hidden="true">
          <img src="/images/operator-report-preview.png" alt="" />
        </div>
        <FadeIn className="three-copy">
          <p className="eyebrow">Preview</p>
          <h1>See what the report looks like.</h1>
          <p>
            Cyber Ethos gives small business owners a clear snapshot of what to
            clean up first.
          </p>
          <div className="hero-actions">
            <a href="/visibility">What we help with</a>
            <a href="/contact">Contact</a>
          </div>
        </FadeIn>

      </section>

      <section className="mini-section">
        <p className="eyebrow">Results</p>
        <div className="mini-grid">
          {results.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

function Nav() {
  return (
    <header className="nav-bar">
      <a href="/" className="brand">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Preview</a>
        <a href="/visibility">Visibility</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="nav-cta" href="/contact">
        Start
      </a>
    </header>
  );
}
