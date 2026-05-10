// ==================== DADOS ====================
// Base de dados simulada
const estudantes = {
    '2024001': { nome: 'João Silva', senha: 'senha123', ra: '2024001', tipo: 'aluno' },
    '2024002': { nome: 'Maria Santos', senha: 'senha123', ra: '2024002', tipo: 'aluno' },
    '2024003': { nome: 'Pedro Costa', senha: 'senha123', ra: '2024003', tipo: 'aluno' },
    '9999999': { nome: 'Administrador', senha: 'admin123', ra: '9999999', tipo: 'admin' }
};

// Cantinas disponíveis
const cantinas = [
    { id: 1, nome: 'Cantina Central', localizacao: 'Bloco A - Térreo', emoji: '🏢', cor: '#FF6B35', descricao: 'Principal e tradicional', horario: '18:30 - 22:00' },
    { id: 2, nome: 'Cantina do Bloco B', localizacao: 'Bloco B - 1º Andar', emoji: '🌟', cor: '#004E89', descricao: 'Moderna e inovadora', horario: '18:30 - 22:00' },
    { id: 3, nome: 'Cantina Gourmet', localizacao: 'Bloco C - Terrço', emoji: '👨‍🍳', cor: '#06A77D', descricao: 'Especializada em pratos gourmet', horario: '18:30 - 22:00' }
];

// Cardápio Cantina Central
const cardapio1 = [
    // Principais
    { id: 1, nome: 'Frango Grelhado', categoria: 'Principais', preco: 18.50, descricao: 'Peito de frango com tempero especial', emoji: '🍗' },
    { id: 2, nome: 'Arroz e Feijão', categoria: 'Principais', preco: 12.00, descricao: 'Arroz branco e feijão cremoso', emoji: '🍚' },
    { id: 3, nome: 'Peixe à Milanesa', categoria: 'Principais', preco: 22.00, descricao: 'Filé de peixe empanado e frito', emoji: '🐟' },
    { id: 4, nome: 'Carne Vermelha', categoria: 'Principais', preco: 25.00, descricao: 'Carne bovina grelhada', emoji: '🥩' },
    { id: 5, nome: 'Batata Frita', categoria: 'Acompanhamentos', preco: 8.00, descricao: 'Batata frita crocante', emoji: '🍟' },
    { id: 6, nome: 'Salada Verde', categoria: 'Acompanhamentos', preco: 10.00, descricao: 'Alface, tomate e cenoura', emoji: '🥗' },
    { id: 7, nome: 'Brócolis', categoria: 'Acompanhamentos', preco: 7.50, descricao: 'Brócolis cozido no vapor', emoji: '🥦' },
    { id: 8, nome: 'Batata Doce', categoria: 'Acompanhamentos', preco: 6.50, descricao: 'Batata doce assada', emoji: '🍠' },
    { id: 9, nome: 'Suco Natural', categoria: 'Bebidas', preco: 6.00, descricao: 'Suco de laranja natural', emoji: '🧃' },
    { id: 10, nome: 'Refrigerante', categoria: 'Bebidas', preco: 5.00, descricao: 'Refrigerante 350ml', emoji: '🥤' },
    { id: 11, nome: 'Água', categoria: 'Bebidas', preco: 2.00, descricao: 'Garrafa de água 500ml', emoji: '💧' },
    { id: 12, nome: 'Café', categoria: 'Bebidas', preco: 3.50, descricao: 'Café coado quente', emoji: '☕' },
    { id: 13, nome: 'Pudim', categoria: 'Sobremesas', preco: 8.00, descricao: 'Pudim de leite condensado', emoji: '🍮' },
    { id: 14, nome: 'Brownie', categoria: 'Sobremesas', preco: 10.00, descricao: 'Brownie de chocolate', emoji: '🍫' },
    { id: 15, nome: 'Sorvete', categoria: 'Sobremesas', preco: 7.00, descricao: 'Sorvete de baunilha', emoji: '🍦' },
    { id: 16, nome: 'Fruta do Dia', categoria: 'Sobremesas', preco: 4.00, descricao: 'Frutas variadas', emoji: '🍎' }
];

