"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Arrow } from '../PublicFrame';
import { createProgressBus } from './progress';
import './services.css';
type Service = { id: string; title: string; label: string; copy: string };
export default function ServicesExperience({ services }: { services: Service[] }) {
  const root=useRef<HTMLDivElement>(null), host=useRef<HTMLDivElement>(null);
  const [still,setStill]=useState(false);
  useEffect(()=>{
    const section=root.current, canvasHost=host.current;
    if(!section||!canvasHost||still)return;
    let disposed=false,cleanup=()=>{};
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const start=async()=>{
      cleanup(); section.dataset.mode='static';
      if(disposed||motion.matches)return;
      try {
        const [{createWorkstation},{gsap},{ScrollTrigger},{default:Lenis}]=await Promise.all([import('./workstation'),import('gsap'),import('gsap/ScrollTrigger'),import('lenis')]);
        if(disposed||motion.matches)return;
        gsap.registerPlugin(ScrollTrigger);
        const bus=createProgressBus();
        const scene=await createWorkstation(canvasHost,()=>{cleanup();section.dataset.mode='static';});
        if(disposed||motion.matches){scene.dispose();return;}
        section.dataset.mode='motion';
        const lenis=new Lenis({autoRaf:false,lerp:.075,anchors:true});
        const tick=(time:number)=>lenis.raf(time*1000);
        lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(tick);
        const unsubscribe=bus.subscribe(p=>{scene.draw(p);section.dataset.progress=p.master.toFixed(4);section.dataset.beat=String(p.beat);});
        const timelines: ReturnType<typeof gsap.timeline>[]=[];
        const lane=(id:number,trigger:Element,start:string,end:string|(()=>string),pin?:Element)=>{
          const driver={value:0};
          const tl=gsap.timeline({scrollTrigger:{id:`ce-services-${id}`,trigger,start,end,pin:pin||false,scrub:true,invalidateOnRefresh:true,anticipatePin:1}});
          tl.to(driver,{value:1,ease:'none',onUpdate:()=>bus.emit(id,driver.value)});timelines.push(tl);
        };
        lane(0,section.querySelector('.ce-intro')!,'top bottom','bottom top');
        section.querySelectorAll('.ce-beat').forEach((beat,index)=>{
          lane(index*2+1,beat,'top bottom','top top');
          lane(index*2+2,beat,'top top',()=>`+=${innerHeight*1.15}`,beat);
        });
        let cleaned=false;
        cleanup=()=>{if(cleaned)return;cleaned=true;timelines.forEach(t=>{t.scrollTrigger?.kill();t.kill();});gsap.ticker.remove(tick);lenis.destroy();unsubscribe();scene.dispose();section.dataset.mode='static';};
        ScrollTrigger.refresh();
      }catch(error){console.warn('Cinematic services unavailable; secure still retained.',error);cleanup();section.dataset.mode='static';}
    };
    void start();motion.addEventListener('change',start);
    return()=>{disposed=true;motion.removeEventListener('change',start);cleanup();};
  },[still]);
  return <div className="ce-experience" ref={root} data-beat="0">
    <div className="ce-stage-top"><span className="technical-label">A closer look / A stronger posture</span><button type="button" onClick={()=>setStill(!still)}>{still?'Enable scroll scene':'Use still view'} ↗</button></div>
    <div className="ce-film">
      <figure className="ce-figure" aria-label="An illustrative workstation progresses from exposed systems to a hardened monitored state.">
        {/* Authorized Magnific photograph-like end frame: SSR, no-JS, reduced motion and WebGL failure. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ce-still" src="/assets/services-cinematic/beat2-secure.jpg" alt="Secured workstation in a dark room, with green monitoring lights"/>
        <div className="ce-canvas" ref={host} aria-hidden="true"/>
        <div className="ce-vignette"/>
        <figcaption>ILLUSTRATIVE SYSTEM / NOT A LIVE ASSESSMENT <span>CE — 02</span></figcaption>
      </figure>
      <div className="ce-story">
        <div className="ce-intro"><span className="technical-label">Scroll to inspect / 01 — 03</span></div>
        {services.map((service,index)=><article className="ce-beat" key={service.id} data-service-beat={index}>
          <div className="ce-copy-panel"><span className="ce-beat-index">0{index+1} / 03</span><p className="technical-label">{service.label}</p><h3><Link href={`/review?service=${service.id}`}>{service.title}<Arrow diagonal/></Link></h3><p className="ce-beat-copy">{service.copy}</p><span className="ce-phase-label">{['Inventory / exposure','Controlled pressure / validation','Hardening / monitoring'][index]}</span></div>
        </article>)}
      </div>
    </div>
    <p className="ce-illustration-note">Illustrative, not a live assessment. Reduced exposure—not invulnerability.</p>
  </div>;
}
