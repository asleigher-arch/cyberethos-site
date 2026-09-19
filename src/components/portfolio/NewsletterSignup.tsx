"use client";

import { useId } from "react";
import { Arrow } from "@/components/portfolio/PublicFrame";
import { NEWSLETTER_URL } from "@/components/portfolio/newsletter";

export default function NewsletterSignup() {
  const emailId = useId();

  return (
    <div className="newsletter-plate">
      <form
        className="newsletter-form"
        action={NEWSLETTER_URL}
        method="POST"
        acceptCharset="UTF-8"
      >
        <div className="newsletter-field">
          <label htmlFor={emailId}>Email address</label>
          <input
            id={emailId}
            type="email"
            name="EMAIL"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </div>
        <p className="newsletter-consent">
          By subscribing, you agree to receive Cyber Ethos emails. Unsubscribe
          anytime.
        </p>
        <button type="submit" className="portfolio-button solid">
          Subscribe
        </button>
        <input
          className="newsletter-honeypot"
          type="text"
          name="email_address_check"
          defaultValue=""
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <input type="hidden" name="locale" value="en" />
      </form>
      <p className="newsletter-fallback">
        Prefer the Brevo page?{" "}
        <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">
          Open the signup form in a new tab <Arrow diagonal />
        </a>
      </p>
    </div>
  );
}