// Cardápio Cantina do Bloco B
const cardapio2 = [
    // Principais
    { id: 101, nome: 'Moqueca de Peixe', categoria: 'Principais', preco: 26.50, descricao: 'Peixe em molho de coco', emoji: '🍲' },
    { id: 102, nome: 'Picadinho à Brasileira', categoria: 'Principais', preco: 20.00, descricao: 'Carne moída com cebola e tomate', emoji: '🍽️' },
    { id: 103, nome: 'Lasanha', categoria: 'Principais', preco: 23.00, descricao: 'Lasanha à bolonhesa', emoji: '🍝' },
    { id: 104, nome: 'Frango à Parmegiana', categoria: 'Principais', preco: 24.00, descricao: 'Peito empanado com queijo derretido', emoji: '🧀' },
    { id: 105, nome: 'Purê de Batata', categoria: 'Acompanhamentos', preco: 7.00, descricao: 'Purê cremoso caseiro', emoji: '🥔' },
    { id: 106, nome: 'Arroz Integral', categoria: 'Acompanhamentos', preco: 6.00, descricao: 'Arroz integral saudável', emoji: '🌾' },
    { id: 107, nome: 'Legumes Grelhados', categoria: 'Acompanhamentos', preco: 9.00, descricao: 'Abobrinha, cenoura e berinjela', emoji: '🥒' },
    { id: 108, nome: 'Batata Rústica', categoria: 'Acompanhamentos', preco: 8.50, descricao: 'Batata com casca assada', emoji: '🔥' },
    { id: 109, nome: 'Suco Detox', categoria: 'Bebidas', preco: 7.50, descricao: 'Suco verde com maçã e gengibre', emoji: '🥬' },
    { id: 110, nome: 'Chá Gelado', categoria: 'Bebidas', preco: 4.50, descricao: 'Chá gelado de frutas vermelhas', emoji: '🍓' },
    { id: 111, nome: 'Água com Gás', categoria: 'Bebidas', preco: 2.50, descricao: 'Água mineral com gás', emoji: '🫧' },
    { id: 112, nome: 'Cappuccino', categoria: 'Bebidas', preco: 5.00, descricao: 'Cappuccino quente', emoji: '☕' },
    { id: 113, nome: 'Pavê', categoria: 'Sobremesas', preco: 9.00, descricao: 'Pavê de chocolate', emoji: '🍰' },
    { id: 114, nome: 'Mousse de Morango', categoria: 'Sobremesas', preco: 8.50, descricao: 'Mousse aerado de morango', emoji: '🍓' },
    { id: 115, nome: 'Açaí', categoria: 'Sobremesas', preco: 10.00, descricao: 'Açaí com granola', emoji: '🫐' },
    { id: 116, nome: 'Bolo de Cenoura', categoria: 'Sobremesas', preco: 6.00, descricao: 'Bolo de cenoura caseiro', emoji: '🧁' }
];

