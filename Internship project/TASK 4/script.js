// ===== DOM REFERENCES =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollIndicator = document.getElementById('scroll-indicator');

// ===== SCROLL — Glassmorphism Navbar =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Add/remove scrolled class
  navbar.classList.toggle('scrolled', y > 30);

  // Hide scroll indicator after scrolling down
  if (scrollIndicator) {
    scrollIndicator.classList.toggle('hidden', y > 100);
  }

  lastScroll = y;
}, { passive: true });

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isOpen);

  if (!isOpen) {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

navToggle.addEventListener('click', toggleMenu);

// Close mobile menu on link click
document.querySelectorAll('.mobile-link, .mobile-menu__footer .btn').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  });
});

// Close mobile menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && mobileMenu.classList.contains('is-open')) {
    toggleMenu();
  }
});

// Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    toggleMenu();
  }
});

// ===== ACTIVE NAV LINK — Intersection Observer =====
const sections = document.querySelectorAll('.section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === id);
      });
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0
});

sections.forEach(section => sectionObserver.observe(section));

// ===== SMOOTH SCROLL FOR NAV LINKS =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== SCROLL-TRIGGERED ANIMATIONS =====
const animatedElements = document.querySelectorAll('[data-animate]');

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1
});

animatedElements.forEach(el => animObserver.observe(el));
