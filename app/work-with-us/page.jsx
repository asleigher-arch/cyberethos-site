"use client";

import { FadeIn } from "@/components/MotionPrimitives";

const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@cyberethos.org&su=Cyber%20Ethos%20Operator%20Review";

const reviewItems = [
  "Workflow gaps",
  "Security basics",
  "AI opportunities",
  "Website intake",
  "30-day cleanup plan"
];

export default function WorkWithUsPage() {
  return (
    <main className="site-shell app-site">
      <Nav />
      <section className="app-hero single">
        <FadeIn className="app-copy">
          <p className="eyebrow">Operator Review</p>
          <h1>Send the messy part.</h1>
          <p>
            Tell us what feels slow, exposed, manual, or unclear. We will turn it
            into a short operator plan.
          </p>
          <div className="hero-actions">
            <a href={emailUrl} target="_blank" rel="noreferrer">
              Request review
            </a>
            <a href="mailto:info@cyberethos.org">Email us</a>
          </div>
        </FadeIn>
      </section>

      <section className="app-section">
        <p className="eyebrow">Review Areas</p>
        <div className="compact-grid">
          {reviewItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="app-contact">
        <span>Email</span>
        <strong>info@cyberethos.org</strong>
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
        <a href="/">Home</a>
        <a href="/support">Support</a>
        <a href="/privacy">Privacy</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Contact
      </a>
    </header>
  );
}
