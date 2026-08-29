import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Support | Cyber Ethos",
  description: "Support information for Cyber Ethos clients and website visitors."
};

export default function SupportPage() {
  return (
    <SiteLayout>
      <section className="mp-contact-hero compact-page">
        <div className="mp-background" aria-hidden="true" />
        <div className="mp-shell">
          <p className="mp-eyebrow">CYBER ETHOS SUPPORT</p>
          <h1>Practical support without the runaround.</h1>
          <p className="mp-lede">Need help with a review, project handoff, website issue, automation, or support plan? Email Cyber Ethos and include enough context to understand what is happening.</p>
          <div className="mp-actions">
            <a className="mp-primary" href="mailto:info@cyberethos.org">Email support</a>
            <a className="mp-secondary" href="/contact">Start a review</a>
          </div>
        </div>
      </section>
      <section className="mp-section">
        <div className="mp-shell mp-service-grid three">
          {[
            ["Current clients", "Send the project name, issue, screenshots if useful, and what changed recently."],
            ["New inquiries", "Use the contact page to describe the messy system, manual work, or technical gap."],
            ["Security concerns", "Do not send passwords by email. Start with context and we will choose a safer handoff method if needed."]
          ].map(([title, text]) => (
            <article className="mp-static-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