// Cardápio Cantina Gourmet
const cardapio3 = [
    // Principais
    { id: 201, nome: 'Salmão ao Molho Manteiga', categoria: 'Principais', preco: 32.00, descricao: 'Salmão com limão siciliano', emoji: '🐟' },
    { id: 202, nome: 'Costela ao Molho Barbecue', categoria: 'Principais', preco: 28.00, descricao: 'Costela suína defumada', emoji: '🍖' },
    { id: 203, nome: 'Camarão ao Alho', categoria: 'Principais', preco: 35.00, descricao: 'Camarão fresco com alho e azeite', emoji: '🦐' },
    { id: 204, nome: 'Filé Mignon Premium', categoria: 'Principais', preco: 38.00, descricao: 'Filé mignon com redução de vinho', emoji: '🥩' },
    { id: 205, nome: 'Risoto de Cogumelo', categoria: 'Acompanhamentos', preco: 14.00, descricao: 'Risoto cremoso com cogumelos nobres', emoji: '🍄' },
    { id: 206, nome: 'Espinafre à Mineira', categoria: 'Acompanhamentos', preco: 10.00, descricao: 'Espinafre cozido com alho', emoji: '🌱' },
    { id: 207, nome: 'Batata Trufada', categoria: 'Acompanhamentos', preco: 12.00, descricao: 'Batata com óleo de trufa', emoji: '🧈' },
    { id: 208, nome: 'Legumes Crocantes', categoria: 'Acompanhamentos', preco: 11.00, descricao: 'Mix de legumes grelhados', emoji: '🥕' },
    { id: 209, nome: 'Vinho da Casa', categoria: 'Bebidas', preco: 18.00, descricao: 'Vinho tinto reserva (200ml)', emoji: '🍷' },
    { id: 210, nome: 'Agua com Gengibre', categoria: 'Bebidas', preco: 5.00, descricao: 'Água com gengibre e limão', emoji: '💧' },
    { id: 211, nome: 'Suco Prensado', categoria: 'Bebidas', preco: 8.00, descricao: 'Suco prensado à frio', emoji: '🧃' },
    { id: 212, nome: 'Espresso Duplo', categoria: 'Bebidas', preco: 6.00, descricao: 'Café espresso duplo', emoji: '☕' },
    { id: 213, nome: 'Soufflé de Chocolate', categoria: 'Sobremesas', preco: 14.00, descricao: 'Soufflé quente com calda', emoji: '🍫' },
    { id: 214, nome: 'Tarte de Frutas Vermelhas', categoria: 'Sobremesas', preco: 12.00, descricao: 'Tarte com frutas frescas', emoji: '🫐' },
    { id: 215, nome: 'Panna Cotta', categoria: 'Sobremesas', preco: 11.00, descricao: 'Panna cotta com calda de framboesa', emoji: '🍮' },
    { id: 216, nome: 'Macaron', categoria: 'Sobremesas', preco: 7.00, descricao: 'Macaron sabor sortido', emoji: '🍪' }
];

// Armazenar os cardápios
const cardapios = {
    1: cardapio1,
    2: cardapio2,
    3: cardapio3
};

// Variável para armazenar a cantina selecionada
let cantinaSelecionada = null;

// Cardápio padrão (será substituído baseado na cantina)
const cardapio = [
    // Principais
    { id: 1, nome: 'Frango Grelhado', categoria: 'Principais', preco: 18.50, descricao: 'Peito de frango com tempero especial', emoji: '🍗' },
    { id: 2, nome: 'Arroz e Feijão', categoria: 'Principais', preco: 12.00, descricao: 'Arroz branco e feijão cremoso', emoji: '🍚' },
    { id: 3, nome: 'Peixe à Milanesa', categoria: 'Principais', preco: 22.00, descricao: 'Filé de peixe empanado e frito', emoji: '🐟' },
    { id: 4, nome: 'Carne Vermelha', categoria: 'Principais', preco: 25.00, descricao: 'Carne bovina grelhada', emoji: '🥩' },
    
    // Acompanhamentos
    { id: 5, nome: 'Batata Frita', categoria: 'Acompanhamentos', preco: 8.00, descricao: 'Batata frita crocante', emoji: '🍟' },
    { id: 6, nome: 'Salada Verde', categoria: 'Acompanhamentos', preco: 10.00, descricao: 'Alface, tomate e cenoura', emoji: '🥗' },
    { id: 7, nome: 'Brócolis', categoria: 'Acompanhamentos', preco: 7.50, descricao: 'Brócolis cozido no vapor', emoji: '🥦' },
    { id: 8, nome: 'Batata Doce', categoria: 'Acompanhamentos', preco: 6.50, descricao: 'Batata doce assada', emoji: '🍠' },
    
    // Bebidas
    { id: 9, nome: 'Suco Natural', categoria: 'Bebidas', preco: 6.00, descricao: 'Suco de laranja natural', emoji: '🧃' },
    { id: 10, nome: 'Refrigerante', categoria: 'Bebidas', preco: 5.00, descricao: 'Refrigerante 350ml', emoji: '🥤' },
    { id: 11, nome: 'Água', categoria: 'Bebidas', preco: 2.00, descricao: 'Garrafa de água 500ml', emoji: '💧' },
    { id: 12, nome: 'Café', categoria: 'Bebidas', preco: 3.50, descricao: 'Café coado quente', emoji: '☕' },
    
    // Sobremesas
    { id: 13, nome: 'Pudim', categoria: 'Sobremesas', preco: 8.00, descricao: 'Pudim de leite condensado', emoji: '🍮' },
    { id: 14, nome: 'Brownie', categoria: 'Sobremesas', preco: 10.00, descricao: 'Brownie de chocolate', emoji: '🍫' },
    { id: 15, nome: 'Sorvete', categoria: 'Sobremesas', preco: 7.00, descricao: 'Sorvete de baunilha', emoji: '🍦' },
    { id: 16, nome: 'Fruta do Dia', categoria: 'Sobremesas', preco: 4.00, descricao: 'Frutas variadas', emoji: '🍎' }
];

