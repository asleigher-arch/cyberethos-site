"use client";

import { SiteLayout } from "@/components/SiteLayout";

const services = [
  {
    title: "Operations review",
    text: "Find dropped follow-ups, unclear owners, and manual work that slows the business down."
  },
  {
    title: "Security basics",
    text: "Check access, backups, passwords, vendor risk, and sensitive data handling."
  },
  {
    title: "AI workflow fit",
    text: "Spot where AI can help without giving up control or creating new risk."
  },
  {
    title: "Website intake",
    text: "Clean up the path from visitor to request so leads are easier to handle."
  }
];

const metrics = [
  {
    score: "54",
    label: "overall",
    title: "Security first",
    status: "Low",
    tone: "amber",
    text: "Useful automation potential, but access and backups should be tightened first."
  },
  {
    score: "41",
    label: "ops",
    title: "Operations readiness",
    status: "Foundation gap",
    tone: "orange",
    text: "Follow-up, task ownership, and workflow documentation need cleanup."
  },
  {
    score: "36",
    label: "security",
    title: "Security readiness",
    status: "Needs work",
    tone: "red",
    text: "MFA, passwords, access, backups, and recovery should be tightened first."
  },
  {
    score: "76",
    label: "potential",
    title: "Automation potential",
    status: "Solid baseline",
    tone: "green",
    text: "Repeated admin work and follow-up create strong automation opportunities."
  }
];

export default function HomePage() {
  return (
    <SiteLayout active="/">
      <section className="operator-hero">
        <div className="hero-brief">
          <p className="eyebrow">Small Business Operator Systems</p>
          <h1>A clear view of what to fix inside your business.</h1>
          <p>
            Cyber Ethos reviews operations, security basics, AI workflow fit,
            and web intake so you know what to clean up first.
          </p>
          <div className="hero-actions">
            <a href="/contact">Request review</a>
            <a href="/visibility">What you get</a>
          </div>
        </div>

        <div className="report-card" aria-label="Operator report preview">
          <div className="report-heading">
            <div>
              <p className="eyebrow">Visual Report</p>
              <h2>Your Operator Score</h2>
            </div>
            <strong>54</strong>
          </div>

          <div className="metric-stack">
            {metrics.map((metric) => (
              <article className={`metric-card ${metric.tone}`} key={metric.title}>
                <div className="metric-score">
                  <strong>{metric.score}</strong>
                  <span>{metric.label}</span>
                </div>
                <div className="metric-copy">
                  <div>
                    <h3>{metric.title}</h3>
                    <span>{metric.status}</span>
                  </div>
                  <div className="metric-bar" aria-hidden="true">
                    <span style={{ width: `${metric.score}%` }} />
                  </div>
                  <p>{metric.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="operator-section" id="services">
        <div className="section-title">
          <p className="eyebrow">Services</p>
          <h2>Practical help for owners who need clarity.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
