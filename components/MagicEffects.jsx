"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="magic-aurora" aria-hidden="true">
      <div className="aurora-orb aurora-one" />
      <div className="aurora-orb aurora-two" />
      <div className="aurora-orb aurora-three" />
      <div className="aurora-grid" />
      <div className="aurora-mask" />
    </div>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function ShimmerButton({ href = "/contact", children, className = "" }) {
  return (
    <a className={`shimmer-button ${className}`} href={href}>
      <span>{children}</span>
    </a>
  );
}

export function SpotlightCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });
  const background = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(45, 212, 191, 0.20), transparent 42%)`;

  function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <motion.div className={`spotlight-card ${className}`} onMouseMove={onMouseMove}>
      <motion.div className="spotlight-glow" style={{ background }} />
      <div className="spotlight-content">{children}</div>
    </motion.div>
  );
}

export function AnimatedBeam() {
  return (
    <div className="system-map" aria-label="Animated map showing business tools becoming a cleaner support system">
      <div className="system-node node-owner">Owner</div>
      <div className="system-node node-tools">Tools</div>
      <div className="system-node node-access">Access</div>
      <div className="system-node node-va">VA Support</div>
      <div className="system-node node-engineering">Engineering</div>
      <div className="system-node node-control">Control</div>
      <svg className="beam-svg" viewBox="0 0 760 420" fill="none" role="presentation">
        <path className="beam-path base" d="M130 90 C260 40 330 170 420 118 C520 58 596 98 640 170" />
        <path className="beam-path base" d="M132 92 C245 210 344 252 440 226 C536 200 594 252 650 318" />
        <path className="beam-path base" d="M410 118 C390 205 410 278 520 318" />
        <path className="beam-path moving beam-a" d="M130 90 C260 40 330 170 420 118 C520 58 596 98 640 170" />
        <path className="beam-path moving beam-b" d="M132 92 C245 210 344 252 440 226 C536 200 594 252 650 318" />
        <path className="beam-path moving beam-c" d="M410 118 C390 205 410 278 520 318" />
      </svg>
    </div>
  );
}

export function ProblemMarquee() {
  const items = [
    "Passwords everywhere",
    "Too many tools",
    "No clean handoffs",
    "Manual follow-up",
    "Unclear ownership",
    "Weak backups",
    "VA access risk",
    "Messy inboxes",
    "No simple workflow"
  ];
  return (
    <div className="marquee-wrap" aria-label="Common problems Cyber Ethos fixes">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
