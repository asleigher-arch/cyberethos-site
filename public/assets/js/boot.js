/* Runs in <head> before first paint: flags JS, reduced motion and repeat visits so CSS can decide what to show. */
(function () {
  var d = document.documentElement;
  d.classList.remove('no-js');
  d.classList.add('js');
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) d.classList.add('rm');
  } catch (e) {}
  try {
    if (window.sessionStorage && sessionStorage.getItem('as-visited')) d.classList.add('seen');
  } catch (e) {}
  /* Safety net: if a script fails to load, drop the loader and show everything. */
  window.__fs = setTimeout(function () { d.classList.add('failsafe'); }, 6000);
})();
