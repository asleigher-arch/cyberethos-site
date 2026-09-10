// Pure, reversible master timeline. No DOM, React, GSAP or renderer ownership.
export const PHASES = { enter: [0, .1], audit: [.1, .4], probe: [.4, .7], seal: [.7, 1] } as const;
const clamp = (n: number) => Math.min(1, Math.max(0, Number.isFinite(n) ? n : 0));
export function mapProgress(value: number) {
  const master = clamp(value);
  const phase = (range: readonly number[]) => clamp((master - range[0]) / (range[1] - range[0]));
  return { master, enter: phase(PHASES.enter), audit: phase(PHASES.audit), probe: phase(PHASES.probe), seal: phase(PHASES.seal), beat: master < .4 ? 0 : master < .7 ? 1 : 2 };
}
export type StoryProgress = ReturnType<typeof mapProgress>;
export function createProgressBus() {
  let state = mapProgress(0);
  const listeners = new Set<(value: StoryProgress) => void>();
  return {
    get: () => state,
    set(value: number) { state = mapProgress(value); listeners.forEach(fn => fn(state)); },
    subscribe(fn: (value: StoryProgress) => void) { listeners.add(fn); fn(state); return () => { listeners.delete(fn); }; },
  };
}
