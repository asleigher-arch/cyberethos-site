"use client";

import { SiteLayout } from "@/components/SiteLayout";

const proofPoints = [
  "Small business tech cleanup",
  "Security-minded handoffs",
  "VA and offshore support",
  "Practical engineering help"
];

const services = [
  {
    eyebrow: "01",
    title: "Business Tech Cleanup",
    text: "We review your website, email, domains, tools, passwords, vendors, and messy workflows so you know what to fix first."
  },
  {
    eyebrow: "02",
    title: "Security Review",
    text: "Plain-English checks for account access, backups, devices, customer data, password habits, and recovery risks."
  },
  {
    eyebrow: "03",
    title: "AI and Automation Setup",
    text: "We find the repetitive admin work, then build simple automations for intake, follow-up, reporting, and handoffs."
  },
  {
    eyebrow: "04",
    title: "Offshore Support Systems",
    text: "We help you hire and manage VA or technical help with SOPs, task tracking, approval rules, and safe access boundaries."
  }
];

const outcomes = [
  "What is wasting owner time",
  "What accounts and tools need cleanup",
  "What can safely move to a VA",
  "Where automation will actually help",
  "What technical work needs engineering support",
  "What security rules should exist before delegation"
];

const process = [
  {
    step: "01",
    title: "Review",
    text: "We look at the business, tools, website, workflows, and support gaps."
  },
  {
    step: "02",
    title: "Prioritize",
    text: "We separate urgent risks, time-wasters, delegation opportunities, and nice-to-have ideas."
  },
  {
    step: "03",
    title: "Build the plan",
    text: "You get a clear action plan for cleanup, security, automation, and support roles."
  },
  {
    step: "04",
    title: "Implement",
    text: "Cyber Ethos can help execute the fixes, set up systems, or support your team."
  }
];

const faqs = [
  {
    q: "Is this cybersecurity or operations help?",
    a: "Both. Most small business security problems are really messy access, weak handoffs, unclear tools, and no process. We clean that up practically."
  },
  {
    q: "Do I need to give you passwords first?",
    a: "No. The first review can start without sensitive access. We map the issues, then decide what access is actually needed."
  },
  {
    q: "Can you help us hire offshore support?",
    a: "Yes. We help define the role, create SOPs, set boundaries, and decide what should go to a VA versus technical support."
  }
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="sf-hero">
        <div className="sf-hero-copy">
          <p className="sf-eyebrow">Cyber Ethos for small business owners</p>
          <h1>Practical tech, security, and support systems without full-time staff.</h1>
          <p className="sf-subtitle">
            Cyber Ethos helps you clean up messy tools, improve security, automate repetitive work, and bring in VA or engineering help without losing control of the business.
          </p>
          <div className="sf-actions">
            <a className="sf-primary" href="/contact">Book a Tech Cleanup Call</a>
            <a className="sf-secondary" href="#services">See what we fix</a>
          </div>
        </div>

        <aside className="sf-hero-panel" aria-label="Cyber Ethos review preview">
          <div className="sf-panel-top">
            <span>Review preview</span>
            <strong>Business Tech Cleanup</strong>
          </div>
          <div className="sf-panel-grid">
            <div>
              <span>Time</span>
              <strong>Admin bottlenecks</strong>
            </div>
            <div>
              <span>Control</span>
              <strong>Access rules</strong>
            </div>
            <div>
              <span>Security</span>
              <strong>Risk cleanup</strong>
            </div>
            <div>
              <span>Support</span>
              <strong>VA + engineering</strong>
            </div>
          </div>
          <div className="sf-panel-note">
            <span>No password handoff needed to start.</span>
            <p>First we map what is broken, risky, repeated, or ready to delegate.</p>
          </div>
        </aside>
      </section>

      <section className="sf-proof" aria-label="Cyber Ethos focus areas">
        {proofPoints.map((point) => <span key={point}>{point}</span>)}
      </section>

      <section id="services" className="sf-section sf-services">
        <div className="sf-section-head">
          <p className="sf-eyebrow">What we help fix</p>
          <h2>Cleaner systems, safer handoffs, and less owner chaos.</h2>
          <p>
            The goal is not another complicated platform. The goal is a business that knows who has access, what work can be delegated, and what technical fixes matter first.
          </p>
        </div>
        <div className="sf-service-grid">
          {services.map((service) => (
            <article key={service.title} className="sf-service-card">
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sf-split">
        <div>
          <p className="sf-eyebrow">What you get</p>
          <h2>A plain-English cleanup plan you can actually use.</h2>
          <p>
            We turn vague tech stress into a short list of practical moves: what to clean up, what to secure, what to automate, and what support role to hire next.
          </p>
          <a href="/contact">Start the review</a>
        </div>
        <div className="sf-checklist">
          {outcomes.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="how" className="sf-section">
        <div className="sf-section-head left">
          <p className="sf-eyebrow">How it works</p>
          <h2>Simple enough to start this week.</h2>
        </div>
        <div className="sf-process-grid">
          {process.map((item) => (
            <article key={item.title}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="sf-section sf-faq">
        <div className="sf-section-head left">
          <p className="sf-eyebrow">Common questions</p>
          <h2>Built for normal business owners, not technical teams.</h2>
        </div>
        <div className="sf-faq-list">
          {faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sf-final">
        <p className="sf-eyebrow">Start small</p>
        <h2>Book a Tech Cleanup Call and leave with clearer next moves.</h2>
        <a href="/contact">Book the call</a>
      </section>
    </SiteLayout>
  );
}
