"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Review%20Request&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20work%20are%20you%20trying%20to%20get%20off%20your%20plate%3F%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20or%20engineering%20help%3F%0AAny%20access%2C%20password%2C%20customer%20data%2C%20or%20security%20concerns%3F%0A";

const focusAreas = [
  {
    title: "Operations",
    text: "Admin work, inbox, calendar, customer follow-up, CRM, research, documentation, and repeatable tasks."
  },
  {
    title: "Technical help",
    text: "Website fixes, dashboards, automations, integrations, product support, and internal tools."
  },
  {
    title: "Control",
    text: "Permissions, passwords, sensitive data, vendor access, approvals, and recovery basics."
  }
];

const questions = [
  "What work is taking too much of the owner’s time?",
  "What kind of help seems most useful: VA, engineer, or both?",
  "What access, customer data, approvals, or tools need to stay controlled?"
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="ce-contact-v2">
        <div className="ce-contact-copy-v2">
          <p className="ce-kicker">Request a review</p>
          <h1>Tell us what needs to come off your plate.</h1>
          <p>
            Send a rough explanation of the business problem. We will help turn it into a clean support plan for offshore assistance, direct engineering help, and safer delegation.
          </p>
          <div className="ce-actions-v2">
            <a href={emailUrl} target="_blank" rel="noreferrer">Start the email</a>
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
          </div>
        </div>

        <aside className="ce-contact-note-v2" aria-label="What to include">
          <span>Helpful to include</span>
          {questions.map((question) => (
            <p key={question}>{question}</p>
          ))}
        </aside>
      </section>

      <section className="ce-section-v2 ce-contact-focus-v2" aria-label="Review focus areas">
        <div className="ce-section-heading-v2">
          <p className="ce-kicker">Focus areas</p>
          <h2>We look at the work, the support role, and the control rules.</h2>
        </div>
        <div className="ce-service-grid-v2">
          {focusAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
