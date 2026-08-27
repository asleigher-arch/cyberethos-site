"use client";

import { SiteLayout } from "@/components/SiteLayout";

const items = [
  "Where work gets stuck",
  "Which tools create friction",
  "What security basics need attention",
  "What can be automated safely"
];

export default function VisibilityPage() {
  return (
    <SiteLayout active="/visibility">
      <section className="operator-page">
        <p className="eyebrow">Visibility</p>
        <h1>Know what is happening before you add more tools.</h1>
        <p>
          We turn messy workflows, weak handoffs, security basics, and scattered
          intake into a simple support plan.
        </p>

        <div className="visibility-list">
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
