"use client";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#roles", label: "Roles" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ active = "/", children }) {
  return (
    <main className="ce-site">
      <header className="ce-header">
        <a href="/" className="ce-brand" aria-label="Cyber Ethos home">
          <span>CE</span>
          <strong>Cyber Ethos</strong>
        </a>

        <nav className="ce-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="ce-header-cta" href="/contact">
          Request a review
        </a>
      </header>

      <section className="ce-main-content">{children}</section>

      <footer className="ce-footer">
        <div>
          <a href="/" className="ce-footer-brand">Cyber Ethos</a>
          <p>Offshore support, operations cleanup, direct engineering, and basic security controls for growing businesses.</p>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <strong>Company</strong>
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <strong>Support</strong>
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
            <a href="mailto:info@cyberethos.org">Email</a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
