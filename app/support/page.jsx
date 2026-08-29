import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Support | Cyber Ethos",
  description: "Support information for Cyber Ethos clients and website visitors."
};

const topics = [
  ["Business support", "Questions about operations cleanup, assistant handoffs, admin workflows, and service requests."],
  ["Technical help", "Questions about websites, automations, dashboards, integrations, or engineering support."],
  ["Security basics", "Questions about access, passwords, shared files, vendor accounts, and protecting customer data."]
];

export default function SupportPage() {
  return (
    <SiteLayout active="/support">
      <section className="aw-page-hero compact">
        <p className="aw-kicker">Cyber Ethos support</p>
        <h1>How can we help?</h1>
        <p>Help for business owners, client inquiries, website questions, and Cyber Ethos service requests.</p>
        <div className="aw-actions">
          <a className="aw-primary" href="mailto:info@cyberethos.org">Email support</a>
          <a className="aw-secondary" href="/contact">Start your review</a>
        </div>
      </section>

      <section className="aw-section">
        <div className="aw-section-head">
          <p className="aw-kicker">Support topics</p>
          <h2>We can point you in the right direction.</h2>
        </div>
        <div className="aw-card-grid three">
          {topics.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
