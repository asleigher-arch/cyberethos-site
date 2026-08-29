"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Tech%20Cleanup%20Call&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20is%20taking%20too%20much%20time%3F%0AWhat%20tools%20or%20systems%20feel%20messy%3F%0AAny%20password%2C%20access%2C%20customer%20data%2C%20or%20security%20concerns%3F%0ADo%20you%20need%20VA%20support%2C%20technical%20help%2C%20automation%2C%20or%20all%20of%20the%20above%3F%0A";

const prompts = [
  "What is taking too much time?",
  "What systems, accounts, or tools feel messy?",
  "Where do you need help: VA support, technical work, automation, or security cleanup?",
  "Any password, access, customer data, or backup concerns?"
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="sf-contact-hero">
        <div>
          <p className="sf-eyebrow">Book a Tech Cleanup Call</p>
          <h1>Tell us what feels messy. We’ll help you sort the next moves.</h1>
          <p className="sf-subtitle">
            Start with a simple email. No password handoff required. We’ll review what is wasting time, what needs cleanup, and what support would help most.
          </p>
          <div className="sf-actions">
            <a className="sf-primary" href={emailUrl} target="_blank" rel="noreferrer">Start the email</a>
            <a className="sf-secondary" href="mailto:info@cyberethos.org">info@cyberethos.org</a>
          </div>
        </div>
        <aside className="sf-contact-card">
          <p>Helpful to include</p>
          <ul>
            {prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
          </ul>
        </aside>
      </section>
    </SiteLayout>
  );
}
