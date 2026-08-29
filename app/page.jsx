"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { MagneticCard, MotionReveal, StaggerList, TextTicker, WorkflowGraphic } from "@/components/MotionEffects";

const cleanupItems = [
  "See which tools, accounts, and vendors actually matter",
  "Find risky access before handing work to a VA or contractor",
  "Turn repeated admin work into a simpler workflow",
  "Know what to automate, delegate, secure, or ignore",
  "Leave with a plain-English plan instead of more confusion"
];

const services = [
  {
    title: "Business Tech Cleanup",
    text: "A practical review of your website, email, domains, tools, files, passwords, vendors, backups, and handoffs."
  },
  {
    title: "Secure VA Setup",
    text: "Prepare part-time, full-time, or offshore support with safer access, clearer roles, and better handoff instructions."
  },
  {
    title: "Workflow Automation",
    text: "Build simple systems for intake, follow-up, reporting, client updates, file routing, and repetitive admin work."
  },
  {
    title: "Engineering Support",
    text: "Hands-on help with websites, forms, integrations, dashboards, AI workflows, and technical implementation."
  }
];

const process = [
  "Map how work actually moves through your business",
  "Identify the fragile tools, manual steps, and access risks",
  "Create a ranked cleanup and support plan",
  "Implement the fixes that save time or reduce risk first"
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mp-hero">
        <div className="mp-background" aria-hidden="true" />
        <div className="mp-shell mp-hero-grid">
          <MotionReveal className="mp-hero-copy">
            <p className="mp-eyebrow">CYBER ETHOS FOR SMALL BUSINESS OWNERS</p>
            <h1>Reliable help without handing over the keys.</h1>
            <p className="mp-lede">
              Cyber Ethos helps you clean up messy business tech, improve security basics, delegate work safely, and build practical support systems without hiring full-time staff.
            </p>
            <div className="mp-actions">
              <a className="mp-primary" href="/contact">Book a Tech Cleanup Call</a>
              <a className="mp-secondary" href="#cleanup">What gets cleaned up</a>
            </div>
          </MotionReveal>
          <MotionReveal className="mp-hero-art" delay={0.08}>
            <WorkflowGraphic />
          </MotionReveal>
        </div>
      </section>

      <TextTicker />

      <section id="cleanup" className="mp-section mp-cleanup">
        <div className="mp-shell mp-two-col">
          <MotionReveal>
            <p className="mp-eyebrow">START HERE</p>
            <h2>Business Tech Cleanup</h2>
            <p className="mp-section-lede">
              The first offer is not a vague audit. It is a guided review that shows what is slowing you down, where access is risky, and what support would actually help.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <MagneticCard className="mp-feature-card">
              <h3>What you leave with</h3>
              <StaggerList items={cleanupItems} />
            </MagneticCard>
          </MotionReveal>
        </div>
      </section>

      <section id="services" className="mp-section mp-services">
        <div className="mp-shell">
          <MotionReveal className="mp-center-heading">
            <p className="mp-eyebrow">SERVICES</p>
            <h2>One business system, not random tech fixes.</h2>
          </MotionReveal>
          <div className="mp-service-grid">
            {services.map((service, index) => (
              <MotionReveal key={service.title} delay={index * 0.04}>
                <MagneticCard>
                  <span className="mp-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </MagneticCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="mp-section mp-workflow-section">
        <div className="mp-shell mp-two-col reverse">
          <MotionReveal>
            <MagneticCard className="mp-dark-panel">
              <div className="mp-system-lines">
                <span>Owner</span>
                <span>Tools</span>
                <span>Access</span>
                <span>VA</span>
                <span>Automation</span>
                <span>Control</span>
              </div>
            </MagneticCard>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p className="mp-eyebrow">THE OUTCOME</p>
            <h2>Cleaner handoffs. Safer access. More control.</h2>
            <p className="mp-section-lede">
              The goal is simple: give the owner more time and fewer fragile systems. Cyber Ethos helps define what humans should handle, what software should handle, and what needs security guardrails.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section id="process" className="mp-section mp-process">
        <div className="mp-shell">
          <MotionReveal className="mp-center-heading">
            <p className="mp-eyebrow">PROCESS</p>
            <h2>From messy to manageable.</h2>
          </MotionReveal>
          <div className="mp-process-grid">
            {process.map((step, index) => (
              <MotionReveal key={step} delay={index * 0.05}>
                <article className="mp-process-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-section mp-faq">
        <div className="mp-shell mp-two-col">
          <MotionReveal>
            <p className="mp-eyebrow">FAQ</p>
            <h2>Plain answers before we talk.</h2>
          </MotionReveal>
          <MotionReveal className="mp-faq-list" delay={0.08}>
            <details open>
              <summary>Is this only cybersecurity?</summary>
              <p>No. Security is part of the work, but the bigger goal is operational control: cleaner tools, safer access, better delegation, and less manual work.</p>
            </details>
            <details>
              <summary>Can you help with VA or offshore support?</summary>
              <p>Yes. Cyber Ethos can help define the role, prepare the handoff, reduce password chaos, and decide what should or should not be delegated.</p>
            </details>
            <details>
              <summary>Do you need passwords to start?</summary>
              <p>No. The first review starts with context, screenshots, tool lists, and walkthroughs. Sensitive access comes later only if implementation work is approved.</p>
            </details>
          </MotionReveal>
        </div>
      </section>

      <section className="mp-final">
        <div className="mp-shell mp-final-card">
          <p className="mp-eyebrow">NEXT STEP</p>
          <h2>Send the messy version. We will turn it into a plan.</h2>
          <p>No hype. No scare tactics. Just practical help getting your business systems under control.</p>
          <a className="mp-primary" href="/contact">Book a Tech Cleanup Call</a>
        </div>
      </section>
    </SiteLayout>
  );
}
