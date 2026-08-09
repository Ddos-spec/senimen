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
  progress.style.transform = `scaleX(${Math.min(y / max, 1)})`;

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

// Keep media replacement simple: when real assets are ready, set data-src on a slot.
// Example: <div class="media-slot" data-src="./media/event-01.jpg"></div>
document.querySelectorAll('.media-slot[data-src]').forEach((slot) => {
  const src = slot.dataset.src;
  if (!src) return;
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  const media = document.createElement(isVideo ? 'video' : 'img');
  media.src = src;
  media.alt = slot.dataset.alt || '';
  media.setAttribute('aria-hidden', media.alt ? 'false' : 'true');
  Object.assign(media.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    inset: '0'
  });
  if (isVideo) {
    media.autoplay = true;
    media.muted = true;
    media.loop = true;
    media.playsInline = true;
  }
  slot.replaceChildren(media);
});
