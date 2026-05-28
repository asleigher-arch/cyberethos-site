"use client";

import HeroScene from "@/components/HeroScene";
import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const systemCards = [
  ["AI Automation", "Quiet work loops with judgment preserved."],
  ["Cybersecurity", "Trust boundaries before deeper access."],
  ["Web Systems", "A premium presence that feels inevitable."],
  ["Integrations", "Tools composed into one environment."],
  ["Monitoring", "Signals without noise."],
  ["Community", "The human layer around the machine."]
];

const founderSignals = [
  "Marine veteran founded",
  "Iraq-shaped operating discipline",
  "Cybersecurity background",
  "AI workflow builder"
];

const flow = ["Signal", "Context", "Decision", "Approval", "Action", "Memory"];

export default function HomePage() {
  return (
    <main className="experience-shell">
      <CinematicNavbar />
      <HeroScene />

      <section id="cards" className="interface-orbit">
        <FadeIn className="orbit-copy">
          <p className="micro-label">Interactive Command Surfaces</p>
          <h2>Six surfaces. One atmosphere.</h2>
        </FadeIn>
        <Stagger className="orbit-grid">
          {systemCards.map(([title, body], index) => (
            <StaggerItem key={title}>
              <Motion.a
                href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
                className="orbit-card"
                whileHover={{ y: -10, rotate: index % 2 === 0 ? -1.2 : 1.2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </Motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="ai-automation" className="ai-systems-section">
        <div className="section-frame">
          <FadeIn className="section-statement">
            <p className="micro-label">Dynamic AI Systems</p>
          <h2>Automation that disappears into the rhythm of the business.</h2>
          </FadeIn>
          <div className="constellation">
            {["Intake", "Research", "Drafting", "Review", "Follow-up"].map((item, index) => (
              <Motion.div
                key={item}
                className="constellation-node"
                initial={{ opacity: 0, scale: 0.86 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <span />
                {item}
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <FadeIn className="founder-card">
          <p className="micro-label">Founder Mission</p>
          <h2>Built from service, pressure, and the discipline to keep systems human.</h2>
          <p>
          Cyber Ethos is founder-led by a Marine veteran with roots in Iraq,
          cybersecurity, and AI workflows. The mission is simple: make the
          business feel clearer, lighter, and more controlled.
          </p>
        </FadeIn>
        <Stagger className="signal-list">
          {founderSignals.map((signal) => (
            <StaggerItem key={signal} className="signal-item">
              <span />
              {signal}
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="workflow-section">
        <FadeIn className="workflow-heading">
          <p className="micro-label">Workflow Visualization</p>
          <h2>Every action should move through context, judgment, and memory.</h2>
        </FadeIn>
        <div className="flow-ribbon">
          {flow.map((item, index) => (
            <Motion.div
              key={item}
              className="flow-step"
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.06 }}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{item}</strong>
            </Motion.div>
          ))}
        </div>
      </section>

      <section id="integrations" className="ecosystem-section">
        <div className="ecosystem-visual" aria-hidden="true">
          <span className="eco-core">CE</span>
          <span className="eco-ring one" />
          <span className="eco-ring two" />
          <span className="eco-dot dot-a" />
          <span className="eco-dot dot-b" />
          <span className="eco-dot dot-c" />
        </div>
        <FadeIn className="ecosystem-copy">
          <p className="micro-label">Integrated Systems Ecosystem</p>
          <h2>Web, AI, security, community, and monitoring as one living atmosphere.</h2>
          <p>
          The result is not a pile of tools. It is a connected atmosphere where
          the website creates trust, agents move work, security defines boundaries,
          and monitoring keeps the operator aware.
          </p>
        </FadeIn>
      </section>

      <section id="contact" className="cinematic-cta">
        <FadeIn>
          <p className="micro-label">Begin the Build</p>
          <h2>Make the business feel like it already arrived.</h2>
          <p>
            Send the messy version of what you want Cyber Ethos to become. We will keep
            shaping it into a premium AI operating environment.
          </p>
          <div className="cta-actions">
            <a href="mailto:contact@cyberethos.org">Start the conversation</a>
            <a href="#top">Return to top</a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

function CinematicNavbar() {
  return (
    <header className="cinematic-nav">
      <a className="nav-identity" href="#top">
        <span>CE</span>
        <strong>Cyber Ethos</strong>
      </a>
      <nav>
        <a href="#cards">Systems</a>
        <a href="#ai-automation">AI</a>
        <a href="#integrations">Ecosystem</a>
      </nav>
      <a className="nav-pill" href="#contact">Begin</a>
    </header>
  );
}
