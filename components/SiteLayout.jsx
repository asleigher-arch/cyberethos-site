"use client";

const navItems = [
  { href: "/#how", label: "How it works" },
  { href: "/#services", label: "Services" },
  { href: "/#support", label: "Support roles" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ children, active = "/" }) {
  return (
    <main className="hp-site">
      <a className="hp-topbar" href="/contact">Book a free operations review — no access required</a>
      <header className="hp-header">
        <a href="/" className="hp-brand" aria-label="Cyber Ethos home">
          <span>CE</span>
          <strong>Cyber Ethos</strong>
        </a>
        <nav aria-label="Primary navigation" className="hp-nav">
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
        <a className="hp-header-cta" href="/contact">Start your review</a>
      </header>

      <div className="hp-content">{children}</div>

      <footer className="hp-footer">
        <div>
          <a href="/" className="hp-footer-brand">Cyber Ethos</a>
          <p>Friendly operations, offshore support, engineering help, and access control for small business owners.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#how">How it works</a>
          <a href="/#services">Services</a>
          <a href="/#faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </footer>
    </main>
  );
}
