# Hermes build brief — Cyber Ethos (cyberethos.org) scroll upgrade

## Context
Live site: **https://cyberethos.org/** (Cyber Ethos / Azad Sleigher).  
Reference interaction pattern reverse-engineered from **illoca.com** (Nuxt + Lenis + GSAP ScrollTrigger scrub → progress bus → Theatre.js/Three.js). Recreate the *architecture*, not illoca’s art/IP.

## Non-negotiable: keep existing bookends (no content gap)
Preserve the site’s current narrative spine. Do **not** replace the homepage with a blank scrollytelling demo.

### KEEP — Opening story (current §01 and hero)
- **Nav:** Story · Services · Let’s talk (CE / CYBER ETHOS / AZAD SLEIGHER branding)
- **Hero:** tagline “VETERAN. INTERPRETER. DEFENDER.” · headline “A life of service. A new front line.” · bio: Marine veteran, former Special Operations interpreter in Iraq, cybersecurity student · CTAs “Request a security review” + explore story · portrait treatment as today
- **01 / The foundation — “Different terrain. The same responsibility.”**  
  Service chapters (SO interpreter / USMC) → mindset (listen, understand, own details) → studying cybersecurity / building Cyber Ethos. Founder attribution stays.

### KEEP — Closing newsletter (current §05)
- **05 / The newsletter** block and signup (including “Form not loading? / Open the signup form in a new tab” fallback). Do not remove or orphan this section; it remains after the story/services/CTA flow.

### KEEP — Conversation CTA (current §04)
- **04 / Start a conversation — “What needs a closer look?”** + “Request a security review” (scope/authorization language can stay near services).

## UPGRADE — Middle: illoca-style scroll WebGL on Services (§02)
Transform **02 / The work — “Know where you stand.”** into a **pinned scroll-driven Three.js story**, while keeping the **same three services** as the beat labels (not invented offerings):

1. **Cybersecurity Audit** — Understand the exposure (accounts, access, configs, public exposure)
2. **Penetration Testing** — Test the assumptions (authorized, scoped attack paths → validated findings)
3. **Website Vulnerability Detection** — Inspect the surface (headers, forms, login paths)

### Visual metaphor (Azad’s ask)
A person at a computer starts **exposed/insecure** (open ports, gaps, holes, noisy attack surface). As the visitor scrolls through the three services, those gaps **fill/seal** and the machine becomes **harder / monitored** — communicating that Cyber Ethos work closes risk. Original GLBs/textures only — never reuse illoca assets.

### Suggested progress mapping (adapt illoca’s enter+pin pairs)
| Phase | On-page copy | 3D beat |
|-------|----------------|---------|
| After foundation / enter Services | “Know where you stand.” + intro line | Computer visibly porous / red gaps |
| Beat A — Audit | Existing Audit card copy | Scan / inventory; unmanaged exposure lights up |
| Beat B — Pen test | Existing Pen test card copy | Paths probed; assumptions challenged; critical holes highlighted then patched |
| Beat C — Web vuln | Existing Web vuln card copy | Surface hardened; ports sealing; posture → secure/monitored |
| Exit services | Authorization note stays nearby | End-state locked machine |

Optional: keep **03 / The approach** (“Clarity before action” — Define scope → Validate findings → Make next move clear) as a **static** section between the WebGL services story and §04, so methodology isn’t lost.

## Technical pattern (from illoca evidence)
1. Lenis (or equivalent) smooth scroll  
2. GSAP ScrollTrigger `scrub: true` + pin per beat  
3. Emit normalized progress (`0→1` enter + pin phases) into a master timeline  
4. Theatre.js **or** single GSAP/custom timeline driving Three.js (camera, meshes, shader reveal uniforms analogous to wipe/grid progress)  
5. Separate scroll ownership from the WebGL store/event bus  
6. `prefers-reduced-motion`: skip scrub; show end-state stills  

Stack can stay on whatever cyberethos.org already uses; don’t force Nuxt if the site isn’t Nuxt — match the *behavior*.

## Page order after upgrade (no gap)
1. Hero (story)  
2. 01 Foundation (story)  
3. 02 Services — **scroll WebGL middle** (three real services)  
4. 03 Approach (keep)  
5. 04 Start a conversation (keep)  
6. 05 Newsletter (keep)  
7. Footer as today  

## Deliverables
1. Homepage upgrade matching the order above  
2. Master timeline diagram (scroll progress → camera / mesh / shader channels)  
3. README: how to retarget a service beat without breaking scrub  
4. Motion-reduced fallback  

## Out of scope
- Pixel clone of illoca.com  
- Changing brand voice, founder story, or newsletter away from current Cyber Ethos  
- Credentials in forms; testing only with explicit authorization (keep that disclaimer)
