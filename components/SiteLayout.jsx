"use client";

const navItems = [
  { href: "/#cleanup", label: "Cleanup" },
  { href: "/#services", label: "Services" },
  { href: "/#workflow", label: "Workflow" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ children }) {
  return (
    <main className="mp-site">
      <header className="mp-shell mp-nav">
        <a className="mp-brand" href="/" aria-label="Cyber Ethos home">
          <span>CE</span>
          <div>
            <strong>Cyber Ethos</strong>
            <small>Tech cleanup and support systems</small>
          </div>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="mp-nav-cta" href="/contact">Book cleanup call</a>
      </header>
      {children}
      <footer className="mp-shell mp-footer">
        <div>
          <a className="mp-footer-brand" href="/">Cyber Ethos</a>
          <p>Practical tech, security, automation, and support systems for small businesses.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#cleanup">Cleanup</a>
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
