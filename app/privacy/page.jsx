import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Privacy Policy | Cyber Ethos",
  description: "Privacy policy for Cyber Ethos website visitors and client inquiries."
};

const sections = [
  ["Information we may receive", "You may choose to send your name, company, email address, website, operational problems, technical needs, access concerns, vendor details, or other business context."],
  ["How we use it", "We use submitted information to reply, prepare a support plan, provide services, manage client communication, and improve our internal process."],
  ["What we do not do", "Cyber Ethos does not sell personal information or share your business details with unrelated third parties."],
  ["Security note", "Please do not send passwords, secret keys, payment card numbers, or highly sensitive credentials through email. If access needs to be shared, we will agree on a safer handoff method first."]
];

export default function PrivacyPage() {
  return (
    <SiteLayout active="/privacy">
      <section className="aw-page-hero compact">
        <p className="aw-kicker">Cyber Ethos privacy</p>
        <h1>Privacy Policy</h1>
        <p>This policy explains how Cyber Ethos handles information submitted through the website, email, review requests, and client conversations.</p>
      </section>

      <section className="aw-section">
        <div className="aw-section-head left">
          <p className="aw-kicker">Plain-English policy</p>
          <h2>We only ask for what we need to understand the request.</h2>
        </div>
        <div className="aw-faq-list">
          {sections.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
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
