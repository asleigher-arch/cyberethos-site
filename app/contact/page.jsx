"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Review%20Request&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20work%20are%20you%20trying%20to%20get%20off%20your%20plate%3F%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20or%20engineering%20help%3F%0AAny%20access%2C%20password%2C%20customer%20data%2C%20or%20security%20concerns%3F%0A";

const intakePrompts = [
  "What work are you trying to get off your plate?",
  "Do you need part-time VA, full-time VA, or technical/engineering support?",
  "What access, passwords, customer data, or approval points need protection?"
];

const contactCards = [
  { label: "01", title: "Operations", text: "Admin, inbox, calendar, customer follow-up, CRM, research, documentation." },
  { label: "02", title: "Technical", text: "Website fixes, dashboards, automations, integrations, product support." },
  { label: "03", title: "Control", text: "Permissions, sensitive data, password sharing, vendor access, approval rules." }
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="ce-contact-hero">
        <div>
          <p className="ce-eyebrow">REQUEST REVIEW</p>
          <h1>Tell us what needs to come off your plate.</h1>
          <p>
            Send a rough explanation of the business problem. Cyber Ethos will help turn it into a clear support plan for offshore assistance, direct engineering help, and safer delegation.
          </p>
          <div className="ce-actions">
            <a href={emailUrl} target="_blank" rel="noreferrer">Request review</a>
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
          </div>
        </div>
        <aside className="ce-contact-panel" aria-label="What to include in the request">
          <span>INCLUDE THIS</span>
          {intakePrompts.map((prompt) => (
            <p key={prompt}>{prompt}</p>
          ))}
        </aside>
      </section>

      <section className="ce-contact-grid" aria-label="Review focus areas">
        {contactCards.map((card) => (
          <article key={card.title}>
            <span>{card.label}</span>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
