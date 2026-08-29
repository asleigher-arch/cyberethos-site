"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { MagneticCard, MotionReveal, StaggerList } from "@/components/MotionEffects";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Tech%20Cleanup%20Call&body=Name%3A%0ACompany%3A%0AWebsite%3A%0A%0AWhat%20feels%20messy%20right%20now%3F%0A%0AWhat%20tools%2C%20accounts%2C%20or%20workflows%20need%20attention%3F%0A%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20technical%20help%2C%20or%20automation%3F%0A";

const messageItems = [
  "Your business name and website",
  "What feels messy, manual, exposed, or hard to manage",
  "Which tools your team uses every week",
  "Whether you need VA, automation, security, or engineering help",
  "What you want fixed first"
];

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="mp-contact-hero">
        <div className="mp-background" aria-hidden="true" />
        <div className="mp-shell mp-two-col">
          <MotionReveal>
            <p className="mp-eyebrow">BOOK A TECH CLEANUP CALL</p>
            <h1>Send the messy version.</h1>
            <p className="mp-lede">
              Tell Cyber Ethos what is slowing the business down. We will help turn scattered tools, weak access, manual work, and unclear handoffs into a practical plan.
            </p>
            <div className="mp-actions">
              <a className="mp-primary" href={emailUrl}>Email Cyber Ethos</a>
              <a className="mp-secondary" href="mailto:info@cyberethos.org">info@cyberethos.org</a>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <MagneticCard className="mp-contact-card">
              <h2>Good first message</h2>
              <StaggerList items={messageItems} />
            </MagneticCard>
          </MotionReveal>
        </div>
      </section>
      <section className="mp-section">
        <div className="mp-shell mp-service-grid two">
          <MotionReveal>
            <MagneticCard>
              <h3>No password handoff required</h3>
              <p>The first step is a guided review. Sensitive access can be handled later using safer methods if implementation work is approved.</p>
            </MagneticCard>
          </MotionReveal>
          <MotionReveal delay={0.06}>
            <MagneticCard>
              <h3>Best fit</h3>
              <p>Small business owners who want practical help with tech cleanup, secure delegation, automation, or direct technical implementation.</p>
            </MagneticCard>
          </MotionReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
