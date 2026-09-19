import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/portfolio/NewsletterSignup";
import PublicFrame, { Arrow } from "@/components/portfolio/PublicFrame";

export const metadata: Metadata = {
  title: "Subscribe | Cyber Ethos",
  description:
    "Occasional, short notes on staying secure. No product pitches. What Azad is seeing and what he would fix first.",
};

export default function SubscribePage() {
  return (
    <PublicFrame page>
      <main id="main" className="subscribe-main">
        <div className="subscribe-intro">
          <p className="technical-label">The newsletter</p>
          <h1>Plain notes on staying secure</h1>
          <p className="subscribe-lede">
            Occasional, short, no product pitches. What I am seeing and what I
            would fix first.
          </p>
        </div>
        <NewsletterSignup />
        <div className="subscribe-next">
          <p className="technical-label">Need work done?</p>
          <p>If a system needs a closer look, start with a scoped review.</p>
          <Link href="/review" className="portfolio-button ghost">
            Request a security review <Arrow />
          </Link>
        </div>
      </main>
    </PublicFrame>
  );
}
