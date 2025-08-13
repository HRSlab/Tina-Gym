// Helpers
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

// Year
$('#year').textContent = new Date().getFullYear();

// Progress bar
const progressBar = $('.progress__bar');
const setProgress = () => {
  const doc = document.documentElement;
  const scrolled = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight);
  progressBar.style.width = `${Math.min(100, scrolled * 100)}%`;
};
document.addEventListener('scroll', setProgress, { passive: true });
window.addEventListener('resize', setProgress);
setProgress();

// Mobile nav
const burger = $('#burger');
const mobileNav = $('#mobileNav');
burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
  mobileNav.classList.toggle('open');
});

// Close mobile nav when clicking a link
$$('.mobile-nav a', mobileNav).forEach(a => {
  a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
  });
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => io.observe(el));

// Video modal
const videoModal = $('#videoModal');
const videoOpen = $('[data-video-open]');
const videoClose = $('[data-video-close]');
const videoIframe = $('#introVideo');

const pauseYouTube = () => {
  if (!videoIframe) return;
  // Use YouTube Player API postMessage to pause
  videoIframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
};

videoOpen?.addEventListener('click', () => {
  if (typeof videoModal.showModal === 'function') {
    videoModal.showModal();
  } else {
    // Fallback
    videoModal.setAttribute('open','');
  }
});
videoClose?.addEventListener('click', () => {
  pauseYouTube();
  videoModal.close();
});
videoModal?.addEventListener('click', (e) => {
  const rect = videoModal.getBoundingClientRect();
  const clickedOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
  if (clickedOutside) {
    pauseYouTube();
    videoModal.close();
  }
});

// Sticky CTA: hide when footer in view
const stickyCta = $('.sticky-cta');
const footer = $('.site-footer');
if (stickyCta && footer) {
  const footerIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      stickyCta.style.transform = entry.isIntersecting ? 'translateY(110%)' : 'translateY(0)';
    });
  }, { threshold: 0.1 });
  footerIO.observe(footer);
}

// Form handling (Formspree example)
const form = $('#contactForm');
const statusDiv = $('#form-status');

const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

const showError = (name, msg) => {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) el.textContent = msg || '';
};

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = $('#name').value.trim();
  const email = $('#email').value.trim();
  const goal = $('#goal').value.trim();

  let valid = true;
  showError('name', '');
  showError('email', '');
  showError('goal', '');

  if (!name) { showError('name', 'Please enter your name.'); valid = false; }
  if (!validateEmail(email)) { showError('email', 'Enter a valid email.'); valid = false; }
  if (!goal) { showError('goal', 'Please select your primary goal.'); valid = false; }

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Submitting…';
  statusDiv.textContent = '';

  try {
    // Replace with your own endpoint if not using Formspree
    const endpoint = 'https://formspree.io/f/xldlzvaq';
    const formData = new FormData(form);

    const res = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      statusDiv.textContent = 'Thank you! Your plan is on its way. We will be in touch shortly.';
      statusDiv.style.color = '#86efac';
      form.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      statusDiv.textContent = data?.errors?.map(e => e.message).join(', ') || 'Oops! There was a problem.';
      statusDiv.style.color = '#fecaca';
    }
  } catch (err) {
    statusDiv.textContent = 'Network error. Please try again.';
    statusDiv.style.color = '#fecaca';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Claim My Free Session';
  }
});