// Simulação de dados armazenados (em produção seria um banco de dados real)
let pedidos = [];
let carrinho = [];
let usuarioLogado = null;

// ==================== AUTENTICAÇÃO ====================

function fazerLogin(event) {
    event.preventDefault();
    
    const ra = document.getElementById('ra').value;
    const senha = document.getElementById('senha').value;
    const errorDiv = document.getElementById('loginError');
    
    // Limpar mensagem de erro anterior
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    
    // Validar credenciais
    if (estudantes[ra] && estudantes[ra].senha === senha) {
        // Login bem-sucedido
        usuarioLogado = estudantes[ra];
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        localStorage.setItem('timestamp', new Date().getTime());
        
        // Redirecionar para seleção de cantina
        window.location.href = 'cantinas.html';
    } else {
        // Erro de login
        errorDiv.style.display = 'block';
        errorDiv.textContent = '❌ RA ou senha incorretos. Verifique seus dados!';
        document.getElementById('ra').value = '';
        document.getElementById('senha').value = '';
    }
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('timestamp');
    usuarioLogado = null;
    window.location.href = 'index.html';
}

function verificarAutenticacao() {
    const usuarioArmazenado = localStorage.getItem('usuarioLogado');
    
    if (!usuarioArmazenado) {
        window.location.href = 'index.html';
        return false;
    }
    
    usuarioLogado = JSON.parse(usuarioArmazenado);
    
    // Exibir nome do usuário
    const nomeElemento = document.getElementById('nomeAluno');
    if (nomeElemento) {
        nomeElemento.textContent = `👤 ${usuarioLogado.nome}`;
    }
    
    aplicarPermissoes();
    
    if (window.location.pathname.endsWith('relatorio.html') && usuarioLogado.tipo !== 'admin') {
        window.location.href = 'cardapio.html';
        return false;
    }
    
    return true;
}

// ==================== AUTORIZAÇÃO ====================

function aplicarPermissoes() {
    const relatorioNav = document.querySelector('a[href="relatorio.html"]');
    if (relatorioNav) {
        relatorioNav.style.display = usuarioLogado && usuarioLogado.tipo === 'admin' ? 'flex' : 'none';
    }
}

// ==================== CANTINAS ====================

function carregarCantinas() {
    const container = document.getElementById('cantinasContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    cantinas.forEach(cantina => {
        const card = document.createElement('div');
        card.className = 'card-cantina';
        card.style.borderTopColor = cantina.cor;
        card.onclick = () => selecionarCantina(cantina.id);
        
        card.innerHTML = `
            <div class="cantina-emoji">${cantina.emoji}</div>
            <h3>${cantina.nome}</h3>
            <p class="cantina-descricao">${cantina.descricao}</p>
            <div class="cantina-localizacao">
                <span>📍 ${cantina.localizacao}</span>
            </div>
            <button class="btn btn-primary btn-full">Selecionar</button>
        `;
        
        container.appendChild(card);
    });
}

function selecionarCantina(cantinaId) {
    cantinaSelecionada = cantinaId;
    localStorage.setItem('cantinaSelecionada', cantinaId);
    window.location.href = 'cardapio.html';
}

