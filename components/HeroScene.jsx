"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { Motion } from "./MotionPrimitives";

export default function HeroScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 28 });
  const panelX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const panelY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const terrainX = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const terrainY = useTransform(springY, [-0.5, 0.5], [8, -8]);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div
      className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glass sm:min-h-[660px] lg:min-h-[720px]"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <Motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(220,226,234,0.34),transparent_22%),radial-gradient(circle_at_70%_42%,rgba(137,174,232,0.18),transparent_38%),linear-gradient(180deg,rgba(19,22,29,0.1),rgba(5,5,5,0.76))]"
        animate={{ opacity: [0.82, 1, 0.88] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <Motion.div
        style={{ x: terrainX, y: terrainY }}
        className="absolute -bottom-16 left-[-18%] h-72 w-[76%] rounded-[50%] bg-[linear-gradient(155deg,rgba(201,189,169,0.42),rgba(42,45,48,0.54)_42%,rgba(5,5,5,0.9))] blur-[1px] sm:h-96"
      />
      <Motion.div
        style={{ x: terrainX, y: terrainY }}
        className="absolute -right-[22%] bottom-14 h-60 w-[72%] rounded-[50%] bg-[linear-gradient(155deg,rgba(137,174,232,0.25),rgba(82,76,67,0.38)_48%,rgba(5,5,5,0.86))] blur-[1px] sm:h-80"
      />
      <Motion.div
        className="absolute left-[18%] top-[16%] h-28 w-28 rounded-full bg-[radial-gradient(circle_at_36%_34%,#f1eee7,rgba(201,189,169,0.42)_24%,rgba(137,174,232,0.08)_62%,transparent_70%)] shadow-glow sm:h-40 sm:w-40"
        animate={{ y: [0, -16, 0], opacity: [0.76, 1, 0.76] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        style={{ x: panelX, y: panelY }}
        className="absolute left-[7%] right-[7%] top-[14%] z-10 mx-auto w-[min(86%,410px)] sm:left-auto sm:right-[9%] sm:top-[16%]"
      >
        <div className="hero-glass">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ethos-fog/70">
            <span>Cyber Ethos OS</span>
            <span>Mission Layer</span>
          </div>
          <div className="mt-20 space-y-5 sm:mt-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ethos-beige/80">Active operation</p>
            <h2 className="max-w-[320px] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-ethos-bone sm:text-[2.85rem]">
              AI systems with human command.
            </h2>
          </div>
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-ethos-blue/70 to-ethos-amber/70" />
          <div className="grid grid-cols-3 gap-4">
            {[
              ["01", "Scope"],
              ["02", "Automate"],
              ["03", "Secure"]
            ].map(([number, label]) => (
              <div key={label}>
                <strong className="block text-2xl text-ethos-bone">{number}</strong>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ethos-fog/68">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            {["Approval gate armed", "Workflow audit active", "Security boundary mapped"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-ethos-silver/80">
                <span className="h-1.5 w-1.5 rounded-full bg-ethos-amber shadow-[0_0_18px_rgba(201,166,107,0.9)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Motion.div>
      <Motion.div
        className="floating-chip left-5 top-10 sm:left-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Founder-led</span>
        <strong>Veteran built</strong>
      </Motion.div>
    </div>
  );
}
