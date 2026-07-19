"use client";

const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@cyberethos.org&su=Cyber%20Ethos%20Operator%20Review";

export default function ContactPage() {
  return (
    <main className="site-shell app-site">
      <Nav />
      <section className="three-page-hero single">
        <div className="three-copy">
          <p className="eyebrow">Contact</p>
          <h1>Start with a short review.</h1>
          <p>
            Send the workflow, security concern, website problem, or business
            process you want cleaned up.
          </p>
          <div className="hero-actions">
            <a href={emailUrl} target="_blank" rel="noreferrer">
              Request review
            </a>
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Nav() {
  return (
    <header className="nav-bar">
      <a href="/" className="brand">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Preview</a>
        <a href="/visibility">Visibility</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="nav-cta" href="mailto:info@cyberethos.org">
        Email
      </a>
    </header>
  );
}
