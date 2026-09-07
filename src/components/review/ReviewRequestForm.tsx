"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "@/components/portfolio/PublicFrame";

export const reviewServices = {
  "cybersecurity-audit": "Cybersecurity Audit",
  "penetration-testing": "Penetration Testing",
  "website-vulnerability-detection": "Website Vulnerability Detection",
};

export default function ReviewRequestForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    website: "",
    issue: "",
    urgency: "This month",
    service: initialService,
  });
  const [status, setStatus] = useState("");
  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));
  const body = [
    "Hi Cyber Ethos,",
    "",
    "I'd like to request a cybersecurity review.",
    "",
    `Name: ${form.name}`,
    `Organization: ${form.organization}`,
    `Email: ${form.email}`,
    `Service: ${form.service || "Discuss the right fit"}`,
    `Website / target scope: ${form.website}`,
    `Primary concern: ${form.issue}`,
    `Urgency: ${form.urgency}`,
    "",
    "I understand that testing requires explicit authorization and agreed scope.",
    "No passwords, private credentials, or sensitive data are included in this request.",
  ].join("\n");
  const mailto = `mailto:info@cyberethos.org?subject=${encodeURIComponent(`Cyber Ethos review request${form.organization ? ` - ${form.organization}` : ""}`)}&body=${encodeURIComponent(body)}`;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailto;
    setStatus(
      "Your email draft is ready to open. Nothing has been sent by this website. Send the draft in your email app, or copy the request below and email info@cyberethos.org.",
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setStatus(
        "Request copied. Paste it into an email to info@cyberethos.org and send it when you’re ready.",
      );
    } catch {
      setStatus(
        "Clipboard access is unavailable. Email your scope and concern directly to info@cyberethos.org.",
      );
    }
  }
  return (
    <form onSubmit={submit} className="review-form">
      <div className="form-grid">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Organization <span>(optional)</span>
          <input
            name="organization"
            autoComplete="organization"
            maxLength={160}
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            placeholder="Organization name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            autoComplete="email"
            required
            type="email"
            maxLength={200}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Website / target scope
          <input
            name="website"
            maxLength={300}
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            placeholder="Website or system to discuss"
          />
        </label>
        <label className="form-wide">
          Service
          <select
            name="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Help me choose</option>
            {Object.values(reviewServices).map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="form-wide">
          What needs a closer look?
          <textarea
            name="issue"
            required
            maxLength={1800}
            value={form.issue}
            onChange={(e) => update("issue", e.target.value)}
            placeholder="Describe your concern and the scope. Do not include passwords, credentials, or private data."
          />
        </label>
        <label className="form-wide">
          Timing
          <select
            name="urgency"
            value={form.urgency}
            onChange={(e) => update("urgency", e.target.value)}
          >
            <option>This week</option>
            <option>This month</option>
            <option>Before launch</option>
            <option>Just need a baseline</option>
          </select>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="portfolio-button">
          Open email request <Arrow diagonal />
        </button>
        <button type="button" className="form-secondary" onClick={copy}>
          Copy request instead
        </button>
      </div>
      <p className="form-help">
        Opens your email app with a prepared draft to info@cyberethos.org. This
        form does not send or store your details on a server.
      </p>
      <p
        role="status"
        aria-live="polite"
        className={status ? "form-status" : ""}
      >
        {status}
      </p>
    </form>
  );
}
