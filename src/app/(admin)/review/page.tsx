import type { Metadata } from "next";
import PublicFrame from "@/components/portfolio/PublicFrame";
import ReassurancePanel from "@/components/review/ReassurancePanel";
import ReviewRequestForm from "@/components/review/ReviewRequestForm";
import { resolveReviewService } from "@/components/review/services";

export const metadata: Metadata = {
  title: "Request a Security Review | Cyber Ethos",
  description:
    "Start a conversation with Azad about a Cybersecurity Audit, Penetration Testing, or Website Vulnerability Detection. Clear scope comes first.",
};

export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const selected = resolveReviewService(
    typeof params.service === "string" ? params.service : undefined,
  );
  return (
    <PublicFrame review>
      <main id="main" className="review-main">
        <div className="review-heading">
          <p className="technical-label">01 / Scope</p>
          <h1>Request a security review</h1>
          <p className="review-accent">
            <em>Scope first. Authorization before any testing.</em>
          </p>
          <p>
            Tell me what you run and what concerns you. We’ll talk fit,
            permissions, and timing before anything starts.
          </p>
        </div>
        <div className="review-layout">
          <div className="review-form-column">
            <h2 className="technical-label review-section-label">
              02 / Your details
            </h2>
            <ReviewRequestForm
              key={selected || "not-sure"}
              initialService={selected}
            />
          </div>
          <aside className="review-aside" aria-label="What happens next">
            <ReassurancePanel />
          </aside>
        </div>
      </main>
    </PublicFrame>
  );
}
