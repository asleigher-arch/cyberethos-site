// Seven normalized lanes: intro, then enter/pin for each service. Pure and reversible.
export const LANES=[0,.08,.16,.38,.46,.68,.76,1] as const;
export const PHASES={enter:[0,.16],audit:[.16,.38],probe:[.38,.68],seal:[.68,1]} as const;
const clamp=(n:number)=>Math.min(1,Math.max(0,Number.isFinite(n)?n:0));
export function mapProgress(value:number){
  const master=clamp(value);
  const phase=(r:readonly number[])=>clamp((master-r[0])/(r[1]-r[0]));
  return {master,enter:phase(PHASES.enter),audit:phase(PHASES.audit),probe:phase(PHASES.probe),seal:phase(PHASES.seal),beat:master<.38?0:master<.68?1:2};
}
export type StoryProgress=ReturnType<typeof mapProgress>;
export function createProgressBus(){
  let state=mapProgress(0);
  const listeners=new Set<(p:StoryProgress)=>void>();
  const set=(value:number)=>{state=mapProgress(value);listeners.forEach(fn=>fn(state));};
  return {get:()=>state,set,emit:(lane:number,value:number)=>{if(lane>=0&&lane<7)set(LANES[lane]+(LANES[lane+1]-LANES[lane])*clamp(value));},subscribe:(fn:(p:StoryProgress)=>void)=>{listeners.add(fn);fn(state);return()=>{listeners.delete(fn);};}};
}
