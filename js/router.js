import { getTemplate } from './templates.js';
import { bindFormValidation } from './formValidation.js';
import { setActiveNav } from './uiAccessibility.js';

const app = document.getElementById('app');

export function initRouter() {
  // links data-page
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateTo(page);
      // Close mobile nav if open
      const mobile = document.getElementById('mobile-nav');
      if (mobile && mobile.classList.contains('show')) {
        mobile.classList.remove('show');
        document.getElementById('hamburger').setAttribute('aria-expanded','false');
      }
    });
  });

  // Load initial page (or hash)
  const initial = (location.hash && location.hash.replace('#','')) || 'home';
  navigateTo(initial);
}

export function navigateTo(page) {
  const html = getTemplate(page);
  app.innerHTML = html;
  // set focus to main for accessibility
  app.setAttribute('tabindex','-1');
  app.focus();

  setActiveNav(page);

  // if page has a form, attach validation
  const form = app.querySelector('form');
  if (form) bindFormValidation(form);
}
