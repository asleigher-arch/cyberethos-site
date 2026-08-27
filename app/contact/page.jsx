"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Review%20Request&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20is%20leaking%20time%2C%20trust%2C%20control%2C%20or%20security%3F%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20or%20engineering%20help%3F%0AWhat%20have%20you%20already%20tried%3F%0A";

const intakePrompts = [
  "What work keeps getting dropped, repeated, or handled manually?",
  "Where are you worried about access, passwords, backups, vendors, or sensitive data?",
  "What kind of support would help most: part-time VA, full-time VA, or direct technical/engineering help?"
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="operator-page contact-panel">
        <p className="eyebrow">Request Review</p>
        <h1>Show me where the business is leaking.</h1>
        <p>
          Send the workflow, website problem, security concern, hiring bottleneck, or business process you want cleaned up. You do not need a perfect brief. A messy explanation is enough to start.
        </p>

        <div className="contact-intake" aria-label="Review request prompts">
          {intakePrompts.map((prompt) => (
            <div key={prompt}>{prompt}</div>
          ))}
        </div>

        <div className="contact-actions">
          <a href={emailUrl} target="_blank" rel="noreferrer">
            Request review
          </a>
          <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
        </div>
      </section>
    </SiteLayout>
  );
}
