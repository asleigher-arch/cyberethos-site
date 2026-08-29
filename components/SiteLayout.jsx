"use client";

const navItems = [
  { href: "/#offer", label: "Offer" },
  { href: "/#services", label: "Services" },
  { href: "/#system", label: "System" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ children }) {
  return (
    <main className="magic-site">
      <header className="site-shell nav-shell">
        <a className="brand-mark" href="/" aria-label="Cyber Ethos home">
          <span>CE</span>
          <div>
            <strong>Cyber Ethos</strong>
            <small>Small business systems</small>
          </div>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="/contact">
          Book cleanup call
        </a>
      </header>
      {children}
      <footer className="site-shell footer-shell">
        <div>
          <a className="footer-brand" href="/">Cyber Ethos</a>
          <p>Practical tech, security, automation, and support systems for small businesses.</p>
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
