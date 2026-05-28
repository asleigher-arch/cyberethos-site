"use client";

import GlassCard from "@/components/GlassCard";
import HeroScene from "@/components/HeroScene";
import { FadeIn, Motion, Stagger, StaggerItem } from "@/components/MotionPrimitives";

const services = [
  {
    eyebrow: "AI Automation",
    title: "Operational agents that remove drag without removing control.",
    body: "Intake, inbox triage, research briefs, content systems, reporting, and follow-up workflows built around approval gates, logs, and defined scope."
  },
  {
    eyebrow: "Web Systems",
    title: "Premium small-business websites built to clarify and convert.",
    body: "Positioning, copy, interface design, mobile polish, analytics readiness, and a clean deployment pipeline that can evolve with the business."
  },
  {
    eyebrow: "Cybersecurity",
    title: "Security foundations before automation gets deeper access.",
    body: "Permissions, data paths, vendor risk, credential hygiene, and practical safeguards around the tools and workflows your business depends on."
  }
];

const workflow = [
  "Capture request",
  "Classify intent",
  "Pull context",
  "Draft output",
  "Require approval",
  "Log decision"
];

const results = [
  ["Less manual work", "Turn repeated tasks into reviewed operating loops."],
  ["Cleaner web presence", "A site that feels like the company you are building toward."],
  ["Safer automation", "Use AI without handing the whole business to a black box."],
  ["Founder clarity", "A brand voice grounded in service, discipline, and execution."]
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ethos-black text-ethos-bone">
      <div className="ambient-field" />
      <SiteHeader />

      <section id="top" className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:pt-24">
        <FadeIn>
          <p className="eyebrow">Mission-driven AI systems for modern businesses</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3.65rem,8.2vw,8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-ethos-bone">
            Built for the calm inside the pressure.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ethos-fog/86 sm:text-xl">
            Cyber Ethos builds AI automation, operational websites, and cybersecurity
            foundations for businesses that need speed without losing command.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="premium-button" href="#contact">Start the mission</a>
            <a className="ghost-button" href="#systems">See the operating model</a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <HeroScene />
        </FadeIn>
      </section>

      <section className="section-shell border-y border-white/10 py-10">
        <Stagger className="grid gap-4 text-sm text-ethos-fog/70 sm:grid-cols-3">
          {["Marine veteran founder", "AI workflow operator", "Cybersecurity-aware execution"].map((item) => (
            <StaggerItem key={item} className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-ethos-blue/70 to-transparent" />
              <span className="font-medium uppercase tracking-[0.16em]">{item}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="mission" className="section-shell grid gap-12 py-28 lg:grid-cols-[0.78fr_1.22fr]">
        <FadeIn>
          <p className="eyebrow">Founder Mission</p>
          <h2 className="section-title">Systems built by someone who understands pressure.</h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <GlassCard className="p-7 sm:p-10">
            <p className="text-2xl leading-10 tracking-[-0.03em] text-ethos-silver sm:text-4xl sm:leading-[1.12]">
              Cyber Ethos exists to help small businesses move with the discipline of
              an elite operation: clear mission, controlled tools, visible risk, and
              AI systems that serve the human in command.
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-ethos-fog/78">
              The brand is founder-led by a Marine veteran with experience shaped by Iraq,
              cybersecurity, and the practical reality of building AI workflows that have
              to work when the task is messy.
            </p>
          </GlassCard>
        </FadeIn>
      </section>

      <section id="systems" className="section-shell py-24">
        <FadeIn className="max-w-4xl">
          <p className="eyebrow">AI Automation Systems</p>
          <h2 className="section-title">Not prompts. Operating systems.</h2>
          <p className="section-copy">
            Every build starts with the work, the risk, the tool access, and the point where
            a human must stay in the loop.
          </p>
        </FadeIn>
        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <GlassCard className="group min-h-[360px] p-7 transition duration-300 hover:-translate-y-1 hover:border-ethos-blue/40">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ethos-beige/80">
                  {service.eyebrow}
                </span>
                <h3 className="mt-8 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-ethos-bone">
                  {service.title}
                </h3>
                <p className="mt-6 leading-7 text-ethos-fog/74">{service.body}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">Workflow Visualization</p>
            <h2 className="section-title">A quiet command layer over the work.</h2>
            <p className="section-copy">
              The system watches the flow of work, prepares the next action, and stops at
              decision points where judgment matters.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GlassCard className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(137,174,232,0.2),transparent_30%)]" />
              <div className="relative grid gap-3">
                {workflow.map((step, index) => (
                  <Motion.div
                    key={step}
                    className="workflow-row"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.58 }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                    <small>{index === 4 ? "Human command" : "System action"}</small>
                  </Motion.div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell py-24">
        <GlassCard className="grid gap-10 overflow-hidden p-7 sm:p-12 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <p className="eyebrow">Cybersecurity + AI Integration</p>
            <h2 className="section-title">Automation should not outrun your controls.</h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="grid gap-4">
              {[
                "Least-privilege access before tool connection",
                "Human approval before public or customer-facing actions",
                "Logs for decisions, outputs, and system behavior",
                "Security review around data sources and workflow permissions"
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-ethos-silver/86">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ethos-blue shadow-[0_0_18px_rgba(137,174,232,0.8)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </GlassCard>
      </section>

      <section className="section-shell py-24">
        <FadeIn className="max-w-4xl">
          <p className="eyebrow">Transformation</p>
          <h2 className="section-title">From scattered tools to a controlled business machine.</h2>
        </FadeIn>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map(([title, body]) => (
            <StaggerItem key={title}>
              <GlassCard className="min-h-[230px] p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-5 leading-7 text-ethos-fog/74">{body}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="contact" className="section-shell pb-12 pt-24">
        <GlassCard className="relative overflow-hidden p-7 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,166,107,0.18),transparent_32%),radial-gradient(circle_at_18%_72%,rgba(137,174,232,0.18),transparent_34%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <FadeIn>
              <p className="eyebrow">Final CTA</p>
              <h2 className="max-w-4xl text-[clamp(3rem,7vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                Build the system you keep promising yourself.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-ethos-fog/78">
                Send the messy version: the workflow, the website, the security concern,
                or the business pressure. Cyber Ethos will turn it into a first controlled build.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <form className="grid gap-3" action="mailto:contact@cyberethos.org" method="post" encType="text/plain">
                <input className="field" name="name" placeholder="Name" required />
                <input className="field" name="email" type="email" placeholder="Email" required />
                <select className="field" name="project" defaultValue="AI automation system">
                  <option>AI automation system</option>
                  <option>Website development</option>
                  <option>Cybersecurity foundation</option>
                  <option>Not sure yet</option>
                </select>
                <textarea className="field min-h-32" name="notes" placeholder="What are we building?" required />
                <button className="premium-button w-full" type="submit">Start the conversation</button>
              </form>
            </FadeIn>
          </div>
        </GlassCard>
      </section>

      <footer className="section-shell flex flex-col gap-5 border-t border-white/10 py-8 text-sm text-ethos-fog/65 sm:flex-row sm:items-center sm:justify-between">
        <a className="flex items-center gap-3 font-semibold text-ethos-bone" href="#top">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-xs">CE</span>
          Cyber Ethos
        </a>
        <p>Mission-driven AI automation, web systems, and cybersecurity foundations.</p>
      </footer>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ethos-black/62 backdrop-blur-2xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%_-_32px))] items-center justify-between py-4">
        <a className="flex items-center gap-3 font-semibold" href="#top">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-xs text-ethos-silver">CE</span>
          <span>Cyber Ethos</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ethos-fog/70 md:flex">
          <a href="#mission">Mission</a>
          <a href="#systems">Systems</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="hidden rounded-full bg-ethos-bone px-5 py-3 text-sm font-semibold text-ethos-black md:inline-flex" href="#contact">
          Start build
        </a>
      </div>
    </header>
  );
}
