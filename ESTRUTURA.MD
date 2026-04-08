# Estrutura do Site — Nós Existimos

Documento de arquitetura de interface, navegação e componentes do site dedicado ao combate à discriminação de autistas no mercado de trabalho.

---

## 1. Mapa do Site

```
Nós Existimos
│
├── / (Página Inicial)
│
├── /sobre
│   ├── /sobre/missao
│   ├── /sobre/equipe
│   └── /sobre/parceiros
│
├── /informacao
│   ├── /informacao/o-que-e-autismo
│   ├── /informacao/mitos-e-verdades
│   ├── /informacao/direitos-trabalhistas
│   └── /informacao/legislacao
│
├── /inclusao
│   ├── /inclusao/para-empresas
│   ├── /inclusao/para-autistas
│   ├── /inclusao/casos-de-sucesso
│   └── /inclusao/vagas-inclusivas
│
├── /recursos
│   ├── /recursos/grupos-de-ajuda
│   ├── /recursos/linhas-de-apoio
│   ├── /recursos/materiais-educativos
│   └── /recursos/perguntas-frequentes
│
├── /depoimentos
│
├── /blog
│   └── /blog/[slug]
│
└── /acessibilidade (Declaração de Acessibilidade)
```

---

## 2. Estrutura de Navegação

### 2.1 Barra de Navegação Principal (Header)

