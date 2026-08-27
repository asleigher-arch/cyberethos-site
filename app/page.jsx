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
    title: "Offshore support fit",
    text: "Where full-time or part-time virtual assistants and direct technical talent can remove bottlenecks without losing control."
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
  { label: "TALENT FIT", value: "76", note: "Strong support and delivery potential." }
];

const process = [
  "Map how work actually moves",
  "Find the gaps creating risk or wasted time",
  "Separate quick fixes from deeper cleanup",
  "Deliver a plain-English action plan"
];

const deliverables = [
  {
    title: "Leak map",
    text: "A plain-English view of where time, trust, control, or security is slipping through the cracks."
  },
  {
    title: "First cleanup moves",
    text: "The few fixes to handle before adding another tool, contractor, virtual assistant, or engineering resource."
  },
  {
    title: "Hiring fit note",
    text: "Which roles can be handled by part-time support, full-time offshore help, or a direct engineering team."
  }
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
        <span className="packet packet-one" />
        <span className="packet packet-two" />
        <span className="packet packet-three" />
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
          <dd>Operations · Security · Talent</dd>
        </div>
        <div>
          <dt>OUTPUT</dt>
          <dd>Prioritized cleanup plan</dd>
        </div>
      </dl>
    </div>
  );
}

function ThreatRadar() {
  return (
    <div className="motion-figure radar-figure" aria-label="Animated visibility radar">
      <span className="motion-label">FIG. 01 · VISIBILITY RADAR</span>
      <div className="radar-screen" aria-hidden="true">
        <span className="radar-ring r1" />
        <span className="radar-ring r2" />
        <span className="radar-ring r3" />
        <span className="radar-sweep" />
        <span className="radar-dot d1" />
        <span className="radar-dot d2" />
        <span className="radar-dot d3" />
        <span className="radar-axis horizontal" />
        <span className="radar-axis vertical" />
      </div>
    </div>
  );
}

function AttackPathFigure() {
  return (
    <div className="motion-figure path-figure" aria-label="Animated attack path map">
      <span className="motion-label">FIG. 02 · GAP MAP</span>
      <div className="path-screen" aria-hidden="true">
        <span className="path-lane lane-one" />
        <span className="path-lane lane-two" />
        <span className="path-lane lane-three" />
        <span className="path-point p1" />
        <span className="path-point p2" />
        <span className="path-point p3" />
        <span className="path-point p4" />
        <span className="path-pulse pulse-one" />
        <span className="path-pulse pulse-two" />
      </div>
    </div>
  );
}

function ReviewSignalFigure() {
  return (
    <div className="motion-figure signal-figure" aria-label="Animated review signal stack">
      <span className="motion-label">FIG. 03 · SIGNAL STACK</span>
      <div className="signal-screen" aria-hidden="true">
        <span className="signal-bar b1" />
        <span className="signal-bar b2" />
        <span className="signal-bar b3" />
        <span className="signal-bar b4" />
        <span className="signal-scan" />
      </div>
    </div>
  );
}

function ResponseLoopFigure() {
  return (
    <div className="motion-figure loop-figure" aria-label="Animated response loop">
      <span className="motion-label">FIG. 04 · CLEANUP LOOP</span>
      <div className="loop-screen" aria-hidden="true">
        <span className="loop-orbit orbit-one" />
        <span className="loop-orbit orbit-two" />
        <span className="loop-core" />
        <span className="loop-marker m1" />
        <span className="loop-marker m2" />
      </div>
    </div>
  );
}

function SecureHandoffFigure() {
  return (
    <div className="motion-figure handoff-figure" aria-label="Animated secure handoff">
      <span className="motion-label">FIG. 05 · SECURE HANDOFF</span>
      <div className="handoff-screen" aria-hidden="true">
        <span className="vault" />
        <span className="handoff-line" />
        <span className="handoff-token" />
        <span className="check-ring" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLayout active="/">
      <section className="operator-hero brief-hero">
        <div className="hero-brief">
          <p className="eyebrow">CYBER ETHOS · SMALL BUSINESS READINESS · OFFSHORE SUPPORT</p>
          <h1>Small businesses do not need more tools. They need clarity on time, trust, and control.</h1>
          <p className="subheading">
            Cyber Ethos reviews your operations, security basics, web intake, and offshore hiring fit, then gives you a practical cleanup and staffing plan.
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
        <div className="split-section illustrated-section">
          <div>
            <h2>Most owners are not missing effort. They are missing visibility.</h2>
            <p>
              Work gets stuck between inboxes, people, tools, vendors, passwords, and websites. Cyber Ethos turns that mess into a short, practical list of what to clean up first.
            </p>
          </div>
          <ThreatRadar />
        </div>
      </section>

      <section className="operator-section" id="gaps">
        <div className="section-kicker"><span>02</span><em>THE GAPS</em></div>
        <div className="section-title illustrated-title">
          <div>
            <h2>Where time, trust, and control break down.</h2>
          </div>
          <AttackPathFigure />
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
              The report is not a generic dashboard. It is a short operator brief showing the friction, risk, and offshore support opportunities that matter right now.
            </p>
            <ReviewSignalFigure />
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

      <section className="operator-section deliverable-section" id="deliverables">
        <div className="section-kicker"><span>04</span><em>WHAT YOU GET</em></div>
        <div className="section-title">
          <h2>A short report owners can actually use.</h2>
        </div>
        <div className="deliverable-grid">
          {deliverables.map((item, index) => (
            <article key={item.title} className="service-card gap-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="operator-section process-section-dark" id="process">
        <div className="section-kicker"><span>05</span><em>PROCESS</em></div>
        <div className="split-section illustrated-section">
          <div>
            <h2>Review the business like an operator, not a software salesperson.</h2>
            <ResponseLoopFigure />
          </div>
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
        <SecureHandoffFigure />
        <a href="/contact">Start the review</a>
      </section>
    </SiteLayout>
  );
}
