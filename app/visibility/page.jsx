"use client";

import { SiteLayout } from "@/components/SiteLayout";

const items = [
  "Where work gets stuck",
  "Which tools create friction",
  "What security basics need attention",
  "What should be delegated safely"
];

export default function VisibilityPage() {
  return (
    <SiteLayout active="/visibility">
      <section className="aw-page-hero compact">
        <p className="aw-kicker">Visibility</p>
        <h1>Know what is happening before you add more tools.</h1>
        <p>We turn messy workflows, weak handoffs, security basics, and scattered intake into a simple support plan.</p>
        <div className="aw-actions">
          <a className="aw-primary" href="/contact">Start your review</a>
          <a className="aw-secondary" href="/#process">See how it works</a>
        </div>
      </section>

      <section className="aw-section">
        <div className="aw-check-grid standalone">
          {items.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
    </SiteLayout>
  );
}
