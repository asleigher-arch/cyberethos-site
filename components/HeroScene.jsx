"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { Motion } from "./MotionPrimitives";

const cards = [
  { label: "AI Automation", href: "#ai-automation", detail: "Workflow intelligence" },
  { label: "Cybersecurity", href: "#cybersecurity", detail: "Trust architecture" },
  { label: "Web Systems", href: "#web-systems", detail: "Premium presence" },
  { label: "Integrations", href: "#integrations", detail: "Tool orchestration" },
  { label: "Monitoring", href: "#monitoring", detail: "Operational visibility" },
  { label: "Community", href: "#community", detail: "Human ecosystem" }
];

export default function HeroScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 72, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 72, damping: 24 });
  const skyX = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const skyY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const cardX = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const cardY = useTransform(springY, [-0.5, 0.5], [14, -14]);
  const figureX = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="hero-environment"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <Motion.div className="sun-bloom" style={{ x: skyX, y: skyY }} />
      <Motion.div className="cloud cloud-one" style={{ x: skyX }} />
      <Motion.div className="cloud cloud-two" style={{ x: skyX }} />
      <Motion.div className="ridge ridge-back" style={{ x: skyX }} />
      <Motion.div className="ridge ridge-front" style={{ x: figureX }} />

      <div className="hero-copy">
        <Motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-kicker"
        >
          Cyber Ethos Operating Environment
        </Motion.p>
        <Motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Mission-driven AI systems for modern businesses.
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="hero-subcopy"
        >
          AI automation, cybersecurity, web systems, and operating visibility designed
          as one calm ecosystem.
        </Motion.p>
      </div>

      <Motion.div
        className="human-signal"
        style={{ x: figureX }}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span />
      </Motion.div>

      <Motion.nav className="floating-card-stack" style={{ x: cardX, y: cardY }} aria-label="Cyber Ethos systems">
        {cards.map((card, index) => (
          <Motion.a
            key={card.href}
            href={card.href}
            className="system-card"
            initial={{ opacity: 0, x: 34, filter: "blur(14px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.28 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{card.label}</strong>
            <small>{card.detail}</small>
          </Motion.a>
        ))}
      </Motion.nav>

    </section>
  );
}
