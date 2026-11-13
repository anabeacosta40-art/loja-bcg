// ==========================================
// 1. LISTA DE PRODUTOS DA LOJA
// ==========================================
const produtos = [
  { id: 1, nome: "Biscoito decorado de Natal", categoria: "biscoitos", preco: 12.90, desc: "Biscoito amanteigado decorado manualmente com glacê real natalino.", img: "img/biscoito de natal.jpg", destaque: true },
  { id: 2, nome: "Biscoito de gengibre", categoria: "biscoitos", preco: 10.50, desc: "Clássico Gingerbread man levemente apimentado e crocante.", img: "img/Biscoito de gengibre.jpg", destaque: true },
  { id: 3, nome: "Biscoito amanteigado", categoria: "biscoitos", preco: 8.90, desc: "Derrete na boca, feito com manteiga pura e toque de baunilha.", img: "img/biscoito amantegado.jpg", destaque: false },
  { id: 4, nome: "Biscoito de canela", categoria: "biscoitos", preco: 9.50, desc: "Aroma envolvente de canela em pão com açúcar de confeiteiro.", img: "img/biscoito de canela.jpg", destaque: false },
  { id: 5, nome: "Cookies com gotas de chocolate", categoria: "biscoitos", preco: 11.00, desc: "Crocante por fora, macio por dentro com generosas gotas de chocolate meio amargo.", img: "img/cookie com gotas de chocolate.jpg", destaque: true },
  { id: 6, nome: "Cookies de chocolate branco", categoria: "biscoitos", preco: 11.50, desc: "Massa rica com pedaços macios de chocolate branco nobre.", img: "img/cookies de chocolate branco.jpg", destaque: false },

  { id: 7, nome: "Brigadeiro gourmet", categoria: "chocolates", preco: 5.50, desc: "Feito com chocolate belga 54% e confeitos selecionados.", img: "img/Brigadeiro gourmet.jpg", destaque: true },
  { id: 8, nome: "Beijinho de coco", categoria: "chocolates", preco: 5.00, desc: "Doce tradicional de coco ralado fresco com cravo da índia.", img: "img/Beijinho de coco.jpg", destaque: false },
  { id: 9, nome: "Brigadeiro de pistache", categoria: "chocolates", preco: 7.00, desc: "Massa aveludada com pasta pura de pistache e pedaços crocantes.", img: "img/Brigadeiro de pistache.jpg", destaque: true },
  { id: 10, nome: "Trufas de chocolate", categoria: "chocolates", preco: 6.50, desc: "Ganache cremosa banhada em cacau em pó 100%.", img: "img/Trufas de chocolate.jpg", destaque: false },
  { id: 11, nome: "Bombons recheados", categoria: "chocolates", preco: 6.00, desc: "Seleção com recheios de avelã, nozes e frutas vermelhas.", img: "img/bombons recheados.jpg", destaque: false },
  { id: 12, nome: "Pão de mel natalino", categoria: "chocolates", preco: 9.90, desc: "Recheado com doce de leite caseiro e coberto com chocolate nobre.", img: "img/Pão de mel natalino.jpg", destaque: true },
  { id: 13, nome: "Palha italiana", categoria: "chocolates", preco: 7.50, desc: "Brigadeiro tradicional misturado com pedaços crocantes de biscoito.", img: "img/Palha italiana.jpg", destaque: false },
  { id: 14, nome: "Brownie de chocolate", categoria: "chocolates", preco: 12.00, desc: "Denso, fudgy, com casquinha crocante e muito chocolate.", img: "img/Brownie de chocolate.jpg", destaque: false },
  { id: 15, nome: "Pirulito de chocolate decorado", categoria: "chocolates", preco: 8.00, desc: "Pirulito artesanal em formato de Papai Noel ou Rena.", img: "img/Pirulito de chocolate decorado.jpg", destaque: false },
  { id: 16, nome: "Mini árvore de chocolate", categoria: "chocolates", preco: 18.90, desc: "Árvore esculpida em chocolate ao leite com drágeas coloridas.", img: "img/Mini árvore de chocolate.jpg", destaque: true },

  { id: 17, nome: "Bolo de chocolate com ganache", categoria: "bolos", preco: 45.00, desc: "Massa fofinha de cacau recheada e coberta com ganache cremosa.", img: "img/Bolo de chocolate com ganache.jpg", destaque: false },
  { id: 18, nome: "Bolo red velvet natalino", categoria: "bolos", preco: 55.00, desc: "Massa aveludada vermelha com recheio tradicional de cream cheese.", img: "img/Bolo red velvet natalino.jpg", destaque: true },
  { id: 19, nome: "Bolo de frutas cristalizadas", categoria: "bolos", preco: 38.00, desc: "Bolo inglês bem macio, repleto de frutas cristalizadas e uvas-passas.", img: "img/Bolo de frutas cristalizadas.jpg", destaque: false },
  { id: 20, nome: "Bolo de especiarias com doce de leite", categoria: "bolos", preco: 48.00, desc: "Massa perfumada com canela, noz-moscada e recheio generoso.", img: "img/Bolo de especiarias com doce de leite.jpg", destaque: false },
  { id: 21, nome: "Mini bolo natalino", categoria: "bolos", preco: 22.00, desc: "Porção individual decorada com azevinhos em pasta americana.", img: "img/Mini bolo natalino.jpg", destaque: true },
  { id: 22, nome: "Bolo no pote de brigadeiro", categoria: "bolos", preco: 14.90, desc: "Camadas intercaladas de bolo de chocolate e brigadeiro cremoso.", img: "img/Bolo no pote de brigadeiro.jpg", destaque: false },
  { id: 23, nome: "Cupcake de chocolate", categoria: "bolos", preco: 11.90, desc: "Massa de cacau com topo alto de buttercream de chocolate.", img: "img/Cupcake de chocolate.jpg", destaque: false },
  { id: 24, nome: "Cupcake de baunilha", categoria: "bolos", preco: 11.90, desc: "Massa leve de baunilha com cobertura rosa e confeitos dourados.", img: "img/Cupcake de baunilha.jpg", destaque: false },
  { id: 25, nome: "Naked cake de frutas vermelhas", categoria: "bolos", preco: 65.00, desc: "Camadas expostas de pão de ló, creme de baunilha e frutas frescas.", img: "img/Naked cake de frutas vermelhas.jpg", destaque: true },

  { id: 26, nome: "Panetone tradicional", categoria: "panetones", preco: 35.00, desc: "Fermentação natural com frutas cristalizadas e uvas-passas selecionadas.", img: "img/Panetone tradicional.jpg", destaque: false },
  { id: 27, nome: "Chocotone tradicional", categoria: "panetones", preco: 39.00, desc: "Massa artesanal super macia repleta de gotas de chocolate ao leite.", img: "img/Chocotone tradicional.jpg", destaque: true },
  { id: 28, nome: "Chocotone recheado de brigadeiro", categoria: "panetones", preco: 59.90, desc: "Vulcão de brigadeiro gourmet cremoso que escorre ao cortar.", img: "img/Chocotone recheado de brigadeiro.jpg", destaque: true },
  { id: 29, nome: "Chocotone de doce de leite", categoria: "panetones", preco: 58.00, desc: "Recheio abundante de doce de leite cremoso com cobertura de nozes.", img: "img/Chocotone de doce de leite.jpg", destaque: false },
  { id: 30, nome: "Chocotone de Ninho com creme de avelã", categoria: "panetones", preco: 64.90, desc: "Combinação irresistível de Leite Ninho com recheio generoso de Nutella.", img: "img/Chocotone de Ninho com creme de avelã.jpg", destaque: true },
  { id: 31, nome: "Chocotone de pistache", categoria: "panetones", preco: 69.90, desc: "Recheado com brigadeiro de pistache e coberto com pedaços picados.", img: "img/Chocotone de pistache.jpg", destaque: true },
  { id: 32, nome: "Mini panetone", categoria: "panetones", preco: 15.00, desc: "Versão individual de 100g com a mesma maciez do tradicional.", img: "img/Mini panetone.jpg", destaque: false },
  { id: 33, nome: "Mini chocotone recheado", categoria: "panetones", preco: 19.90, desc: "Mini chocotone recheado com trufa de chocolate nobre.", img: "img/Mini chocotone recheado.jpg", destaque: false },

  { id: 34, nome: "Pavê de chocolate", categoria: "sobremesas", preco: 32.00, desc: "Camadas de biscoito champanhe embebido em calda e creme de chocolate.", img: "img/Pavê de chocolate.jpg", destaque: false },
  { id: 35, nome: "Pavê de biscoito e creme", categoria: "sobremesas", preco: 30.00, desc: "Receita de família com creme branco aveludado e cobertura suave.", img: "img/Pavê de biscoito e creme.jpg", destaque: false },
  { id: 36, nome: "Torta holandesa", categoria: "sobremesas", preco: 42.00, desc: "Creme leve de baunilha, cobertura de ganache e biscoitos Calipso na lateral.", img: "img/Torta holandesa.jpg", destaque: true },
  { id: 37, nome: "Cheesecake de frutas vermelhas", categoria: "sobremesas", preco: 46.00, desc: "Base crocante de biscoito, creme denso de queijo e calda caseira de frutas.", img: "img/Cheesecake de frutas vermelhas.jpg", destaque: true },
  { id: 38, nome: "Banoffee", categoria: "sobremesas", preco: 38.00, desc: "Torta de banana fresca, doce de leite e chantilly com canela polvilhada.", img: "img/Banoffee.jpg", destaque: false },
  { id: 39, nome: "Torta de limão", categoria: "sobremesas", preco: 35.00, desc: "Creme cítrico refrescante de limão com cobertura de merengue maçaricado.", img: "img/Torta de limão.jpg", destaque: false },
  { id: 40, nome: "Mousse de chocolate", categoria: "sobremesas", preco: 18.00, desc: "Taça individual de mousse aerada de chocolate 70% cacau.", img: "img/Mousse de chocolate.jpg", destaque: false },

  { id: 41, nome: "Chocolate quente cremoso", categoria: "quentes", preco: 14.50, desc: "Bebida densa feita com chocolate alpino derretido e chantilly.", img: "img/Chocolate quente cremoso.jpg", destaque: true },
  { id: 42, nome: "Cappuccino", categoria: "quentes", preco: 11.00, desc: "Espresso, leite vaporizado, espuma cremosa e toque de cacau com canela.", img: "img/Cappuccino.jpg", destaque: false },
  { id: 43, nome: "Café expresso", categoria: "quentes", preco: 6.50, desc: "Grãos 100% arábica torrados na hora, encorpado e com crema perfeita.", img: "img/Café expresso.jpg", destaque: false },
  { id: 44, nome: "Mocha de chocolate", categoria: "quentes", preco: 15.00, desc: "Combinação deliciosa de espresso, calda de chocolate e leite vaporizado.", img: "img/Mocha de chocolate.jpg", destaque: false },
  { id: 45, nome: "Chá de maçã com canela", categoria: "quentes", preco: 9.90, desc: "Infusão natural de pedaços de maçã fresca com especiarias natalinas.", img: "img/Chá de maçã com canela.jpg", destaque: false },

  { id: 46, nome: "Frappuccino de chocolate", categoria: "geladas", preco: 17.50, desc: "Café batido com gelo, leite, calda de chocolate e topo de chantilly.", img: "img/Frappuccino de chocolate.jpg", destaque: true },
  { id: 47, nome: "Café gelado com caramelo", categoria: "geladas", preco: 16.00, desc: "Cold brew suave misturado com leite e calda artesanal de caramelo.", img: "img/Café gelado com caramelo.jpg", destaque: false },
  { id: 48, nome: "Milk-shake de morango", categoria: "geladas", preco: 18.00, desc: "Sorvete artesanal batido com calda de morangos frescos picados.", img: "img/Milk-shake de morango.jpg", destaque: false },
  { id: 49, nome: "Chocolate gelado", categoria: "geladas", preco: 13.90, desc: "Chocolate nobre gelado batido com leite cremoso e pedras de gelo.", img: "img/Chocolate gelado.jpg", destaque: false },
  { id: 50, nome: "Soda italiana de frutas vermelhas", categoria: "geladas", preco: 12.50, desc: "Bebida gaseificada super refrescante com xarope natural de frutas.", img: "img/Soda italiana de frutas vermelhas.jpg", destaque: true }
];

