"use client";

import { SiteLayout } from "@/components/SiteLayout";

const gaps = [
  {
    number: "01",
    title: "Operations drag",
    text: "Dropped follow-ups, unclear owners, manual handoffs, and work that lives in someone's head."
  },
  {
    number: "02",
    title: "Security basics",
    text: "Access, passwords, backups, devices, vendor risk, and sensitive data handling before automation."
  },
  {
    number: "03",
    title: "AI workflow fit",
    text: "Where AI can remove friction without creating new exposure, confusion, or loss of control."
  },
  {
    number: "04",
    title: "Web intake",
    text: "The path from visitor to request, and what happens after someone asks for help."
  }
];

const reviewRows = [
  { label: "OVERALL", value: "54", note: "Useful upside. Cleanup needed first." },
  { label: "OPERATIONS", value: "41", note: "Ownership and follow-up gaps." },
  { label: "SECURITY", value: "36", note: "MFA, access, backups, recovery." },
  { label: "AI FIT", value: "76", note: "Strong admin automation potential." }
];

const process = [
  "Map how work actually moves",
  "Find the gaps creating risk or wasted time",
  "Separate quick fixes from deeper cleanup",
  "Deliver a plain-English action plan"
];

function CyberFigure() {
  return (
    <div className="cyber-figure" aria-label="Cyber Ethos readiness schematic">
      <div className="figure-label">FIG. 00</div>
      <div className="schematic" aria-hidden="true">
        <span className="node node-a" />
        <span className="node node-b" />
        <span className="node node-c" />
        <span className="node node-d" />
        <span className="node node-e" />
        <span className="trace trace-one" />
        <span className="trace trace-two" />
        <span className="trace trace-three" />
        <span className="ring ring-one" />
        <span className="ring ring-two" />
      </div>
      <dl className="figure-meta">
        <div>
          <dt>SUBJECT</dt>
          <dd>Cyber Ethos Review</dd>
        </div>
        <div>
          <dt>DOMAIN</dt>
          <dd>Operations · Security · AI</dd>
        </div>
        <div>
          <dt>OUTPUT</dt>
          <dd>Prioritized cleanup plan</dd>
        </div>
      </dl>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLayout active="/">
      <section className="operator-hero brief-hero">
        <div className="hero-brief">
          <p className="eyebrow">CYBER ETHOS · SMALL BUSINESS READINESS · PRACTICAL SECURITY</p>
          <h1>Small businesses do not need more tools. They need to know what is leaking time, trust, and control.</h1>
          <p className="subheading">
            Cyber Ethos reviews your operations, security basics, AI workflow fit, and web intake, then gives you a practical cleanup report.
          </p>
          <div className="hero-actions">
            <a href="/contact">Request review</a>
            <a href="#preview">See the review</a>
          </div>
        </div>
        <CyberFigure />
      </section>

      <section className="operator-section thesis-section" id="thesis">
        <div className="section-kicker"><span>01</span><em>THESIS</em></div>
        <div className="split-section">
          <h2>Most owners are not missing effort. They are missing visibility.</h2>
          <p>
            Work gets stuck between inboxes, people, tools, vendors, passwords, and websites. Cyber Ethos turns that mess into a short, practical list of what to clean up first.
          </p>
        </div>
      </section>

      <section className="operator-section" id="gaps">
        <div className="section-kicker"><span>02</span><em>THE GAPS</em></div>
        <div className="section-title">
          <h2>Where time, trust, and control usually leak.</h2>
        </div>
        <div className="gap-grid">
          {gaps.map((gap) => (
            <article key={gap.title} className="service-card gap-card">
              <span>{gap.number}</span>
              <h3>{gap.title}</h3>
              <p>{gap.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="operator-section review-section" id="preview">
        <div className="section-kicker"><span>03</span><em>REVIEW PREVIEW</em></div>
        <div className="review-layout">
          <div>
            <h2>A clear read on what to fix first.</h2>
            <p>
              The report is not a generic dashboard. It is a short operator brief showing the friction, risk, and automation opportunities that matter right now.
            </p>
          </div>
          <div className="readiness-panel" aria-label="Readiness report preview">
            <div className="readiness-top">
              <p>VISUAL REPORT</p>
              <strong>54</strong>
            </div>
            <div className="readiness-table">
              {reviewRows.map((row) => (
                <div key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                  <p>{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="operator-section process-section-dark" id="process">
        <div className="section-kicker"><span>04</span><em>PROCESS</em></div>
        <div className="split-section">
          <h2>Review the business like an operator, not a software salesperson.</h2>
          <ol className="process-list">
            {process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="operator-section final-review-cta" id="contact">
        <div>
          <p className="eyebrow">REQUEST REVIEW</p>
          <h2>Find the first cleanup moves before buying another tool.</h2>
        </div>
        <a href="/contact">Start the review</a>
      </section>
    </SiteLayout>
  );
}
