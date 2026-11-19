/* =========================================================
   AZAD SLEIGHER  /  interactions
   GSAP + ScrollTrigger + ScrambleText, Lenis smooth scroll.
   Everything degrades: no JS, reduced motion, or a failed CDN-free
   vendor load still leaves a complete, readable page.
   ========================================================= */
(function () {
  'use strict';

  var d = document;
  var html = d.documentElement;
  /* Replace the boot failsafe with a later one that only fires if this script never finishes its job. */
  if (window.__fs) clearTimeout(window.__fs);
  setTimeout(function () {
    if (!html.classList.contains('loaded') || !html.classList.contains('hero-done')) html.classList.add('failsafe');
  }, 9000);
  var RM = html.classList.contains('rm');
  var FINE = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  var hasScramble = hasGSAP && typeof window.ScrambleTextPlugin !== 'undefined';

  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }

  var lenis = null;
  var nav = $('#nav');

  /* ---------- Clocks (Zulu) ---------- */
  var clocks = $$('[data-clock]');
  function tick() {
    var t = new Date().toISOString().slice(11, 19) + 'Z';
    for (var i = 0; i < clocks.length; i++) clocks[i].textContent = t;
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Scramble helper ---------- */
  var CH_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var CH_NUM = '0123456789';
  var CH_MIX = '01#/<>_ABCDEFGHJKMNPRSTVWXYZ';
  function scramble(el, text, opts) {
    opts = opts || {};
    if (!hasScramble || RM) { el.textContent = text; return; }
    gsap.to(el, {
      duration: opts.duration || 1,
      delay: opts.delay || 0,
      overwrite: true,
      scrambleText: { text: text, chars: opts.chars || CH_MIX, speed: opts.speed || 0.6, revealDelay: opts.revealDelay || 0 }
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('.nav__menu');
  var menu = $('#menu');
  function openMenu() {
    if (!menu) return;
    menu.hidden = false;
    requestAnimationFrame(function () { menu.classList.add('is-open'); });
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.querySelector('.nav__menu-text').textContent = 'Close';
    nav.classList.remove('nav--light');
    html.classList.add('menu-open');
    if (lenis) lenis.stop();
  }
  function closeMenu() {
    if (!menu || menu.hidden) return;
    menu.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.querySelector('.nav__menu-text').textContent = 'Menu';
    html.classList.remove('menu-open');
    if (lenis) lenis.start();
    setTimeout(function () { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 600);
    navTheme();
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      if (menuBtn.getAttribute('aria-expanded') === 'true') closeMenu(); else openMenu();
    });
  }
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- Anchor links ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      var el = d.getElementById(id.slice(1));
      if (!el) return;
      e.preventDefault();
      closeMenu();
      var dest = id === '#cyber' ? ($('.cyber__inner') || el) : el;
      if (lenis) {
        lenis.scrollTo(id === '#top' ? 0 : dest, { offset: 0, duration: 1.5 });
      } else {
        dest.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
      }
      if (id !== '#top') {
        dest.setAttribute('tabindex', '-1');
        dest.focus({ preventScroll: true });
      }
    });
  });

  /* ---------- Hat cards: tap / keyboard reveal ---------- */
  $$('.hat button.hat__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var hat = btn.closest('.hat');
      var on = !hat.classList.contains('is-revealed');
      hat.classList.toggle('is-revealed', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  });

  /* ---------- Hat photos: scan lens follows the pointer ---------- */
  if (FINE) {
    $$('.hat__visual').forEach(function (v) {
      var ph = $('.hat__photo', v);
      if (!ph) return;
      v.addEventListener('pointermove', function (e) {
        var r = v.getBoundingClientRect();
        ph.style.setProperty('--mx', (e.clientX - r.left).toFixed(1) + 'px');
        ph.style.setProperty('--my', (e.clientY - r.top).toFixed(1) + 'px');
      }, { passive: true });
    });
  }

  /* ---------- Hat drawings draw in when seen ---------- */
  var hats = $$('.hat');
  hats.forEach(function (hat) {
    $$('.hs-draw path:not(.hs-dash), .hs-draw ellipse:not(.hs-dash), .hs-draw circle', hat).forEach(function (p, i) { p.style.setProperty('--i', i); });
  });
  if ('IntersectionObserver' in window && !RM) {
    var hatIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-drawn'); hatIO.unobserve(en.target); }
      });
    }, { threshold: 0.35 });
    hats.forEach(function (h) { hatIO.observe(h); });
  } else {
    hats.forEach(function (h) { h.classList.add('is-drawn'); });
  }

  /* ---------- Service record: map follows the entry you are reading ---------- */
  var map = $('.map');
  var recs = $$('.rec');
  if (map && recs.length) {
    var layers = $$('.map__layer', map);
    var hud = { place: $('.map__place', map), grid: $('.map__grid', map), ll: $('.map__ll', map), elev: $('.map__elev', map) };
    var curKey = null;
    var setActive = function (rec) {
      recs.forEach(function (r) { r.classList.toggle('is-active', r === rec); });
      var key = rec.getAttribute('data-map');
      if (key === curKey) return;
      curKey = key;
      var layer = null;
      layers.forEach(function (l) {
        var on = l.getAttribute('data-key') === key;
        l.classList.toggle('is-on', on);
        if (on) layer = l;
      });
      if (!layer) return;
      scramble(hud.place, layer.getAttribute('data-place'), { chars: CH_ALPHA, duration: 0.9, speed: 0.9 });
      scramble(hud.grid, layer.getAttribute('data-grid'), { chars: CH_NUM, duration: 0.9 });
      scramble(hud.ll, layer.getAttribute('data-ll'), { chars: CH_NUM, duration: 0.9 });
      scramble(hud.elev, layer.getAttribute('data-elev'), { chars: CH_NUM, duration: 0.9 });
      map.classList.remove('is-ping');
      void map.offsetWidth;
      map.classList.add('is-ping');
    };
    if ('IntersectionObserver' in window) {
      var recIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target); });
      }, { rootMargin: '-48% 0px -48% 0px', threshold: 0 });
      recs.forEach(function (r) { recIO.observe(r); });
    }
    setActive(recs[0]);
  }

  /* ---------- Terminal log ---------- */
  var termBody = $('.term__body');
  var TERM = [
    [['$ ', 'k'], ['engage --scope=written --auth=signed', '']],
    [['[ok] ', 'k'], ['scope confirmed in writing', '']],
    [['[ok] ', 'k'], ['authorization on file', '']],
    [['[..] ', 'm'], ['testing inside the rules of engagement', '']],
    [['[ok] ', 'k'], ['findings validated before reporting', '']],
    [['[ok] ', 'k'], ['findings ranked by real risk', '']],
    [['[ok] ', 'k'], ['report delivered, with the fixes', '']],
    [['$ ', 'k']]
  ];
  function seg(text, cls) {
    var s = d.createElement('span');
    if (cls) s.className = cls;
    s.textContent = text;
    return s;
  }
  function caret() { var c = d.createElement('span'); c.className = 'term__caret'; return c; }
  function renderTermStatic() {
    termBody.textContent = '';
    TERM.forEach(function (line, li) {
      line.forEach(function (p) { termBody.appendChild(seg(p[0], p[1])); });
      if (li < TERM.length - 1) termBody.appendChild(d.createTextNode('\n'));
    });
    termBody.appendChild(caret());
  }
  function typeTerm() {
    termBody.textContent = '';
    var li = 0;
    var nextLine = function () {
      if (li >= TERM.length) { termBody.appendChild(caret()); return; }
      var line = TERM[li];
      var pi = 0;
      var nextPart = function () {
        if (pi >= line.length) {
          li++;
          if (li < TERM.length) termBody.appendChild(d.createTextNode('\n'));
          setTimeout(nextLine, li === 1 ? 380 : 240);
          return;
        }
        var part = line[pi];
        var el = seg('', part[1]);
        termBody.appendChild(el);
        var ci = 0;
        var speed = li === 0 ? 26 : 12;
        var typeChar = function () {
          el.textContent = part[0].slice(0, ++ci);
          if (ci < part[0].length) setTimeout(typeChar, speed);
          else { pi++; nextPart(); }
        };
        typeChar();
      };
      nextPart();
    };
    nextLine();
  }
  if (termBody) {
    if (RM || !('IntersectionObserver' in window)) renderTermStatic();
    else {
      var termIO = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { termIO.disconnect(); typeTerm(); }
      }, { threshold: 0.4 });
      termIO.observe(termBody);
    }
  }

  /* ---------- Wayfinding: ruler progress, section counter, jump buttons ---------- */
  var wayUpdate = null;
  (function () {
    var ruler = $('.ruler');
    var fill = $('.ruler__fill');
    var dock = $('.dock');
    if (!ruler || !dock) return;
    var SECS = [['story', 'Transmission'], ['hats', 'Hall of hats'], ['nolb', 'The promise'], ['record', 'Service record'], ['cyber', 'The new front line'], ['press', 'On the record'], ['contact', 'Open channel']]
      .map(function (x) { return { el: d.getElementById(x[0]), name: x[1], top: 0, tick: null }; })
      .filter(function (x) { return x.el; });
    var nEl = $('.dock__n', dock), nameEl = $('.dock__name', dock), ofEl = $('.dock__of', dock);
    var prev = $('.dock__btn[data-dir="-1"]', dock), next = $('.dock__btn[data-dir="1"]', dock);
    var footGrid = $('.foot__grid');
    var max = 1, cur = -2, footTop = Infinity;
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    ofEl.textContent = '/ ' + pad(SECS.length);
    SECS.forEach(function (sec) {
      sec.tick = d.createElement('span');
      sec.tick.className = 'ruler__tick';
      ruler.appendChild(sec.tick);
    });
    function measure() {
      var y = window.scrollY || window.pageYOffset || 0;
      max = Math.max(1, d.documentElement.scrollHeight - window.innerHeight);
      SECS.forEach(function (sec) {
        sec.top = sec.el.getBoundingClientRect().top + y;
        sec.tick.style.left = Math.min(100, (sec.top / max) * 100).toFixed(3) + '%';
      });
      footTop = footGrid ? footGrid.getBoundingClientRect().top + y : Infinity;
      update();
    }
    function update() {
      var y = window.scrollY || window.pageYOffset || 0;
      var vh = window.innerHeight;
      var p = Math.max(0, Math.min(1, y / max));
      fill.style.clipPath = 'inset(0 ' + ((1 - p) * 100).toFixed(2) + '% 0 0)';
      var idx = -1;
      for (var i = 0; i < SECS.length; i++) {
        SECS[i].tick.classList.toggle('is-past', SECS[i].top <= y + 2);
        if (SECS[i].top <= y + vh * 0.45) idx = i;
      }
      if (idx !== cur) {
        cur = idx;
        if (idx >= 0) { nEl.textContent = pad(idx + 1); nameEl.textContent = SECS[idx].name; }
        prev.disabled = idx <= 0;
        next.disabled = idx >= SECS.length - 1;
      }
      dock.classList.toggle('is-on', idx >= 0 && y > vh * 0.6 && y + vh < footTop + 40);
    }
    function go(i) {
      var sec = SECS[i];
      if (!sec) return;
      if (lenis) lenis.scrollTo(sec.top, { duration: 1.3 });
      else window.scrollTo({ top: sec.top, behavior: RM ? 'auto' : 'smooth' });
    }
    prev.addEventListener('click', function () { go(cur - 1); });
    next.addEventListener('click', function () { go(cur + 1); });
    wayUpdate = update;
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    if (hasGSAP) ScrollTrigger.addEventListener('refresh', measure);
    measure();
  })();

  /* ---------- Nav colour over light sections ---------- */
  var lightEls = $$('.flip, .is-light');
  if (RM || html.classList.contains('no-js')) { var fl = $('.flip'); if (fl) fl.classList.add('is-light'); }
  function navTheme() {
    if (wayUpdate) wayUpdate();
    if (!nav || html.classList.contains('menu-open')) return;
    var y = nav.offsetHeight * 0.5;
    var light = false;
    for (var i = 0; i < lightEls.length; i++) {
      var el = lightEls[i];
      if (!el.classList.contains('is-light')) continue;
      var r = el.getBoundingClientRect();
      if (r.top <= y && r.bottom >= y) { light = true; break; }
    }
    nav.classList.toggle('nav--light', light);
  }

  /* ---------- Hero intro ---------- */
  var hero = $('.hero');
  var introDone = false;
  function heroIntro() {
    if (introDone) return;
    introDone = true;
    window.__heroIntro = true;
    try { window.dispatchEvent(new Event('hero:intro')); } catch (e) {}
    if (hero) hero.classList.add('is-in');
    if (RM || !hasGSAP) { html.classList.add('hero-done'); return; }
    var lines = $$('.hero__name .line > span');
    var fades = $$('.hero__kicker, .hero__tagrow > *');
    var late = $$('.hero__post, .hero__hud, .hero__scroll');
    gsap.set(lines, { yPercent: 108 });
    gsap.set(fades, { opacity: 0, y: 18 });
    gsap.set(late, { opacity: 0 });
    html.classList.add('hero-done');
    var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to(lines, { yPercent: 0, duration: 1.35, stagger: 0.09, clearProps: 'transform' }, 0.05)
      .to(fades, { opacity: 1, y: 0, duration: 1.1, stagger: 0.07, clearProps: 'transform' }, 0.4)
      .to(late, { opacity: 1, duration: 1, stagger: 0.08 }, 0.65);
    $$('.hero__hud span').forEach(function (s, i) {
      scramble(s, s.textContent, { chars: CH_NUM + CH_ALPHA, duration: 1.3, delay: 0.75 + i * 0.12, speed: 0.5 });
    });
  }

  /* ---------- No GSAP? Stop here, page is complete. ---------- */
  if (!hasGSAP) {
    html.classList.add('loaded');
    heroIntro();
    window.addEventListener('scroll', navTheme, { passive: true });
    navTheme();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if (hasScramble) gsap.registerPlugin(ScrambleTextPlugin);

  /* ---------- Lenis smooth scroll ---------- */
  if (!RM && typeof window.Lenis !== 'undefined') {
    lenis = new window.Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    lenis.on('scroll', navTheme);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  } else {
    window.addEventListener('scroll', navTheme, { passive: true });
  }

  /* ---------- Loader: plots the route, then hands over to the hero ---------- */
  function runLoader() {
    var loader = $('.loader');
    var showing = loader && window.getComputedStyle(loader).display !== 'none';
    if (!showing) { html.classList.add('loaded'); heroIntro(); return; }
    try { sessionStorage.setItem('as-visited', '1'); } catch (e) {}
    if (lenis) lenis.stop();
    var placeEl = $('.loader__place', loader);
    var coordEl = $('.loader__coord', loader);
    var countEl = $('.loader__count', loader);
    var bar = $('.loader__bar i', loader);
    var P = [
      ['Baghdad', '38S MB 409 864'],
      ['Kirkuk', '38S ME 448 251'],
      ['Mosul', '38S LF 335 238'],
      ['Wilmington', '18S TC 287 911'],
      ['San Diego', '11S MS 849 197'],
      ['Austin', '14R PU 209 490']
    ];
    var cur = 0;
    var o = { p: 0 };
    gsap.timeline()
      .to(o, {
        p: 100, duration: 2.1, ease: 'power2.inOut',
        onUpdate: function () {
          countEl.textContent = ('00' + Math.round(o.p)).slice(-3);
          bar.style.transform = 'scaleX(' + (o.p / 100).toFixed(3) + ')';
          var i = Math.min(P.length - 1, Math.floor((o.p / 100) * P.length));
          if (i !== cur) {
            cur = i;
            scramble(placeEl, P[i][0], { chars: CH_ALPHA, duration: 0.35, speed: 1 });
            coordEl.textContent = P[i][1];
          }
        }
      })
      .add(heroIntro, '+=0.12')
      .fromTo(loader, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'expo.inOut' }, '<')
      .add(function () {
        html.classList.add('loaded');
        if (lenis) lenis.start();
        ScrollTrigger.refresh();
      });
  }
  runLoader();

  /* ---------- Section labels decode as they arrive ---------- */
  $$('[data-scramble]').forEach(function (el) {
    var text = el.textContent;
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: function () { scramble(el, text, { duration: 1.1, speed: 0.5, revealDelay: 0.15 }); }
    });
  });

  if (!RM) {
    /* Transmission: words light up as you read */
    var big = $('.tx__big');
    if (big) {
      var words = [];
      (function walk(node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var frag = d.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(function (part) {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(d.createTextNode(part)); return; }
              var s = d.createElement('span');
              s.className = 'w';
              s.textContent = part;
              frag.appendChild(s);
              words.push(s);
            });
            n.parentNode.replaceChild(frag, n);
          } else if (n.nodeType === 1) {
            walk(n);
          }
        });
      })(big);
      gsap.fromTo(words, { opacity: 0.13 }, {
        opacity: 1, ease: 'none', stagger: 0.12,
        scrollTrigger: { trigger: big, start: 'top 78%', end: 'bottom 42%', scrub: true }
      });
    }

    /* Stats decode */
    $$('[data-num]').forEach(function (el) {
      var t = el.textContent;
      ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: function () { scramble(el, t, { chars: CH_NUM, duration: 1.2, speed: 0.45, revealDelay: 0.25 }); }
      });
    });

    /* Gentle rise for content blocks */
    var riseSel = '.tx__grid > *, .tx__stats .stat, .hat, .nolb__grid > *, .cyber__intro > *, .svc__row, .roe, .term, .tst__grid > li, .press__list li, .foot__grid > *';
    var rise = $$(riseSel);
    gsap.set(rise, { opacity: 0, y: 30 });
    ScrollTrigger.batch(rise, {
      start: 'top 90%', once: true,
      onEnter: function (batch) {
        gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, overwrite: true, clearProps: 'opacity,transform' });
      }
    });

    /* Big headings slide up line by line */
    $$('.nolb__title .line > span').forEach(function (s, i) {
      gsap.from(s, {
        yPercent: 105, duration: 1.25, ease: 'expo.out', delay: i * 0.09,
        scrollTrigger: { trigger: '.nolb__title', start: 'top 82%', once: true }
      });
    });
    $$('.sec-head h2, .cyber__title, .foot__big').forEach(function (h) {
      gsap.from(h, {
        y: 60, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: h, start: 'top 88%', once: true }
      });
    });

    /* Marquee, speeds up and reverses with your scroll */
    var track = $('.marquee__track');
    if (track) {
      var loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 42, repeat: -1 });
      loop.totalTime(loop.duration() * 200);
      ScrollTrigger.create({
        trigger: '.ally', start: 'top bottom', end: 'bottom top',
        onUpdate: function (self) {
          var dir = self.direction;
          var boost = Math.min(5, Math.abs(self.getVelocity()) / 320);
          gsap.to(loop, {
            timeScale: dir * (1 + boost), duration: 0.2, overwrite: true,
            onComplete: function () { gsap.to(loop, { timeScale: dir, duration: 1 }); }
          });
        }
      });
    }

    /* Hero: content drifts as the signal degrades */
    if (hero) {
      gsap.to('.hero__content', {
        yPercent: -14, opacity: 0.2, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      });
    }

    /* White hat flip: the page turns white */
    var flip = $('.flip');
    if (flip) {
      var disc = $('.flip__disc', flip);
      var hatPaths = $$('.flip__hat path', flip);
      gsap.set(hatPaths, { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.timeline({
        scrollTrigger: {
          trigger: flip, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
          onUpdate: function (self) {
            var on = self.progress > 0.86;
            if (on !== flip.classList.contains('is-light')) { flip.classList.toggle('is-light', on); navTheme(); }
          }
        }
      })
        .fromTo(hatPaths, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.3, stagger: 0.03, ease: 'none' }, 0)
        .fromTo('.flip__word', { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.16, ease: 'power2.out' }, 0.1)
        .fromTo('.flip__note', { opacity: 0 }, { opacity: 1, duration: 0.12 }, 0.2)
        .fromTo(disc, { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(72% at 50% 50%)', duration: 0.5, ease: 'power2.in' }, 0.4)
        .to({}, { duration: 0.1 });
    }

    /* Footer wordmark rises into its crop */
    if ($('.foot__mark')) {
      gsap.from('.foot__mark', { yPercent: 22, ease: 'none', scrollTrigger: { trigger: '.foot__base', start: 'top bottom', end: 'bottom bottom', scrub: true } });
    }

    /* Footer words re-scramble on hover */
    $$('[data-hover-scramble]').forEach(function (el) {
      var t = el.textContent;
      el.addEventListener('mouseenter', function () { scramble(el, t, { chars: CH_ALPHA, duration: 0.6, speed: 1.2 }); });
    });
  }

  /* ---------- Footer portrait: decrypt lens ---------- */
  var fp = $('.foot__portrait');
  if (fp) {
    var frame = $('.fp__frame', fp);
    var moveLens = function (e) {
      var r = frame.getBoundingClientRect();
      frame.style.setProperty('--mx', (e.clientX - r.left).toFixed(1) + 'px');
      frame.style.setProperty('--my', (e.clientY - r.top).toFixed(1) + 'px');
    };
    if (FINE) {
      fp.addEventListener('pointerenter', function (e) { moveLens(e); fp.classList.add('is-lens'); });
      fp.addEventListener('pointermove', moveLens, { passive: true });
      fp.addEventListener('pointerleave', function () { fp.classList.remove('is-lens'); });
    }
    fp.addEventListener('click', function (e) { moveLens(e); fp.classList.toggle('is-open'); });
  }

  /* ---------- Custom crosshair cursor (fine pointers only) ---------- */
  if (FINE && !RM) {
    var cur = $('.cursor');
    if (cur) {
      html.classList.add('has-cursor');
      var label = $('.cursor__label', cur);
      var xTo = gsap.quickTo(cur, 'x', { duration: 0.22, ease: 'power3' });
      var yTo = gsap.quickTo(cur, 'y', { duration: 0.22, ease: 'power3' });
      window.addEventListener('pointermove', function (e) {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        xTo(e.clientX); yTo(e.clientY);
      }, { passive: true });
      d.addEventListener('pointerover', function (e) {
        var t = e.target;
        var lab = t.closest ? t.closest('[data-cursor]') : null;
        label.textContent = lab ? lab.getAttribute('data-cursor') : '';
        cur.classList.toggle('has-label', !!lab);
        cur.classList.toggle('is-link', !!(t.closest && t.closest('a, button')));
        cur.classList.toggle('is-hidden', !!(t.closest && t.closest('[data-cursor-hide]')) && !(t.closest && t.closest('a, button, .hero__content, .hero__post')));
      });
      d.documentElement.addEventListener('mouseleave', function () { cur.classList.add('is-hidden'); });
      d.documentElement.addEventListener('mouseenter', function () { cur.classList.remove('is-hidden'); });
    }
  }

  /* ---------- Housekeeping ---------- */
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener('load', function () { ScrollTrigger.refresh(); navTheme(); });
  navTheme();
})();