// Recupera o carrinho salvo no navegador
let carrinho = JSON.parse(localStorage.getItem('carrinho_natal_bcg')) || [];

// ==========================================
// 2. INICIALIZAÇÃO DO SITE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initMenuMobile();
  initNeve();
  initAudio();
  initCarrossel();
  initGaleria();
  initFormularioContato();
  atualizarContadorCarrinho();
  renderizarCarrinho();

  if (document.getElementById('home-featured-grid')) {
    renderizarDestaquesHome();
  }

  if (document.getElementById('products-grid')) {
    renderizarProdutos(produtos);
    initFiltros();
  }

  if (document.getElementById('cd-days')) {
    initContagemRegressiva();
  }
});

// ==========================================
// 3. MENU MOBILE (CELULAR E TABLET)
// ==========================================
function initMenuMobile() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  // Abre ou fecha o menu ao tocar no botão
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Fecha o menu automaticamente ao clicar em um link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// ==========================================
// 4. GALERIA DE FOTOS AMPLIADA (LIGHTBOX)
// ==========================================
function initGaleria() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');

  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  // Fecha a imagem ampliada ao clicar fora
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

// ==========================================
// 5. FORMULÁRIO DE CONTATO
// ==========================================
function initFormularioContato() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    const errNome = document.getElementById('err-nome');
    const errEmail = document.getElementById('err-email');
    const errMensagem = document.getElementById('err-mensagem');

    let valido = true;

    // Valida Nome
    if (nome.value.trim() === '') {
      errNome.style.display = 'block';
      valido = false;
    } else {
      errNome.style.display = 'none';
    }

    // Valida E-mail
    if (!email.value.includes('@') || !email.value.includes('.')) {
      errEmail.style.display = 'block';
      valido = false;
    } else {
      errEmail.style.display = 'none';
    }

    // Valida Mensagem
    if (mensagem.value.trim() === '') {
      errMensagem.style.display = 'block';
      valido = false;
    } else {
      errMensagem.style.display = 'none';
    }

    // Se tudo estiver certo, mostra mensagem de sucesso
    if (valido) {
      document.getElementById('form-success').style.display = 'block';
      contactForm.reset();
    }
  });
}

