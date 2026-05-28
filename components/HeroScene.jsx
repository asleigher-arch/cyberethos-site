"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { Motion } from "./MotionPrimitives";

export default function HeroScene() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 24 });
  const sy = useSpring(my, { stiffness: 70, damping: 24 });
  const driftX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const driftY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const counterX = useTransform(sx, [-0.5, 0.5], [12, -12]);

  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section id="top" className="immersive-hero" onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }}>
      <Motion.div className="hero-sun" style={{ x: driftX, y: driftY }} />
      <Motion.div className="hero-atmosphere left" style={{ x: counterX }} />
      <Motion.div className="hero-atmosphere right" style={{ x: driftX }} />
      <Motion.div className="hero-ray ray-one" style={{ x: driftX }} />
      <Motion.div className="hero-ray ray-two" style={{ x: counterX }} />
      <Motion.div className="hero-landscape far" style={{ x: counterX }} />
      <Motion.div className="hero-landscape near" style={{ x: driftX }} />
      <Motion.div className="hero-figure" style={{ x: counterX }} animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <span />
      </Motion.div>

      <div className="hero-center">
        <Motion.p
          className="micro-label"
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Ambient AI operating systems
        </Motion.p>
        <Motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          The calm operating layer behind modern business.
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Cyber Ethos turns automation, cybersecurity, web presence, integrations,
          monitoring, and community into one elegant business ecosystem.
        </Motion.p>
      </div>

      <Motion.div className="hero-glass-console" style={{ x: driftX, y: driftY }} animate={{ opacity: [0.88, 1, 0.9] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        <span>Operating Atmosphere</span>
        <strong>6 quiet layers</strong>
        <small>Human command intact</small>
      </Motion.div>
    </section>
  );
}
