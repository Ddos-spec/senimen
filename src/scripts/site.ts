let teardown = () => {};

function initSenimen() {
  teardown();

  const controller = new AbortController();
  const signal = controller.signal;
  const body = document.body;
  const header = document.querySelector<HTMLElement>('[data-header]');
  const menu = document.querySelector<HTMLElement>('.menu');
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const cursor = document.querySelector<HTMLElement>('.cursor');
  const progress = document.querySelector<HTMLElement>('.progress i');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observers: IntersectionObserver[] = [];
  const speedElements = [...document.querySelectorAll<HTMLElement>('[data-speed]')];

  const setMenu = (open: boolean) => {
    toggle?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-hidden', String(!open));
    if (menu) menu.inert = !open;
    menu?.classList.toggle('open', open);
    body.classList.toggle('menu-open', open);
  };

  setMenu(false);
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'), { signal });
  document.querySelectorAll<HTMLElement>('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', () => setMenu(false), { signal });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  }, { signal });

  const deferredImages = [...document.querySelectorAll<HTMLImageElement>('img[data-defer-src]')];
  const hydrateDeferredImage = (img: HTMLImageElement) => {
    const src = img.dataset.deferSrc;
    if (!src) return;
    const srcset = img.dataset.deferSrcset;
    const sizes = img.dataset.deferSizes;
    if (srcset) img.srcset = srcset;
    if (sizes) img.sizes = sizes;
    img.src = src;
    delete img.dataset.deferSrc;
    delete img.dataset.deferSrcset;
    delete img.dataset.deferSizes;
  };

  if (deferredImages.length) {
    if ('IntersectionObserver' in window) {
      const deferredObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLImageElement)) return;
          hydrateDeferredImage(entry.target);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '280px 0px', threshold: 0.01 });
      observers.push(deferredObserver);
      deferredImages.forEach((img) => deferredObserver.observe(img));
    } else {
      deferredImages.forEach(hydrateDeferredImage);
    }
  }

  let cursorFrame = 0;
  if (!reducedMotion && cursor && window.matchMedia('(pointer:fine)').matches) {
    let cx = innerWidth / 2;
    let cy = innerHeight / 2;
    let tx = cx;
    let ty = cy;

    window.addEventListener('pointermove', (event) => {
      tx = event.clientX;
      ty = event.clientY;
    }, { passive: true, signal });

    const moveCursor = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      cursor.style.left = `${cx}px`;
      cursor.style.top = `${cy}px`;
      cursorFrame = requestAnimationFrame(moveCursor);
    };
    moveCursor();

    document.querySelectorAll<HTMLElement>('a, button, .media-slot').forEach((element) => {
      element.addEventListener('pointerenter', () => cursor.classList.add('active'), { signal });
      element.addEventListener('pointerleave', () => cursor.classList.remove('active'), { signal });
    });

    document.querySelectorAll<HTMLElement>('.magnetic').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      }, { signal });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; }, { signal });
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      (entry.target as HTMLElement).classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  observers.push(revealObserver);

  document.querySelectorAll<HTMLElement>('.reveal, .reveal-card, .reveal-split').forEach((element, index) => {
    if (!reducedMotion) element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });

  let lastY = window.scrollY;
  let ticking = false;
  const onScrollFrame = () => {
    const y = window.scrollY;
    const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    if (progress) progress.style.transform = `scaleX(${Math.min(y / max, 1)})`;

    if (header) {
      if (y > lastY && y > 140 && !body.classList.contains('menu-open')) header.classList.add('hide');
      else header.classList.remove('hide');
    }

    if (!reducedMotion) {
      speedElements.forEach((element) => {
        const speed = Number(element.dataset.speed || 0);
        const rect = element.getBoundingClientRect();
        const offset = (rect.top - innerHeight / 2) * speed;
        element.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScrollFrame);
      ticking = true;
    }
  }, { passive: true, signal });
  onScrollFrame();

  const finishMediaLoad = (slot: HTMLElement, media: HTMLElement) => {
    slot.classList.remove('is-loading', 'is-error');
    slot.querySelector('.media-art')?.remove();
    media.classList.add('is-ready');
  };

  const failMediaLoad = (slot: HTMLElement) => {
    slot.classList.remove('is-loading');
    slot.classList.add('is-error');
  };

  const mountMedia = (slot: HTMLElement) => {
    if (slot.dataset.mediaMounted === 'true') return;
    const src = slot.dataset.src;
    if (!src) return;

    slot.dataset.mediaMounted = 'true';
    slot.classList.add('is-loading');
    const isVideo = /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
    const media = document.createElement(isVideo ? 'video' : 'img');

    if (media instanceof HTMLVideoElement) {
      media.muted = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = slot.dataset.priority === 'true' ? 'metadata' : 'none';
      media.setAttribute('aria-label', slot.dataset.alt || 'Video dokumentasi Senimen');
      media.addEventListener('loadeddata', () => finishMediaLoad(slot, media), { once: true });
      media.addEventListener('error', () => failMediaLoad(slot), { once: true });
    } else {
      media.alt = slot.dataset.alt || '';
      media.decoding = 'async';
      media.loading = slot.dataset.priority === 'true' ? 'eager' : 'lazy';
      if (slot.dataset.priority === 'true') media.fetchPriority = 'high';
      media.addEventListener('load', () => finishMediaLoad(slot, media), { once: true });
      media.addEventListener('error', () => failMediaLoad(slot), { once: true });
    }

    const overlay = slot.querySelector('.media-slot-label, .intermission-caption');
    if (overlay) slot.insertBefore(media, overlay);
    else slot.prepend(media);
    media.src = src;
  };

  const mediaSlots = [...document.querySelectorAll<HTMLElement>('.media-slot[data-src]')];
  mediaSlots.filter((slot) => slot.dataset.priority === 'true').forEach(mountMedia);

  const mediaObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      mountMedia(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '280px 0px', threshold: 0.01 });
  observers.push(mediaObserver);
  mediaSlots.filter((slot) => slot.dataset.priority !== 'true').forEach((slot) => mediaObserver.observe(slot));

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = (entry.target as HTMLElement).querySelector('video');
      if (!video) return;
      if (entry.isIntersecting && !reducedMotion) video.play().catch(() => {});
      else video.pause();
    });
  }, { threshold: 0.25 });
  observers.push(videoObserver);
  mediaSlots.forEach((slot) => videoObserver.observe(slot));

  teardown = () => {
    controller.abort();
    observers.forEach((observer) => observer.disconnect());
    if (cursorFrame) cancelAnimationFrame(cursorFrame);
    body.classList.remove('menu-open');
    if (menu) {
      menu.inert = true;
      menu.setAttribute('aria-hidden', 'true');
    }
  };
}

document.addEventListener('astro:page-load', initSenimen);
