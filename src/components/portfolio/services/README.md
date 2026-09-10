# §02 cinematic services — local v2

Only `src/components/portfolio/services` is replaced, plus its two authorized public assets and the Lenis dependency. Homepage, Foundation, Approach, conversation, newsletter, original services array and authorization disclaimer are untouched. No deployment or push.

## Asset inspection / provenance
The supplied `hermes-handoff` pack is preserved in `/Users/agent47/AI-Agent-Workstation/projects/cyberethos-cinematic-v2`. Its README explicitly warns that Tripo used person-to-3d. Binary inspection confirms **one skinned human**, 27,291 vertices, 147,156 indices, 52 joints, embedded texture, no Draco extension. The preview is a T-pose, not a workstation. This implementation loads that real GLB via GLTFLoader and adjusts the shoulder pose; the desk, chassis, keyboard, racks and lights are original Three.js geometry. It does not misrepresent procedural geometry as an imported workstation. No illoca artwork or authored Theatre choreography enters the build. Their supplied state and structure are reference wiring only.

## Timeline / ownership
```
Window/document page scroll
  └─ Lenis (autoRaf:false, lerp:.075, anchors:true)
      └─ GSAP ticker → lenis.raf(seconds * 1000)
          └─ Lenis scroll → ScrollTrigger.update
              ├─ SP0 intro       → [0.00,0.08]
              ├─ SP1 audit enter → [0.08,0.16]
              ├─ SP2 audit PIN   → [0.16,0.38]
              ├─ SP3 test enter  → [0.38,0.46]
              ├─ SP4 test PIN    → [0.46,0.68]
              ├─ SP5 web enter   → [0.68,0.76]
              └─ SP6 web PIN     → [0.76,1.00]
                   normalized lane p 0..1 (scrub:true)
                         ↓ createProgressBus.emit(lane,p)
                    original equivalent master timeline
                         ├─ camera: shoulder → dolly → lateral inspection
                         ├─ audit: spatial scan plane + diagnostic grid
                         ├─ probe: radius reveal + exposed nodes
                         └─ seal: eight actual chassis plates close;
                                  shader/grid retreat; LEDs red → green
```
Each service article has **its own pin ScrollTrigger** (115vh duration), paired with a preceding enter trigger. The scene is a single sticky viewport spanning all three; it is not a single whole-section GSAP pin. HTML panels alternate left/right/left. Seven GSAP timelines own input; the renderer never reads scroll position or accumulates time. Every shader/camera/mesh channel is deterministic and reversible. Scene rendering occurs on progress and resize rather than an idle animation loop. The standard window Lenis wrapper does not require a transformed-wrapper scrollerProxy.

## Retargeting
1. Keep the upstream services array unchanged unless copy changes are explicitly approved.
2. Adjust `LANES` boundaries in `progress.ts` for timing; keep eight monotonically increasing endpoints and seven lanes.
3. Adjust `PHASES` to retime scan/probe/seal, and camera values in `draw` for framing.
4. Edit original machine geometry and plate offsets in `workstation.ts`; don't replace scroll with image crossfades.
5. Pin duration is independently editable in `ServicesExperience.tsx`.
6. Desktop full bleed must use margins, **not an ancestor transform**, which breaks fixed pin coordinates. Keep `.ce-story` above the sticky scene in stacking order.

## Resilience
Server-rendered secure JPG and all three service links work with no JavaScript. Reduced motion, runtime motion changes, explicit still mode, GLB load failures and context loss use that same supplied secure frame. Cleanup kills only the owned timelines, Lenis instance, resize observer, geometries, materials and textures. Pixel ratio is capped at 1.6. Mobile uses a wider, elevated composition and bottom copy panels.

## Run / verification
```
npm run build
npm run start -- --hostname 127.0.0.1 --port 3193
/Users/agent47/AI-Agent-Workstation/.venv/bin/python /Users/agent47/AI-Agent-Workstation/projects/cyberethos-cinematic-v2/verify.py
npx eslint src/components/portfolio/services --max-warnings 0
```
Preview is loopback-only, not accessible remotely from Telegram. Evidence lives in the isolated project's `evidence/` folder, not the repo's pre-existing untracked evidence directory.

## Honest art-direction limitations
This is a working cinematic architecture and fuller original room, **not photoreal parity with Magnific or illoca**. The supplied asset contains no room/machine and no suitable desk animation. The human pose is adapted programmatically, not hand-rigged in Blender. Machine surfaces remain comparatively geometric; no baked room texture, cinematic depth of field, bloom, or authored workstation GLB was supplied/created. Needs human art-direction review before any publishing approval. npm install reports 17 dependency vulnerabilities across the existing tree; no unrelated breaking upgrades were attempted.
