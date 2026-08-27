"use client";

const navItems = [
  { href: "/#thesis", label: "Thesis" },
  { href: "/#gaps", label: "Gaps" },
  { href: "/#preview", label: "Review" },
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
          Request review
        </a>
      </header>

      <section className="operator-content">{children}</section>

      <footer className="operator-footer">
        <a href="/" className="footer-brand">Cyber Ethos</a>
        <p className="footer-line">Operations · Security · Offshore support · Intake visibility</p>
        <nav aria-label="Footer navigation">
          <div>
            <strong>Company</strong>
            <a href="/#thesis">Thesis</a>
            <a href="/#preview">Review preview</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <strong>Services</strong>
            <a href="/#gaps">Operations</a>
            <a href="/#gaps">Security basics</a>
            <a href="/#gaps">Offshore support</a>
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