A navbar é **sticky** (fixa no topo ao rolar) e segue o padrão descrito no STYLE.MD.

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [Pular para conteúdo]  (visível apenas com foco via teclado)            │
├──────────────────────────────────────────────────────────────────────────┤
│ ∞ Nós Existimos    Início  Informação▾  Inclusão▾  Recursos▾  Blog     │
│                                                        [☀/🌙]  [A+ A-] │
└──────────────────────────────────────────────────────────────────────────┘
```

**Elementos da navbar:**

| Elemento | Tipo | Descrição |
|----------|------|-----------|
| Logo (∞ + texto) | Link para `/` | Símbolo do infinito dourado + "Nós Existimos" |
| Início | Link direto | Vai para `/` |
| Informação | Dropdown | Submenus: O que é Autismo, Mitos e Verdades, Direitos, Legislação |
| Inclusão | Dropdown | Submenus: Para Empresas, Para Autistas, Casos de Sucesso, Vagas |
| Recursos | Dropdown | Submenus: Grupos de Ajuda, Linhas de Apoio, Materiais, FAQ |
| Blog | Link direto | Vai para `/blog` |
| Tema | Toggle | Alterna entre modo claro e escuro |
| Tamanho da fonte | Controle A+/A- | Aumenta ou diminui o tamanho base da fonte |

**Comportamentos:**

- **Desktop (≥992px):** Navbar horizontal completa com dropdowns ao hover/click.
- **Tablet e Mobile (<992px):** Navbar com logo + botão hambúrguer. Menu lateral (drawer) desliza pela esquerda.
- **Dropdowns:** Usam `@radix-ui/react-navigation-menu` para garantir acessibilidade com teclado e leitores de tela.
- **Link ativo:** Indicado por borda inferior dourada + fundo sutil (`navbar-link--ativo`).
- **"Pular para conteúdo":** Primeiro elemento focável, visível apenas via Tab. Âncora para `<main id="conteudo-principal">`.

### 2.2 Menu Mobile (Drawer)

```
┌─────────────────────────┐
│ ✕ Fechar                │
├─────────────────────────┤
│ Início                  │
│                         │
│ ▸ Informação            │
│   ├ O que é Autismo     │
│   ├ Mitos e Verdades    │
│   ├ Direitos            │
│   └ Legislação          │
│                         │
│ ▸ Inclusão              │
│   ├ Para Empresas       │
│   ├ Para Autistas       │
│   ├ Casos de Sucesso    │
│   └ Vagas Inclusivas    │
│                         │
│ ▸ Recursos              │
│   ├ Grupos de Ajuda     │
│   ├ Linhas de Apoio     │
│   ├ Materiais           │
│   └ FAQ                 │
│                         │
│ Blog                    │
│                         │
│ ☀ Tema  │  A+ A-        │
└─────────────────────────┘
```

**Comportamentos:**
- Abre com `@radix-ui/react-dialog` (foco trapping automático).
- Overlay escurecido no fundo. Fecha ao clicar fora, pressionar Esc ou no botão ✕.
- Submenus expandem com acordeão (um por vez).
- `aria-expanded`, `aria-controls` e `role="navigation"` aplicados automaticamente.

### 2.3 Footer (Rodapé)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  ∞ Nós Existimos                                                        │
│  Combatendo a discriminação                                              │
│  de autistas no mercado de trabalho.                                     │
│                                                                          │
│  Navegação          Recursos             Redes Sociais                    │
│  ─────────          ────────             ─────────────                    │
│  Sobre              Grupos de Ajuda      Instagram · LinkedIn · YouTube  │
│  Informação         Linhas de Apoio                                      │
│  Inclusão           Materiais                                            │
│  Blog               FAQ                                                  │
│  Depoimentos        Acessibilidade                                       │
│                                                                          │
│  ─────────────────────────────────────────────────────────────────       │
│  © 2026 Nós Existimos · Política de Privacidade · Acessibilidade        │
│  Feito com ♥ para a comunidade autista brasileira                       │
│                                                                          │
│  Em caso de crise, ligue 188 (CVV) — 24h, gratuito.                    │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Elementos do footer:**
- **Branding:** Logo + slogan.
- **Links de navegação:** 3 colunas no desktop, empilhadas no mobile.
- **Redes sociais:** Links para Instagram, LinkedIn e YouTube com ícones Lucide (apenas como referência informativa, sem interação).
- **Linha de crise:** Destaque permanente ao número do CVV — visível em todas as páginas.
- **Links legais:** Privacidade e declaração de acessibilidade.

---

## 3. Layout das Páginas

### 3.1 Página Inicial (`/`)

A página inicial é o cartão de visita do projeto. Estrutura:

```
┌─────────────────────────────────────────────┐
│                   NAVBAR                     │
├─────────────────────────────────────────────┤
│                                              │
│              SEÇÃO HERO                      │
│                                              │
│   "Nós Existimos. E merecemos               │
│    nosso lugar no mercado de trabalho."      │
│                                              │
│   [Conheça a causa]    [Sou empresa]         │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│         DADOS DE IMPACTO (Contadores)        │
│                                              │
│   85% dos autistas      1 em cada 36        │
│   estão desempregados   crianças é autista   │
│                                              │
│   Lei 12.764/2012       +2.000 empresas      │
│   garante direitos      já são inclusivas    │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│         O QUE FAZEMOS (3 Cards)              │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │Informamos│ │ Incluímos│ │ Apoiamos │     │
│  │          │ │          │ │          │     │
│  │Difusão de│ │Ponte com │ │Recursos  │     │
│  │conheci-  │ │empresas e│ │para      │     │
│  │mento     │ │profissio-│ │autistas  │     │
│  │sobre TEA │ │nais      │ │e família │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│        DEPOIMENTOS (Carrossel manual)        │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ "Depois de 3 anos desempregado,     │    │
│  │  encontrei uma empresa que valoriza  │    │
│  │  meu hiperfoco como superpoder."     │    │
│  │                        — Lucas, 28   │    │
│  └──────────────────────────────────────┘    │
│                                              │
│        ◄  ● ○ ○ ○  ►                        │
│                                              │
│           [Ver todos os depoimentos]         │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│        CHAMADA PARA EMPRESAS                 │
│                                              │
│  "Sua empresa quer ser inclusiva?"           │
│                                              │
│  [Guia para empresas]  [Ver casos de sucesso]│
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│        ÚLTIMAS DO BLOG (3 Cards)             │
│                                              │
├─────────────────────────────────────────────┤
│                   FOOTER                     │
└─────────────────────────────────────────────┘
```

**Detalhes da Hero:**
- Fundo com gradiente sutil do azul profundo para azul acolhedor.
- Texto principal em branco, grande (H1).
- Dois CTAs: primário ("Conheça a causa") e secundário ("Sou empresa").
- Opcional: ilustração ou foto lateral representando diversidade profissional.
- Sem vídeo ou animação automática.

### 3.2 Página "O que é Autismo" (`/informacao/o-que-e-autismo`)

```
┌─────────────────────────────────────────────┐
│ NAVBAR                                       │
├─────────────────────────────────────────────┤
│ Breadcrumb: Início > Informação > O que é...│
├─────────────────────────────────────────────┤
│                                              │
│  H1: O que é o Transtorno do                │
│      Espectro Autista (TEA)                  │
│                                              │
│  Texto introdutório...                       │
│                                              │
│  ┌─ Índice do conteúdo ──────────────────┐  │
│  │ 1. Definição                          │  │
│  │ 2. Características                    │  │
│  │ 3. O Espectro                         │  │
│  │ 4. Diagnóstico                        │  │
│  │ 5. Autismo e Trabalho                 │  │
│  └───────────────────────────────────────┘  │
│                                              │
│  [Conteúdo MDX com seções,                  │
│   infográficos inline,                       │
│   citações em destaque                       │
│   e componentes interativos]                 │
│                                              │
│  ┌─ Sidebar (desktop) ──────────────────┐   │
│  │ Links relacionados                    │   │
│  │ • Mitos e Verdades                    │   │
│  │ • Direitos Trabalhistas               │   │
│  │ • Grupos de Ajuda                     │   │
│  │                                       │   │
│  │ [Baixar em PDF]                       │   │
│  └───────────────────────────────────────┘   │
│                                              │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
└─────────────────────────────────────────────┘
```

**Layout:** Conteúdo principal (8 colunas) + sidebar (4 colunas) no desktop. Sidebar abaixo do conteúdo no mobile.

### 3.3 Página "Para Empresas" (`/inclusao/para-empresas`)

```
┌─────────────────────────────────────────────┐
│ NAVBAR                                       │
├─────────────────────────────────────────────┤
│                                              │
│  HERO: "Diversidade neurocognitiva           │
│         é vantagem competitiva"              │
│                                              │
│  [Baixar guia completo]                      │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│  POR QUE CONTRATAR (benefícios em cards)     │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │Atenção a │ │Pensamento│ │Lealdade e│     │
│  │detalhes  │ │sistêmico │ │dedicação │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│  COMO COMEÇAR (Timeline/Steps)               │
│                                              │
│  1. Sensibilize a equipe                     │
│  2. Adapte o processo seletivo               │
│  3. Prepare o ambiente                       │
│  4. Ofereça mentoria                         │
│  5. Acompanhe e ajuste                       │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│  CASOS DE SUCESSO (Cards com depoimentos)    │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│  LEGISLAÇÃO RESUMIDA (Acordeão)              │
│  ▸ Lei de Cotas (8.213/91)                   │
│  ▸ Lei Berenice Piana (12.764/12)            │
│  ▸ Lei Brasileira de Inclusão (13.146/15)    │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│  CTA FINAL                                   │
│  "Pronto para transformar sua empresa?"      │
│  [Baixar guia completo]  [Ver casos de sucesso]│
│                                              │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
└─────────────────────────────────────────────┘
```

### 3.4 Página de Depoimentos (`/depoimentos`)

```
┌─────────────────────────────────────────────┐
│ NAVBAR                                       │
├─────────────────────────────────────────────┤
│                                              │
│  H1: Histórias Reais                         │
│  Subtítulo: Autistas e empresas              │
│  compartilham suas experiências              │
│                                              │
│  [Filtros: Todos | Profissionais |            │
│            Empresas | Familiares]             │
│                                              │
│  ┌───────────────────────────────────┐       │
│  │ Card depoimento (com foto,       │       │
│  │ nome, idade, profissão,          │       │
│  │ trecho do relato)                │       │
│  │ [Ler história completa →]        │       │
│  └───────────────────────────────────┘       │
│                                              │
│  ┌───────────────────────────────────┐       │
│  │ Card depoimento...               │       │
│  └───────────────────────────────────┘       │
│                                              │
│  [Carregar mais] ou paginação                │
│                                              │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
└─────────────────────────────────────────────┘
```

### 3.5 Página de Blog (`/blog`)

```
┌─────────────────────────────────────────────┐
│ NAVBAR                                       │
├─────────────────────────────────────────────┤
│                                              │
│  H1: Blog                                    │
│                                              │
│  [Buscar artigos... 🔍]                      │
│                                              │
│  Tags: Todos | Direitos | Mercado |          │
│        Histórias | Saúde | Educação          │
│                                              │
│  ┌─ Post em destaque (grande) ──────────┐   │
│  │  [Imagem]                             │   │
│  │  Tag: Mercado de Trabalho             │   │
│  │  H2: Título do artigo em destaque     │   │
│  │  Resumo do artigo...                  │   │
│  │  12 Mar 2026 · 5 min de leitura       │   │
│  └───────────────────────────────────────┘   │
│                                              │
│  Grid de posts (3 colunas desktop):          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ [Imagem] │ │ [Imagem] │ │ [Imagem] │     │
│  │ Tag      │ │ Tag      │ │ Tag      │     │
│  │ Título   │ │ Título   │ │ Título   │     │
│  │ Resumo   │ │ Resumo   │ │ Resumo   │     │
│  │ Data     │ │ Data     │ │ Data     │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│                                              │
│  [Carregar mais artigos]                     │
│                                              │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
└─────────────────────────────────────────────┘
```

---

## 4. Modais e Overlays

> **Nota:** O site é meramente informativo e não possui formulários de contato, envio de dados ou interação entre usuários. Os modais existentes são exclusivamente informativos.

### 4.1 Modal de Canais de Denúncia

**Trigger:** Botão "Onde denunciar discriminação?" em páginas como `/informacao/direitos-trabalhistas` e `/recursos`.

```
┌─────────────────────────────────────────────┐
│                                              │
│  ✕                                           │
│                                              │
│  Canais oficiais para denúncia               │
│  de discriminação                            │
│                                              │
│  Se você sofreu ou testemunhou               │
│  discriminação, procure os canais            │
│  oficiais abaixo:                            │
│                                              │
│  • Disque 100 — Direitos Humanos (24h)       │
│  • Ministério Público do Trabalho            │
│    (mpt.mp.br)                               │
│  • Defensoria Pública do seu estado          │
│  • Delegacia mais próxima                    │
│                                              │
│  Em caso de crise emocional:                 │
│  • CVV: ligue 188 (24h, gratuito)            │
│                                              │
│  [  Fechar  ]                                │
│                                              │
└─────────────────────────────────────────────┘
```

### 4.2 Modal de Detalhes de Legislação

**Trigger:** Clique em "Saiba mais" nos cards de legislação.

```
┌─────────────────────────────────────────────┐
│                                              │
│  ✕                                           │
│                                              │
│  Lei Berenice Piana (12.764/2012)            │
│                                              │
│  Institui a Política Nacional de Proteção    │
│  dos Direitos da Pessoa com Transtorno do    │
│  Espectro Autista...                         │
│                                              │
│  Principais garantias:                       │
│  • Diagnóstico precoce                       │
│  • Acesso a tratamento pelo SUS              │
│  • Inclusão escolar e profissional           │
│  • Equiparação à pessoa com deficiência      │
│                                              │
│  [Ler a lei na íntegra (planalto.gov.br) ↗]  │
│                                              │
│  [  Fechar  ]                                │
│                                              │
└─────────────────────────────────────────────┘
```

---

## 5. Componentes Reutilizáveis

### 5.1 Breadcrumb (Trilha de navegação)

```
Início  >  Informação  >  Direitos Trabalhistas
```

- Presente em todas as páginas internas (não na home).
- Usa `aria-label="Breadcrumb"` e `aria-current="page"` no último item.
- Implementado com schema.org `BreadcrumbList` para SEO.

### 5.2 Card de Informação

```
┌──────────────────────────────┐
│  [Ícone ou imagem]           │
│                              │
│  H3: Título do card          │
│                              │
│  Descrição breve do          │
│  conteúdo ou recurso.        │
│                              │
│  [Saiba mais →]              │
└──────────────────────────────┘
```

Variantes: `card`, `card--destaque` (borda dourada topo), `card--depoimento` (borda dourada lateral).

### 5.3 Acordeão (FAQ / Legislação)

```
┌──────────────────────────────────────────────┐
│ ▸ O que é a Lei de Cotas?                    │
├──────────────────────────────────────────────┤
│ ▾ Pessoas autistas têm direito ao BPC?       │
│                                              │
│   Sim. O Benefício de Prestação Continuada   │
│   (BPC) é garantido para pessoas com TEA     │
│   em situação de vulnerabilidade...          │
│                                              │
├──────────────────────────────────────────────┤
│ ▸ Como solicitar adaptações no trabalho?     │
└──────────────────────────────────────────────┘
```

- Implementado com `@radix-ui/react-accordion`.
- Permite abrir múltiplos itens simultaneamente.
- Cada item acessível via teclado (Enter/Space para abrir, setas para navegar).

### 5.4 Banner de Crise (Fixo)

Exibido em páginas sensíveis (recursos, apoio familiar, linhas de apoio).

```
┌──────────────────────────────────────────────────────────┐
│ ⚡ Precisa de ajuda agora? Ligue 188 (CVV) — 24h, grátis │
└──────────────────────────────────────────────────────────┘
```

- Fundo azul profundo, texto branco, ícone amarelo.
- Fixo acima do footer ou abaixo da navbar dependendo do contexto.
- Não descartável (sempre visível nessas páginas).

### 5.5 Carrossel de Depoimentos

- Navegação manual (setas ◄ ► + indicadores ● ○ ○).
- **Sem auto-play** — o usuário controla o ritmo.
- Acessível via teclado e leitor de tela.
- `aria-roledescription="carrossel"`, `aria-label` em cada slide.
- Pausa automática se `prefers-reduced-motion: reduce`.

### 5.6 Barra de Progresso de Leitura

Exibida em artigos longos do blog e páginas de conteúdo.

```
┌══════════════════════════════────────────────┐  (35% lido)
```

- Barra fina (3px) no topo da página, cor dourada.
- Apenas visual, sem interferir na navegação.
- Escondida se `prefers-reduced-motion: reduce`.

### 5.7 Toast / Notificações

Para feedback rápido de ações do usuário (ex: "Link copiado!", "Preferência salva!").

```
                              ┌────────────────────────┐
                              │ ✓ Link copiado!        │
                              └────────────────────────┘
