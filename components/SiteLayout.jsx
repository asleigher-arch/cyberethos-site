"use client";

const navItems = [
  { href: "/#offer", label: "Offer" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ children, active = "/" }) {
  return (
    <main className="aw-site">
      <header className="aw-header">
        <a href="/" className="aw-brand" aria-label="Cyber Ethos home">
          <span className="aw-mark">CE</span>
          <span>
            <strong>Cyber Ethos</strong>
            <small>Practical business tech</small>
          </span>
        </a>
        <nav className="aw-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={active === item.href ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="aw-header-cta" href="/contact">Book cleanup call</a>
      </header>

      <div className="aw-content">{children}</div>

      <footer className="aw-footer">
        <div>
          <a href="/" className="aw-footer-brand">Cyber Ethos</a>
          <p>Small businesses save time, gain control, and improve security with practical technical help.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#offer">Offer</a>
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
