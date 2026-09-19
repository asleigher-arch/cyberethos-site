"use client";

import { Arrow } from "@/components/portfolio/PublicFrame";
import { NEWSLETTER_URL } from "@/components/portfolio/newsletter";

export default function NewsletterSignup({
  title = "Subscribe to the Cyber Ethos security newsletter",
}: {
  title?: string;
}) {
  return (
    <div className="newsletter-plate">
      <p className="technical-label newsletter-plate-label">Subscribe</p>
      <iframe
        className="newsletter-frame"
        src={NEWSLETTER_URL}
        title={title}
        loading="lazy"
        width="640"
        height="620"
      />
      <p className="newsletter-fallback">
        Form not loading?{" "}
        <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">
          Open the signup form in a new tab <Arrow diagonal />
        </a>
      </p>
    </div>
  );
}
