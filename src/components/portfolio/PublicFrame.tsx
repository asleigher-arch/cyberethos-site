"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}

const navItems = [
  { href: "/#familiar", label: "Why" },
  { href: "/#story", label: "Story" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export default function PublicFrame({
  children,
  review = false,
}: {
  children: React.ReactNode;
  review?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (review) return;
    const hero = document.querySelector(".portfolio-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [review]);

  return (
    <div
      className={`portfolio${review ? " portfolio-review" : " portfolio-editorial"}`}
    >
      <a className="portfolio-skip" href="#main">
        Skip to content
      </a>
      <header
        className={`portfolio-header${scrolled ? " is-scrolled" : ""}`}
      >
        <Link
          className="portfolio-brand"
          href="/"
          aria-label="Cyber Ethos home"
        >
          <span className="ethos-mark" aria-hidden="true">
            C<span>E</span>
          </span>
          <span>
            CYBER ETHOS<span className="brand-sub">AZAD SLEIGHER</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          {!review &&
            navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          <Link className="nav-contact" href={review ? "/" : "/review"}>
            {review ? "Home" : "Request a review"}
            <Arrow diagonal />
          </Link>
        </nav>
      </header>
      {children}
      <footer className="portfolio-footer">
        <Link href="/">Cyber Ethos / Azad Sleigher</Link>
        <a href="mailto:info@cyberethos.org">
          info@cyberethos.org <Arrow diagonal />
        </a>
        <span>Discipline. Curiosity. Purpose.</span>
      </footer>
    </div>
  );
}
