# 🌍 Plataforma ONG — Entrega Final (Entrega IIII)

Este projeto faz parte da disciplina de **Desenvolvimento Front-End e representa a entrega final da plataforma desenvolvida ao longo do semestre.

---

## 🎯 Objetivo

Consolidar todo o projeto com foco em:
- Versionamento profissional com **Git/GitHub**;
- Aplicação de princípios de **acessibilidade (WCAG 2.1 Nível AA)**;
- Otimização de código e recursos para **produção real**;
- Documentação técnica e padronização do projeto.

---

## 🧠 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica acessível  
- **CSS3** — Estilos, temas de alto contraste e modo escuro  
- **JavaScript (ES6)** — Interatividade e navegação por teclado  
- **Git / GitHub** — Controle de versão e deploy  
- **Ferramentas de otimização** — Minificação e compressão de imagens

---

## ♿ Acessibilidade Implementada (WCAG 2.1 Nível AA)

- Navegação completa via **teclado (Tab, Enter, Shift+Tab)**  
- Uso de **tags semânticas** (`header`, `main`, `footer`, `nav`, `section`, etc)  
- **Contraste mínimo 4.5:1** para textos normais  
- Compatibilidade com **leitores de tela (NVDA, JAWS)**  
- **Modo escuro e modo alto contraste** alternáveis pelo usuário  

---

## ⚙️ Otimização para Produção

- **HTML, CSS e JS minificados**  
- **Imagens otimizadas** (compressão sem perda)  
- Estrutura organizada em pastas:



---

## 🧩 Estrutura de Branches (GitFlow)

- `main` — Versão estável do projeto (produção)  
- `develop` — Desenvolvimento principal  
- `feature/*` — Funcionalidades específicas  
- `hotfix/*` — Correções rápidas em produção  

Exemplo de criação de branch:
```bash

git checkout -b feature/acessibilidade

feat: adiciona modo alto contraste
fix: corrige erro de navegação por teclado
docs: atualiza README
style: melhora responsividade no CSS
refactor: otimiza script de acessibilidade


