"use client";

import { SiteLayout } from "@/components/SiteLayout";

const serviceLines = [
  {
    title: "Business Tech Cleanup",
    text: "A practical review of your website, email, domains, tools, accounts, access, backups, and daily workflows."
  },
  {
    title: "Secure Delegation",
    text: "Set up rules for what VAs, contractors, and staff can access without handing over the keys to the business."
  },
  {
    title: "Automation Systems",
    text: "Turn repetitive admin, reporting, intake, follow-up, and handoff work into systems that save real hours."
  },
  {
    title: "Engineering Help",
    text: "Website fixes, integrations, dashboards, internal tools, data cleanup, and technical implementation when the job needs code."
  }
];

const cleanupItems = [
  "Website, domain, email, and DNS review",
  "Password, access, vendor, and shared-file cleanup",
  "Workflow map for repeated manual work",
  "VA/offshore role fit and handoff plan",
  "Automation opportunities ranked by effort and value",
  "Plain-English security and backup recommendations"
];

const process = [
  ["01", "Map the mess", "We document the tools, handoffs, accounts, repeated tasks, and points where work slows down."],
  ["02", "Find the risks", "We flag weak access, unclear ownership, backup gaps, exposed data habits, and dependency on one person."],
  ["03", "Build the plan", "You get a short, prioritized plan for cleanup, automation, support roles, and technical fixes."],
  ["04", "Execute what matters", "Cyber Ethos can help implement the fixes, create SOPs, set up automations, and support your team."]
];

const audience = [
  "You are buried in admin work and follow-ups.",
  "Your team uses too many scattered tools.",
  "You want offshore help but worry about access and quality.",
  "You need technical help but do not need a full-time engineer.",
  "You know security matters but want practical fixes, not scare tactics.",
  "You want a cleaner business before adding more software."
];

const faqs = [
  {
    q: "What is the first offer?",
    a: "The first offer is a Business Tech Cleanup: a focused review and action plan for your tools, access, security basics, workflows, automation opportunities, and support needs."
  },
  {
    q: "Is this mainly cybersecurity?",
    a: "Security is part of the work, but the bigger goal is control. We help owners clean up access, tools, handoffs, and workflows so the business runs better and safer."
  },
  {
    q: "Can you help with VAs or offshore support?",
    a: "Yes. We help define the role, write the handoff, set approval rules, decide what they can access, and separate VA work from technical or engineering work."
  },
  {
    q: "Do you need passwords to start?",
    a: "No. The first call and review can start without sensitive access. If access is needed later, we define a safer handoff method first."
  }
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="aw-hero">
        <p className="aw-kicker">Cyber Ethos for small business owners</p>
        <h1>Get your business tech under control.</h1>
        <p className="aw-hero-text">
          Practical help with messy tools, weak access, repetitive admin work, basic security, automation, and offshore support systems without hiring full-time staff.
        </p>
        <div className="aw-actions">
          <a className="aw-primary" href="/contact">Book a Tech Cleanup Call</a>
          <a className="aw-secondary" href="#offer">See the cleanup plan</a>
        </div>
      </section>

      <section className="aw-dashboard" aria-label="Business Tech Cleanup preview">
        <div className="aw-dashboard-top">
          <div>
            <span>Business Tech Cleanup</span>
            <h2>One review. A clear plan for time, control, security, and support.</h2>
          </div>
          <a href="/contact">Book cleanup call</a>
        </div>
        <div className="aw-dashboard-grid">
          {[
            ["Time", "Manual work and owner bottlenecks"],
            ["Control", "Accounts, passwords, files, and vendors"],
            ["Security", "Practical risk and recovery basics"],
            ["Support", "VA, offshore, and engineering fit"]
          ].map(([label, text]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{text}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="offer" className="aw-section aw-offer">
        <div className="aw-section-head">
          <p className="aw-kicker">The first offer</p>
          <h2>Business Tech Cleanup</h2>
          <p>
            Built for owners who know things are messy but do not know where to start. We turn the mess into a ranked action plan.
          </p>
        </div>
        <div className="aw-two-col">
          <div className="aw-copy-block">
            <h3>What gets reviewed</h3>
            <p>
              We look at how the business actually runs: tools, email, website, files, passwords, intake, follow-up, delegation, security basics, and technical gaps.
            </p>
            <p>
              The deliverable is not a giant report. It is a practical plan: what to fix now, what to automate, what to delegate, and what needs technical implementation.
            </p>
          </div>
          <div className="aw-check-grid">
            {cleanupItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section id="services" className="aw-section">
        <div className="aw-section-head">
          <p className="aw-kicker">Services</p>
          <h2>Help where small businesses actually get stuck.</h2>
          <p>
            Cyber Ethos sits between ops, security, automation, and engineering. That is where most small business tech problems live.
          </p>
        </div>
        <div className="aw-card-grid">
          {serviceLines.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aw-band">
        <div>
          <p className="aw-kicker">Good fit</p>
          <h2>This is for owners who need clarity before more tools.</h2>
        </div>
        <div className="aw-pill-list">
          {audience.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="process" className="aw-section">
        <div className="aw-section-head left">
          <p className="aw-kicker">Process</p>
          <h2>Simple, fast, and built around useful next steps.</h2>
        </div>
        <div className="aw-timeline">
          {process.map(([num, title, text]) => (
            <article key={title}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="aw-section aw-faq">
        <div className="aw-section-head">
          <p className="aw-kicker">FAQ</p>
          <h2>Plain answers before we talk.</h2>
        </div>
        <div className="aw-faq-list">
          {faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aw-cta">
        <p className="aw-kicker">Start here</p>
        <h2>Book a Tech Cleanup Call and leave with a clearer plan.</h2>
        <p>No pressure. No jargon. No password handoff required to start.</p>
        <a href="/contact">Book the call</a>
      </section>
    </SiteLayout>
  );
}
