import { initRouter } from './router.js';
import { initUI } from './uiAccessibility.js';
import { initStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initUI();          // hamburger, theme toggle, keyboard behaviors
  initRouter();      // SPA router (carrega templates, validação)
});
