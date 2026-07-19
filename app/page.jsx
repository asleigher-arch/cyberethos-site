"use client";

import { FadeIn } from "@/components/MotionPrimitives";

const checks = ["Operations", "Security", "AI readiness", "Web intake"];
const results = ["Operator Score", "Top findings", "Next moves", "30-day plan"];

export default function HomePage() {
  return (
    <main className="site-shell app-site">
      <Nav />
      <section className="app-hero">
        <FadeIn className="app-copy">
          <p className="eyebrow">Cyber Ethos Operator</p>
          <h1>Know what to fix next.</h1>
          <p>
            A simple operator review for small businesses. See workflow gaps,
            security basics, AI opportunities, and next steps.
          </p>
          <div className="hero-actions">
            <a href="/work-with-us">Request review</a>
            <a href="/support">App support</a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="phone-card">
          <div className="phone-top">
            <span>Operator Score</span>
            <strong>74</strong>
          </div>
          <div className="phone-list">
            {checks.map((item) => (
              <div key={item}>
                <span>{item}</span>
                <strong>Review</strong>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="app-section">
        <p className="eyebrow">What It Checks</p>
        <div className="compact-grid">
          {checks.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="app-section">
        <p className="eyebrow">What You Get</p>
        <div className="compact-grid">
          {results.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="app-cta">
        <h2>Start with a review. Build only what matters.</h2>
        <a href="/work-with-us">Get started</a>
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
        <a href="/work-with-us">Review</a>
        <a href="/support">Support</a>
        <a href="/privacy">Privacy</a>
      </nav>
      <a className="nav-cta" href="/work-with-us">
        Start
      </a>
    </header>
  );
}
