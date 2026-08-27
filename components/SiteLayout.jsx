"use client";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#fit", label: "Who it helps" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ children, active = "/" }) {
  return (
    <main className="ce-simple-site">
      <header className="ce-simple-header">
        <a href="/" className="ce-simple-brand" aria-label="Cyber Ethos home">
          <span>CE</span>
          <strong>Cyber Ethos</strong>
        </a>
        <nav aria-label="Primary navigation" className="ce-simple-nav">
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
        <a className="ce-simple-header-cta" href="/contact">Request a review</a>
      </header>

      <div className="ce-simple-content">{children}</div>

      <footer className="ce-simple-footer">
        <div>
          <a href="/" className="ce-simple-footer-brand">Cyber Ethos</a>
          <p>Practical offshore support, engineering help, operations cleanup, and access control for small business owners.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/contact">Contact</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </footer>
    </main>
  );
}
