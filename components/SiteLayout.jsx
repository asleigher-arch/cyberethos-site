"use client";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#how", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ children, active = "/" }) {
  return (
    <main className="sf-site">
      <header className="sf-header">
        <a href="/" className="sf-brand" aria-label="Cyber Ethos home">
          <span>CE</span>
          <strong>Cyber Ethos</strong>
        </a>
        <nav aria-label="Primary navigation" className="sf-nav">
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
        <a className="sf-header-cta" href="/contact">Book a call</a>
      </header>

      <div className="sf-content">{children}</div>

      <footer className="sf-footer">
        <div>
          <a href="/" className="sf-footer-brand">Cyber Ethos</a>
          <p>Practical tech, security, automation, and support systems for small businesses.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#services">Services</a>
          <a href="/#how">Process</a>
          <a href="/#faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </footer>
    </main>
  );
}
