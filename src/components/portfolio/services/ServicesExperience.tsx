"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Arrow } from '../PublicFrame';
import { createProgressBus } from './progress';
import './services.css';

type Service = { id: string; title: string; label: string; copy: string };
const captions = ['Exposure made visible', 'Attack paths, tested within scope', 'Fewer gaps. A clearer next step.'];

export default function ServicesExperience({ services }: { services: Service[] }) {
  const root = useRef<HTMLDivElement>(null);
  const host = useRef<HTMLDivElement>(null);
  const [still, setStill] = useState(false);
  useEffect(() => {
    const section=root.current, canvasHost=host.current;
    if(!section||!canvasHost||still) return;
    let disposed=false, cleanup=()=>{};
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const short=window.matchMedia('(max-height: 660px)');
    const preference=()=>{if(motion.matches||short.matches){cleanup();section.dataset.mode='static';}};
    if(motion.matches||short.matches) return;
    const observer=new IntersectionObserver(async entries=>{
      if(!entries.some(e=>e.isIntersecting)||disposed)return;
      observer.disconnect();
      try {
        const [{createWorkstation},{gsap},{ScrollTrigger}]=await Promise.all([import('./workstation'),import('gsap'),import('gsap/ScrollTrigger')]);
        if(disposed||motion.matches||short.matches)return;
        gsap.registerPlugin(ScrollTrigger);
        const bus=createProgressBus();
        const scene=createWorkstation(canvasHost,()=>{cleanup();section.dataset.mode='static';});
        const unsubscribe=bus.subscribe(p=>{
          scene.draw(p);
          section.dataset.beat=String(p.beat);
          section.dataset.progress=p.master.toFixed(4);
          section.style.setProperty('--story-progress',String(p.master));
          section.querySelector('[data-scene-caption]')!.textContent=captions[p.beat];
        });
        section.dataset.mode='motion';
        const driver={value:0};
        const timeline=gsap.timeline({scrollTrigger:{id:'ce-services',trigger:section,start:'top 76px',end:()=>`+=${window.innerHeight*3.2}`,pin:true,scrub:true,anticipatePin:1,invalidateOnRefresh:true}});
        timeline.to(driver,{value:1,duration:1,ease:'none',onUpdate:()=>bus.set(driver.value)});
        let cleaned=false;
        cleanup=()=>{if(cleaned)return;cleaned=true;timeline.scrollTrigger?.kill();timeline.kill();unsubscribe();scene.dispose();delete section.dataset.mode;section.style.removeProperty('--story-progress');section.querySelector('[data-scene-caption]')!.textContent=captions[2];};
        ScrollTrigger.refresh();
      } catch (error) { console.warn('Cyber Ethos scroll scene unavailable; using accessible still.', error); cleanup(); section.dataset.mode='static'; }
    },{rootMargin:'500px'});
    observer.observe(section);
    motion.addEventListener('change',preference);short.addEventListener('change',preference);
    return ()=>{disposed=true;observer.disconnect();motion.removeEventListener('change',preference);short.removeEventListener('change',preference);cleanup();};
  },[still]);

  return <div className="ce-experience" ref={root} data-beat="0">
    <div className="ce-stage-top"><span className="technical-label">A closer look / A stronger posture</span><button type="button" onClick={()=>setStill(!still)}>{still?'Enable scroll scene':'Use still view'} <span aria-hidden="true">↗</span></button></div>
    <div className="ce-stage-grid">
      <figure className="ce-figure" aria-label="Illustration of a seated person at a computer. Scroll reveals exposure, scoped testing and remediation. Improved posture is not a guarantee of security.">
        {/* Server-rendered original still remains available without JavaScript or WebGL. */}
        <svg className="ce-still" viewBox="0 0 700 540" role="img" aria-label="A person at a desk with a monitored computer, illustrating improved security posture">
          <defs><radialGradient id="ce-floor"><stop stopColor="#394039"/><stop offset="1" stopColor="#151a17"/></radialGradient><linearGradient id="ce-screen" x2="1" y2="1"><stop stopColor="#526e60"/><stop offset="1" stopColor="#1e302a"/></linearGradient></defs>
          <ellipse cx="350" cy="425" rx="280" ry="88" fill="url(#ce-floor)" stroke="#63675a"/>
          <path d="M140 281L437 213 576 280 277 361Z" fill="#bca789"/><path d="M140 281v15l137 80 299-81v-15l-299 81Z" fill="#776d5b"/>
          <path d="M157 301v111m121-44v116m279-185v109m-128-171v108" stroke="#717d73" strokeWidth="10"/>
          <path d="M337 259v-44m-30 58 63-15" stroke="#889389" strokeWidth="9"/>
          <path d="M263 151l136-31v121l-136 31Z" fill="#303d36" stroke="#9ea68d" strokeWidth="4"/><path d="M272 160l118-27v97l-118 28Z" fill="url(#ce-screen)"/>
          <path d="M288 182l74-18m-74 35 50-12m-50 29 82-19m-82 36 56-13" stroke="#a0c8b2" strokeWidth="4"/>
          <path d="M438 220l63-16 39 24v95l-65 20-37-25Z" fill="#526b5b" stroke="#9cb59a" strokeWidth="2"/><path d="M476 239l54-14v82l-54 16Z" fill="#293c31"/>
          <path d="M488 271v-10a10 10 0 0120 0v5" fill="none" stroke="#adcbb2" strokeWidth="5"/><path d="M485 273l28-8v24l-28 8Z" fill="#adcbb2"/>
          <path d="M277 302l73-19 44 21-76 21Z" fill="#38433b"/>
          <path d="M237 360l-18 65 37 20m47-77-6 64 32 13" fill="none" stroke="#737f70" strokeWidth="27" strokeLinejoin="round"/>
          <path d="M209 429l45 15m37-7 40 12" stroke="#26302c" strokeWidth="19" strokeLinecap="round"/>
          <path d="M213 351l81-11 31 30-77 21Z" fill="#25332c"/><path d="M265 386v67m-40 15 40-15 44 16" stroke="#818c80" strokeWidth="8"/>
          <path d="M229 266Q209 284 217 353Q258 380 298 352l-9-85Z" fill="#788376"/>
          <path d="M237 268l-2 54 51-12m-7-34 24 32 35-13" stroke="#ac947a" strokeWidth="17" strokeLinecap="round" fill="none"/>
          <path d="M250 266v-31" stroke="#b99578" strokeWidth="22"/><ellipse cx="254" cy="214" rx="29" ry="36" fill="#c5a181"/><path d="M225 215q-9-47 33-41 28 1 28 29l-39-7-9 29Z" fill="#24312b"/>
          <path d="M200 299l7 66 60 21 1-55Z" fill="#35413a" stroke="#667063" strokeWidth="3"/>
          <circle cx="549" cy="169" r="22" fill="#233a2d" stroke="#9aba9d"/><path d="M538 169l8 8 15-19" fill="none" stroke="#b8d1b5" strokeWidth="3"/>
        </svg>
        <div className="ce-canvas" ref={host} aria-hidden="true"/>
        <figcaption><span className="ce-status-dot"/><span data-scene-caption>Fewer gaps. A clearer next step.</span><span className="ce-scene-number" aria-hidden="true">CE / 02</span></figcaption>
      </figure>
      <div className="ce-beats">
        {services.map((service,index)=><article className="ce-beat" key={service.id} data-service-beat={index}>
          <span className="ce-beat-index">0{index+1}</span><div><p className="technical-label">{service.label}</p><h3><Link href={`/review?service=${service.id}`}>{service.title}<Arrow diagonal/></Link></h3><p className="ce-beat-copy">{service.copy}</p></div>
        </article>)}
        <p className="ce-illustration-note">Illustrative, not a live assessment. Reduced exposure—not invulnerability.</p>
      </div>
    </div>
    <div className="ce-scroll-track" aria-hidden="true"><span/></div>
    <p className="ce-scroll-hint">Scroll to inspect <span>01 — 03</span></p>
  </div>;
}
