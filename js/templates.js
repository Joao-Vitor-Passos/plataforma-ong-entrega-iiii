export function getTemplate(page) {
  switch(page) {
    case 'home':
      return `
        <section class="hero" aria-label="Seção inicial">
          <div>
            <h1>Transformando vidas através da solidariedade</h1>
            <p class="text-muted">Junte-se à nossa missão de ajudar quem mais precisa.</p>
            <button class="btn" data-page="projetos">Conheça nossos projetos</button>
          </div>
          <img src="../imagens/ong.jpg" alt="Equipe da ONG" />
        </section>
        <section aria-label="Destaques">
          <div class="projects">
            <article class="card" aria-labelledby="proj1">
              <img src="../imagens/projeto1.jpg" alt="">
              <h3 id="proj1">Alimentos para Todos</h3>
              <p>Campanha de arrecadação de cestas básicas para famílias carentes.</p>
            </article>
            <article class="card" aria-labelledby="proj2">
              <img src="../imagens/doacao.jpg" alt="">
              <h3 id="proj2">Doe Amor</h3>
              <p>Recolhemos roupas e brinquedos para crianças.</p>
            </article>
          </div>
        </section>`;
    case 'projetos':
      return `<section><h1>Projetos</h1><p>Lista de projetos em andamento.</p></section>`;
    case 'cadastro':
      return `
        <section>
          <h1>Contato</h1>
          <form class="form" aria-label="Formulário de contato" novalidate>
            <label for="nome">Nome completo</label>
            <input id="nome" name="nome" type="text" required aria-required="true" />

            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" required aria-required="true" />

            <label for="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="4" required aria-required="true"></textarea>

            <div class="mt-2">
              <button class="btn" type="submit">Enviar</button>
              <button class="btn btn--ghost" type="button" id="resetBtn">Limpar</button>
            </div>
            <div id="form-feedback" role="status" aria-live="polite"></div>
          </form>
        </section>`;
    default:
      return `<section><h1>Página não encontrada</h1></section>`;
  }
}
