import * as T from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { StoryProgress } from './progress';
// Original room/machine construction. The supplied Tripo GLB is the human, NOT a workstation.
export async function createWorkstation(host:HTMLElement,onFailure:()=>void){
  const renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setClearColor(0x101110);renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.45;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
  host.appendChild(renderer.domElement);
  const scene=new T.Scene();scene.fog=new T.FogExp2(0x101110,.065);
  const camera=new T.PerspectiveCamera(42,1,.1,70);
  const metal=new T.MeshStandardMaterial({color:0x263239,metalness:.75,roughness:.36});
  const dark=new T.MeshStandardMaterial({color:0x10181d,metalness:.5,roughness:.6});
  const lightMat=new T.MeshStandardMaterial({color:0x72e1bf,emissive:0x29a783,emissiveIntensity:2});
  function box(w:number,h:number,d:number,x:number,y:number,z:number,mat:T.Material=metal){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;scene.add(m);return m;}
  box(22,.15,22,0,-.12,0,dark);box(15,9,.2,0,4,-4,dark);
  const tabletop=new T.MeshStandardMaterial({color:0x51483b,roughness:.62,metalness:.12});
  box(6.8,.16,3.9,0,1.3,.25,tabletop);
  for(const x of [-3,3])for(const z of [-1.35,1.35])box(.12,1.3,.12,x,.6,z);
  // Quiet studio: the computer, tabletop and seated operator are the only subjects.
  // Internal chassis, boards, heat sinks, vents and individually sealing plates.
  const machine=new T.Group();scene.add(machine);
  const center=new T.Vector3(.65,2.03,-.1);
  const base=box(2.6,.12,1.65,center.x,1.46,center.z);
  const core=box(2.4,.94,1.48,center.x,2,center.z,dark);
  for(let i=0;i<20;i++)box(.05,.64,1.2,center.x-1.1+i*.115,2,center.z,metal);
  const red=new T.Color('#f34e3e'),green=new T.Color('#5ae5a4');
  const uniforms={uSeal:{value:0},uScan:{value:0},uProbe:{value:0}};
  const diagnostic=new T.ShaderMaterial({uniforms,transparent:true,depthWrite:false,blending:T.AdditiveBlending,vertexShader:`varying vec3 vP; void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vP;uniform float uSeal;uniform float uScan;uniform float uProbe;void main(){vec3 q=abs(fract(vP*9.)-.5);float grid=1.-smoothstep(.025,.065,min(q.x,min(q.y,q.z)));float scan=exp(-90.*pow(vP.x-(uScan*3.-1.5),2.));float radius=1.-smoothstep(.03,.12,abs(length(vP.xy)-uProbe*1.6));vec3 c=mix(vec3(1.,.12,.06),vec3(.1,1.,.55),uSeal);float a=(grid*.3+scan*.7+radius*.35)*(1.-uSeal*.75);gl_FragColor=vec4(c,a);}`});
  const overlay=box(2.42,.96,1.50,center.x,2.04,center.z,diagnostic);overlay.castShadow=false;
  // Front repair surface is explicitly visible from the shoulder-side camera.
  const frontPanels:T.Mesh[]=[];
  const gapMaterial=new T.MeshBasicMaterial({color:0xb62920});
  const damagedGap=box(2.52,.9,.03,.65,2.04,.69,gapMaterial);
  for(let i=0;i<4;i++){
    const panel=box(.628,.90,.10,-.292+i*.628,2.04,.77,metal);
    frontPanels.push(panel);
    for(let j=0;j<7;j++){const vent=new T.Mesh(new T.BoxGeometry(.42,.018,.012),dark);vent.position.set(0,-.28+j*.07,.056);panel.add(vent);}
  }
  const plates:T.Mesh[]=[];const nodes:T.Mesh[]=[];
  for(let i=0;i<8;i++){
    const x=center.x-1.13+i*.322;
    plates.push(box(.305,.07,1.7,x,2.61,center.z));
    const material=new T.MeshStandardMaterial({color:red,emissive:red,emissiveIntensity:2,roughness:.3});
    nodes.push(box(.055,.028,.018,x,1.98,.73,material));
    for(let n=0;n<6;n++)box(.2,.024,.04,x,1.65+n*.045,.76,dark);
  }
  for(const x of [-.68,1.98]){box(.09,1.2,1.7,x,2.03,center.z);for(const z of [-.85,.7])box(.14,.15,.14,x,2.66,z);}
  // Keyboard with real keys and a quiet screen.
  box(1.65,.09,.65,1.9,1.44,1.65,dark);
  for(let row=0;row<5;row++)for(let key=0;key<15;key++)box(.085,.035,.085,1.18+key*.099,1.5,1.39+row*.105,metal);
  box(1.35,.78,.07,2.2,2.04,.99,dark);
  box(1.23,.66,.015,2.2,2.04,1.033,new T.MeshStandardMaterial({color:0x1b343c,emissive:0x284c57,emissiveIntensity:.8,roughness:.5}));
  box(.08,.3,.08,2.2,1.52,.99);box(.5,.04,.3,2.2,1.40,.99);
  for(let i=0;i<9;i++)box(.42+(i%3)*.13,.012,.01,2.05,2.29-i*.055,1.046,lightMat);
  box(.35,.1,.5,3,1.46,1.03,dark);

  const ambient=new T.HemisphereLight(0xbed9e6,0x070a09,1.2);scene.add(ambient);
  const key=new T.SpotLight(0xd2e5ed,85,18,.65,.65,1.5);key.position.set(-2,6,2);key.target.position.set(.5,1.5,0);key.castShadow=true;key.shadow.mapSize.set(1024,1024);scene.add(key,key.target);
  const rim=new T.PointLight(0x406d91,20,14);rim.position.set(1,4,-2);scene.add(rim);
  const pulse=new T.PointLight(0xff3f24,8,5);pulse.position.set(.7,2.8,1);scene.add(pulse);
  const lamp=box(.08,2.5,.08,-2.7,2.6,-.1);lamp.rotation.z=-.15;
  const shade=new T.Mesh(new T.ConeGeometry(.4,.45,32,1,true),metal);shade.position.set(-2.5,3.8,-.1);shade.rotation.z=.5;scene.add(shade);
  let dead=false;
  try{
    const gltf=await new GLTFLoader().loadAsync('/assets/services-cinematic/beat0-exposed.glb');
    const person=gltf.scene;person.scale.setScalar(3.35);person.rotation.y=Math.PI/2;person.position.set(1.9,-.72,2.65);
    // The export uses Z-up bind transforms and Three sanitizes colons in names.
    // Aim actual joint-to-child vectors in world space, not guessed local Euler axes.
    person.updateMatrixWorld(true);
    const joint=(name:string)=>{let found:T.Object3D|undefined;person.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9_]/g,'')===name.replace(/[^a-zA-Z0-9_]/g,''))found=o;});if(!found)throw new Error(`Missing seated rig joint: ${name}`);return found;};
    function aim(name:string,child:string,direction:T.Vector3){
      const bone=joint(name),end=joint(child),parentQ=bone.parent!.getWorldQuaternion(new T.Quaternion());
      const from=end.getWorldPosition(new T.Vector3()).sub(bone.getWorldPosition(new T.Vector3())).normalize();
      const turn=new T.Quaternion().setFromUnitVectors(from,direction.normalize());
      bone.quaternion.premultiply(parentQ.clone().invert().multiply(turn).multiply(parentQ));person.updateMatrixWorld(true);
    }
    for(const chain of [['tripo::1_Left_Limb_0','tripo::1_Left_Limb_1','tripo::1_Left_Limb_2','tripo::1_Left_Limb_3'],['tripo::0_Right_Limb_0','tripo::0_Right_Limb_1','tripo::0_Right_Limb_2','tripo::0_Right_Limb_3']]){
      aim(chain[0],chain[1],new T.Vector3(0,-.10,-1));
      aim(chain[1],chain[2],new T.Vector3(0,-1,.10));
      aim(chain[2],chain[3],new T.Vector3(0,-.25,-1));
    }
    // Clavicles retain shoulder width; upper arms lower and elbows bend toward keys.
    for(const chain of [['bone_7','bone_8','bone_9'],['tripo::0_Left_Limb_4','tripo::0_Left_Limb_5','tripo::0_Left_Limb_6']]){
      aim(chain[0],chain[1],new T.Vector3(0,-1,-.35));
      aim(chain[1],chain[2],new T.Vector3(0,-.02,-1));
      joint(chain[2]).rotateY(Math.PI);person.updateMatrixWorld(true);
    }
    person.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;}});scene.add(person);host.dataset.glb='loaded';host.dataset.pose='seated-world-space';
    const fabric=new T.MeshStandardMaterial({color:0x303b3e,roughness:.94,metalness:0});
    box(.95,.16,.85,1.9,.81,2.65,fabric);
    const back=box(.94,.92,.14,1.9,1.35,3.03,fabric);back.rotation.x=-.10;
    box(.12,.65,.12,1.9,.40,2.65,metal);
    for(const x of [1.48,2.32]){box(.065,.46,.065,x,1.04,2.8,metal);box(.10,.065,.65,x,1.27,2.6,fabric);}
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const spoke=box(.65,.07,.07,1.9+Math.cos(a)*.25,.13,2.65+Math.sin(a)*.25);spoke.rotation.y=-a;box(.13,.13,.13,1.9+Math.cos(a)*.55,.09,2.65+Math.sin(a)*.55,dark);}
    const humanKey=new T.PointLight(0xffdfbb,28,7,2);humanKey.position.set(4.2,3.8,4);scene.add(humanKey);
  }catch(error){renderer.dispose();renderer.domElement.remove();throw error;}
  let last:StoryProgress={master:0,enter:0,audit:0,probe:0,seal:0,beat:0};
  const target=new T.Vector3();
  function draw(p:StoryProgress){
    if(dead)return;last=p;
    const mobile=host.clientWidth<700;
    // CAMERA KEYFRAME TIMELINE: wide seated introduction → shoulder → table → repair.
    // Position AND target are scrubbed; no clock-based motion or orbit illusion.
    const frames=[
      {p:0,pos:[6.8,4.2,9.2],aim:[.9,1.45,1.1],fov:44},
      {p:.16,pos:[3.7,3.3,5.4],aim:[.8,2.0,.35],fov:43},
      {p:.38,pos:[2.7,3.6,3.9],aim:[.65,2.08,.1],fov:42},
      {p:.68,pos:[3.3,3.25,3.5],aim:[.7,2.12,.3],fov:41},
      {p:1,pos:[2.9,2.95,3.2],aim:[.7,2.08,.3],fov:40},
    ];
    const next=frames.findIndex(f=>f.p>=p.master), b=frames[Math.max(1,next)],a=frames[Math.max(1,next)-1];
    const u=T.MathUtils.smoothstep(p.master,a.p,b.p);
    camera.position.fromArray(a.pos).lerp(new T.Vector3().fromArray(b.pos),u);
    target.fromArray(a.aim).lerp(new T.Vector3().fromArray(b.aim),u);
    if(mobile)camera.position.add(new T.Vector3(0,1.2,2.4));
    camera.fov=T.MathUtils.lerp(a.fov,b.fov,u);camera.lookAt(target);
    if(mobile)camera.setViewOffset(host.clientWidth,host.clientHeight,0,host.clientHeight*.21,host.clientWidth,host.clientHeight);else camera.setViewOffset(host.clientWidth,host.clientHeight,-host.clientWidth*.19,0,host.clientWidth,host.clientHeight);
    camera.updateProjectionMatrix();
    host.dataset.camera=camera.position.toArray().map(v=>v.toFixed(2)).join(',');
    uniforms.uSeal.value=p.seal;uniforms.uScan.value=p.audit;uniforms.uProbe.value=p.probe;
    plates.forEach((m,i)=>{const close=T.MathUtils.smoothstep(p.seal, i*.055,.6+i*.055);m.position.y=2.61+(1-close)*(.50+(i%3)*.22);m.rotation.z=(1-close)*(i%2?-.16:.16);m.scale.x=T.MathUtils.lerp(1, .322/.305,close);});
    frontPanels.forEach((m,i)=>{const close=T.MathUtils.smoothstep(p.seal,i*.12,.55+i*.12);m.position.z=.77+(1-close)*(.55+i*.12);m.position.y=2.04+(1-close)*(i%2?.22:-.2);m.rotation.y=(1-close)*(i%2?-.2:.2);});
    damagedGap.visible=p.seal<.96;overlay.visible=p.seal<.98;
    lightMat.color.copy(red).lerp(green,p.seal);lightMat.emissive.copy(lightMat.color);lightMat.emissiveIntensity=1.0-.45*p.seal;
    nodes.forEach((m,i)=>{const mat=m.material as T.MeshStandardMaterial;mat.color.copy(red).lerp(green,p.seal);mat.emissive.copy(mat.color);mat.emissiveIntensity=.7+(1-p.seal)*(1+Math.sin((p.audit+p.probe+p.seal)*18+i)*.55);m.position.z=frontPanels[Math.floor(i/2)].position.z+.07; m.scale.setScalar(1+(1-p.seal)*p.probe*.35);});
    pulse.color.copy(red).lerp(green,p.seal);pulse.intensity=5-2*p.seal;
    core.material=dark;base.material=metal;renderer.render(scene,camera);
  }
  const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();draw(last);};
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const lost=(event:Event)=>{event.preventDefault();onFailure();};renderer.domElement.addEventListener('webglcontextlost',lost);
  return {draw,dispose(){if(dead)return;dead=true;observer.disconnect();renderer.domElement.removeEventListener('webglcontextlost',lost);const textures=new Set<T.Texture>();const materials=new Set<T.Material>();scene.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>{materials.add(m);Object.values(m).forEach(v=>{if(v instanceof T.Texture)textures.add(v);});});}});textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();delete host.dataset.glb;}};
}
