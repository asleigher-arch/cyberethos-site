"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import PublicFrame, { Arrow } from "@/components/portfolio/PublicFrame";
import ServicesExperience from "@/components/portfolio/services/ServicesExperience";

const newsletterUrl =
  "https://9d400ade.sibforms.com/serve/MUIFAPExZZx-JCjXBLd6WTYMm8vRj63zvNsbCmkq-1mjrjOv9k_JWEyebEiyItVE_L4EyZ5Xfqn7ErmdwXwYD9Y3SSp1AZpfFY-SMJPjZI2kMDyS7fxtSfotCUyqAufENqxrzITGc-4DKo2hnCJzIFoeLQXtiRaVxjRRA8wNfJHFSKzviHtk067OjA1clW2c4zDXUsRvGTg7jYcFpg==";

const services = [
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit",
    label: "Understand the exposure",
    copy: "A clear look at accounts, access, configurations, and public exposure. Understand the gaps and what deserves attention first.",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    label: "Test the assumptions",
    copy: "Authorized, carefully scoped testing of real attack paths. Defined boundaries, validated findings, and practical remediation guidance.",
  },
  {
    id: "website-vulnerability-detection",
    title: "Website Vulnerability Detection",
    label: "Inspect the surface",
    copy: "Review your website’s exposed surfaces, security headers, forms, and login paths. Find weaknesses before they become someone else’s opportunity.",
  },
];

export default function FounderLinkHubClient() {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    mainRef.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <PublicFrame>
      <main id="main" ref={mainRef}>
        <section className="portfolio-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="technical-label hero-intro">
              <span /> Veteran. Interpreter. Defender.
            </p>
            <h1 id="hero-title">
              A life of service.
              <br />A new <em>front line.</em>
            </h1>
            <p className="hero-description">
              I’m Azad. Marine veteran, former Special Operations interpreter in
              Iraq, and cybersecurity student. This is the next chapter.
            </p>
            <Link href="/review" className="portfolio-button">
              Request a security review <Arrow diagonal />
            </Link>
          </div>
          <div className="hero-bottom">
            <a href="#story" className="scroll-cue">
              <span className="scroll-line" /> Explore the story
            </a>
            <span className="portrait-credit">
              AZAD SLEIGHER <span>FOUNDER / CYBER ETHOS</span>
            </span>
          </div>
        </section>

        <section id="story" className="story-section chapter-section">
          <div className="chapter-heading">
            <span className="technical-label">01 / The foundation</span>
            <span className="chapter-rule" />
          </div>
          <div className="story-copy" data-reveal>
            <h2>
              Different terrain.
              <br />
              <em>The same responsibility.</em>
            </h2>
            <p>
              Before Cyber Ethos, my work was grounded in service: as a Special
              Operations interpreter in Iraq, and as a United States Marine.
            </p>
            <p>
              Those chapters shaped how I approach the next one. Listen
              carefully. Understand the situation. Take responsibility for the
              details.
            </p>
            <p>
              Today, I’m studying cybersecurity and building Cyber Ethos around
              that mindset. Not borrowed authority. A commitment to keep
              learning, ask better questions, and do useful work.
            </p>
            <div className="story-signature">
              <span>Azad Sleigher</span>
              <span className="technical-label">Founder, Cyber Ethos</span>
            </div>
          </div>
        </section>

        <section id="services" className="services-section chapter-section">
          <div className="chapter-heading">
            <span className="technical-label">02 / The work</span>
            <span className="chapter-rule" />
          </div>
          <div className="section-introduction" data-reveal>
            <h2>
              Know where
              <br />
              you <em>stand.</em>
            </h2>
            <p>
              Three focused services. Clear boundaries. Findings you can act on.
              Every engagement starts with a conversation about scope and fit.
            </p>
          </div>
          <ServicesExperience services={services} />
          <p className="scope-note">
            Testing only with explicit authorization and agreed scope. No
            credentials or sensitive data in your first message.
          </p>
        </section>

        <section id="approach" className="approach-section chapter-section">
          <div className="chapter-heading">
            <span className="technical-label">03 / The approach</span>
            <span className="chapter-rule" />
          </div>
          <div className="approach-layout" data-reveal>
            <h2>
              Clarity before
              <br />
              <em>action.</em>
            </h2>
            <ol className="approach-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Define the scope.</h3>
                  <p>
                    Agree on the systems, permissions, boundaries, and what a
                    useful outcome looks like.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Validate the findings.</h3>
                  <p>
                    Investigate within the agreed scope. Separate meaningful
                    risk from noise.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Make the next move clear.</h3>
                  <p>
                    Explain the evidence, the priority, and practical
                    remediation steps in plain language.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="contact" className="contact-section chapter-section">
          <div className="chapter-heading">
            <span className="technical-label">04 / Start a conversation</span>
            <span className="chapter-rule" />
          </div>
          <div data-reveal>
            <h2>
              What needs
              <br />
              <em>a closer look?</em>
            </h2>
            <p>
              A website. A system. A concern you can’t quite put your finger on.
              Tell me where you want to start.
            </p>
            <Link href="/review" className="portfolio-button">
              Request a security review <Arrow diagonal />
            </Link>
            <a className="contact-email" href="mailto:info@cyberethos.org">
              Or email info@cyberethos.org <Arrow />
            </a>
          </div>
        </section>
        <section
          id="newsletter"
          className="newsletter-section chapter-section"
          aria-labelledby="newsletter-title"
        >
          <div className="chapter-heading">
            <h2 id="newsletter-title" className="technical-label">
              05 / The newsletter
            </h2>
            <span className="chapter-rule" />
          </div>
          {/* Brevo owns the signup copy, consent, and confirmation UI. */}
          <iframe
            className="newsletter-frame"
            src={newsletterUrl}
            title="Subscribe to the Cyber Ethos security newsletter"
            loading="lazy"
            width="640"
            height="620"
          />
          <p className="newsletter-fallback">
            Form not loading?{" "}
            <a href={newsletterUrl} target="_blank" rel="noopener noreferrer">
              Open the signup form in a new tab <Arrow diagonal />
            </a>
          </p>
        </section>
      </main>
    </PublicFrame>
  );
}
