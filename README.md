# 🍽️ CantinApp - Sistema de Pedidos da Cantina

Sistema web completo para gerenciamento de pedidos da cantina da faculdade. Desenvolvido com HTML, CSS e JavaScript puro (sem dependências externas, apenas Chart.js para gráficos).

## 📋 Funcionalidades

✅ **Autenticação de Alunos**
- Login com RA (Registro do Aluno) e senha
- Segurança com armazenamento em localStorage
- Dados de teste inclusos

✅ **Cardápio da Cantina**
- Visualização de todos os itens disponíveis
- Categorias: Principais, Acompanhamentos, Bebidas, Sobremesas
- Filtro por categoria
- Informações de preço, descrição e emoji ilustrativo

✅ **Carrinho de Compras**
- Adicionar/remover itens
- Controlar quantidade de cada item
- Cálculo automático do total

✅ **Confirmação de Pedidos**
- Selecionar data de retirada
- Adicionar observações/restrições
- Confirmação visual do pedido
- Geração de número único para rastreamento

✅ **Histórico de Pedidos**
- Visualizar todos os pedidos anteriores
- Filtrar por status (Confirmado, Retirado, Cancelado)
- Detalhes completos de cada pedido
- Marcar pedido como retirado
- Cancelar pedidos não retirados

✅ **Relatório de Desperdício**
- Estatísticas gerais de pedidos
- Itens mais desperdiçados
- Impacto financeiro do desperdício
- Gráfico de tendências (últimos 7 dias)
- Taxa de desperdício e economia potencial
- Recomendações automáticas

## 🚀 Como Usar

### 1. Abrir o Projeto
- Abra o arquivo `index.html` em um navegador web
- Ou use um servidor local (recomendado):
  - Com Python: `python -m http.server 8000`
  - Com Node.js: `npx http-server`

### 2. Dados de Teste

Use estas credenciais para fazer login:

| RA      | Senha      |
|---------|-----------|
| 2024001 | senha123  |
| 2024002 | senha123  |
| 2024003 | senha123  |

### 3. Navegação

Após login, use o menu superior para navegar entre:
- 🍕 **Cardápio**: Fazer pedidos
- 📋 **Histórico**: Ver pedidos anteriores
- 📊 **Relatório**: Visualizar estatísticas

## 📁 Estrutura do Projeto

```
projetofaculdade/
├── index.html          # Página de login
├── cardapio.html       # Cardápio e carrinho de compras
├── historico.html      # Histórico de pedidos
├── relatorio.html      # Relatório de desperdício
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este arquivo
```

## 🎨 Design

- **Cores**: Laranja (#FF6B35) como cor primária, azul escuro (#004E89) como secundária
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Ícones**: Emojis para melhor visualização
- **UI Intuitiva**: Navegação clara e fácil

## 💾 Armazenamento de Dados

Todos os dados são armazenados no **localStorage** do navegador:
- Usuário logado: `usuarioLogado`
- Pedidos: `pedidos`
- Carrinho: Mantido em memória durante a sessão

> **Nota**: Dados são perdidos ao limpar o cache do navegador. Em produção, usar um banco de dados real (MySQL, MongoDB, etc.)

## 🔒 Segurança

⚠️ **Este é um projeto educacional!** Para produção:
- Implementar autenticação real com backend
- Usar HTTPS
- Validar dados no servidor
- Hash de senhas com bcrypt
- Proteção contra CSRF/XSS

## 🎯 Horário de Funcionamento

A cantina está aberta de **18:30 às 22:00** (verificado automaticamente no sistema).

## 📊 Relatório de Desperdício

O sistema calcula automaticamente:
- **Taxa de Desperdício**: Percentual de pedidos cancelados
- **Valor Desperdiçado**: Soma dos pedidos não retirados
- **Economia Potencial**: Economia se todos os pedidos fossem confirmados
- **Itens Mais Desperdiçados**: Ranking dos itens cancelados

## 🔧 Personalização

### Adicionar Novos Itens ao Cardápio
Edite a array `cardapio` em `script.js`:

```javascript
{ 
    id: 17, 
    nome: 'Nome do Item', 
    categoria: 'Categoria', 
    preco: 19.99, 
    descricao: 'Descrição do item', 
    emoji: '🍕' 
}
```

### Adicionar Novos Alunos
Edite o objeto `estudantes` em `script.js`:

```javascript
'2024004': { nome: 'Nome do Aluno', senha: 'senha123', ra: '2024004' }
```

## 🐛 Troubleshooting

**Problema**: Login não funciona
- Verifique se o RA e senha estão corretos
- Limpe o cache do navegador

**Problema**: Gráfico não aparece
- Verifique se Chart.js foi carregado
- Abra o console (F12) para ver erros

**Problema**: Dados desaparecem
- localStorage foi limpo?
- Tente fazer um novo pedido para resetar os dados

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato com o desenvolvedor.

## 📄 Licença

Projeto educacional para fins acadêmicos.

---

**CantinApp v1.0** 🍽️ | Desenvolvido com ❤️ para a cantina da faculdade
