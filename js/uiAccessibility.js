import { navigateTo } from './router.js';

export function initUI() {
  // hamburger
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mainNav = document.getElementById('main-nav');

  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('show');
      ham.setAttribute('aria-expanded', String(open));
      mobileNav.setAttribute('aria-hidden', String(!open));
    });
  }

  // build mobile nav from main nav
  if (mainNav && mobileNav) {
    mobileNav.innerHTML = mainNav.innerHTML;
    mobileNav.querySelectorAll('[data-page]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const page = a.getAttribute('data-page');
        navigateTo(page);
        mobileNav.classList.remove('show');
      });
    });
  }

  // theme toggle (dark mode)
  const themeBtn = document.getElementById('btn-theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const on = document.body.classList.toggle('dark-mode');
      themeBtn.setAttribute('aria-pressed', String(on));
      themeBtn.textContent = on ? 'Modo claro' : 'Modo escuro';
      // persist
      try { localStorage.setItem('theme_dark', on ? '1' : '0'); } catch {}
    });
    // load persisted
    try {
      if (localStorage.getItem('theme_dark') === '1') document.body.classList.add('dark-mode');
    } catch {}
  }

  // high contrast toggle
  const contrast = document.getElementById('btn-contrast');
  if (contrast) {
    contrast.addEventListener('click', () => {
      const on = document.body.classList.toggle('high-contrast');
      contrast.setAttribute('aria-pressed', String(on));
      contrast.textContent = on ? 'Desativar contraste' : 'Alto contraste';
      try { localStorage.setItem('high_contrast', on ? '1' : '0'); } catch {}
    });
    try {
      if (localStorage.getItem('high_contrast') === '1') document.body.classList.add('high-contrast');
    } catch {}
  }

  // keyboard for dropdowns (Enter/Space to open)
  document.querySelectorAll('.dropdown').forEach(d => {
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = d.getAttribute('aria-expanded') === 'true';
        d.setAttribute('aria-expanded', String(!expanded));
      }
    });
  });

  // global delegated event: buttons with data-page
  document.body.addEventListener('click', (e) => {
    const el = e.target.closest('[data-page]');
    if (el) {
      e.preventDefault();
      const page = el.getAttribute('data-page');
      navigateTo(page);
    }
  });
}

export function showToast(message, type = 'info') {
  const t = document.createElement('div');
  t.className = 'alert ' + (type === 'success' ? 'alert--success' : type === 'error' ? 'alert--error' : '');
  t.setAttribute('role','status');
  t.textContent = message;
  t.style.position = 'fixed';
  t.style.right = '20px';
  t.style.bottom = '20px';
  t.style.zIndex = 9999;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

export function setActiveNav(page) {
  document.querySelectorAll('[data-page]').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === page);
  });
}
