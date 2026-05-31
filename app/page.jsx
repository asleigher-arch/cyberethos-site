"use client";

import { FadeIn, Motion } from "@/components/MotionPrimitives";

const whopUrl = "https://whop.com/cyber-ethos/";
const contactUrl = "/work-with-us#contact";

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteWatermark />
      <Nav />
      <Hero />
      <HomeSummary />
      <FinalCTA />
    </main>
  );
}

function SiteWatermark() {
  return (
    <div className="site-watermark" aria-hidden="true">
      <div className="watermark-glow" />
      <div className="watermark-image" />
    </div>
  );
}

function Nav() {
  return (
    <header className="nav-glass">
      <a href="/" className="brand">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/work-with-us">Work With Us</a>
      </nav>
      <a className="nav-cta" href={contactUrl}>
        Contact
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <FadeIn className="hero-content">
        <p className="eyebrow">AI automation, secure web systems, and information security</p>
        <h1>Mission-driven AI automation. Secure systems. Real impact.</h1>
        <p>
          Cyber Ethos helps small businesses automate repetitive work, improve their
          digital presence, and protect the systems they rely on every day.
        </p>
        <div className="hero-actions">
          <a href="/work-with-us">See what we build</a>
          <a href={contactUrl}>Start a project</a>
          <a className="whop-link" href={whopUrl} target="_blank" rel="noreferrer">
            Join Whop - $29/mo
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.12} className="hero-panel">
        <div className="panel-topline">
          <span>Operating System</span>
          <strong>Cyber Ethos</strong>
        </div>
        <div className="signal-card primary">
          <span>01</span>
          <strong>Automate the repeatable.</strong>
          <p>Lead intake, research, content, follow-ups, reporting, and internal workflows.</p>
        </div>
        <div className="signal-grid">
          <div className="signal-card">
            <span>02</span>
            <strong>Improve the website.</strong>
          </div>
          <div className="signal-card">
            <span>03</span>
            <strong>Protect the operation.</strong>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function HomeSummary() {
  return (
    <section className="home-summary">
      <FadeIn>
        <p className="eyebrow">What Cyber Ethos Does</p>
        <h2>Simple systems for businesses that need less chaos and more control.</h2>
      </FadeIn>
      <div className="summary-row">
        {["Automation", "Web Systems", "Security"].map((item, index) => (
          <Motion.a
            href="/work-with-us"
            key={item}
            className="summary-pill"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </Motion.a>
        ))}
      </div>
      <FadeIn delay={0.12} className="whop-card">
        <div>
          <p className="eyebrow">Community</p>
          <h3>Join the Cyber Ethos Whop community for $29/month.</h3>
          <p>
            Learn AI automation, secure workflows, web systems, and practical tools
            for building a sharper modern business.
          </p>
        </div>
        <a href={whopUrl} target="_blank" rel="noreferrer">
          Join Whop
        </a>
      </FadeIn>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-band compact">
      <FadeIn>
        <p className="eyebrow">Start Here</p>
        <h2>Tell us what feels slow, messy, or exposed.</h2>
        <p>We will help turn it into a cleaner system.</p>
        <a href="/work-with-us">Work with Cyber Ethos</a>
      </FadeIn>
    </section>
  );
}
