"use client";

import { SiteLayout } from "@/components/SiteLayout";
import {
  AnimatedBeam,
  AuroraBackground,
  ProblemMarquee,
  Reveal,
  ShimmerButton,
  SpotlightCard
} from "@/components/MagicEffects";

const services = [
  {
    title: "Business Tech Cleanup",
    text: "A focused review of your website, email, domains, passwords, tools, files, backups, and handoffs so you know what to fix first."
  },
  {
    title: "Secure Delegation",
    text: "Set up VAs and offshore support with safer access, clearer roles, better instructions, and less owner bottleneck."
  },
  {
    title: "Automation Systems",
    text: "Replace repeated admin work with simple automations for intake, follow-up, reporting, file routing, and client updates."
  },
  {
    title: "Engineering Help",
    text: "Practical implementation support for websites, forms, integrations, AI workflows, dashboards, and technical cleanup."
  }
];

const cleanupItems = [
  "Website, domain, DNS, and email setup",
  "Password, account, vendor, and file access",
  "Manual admin work and repeated follow-up",
  "VA/offshore support readiness",
  "Security basics, backups, and recovery gaps",
  "Automation and engineering opportunities"
];

const process = [
  ["01", "Map the business", "We look at the actual way work moves through your business, not a fantasy org chart."],
  ["02", "Find the friction", "We identify repeated work, fragile access, unclear handoffs, risky tools, and owner bottlenecks."],
  ["03", "Design the support system", "You get a plain-English plan for what to clean up, automate, delegate, secure, or build."],
  ["04", "Execute what matters", "Cyber Ethos can help implement the highest-value fixes instead of leaving you with a report." ]
];

const metrics = [
  ["Less chaos", "Cleaner tools and responsibilities"],
  ["More control", "Safer access and handoffs"],
  ["More time", "Less repeated manual work"]
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <AuroraBackground />
        <div className="site-shell hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">CYBER ETHOS FOR SMALL BUSINESS OWNERS</p>
            <h1>Get your business tech under control.</h1>
            <p className="hero-lede">
              Practical help with messy tools, weak access, repetitive admin work, basic security, automation, and offshore support without hiring full-time staff.
            </p>
            <div className="hero-actions">
              <ShimmerButton>Book a Tech Cleanup Call</ShimmerButton>
              <a className="ghost-link" href="#offer">See what gets cleaned up</a>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.12}>
            <AnimatedBeam />
            <div className="visual-caption">
              <span>Review</span>
              <span>Clean up</span>
              <span>Secure</span>
              <span>Automate</span>
            </div>
          </Reveal>
        </div>
      </section>

      <ProblemMarquee />

      <section id="offer" className="section-block offer-block">
        <div className="site-shell split-layout">
          <Reveal>
            <p className="eyebrow">THE FIRST OFFER</p>
            <h2>Business Tech Cleanup</h2>
            <p className="section-lede">
              Built for owners who know the back office is messy but do not know where to start. Cyber Ethos turns the mess into a ranked action plan.
            </p>
          </Reveal>
          <Reveal className="glass-panel" delay={0.1}>
            <h3>What you leave with</h3>
            <p>
              A clear list of what to fix now, what to automate, what to delegate, what needs security attention, and what technical help is actually worth paying for.
            </p>
            <div className="check-grid">
              {cleanupItems.map((item) => <span key={item}>✓ {item}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-block services-block">
        <div className="site-shell">
          <Reveal className="section-heading center-heading">
            <p className="eyebrow">SERVICES</p>
            <h2>Small business support where operations, security, and implementation overlap.</h2>
          </Reveal>
          <div className="bento-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <SpotlightCard className={index === 0 ? "wide-card" : ""}>
                  <div className="card-index">0{index + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="section-block dark-showcase">
        <div className="site-shell showcase-grid">
          <Reveal>
            <p className="eyebrow">THE SYSTEM</p>
            <h2>Cleaner handoffs. Safer access. Less owner dependency.</h2>
          </Reveal>
          <Reveal className="workflow-stack" delay={0.12}>
            {metrics.map(([title, text]) => (
              <div className="workflow-row" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="process" className="section-block process-block">
        <div className="site-shell">
          <Reveal className="section-heading">
            <p className="eyebrow">PROCESS</p>
            <h2>A practical path from messy to manageable.</h2>
          </Reveal>
          <div className="timeline-grid">
            {process.map(([num, title, text], index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="timeline-card">
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-block faq-block">
        <div className="site-shell faq-grid">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2>Plain answers before we talk.</h2>
          </Reveal>
          <Reveal className="faq-list" delay={0.1}>
            <details open>
              <summary>Is this only cybersecurity?</summary>
              <p>No. Security is part of the work, but the real goal is control: cleaner tools, safer access, better workflows, and practical implementation help.</p>
            </details>
            <details>
              <summary>Can you help me hire a VA?</summary>
              <p>Yes. Cyber Ethos can help clarify the role, write handoff instructions, identify what should be delegated, and reduce access risk.</p>
            </details>
            <details>
              <summary>Do you need passwords to start?</summary>
              <p>No. The first review can start from screenshots, tool lists, workflows, and guided walkthroughs. Password sharing is not the starting point.</p>
            </details>
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <div className="site-shell final-card">
          <AuroraBackground />
          <Reveal>
            <p className="eyebrow">START HERE</p>
            <h2>Book a Tech Cleanup Call and get a clearer plan.</h2>
            <p>No scare tactics. No jargon. Just practical help getting your business systems under control.</p>
            <ShimmerButton>Book the call</ShimmerButton>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
