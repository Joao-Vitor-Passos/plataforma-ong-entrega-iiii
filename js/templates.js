export function getTemplate(page) {
  switch(page) {
    case 'home':
      return `
        <section>
          <h1>Bem-vindo à Plataforma ONG</h1>
          <p>Conectamos voluntários e projetos sociais.</p>
        </section>`;
    case 'sobre':
      return `
        <section>
          <h2>Sobre Nós</h2>
          <p>Somos uma ONG dedicada a conectar boas ações.</p>
        </section>`;
    case 'contato':
      return `
        <section>
          <h2>Contato</h2>
          <form id="form-contato">
            <label>Nome:</label>
            <input type="text" name="nome" required>
            <label>Email:</label>
            <input type="email" name="email" required>
            <label>Mensagem:</label>
            <textarea name="mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>`;
    default:
      return `<p>Página não encontrada.</p>`;
  }
}
