"use client";

import { SiteLayout } from "@/components/SiteLayout";

const proofCards = [
  { label: "OPS", title: "Follow-ups, intake, calendars, admin work", value: "VA READY" },
  { label: "SEC", title: "Access, passwords, files, vendor handoffs", value: "CONTROL FIRST" },
  { label: "BUILD", title: "Websites, automations, dashboards, internal tools", value: "ENGINEERING" }
];

const services = [
  {
    number: "01",
    title: "Offshore virtual assistants",
    text: "Part-time or full-time executive/admin support for inboxes, calendars, follow-ups, research, CRM updates, and repeatable business operations."
  },
  {
    number: "02",
    title: "Direct engineering support",
    text: "Affordable technical help for websites, dashboards, automations, product fixes, integrations, and internal tools without building a bloated local team."
  },
  {
    number: "03",
    title: "Operations cleanup",
    text: "Before adding people, we clean up ownership, handoffs, tools, access, documentation, and the steps that keep slowing the business down."
  },
  {
    number: "04",
    title: "Security and control",
    text: "Hiring offshore should not mean losing control. We review passwords, permissions, sensitive data, recovery, vendor access, and approval points."
  }
];

const roles = [
  "Executive assistant",
  "Operations assistant",
  "Customer support VA",
  "Research assistant",
  "CRM/admin assistant",
  "Web/product engineer",
  "Automation builder",
  "Dashboard/reporting support"
];

const steps = [
  "Understand what the owner is trying to offload",
  "Map what should be handled by a VA, engineer, or owner",
  "Clean up access, handoffs, and approval rules",
  "Create the role plan, first tasks, and hiring direction"
];

function HeroCollage() {
  return (
    <div className="ce-collage" aria-label="Cyber Ethos operating support preview">
      <div className="ce-collage-card ce-card-main">
        <div className="ce-card-topline">
          <span>SUPPORT PLAN</span>
          <strong>ACTIVE</strong>
        </div>
        <h2>Owner capacity map</h2>
        <div className="ce-capacity-bars" aria-hidden="true">
          <span style={{ "--bar": "78%" }}>Admin load</span>
          <span style={{ "--bar": "64%" }}>Follow-up drag</span>
          <span style={{ "--bar": "52%" }}>Technical backlog</span>
        </div>
      </div>

      <div className="ce-collage-card ce-card-small ce-card-va">
        <span>ROLE FIT</span>
        <strong>Part-time VA</strong>
        <p>Inbox · Calendar · CRM · Follow-up</p>
      </div>

      <div className="ce-collage-card ce-card-small ce-card-eng">
        <span>BUILD FIT</span>
        <strong>Direct engineer</strong>
        <p>Website · Automation · Dashboard</p>
      </div>

      <div className="ce-collage-card ce-card-security">
        <span>CONTROL LAYER</span>
        <div className="ce-security-grid" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <p>Access rules before delegation.</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLayout active="/">
      <section className="ce-hero">
        <div className="ce-hero-copy">
          <p className="ce-eyebrow">CYBER ETHOS / SMALL BUSINESS OPERATIONS</p>
          <h1>Offshore support without losing control.</h1>
          <p>
            Cyber Ethos helps business owners clean up operations, protect access, and decide what to hand to a part-time VA, full-time offshore assistant, or direct engineering team.
          </p>
          <div className="ce-actions">
            <a href="/contact">Request a review</a>
            <a href="#services">See what we handle</a>
          </div>
        </div>
        <HeroCollage />
      </section>

      <section className="ce-proof-strip" aria-label="Cyber Ethos proof points">
        {proofCards.map((card) => (
          <article key={card.label}>
            <span>{card.label}</span>
            <p>{card.title}</p>
            <strong>{card.value}</strong>
          </article>
        ))}
      </section>

      <section className="ce-section ce-statement" id="thesis">
        <p className="ce-eyebrow">THE SHIFT</p>
        <h2>Get the right help, with clear handoffs and basic security in place first.</h2>
      </section>

      <section className="ce-section" id="services">
        <div className="ce-section-head">
          <p className="ce-eyebrow">WHAT WE HELP WITH</p>
          <h2>Practical support for owners who need reliable help.</h2>
        </div>
        <div className="ce-service-grid">
          {services.map((service) => (
            <article key={service.title} className="ce-service-card">
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ce-section ce-roles" id="roles">
        <div>
          <p className="ce-eyebrow">ROLE EXAMPLES</p>
          <h2>Part-time help, full-time help, or technical talent.</h2>
        </div>
        <div className="ce-role-grid">
          {roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </section>

      <section className="ce-section ce-process" id="review">
        <div className="ce-section-head">
          <p className="ce-eyebrow">THE REVIEW</p>
          <h2>A clean plan before you hire.</h2>
          <p>
            We look at the work, the tools, the risk, and the owner bottlenecks. Then we tell you what to delegate first and what needs tighter control.
          </p>
        </div>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ce-final" id="contact">
        <div>
          <p className="ce-eyebrow">START HERE</p>
          <h2>Show us what is taking too much time. We will turn it into a support plan.</h2>
        </div>
        <a href="/contact">Request a review</a>
      </section>
    </SiteLayout>
  );
}