```

- Aparece no canto inferior direito.
- Desaparece automaticamente após 5 segundos.
- `role="status"` e `aria-live="polite"` para leitores de tela.
- Botão de fechar disponível.

### 5.8 Tooltip Informativo

Para termos técnicos no conteúdo (ex: "TEA", "ABA", "neurodivergente").

```
A terapia [ABA]* é uma abordagem...

* ┌─────────────────────────────────┐
  │ ABA: Análise do Comportamento   │
  │ Aplicada — método terapêutico   │
  │ baseado em evidências.          │
  └─────────────────────────────────┘
```

- Implementado com `@radix-ui/react-tooltip`.
- Ativado por hover e foco (teclado).
- Delay de 300ms para não abrir acidentalmente.

---

## 6. Componentes de Acessibilidade

### 6.1 Painel de Acessibilidade

Acessível via botão no header ou atalho de teclado (Alt+A).

```
┌──────────────────────────────────────┐
│  ♿ Configurações de Acessibilidade  │
│                                      │
│  Tamanho do texto                    │
│  [A-]  ████████████░░  [A+]         │
│                                      │
│  Contraste                           │
│  ○ Normal  ○ Alto  ○ Muito alto      │
│                                      │
│  Movimento                           │
│  ☐ Reduzir animações                 │
│                                      │
│  Espaçamento                         │
│  ☐ Aumentar espaço entre linhas      │
│                                      │
│  Tema                                │
│  ○ Claro  ○ Escuro  ○ Sistema        │
│                                      │
│  [Restaurar padrões]                 │
└──────────────────────────────────────┘
```

- Preferências salvas em `localStorage`.
- Implementado com `@radix-ui/react-popover`.

### 6.2 Link "Pular para conteúdo"

Primeiro elemento focável da página. Invisível até receber foco via Tab.

```html
<a href="#conteudo-principal" class="pular-conteudo">
  Pular para o conteúdo principal
