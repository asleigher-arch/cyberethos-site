import { SiteLayout } from "@/components/SiteLayout";

export const metadata = {
  title: "Privacy Policy | Cyber Ethos",
  description: "Privacy policy for Cyber Ethos website visitors and client inquiries."
};

export default function PrivacyPage() {
  return (
    <SiteLayout active="/privacy">
      <section className="ce-contact-hero ce-legal-hero">
        <div>
          <p className="ce-eyebrow">Cyber Ethos privacy</p>
          <h1>Privacy Policy</h1>
          <p>
            This policy explains how Cyber Ethos handles information submitted through the website,
            email, review requests, and client conversations.
          </p>
        </div>

        <aside className="ce-contact-panel" aria-label="Privacy contact">
          <span>Contact</span>
          <p>For privacy questions, email info@cyberethos.org.</p>
          <p>Last updated: August 27, 2026</p>
        </aside>
      </section>

      <section className="ce-process ce-legal-card" aria-label="Privacy policy details">
        <div className="ce-section-head">
          <p className="ce-eyebrow">Plain-English policy</p>
          <h2>We only ask for what we need to understand the request.</h2>
          <p>
            Cyber Ethos works with business owners on operations, assistant handoffs, technical support,
            and security basics. The information you send helps us understand the situation and respond.
          </p>
        </div>

        <div className="ce-legal-copy">
          <h3>Information we may receive</h3>
          <p>
            You may choose to send your name, company, email address, website, operational problems,
            technical needs, access concerns, vendor details, or other business context.
          </p>

          <h3>How we use it</h3>
          <p>
            We use submitted information to reply, prepare a support plan, provide services, manage client
            communication, and improve our internal process.
          </p>

          <h3>What we do not do</h3>
          <p>
            Cyber Ethos does not sell personal information. We do not use website inquiries to run unrelated
            advertising campaigns or share your business details with unrelated third parties.
          </p>

          <h3>Security note</h3>
          <p>
            Please do not send passwords, secret keys, payment card numbers, or highly sensitive credentials
            through email. If access needs to be shared, we will agree on a safer handoff method first.
          </p>

          <h3>Contact</h3>
          <p>
            For privacy questions or deletion requests, contact <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
