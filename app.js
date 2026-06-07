/* ============================================================
   MY SKIN WARRIOR — Landingpage Interaktionen
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky header: shadow + einblendender CTA ---- */
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var y = window.scrollY || 0;
    header.classList.toggle('scrolled', y > 8);
    var heroBottom = hero ? hero.offsetTop + hero.offsetHeight - 120 : 600;
    header.classList.toggle('show-cta', y > heroBottom);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Carousel ---- */
  var viewport = document.querySelector('.carousel-viewport');
  if (viewport) {
    var prev = document.querySelector('[data-car="prev"]');
    var next = document.querySelector('[data-car="next"]');
    var dotsWrap = document.querySelector('.carousel-dots');
    var cards = Array.prototype.slice.call(viewport.querySelectorAll('.heft-card'));
    var dots = [];

    cards.forEach(function (card, i) {
      var d = document.createElement('button');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Heft ' + (i + 1));
      d.addEventListener('click', function () { scrollToCard(i); });
      dotsWrap.appendChild(d);
      dots.push(d);
    });

    function cardStep() {
      if (cards.length < 2) return cards[0] ? cards[0].offsetWidth + 24 : 300;
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }
    function smoothScrollX(el, to) {
      to = Math.max(0, Math.min(to, el.scrollWidth - el.clientWidth));
      if (document.body.classList.contains('motion-off') ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.scrollLeft = to; return;
      }
      var start = el.scrollLeft, change = to - start, dur = 420, t0 = null;
      if (Math.abs(change) < 1) return;
      function ease(p) { return 1 - Math.pow(1 - p, 3); }
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        el.scrollLeft = start + change * ease(p);
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    function scrollToCard(i) {
      smoothScrollX(viewport, i * cardStep());
    }
    function activeIndex() {
      return Math.round(viewport.scrollLeft / cardStep());
    }
    function updateUI() {
      var idx = activeIndex();
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
      var maxScroll = viewport.scrollWidth - viewport.clientWidth - 2;
      if (prev) prev.disabled = viewport.scrollLeft <= 2;
      if (next) next.disabled = viewport.scrollLeft >= maxScroll;
    }
    if (prev) prev.addEventListener('click', function () { scrollToCard(Math.max(0, activeIndex() - 1)); });
    if (next) next.addEventListener('click', function () { scrollToCard(Math.min(cards.length - 1, activeIndex() + 1)); });
    viewport.addEventListener('scroll', function () { window.requestAnimationFrame(updateUI); }, { passive: true });
    window.addEventListener('resize', updateUI);
    updateUI();

    /* Klick auf Karte -> passendes Angebot */
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var target = card.getAttribute('data-target');
        var el = target && document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---- FAQ Akkordeon ---- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    var inner = item.querySelector('.faq-a-inner');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (other) {
        if (other !== item) { other.classList.remove('open'); other.querySelector('.faq-a').style.height = '0px'; other.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); }
      });
      if (isOpen) {
        item.classList.remove('open'); a.style.height = '0px'; q.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open'); a.style.height = inner.offsetHeight + 'px'; q.setAttribute('aria-expanded', 'true');
      }
    });
  });
  window.addEventListener('resize', function () {
    faqItems.forEach(function (item) {
      if (item.classList.contains('open')) { item.querySelector('.faq-a').style.height = item.querySelector('.faq-a-inner').offsetHeight + 'px'; }
    });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Video-Banner: Autoplay-Sicherung + Ton-Umschalter ---- */
  var vbanner = document.querySelector('.video-banner');
  if (vbanner) {
    var video = vbanner.querySelector('.vb-video');
    var soundBtn = vbanner.querySelector('.vb-sound');
    // Autoplay anstoßen (manche Browser brauchen einen expliziten play()-Aufruf)
    function tryPlay() { var p = video.play(); if (p && p.catch) p.catch(function () {}); }

    var src = video.getAttribute('data-src');
    if (src) {
      video.src = src;
      video.load();
      tryPlay();
    }
    video.addEventListener('canplay', tryPlay, { once: true });
    document.addEventListener('visibilitychange', function () { if (!document.hidden) tryPlay(); });

    if (soundBtn) {
      var icon = soundBtn.querySelector('i');
      var label = soundBtn.querySelector('.vb-sound-label');
      soundBtn.addEventListener('click', function () {
        video.muted = !video.muted;
        var on = !video.muted;
        soundBtn.setAttribute('aria-pressed', String(on));
        soundBtn.setAttribute('aria-label', on ? 'Ton ausschalten' : 'Ton einschalten');
        if (label) label.textContent = on ? 'Ton aus' : 'Ton an';
        if (icon) {
          icon.setAttribute('data-lucide', on ? 'volume-2' : 'volume-x');
          if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
        }
        if (on) tryPlay();
      });
    }
  }

  /* ---- Mobile Menü (einfacher Anker-Scroll) ---- */
  var menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var reihe = document.querySelector('#reihe');
      if (reihe) reihe.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();