</a>
```

---

## 7. Estados e Feedback

### 7.1 Estado de Carregamento (Loading)

- Skeleton screens (não spinners) para carregar conteúdo.
- Skeleton segue o layout real do conteúdo que será exibido.

```
┌──────────────────────────────┐
│  ████████████████             │
│  ██████████                   │
│  ████████████████████         │
│  ████████████████             │
└──────────────────────────────┘
```

### 7.2 Estado Vazio

Quando uma busca ou filtro não retorna resultados:

```
┌──────────────────────────────────────────┐
│                                          │
│    🔍  (ícone ilustrativo)              │
│                                          │
│    Nenhum resultado encontrado           │
│                                          │
│    Tente buscar com outros termos        │
│    ou navegue pelas categorias.          │
│                                          │
│    [Ver todos os artigos]                │
│                                          │
└──────────────────────────────────────────┘
```

### 7.3 Página 404

```
┌──────────────────────────────────────────┐
│                                          │
│    ∞                                     │
│                                          │
│    Página não encontrada                 │
│                                          │
│    A página que você procura não          │
│    existe ou foi movida.                 │
│                                          │
│    [Voltar para a página inicial]        │
│    [Buscar no site]                      │
│                                          │
│    Páginas populares:                    │
│    • O que é Autismo                     │
│    • Direitos Trabalhistas               │
│    • Grupos de Ajuda                     │
│                                          │
└──────────────────────────────────────────┘
```

---

## 8. SEO e Meta Tags

### Estrutura por página

Cada página deve ter:

```html
<head>
  <title>{Título da página} — Nós Existimos</title>
  <meta name="description" content="{Descrição de 150-160 caracteres}" />
  
  <!-- Open Graph (redes sociais) -->
  <meta property="og:title" content="{Título}" />
  <meta property="og:description" content="{Descrição}" />
  <meta property="og:image" content="/og/{pagina}.png" />
  <meta property="og:type" content="website" />
  
  <!-- Schema.org (SEO estruturado) -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "Nós Existimos",
      "description": "Combate à discriminação de autistas no mercado de trabalho"
    }
  </script>
