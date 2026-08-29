"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Tech%20Cleanup%20Call&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20is%20taking%20too%20much%20time%3F%0AWhat%20tools%20or%20systems%20feel%20messy%3F%0AWhere%20do%20you%20need%20help%3A%20VA%20support%2C%20technical%20work%2C%20automation%2C%20security%20cleanup%3F%0AAny%20password%2C%20access%2C%20customer%20data%2C%20vendor%2C%20or%20backup%20concerns%3F%0A";

const prompts = [
  "What work keeps getting repeated, dropped, or handled manually?",
  "What tools, logins, files, or vendor accounts feel messy?",
  "Where do you need help: VA support, technical work, automation, or security cleanup?",
  "Any access, customer data, backup, password, or handoff concerns?"
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="aw-page-hero">
        <p className="aw-kicker">Book a Tech Cleanup Call</p>
        <h1>Send the messy version. We’ll help organize it.</h1>
        <p>
          Start with a simple email. No password handoff required. Tell us what is taking time, what feels risky, and what kind of help would make the business easier to run.
        </p>
        <div className="aw-actions">
          <a className="aw-primary" href={emailUrl} target="_blank" rel="noreferrer">Start the email</a>
          <a className="aw-secondary" href="mailto:info@cyberethos.org">info@cyberethos.org</a>
        </div>
      </section>

      <section className="aw-contact-layout">
        <article className="aw-contact-card primary">
          <span>Fastest path</span>
          <h2>Email the basics.</h2>
          <p>
            Include your name, company, website, and what feels messy. We can respond with next steps and schedule the cleanup call from there.
          </p>
          <a href={emailUrl}>Open prefilled email</a>
        </article>

        <article className="aw-contact-card">
          <span>Helpful to include</span>
          <ul>
            {prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
          </ul>
        </article>
      </section>
    </SiteLayout>
  );
}
