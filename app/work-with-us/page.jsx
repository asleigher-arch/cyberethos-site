"use client";

import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const whopUrl = "https://whop.com/cyber-ethos/";
const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@cyberethos.org&su=Cyber%20Ethos%20Project%20Inquiry";

const services = [
  {
    title: "AI Automation",
    copy: "Turn repeatable tasks, messages, research, follow-ups, and internal handoffs into clean AI-assisted workflows."
  },
  {
    title: "Secure Web Systems",
    copy: "Build modern websites and simple digital systems that look credible, load fast, and support real business operations."
  },
  {
    title: "Information Security",
    copy: "Reduce risk across accounts, permissions, workflows, data handling, and the tools your business depends on."
  }
];

const outcomes = [
  "Less manual busywork",
  "Cleaner customer intake",
  "Better follow-up systems",
  "Sharper web presence",
  "Safer access and operations",
  "More time for growth"
];

export default function WorkWithUsPage() {
  return (
    <main className="site-shell">
      <SiteWatermark />
      <Nav />
      <section className="page-hero">
        <FadeIn>
          <p className="eyebrow">Work With Us</p>
          <h1>Build the system your business keeps needing.</h1>
          <p>
            Automation, website infrastructure, and practical information security
            built around the way your business actually operates.
          </p>
        </FadeIn>
      </section>
      <Services />
      <Process />
      <FinalCTA />
    </main>
  );
}

function SiteWatermark() {
  return (
    <div className="site-watermark" aria-hidden="true">
      <div className="watermark-glow" />
      <div className="watermark-image" />
    </div>
  );
}

function Nav() {
  return (
    <header className="nav-glass">
      <a href="/" className="brand">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/work-with-us">Work With Us</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Contact
      </a>
    </header>
  );
}

function Services() {
  return (
    <section className="work-page">
      <FadeIn className="section-intro">
        <p className="eyebrow">Services</p>
        <h2>Three focused ways to make the business cleaner, faster, and safer.</h2>
      </FadeIn>

      <Stagger className="service-grid">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <Motion.article className="service-card" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 180, damping: 20 }}>
              <div className="service-orb" />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </Motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Process() {
  return (
    <section className="process">
      <FadeIn className="process-card">
        <p className="eyebrow">Simple Process</p>
        <h2>Map the mess. Build the system. Keep it useful.</h2>
        <div className="outcome-list">
          {outcomes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="final-band">
      <FadeIn>
        <p className="eyebrow">Cyber Ethos</p>
        <h2>Automate what slows you down. Secure what matters.</h2>
        <p>
          Send the workflow, website problem, or security concern you want fixed.
          We will turn it into a practical system.
        </p>
        <div className="contact-direct">
          <span>Email</span>
          <strong>info@cyberethos.org</strong>
        </div>
        <div className="final-actions">
          <a href={emailUrl} target="_blank" rel="noreferrer">Start a project</a>
          <a className="secondary-action" href={whopUrl} target="_blank" rel="noreferrer">
            Join Whop - $29/mo
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
