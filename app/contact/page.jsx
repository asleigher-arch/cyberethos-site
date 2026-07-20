"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@cyberethos.org&su=Cyber%20Ethos%20Operator%20Review";

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="operator-page contact-panel">
        <p className="eyebrow">Contact</p>
        <h1>Start with a short review.</h1>
        <p>
          Send the workflow, website problem, security concern, or business
          process you want cleaned up.
        </p>

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
