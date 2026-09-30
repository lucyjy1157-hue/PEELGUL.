const header = document.querySelector('[data-header]');
const progressBar = document.querySelector('[data-scroll-progress]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updatePageChrome = () => {
  const scrollTop = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(scrollTop / scrollableHeight, 1) : 0;

  header?.classList.toggle('is-scrolled', scrollTop > 24);

  if (progressBar) {
    progressBar.style.width = (progress * 100).toFixed(2) + '%';
  }
};

updatePageChrome();
window.addEventListener('scroll', updatePageChrome, { passive: true });
window.addEventListener('resize', updatePageChrome);

const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -7% 0px'
  });

  revealItems.forEach((item) => observer.observe(item));
}

const toast = document.querySelector('[data-toast]');
const toastClose = document.querySelector('[data-toast-close]');
let toastTimer;

const closeToast = () => {
  toast?.classList.remove('is-visible');
};

const openToast = () => {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(closeToast, 4200);
};

document.querySelectorAll('[data-purchase-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openToast();
  });
});

toastClose?.addEventListener('click', closeToast);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeToast();
});

document.querySelectorAll('.product-details').forEach((details) => {
  details.addEventListener('toggle', () => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    summary.setAttribute('aria-expanded', String(details.open));
  });
});
