"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { AuroraBackground, Reveal, ShimmerButton, SpotlightCard } from "@/components/MagicEffects";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Tech%20Cleanup%20Call&body=Name%3A%0ACompany%3A%0AWebsite%3A%0A%0AWhat%20feels%20messy%20right%20now%3F%0A%0AWhat%20tools%2C%20accounts%2C%20or%20workflows%20need%20attention%3F%0A%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20technical%20help%2C%20or%20automation%3F%0A";

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="contact-hero">
        <AuroraBackground />
        <div className="site-shell contact-grid">
          <Reveal>
            <p className="eyebrow">BOOK A TECH CLEANUP CALL</p>
            <h1>Send the messy version. We will turn it into a plan.</h1>
            <p>
              Tell Cyber Ethos what is slowing the business down: scattered tools, weak access, manual work, VA handoffs, website issues, or technical gaps.
            </p>
            <div className="hero-actions">
              <ShimmerButton href={emailUrl}>Email Cyber Ethos</ShimmerButton>
              <a className="ghost-link" href="mailto:info@cyberethos.org">info@cyberethos.org</a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SpotlightCard className="contact-card">
              <h2>Good first message</h2>
              <ul>
                <li>Your company and website</li>
                <li>What feels messy or manual</li>
                <li>What tools your team uses</li>
                <li>Whether you need VA, automation, security, or engineering help</li>
                <li>What you want fixed first</li>
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>
      <section className="section-block">
        <div className="site-shell split-layout">
          <Reveal className="glass-panel light-panel">
            <h2>No password handoff required</h2>
            <p>
              The first step is a guided review and plain-English planning call. Sensitive access can be handled later using safer methods if implementation work is approved.
            </p>
          </Reveal>
          <Reveal className="glass-panel light-panel" delay={0.1}>
            <h2>Best fit</h2>
            <p>
              Small business owners who want practical help with tech cleanup, secure delegation, automation, or direct technical implementation.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
