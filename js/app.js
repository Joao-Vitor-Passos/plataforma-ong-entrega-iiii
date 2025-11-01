import { getTemplate } from './templates.js';
import { validarFormulario } from './formValidation.js';

const content = document.getElementById('content');
const links = document.querySelectorAll('a[data-page]');

function loadPage(page) {
  content.innerHTML = getTemplate(page);

  if (page === 'contato') {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validarFormulario(form);
    });
  }
}

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    loadPage(page);
  });
});

loadPage('home');
