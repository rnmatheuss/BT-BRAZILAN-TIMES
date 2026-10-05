/* =====================================================
   BANCO DE NOTÍCIAS DO PROJETO (8 NOTÍCIAS)
===================================================== */

const noticiasIniciais = [
    {
        id: 1,
        categoria: "Brasil",
        titulo: "Brasil amplia investimentos em tecnologia e inovação",
        subtitulo: "Novos projetos prometem acelerar a transformação digital em empresas e serviços públicos.",
        resumo: "O setor de tecnologia brasileiro ganha força com novos investimentos, programas de inovação e oportunidades para empresas de diferentes tamanhos.",
        imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
        conteudo: `O Brasil vive uma nova fase de expansão do setor de tecnologia.

Empresas de diferentes tamanhos estão aumentando investimentos em infraestrutura digital, inteligência artificial, segurança da informação e automação.

Universidades, startups e grandes empresas também ampliam parcerias para transformar projetos acadêmicos em soluções comerciais.`
    },
    {
        id: 2,
        categoria: "Economia",
        titulo: "Economia brasileira entra em nova semana de expectativas",
        subtitulo: "Mercados acompanham indicadores de atividade, inflação e decisões que podem influenciar os próximos meses.",
        resumo: "Investidores e consumidores monitoram novos dados econômicos enquanto empresas ajustam seus planos.",
        imagem: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
        conteudo: `A agenda econômica brasileira começa uma nova semana com atenção voltada para indicadores de inflação, atividade e mercado de trabalho.

Os números ajudam empresas e famílias a planejar gastos, investimentos e contratação.`
    },
    {
        id: 3,
        categoria: "Brasil",
        titulo: "Cidades brasileiras adotam novas soluções de mobilidade",
        subtitulo: "Tecnologia, transporte coletivo e planejamento urbano aparecem no centro dos novos projetos.",
        resumo: "Municípios investem em mobilidade inteligente para melhorar deslocamentos e qualidade de vida.",
        imagem: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=85",
        conteudo: `Projetos de mobilidade urbana estão ganhando espaço em cidades brasileiras.

Entre as iniciativas estão corredores de ônibus, sistemas integrados, monitoramento de trânsito e aplicativos que facilitam o acesso às informações.`
    },
    {
        id: 4,
        categoria: "Educação",
        titulo: "Educação digital transforma rotina de escolas",
        subtitulo: "Professores combinam recursos tradicionais com plataformas e ferramentas interativas.",
        resumo: "O uso planejado de recursos digitais amplia possibilidades de aprendizagem e acompanhamento dos estudantes.",
        imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
        conteudo: `A tecnologia passou a ocupar um espaço permanente no cotidiano de muitas escolas.

Plataformas educacionais, conteúdos multimídia e ferramentas de colaboração são utilizados para complementar as aulas.`
    },
    {
        id: 5,
        categoria: "Cultura",
        titulo: "Cultura brasileira ganha espaço em novas plataformas",
        subtitulo: "Produções independentes encontram novos caminhos para chegar ao público.",
        resumo: "Artistas e produtores utilizam plataformas digitais para divulgar projetos e aproximar obras de novos públicos.",
        imagem: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=85",
        conteudo: `A produção cultural brasileira encontra nas plataformas digitais uma nova forma de circulação.

Música, audiovisual, literatura e artes visuais podem alcançar públicos de diferentes regiões.`
    },
    {
        id: 6,
        categoria: "Ciência",
        titulo: "Ciência brasileira avança em pesquisas estratégicas",
        subtitulo: "Laboratórios e universidades ampliam projetos em áreas de impacto social.",
        resumo: "Pesquisadores desenvolvem estudos que podem contribuir para saúde, meio ambiente e indústria.",
        imagem: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85",
        conteudo: `Universidades e centros de pesquisa brasileiros continuam desenvolvendo projetos em áreas estratégicas para o país.

Estudos relacionados ao meio ambiente, saúde, energia e tecnologia concentram parte dos esforços.`
    },
    {
        id: 7,
        categoria: "Esportes",
        titulo: "Esportes movimentam torcidas e renovam calendários",
        subtitulo: "Clubes se preparam para uma sequência de competições com agendas cada vez mais intensas.",
        resumo: "A temporada reúne jogos, preparação física e estratégias para clubes que disputam diferentes competições.",
        imagem: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
        conteudo: `A temporada esportiva entra em uma fase movimentada para clubes e atletas.

A sequência de partidas exige planejamento físico, análise de desempenho e cuidado com a recuperação.`
    },
    {
        id: 8,
        categoria: "Meio Ambiente",
        titulo: "Sustentabilidade ganha novas estratégias nas empresas",
        subtitulo: "Organizações revisam processos para reduzir desperdícios e melhorar o uso de recursos.",
        resumo: "Projetos ambientais deixam de ser ações isoladas e passam a fazer parte do planejamento de negócios.",
        imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
        conteudo: `A sustentabilidade passou a ocupar uma posição mais estratégica dentro de empresas brasileiras.

Em vez de iniciativas isoladas, organizações estão revisando processos de produção, logística e consumo de energia.`
    }
];

