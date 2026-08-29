import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Privacy Policy | Cyber Ethos",
  description: "Privacy policy for Cyber Ethos website visitors and client inquiries."
};

const sections = [
  ["What we collect", "Cyber Ethos may collect the information you choose to send, including your name, company, website, email address, business context, and project details."],
  ["How we use it", "We use your information to respond to inquiries, prepare reviews, provide support, and improve Cyber Ethos services."],
  ["Sensitive access", "Do not send passwords or sensitive credentials by email. If implementation requires access, Cyber Ethos will use a safer handoff process."],
  ["Contact", "Questions about privacy can be sent to info@cyberethos.org."]
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="mp-contact-hero compact-page">
        <div className="mp-background" aria-hidden="true" />
        <div className="mp-shell">
          <p className="mp-eyebrow">CYBER ETHOS PRIVACY</p>
          <h1>Plain-English privacy policy.</h1>
          <p className="mp-lede">Cyber Ethos keeps inquiry and project information focused on practical support. We do not need passwords to start a review.</p>
        </div>
      </section>
      <section className="mp-section">
        <div className="mp-shell mp-faq-list">
          {sections.map(([title, text]) => (
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
