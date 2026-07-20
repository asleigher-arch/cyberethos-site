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

const findings = [
  { label: "Security basics", status: "Tighten first" },
  { label: "Operations", status: "Cleanup needed" },
  { label: "Automation fit", status: "Useful with guardrails" }
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
          <div className="report-card-top">
            <div>
              <span>Operator Score</span>
              <strong>54</strong>
            </div>
            <p>
              Security first. Useful automation potential after access,
              backups, and handoffs are cleaned up.
            </p>
          </div>

          <div className="report-findings">
            {findings.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.status}</strong>
              </div>
            ))}
          </div>

          <div className="report-image">
            <div className="phone-preview">
              <img
                src="/images/operator-report-preview.png"
                alt="Cyber Ethos Operator score report preview"
              />
            </div>
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
