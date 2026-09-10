import * as THREE from 'three';
import type { StoryProgress } from './progress';

/** Original procedural editorial sculpture. No downloaded models or textures. */
export function createWorkstation(host: HTMLElement, onLost: () => void) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.25 : 1.75));
  renderer.setClearColor(0x101110, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.45;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const world = new THREE.Group(); scene.add(world);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 60);
  scene.add(new THREE.HemisphereLight(0xe7ede0, 0x32353c, 2.8));
  const key = new THREE.DirectionalLight(0xffe0b3, 4); key.position.set(-3, 7, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xb7e2d4, 3); rim.position.set(4, 3, -4); scene.add(rim);
  const mat = (color: number, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness: .48, metalness });
  const charcoal = mat(0x303b39), metal = mat(0x626a65, .7), wood = mat(0xbca789), skin = mat(0xbe9272), dark = mat(0x172322), fabric = mat(0x707b70);
  const red = mat(0xe77555); red.emissive.set(0x9b2d14); red.emissiveIntensity = 1;
  const mint = mat(0xa4cbb7); mint.emissive.set(0x56886b); mint.emissiveIntensity = .45;
  function mesh(geometry: THREE.BufferGeometry, material: THREE.Material, x=0, y=0, z=0) { const m=new THREE.Mesh(geometry, material); m.position.set(x,y,z); world.add(m); return m; }
  function box(w:number,h:number,d:number, material:THREE.Material,x:number,y:number,z:number) { return mesh(new THREE.BoxGeometry(w,h,d),material,x,y,z); }
  function ellipsoid(x:number,y:number,z:number,sx:number,sy:number,sz:number,material:THREE.Material) { const m=mesh(new THREE.SphereGeometry(1,24,16),material,x,y,z);m.scale.set(sx,sy,sz);return m; }
  function limb(a:number[],b:number[],radius:number,material:THREE.Material) { const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),dir=end.clone().sub(start);const m=mesh(new THREE.CapsuleGeometry(radius,Math.max(.01,dir.length()-2*radius),4,12),material);m.position.copy(start.add(end).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());return m; }
  // Grounded plinth and circular engraved work area.
  mesh(new THREE.CylinderGeometry(3.05,3.12,.13,96), mat(0x222825),0,-.09,0);
  const ring=mesh(new THREE.TorusGeometry(2.83,.013,6,120),metal,0,-.01,0);ring.rotation.x=Math.PI/2;
  for(let i=0;i<32;i++){const a=i/32*Math.PI*2;const tick=box(.012,.008,.1,metal,Math.sin(a)*2.72,0,Math.cos(a)*2.72);tick.rotation.y=a;}
  // Desk: chamfer-like layered slab, legs, keyboard and monitor with real screen face.
  box(3.6,.13,1.55,wood,0,1.62,-.45);box(3.5,.05,1.48,metal,0,1.53,-.45);
  for(const x of [-1.52,1.52]) for(const z of [-1.05,.14]) box(.09,1.5,.09,metal,x,.77,z);
  box(.62,.045,.35,metal,.08,1.72,-.91);box(.075,.35,.075,metal,.08,1.9,-.91);
  box(1.52,.97,.1,charcoal,.08,2.36,-.93);
  const screenUniforms = { uAudit: { value: 0 }, uProbe: { value: 0 }, uSeal: { value: 0 } };
  const screenMaterial = new THREE.ShaderMaterial({
    uniforms: screenUniforms,
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `varying vec2 vUv; uniform float uAudit; uniform float uProbe; uniform float uSeal;
      void main(){
        vec3 base=mix(vec3(.035,.065,.06),vec3(.045,.15,.10),uSeal);
        float grid=step(.95,fract(vUv.x*12.))*step(.88,fract(vUv.y*8.));
        float scan=(1.-smoothstep(.0,.045,abs(vUv.y-uAudit)))*step(.001,uAudit)*(1.-step(.999,uAudit));
        float probe=step(vUv.x,uProbe)*(1.-uSeal)*.06;
        gl_FragColor=vec4(base+grid*.06+scan*vec3(.15,.38,.25)+probe*vec3(1.,.35,.13),1.);
      }`,
  });
  box(1.38,.82,.014,screenMaterial,.08,2.37,-.872);
  for(let i=0;i<7;i++) box(.38+(i%3)*.18,.022,.018,i<2?mint:metal,-.22+(i%2)*.1,2.65-i*.09,-.859);
  box(1.05,.04,.34,charcoal,-.25,1.71,-.17);
  for(let row=0;row<3;row++) for(let col=0;col<12;col++) box(.06,.013,.055,metal,-.71+col*.083,1.737,-.28+row*.09);
  ellipsoid(.56,1.73,-.12,.10,.035,.14,metal);
  // Seated human: shoes, bent legs, hips, tailored torso, articulated arms, neck, head, ears and hair.
  box(.72,.12,.66,charcoal,-.66,.94,.85);
  box(.1,.77,.1,metal,-.66,.46,.85);
  for(let i=0;i<5;i++){const a=i*Math.PI*2/5;limb([-.66,.15,.85],[-.66+Math.sin(a)*.5,.08,.85+Math.cos(a)*.5],.035,metal);}
  const back=box(.75,.73,.1,charcoal,-.66,1.4,1.18); back.rotation.x=-.13;
  ellipsoid(-.66,1.13,.8,.37,.23,.3,fabric);
  for(const x of [-.91,-.4]) {limb([x,1.1,.75],[x,.95,.15],.145,fabric);limb([x,.95,.15],[x,.22,.32],.10,fabric);ellipsoid(x,.13,.18,.14,.12,.29,dark);}
  ellipsoid(-.66,1.6,.82,.36,.49,.22,fabric);
  limb([-.66,1.93,.78],[-.66,2.14,.74],.11,skin);
  ellipsoid(-.66,2.37,.73,.235,.30,.24,skin);
  ellipsoid(-.66,2.53,.78,.243,.19,.225,dark);
  ellipsoid(-.66,2.35,.48,.074,.075,.075,skin); // nose points toward screen
  for(const x of [-.9,-.42]) ellipsoid(x,2.37,.73,.045,.076,.045,skin);
  for(const [x,end] of [[-.98,-.65],[-.33,.12]]) {limb([x,1.88,.8],[x,1.53,.42],.105,fabric);limb([x,1.53,.42],[end,1.76,-.04],.075,skin);ellipsoid(end,1.77,-.06,.10,.045,.12,skin);}
  // Computer tower: open front bays are actual separated geometry, not a texture.
  const tx=1.26;
  box(.7,.96,.66,charcoal,tx,2.16,-.53);
  box(.76,.07,.73,metal,tx,2.67,-.53);box(.76,.07,.73,metal,tx,1.68,-.53);
  const tiles: THREE.Mesh[]=[];
  for(let i=0;i<9;i++){const x=tx-.24+(i%3)*.24,y=1.83+Math.floor(i/3)*.29;
    box(.205,.235,.04,dark,x,y,-.18);
    box(.14,.028,.042,red,x,y,-.15);
    const tile=box(.208,.24,.045,mint,x,y,-.125);tiles.push(tile);
  }
  // Discrete scoped probe paths, ending at the open bays.
  const paths: THREE.Line[]=[];
  for(let i=0;i<5;i++){const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(2.8, .8+i*.32, .65),new THREE.Vector3(2.5,3.1+i*.08,.6),new THREE.Vector3(tx,1.9+i*.13,-.10)); const g=new THREE.BufferGeometry().setFromPoints(curve.getPoints(60));const line=new THREE.Line(g,new THREE.LineBasicMaterial({color:0xe58d6c,transparent:true,opacity:.6}));world.add(line);paths.push(line);}
  const scan=mesh(new THREE.TorusGeometry(2.2,.014,6,100),mint,0,.1,0);scan.rotation.x=Math.PI/2;
  const shield=mesh(new THREE.TorusGeometry(.20,.025,8,40,Math.PI),mint,tx,2.48,-.072);shield.rotation.z=0;
  const lock=box(.4,.29,.05,mint,tx,2.32,-.065);
  let state: StoryProgress;
  function draw(p:StoryProgress){state=p;
    camera.position.set(5.6-p.enter*.35-p.probe*.65,4.1+p.audit*.15,6.8-p.seal*.45);camera.lookAt(0,1.3,0);
    world.rotation.y=-.12+p.enter*.08+p.probe*.16;
    screenUniforms.uAudit.value=p.audit; screenUniforms.uProbe.value=p.probe; screenUniforms.uSeal.value=p.seal;
    tiles.forEach((tile,i)=>{const amount=THREE.MathUtils.clamp((p.probe*.38+p.seal*.90)-i*.025,0,1);tile.scale.set(Math.max(.015,amount),Math.max(.015,amount),1);tile.position.z=-.125+(1-amount)*.22;});
    paths.forEach((path,i)=>{path.visible=p.seal<.88;path.geometry.setDrawRange(0,Math.floor(61*(.18+.82*Math.sin(Math.min(1,p.probe)*Math.PI/2))));(path.material as THREE.LineBasicMaterial).opacity=(.22+p.probe*.5)*(1-p.seal);path.position.y=Math.sin(p.master*12+i)*.06;});
    scan.position.y=.12+p.audit*2.8;scan.visible=p.master>.1&&p.master<.4;
    scan.scale.setScalar(.75+.25*Math.sin(p.audit*Math.PI));
    shield.visible=lock.visible=p.seal>.72;
    renderer.render(scene,camera);
  }
  function resize(){const {width,height}=host.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();if(state)draw(state);}
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const lost=(e:Event)=>{e.preventDefault();onLost();};renderer.domElement.addEventListener('webglcontextlost',lost);
  return { draw, dispose(){observer.disconnect();renderer.domElement.removeEventListener('webglcontextlost',lost);const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();scene.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Line){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();} };
}
