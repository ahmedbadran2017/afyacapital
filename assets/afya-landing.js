// ==========================================================================
//  Afya Capital — Landing Page Interactivity
// ==========================================================================

// ── Mobile Hamburger Menu ──────────────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function openMenu() {
  navLinks.classList.add('open');
  menuToggle.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  // Focus first link
  const firstLink = navLinks.querySelector('a');
  if (firstLink) firstLink.focus();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeMenu());
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Trap focus within open menu
  navLinks.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !navLinks.classList.contains('open')) return;
    const focusable = navLinks.querySelectorAll('a');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

// ── Smooth Scrolling ──────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    let targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    // Handle /#section links on the same page
    if (targetId.startsWith('/#')) {
      targetId = targetId.substring(1);
    }

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 0;

    window.scrollTo({
      top: target.offsetTop - navHeight,
      behavior: 'smooth'
    });
  });
});

// ── Scroll-Triggered Fade-In Animations ────────────────────────────────
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const animated = document.querySelectorAll('.animate-on-scroll');

  if (animated.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    animated.forEach(el => observer.observe(el));
  }
} else {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('visible');
  });
}
