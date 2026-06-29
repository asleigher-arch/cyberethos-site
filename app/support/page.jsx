export const metadata = {
  title: "Support | Cyber Ethos Operator",
  description: "Support information for the Cyber Ethos Operator iPhone app."
};

export default function SupportPage() {
  return (
    <main className="site-shell legal-shell">
      <SiteWatermark />
      <SimpleNav />
      <section className="legal-page">
        <p className="eyebrow">Cyber Ethos Operator</p>
        <h1>Support</h1>
        <p className="legal-updated">Help for the Cyber Ethos Operator iPhone app.</p>

        <div className="legal-card">
          <h2>Contact support</h2>
          <p>
            For help with Cyber Ethos Operator, email <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>.
          </p>
          <p>
            Please include the device you are using, the app version if available, and a short
            description of what happened.
          </p>

          <h2>Purchases and restore</h2>
          <p>
            The full Operator Score report is unlocked through Apple In-App Purchase. If you already
            purchased the report, use the restore purchase option on the app paywall.
          </p>
          <p>
            Payment, refund, and purchase history are handled by Apple. For refund requests, use
            Apple&apos;s purchase support flow at <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>.
          </p>

          <h2>What the app does</h2>
          <p>
            Cyber Ethos Operator gives small-business owners a short self-assessment across
            operations, security basics, and automation readiness. The paid report provides scores,
            top findings, practical next moves, and a 30-day cleanup plan.
          </p>

          <h2>Important limits</h2>
          <p>
            Cyber Ethos Operator is a planning and readiness tool. It is not a formal security audit,
            penetration test, compliance certification, or guarantee that a business is secure.
          </p>

          <h2>Privacy</h2>
          <p>
            The current version processes assessment answers locally on your device. Read the full
            privacy policy at <a href="/privacy">cyberethos.org/privacy</a>.
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
        <a href="/privacy">Privacy</a>
      </nav>
      <a className="nav-cta" href="mailto:info@cyberethos.org">
        Contact
      </a>
    </header>
  );
}
