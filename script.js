// ==================== DADOS ====================
// Base de dados simulada
const estudantes = {
    '2024001': { nome: 'João Silva', senha: 'senha123', ra: '2024001', tipo: 'aluno' },
    '2024002': { nome: 'Maria Santos', senha: 'senha123', ra: '2024002', tipo: 'aluno' },
    '2024003': { nome: 'Pedro Costa', senha: 'senha123', ra: '2024003', tipo: 'aluno' },
    '9999999': { nome: 'Administrador', senha: 'admin123', ra: '9999999', tipo: 'admin' }
};

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
        
        // Redirecionar para cardápio
        window.location.href = 'cardapio.html';
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

// ==================== CARDÁPIO ====================

function carregarCardapio() {
    const categoria = document.getElementById('filtroCategoria')?.value || '';
    const container = document.getElementById('cardapioContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    atualizarBadgeCarrinho(); // Inicializar badge
    
    let itens = cardapio;
    if (categoria) {
        itens = cardapio.filter(item => item.categoria === categoria);
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
                    <button class="btn btn-primary btn-pequeno" onclick="adicionarAoCarrinho(${item.id})">
                        Adicionar
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    atualizarStatusCantina();
}

function obterItemCardapio(id) {
    return cardapio.find(item => item.id === id);
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
    
    // Cantina aberta de 11:00 às 13:00 (11.0 a 13.0)
    if (tempoAtual >= 11 && tempoAtual < 13) {
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
