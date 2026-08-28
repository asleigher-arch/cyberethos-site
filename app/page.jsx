"use client";

import { SiteLayout } from "@/components/SiteLayout";

const benefits = [
  {
    title: "Offshore support made simple",
    text: "We help you decide what a VA should handle, what should stay with you, and what needs a clear handoff."
  },
  {
    title: "Technical help without confusion",
    text: "Get support for websites, automations, dashboards, tools, and product fixes without hiring a full internal team."
  },
  {
    title: "Control before access",
    text: "Set up simple rules for passwords, files, approvals, customer data, and recovery before anyone starts work."
  }
];

const steps = [
  "Tell us what is taking too much time",
  "We map the right assistant or technical role",
  "We set handoffs, access, and approval rules",
  "You get a plain-English support plan"
];

const roles = [
  "Executive assistant",
  "Operations assistant",
  "Customer support VA",
  "CRM/admin assistant",
  "Research assistant",
  "Web/product engineer",
  "Automation builder",
  "Dashboard support"
];

const faqs = [
  {
    q: "Is this for hiring a VA or fixing operations?",
    a: "Both. We help owners figure out what should be delegated, what support role fits, and how to keep control while handing off work."
  },
  {
    q: "Can you help with technical work too?",
    a: "Yes. Cyber Ethos can help with engineering support, websites, dashboards, automations, integrations, and technical cleanup."
  },
  {
    q: "What do I get from the review?",
    a: "A simple support plan that shows what to delegate first, who can help, and what access or approval rules should be in place."
  }
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="hp-hero">
        <div className="hp-hero-copy">
          <p className="hp-pretitle">Say hello to</p>
          <h1>Offshore support that feels easy, safe, and under control.</h1>
          <p>
            Book a free review and we’ll map what to delegate, who should handle it, and what access rules keep you in control before offshore support or engineering help starts.
          </p>
          <div className="hp-actions">
            <a href="/contact">Start your review</a>
            <a href="#how">See how it works</a>
          </div>
        </div>

        <div className="hp-hero-art" aria-label="Cyber Ethos support illustration">
          <div className="hp-art-card hp-art-main">
            <span>Support plan</span>
            <strong>What can come off your plate?</strong>
            <p>VA tasks, engineering help, handoffs, approvals, and access rules in one simple plan.</p>
          </div>
          <div className="hp-art-bubble hp-bubble-one">VA ready</div>
          <div className="hp-art-bubble hp-bubble-two">Access checked</div>
          <div className="hp-art-tile hp-tile-one">Inbox</div>
          <div className="hp-art-tile hp-tile-two">CRM</div>
          <div className="hp-art-tile hp-tile-three">Website</div>
        </div>
      </section>

      <section className="hp-proof" aria-label="Cyber Ethos trust points">
        <span>Built for busy owners</span>
        <span>Offshore VA support</span>
        <span>Engineering help</span>
        <span>Security-minded handoffs</span>
      </section>

      <section id="services" className="hp-section">
        <div className="hp-section-head">
          <p>All-in-one support planning</p>
          <h2>Get the right help without making the business harder to manage.</h2>
        </div>
        <div className="hp-benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <div className="hp-icon" aria-hidden="true">✓</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
              <a href="/contact">Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="hp-how">
        <div>
          <p>Here’s how it works</p>
          <h2>A calmer way to hand off work.</h2>
          <a href="/contact">Start your review</a>
        </div>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section id="support" className="hp-section hp-roles">
        <div className="hp-section-head">
          <p>Support roles</p>
          <h2>Part-time, full-time, admin, or technical.</h2>
        </div>
        <div className="hp-role-cloud">
          {roles.map((role) => <span key={role}>{role}</span>)}
        </div>
      </section>

      <section className="hp-callout">
        <div>
          <p>Simple, practical, not scary</p>
          <h2>You do not need another complicated system. You need help you can trust.</h2>
        </div>
        <p>
          We focus on owner time, support fit, and control over access. That way offshore help and technical work can move faster without creating chaos.
        </p>
      </section>

      <section id="faq" className="hp-faq">
        <div className="hp-section-head">
          <p>Questions</p>
          <h2>Common questions from owners.</h2>
        </div>
        <div className="hp-faq-list">
          {faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hp-final">
        <h2>Ready to get support without handing over the keys?</h2>
        <a href="/contact">Start your review</a>
      </section>
    </SiteLayout>
  );
}
