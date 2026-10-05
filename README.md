# Brazilian Times - Portal de Notícias Sustentável & CMS

O **Brazilian Times** é um portal de notícias completo e responsivo, desenvolvido com HTML5, CSS3 e JavaScript Vanilla. O sistema apresenta um tema verde focado em inovação e sustentabilidade, navegação estruturada via rotas `#hash`, busca em tempo real, paginação e um painel administrativo (CMS) com persistência no `localStorage`.

---

## 🍃 Destaques do Novo Layout

- **Nova Barra de Navegação Superior:** Design moderno dividido em uma faixa fina de status (*"AO VIVO"*) e um cabeçalho principal em gradiente verde-esmeralda.
- **Relógio e Data em Tempo Real no Rodapé:** A exibição da data completa e horário atualizado em tempo real foi integrada diretamente na seção do rodapé (*footer*).
- **Identidade Visual Verde:** Paleta de cores em tons de verde floresta, esmeralda e fundo verde suave.
- **Menu Mobile Responsivo:** Adaptação completa para telas menores com menu expansível (*hambúrguer*).

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e suporte a navegação por hash na mesma página (`#hash`).
- **CSS3:** Variáveis CSS (`:root`), Flexbox, CSS Grid, efeitos de transição e responsividade.
- **JavaScript (Vanilla - ES6+):** Roteador dinâmico (`hashchange`), manipulação de eventos, relógio em tempo real com `setInterval` e gerenciamento de estado.
- **LocalStorage API:** Armazenamento persistente das 8 notícias iniciais e controle de sessão do administrador.
- **FontAwesome 6:** Ícones para a interface e elementos visuais.

---

## 📌 Funcionalidades Principais

### 📰 Portal Público (Leitores)
- **Página Inicial:** Notícia de capa em destaque e grid responsivo com as matérias mais recentes.
- **Filtro de Categorias:** Navegação por seções (*Brasil, Economia, Tecnologia, Educação, Cultura, Ciência, Esportes e Meio Ambiente*).
- **Busca Dinâmica:** Pesquisa em tempo real por título ou categoria da notícia.
- **Paginação:** Organização dos artigos em páginas numéricas.
- **Leitor Individual:** Leitura completa do artigo com formatação de parágrafos e imagens.
- **Relógio no Rodapé:** Exibição contínua do horário e data no rodapé do portal.

### 🔐 Painel Administrativo (CMS)
- **Autenticação de Usuário:** Login exclusivo para administradores.
- **Gerenciamento de Conteúdo (CRUD):**
  - **Criar:** Adição de novas notícias com manchete, subtítulo, resumo, conteúdo completo, URL da imagem e categoria.
  - **Editar:** Edição de matérias cadastradas com preenchimento automático do formulário.
  - **Excluir:** Remoção de artigos com confirmação de segurança.
- **Persistência de Dados:** Alterações mantidas no navegador via `localStorage`.

---

## 🔑 Credenciais de Acesso (Administrador)

Para acessar o painel de gerenciamento **CMS**:

- **E-mail:** `admin@braziliantimes.com`
- **Senha:** `admin123`

---

## 📂 Estrutura de Arquivos

```text
DT NOTICIAS/
├── index.html    # Estrutura do portal e container principal da aplicação
├── styles.css    # Estilização (Tema Verde, Nova Barra e Relógio no Rodapé)
├── script.js     # Banco de 8 notícias, relógio em tempo real, rotas e CMS
└── README.md     # Documentação do projeto