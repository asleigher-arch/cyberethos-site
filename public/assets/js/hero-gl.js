/* =========================================================
   Hero render: the portrait as a 3-tone ordered dither (night ops),
   with a "decrypt" lens that shows the real photo underneath.
   Plain WebGL, one quad, one texture. Falls back to a pre-dithered PNG.
   ========================================================= */
(function () {
  'use strict';

  var vis = document.querySelector('.hero__visual');
  if (!vis) return;

  var html = document.documentElement;
  var RM = html.classList.contains('rm');
  var hero = vis.closest('.hero') || vis;
  var canvas = vis.querySelector('.hero__gl');
  var lensEl = vis.querySelector('.lens');
  var xyEl = vis.querySelector('.lens__xy');

  var gl = null;
  try {
    gl = canvas.getContext('webgl', {
      antialias: false, alpha: false, depth: false, stencil: false,
      premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'low-power'
    });
  } catch (e) { gl = null; }
  if (!gl) return;

  var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var FS = [
    'precision mediump float;',
    'uniform sampler2D uTex;',
    'uniform vec2 uRes;uniform vec2 uImg;uniform vec2 uFocus;uniform vec2 uLens;',
    'uniform float uR;uniform float uCell;uniform float uReveal;uniform float uTime;',
    'uniform float uFadeL;uniform float uFadeB;uniform float uFadeT;uniform float uLensOn;',
    'vec2 cover(vec2 uv){',
    '  float rs=uRes.x/uRes.y;float ri=uImg.x/uImg.y;',
    '  vec2 s=rs>ri?vec2(1.,ri/rs):vec2(rs/ri,1.);',
    '  vec2 o=(vec2(1.)-s)*uFocus;',
    '  return uv*s+o;',
    '}',
    'float b2(vec2 a){a=floor(a);return fract(dot(a,vec2(.5,a.y*.75)));}',
    'float b4(vec2 a){return b2(.5*a)*.25+b2(a);}',
    'float b8(vec2 a){return b4(.5*a)*.25+b2(a);}',
    'void main(){',
    '  vec2 f=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y);',
    '  vec2 q=f/uRes;',
    '  vec2 cell=floor(f/uCell);',
    '  vec2 cc=(cell+.5)*uCell;',
    '  vec3 src=texture2D(uTex,cover(cc/uRes)).rgb;',
    '  float l=dot(src,vec3(.299,.587,.114));',
    '  l=smoothstep(.05,.95,l);',
    '  l*=mix(1.,smoothstep(0.,.42,q.x),uFadeL);',
    '  l*=mix(1.,1.-smoothstep(.38,.9,q.y),uFadeB);',
    '  l*=mix(1.,smoothstep(0.,.17,q.y),uFadeT);',
    '  float t=b8(cell);',
    '  float lv=floor(l*2.+t);',
    '  vec3 ink=vec3(.043,.047,.043);',
    '  vec3 mid=vec3(.337,.349,.329);',
    '  vec3 bone=vec3(.902,.910,.894);',
    '  vec3 col=lv<.5?ink:(lv<1.5?mid:bone);',
    '  float edge=uReveal*1.12;',
    '  float shown=step(q.y,edge-.07);',
    '  float inBand=step(edge-.07,q.y)*step(q.y,edge);',
    '  float bp=clamp((q.y-(edge-.07))/.07,0.,1.);',
    '  col=mix(ink,col,shown);',
    '  col=mix(col,vec3(1.,.357,.102),inBand*step(t,1.-bp)*step(uReveal,.999));',
    '  float d=distance(f,uLens);',
    '  float ins=(1.-smoothstep(uR-1.5,uR+.5,d))*uLensOn*shown;',
    '  if(ins>0.){',
    '    vec2 dir=(f-uLens)/max(d,1.);',
    '    float k=smoothstep(uR*.55,uR,d);',
    '    vec2 off=dir*k*5.;',
    '    float r=texture2D(uTex,cover((f+off)/uRes)).r;',
    '    float g=texture2D(uTex,cover(f/uRes)).g;',
    '    float b=texture2D(uTex,cover((f-off)/uRes)).b;',
    '    vec3 full=vec3(r,g,b);',
    '    float lum=dot(full,vec3(.299,.587,.114));',
    '    full=mix(vec3(lum),full,.92);',
    '    full*=.94+.06*sin(f.y*1.4+uTime*5.);',
    '    full*=mix(1.,.35+.65*smoothstep(0.,.42,q.x),uFadeL);',
    '    col=mix(col,full,ins);',
    '  }',
    '  gl_FragColor=vec4(col,1.);',
    '}'
  ].join('\n');

  function shader(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      if (window.console) console.warn('[hero-gl]', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }
  var vs = shader(gl.VERTEX_SHADER, VS);
  var fs = shader(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) return;
  var prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  var aLoc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(aLoc);
  gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

  var U = {};
  ['uTex', 'uRes', 'uImg', 'uFocus', 'uLens', 'uR', 'uCell', 'uReveal', 'uTime', 'uFadeL', 'uFadeB', 'uFadeT', 'uLensOn'].forEach(function (n) {
    U[n] = gl.getUniformLocation(prog, n);
  });

  var tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.uniform1i(U.uTex, 0);

  var focus = (vis.getAttribute('data-focus') || '0.5,0.5').split(',').map(Number);
  var face = (vis.getAttribute('data-face') || '0.5,0.4').split(',').map(Number);
  var IW = 1400, IH = 1400;
  var W = 1, H = 1, dpr = 1, panel = true, lensR = 120, base = 3;
  var lens = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  var pointerActive = false, pointerType = 'mouse', lastPointer = 0;
  var visible = true, running = false, ready = false, introReq = false;
  var reveal = RM ? 1 : 0, revealStart = -1, lensOn = 0, lensTarget = 0, scrollP = 0, frame = 0;

  function imgToCss(u, v) {
    var rs = W / H, ri = IW / IH;
    var sx = rs > ri ? 1 : rs / ri;
    var sy = rs > ri ? ri / rs : 1;
    var ox = (1 - sx) * focus[0], oy = (1 - sy) * focus[1];
    return { x: (u - ox) / sx * W, y: (v - oy) / sy * H };
  }

  function resize() {
    var r = vis.getBoundingClientRect();
    W = Math.max(1, r.width);
    H = Math.max(1, r.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    panel = W < window.innerWidth * 0.9;
    lensR = panel ? Math.max(96, Math.min(132, W * 0.14)) : 84;
    base = panel ? 3 : 2.5;
    if (lensEl) lensEl.style.setProperty('--lr', lensR + 'px');
    if (!pointerActive) {
      var c = imgToCss(face[0], face[1]);
      lens.x = target.x = c.x;
      lens.y = target.y = c.y;
    }
    if (!running) draw(performance.now());
  }

  function onPointer(e) {
    var r = vis.getBoundingClientRect();
    var x = e.clientX - r.left, y = e.clientY - r.top;
    if (x >= 0 && y >= 0 && x <= r.width && y <= r.height) {
      target.x = x; target.y = y;
      pointerActive = true; pointerType = e.pointerType || 'mouse';
      lastPointer = performance.now();
      if (RM && !running) draw(lastPointer);
    } else if (e.pointerType === 'mouse') {
      pointerActive = false;
    }
  }
  hero.addEventListener('pointermove', onPointer, { passive: true });
  hero.addEventListener('pointerdown', onPointer, { passive: true });
  hero.addEventListener('pointerleave', function () { pointerActive = false; });

  function startIntro() { if (revealStart < 0) revealStart = performance.now(); }
  window.addEventListener('hero:intro', function () { introReq = true; if (ready) startIntro(); });
  if (window.__heroIntro) introReq = true;
  setTimeout(function () { introReq = true; if (ready) startIntro(); }, 6500);

  function draw(now) {
    var t = now / 1000;
    var idle = !pointerActive || (pointerType !== 'mouse' && now - lastPointer > 2600);
    if (idle) {
      var c = imgToCss(face[0], face[1]);
      if (RM) { target.x = c.x; target.y = c.y; }
      else {
        target.x = c.x + Math.sin(t * 0.55) * lensR * 0.8 + Math.sin(t * 1.3) * lensR * 0.12;
        target.y = c.y + Math.cos(t * 0.42) * lensR * 0.62;
      }
    }
    var k = RM ? 1 : 0.11;
    lens.x += (target.x - lens.x) * k;
    lens.y += (target.y - lens.y) * k;

    if (revealStart >= 0 && reveal < 1) {
      var p = Math.min(1, (now - revealStart) / 1700);
      reveal = 1 - Math.pow(1 - p, 3);
    }
    scrollP = Math.max(0, Math.min(1, (window.scrollY || window.pageYOffset || 0) / (H * 0.9)));
    lensTarget = reveal > 0.9 ? Math.max(0, 1 - scrollP * 1.6) : 0;
    lensOn += (lensTarget - lensOn) * (RM ? 1 : 0.08);

    gl.uniform2f(U.uRes, canvas.width, canvas.height);
    gl.uniform2f(U.uImg, IW, IH);
    gl.uniform2f(U.uFocus, focus[0], focus[1]);
    gl.uniform2f(U.uLens, lens.x * dpr, lens.y * dpr);
    gl.uniform1f(U.uR, lensR * dpr);
    gl.uniform1f(U.uCell, Math.max(1, Math.round(base * dpr * (1 + scrollP * 2.4))));
    gl.uniform1f(U.uReveal, ready ? reveal : 0);
    gl.uniform1f(U.uTime, RM ? 0 : t);
    gl.uniform1f(U.uFadeL, panel ? 1 : 0);
    gl.uniform1f(U.uFadeB, panel ? 0 : 1);
    gl.uniform1f(U.uFadeT, 1);
    gl.uniform1f(U.uLensOn, ready ? lensOn : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    if (lensEl) {
      lensEl.style.transform = 'translate3d(' + lens.x.toFixed(1) + 'px,' + lens.y.toFixed(1) + 'px,0)';
      lensEl.classList.toggle('is-on', lensOn > 0.5);
    }
    frame++;
    if (xyEl && frame % 6 === 0) {
      xyEl.textContent = 'X ' + (lens.x / W).toFixed(3) + '  Y ' + (lens.y / H).toFixed(3);
    }
  }

  function loop(now) {
    if (!visible || document.hidden) { running = false; return; }
    draw(now);
    if (RM && reveal >= 1 && Math.abs(lensOn - lensTarget) < 0.01) { running = false; return; }
    requestAnimationFrame(loop);
  }
  function start() {
    if (running || !ready) return;
    running = true;
    requestAnimationFrame(loop);
  }

  var img = new Image();
  img.decoding = 'async';
  img.onload = function () {
    IW = img.naturalWidth || 1400;
    IH = img.naturalHeight || 1400;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
    ready = true;
    resize();
    html.classList.add('gl-on');
    if (introReq || RM) startIntro();
    start();
  };
  img.src = vis.getAttribute('data-src');

  if ('ResizeObserver' in window) {
    var raf = 0;
    new ResizeObserver(function () {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(resize);
    }).observe(vis);
  } else {
    window.addEventListener('resize', resize);
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) start();
    }, { rootMargin: '80px' }).observe(vis);
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) start(); });
  window.addEventListener('scroll', function () { if (RM && !running && visible) start(); }, { passive: true });

  canvas.addEventListener('webglcontextlost', function (e) {
    e.preventDefault();
    html.classList.remove('gl-on');
    visible = false;
    running = false;
  });

  resize();
})();