// ==========================================
// 6. CARROSSEL DE PROMOÇÕES
// ==========================================
let slideAtual = 0;

function initCarrossel() {
  const track = document.getElementById('carousel-track');
  const btnPrev = document.getElementById('prev-slide');
  const btnNext = document.getElementById('next-slide');

  if (!track || !btnPrev || !btnNext) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  function atualizarCarrossel() {
    track.style.transform = `translateX(-${slideAtual * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % totalSlides;
    atualizarCarrossel();
  });

  btnPrev.addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    atualizarCarrossel();
  });

  // Passa o slide sozinho a cada 5 segundos
  setInterval(() => {
    slideAtual = (slideAtual + 1) % totalSlides;
    atualizarCarrossel();
  }, 5000);
}

// ==========================================
// 7. EFEITO DE NEVE NO FUNDO
// ==========================================
function initNeve() {
  const canvas = document.getElementById('snow-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const flocos = Array.from({ length: 65 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 3 + 1,
    d: Math.random() * 1 + 0.5
  }));

  function desenhar() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.beginPath();
    flocos.forEach(f => {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    });
    ctx.fill();
    atualizar();
    requestAnimationFrame(desenhar);
  }

  function atualizar() {
    flocos.forEach(f => {
      f.y += f.d;
      f.x += Math.sin(f.y / 30) * 0.5;
      if (f.y > height) {
        f.y = -10;
        f.x = Math.random() * width;
      }
    });
  }

  desenhar();
}

// ==========================================
// 8. MÚSICA DE FUNDO (CONTÍNUA ENTRE PÁGINAS)
// ==========================================
const bgAudio = new Audio('audio/musica.mp3');
bgAudio.loop = true;
bgAudio.volume = 0.3;

// Recupera o estado salvo da música antes de trocar de página
let isPlaying = sessionStorage.getItem('musica_tocando') === 'true';
const tempoSalvo = parseFloat(sessionStorage.getItem('musica_tempo')) || 0;

function initAudio() {
  const musicBtn = document.getElementById('music-toggle');
  if (!musicBtn) return;

  // Continua do exato segundo onde parou na página anterior
  bgAudio.currentTime = tempoSalvo;

  // Se a música estava ligada antes, retoma automaticamente
  if (isPlaying) {
    bgAudio.play().then(() => {
      musicBtn.classList.add('playing');
      musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    }).catch(() => {
      // Caso o navegador bloqueie o autoplay, reseta o ícone
      isPlaying = false;
      sessionStorage.setItem('musica_tocando', 'false');
    });
  }

  // Salva o segundo atual da música antes de sair ou trocar de página
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('musica_tempo', bgAudio.currentTime);
    sessionStorage.setItem('musica_tocando', isPlaying);
  });

  // Botão de ligar / mutar a música
  musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
      bgAudio.play().then(() => {
        isPlaying = true;
        sessionStorage.setItem('musica_tocando', 'true');
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
      }).catch(() => {
        alert("Certifique-se de que o arquivo 'audio/musica.mp3' existe na pasta!");
      });
    } else {
      bgAudio.pause();
      isPlaying = false;
      sessionStorage.setItem('musica_tocando', 'false');
      musicBtn.classList.remove('playing');
      musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  });
}

// ==========================================
// 9. EXIBIÇÃO E FILTRO DE PRODUTOS
// ==========================================
function renderizarProdutos(lista) {
  const container = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  const noProducts = document.getElementById('no-products');
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = '';
    if (noProducts) noProducts.style.display = 'block';
    if (countEl) countEl.textContent = 'Mostrando 0 produtos';
    return;
  }

  if (noProducts) noProducts.style.display = 'none';
  if (countEl) countEl.textContent = `Mostrando ${lista.length} de ${produtos.length} produtos`;

  container.innerHTML = lista.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.nome}">
      <div class="product-card-body">
        <h3>${p.nome}</h3>
        <p class="desc">${p.desc}</p>
        <div class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
        <button class="btn btn-primary" onclick="adicionarAoCarrinho(${p.id})">
          <i class="fas fa-cart-plus"></i> Adicionar
        </button>
      </div>
    </div>
  `).join('');
}

