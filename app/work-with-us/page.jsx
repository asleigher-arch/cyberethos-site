"use client";

import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const whopUrl = "https://whop.com/cyber-ethos/";
const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@cyberethos.org&su=Cyber%20Ethos%20Operator%20Review";

const offers = [
  {
    title: "Operator Review",
    copy: "A practical assessment of workflow, security, AI readiness, web intake, and where the business is leaking time."
  },
  {
    title: "Workflow Buildout",
    copy: "AI-assisted automations, intake flows, follow-up systems, reports, and team routines built around the way work already moves."
  },
  {
    title: "Security Baseline",
    copy: "Account access, permissions, password habits, data handling, recovery paths, and everyday operating controls made clearer."
  },
  {
    title: "Website and Intake Systems",
    copy: "Sharper service pages, forms, calls to action, lead capture, and handoffs that connect your website to the real operation."
  }
];

const process = [
  "Diagnose the business",
  "Score the operating gaps",
  "Design the workflow",
  "Build the useful pieces",
  "Document and improve"
];

export default function WorkWithUsPage() {
  return (
    <main className="site-shell">
      <Nav />
      <section className="page-hero">
        <FadeIn>
          <p className="eyebrow">Work With Cyber Ethos</p>
          <h1>Operational help for small business owners who need the work to run cleaner.</h1>
          <p>
            We combine operator insight, AI workflow design, information security,
            and web systems into practical service engagements.
          </p>
        </FadeIn>
      </section>
      <Offers />
      <Process />
      <Fit />
      <FinalCTA />
    </main>
  );
}

function Nav() {
  return (
    <header className="nav-bar">
      <a href="/" className="brand">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="#offers">Offers</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Start
      </a>
    </header>
  );
}

function Offers() {
  return (
    <section id="offers" className="service-section">
      <FadeIn className="section-heading">
        <p className="eyebrow">Service Structure</p>
        <h2>Choose the entry point that matches the problem in front of you.</h2>
      </FadeIn>
      <Stagger className="offer-grid">
        {offers.map((offer, index) => (
          <StaggerItem key={offer.title}>
            <Motion.article
              className="offer-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{offer.title}</h3>
              <p>{offer.copy}</p>
            </Motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section">
      <FadeIn className="section-heading">
        <p className="eyebrow">How It Works</p>
        <h2>Assessment first. Build second. Documentation always.</h2>
      </FadeIn>
      <div className="process-track">
        {process.map((step, index) => (
          <div className="process-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section className="fit-section">
      <div>
        <p className="eyebrow">Good Fit</p>
        <h2>You want practical operating leverage, not another shiny tool.</h2>
      </div>
      <div className="fit-list">
        <span>Manual follow-ups keep slipping</span>
        <span>Customer intake is scattered</span>
        <span>Security basics are unclear</span>
        <span>Your website does not support the operation</span>
        <span>You want AI workflow without losing control</span>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="final-band">
      <p className="eyebrow">Cyber Ethos</p>
      <h2>Start with an Operator Review.</h2>
      <p>
        Send the workflow, website problem, security concern, or business process
        you want cleaned up. We will help turn it into a practical plan.
      </p>
      <div className="contact-direct">
        <span>Email</span>
        <strong>info@cyberethos.org</strong>
      </div>
      <div className="final-actions">
        <a href={emailUrl} target="_blank" rel="noreferrer">
          Request a review
        </a>
        <a className="secondary-action" href={whopUrl} target="_blank" rel="noreferrer">
          Join Whop - $29/mo
        </a>
      </div>
    </section>
  );
}