function trocarCantina() {
    carrinho = [];
    localStorage.removeItem('cantinaSelecionada');
    window.location.href = 'cantinas.html';
}

// ==================== CARDÁPIO ====================

function carregarCardapio() {
    const categoria = document.getElementById('filtroCategoria')?.value || '';
    const container = document.getElementById('cardapioContainer');
    
    if (!container) return;
    
    // Recuperar a cantina selecionada
    const cantinaId = localStorage.getItem('cantinaSelecionada');
    if (!cantinaId) {
        window.location.href = 'cantinas.html';
        return;
    }
    
    cantinaSelecionada = parseInt(cantinaId);
    
    // Atualizar horário de retirada
    const cantina = cantinas.find(c => c.id === cantinaSelecionada);
    if (cantina && cantina.horario) {
        const horarioElement = document.getElementById('horarioRetirada');
        if (horarioElement) {
            horarioElement.textContent = `⏰ Horário de retirada: ${cantina.horario}`;
        }
    } else {
        // Horário padrão se não encontrar cantina
        const horarioElement = document.getElementById('horarioRetirada');
        if (horarioElement) {
            horarioElement.textContent = `⏰ Horário de retirada: 18:30 - 22:00`;
        }
    }
    
    // Obter o cardápio correto da cantina
    const cardapioAtual = cardapios[cantinaSelecionada] || cardapio1;
    
    // Atualizar título com nome da cantina
    const cantinaNome = cantinas.find(c => c.id === cantinaSelecionada)?.nome || 'Cantina';
    const titleElement = document.querySelector('.section-header h2');
    if (titleElement) {
        titleElement.textContent = `Cardápio - ${cantinaNome}`;
    }
    
    container.innerHTML = '';
    atualizarBadgeCarrinho(); // Inicializar badge
    
    let itens = cardapioAtual;
    if (categoria) {
        itens = cardapioAtual.filter(item => item.categoria === categoria);
    }
    
    itens.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-comida';
        card.innerHTML = `
            <div class="card-imagem">${item.emoji}</div>
            <div class="card-info">
                <div class="card-categoria">${item.categoria}</div>
                <div class="card-nome">${item.nome}</div>
                <div class="card-descricao">${item.descricao}</div>
                <div class="card-footer">
                    <span class="card-preco">R$ ${item.preco.toFixed(2)}</span>
                    <button class="btn btn-primary btn-pequeno" onclick="adicionarAoCarrinho(${item.id}, ${cantinaSelecionada})">
                        Adicionar
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    atualizarStatusCantina();
}

function obterItemCardapio(id, cantinaId = null) {
    const cId = cantinaId || cantinaSelecionada || 1;
    const cardapioAtual = cardapios[cId] || cardapio1;
    return cardapioAtual.find(item => item.id === id);
}

// ==================== CARRINHO ====================

function adicionarAoCarrinho(itemId) {
    const item = obterItemCardapio(itemId);
    if (!item) return;
    
    const itemNoCarrinho = carrinho.find(c => c.id === itemId);
    
    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade++;
    } else {
        carrinho.push({
            ...item,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    atualizarBadgeCarrinho();
}

function removerDoCarrinho(itemId) {
    carrinho = carrinho.filter(item => item.id !== itemId);
    atualizarCarrinho();
    atualizarBadgeCarrinho();
}

function alterarQuantidade(itemId, quantidade) {
    const item = carrinho.find(c => c.id === itemId);
    if (item) {
        item.quantidade = Math.max(1, quantidade);
        atualizarCarrinho();
        atualizarBadgeCarrinho();
    }
}

function atualizarCarrinho() {
    const container = document.getElementById('carrinhoItems');
    const totalElement = document.getElementById('totalCarrinho');
    
    if (!container) return;
    
    if (carrinho.length === 0) {
        container.innerHTML = '<p class="vazio">Nenhum item selecionado</p>';
        totalElement.textContent = 'R$ 0,00';
        return;
    }
    
    container.innerHTML = '';
    let total = 0;
    
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrinho';
        itemDiv.innerHTML = `
            <div class="item-carrinho-nome">${item.nome}</div>
            <div class="item-carrinho-preco">R$ ${item.preco.toFixed(2)}</div>
            <div class="item-carrinho-qty">
                <button class="qty-btn" onclick="alterarQuantidade(${item.id}, ${item.quantidade - 1})">−</button>
                <span>${item.quantidade}</span>
                <button class="qty-btn" onclick="alterarQuantidade(${item.id}, ${item.quantidade + 1})">+</button>
            </div>
            <button class="item-remove" onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        container.appendChild(itemDiv);
    });
    
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