/* =====================================================
   LOCAL STORAGE
===================================================== */

let noticias = JSON.parse(localStorage.getItem("brazilianTimesNoticias")) || noticiasIniciais;

function salvarNoticias() {
    localStorage.setItem("brazilianTimesNoticias", JSON.stringify(noticias));
}

/* =====================================================
   RELÓGIO / HORÁRIO NO RODAPÉ (TEMPO REAL)
===================================================== */

function atualizarRelogioFooter() {
    const agora = new Date();
    const dataFormatada = new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(agora);
    const horaFormatada = agora.toLocaleTimeString("pt-BR");
    
    const elemClock = document.getElementById("clock-text");
    if (elemClock) {
        elemClock.textContent = `${dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)} • ${horaFormatada}`;
    }
}

setInterval(atualizarRelogioFooter, 1000);
atualizarRelogioFooter();

function abrirMenu() {
    document.getElementById("navbar").classList.toggle("open");
}

function escapeHTML(texto) {
    return String(texto)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function encontrarNoticia(id) {
    return noticias.find(noticia => noticia.id == id);
}

function criarCard(noticia) {
    return `
        <article class="news-card">
            <img class="news-card-image" src="${noticia.imagem}" alt="${escapeHTML(noticia.titulo)}">
            <div class="news-card-content">
                <div class="category">${escapeHTML(noticia.categoria)}</div>
                <h2>${escapeHTML(noticia.titulo)}</h2>
                <p>${escapeHTML(noticia.resumo)}</p>
                <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 12px;">Publicado hoje</div>
                <a class="read-button" href="#noticia-${noticia.id}">Ler notícia</a>
            </div>
        </article>
    `;
}

/* =====================================================
   PÁGINAS E ROTAS
===================================================== */

function paginaInicial() {
    if (noticias.length === 0) {
        document.getElementById("app").innerHTML = `<div class="container"><p>Nenhuma notícia disponível.</p></div>`;
        return;
    }

    const destaque = noticias[0];
    const outras = noticias.slice(1);

    document.getElementById("app").innerHTML = `
        <div class="container">
            <section class="featured">
                <img class="featured-image" src="${destaque.imagem}" alt="${escapeHTML(destaque.titulo)}">
                <div class="featured-content">
                    <div class="category">${destaque.categoria}</div>
                    <h1>${escapeHTML(destaque.titulo)}</h1>
                    <p class="article-subtitle" style="font-size:1rem; margin: 10px 0;">${escapeHTML(destaque.subtitulo)}</p>
                    <p class="summary" style="margin-bottom:20px; color: var(--gray-600);">${escapeHTML(destaque.resumo)}</p>
                    <a class="read-button" href="#noticia-${destaque.id}">Leia a matéria completa</a>
                </div>
            </section>

            <div class="section-title">
                <h2>Últimas notícias</h2>
            </div>

            <section class="news-grid">
                ${outras.map(criarCard).join("")}
            </section>
        </div>
    `;
}

function paginaNoticias() {
    let pagina = Number(location.hash.split("=")[1]) || 1;
    const porPagina = 4;
    const inicio = (pagina - 1) * porPagina;
    const fim = inicio + porPagina;
    const lista = noticias.slice(inicio, fim);
    const totalPaginas = Math.ceil(noticias.length / porPagina);

    document.getElementById("app").innerHTML = `
        <div class="container">
            <div class="section-title">
                <h1>Todas as notícias</h1>
            </div>

            <div class="search-area">
                <input type="text" id="campoBusca" placeholder="Pesquisar notícia..." onkeyup="buscarNoticias()">
                <button onclick="buscarNoticias()">Buscar</button>
            </div>

            <section class="news-grid" id="resultadoNoticias">
                ${lista.map(criarCard).join("")}
            </section>

            <div class="pagination">
                ${Array.from({ length: totalPaginas }, (_, i) => `
                    <button class="${i + 1 === pagina ? "active" : ""}" onclick="mudarPagina(${i + 1})">
                        ${i + 1}
                    </button>
                `).join("")}
            </div>
        </div>
    `;
}

function mudarPagina(pagina) {
    location.hash = `noticias=${pagina}`;
}

function buscarNoticias() {
    const texto = document.getElementById("campoBusca").value.toLowerCase();
    const resultado = noticias.filter(noticia =>
        noticia.titulo.toLowerCase().includes(texto) ||
        noticia.categoria.toLowerCase().includes(texto)
    );

    document.getElementById("resultadoNoticias").innerHTML = resultado.length
        ? resultado.map(criarCard).join("")
        : `<div class="form-card">Nenhuma notícia encontrada.</div>`;
}

function paginaNoticia(id) {
    const noticia = encontrarNoticia(id);
    if (!noticia) {
        paginaInicial();
        return;
    }

    document.getElementById("app").innerHTML = `
        <div class="container">
            <article class="article">
                <a class="back" href="#noticias">← Voltar para notícias</a>
                <br><br>
                <div class="category">${noticia.categoria}</div>
                <h1 style="font-size:2rem; margin: 10px 0; color: var(--green-dark);">${escapeHTML(noticia.titulo)}</h1>
                <p class="article-subtitle">${escapeHTML(noticia.subtitulo)}</p>
                <img class="article-image" src="${noticia.imagem}" alt="${escapeHTML(noticia.titulo)}">
                <div class="article-text">${escapeHTML(noticia.conteudo)}</div>
            </article>
        </div>
    `;
}

function paginaLogin() {
    document.getElementById("app").innerHTML = `
        <div class="container">
            <div class="form-container">
                <form class="form-card" onsubmit="fazerLogin(event)">
                    <h1>Login do Administrador</h1>
                    <div id="loginMensagem"></div>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input type="email" id="loginEmail" required placeholder="admin@braziliantimes.com">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" id="loginSenha" required placeholder="Digite sua senha">
                    </div>
                    <button class="form-button" style="width:100%" type="submit">Entrar no Painel</button>
                    <p style="margin-top:20px; color:#777; font-size:0.85rem;">
                        Administrador:<br>
                        <strong>admin@braziliantimes.com</strong><br>
                        Senha: <strong>admin123</strong>
                    </p>
                </form>
            </div>
        </div>
    `;
}

function fazerLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    if (email === "admin@braziliantimes.com" && senha === "admin123") {
        localStorage.setItem("brazilianTimesAdmin", "true");
        location.hash = "admin";
    } else {
        document.getElementById("loginMensagem").innerHTML = `
            <div class="message error">E-mail ou senha incorretos.</div>
        `;
    }
}

