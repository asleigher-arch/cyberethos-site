"use client";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#roles", label: "Roles" },
  { href: "/#review", label: "Review" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ active = "/", children }) {
  return (
    <main className="operator-site">
      <header className="operator-topbar">
        <a href="/" className="operator-brand" aria-label="Cyber Ethos home">
          <span>CE</span>
          <strong>Cyber Ethos</strong>
        </a>

        <nav className="operator-nav" aria-label="Primary navigation">
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

        <a className="topbar-button" href="/contact">
          Request a review
        </a>
      </header>

      <section className="operator-content">{children}</section>

      <footer className="operator-footer">
        <a href="/" className="footer-brand">Cyber Ethos</a>
        <p className="footer-line">Operations · Security · Offshore assistants · Direct engineering</p>
        <nav aria-label="Footer navigation">
          <div>
            <strong>Company</strong>
            <a href="/#services">Services</a>
            <a href="/#review">Review preview</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <strong>Services</strong>
            <a href="/#services">Operations</a>
            <a href="/#services">Security basics</a>
            <a href="/#roles">Offshore support</a>
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