function fecharCarrinho() {
    // Função placeholder
    console.log('Carrinho fechado');
}

function configurarDataMinima() {
    const input = document.getElementById('dataRetirada');
    if (!input) return;
    
    const hoje = new Date();
    hoje.setDate(hoje.getDate() + 1); // Mínimo amanhã
    
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    
    input.min = `${ano}-${mes}-${dia}`;
    input.value = `${ano}-${mes}-${dia}`;
}

function formatarData(data) {
    if (typeof data === 'string') {
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    }
    return data.toLocaleDateString('pt-BR');
}

// ==================== PEDIDOS ====================

function confirmarPedido(event) {
    event.preventDefault();
    
    if (carrinho.length === 0) {
        alert('❌ Adicione itens ao carrinho!');
        return;
    }
    
    const dataRetirada = document.getElementById('dataRetirada').value;
    const observacoes = document.getElementById('observacoes').value;
    
    let total = 0;
    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
    });
    
    const pedido = {
        id: '#PED' + String(pedidos.length + 1).padStart(5, '0'),
        ra: usuarioLogado.ra,
        aluno: usuarioLogado.nome,
        itens: [...carrinho],
        total: total,
        dataRetirada: dataRetirada,
        observacoes: observacoes,
        status: 'Confirmado',
        dataPedido: new Date().toLocaleDateString('pt-BR'),
        horaPedido: new Date().toLocaleTimeString('pt-BR')
    };
    
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    // Limpar carrinho e formulário
    carrinho = [];
    document.getElementById('formPedido').reset();
    configurarDataMinima();
    atualizarCarrinho();
    atualizarBadgeCarrinho();
    
    // Mostrar confirmação
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 style="color: var(--success-color); text-align: center;">✅ Pedido Confirmado!</h2>
        <p style="text-align: center; margin: 15px 0;">
            <strong>Número do Pedido: ${pedido.id}</strong>
        </p>
        <div style="background-color: #E8F8F5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Data de Retirada:</strong> ${formatarData(dataRetirada)}</p>
            <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
        </div>
        <p style="text-align: center; font-size: 0.95em;">
            Seu pedido foi confirmado e está em preparação!<br>
            Retire no horário indicado junto à cantina.
        </p>
        <button class="btn btn-primary btn-full" onclick="fecharModal()">Entendi</button>
    `;
    
    modal.style.display = 'block';
}

function carregarHistorico() {
    const status = document.getElementById('filtroStatus')?.value || '';
    const container = document.getElementById('historicoPedidos');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    // Carregar pedidos do localStorage
    const pedidosArmazenados = JSON.parse(localStorage.getItem('pedidos') || '[]');
    
    // Filtrar apenas pedidos do usuário logado
    let meusPedidos = pedidosArmazenados.filter(p => p.ra === usuarioLogado.ra);
    
    if (status) {
        meusPedidos = meusPedidos.filter(p => p.status === status);
    }
    
    if (meusPedidos.length === 0) {
        container.innerHTML = '<div class="vazio">Nenhum pedido encontrado</div>';
        return;
    }
    
    meusPedidos.reverse().forEach(pedido => {
        const card = document.createElement('div');
        card.className = 'card-pedido';
        
        let statusClass = 'status-confirmado';
        if (pedido.status === 'Retirado') statusClass = 'status-retirado';
        if (pedido.status === 'Cancelado') statusClass = 'status-cancelado';
        
        let itensHtml = '';
        pedido.itens.forEach(item => {
            itensHtml += `<div class="pedido-item-line"><span>${item.nome} (${item.quantidade}x)</span><span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span></div>`;
        });
        
        card.innerHTML = `
            <div class="pedido-header">
                <div class="pedido-numero">${pedido.id}</div>
                <span class="status-badge ${statusClass}">${pedido.status}</span>
            </div>
            
            <div class="pedido-info">
                <div class="info-item">
                    <div class="info-label">Data do Pedido</div>
                    <div class="info-valor">${pedido.dataPedido}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Hora</div>
                    <div class="info-valor">${pedido.horaPedido}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Retirada</div>
                    <div class="info-valor">${formatarData(pedido.dataRetirada)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Total</div>
                    <div class="info-valor">R$ ${pedido.total.toFixed(2)}</div>
                </div>
            </div>
            
            <div class="pedido-itens">
                <h4>Itens do Pedido:</h4>
                ${itensHtml}
            </div>
            
            ${pedido.observacoes ? `<div class="pedido-itens"><strong>Observações:</strong> ${pedido.observacoes}</div>` : ''}
            
            <div class="pedido-acoes">
                ${pedido.status !== 'Retirado' ? `<button class="btn btn-success btn-pequeno" onclick="marcarComoRetirado('${pedido.id}')">Marcar como Retirado</button>` : ''}
                ${pedido.status === 'Confirmado' ? `<button class="btn btn-danger btn-pequeno" onclick="cancelarPedido('${pedido.id}')">Cancelar</button>` : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
}

function marcarComoRetirado(numeroPedido) {
    const pedidosArmazenados = JSON.parse(localStorage.getItem('pedidos') || '[]');
    const pedido = pedidosArmazenados.find(p => p.id === numeroPedido);
    
    if (pedido) {
        pedido.status = 'Retirado';
        localStorage.setItem('pedidos', JSON.stringify(pedidosArmazenados));
        carregarHistorico();
        alert('✅ Pedido marcado como retirado!');
    }
}

function cancelarPedido(numeroPedido) {
    if (confirm('Tem certeza que deseja cancelar este pedido?')) {
        const pedidosArmazenados = JSON.parse(localStorage.getItem('pedidos') || '[]');
        const pedido = pedidosArmazenados.find(p => p.id === numeroPedido);
        
        if (pedido) {
            pedido.status = 'Cancelado';
            localStorage.setItem('pedidos', JSON.stringify(pedidosArmazenados));
            carregarHistorico();
            alert('❌ Pedido cancelado');
        }
    }
}

// ==================== RELATÓRIO ====================

function carregarRelatorio() {
    const pedidosArmazenados = JSON.parse(localStorage.getItem('pedidos') || '[]');
    
    // Calcular estatísticas
    const totalPedidos = pedidosArmazenados.length;
    const pedidosRetirados = pedidosArmazenados.filter(p => p.status === 'Retirado').length;
    const pedidosCancelados = pedidosArmazenados.filter(p => p.status === 'Cancelado').length;
    const taxaDesperdicio = totalPedidos > 0 ? ((pedidosCancelados / totalPedidos) * 100).toFixed(1) : 0;
    
    let valorTotal = 0;
    let valorDesperdicio = 0;
    
    pedidosArmazenados.forEach(p => {
        valorTotal += p.total;
        if (p.status === 'Cancelado') {
            valorDesperdicio += p.total;
        }
    });
    
    // Atualizar elementos
    document.getElementById('totalPedidos').textContent = totalPedidos;
    document.getElementById('pedidosRetirados').textContent = pedidosRetirados;
    document.getElementById('pedidosCancelados').textContent = pedidosCancelados;
    document.getElementById('taxaDesperdicio').textContent = `${taxaDesperdicio}%`;
    document.getElementById('valorDesperdicio').textContent = `R$ ${valorDesperdicio.toFixed(2)}`;
    document.getElementById('valorTotal').textContent = `R$ ${valorTotal.toFixed(2)}`;
    document.getElementById('economiaTotal').textContent = `R$ ${valorDesperdicio.toFixed(2)}`;
    
    // Itens mais desperdiçados
    const itemesDesperdiçados = {};
    pedidosArmazenados
        .filter(p => p.status === 'Cancelado')
        .forEach(p => {
            p.itens.forEach(item => {
                if (!itemesDesperdiçados[item.nome]) {
                    itemesDesperdiçados[item.nome] = 0;
                }
                itemesDesperdiçados[item.nome]++;
            });
        });
    
    const containerItens = document.getElementById('itemesDesperdiçados');
    if (Object.keys(itemesDesperdiçados).length > 0) {
        containerItens.innerHTML = '';
        Object.entries(itemesDesperdiçados)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .forEach(([item, quantidade]) => {
                const div = document.createElement('div');
                div.className = 'lista-item';
                div.innerHTML = `<span>${item}</span> <span>${quantidade}x</span>`;
                containerItens.appendChild(div);
            });
    }
    
    // Gráfico
    criarGraficoDisperdicio(pedidosArmazenados);
}

function criarGraficoDisperdicio(pedidos) {
    const canvas = document.getElementById('graficoDisperdicio');
    if (!canvas) return;
    
    // Contar pedidos por dia dos últimos 7 dias
    const ultimos7Dias = {};
    const hoje = new Date();
    
    for (let i = 6; i >= 0; i--) {
        const data = new Date(hoje);
        data.setDate(data.getDate() - i);
        const chave = data.toLocaleDateString('pt-BR');
        ultimos7Dias[chave] = { confirmado: 0, cancelado: 0 };
    }
    
    pedidos.forEach(p => {
        if (ultimos7Dias[p.dataPedido]) {
            if (p.status === 'Cancelado') {
                ultimos7Dias[p.dataPedido].cancelado++;
            } else {
                ultimos7Dias[p.dataPedido].confirmado++;
            }
        }
    });
    
    const labels = Object.keys(ultimos7Dias);
    const dataConfirmado = labels.map(d => ultimos7Dias[d].confirmado);
    const dataCancelado = labels.map(d => ultimos7Dias[d].cancelado);
    
    // Destruir gráfico anterior se existir
    if (window.graficoInstance) {
        window.graficoInstance.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    window.graficoInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Pedidos Confirmados',
                    data: dataConfirmado,
                    backgroundColor: '#06A77D',
                    borderRadius: 5
                },
                {
                    label: 'Pedidos Cancelados',
                    data: dataCancelado,
                    backgroundColor: '#D62828',
                    borderRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// ==================== UTILIDADES ====================

function atualizarBadgeCarrinho() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    badge.textContent = totalItens;
    
    // Animar o badge
    badge.style.animation = 'none';
    setTimeout(() => {
        badge.style.animation = 'badgePop 0.3s ease';
    }, 10);
}

function scrollParaCarrinho() {
    const carrinho = document.querySelector('.carrinho-sidebar');
    if (carrinho) {
        carrinho.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}

// Fechar menu ao clicar em um link
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navMenu?.classList.contains('active') && 
        !event.target.closest('.menu-hamburger') && 
        !event.target.closest('.nav-menu')) {
        menuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

function atualizarStatusCantina() {
    const statusElement = document.getElementById('statusCantina');
    if (!statusElement) return;
    
    const hora = new Date().getHours();
    const minutosAtuais = new Date().getMinutes();
    const tempoAtual = hora + minutosAtuais / 60;
    
    // Cantina aberta de 18:30 às 22:00 (18.5 a 22.0)
    if (tempoAtual >= 18.5 && tempoAtual < 22) {
        statusElement.innerHTML = '✅ Aberta';
        statusElement.className = 'badge success';
    } else {
        statusElement.innerHTML = '❌ Fechada';
        statusElement.className = 'badge closed';
    }
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', fazerLogin);
    }
    
    // Pedido form
    const formPedido = document.getElementById('formPedido');
    if (formPedido) {
        formPedido.addEventListener('submit', confirmarPedido);
    }
});

// Carregar dados ao abrir página (debug)
console.log('CantinApp carregado com sucesso! 🍽️');
