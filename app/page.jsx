"use client";

import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const contactUrl = "/work-with-us#contact";

const pillars = [
  {
    title: "Assess",
    copy: "Readiness score across operations, security, AI workflow, and web presence."
  },
  {
    title: "Prioritize",
    copy: "Choose the fixes that unlock the most leverage without adding complexity."
  },
  {
    title: "Build",
    copy: "Implement automations, intake, reporting, access cleanup, and website paths."
  },
  {
    title: "Document",
    copy: "Leave the owner with plain-language docs and a repeatable operating rhythm."
  }
];

const audiences = [
  "Local service businesses",
  "Founders and solo operators",
  "Small teams with messy handoffs",
  "Community organizations"
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <Nav />
      <Hero />
      <ServiceLogic />
      <AudienceStrip />
      <FinalCTA />
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
        <a href="#operator">Operator</a>
        <a href="#services">Services</a>
        <a href="/work-with-us">Security</a>
      </nav>
      <a className="nav-cta" href={contactUrl}>
        Start
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <FadeIn className="hero-copy">
        <p className="eyebrow">Small business operator systems</p>
        <h1>Make the business easier to run.</h1>
        <p>
          Cyber Ethos helps owners find workflow gaps, apply AI where it fits,
          improve security, and clean up the systems behind daily work.
        </p>
        <div className="hero-actions">
          <a href="/work-with-us">Get an Operator Review</a>
          <a href="#services">See service paths</a>
        </div>
      </FadeIn>

      <FadeIn delay={0.12} className="operator-preview">
        <div className="preview-header">
          <span>Cyber Ethos Operator</span>
          <strong>Readiness Snapshot</strong>
        </div>
        <div className="score-ring">
          <strong>74</strong>
          <span>Operator Score</span>
        </div>
        <div className="preview-grid">
          <Metric label="Workflow" value="Needs map" />
          <Metric label="AI Fit" value="High" />
          <Metric label="Security" value="Baseline" />
          <Metric label="Website" value="Intake weak" />
        </div>
        <div className="preview-flow">
          <span>Intake</span>
          <span>Follow-up</span>
          <span>Permissions</span>
          <span>Reporting</span>
        </div>
      </FadeIn>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ServiceLogic() {
  return (
    <section id="services" className="service-section">
      <FadeIn className="section-heading">
        <p className="eyebrow">Operator Review Method</p>
        <h2>The service follows the app logic.</h2>
      </FadeIn>
      <Stagger className="pillar-grid">
        {pillars.map((pillar, index) => (
          <StaggerItem key={pillar.title}>
            <Motion.article
              className="pillar-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </Motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function AudienceStrip() {
  return (
    <section className="audience-strip">
      <FadeIn>
        <p className="eyebrow">Who This Is For</p>
        <h2>Built for owners who feel the work getting heavier.</h2>
      </FadeIn>
      <div className="audience-row">
        {audiences.map((audience) => (
          <div className="audience-item" key={audience}>
            <strong>{audience}</strong>
            <span>Less manual busywork, cleaner customer paths, stronger security habits, and a clearer next move.</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-band home-final">
      <h2>Start with the Operator Review. Build only what earns its place.</h2>
      <a href="/work-with-us">Request review</a>
    </section>
  );
}
