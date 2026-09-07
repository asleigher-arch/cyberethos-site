import Image from "next/image";
import Link from "next/link";

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

export default function PublicFrame({
  children,
  review = false,
}: {
  children: React.ReactNode;
  review?: boolean;
}) {
  return (
    <div className={`portfolio${review ? " portfolio-review" : ""}`}>
      <a className="portfolio-skip" href="#main">
        Skip to content
      </a>
      <div className="portrait-stage">
        <Image
          src="/images/user/owner.jpg"
          alt="Azad Sleigher in Marine Corps dress uniform"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 65vw"
          className="portrait-image"
        />
        <div className="portrait-shade" />
      </div>
      <header className="portfolio-header">
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
          <Link href="/#story">Story</Link>
          <Link href="/#services">Services</Link>
          <Link className="nav-contact" href={review ? "/" : "/review"}>
            {review ? "Back home" : "Let’s talk"}
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
