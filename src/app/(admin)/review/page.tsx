import type { Metadata } from "next";
import PublicFrame from "@/components/portfolio/PublicFrame";
import ReviewRequestForm from "@/components/review/ReviewRequestForm";

export const metadata: Metadata = {
  title: "Request a Security Review | Cyber Ethos",
  description:
    "Start a conversation with Azad about a Cybersecurity Audit, Penetration Testing, or Website Vulnerability Detection. Clear scope comes first.",
};
const serviceNames: Record<string, string> = {
  "cybersecurity-audit": "Cybersecurity Audit",
  "penetration-testing": "Penetration Testing",
  "website-vulnerability-detection": "Website Vulnerability Detection",
};
export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const selected =
    typeof params.service === "string" &&
    Object.hasOwn(serviceNames, params.service)
      ? serviceNames[params.service]
      : "";
  return (
    <PublicFrame review>
      <main id="main" className="review-main">
        <div className="review-layout">
          <div>
            <div className="review-heading">
              <p className="technical-label">Contact / Define the scope</p>
              <h1>
                Let’s take
                <br />
                <em>a closer look.</em>
              </h1>
              <p>
                Tell me what you’re working with and what concerns you. We’ll
                start with scope, authorization, and whether the work is a good
                fit.
              </p>
            </div>
            <ReviewRequestForm initialService={selected} />
          </div>
          <aside className="review-aside">
            <section>
              <span className="technical-label">A direct conversation</span>
              <h2>
                Founder-led.
                <br />
                Clearly scoped.
              </h2>
              <p>
                You’re reaching Azad, the founder of Cyber Ethos. Marine
                veteran, former Special Operations interpreter in Iraq, and
                cybersecurity student.
              </p>
              <p>No automated scan starts when you fill out this form.</p>
            </section>
            <section>
              <span className="technical-label">What happens next</span>
              <ol>
                <li>Send your scope and concern by email.</li>
                <li>We discuss fit, permissions, deliverables, and timing.</li>
                <li>
                  Testing begins only after explicit authorization and agreement
                  on the scope.
                </li>
              </ol>
            </section>
            <section>
              <span className="technical-label">
                Keep the first message simple
              </span>
              <p>
                No passwords, private credentials, customer data, or sensitive
                evidence. If needed, we’ll agree on a secure way to share those
                later.
              </p>
              <p>
                Prefer to write directly?
                <br />
                <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
              </p>
            </section>
          </aside>
        </div>
      </main>
    </PublicFrame>
  );
}
