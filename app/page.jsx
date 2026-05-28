"use client";

import GlassCard from "@/components/GlassCard";
import HeroScene from "@/components/HeroScene";
import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const systems = [
  {
    id: "ai-automation",
    eyebrow: "AI Automation",
    title: "Agents that quietly move work forward.",
    body: "Inbox triage, research, client intake, reporting, and content workflows designed as calm operational systems with approval points."
  },
  {
    id: "cybersecurity",
    eyebrow: "Cybersecurity",
    title: "Security woven into the operating layer.",
    body: "Permissions, access, data flow, vendor risk, and practical safeguards before automation gets deeper into the business."
  },
  {
    id: "web-systems",
    eyebrow: "Web Systems",
    title: "Websites that feel like living business infrastructure.",
    body: "Premium positioning, responsive design, conversion paths, and brand presence that feels intentional instead of assembled."
  },
  {
    id: "integrations",
    eyebrow: "Integrations",
    title: "Your tools connected without turning into chaos.",
    body: "Email, calendars, CRMs, Whop, Telegram, docs, and internal workflows connected with scope, logs, and clear ownership."
  },
  {
    id: "monitoring",
    eyebrow: "Monitoring",
    title: "Visibility across the machine.",
    body: "Dashboards, alerts, workflow status, task summaries, and review trails that make the business easier to understand."
  },
  {
    id: "community",
    eyebrow: "Community",
    title: "A human ecosystem around the systems.",
    body: "Member content, resources, operator updates, and community spaces that support the brand beyond the main website."
  }
];

const phases = ["Observe", "Design", "Automate", "Secure", "Monitor", "Evolve"];

export default function HomePage() {
  return (
    <main className="site-canvas">
      <SiteHeader />
      <HeroScene />

      <section className="story-band">
        <FadeIn className="story-copy">
          <p className="eyebrow">New Architecture</p>
          <h2>Cyber Ethos is an operating environment, not an agency template.</h2>
          <p>
            The brand is built around a founder-led mission: turn pressure, scattered
            tools, and manual work into calm AI-enabled systems businesses can trust.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <GlassCard className="mission-card">
            <span>Mission Signal</span>
            <strong>Human command over intelligent systems.</strong>
            <p>
              Marine veteran perspective, cybersecurity discipline, and practical AI
              workflows shaped into one premium business ecosystem.
            </p>
          </GlassCard>
        </FadeIn>
      </section>

      <section className="immersive-strip">
        <Stagger className="phase-track">
          {phases.map((phase) => (
            <StaggerItem key={phase} className="phase-node">
              <span />
              <strong>{phase}</strong>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="system-sections">
        {systems.map((system, index) => (
          <article id={system.id} className="system-chapter" key={system.id}>
            <FadeIn className="chapter-text">
              <p className="eyebrow">{system.eyebrow}</p>
              <h2>{system.title}</h2>
              <p>{system.body}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Motion.div
                className="chapter-visual"
                whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -3 : 3 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <div className="visual-orb" />
                <div className="visual-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-meta">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{system.eyebrow}</strong>
                </div>
              </Motion.div>
            </FadeIn>
          </article>
        ))}
      </section>

      <section className="final-world" id="contact">
        <FadeIn>
          <p className="eyebrow">Begin</p>
          <h2>Build the operating system behind the business.</h2>
          <p>
            Start with one workflow, one website, one security foundation, or the whole
            ecosystem. The point is to make the business feel lighter, clearer, and alive.
          </p>
          <div className="cta-row">
            <a className="primary-cta" href="mailto:contact@cyberethos.org">Start the conversation</a>
            <a className="secondary-cta" href="#top">Return to environment</a>
          </div>
        </FadeIn>
      </section>

      <footer className="site-footer">
        <a href="#top">Cyber Ethos</a>
        <span>AI automation, cybersecurity, web systems, integrations, monitoring, and community.</span>
      </footer>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="site-nav">
      <a className="nav-brand" href="#top">
        <span>CE</span>
        Cyber Ethos
      </a>
      <nav>
        <a href="#ai-automation">Automation</a>
        <a href="#cybersecurity">Security</a>
        <a href="#web-systems">Web</a>
      </nav>
      <a className="nav-action" href="#contact">Begin</a>
    </header>
  );
}
