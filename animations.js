/* ============================================================
   MY SKIN WARRIOR — gemeinsame Animationen
   Reveals, Stagger-Gruppen, Count-up-Zahlen, Hero-Scroll-Drift.
   Läuft auf index.html und ueber-mich.html (feature-guarded).
   ============================================================ */
(function () {
  'use strict';

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function motionOff() {
    return reduceMq.matches || document.body.classList.contains('motion-off');
  }

  /* ---- Stagger-Gruppen: Kinder bekommen gestaffelte Delays ---- */
  var groups = Array.prototype.slice.call(document.querySelectorAll('[data-stagger]'));
  groups.forEach(function (group) {
    var step = parseInt(group.getAttribute('data-stagger'), 10) || 70;
    Array.prototype.slice.call(group.children).forEach(function (child, i) {
      child.style.setProperty('--rd', (i * step) + 'ms');
    });
  });

  /* ---- Reveal on scroll ---- */
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal, [data-stagger], .line-grow'));
  if ('IntersectionObserver' in window && !motionOff()) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Count-up für Stat-Zahlen ---- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  function runCounter(el) {
    var end = parseFloat(el.getAttribute('data-count')) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    function render(v) { el.textContent = prefix + Math.round(v) + suffix; }
    if (motionOff()) { render(end); return; }
    var dur = 1200, t0 = null;
    function ease(p) { return 1 - Math.pow(1 - p, 3); }
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      render(end * ease(p));
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  if (counters.length) {
    if ('IntersectionObserver' in window && !motionOff()) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { cio.unobserve(e.target); runCounter(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) {
        /* Startwert 0 anzeigen, damit das Hochzählen sichtbar beginnt */
        el.textContent = (el.getAttribute('data-prefix') || '') + '0' + (el.getAttribute('data-suffix') || '');
        cio.observe(el);
      });
    } else {
      counters.forEach(runCounter);
    }
  }

  /* ---- Hero: Scroll-Drift des Cover-Fans (schreibt --hero-p 0..1) ---- */
  var fan = document.querySelector('.cover-fan');
  if (fan && !motionOff()) {
    var fanVisible = true, ticking = false;
    function setP() {
      ticking = false;
      var max = Math.max(1, window.innerHeight * 0.8);
      var p = Math.max(0, Math.min(1, (window.scrollY || 0) / max));
      fan.style.setProperty('--hero-p', p.toFixed(3));
    }
    function onScroll() {
      if (!fanVisible || ticking) return;
      ticking = true;
      window.requestAnimationFrame(setP);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        fanVisible = entries[0].isIntersecting;
      }).observe(fan);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    setP();
  }
})();
