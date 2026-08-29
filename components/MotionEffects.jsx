"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function MotionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticCard({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 22 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(15, 118, 110, 0.12), transparent 46%)`;

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div className={`mp-card ${className}`} onMouseMove={handleMove} whileHover={{ y: -4 }} transition={{ duration: 0.22 }}>
      <motion.div className="mp-card-light" style={{ background }} />
      <div className="mp-card-body">{children}</div>
    </motion.div>
  );
}

export function TextTicker() {
  const items = [
    "tool sprawl",
    "password risk",
    "manual follow-up",
    "unclear delegation",
    "website fixes",
    "automation gaps",
    "vendor access",
    "VA onboarding",
    "security basics"
  ];

  return (
    <div className="mp-ticker" aria-label="Problems Cyber Ethos helps clean up">
      <div className="mp-ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function WorkflowGraphic() {
  return (
    <div className="workflow-graphic" aria-label="Motion graphic showing cleanup workflow">
      <div className="workflow-noise" />
      <div className="workflow-column left">
        <span>Email</span>
        <span>Files</span>
        <span>Access</span>
        <span>Tasks</span>
      </div>
      <div className="workflow-core">
        <div className="core-ring ring-one" />
        <div className="core-ring ring-two" />
        <div className="core-center">CE</div>
        <svg viewBox="0 0 420 420" role="presentation">
          <path className="flow-base" d="M62 80 C148 114 134 180 210 210 C292 242 278 315 360 342" />
          <path className="flow-line flow-a" d="M62 80 C148 114 134 180 210 210 C292 242 278 315 360 342" />
          <path className="flow-base" d="M64 338 C144 296 116 226 208 210 C292 195 282 110 358 82" />
          <path className="flow-line flow-b" d="M64 338 C144 296 116 226 208 210 C292 195 282 110 358 82" />
        </svg>
      </div>
      <div className="workflow-column right">
        <span>Owner control</span>
        <span>VA handoffs</span>
        <span>Automation</span>
        <span>Safer access</span>
      </div>
    </div>
  );
}

export function StaggerList({ items }) {
  return (
    <div className="stagger-list">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="stagger-item"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </motion.div>
      ))}
    </div>
  );
}
