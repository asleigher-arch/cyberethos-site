"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { MagneticCard, StaggerList } from "@/components/MotionEffects";

const items = [
  "Where work gets stuck",
  "Which tools create friction",
  "What security basics need attention",
  "What should be delegated to a VA",
  "What should be automated or rebuilt"
];

export default function VisibilityPage() {
  return (
    <SiteLayout>
      <section className="mp-contact-hero compact-page">
        <div className="mp-background" aria-hidden="true" />
        <div className="mp-shell mp-two-col">
          <div>
            <p className="mp-eyebrow">VISIBILITY</p>
            <h1>Know what is actually going on.</h1>
            <p className="mp-lede">Before you automate, delegate, or hire, you need a clear picture of where the business tech is messy and what should be fixed first.</p>
            <div className="mp-actions">
              <a className="mp-primary" href="/contact">Start your review</a>
              <a className="mp-secondary" href="/#process">See the process</a>
            </div>
          </div>
          <MagneticCard>
            <h2>What we look for</h2>
            <StaggerList items={items} />
          </MagneticCard>
        </div>
      </section>
    </SiteLayout>
  );
}