</head>
```

### Sitemap e Robots

- Gerar `sitemap.xml` automaticamente via Next.js.
- `robots.txt` permitindo indexação completa.

---

## 9. Responsividade — Resumo por Breakpoint

| Breakpoint | Navbar | Grid de Cards | Sidebar | Footer |
|------------|--------|---------------|---------|--------|
| Mobile (<576px) | Hambúrguer + drawer | 1 coluna | Abaixo do conteúdo | 1 coluna empilhada |
| Tablet (≥768px) | Hambúrguer + drawer | 2 colunas | Abaixo do conteúdo | 2 colunas |
| Desktop (≥992px) | Navbar completa | 3 colunas | Lateral (4 cols) | 3 colunas |
| Desktop LG (≥1200px) | Navbar completa | 3-4 colunas | Lateral (4 cols) | 3 colunas |

---

## 10. Fluxos do Usuário

### 10.1 Autista buscando orientação

```
Home → "Conheça a causa" → Informação → Direitos Trabalhistas
  → Grupos de Ajuda → Inclusão Profissional → Vagas Inclusivas
```

### 10.2 Empresa querendo ser inclusiva

```
Home → "Sou empresa" → Para Empresas → Como Começar (steps)
  → Casos de Sucesso → Baixar guia completo (PDF)
```

### 10.3 Familiar buscando apoio

```
Home → Recursos → Grupos de Ajuda → Apoio Familiar
  → Linhas de Apoio (188 CVV em destaque)
```

### 10.4 Visitante casual

```
Home → Dados de Impacto (se engaja) → O que é Autismo
  → Mitos e Verdades → Blog
```

---

## 11. Princípios Estruturais

1. **Nenhuma informação crítica deve estar a mais de 3 cliques da home.**
2. **O número do CVV (188) deve estar visível em todas as páginas** via footer e banner de crise.
3. **Toda página deve ter navegação clara** — o visitante nunca deve ficar sem saber o próximo passo.
4. **Conteúdo longo deve ter índice navegável** (table of contents) no topo.
5. **Modais são apenas informativos** — nunca coletam dados nem bloqueiam conteúdo essencial.
6. **Carrosséis nunca são automáticos** — o controle é sempre do usuário.
7. **O site não coleta dados de usuários** — é puramente informativo, sem formulários, newsletter ou login.
8. **Cada página interna tem breadcrumb** para orientação espacial.
9. **Filtros e buscas mantêm o estado na URL** para compartilhamento.
10. **O site funciona 100% sem JavaScript** em modo degradado (SSR/SSG).
