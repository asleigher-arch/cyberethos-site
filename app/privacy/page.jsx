import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Privacy Policy | Cyber Ethos",
  description: "Privacy policy for Cyber Ethos website visitors and client inquiries."
};

const sections = [
  {
    title: "Information we may receive",
    text: "You may choose to send your name, company, email address, website, operational problems, technical needs, access concerns, vendor details, or other business context."
  },
  {
    title: "How we use it",
    text: "We use submitted information to reply, prepare a support plan, provide services, manage client communication, and improve our internal process."
  },
  {
    title: "What we do not do",
    text: "Cyber Ethos does not sell personal information or share your business details with unrelated third parties."
  },
  {
    title: "Security note",
    text: "Please do not send passwords, secret keys, payment card numbers, or highly sensitive credentials through email. If access needs to be shared, we will agree on a safer handoff method first."
  }
];

export default function PrivacyPage() {
  return (
    <SiteLayout active="/privacy">
      <section className="hp-contact-hero">
        <div>
          <p className="hp-pretitle">Cyber Ethos privacy</p>
          <h1>Privacy Policy</h1>
          <p>
            This policy explains how Cyber Ethos handles information submitted through the website, email, review requests, and client conversations.
          </p>
        </div>
        <aside className="hp-contact-card">
          <p>Privacy contact</p>
          <ul>
            <li>For privacy questions, email info@cyberethos.org.</li>
            <li>Last updated: August 27, 2026</li>
          </ul>
        </aside>
      </section>

      <section className="hp-faq hp-legal-list" aria-label="Privacy policy details">
        <div className="hp-section-head">
          <p>Plain-English policy</p>
          <h2>We only ask for what we need to understand the request.</h2>
        </div>
        <div className="hp-faq-list">
          {sections.map((section) => (
            <article key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
          <article>
            <h3>Contact</h3>
            <p>For privacy questions or deletion requests, contact <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>.</p>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
