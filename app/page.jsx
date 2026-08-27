"use client";

import { SiteLayout } from "@/components/SiteLayout";

const services = [
  {
    title: "Offshore assistant support",
    text: "Part-time or full-time help for inbox, calendar, follow-up, CRM updates, research, documents, and repeat operations."
  },
  {
    title: "Engineering and technical help",
    text: "Affordable technical support for websites, automations, dashboards, integrations, internal tools, and product cleanup."
  },
  {
    title: "Control before delegation",
    text: "Simple rules for passwords, files, approvals, customer data, recovery access, and vendor permissions before work is handed off."
  }
];

const process = [
  "Review what is taking time",
  "Decide what should be delegated first",
  "Match the work to the right role",
  "Set access and approval rules",
  "Create a simple support plan"
];

const fit = [
  "The owner is stuck doing admin every day",
  "The business needs a VA but does not know what to hand off",
  "There is technical work piling up without a full-time engineer",
  "Passwords, customer data, or tool access need better control"
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="ce-simple-hero">
        <div>
          <p className="ce-simple-kicker">Small business support</p>
          <h1>Delegate admin and technical work without losing control.</h1>
          <p>
            Cyber Ethos helps business owners decide what to hand off, who to hire, and how to protect access before offshore support or engineering help starts.
          </p>
          <div className="ce-simple-actions">
            <a href="/contact">Request a review</a>
            <a href="#services">See services</a>
          </div>
        </div>
        <aside className="ce-simple-checklist" aria-label="Review checklist">
          <p>What the review covers</p>
          <ul>
            <li>What is taking too much owner time?</li>
            <li>Which tasks can a VA handle safely?</li>
            <li>What needs engineering support?</li>
            <li>What access should be limited or approved?</li>
          </ul>
        </aside>
      </section>

      <section className="ce-simple-statement">
        <h2>Most owners do not need more noise. They need the right help, a clean handoff, and basic control over the tools that run the business.</h2>
      </section>

      <section id="services" className="ce-simple-section">
        <div className="ce-simple-section-head">
          <p className="ce-simple-kicker">Services</p>
          <h2>Practical help before and after you hire.</h2>
        </div>
        <div className="ce-simple-service-list">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="ce-simple-split">
        <div>
          <p className="ce-simple-kicker">Process</p>
          <h2>A clear plan before anyone gets access.</h2>
          <p>
            The review turns a messy list of tasks, tools, and frustrations into a plain-English plan for the first hire or technical helper.
          </p>
        </div>
        <ol>
          {process.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section id="fit" className="ce-simple-section ce-simple-fit">
        <div className="ce-simple-section-head">
          <p className="ce-simple-kicker">Who it helps</p>
          <h2>Built for owners who need relief, not another complicated system.</h2>
        </div>
        <div className="ce-simple-fit-list">
          {fit.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="ce-simple-cta">
        <div>
          <p className="ce-simple-kicker">Start here</p>
          <h2>Send what is taking too much time. We will turn it into a support plan.</h2>
        </div>
        <a href="/contact">Request a review</a>
      </section>
    </SiteLayout>
  );
}
