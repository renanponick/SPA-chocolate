# 🍫 Doce Encanto - Loja de Doces Gourmet

Uma Single Page Application (SPA) completa e moderna para uma loja de brigadeiros gourmet e doces artesanais, com foco em conversão, experiência do usuário e SEO.

## ✨ Características

### 🎨 Design Premium
- Tema claro/escuro persistente com cores personalizadas
- Animações suaves com Framer Motion
- Interface responsiva e mobile-first
- Tipografia profissional (Poppins + Inter)

### 🛒 Funcionalidades de E-commerce
- Carrinho de compras completo com persistência (localStorage)
- Sistema de cupons de desconto (DOCE10, BEMVINDO, PRIMEIRACOMPRA)
- Finalização de pedido via WhatsApp com resumo automático
- Filtros de produtos por categoria
- Sistema de favoritos

### 👤 Autenticação
- Login simulado com persistência
- Gerenciamento de favoritos
- Cupons exclusivos para usuários logados

### 📱 Seções do Site
- **Hero**: Banner impactante com CTAs
- **Produtos**: Grid de produtos com filtros
- **Presentes**: Caixas e kits personalizados
- **Eventos**: Doces para casamentos, festas e eventos corporativos
- **Depoimentos**: Avaliações de clientes
- **Sobre**: História e valores da marca
- **Contato**: Formulário e mapa integrado
- **Footer**: Links rápidos e redes sociais

### 🔧 Tecnologias
- **React 19** + **Vite**
- **TypeScript** (estrutura JSX)
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Context API** + **Reducer** para estado global
- **Lucide React** para ícones
- **localStorage** para persistência

### 🌐 SEO Completo
- Meta tags otimizadas
- Open Graph e Twitter Cards
- JSON-LD para LocalBusiness
- Sitemap.xml e robots.txt
- Estrutura semântica HTML5

## 🚀 Como Executar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Products.jsx
│   ├── ProductCard.jsx
│   ├── GiftsEvents.jsx
│   ├── Testimonials.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── WhatsAppButton.jsx
├── context/             # Contextos globais
│   ├── CartContext.jsx
│   ├── ThemeContext.jsx
│   └── AuthContext.jsx
├── hooks/               # Hooks customizados
│   ├── useCart.js
│   ├── useTheme.js
│   └── useAuth.js
├── data/                # Dados JSON
│   ├── products.json
│   ├── testimonials.json
│   └── categories.json
├── utils/               # Funções utilitárias
│   ├── formatPrice.js
│   ├── generateWhatsAppMessage.js
│   └── scrollToSection.js
├── App.css              # Estilos globais e tema
├── App.jsx              # Componente principal
└── main.jsx             # Ponto de entrada
```

## 🎨 Paleta de Cores

### Light Mode
- Background: `#F5E0C3` (Bege caramelo)
- Primary: `#5C3A21` (Marrom chocolate)
- Secondary: `#F9C6C9` (Rosa suave)
- Card: `#FFFFFF` (Branco puro)

### Dark Mode
- Background: `#3B1E14` (Marrom escuro)
- Primary: `#E6B655` (Dourado claro)
- Secondary: `#D38C8C` (Rosa queimado)
- Card: `#4A2818` (Marrom médio)

## 💳 Cupons de Desconto

- **DOCE10**: 10% de desconto
- **BEMVINDO**: R$ 5,00 de desconto
- **PRIMEIRACOMPRA**: 15% de desconto

## 📞 Integração WhatsApp

O número configurado é: `5511999999999`

Para alterar, edite os arquivos:
- `src/components/Hero.jsx`
- `src/components/Cart.jsx`
- `src/components/GiftsEvents.jsx`
- `src/components/WhatsAppButton.jsx`

## 🔐 Login Demo

Use qualquer e-mail e senha para fazer login no sistema de demonstração.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Próximos Passos

Para colocar em produção:

1. Substituir imagens do Unsplash por fotos reais dos produtos
2. Configurar backend real para autenticação
3. Integrar API de pagamento (Stripe, PagSeguro, etc.)
4. Configurar analytics (Google Analytics, Meta Pixel)
5. Implementar sistema de pedidos com banco de dados
6. Adicionar painel administrativo
7. Configurar CDN para assets
8. Implementar PWA (Progressive Web App)

## 📄 Licença

Este projeto foi desenvolvido como demonstração. Todos os direitos reservados.

---

**Desenvolvido com ❤️ e muito açúcar!** 🍫

