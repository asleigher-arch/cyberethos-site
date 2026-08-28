"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Review%20Request&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20work%20are%20you%20trying%20to%20get%20off%20your%20plate%3F%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20or%20engineering%20help%3F%0AAny%20access%2C%20password%2C%20customer%20data%2C%20or%20security%20concerns%3F%0A";

const prompts = [
  "What work is taking too much of your time?",
  "Do you need a VA, engineering help, or both?",
  "What tools, files, passwords, or customer data need control?"
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="hp-contact-hero">
        <div>
          <p className="hp-pretitle">Let’s make work lighter</p>
          <h1>Start with a simple review.</h1>
          <p>
            Tell us what is taking too much time. We will help turn it into a support plan for offshore help, technical work, and safer delegation.
          </p>
          <div className="hp-actions">
            <a href={emailUrl} target="_blank" rel="noreferrer">Start the email</a>
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
          </div>
        </div>
        <aside className="hp-contact-card">
          <p>Helpful to include</p>
          <ul>
            {prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
          </ul>
        </aside>
      </section>
    </SiteLayout>
  );
}