function paginaCadastro() {
    document.getElementById("app").innerHTML = `
        <div class="container">
            <div class="form-container">
                <form class="form-card" onsubmit="cadastrarUsuario(event)">
                    <h1>Cadastro de Leitor</h1>
                    <div id="cadastroMensagem"></div>
                    <div class="form-group">
                        <label>Nome Completo</label>
                        <input id="cadastroNome" required>
                    </div>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input id="cadastroEmail" type="email" required>
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input id="cadastroSenha" type="password" minlength="6" required>
                    </div>
                    <button class="form-button" style="width:100%" type="submit">Criar cadastro</button>
                </form>
            </div>
        </div>
    `;
}

function cadastrarUsuario(event) {
    event.preventDefault();
    const usuario = {
        nome: document.getElementById("cadastroNome").value,
        email: document.getElementById("cadastroEmail").value,
        senha: document.getElementById("cadastroSenha").value
    };

    localStorage.setItem("brazilianTimesUsuario", JSON.stringify(usuario));
    document.getElementById("cadastroMensagem").innerHTML = `
        <div class="message success">Cadastro realizado com sucesso!</div>
    `;
}

function paginaAdmin() {
    const logado = localStorage.getItem("brazilianTimesAdmin");
    if (logado !== "true") {
        location.hash = "login";
        return;
    }

    document.getElementById("app").innerHTML = `
        <div class="container">
            <div class="admin-header">
                <div>
                    <h1>CMS - Administração</h1>
                    <p style="color:var(--gray-600)">Gerencie os artigos do jornal.</p>
                </div>
                <button class="form-button" style="background-color:var(--danger)" onclick="logout()">Sair</button>
            </div>

            <div class="admin-grid">
                <!-- FORMULÁRIO -->
                <div class="admin-box">
                    <h2>Nova notícia / Editar</h2>
                    <form onsubmit="salvarNoticia(event)">
                        <input type="hidden" id="noticiaId">
                        <div class="form-group">
                            <label>Manchete</label>
                            <input id="adminTitulo" required>
                        </div>
                        <div class="form-group">
                            <label>Subtítulo</label>
                            <input id="adminSubtitulo" required>
                        </div>
                        <div class="form-group">
                            <label>Resumo</label>
                            <textarea id="adminResumo" required rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Conteúdo completo</label>
                            <textarea id="adminConteudo" required rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <label>URL da imagem</label>
                            <input id="adminImagem" type="url" required>
                        </div>
                        <div class="form-group">
                            <label>Categoria</label>
                            <select id="adminCategoria" required>
                                <option>Brasil</option>
                                <option>Economia</option>
                                <option>Tecnologia</option>
                                <option>Educação</option>
                                <option>Cultura</option>
                                <option>Ciência</option>
                                <option>Esportes</option>
                                <option>Meio Ambiente</option>
                            </select>
                        </div>
                        <button class="form-button" style="width:100%" type="submit">Salvar notícia</button>
                    </form>
                </div>

                <!-- LISTA DE GERENCIAMENTO -->
                <div class="admin-box">
                    <h2>Notícias cadastradas</h2>
                    <div class="admin-news">
                        ${noticias.map(noticia => `
                            <div class="admin-item">
                                <div class="category">${noticia.categoria}</div>
                                <h3>${escapeHTML(noticia.titulo)}</h3>
                                <div class="admin-actions">
                                    <button class="edit" onclick="editarNoticia(${noticia.id})">Editar</button>
                                    <button class="delete" onclick="excluirNoticia(${noticia.id})">Excluir</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function salvarNoticia(event) {
    event.preventDefault();
    const id = document.getElementById("noticiaId").value;

    const dados = {
        categoria: document.getElementById("adminCategoria").value,
        titulo: document.getElementById("adminTitulo").value,
        subtitulo: document.getElementById("adminSubtitulo").value,
        resumo: document.getElementById("adminResumo").value,
        conteudo: document.getElementById("adminConteudo").value,
        imagem: document.getElementById("adminImagem").value
    };

    if (id) {
        const indice = noticias.findIndex(noticia => noticia.id == id);
        noticias[indice] = { id: Number(id), ...dados };
    } else {
        noticias.unshift({ id: Date.now(), ...dados });
    }

    salvarNoticias();
    alert("Notícia salva com sucesso!");
    paginaAdmin();
}

function editarNoticia(id) {
    const noticia = encontrarNoticia(id);
    document.getElementById("noticiaId").value = noticia.id;
    document.getElementById("adminTitulo").value = noticia.titulo;
    document.getElementById("adminSubtitulo").value = noticia.subtitulo;
    document.getElementById("adminResumo").value = noticia.resumo;
    document.getElementById("adminConteudo").value = noticia.conteudo;
    document.getElementById("adminImagem").value = noticia.imagem;
    document.getElementById("adminCategoria").value = noticia.categoria;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function excluirNoticia(id) {
    if (!confirm("Deseja realmente excluir esta notícia?")) return;
    noticias = noticias.filter(noticia => noticia.id != id);
    salvarNoticias();
    paginaAdmin();
}

function logout() {
    localStorage.removeItem("brazilianTimesAdmin");
    location.hash = "inicio";
}

function paginaCategoria(categoria) {
    const resultado = noticias.filter(noticia => noticia.categoria === categoria);

    document.getElementById("app").innerHTML = `
        <div class="container">
            <div class="section-title">
                <h1>${categoria}</h1>
            </div>
            <section class="news-grid">
                ${resultado.length 
                    ? resultado.map(criarCard).join("") 
                    : `<div class="form-card">Nenhuma notícia encontrada nesta categoria.</div>`
                }
            </section>
        </div>
    `;
}

function roteador() {
    const rota = location.hash;

    if (rota === "" || rota === "#" || rota === "#inicio") {
        paginaInicial();
        return;
    }
    if (rota === "#noticias" || rota.startsWith("#noticias=")) {
        paginaNoticias();
        return;
    }
    if (rota.startsWith("#noticia-")) {
        const id = rota.replace("#noticia-", "");
        paginaNoticia(id);
        return;
    }
    if (rota === "#login") {
        paginaLogin();
        return;
    }
    if (rota === "#cadastro") {
        paginaCadastro();
        return;
    }
    if (rota === "#admin") {
        paginaAdmin();
        return;
    }
    if (rota.startsWith("#categoria-")) {
        const categoria = decodeURIComponent(rota.replace("#categoria-", ""));
        paginaCategoria(categoria);
        return;
    }

    paginaInicial();
}

window.addEventListener("hashchange", roteador);
roteador();