"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const navItems = [
  ["Home", "#top"],
  ["Solutions", "#solutions"],
  ["Systems", "#systems"],
  ["About", "#about"],
  ["Community", "#community"],
  ["Contact", "#contact"]
];

const heroCards = [
  ["AI Automation", "#ai-automation", "Replace busywork with intelligent operating loops."],
  ["Cybersecurity", "#cybersecurity", "Protect systems, access, workflows, and trust."],
  ["Web Systems", "#web-systems", "Build a premium digital foundation that converts."]
];

const solutionCards = [
  ["AI Automation", "Design automations that route, draft, summarize, and prepare work for human approval."],
  ["Agentic Workflows", "Build agents with clear jobs, tool boundaries, memory, review, and measurable outcomes."],
  ["Website Builds & Maintenance", "Create and maintain premium websites that support sales, trust, and operational clarity."],
  ["Cybersecurity", "Harden business operations with practical safeguards, access cleanup, and risk reduction."],
  ["Information Security", "Map data, tools, permissions, and policies so growth does not create invisible exposure."],
  ["Business Process Automation", "Turn repetitive workflows into structured systems that save time and reduce mistakes."]
];

const workflowSteps = [
  ["Manual Process", "Scattered work, repeated decisions, missed follow-ups."],
  ["AI Automation", "Agents draft, route, summarize, and prepare actions."],
  ["Secure System", "Permissions, approvals, logs, and controls protect the workflow."],
  ["Measurable Outcome", "Less drag, better visibility, faster execution."]
];

const communityCards = [
  "AI automation lessons",
  "Agentic workflow breakdowns",
  "Secure web systems",
  "Practical scaling tools"
];

export default function HomePage() {
  return (
    <main className="ce-site">
      <FloatingNavbar />
      <Hero />
      <Mission />
      <Solutions />
      <Workflow />
      <FounderTrust />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function FloatingNavbar() {
  return (
    <header className="floating-nav">
      <a className="brand-lockup" href="#top" aria-label="Cyber Ethos home">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href="#contact">
        Start
      </a>
    </header>
  );
}

function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 24 });
  const sy = useSpring(my, { stiffness: 70, damping: 24 });
  const bgX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const bgY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const cardX = useTransform(sx, [-0.5, 0.5], [20, -20]);
  const cardY = useTransform(sy, [-0.5, 0.5], [14, -14]);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section id="top" className="hero-world" onMouseMove={handleMove} onMouseLeave={() => { mx.set(0); my.set(0); }}>
      <Motion.div className="hero-sunfield" style={{ x: bgX, y: bgY }} />
      <Motion.div className="hero-cloud cloud-a" style={{ x: bgX }} />
      <Motion.div className="hero-cloud cloud-b" style={{ x: cardX }} />
      <Motion.div className="hero-ridge ridge-far" style={{ x: cardX }} />
      <Motion.div className="hero-ridge ridge-near" style={{ x: bgX }} />
      <Motion.div className="hero-lightbeam beam-a" style={{ x: bgX }} />
      <Motion.div className="hero-lightbeam beam-b" style={{ x: cardX }} />

      <div className="hero-inner">
        <FadeIn className="hero-copy">
          <p className="section-kicker">Premium AI automation and secure systems</p>
          <h1>AI Automation. Secure Systems. Real Impact.</h1>
          <p>
            Cyber Ethos builds intelligent automation and secure digital infrastructure
            that help modern businesses operate smarter, scale faster, and stay protected.
          </p>
          <div className="hero-actions">
            <a href="#solutions">Explore Solutions</a>
            <a href="#community">Join the Community</a>
          </div>
        </FadeIn>

        <Motion.div className="hero-card-rail" style={{ x: cardX, y: cardY }}>
          {heroCards.map(([title, href, copy], index) => (
            <Motion.a
              key={title}
              href={href}
              className="hero-float-card"
              initial={{ opacity: 0, x: 36, filter: "blur(16px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{title}</strong>
              <span>{copy}</span>
            </Motion.a>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission-section">
      <FadeIn className="mission-copy">
        <p className="section-kicker">Mission</p>
        <h2>Technology should create freedom, not complexity.</h2>
        <p>
          Cyber Ethos builds systems that reduce busywork, protect operations,
          and help business owners focus on growth. The goal is not more tools.
          The goal is a calmer business machine with clearer decisions, safer
          workflows, and more time for the work that matters.
        </p>
      </FadeIn>
      <FadeIn delay={0.12}>
        <div className="mission-orbital" aria-hidden="true">
          <span className="orbital-core">CE</span>
          <span className="orbital-ring one" />
          <span className="orbital-ring two" />
          <span className="orbital-dot dot-one" />
          <span className="orbital-dot dot-two" />
          <span className="orbital-dot dot-three" />
        </div>
      </FadeIn>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="solutions-section">
      <FadeIn className="section-heading">
        <p className="section-kicker">Solutions</p>
        <h2>Systems for businesses ready to operate differently.</h2>
      </FadeIn>
      <Stagger className="solutions-grid">
        {solutionCards.map(([title, copy], index) => (
          <StaggerItem key={title}>
            <Motion.article
              id={title === "AI Automation" ? "ai-automation" : title === "Cybersecurity" ? "cybersecurity" : title === "Website Builds & Maintenance" ? "web-systems" : undefined}
              className="solution-card"
              whileHover={{ y: -10, rotate: index % 2 ? 0.5 : -0.5 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <div className="solution-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Workflow() {
  return (
    <section id="systems" className="workflow-section">
      <FadeIn className="section-heading centered">
        <p className="section-kicker">Interactive Workflow</p>
        <h2>From manual drag to measurable operating leverage.</h2>
      </FadeIn>
      <div className="workflow-stage">
        {workflowSteps.map(([title, copy], index) => (
          <Motion.div
            key={title}
            className="workflow-node"
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{title}</strong>
            <p>{copy}</p>
          </Motion.div>
        ))}
        <div className="workflow-line" aria-hidden="true" />
      </div>
    </section>
  );
}

function FounderTrust() {
  return (
    <section id="about" className="founder-section">
      <FadeIn className="founder-panel">
        <p className="section-kicker">Founder-led Trust</p>
        <h2>Iraq-born Marine veteran and cybersecurity engineer building mission-driven technology solutions for modern businesses.</h2>
      </FadeIn>
      <FadeIn delay={0.12} className="founder-text">
        <p>
          Cyber Ethos is built with a simple operating belief: technology should
          make people more capable, not more buried. The work combines discipline,
          information security, AI automation, and practical systems thinking into
          solutions that business owners can trust.
        </p>
      </FadeIn>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="community-section">
      <FadeIn className="community-copy">
        <p className="section-kicker">Community</p>
        <h2>Learn the systems behind modern AI-enabled businesses.</h2>
        <p>
          Join the Cyber Ethos community to learn AI automation, agentic workflows,
          secure web systems, and practical tools for scaling modern businesses.
        </p>
        <a href="#contact">Join the Community</a>
      </FadeIn>
      <Stagger className="community-stack">
        {communityCards.map((item) => (
          <StaggerItem key={item} className="community-chip">
            {item}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="final-cta">
      <FadeIn>
        <p className="section-kicker">Start Your Transformation</p>
        <h2>Build the business machine before the pressure hits.</h2>
        <p>
          Automate what slows you down. Secure what matters. Scale with systems that work.
        </p>
        <a href="mailto:contact@cyberethos.org">Start Your Transformation</a>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#top">Cyber Ethos</a>
      <span>AI automation, secure web systems, and information security solutions.</span>
    </footer>
  );
}
