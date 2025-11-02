import { saveSubmission } from './storage.js';
import { showToast } from './uiAccessibility.js';

export function bindFormValidation(form) {
  // reset handler for reset button
  const resetBtn = form.querySelector('#resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', () => form.reset());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.querySelector('[name="nome"]');
    const email = form.querySelector('[name="email"]');
    const mensagem = form.querySelector('[name="mensagem"]');

    clearErrors(form);

    let valid = true;
    if (!nome.value.trim()) { setError(nome, 'Nome é obrigatório'); valid = false; }
    if (!isValidEmail(email.value)) { setError(email, 'E-mail inválido'); valid = false; }
    if (mensagem.value.trim().length < 10) { setError(mensagem, 'Mensagem deve ter pelo menos 10 caracteres'); valid = false; }

    const feedback = form.querySelector('#form-feedback');

    if (!valid) {
      if (feedback) feedback.textContent = 'Corrija os erros e tente novamente.';
      showToast('Existem erros no formulário', 'error');
      return false;
    }

    // salvar no localStorage
    const payload = { nome: nome.value.trim(), email: email.value.trim(), mensagem: mensagem.value.trim(), createdAt: new Date().toISOString() };
    saveSubmission(payload);
    if (feedback) feedback.textContent = 'Enviado com sucesso!';
    showToast('Formulário enviado com sucesso', 'success');
    form.reset();
    return true;
  }, { passive: false });
}

function isValidEmail(email) {
  // regex simples e eficaz
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function setError(input, message) {
  input.classList.add('is-invalid');
  input.setAttribute('aria-invalid','true');
  let help = input.nextElementSibling;
  if (!help || !help.classList || !help.classList.contains('help')) {
    help = document.createElement('div');
    help.className = 'help';
    input.parentNode.insertBefore(help, input.nextSibling);
  }
  help.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll('.is-invalid').forEach(el => {
    el.classList.remove('is-invalid');
    el.removeAttribute('aria-invalid');
  });
  form.querySelectorAll('.help').forEach(h => h.remove());
}
