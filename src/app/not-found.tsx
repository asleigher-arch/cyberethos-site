import Link from "next/link";
import PublicFrame, { Arrow } from "@/components/portfolio/PublicFrame";

export default function NotFound() {
  return (
    <PublicFrame review>
      <main id="main" className="review-main">
        <div className="review-heading">
          <p className="technical-label">404 / Page not found</p>
          <h1>
            Not every path
            <br />
            <em>leads somewhere.</em>
          </h1>
          <p>
            This page doesn’t exist. Head back to the story, or start a
            conversation about a security review.
          </p>
          <div className="form-actions">
            <Link href="/" className="portfolio-button">
              Back to Cyber Ethos <Arrow />
            </Link>
          </div>
        </div>
      </main>
    </PublicFrame>
  );
}
