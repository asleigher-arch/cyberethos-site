"use client";

import { SiteLayout } from "@/components/SiteLayout";

const outcomes = [
  {
    title: "More owner time",
    text: "Move inbox, calendar, CRM, research, follow-up, and repeat admin work into a clean support lane."
  },
  {
    title: "Safer delegation",
    text: "Set access, approval, password, file, and customer-data rules before handing work to anyone offshore."
  },
  {
    title: "Useful technical help",
    text: "Bring in focused engineering support for websites, dashboards, automations, integrations, and internal tools."
  }
];

const services = [
  {
    title: "Offshore virtual assistants",
    text: "Part-time or full-time executive/admin support for the work that keeps pulling owners back into the weeds."
  },
  {
    title: "Operations cleanup",
    text: "Clear handoffs, simple documentation, ownership rules, repeatable task lists, and better follow-up systems."
  },
  {
    title: "Direct engineering support",
    text: "Affordable technical capacity for the fixes and systems a normal VA cannot handle."
  },
  {
    title: "Security and control",
    text: "Practical access reviews, password hygiene, vendor permissions, approval points, and recovery basics."
  }
];

const roles = [
  "Executive assistant",
  "Operations assistant",
  "Customer support VA",
  "CRM/admin assistant",
  "Research assistant",
  "Web/product engineer",
  "Automation builder",
  "Dashboard/reporting support"
];

const process = [
  {
    title: "Review the work",
    text: "We learn what is taking time, what is stuck, and what should not stay on the owner’s plate."
  },
  {
    title: "Map the right role",
    text: "We separate VA work, technical work, and owner-only decisions so the hire is clean from day one."
  },
  {
    title: "Set control rules",
    text: "We define access, handoffs, approval points, and data boundaries before delegation begins."
  },
  {
    title: "Create the support plan",
    text: "You get a plain-English action plan for who to hire, what to hand off first, and how to manage it."
  }
];

function ReviewCard() {
  return (
    <aside className="ce-review-card" aria-label="Review preview">
      <div className="ce-review-card-header">
        <span>Review snapshot</span>
        <strong>Ready</strong>
      </div>
      <h2>What should leave the owner’s plate first?</h2>
      <div className="ce-review-lines" aria-hidden="true">
        <div><span>Admin load</span><strong>VA ready</strong></div>
        <div><span>Technical backlog</span><strong>Engineer fit</strong></div>
        <div><span>Access risk</span><strong>Control first</strong></div>
      </div>
      <p>Clear roles, safer handoffs, and a practical first 30 days.</p>
    </aside>
  );
}

export default function HomePage() {
  return (
    <SiteLayout active="/">
      <section className="ce-hero-v2">
        <div className="ce-hero-copy-v2">
          <p className="ce-kicker">Business support for owners</p>
          <h1>Get reliable help without handing over the keys to your business.</h1>
          <p>
            Cyber Ethos helps small business owners hire offshore virtual assistants and direct engineering support with clean handoffs, practical security, and control built in from the start.
          </p>
          <div className="ce-actions-v2">
            <a href="/contact">Request a review</a>
            <a href="#services">See services</a>
          </div>
        </div>
        <ReviewCard />
      </section>

      <section className="ce-trust-strip" aria-label="What Cyber Ethos improves">
        <span>Owner time</span>
        <span>Offshore support</span>
        <span>Engineering help</span>
        <span>Access control</span>
      </section>

      <section className="ce-section-v2 ce-intro-v2">
        <p className="ce-kicker">The point</p>
        <h2>Hiring help should make the business calmer, not harder to manage.</h2>
        <p>
          A VA or engineer can save a business a lot of time. But only if the tasks, tools, approvals, and sensitive access are clear. Cyber Ethos builds that structure before you delegate.
        </p>
      </section>

      <section className="ce-section-v2" id="services">
        <div className="ce-section-heading-v2">
          <p className="ce-kicker">Services</p>
          <h2>What we help with</h2>
          <p>Practical support for businesses that need capacity, clearer operations, and safer delegation.</p>
        </div>
        <div className="ce-service-grid-v2">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ce-section-v2 ce-outcomes-v2">
        <div className="ce-section-heading-v2">
          <p className="ce-kicker">Outcomes</p>
          <h2>What should feel better after the review</h2>
        </div>
        <div className="ce-outcome-grid-v2">
          {outcomes.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ce-section-v2 ce-roles-v2" id="roles">
        <div>
          <p className="ce-kicker">Roles</p>
          <h2>Part-time help, full-time help, or technical talent.</h2>
          <p>We help decide what type of support fits the work before money is spent on the wrong hire.</p>
        </div>
        <div className="ce-role-list-v2">
          {roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </section>

      <section className="ce-section-v2 ce-process-v2" id="process">
        <div className="ce-section-heading-v2">
          <p className="ce-kicker">Process</p>
          <h2>A clean plan before you hire</h2>
          <p>Simple, practical, and built for owners who need relief without losing control.</p>
        </div>
        <ol>
          {process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ce-final-v2">
        <div>
          <p className="ce-kicker">Start here</p>
          <h2>Show us what is taking too much time. We will turn it into a support plan.</h2>
        </div>
        <a href="/contact">Request a review</a>
      </section>
    </SiteLayout>
  );
}
