"use client";

const navItems = [
  { href: "/", label: "Preview" },
  { href: "/visibility", label: "Visibility" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ active = "/", children }) {
  return (
    <main className="operator-site">
      <header className="operator-topbar">
        <a href="/" className="operator-brand" aria-label="Cyber Ethos home">
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
          Request review
        </a>
      </header>

      <section className="operator-content">{children}</section>

      <footer className="operator-footer">
        <a href="/" className="footer-brand">Cyber Ethos</a>
        <div className="footer-socials" aria-label="Social links">
          <span>in</span>
          <span>ig</span>
          <span>x</span>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <strong>Company</strong>
            <a href="/">Preview</a>
            <a href="/visibility">Visibility</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <strong>Services</strong>
            <a href="/#services">Operations</a>
            <a href="/#services">Security</a>
            <a href="/#services">AI workflow</a>
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
