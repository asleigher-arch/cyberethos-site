import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Support | Cyber Ethos",
  description: "Support information for Cyber Ethos clients and website visitors."
};

const topics = [
  {
    title: "Business support",
    text: "Questions about operations cleanup, assistant handoffs, admin workflows, and service requests."
  },
  {
    title: "Technical help",
    text: "Questions about websites, automations, dashboards, integrations, or engineering support."
  },
  {
    title: "Security basics",
    text: "Questions about access, passwords, shared files, vendor accounts, and protecting customer data."
  }
];

export default function SupportPage() {
  return (
    <SiteLayout active="/support">
      <section className="hp-contact-hero">
        <div>
          <p className="hp-pretitle">Cyber Ethos support</p>
          <h1>How can we help?</h1>
          <p>
            Help for business owners, client inquiries, website questions, and Cyber Ethos service requests.
          </p>
          <div className="hp-actions">
            <a href="mailto:info@cyberethos.org">Email support</a>
            <a href="/contact">Start your review</a>
          </div>
        </div>
        <aside className="hp-contact-card">
          <p>Contact</p>
          <ul>
            <li>Email info@cyberethos.org with your name, company, website, and what you need help with.</li>
            <li>For urgent access, password, data, or vendor-control concerns, include that in the subject line.</li>
          </ul>
        </aside>
      </section>

      <section className="hp-section">
        <div className="hp-section-head">
          <p>Support topics</p>
          <h2>We can point you in the right direction.</h2>
        </div>
        <div className="hp-benefit-grid">
          {topics.map((topic) => (
            <article key={topic.title}>
              <div className="hp-icon" aria-hidden="true">✓</div>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
