import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Support | Cyber Ethos",
  description: "Support information for Cyber Ethos clients and website visitors."
};

export default function SupportPage() {
  return (
    <SiteLayout active="/support">
      <section className="ce-contact-hero ce-legal-hero">
        <div>
          <p className="ce-eyebrow">Cyber Ethos support</p>
          <h1>Support</h1>
          <p>
            Help for business owners, client inquiries, website questions, and Cyber Ethos service requests.
          </p>
          <div className="ce-actions">
            <a href="mailto:info@cyberethos.org">Email support</a>
            <a href="/contact">Request a review</a>
          </div>
        </div>

        <aside className="ce-contact-panel" aria-label="How to contact support">
          <span>Contact</span>
          <p>Email info@cyberethos.org with your name, company, website, and a short description of what you need help with.</p>
          <p>For urgent access, password, data, or vendor-control concerns, include that clearly in the subject line.</p>
        </aside>
      </section>

      <section className="ce-contact-grid" aria-label="Support topics">
        <article>
          <span>01</span>
          <h2>Business support</h2>
          <p>Questions about operations cleanup, assistant handoffs, admin workflows, and service requests.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Technical help</h2>
          <p>Questions about websites, automations, dashboards, integrations, or engineering support.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Security basics</h2>
          <p>Questions about access, passwords, shared files, vendor accounts, and protecting customer data.</p>
        </article>
      </section>
    </SiteLayout>
  );
}
