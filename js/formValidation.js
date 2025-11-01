export function validarFormulario(form) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert("Email inválido.");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  form.reset();
  return true;
}
