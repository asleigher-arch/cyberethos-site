"use client";

const navItems = [
  { href: "/", label: "Preview" },
  { href: "/visibility", label: "Visibility" },
  { href: "/contact", label: "Contact" }
];

export function SiteLayout({ active = "/", children }) {
  return (
    <main className="operator-site">
      <aside className="operator-sidebar">
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

        <div className="sidebar-contact">
          <span>Operator Review</span>
          <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
        </div>
      </aside>

      <section className="operator-content">{children}</section>
    </main>
  );
}
