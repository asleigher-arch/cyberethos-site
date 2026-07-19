"use client";

import { FadeIn } from "@/components/MotionPrimitives";

const services = [
  "Operations review",
  "Security basics",
  "AI workflow opportunities",
  "Website and intake cleanup",
  "Clear next steps"
];

export default function VisibilityPage() {
  return (
    <main className="site-shell app-site">
      <Nav />
      <section className="three-page-hero single">
        <FadeIn className="three-copy">
          <p className="eyebrow">Visibility</p>
          <h1>Know what is happening inside your business.</h1>
          <p>
            We help you see where work gets stuck, where risk is building, and
            what can be safely improved with better systems or AI.
          </p>
          <div className="hero-actions">
            <a href="/contact">Request review</a>
            <a href="/">See preview</a>
          </div>
        </FadeIn>
      </section>

      <section className="mini-section">
        <p className="eyebrow">Services</p>
        <div className="mini-grid">
          {services.map((item) => (
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