function renderizarDestaquesHome() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;
  const destaques = produtos.filter(p => p.destaque).slice(0, 6);
  container.innerHTML = destaques.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.nome}">
      <div class="product-card-body">
        <h3>${p.nome}</h3>
        <p class="desc">${p.desc}</p>
        <div class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
        <button class="btn btn-primary" onclick="adicionarAoCarrinho(${p.id})">
          <i class="fas fa-cart-plus"></i> Adicionar
        </button>
      </div>
    </div>
  `).join('');
}

function initFiltros() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');

  function filtrar() {
    const texto = searchInput ? searchInput.value.toLowerCase() : '';
    const categoria = categoryFilter ? categoryFilter.value : 'todos';

    const resultado = produtos.filter(p => {
      const bateTexto = p.nome.toLowerCase().includes(texto) || p.desc.toLowerCase().includes(texto);
      const bateCategoria = categoria === 'todos' || p.categoria === categoria;
      return bateTexto && bateCategoria;
    });

    renderizarProdutos(resultado);
  }

  if (searchInput) searchInput.addEventListener('input', filtrar);
  if (categoryFilter) categoryFilter.addEventListener('change', filtrar);
}

// ==========================================
// 10. CONTAGEM REGRESSIVA PARA O NATAL
// ==========================================
function initContagemRegressiva() {
  function atualizarTimer() {
    const agora = new Date();
    const anoAtual = agora.getFullYear();
    let natal = new Date(anoAtual, 11, 25);

    if (agora > natal) {
      natal = new Date(anoAtual + 1, 11, 25);
    }

    const diff = natal - agora;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    if (document.getElementById('cd-days')) document.getElementById('cd-days').textContent = String(dias).padStart(2, '0');
    if (document.getElementById('cd-hours')) document.getElementById('cd-hours').textContent = String(horas).padStart(2, '0');
    if (document.getElementById('cd-minutes')) document.getElementById('cd-minutes').textContent = String(minutos).padStart(2, '0');
    if (document.getElementById('cd-seconds')) document.getElementById('cd-seconds').textContent = String(segundos).padStart(2, '0');
  }

  atualizarTimer();
  setInterval(atualizarTimer, 1000);
}

// ==========================================
// 11. CARRINHO DE COMPRAS E WHATSAPP
// ==========================================
function salvarCarrinho() {
  localStorage.setItem('carrinho_natal_bcg', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

function atualizarContadorCarrinho() {
  const totalItens = carrinho.reduce((sum, item) => sum + item.qtd, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = totalItens);
}

function adicionarAoCarrinho(id) {
  const prod = produtos.find(p => p.id === id);
  if (!prod) return;

  const itemExistente = carrinho.find(item => item.id === id);
  if (itemExistente) {
    itemExistente.qtd++;
  } else {
    carrinho.push({ ...prod, qtd: 1 });
  }

  salvarCarrinho();
  renderizarCarrinho();
  abrirCarrinho();
}

function alterarQtd(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;

  item.qtd += delta;
  if (item.qtd <= 0) {
    carrinho = carrinho.filter(i => i.id !== id);
  }
  salvarCarrinho();
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;

  if (carrinho.length === 0) {
    container.innerHTML = `<div class="empty-cart-msg">Seu carrinho está vazio. Escolha algumas delícias natalinas da Casa BCG!</div>`;
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  let total = 0;
  container.innerHTML = carrinho.map(item => {
    const subtotal = item.preco * item.qtd;
    total += subtotal;
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.nome}">
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          <span class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
          <div class="cart-item-controls">
            <button onclick="alterarQtd(${item.id}, -1)">-</button>
            <span>${item.qtd}</span>
            <button onclick="alterarQtd(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function abrirCarrinho() {
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.add('active');
}

function fecharCarrinho() {
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.remove('active');
}

function enviarWhatsApp() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  let msg = "Olá Casa BCG! Gostaria de fazer o seguinte pedido natalino:\n\n";
  let total = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.qtd;
    total += subtotal;
    msg += `• ${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
  });

  msg += `\n*Total do Pedido: R$ ${total.toFixed(2).replace('.', ',')}*`;

  const numero = "5511999999999";
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}