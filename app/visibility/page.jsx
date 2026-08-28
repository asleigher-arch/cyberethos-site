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
      <section className="hp-contact-hero">
        <div>
          <p className="hp-pretitle">Visibility</p>
          <h1>Know what is happening before you add more tools.</h1>
          <p>
            We turn messy workflows, weak handoffs, security basics, and scattered intake into a simple support plan.
          </p>
          <div className="hp-actions">
            <a href="/contact">Start your review</a>
            <a href="/#how">See how it works</a>
          </div>
        </div>
        <aside className="hp-contact-card">
          <p>What we look at</p>
          <ul>
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      </section>
    </SiteLayout>
  );
}
