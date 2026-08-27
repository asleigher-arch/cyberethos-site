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
      <section className="ce-section-v2 ce-intro-v2">
        <p className="ce-kicker">Visibility</p>
        <h1>Know what is happening before you add more tools.</h1>
        <p>
          We turn messy workflows, weak handoffs, security basics, and scattered intake into a simple support plan.
        </p>
        <div className="ce-role-list-v2">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
