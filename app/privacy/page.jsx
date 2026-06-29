export const metadata = {
  title: "Privacy Policy | Cyber Ethos Operator",
  description: "Privacy policy for the Cyber Ethos Operator iPhone app."
};

export default function PrivacyPage() {
  return (
    <main className="site-shell legal-shell">
      <SiteWatermark />
      <SimpleNav />
      <section className="legal-page">
        <p className="eyebrow">Cyber Ethos Operator</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: June 28, 2026</p>

        <div className="legal-card">
          <p>
            Cyber Ethos Operator is a local self-assessment app for small-business operations,
            security basics, and automation readiness. This policy explains what information the
            current version of the app collects and how purchase processing works.
          </p>

          <h2>Information we collect</h2>
          <p>
            The current version of Cyber Ethos Operator does not collect personal information.
            Assessment answers are used locally on your device to generate your Operator Score
            report. The current version does not send assessment answers to a Cyber Ethos server.
          </p>

          <h2>Purchases</h2>
          <p>
            Cyber Ethos Operator uses Apple In-App Purchase to unlock the full Operator Score
            report. Purchase processing is handled by Apple. Cyber Ethos does not receive your full
            payment card details.
          </p>

          <h2>Tracking</h2>
          <p>
            Cyber Ethos Operator does not track you across apps or websites owned by other
            companies.
          </p>

          <h2>Analytics and advertising</h2>
          <p>
            The current version does not include third-party advertising SDKs or analytics SDKs.
          </p>

          <h2>Data sharing</h2>
          <p>
            Cyber Ethos does not sell personal information from this app. The current version does
            not share assessment answers with third parties.
          </p>

          <h2>Security note</h2>
          <p>
            Cyber Ethos Operator is intended to help you think through business readiness. It is not
            a formal security audit, compliance certification, penetration test, or guarantee that
            your business is secure.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If future versions add accounts, cloud sync, analytics, support forms, or community
            features, this policy will be updated before those changes are released.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

function SiteWatermark() {
  return (
    <div className="site-watermark" aria-hidden="true">
      <div className="watermark-glow" />
      <div className="watermark-image" />
    </div>
  );
}

function SimpleNav() {
  return (
    <header className="nav-glass">
      <a href="/" className="brand">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/support">Support</a>
      </nav>
      <a className="nav-cta" href="mailto:info@cyberethos.org">
        Contact
      </a>
    </header>
  );
}
