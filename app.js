const body = document.body;
const header = document.querySelector('[data-header]');
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.menu-toggle');
const cursor = document.querySelector('.cursor');
const progress = document.querySelector('.progress i');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lastY = window.scrollY;
let ticking = false;

function setMenu(open) {
  toggle?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-hidden', String(!open));
  menu?.classList.toggle('open', open);
  body.classList.toggle('menu-open', open);
}

toggle?.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

document.querySelectorAll('[data-menu-link]').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

if (!reducedMotion && cursor) {
  let cx = innerWidth / 2;
  let cy = innerHeight / 2;
  let tx = cx;
  let ty = cy;

  window.addEventListener('pointermove', (event) => {
    tx = event.clientX;
    ty = event.clientY;
  }, { passive: true });

  const moveCursor = () => {
    cx += (tx - cx) * .2;
    cy += (ty - cy) * .2;
    cursor.style.left = `${cx}px`;
    cursor.style.top = `${cy}px`;
    requestAnimationFrame(moveCursor);
  };
  moveCursor();

  document.querySelectorAll('a, button, .media-slot').forEach((element) => {
    element.addEventListener('pointerenter', () => cursor.classList.add('active'));
    element.addEventListener('pointerleave', () => cursor.classList.remove('active'));
  });

  document.querySelectorAll('.magnetic').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * .12}px, ${y * .12}px)`;
    });
    element.addEventListener('pointerleave', () => {
      element.style.transform = '';
    });
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: .08 });

document.querySelectorAll('.reveal, .reveal-card, .reveal-split').forEach((element, index) => {
  if (!reducedMotion) element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

function onScrollFrame() {
  const y = window.scrollY;
  const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
  if (progress) progress.style.transform = `scaleX(${Math.min(y / max, 1)})`;

  if (header) {
    if (y > lastY && y > 140 && !body.classList.contains('menu-open')) header.classList.add('hide');
    else header.classList.remove('hide');
  }

  if (!reducedMotion) {
    document.querySelectorAll('[data-speed]').forEach((element) => {
      const speed = Number(element.dataset.speed || 0);
      const rect = element.getBoundingClientRect();
      const offset = (rect.top - innerHeight / 2) * speed;
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }

  lastY = y;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onScrollFrame);
    ticking = true;
  }
}, { passive: true });

onScrollFrame();

function finishMediaLoad(slot, media) {
  slot.classList.remove('is-loading', 'is-error');
  slot.querySelector('.media-art')?.remove();
  media.classList.add('is-ready');
}

function failMediaLoad(slot) {
  slot.classList.remove('is-loading');
  slot.classList.add('is-error');
}

function mountMedia(slot) {
  if (slot.dataset.mediaMounted === 'true') return;
  const src = slot.dataset.src;
  if (!src) return;

  slot.dataset.mediaMounted = 'true';
  slot.classList.add('is-loading');

  const isVideo = /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
  const media = document.createElement(isVideo ? 'video' : 'img');

  if (isVideo) {
    media.muted = true;
    media.loop = true;
    media.playsInline = true;
    media.preload = slot.dataset.priority === 'true' ? 'auto' : 'metadata';
    media.setAttribute('aria-label', slot.dataset.alt || 'Video dokumentasi Senimen');
    media.addEventListener('loadeddata', () => finishMediaLoad(slot, media), { once: true });
    media.addEventListener('error', () => failMediaLoad(slot), { once: true });
  } else {
    media.alt = slot.dataset.alt || '';
    media.decoding = 'async';
    if (slot.dataset.priority === 'true') {
      media.loading = 'eager';
      media.fetchPriority = 'high';
    } else {
      media.loading = 'lazy';
    }
    media.addEventListener('load', () => finishMediaLoad(slot, media), { once: true });
    media.addEventListener('error', () => failMediaLoad(slot), { once: true });
  }

  const firstOverlay = slot.querySelector('.media-slot-label, .intermission-caption');
  if (firstOverlay) slot.insertBefore(media, firstOverlay);
  else slot.prepend(media);

  media.src = src;
}

const mediaSlots = [...document.querySelectorAll('.media-slot[data-src]')];
const prioritySlots = mediaSlots.filter((slot) => slot.dataset.priority === 'true');
const deferredSlots = mediaSlots.filter((slot) => slot.dataset.priority !== 'true');

prioritySlots.forEach(mountMedia);

if ('IntersectionObserver' in window) {
  const mediaObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      mountMedia(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '500px 0px', threshold: 0.01 });

  deferredSlots.forEach((slot) => mediaObserver.observe(slot));
} else {
  deferredSlots.forEach(mountMedia);
}

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target.querySelector('video');
    if (!video) return;
    if (entry.isIntersecting && !reducedMotion) video.play().catch(() => {});
    else video.pause();
  });
}, { threshold: .25 });

document.querySelectorAll('.media-slot[data-src]').forEach((slot) => videoObserver.observe(slot));

// Future reels: point any media slot's data-src at a file inside ./public/videos/reels/.
// The same loader will automatically switch from <img> to viewport-aware <video>.
