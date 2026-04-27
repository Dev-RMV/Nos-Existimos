# Dependencias e Stack Tecnologica — Nos Existimos

## 1. Visao Geral da Arquitetura

```
┌─────────────────────────────────────────────┐
│         Cloudflare Pages (Deploy)           │
│        via @opennextjs/cloudflare           │
├─────────────────────────────────────────────┤
│           Next.js 16 (App Router)           │
│         TypeScript 5 + React 19             │
├──────────────┬─────────────��────────────────┤
│ Tailwind CSS 4│     Lucide React (Icones)   │
├──────────────┴──────────────────────────────┤
│        next-themes (Tema claro/escuro)      │
├─────────────────────────────────────────────┤
│    Conteudo estatico em TSX (sem CMS)       │
└─────────────────────────────────────────────┘
```

**Filosofia:** Stack enxuta, gratuita/open-source, com foco em acessibilidade, SEO e performance. O site e informativo com conteudo estatico — sem banco de dados, autenticacao ou CMS no momento.

---

## 2. Framework Frontend — Next.js 16

- **Pacote:** `next`
- **Versao instalada:** 16.2.2
- **Para que serve:** Framework React full-stack com SSR (Server-Side Rendering), SSG (Static Site Generation), rotas de API e otimizacao automatica.
- **Por que foi escolhido:**
  - **SEO excelente** — paginas pre-renderizadas sao indexadas perfeitamente pelo Google, essencial para difusao de informacao.
  - **Performance** — otimizacao automatica de imagens, fontes e code splitting.
  - **App Router** — arquitetura moderna com React Server Components, layouts aninhados e streaming.
  - **Acessibilidade** — renderizacao no servidor garante conteudo acessivel mesmo sem JavaScript.
  - **Ecossistema** — a maior comunidade React do mercado.

---

## 3. Linguagem — TypeScript

- **Pacote:** `typescript`
- **Versao instalada:** ^5
- **Para que serve:** Superset do JavaScript que adiciona tipagem estatica, prevenindo erros em tempo de desenvolvimento.
- **Por que foi escolhido:**
  - Detecta erros antes de chegar a producao.
  - Autocompletar inteligente melhora a produtividade.
  - Documentacao implicita — os tipos explicam o codigo.
  - Padrao da industria para projetos modernos.

---

## 4. Estilizacao — Tailwind CSS 4

- **Pacote:** `tailwindcss`
- **Versao instalada:** ^4
- **Plugin:** `@tailwindcss/postcss` (integracao com PostCSS)
- **Para que serve:** Framework CSS utility-first que permite estilizar diretamente no JSX.
- **Por que foi escolhido:**
  - Desenvolvimento rapido e consistente.
  - CSS final otimizado (apenas classes utilizadas).
  - Excelente sistema de design tokens (cores, espacamento, tipografia).
  - Suporte nativo a modo escuro e responsividade.

---

## 5. Icones — Lucide React

- **Pacote:** `lucide-react`
- **Versao instalada:** ^1.7.0
- **Para que serve:** Biblioteca de icones SVG otimizados para React.
- **Por que foi escolhido:**
  - Leve — cada icone e importado individualmente (tree-shaking).
  - Consistente em estilo e tamanho.
  - Ampla variedade de icones.
  - Compativel com `aria-hidden` para acessibilidade.

---

## 6. Tema Claro/Escuro — next-themes

- **Pacote:** `next-themes`
- **Versao instalada:** ^0.4.6
- **Para que serve:** Gerenciamento de tema (claro/escuro) no Next.js com suporte a preferencia do sistema.
- **Por que foi escolhido:**
  - Sem flash de tema incorreto (FOUC) graças a integracao com SSR.
  - Respeita `prefers-color-scheme` do usuario.
  - API simples com hook `useTheme`.

---

## 7. Hospedagem e Deploy — Cloudflare Pages

- **Pacote:** `@opennextjs/cloudflare` (dev dependency)
- **Versao instalada:** ^1.18.1
- **Plataforma:** Cloudflare Pages
- **Custo:** Gratuito no plano Free (100.000 requests/dia).
- **Para que serve:** Adapter que permite rodar Next.js no edge runtime da Cloudflare.
- **Por que foi escolhido:**
  - CDN global com edge computing — latencia minima no Brasil e no mundo.
  - SSL automatico e gratuito.
  - Deploy automatico via integracao com GitHub.
  - Plano gratuito generoso para sites informativos.
  - DNS ja gerenciado pela Cloudflare (dominio nosexistimos.blog.br).

---

## 8. Linting — ESLint

- **Pacotes:** `eslint` (^9), `eslint-config-next` (16.2.2)
- **Para que serve:** Analise estatica de codigo — encontra erros e padroes problematicos.
- **Configuracao:** Flat config (ESLint 9), com regras especificas do Next.js via `eslint-config-next`.

---

## 9. Tipos TypeScript

Pacotes de tipos instalados como dev dependencies:

| Pacote | Para que serve |
|--------|---------------|
| `@types/node` (^20) | Tipos para APIs do Node.js |
| `@types/react` (^19) | Tipos para React 19 |
| `@types/react-dom` (^19) | Tipos para React DOM 19 |

---

## 10. Tabela Completa de Dependencias Atuais

### Dependencias de Producao

| Pacote | Versao | Proposito |
|--------|--------|-----------|
| `next` | 16.2.2 | Framework React full-stack |
| `react` | 19.2.4 | Biblioteca UI |
| `react-dom` | 19.2.4 | Renderizacao React no DOM |
| `lucide-react` | ^1.7.0 | Icones SVG |
| `next-themes` | ^0.4.6 | Tema claro/escuro |

### Dependencias de Desenvolvimento

| Pacote | Versao | Proposito |
|--------|--------|-----------|
| `typescript` | ^5 | Tipagem estatica |
| `tailwindcss` | ^4 | Estilizacao utility-first |
| `@tailwindcss/postcss` | ^4 | Plugin PostCSS para Tailwind |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | 16.2.2 | Regras ESLint para Next.js |
| `@opennextjs/cloudflare` | ^1.18.1 | Adapter para deploy na Cloudflare |
| `@types/node` | ^20 | Tipos Node.js |
| `@types/react` | ^19 | Tipos React |
| `@types/react-dom` | ^19 | Tipos React DOM |

---

## 11. Estrutura de Diretorios Atual

```
Nos_Existimos/
├── site/
│   ├── src/
│   │   ├── app/                          # Rotas (App Router)
│   │   │   ├── page.tsx                  # Pagina inicial
│   │   │   ├── layout.tsx                # Layout raiz
│   │   │   ├── globals.css               # Estilos globais
│   │   │   ├── sobre/                    # Sobre o projeto
│   │   │   ├── informacao/
│   │   │   │   ├── o-que-e-autismo/
│   │   │   │   ├── mitos-e-verdades/
│   │   │   │   ├── direitos-trabalhistas/
│   │   │   │   └── legislacao/
│   │   │   ├── inclusao/
│   │   │   │   ├── para-empresas/
│   │   │   │   ├── para-autistas/
│   │   │   │   └── casos-de-sucesso/
│   │   │   └── recursos/
│   │   │       ├── grupos-de-ajuda/
│   │   │       ├── linhas-de-apoio/
│   │   │       └── perguntas-frequentes/
│   │   └── components/                   # Componentes reutilizaveis
│   │       ├── Header.tsx                # Cabecalho com navegacao
│   │       ├── Footer.tsx                # Rodape
│   │       ├── Breadcrumb.tsx            # Navegacao breadcrumb
│   │       └── ThemeProvider.tsx          # Provedor de tema
│   ├── public/                           # Assets estaticos
│   ├── next.config.ts                    # Configuracao Next.js
│   ├── open-next.config.ts               # Configuracao OpenNext/Cloudflare
│   ├── postcss.config.mjs                # Configuracao PostCSS
│   ├── eslint.config.mjs                 # Configuracao ESLint
│   ├── tsconfig.json                     # Configuracao TypeScript
│   └── package.json                      # Dependencias
├── CLAUDE.md                             # Instrucoes para IA
├── dependencias.md                       # Este arquivo
└── DEPLOY.MD                             # Instrucoes de deploy
```

---

## 12. Sugestoes Futuras

As dependencias abaixo **nao estao instaladas**, mas sao recomendadas caso o projeto escale e precise de mais funcionalidades.

### Componentes Acessiveis — Radix UI

- **Pacote:** `@radix-ui/react-*`
- **Para que serve:** Componentes headless (sem estilo) acessiveis por padrao — dialogos, menus, tabs, tooltips.
- **Quando implementar:** Quando houver necessidade de componentes interativos mais complexos (modais, menus dropdown avancados, acordeoes) que exijam conformidade WAI-ARIA robusta.
- **Alternativas:** shadcn/ui (construido sobre Radix), Headless UI, Ark UI.

### Conteudo — MDX

- **Pacotes:** `@next/mdx`, `next-mdx-remote`
- **Para que serve:** Escrever conteudo em Markdown com componentes React incorporados.
- **Quando implementar:** Quando houver colaboradores nao-tecnicos editando conteudo, ou quando o volume de paginas justificar separar conteudo de codigo.
- **Alternativas:** Sanity CMS, Strapi, Notion como CMS.

### Banco de Dados — Supabase

- **Pacote:** `@supabase/supabase-js`
- **Para que serve:** Backend-as-a-Service com PostgreSQL, autenticacao, storage e realtime.
- **Quando implementar:** Se o site precisar de formularios de contato, depoimentos, cadastro de empresas inclusivas ou newsletter.
- **Alternativas:** Neon (PostgreSQL serverless), Turso (SQLite edge), D1 (Cloudflare).

### Autenticacao — Auth.js

- **Pacote:** `next-auth`
- **Para que serve:** Autenticacao para Next.js com suporte a provedores sociais e credenciais.
- **Quando implementar:** Se o site tiver area administrativa, perfis de usuario ou area restrita.
- **Alternativas:** Supabase Auth (integrado ao Supabase), Clerk, Cloudflare Access.

### Internacionalizacao — next-intl

- **Pacote:** `next-intl`
- **Para que serve:** Suporte a multiplos idiomas no Next.js App Router.
- **Quando implementar:** Quando houver demanda por conteudo em outros idiomas (ingles, espanhol).
- **Alternativas:** Paraglide, next-i18next.

### Analytics — Plausible

- **Pacote:** `plausible-tracker` (ou script embed)
- **Para que serve:** Analytics de visitantes sem cookies, respeitando a privacidade e LGPD.
- **Quando implementar:** Quando houver necessidade de acompanhar metricas de acesso e engajamento.
- **Alternativas:** Umami (self-hosted), Cloudflare Web Analytics (gratuito, ja integrado).

### Testes

| Pacote | Para que serve | Quando implementar |
|--------|---------------|--------------------|
| `vitest` | Testes unitarios | Quando houver logica de negocio ou utilitarios para testar |
| `@testing-library/react` | Testes de componentes | Quando componentes tiverem logica interativa complexa |
| `@playwright/test` | Testes E2E em navegadores reais | Quando houver fluxos criticos (formularios, autenticacao) |
| `@axe-core/playwright` | Testes automatizados de acessibilidade WCAG | Recomendado assim que possivel — essencial para este projeto |
| `@axe-core/react` | Verifica acessibilidade em tempo de desenvolvimento | Util durante o desenvolvimento de novos componentes |

### Qualidade de Codigo

| Pacote | Para que serve | Quando implementar |
|--------|---------------|--------------------|
| `prettier` | Formatacao automatica de codigo | Quando houver multiplos contribuidores |
| `prettier-plugin-tailwindcss` | Ordenacao de classes Tailwind | Junto com Prettier |
| `eslint-plugin-jsx-a11y` | Regras de lint para acessibilidade em JSX | Recomendado instalar em breve |
| `husky` + `lint-staged` | Git hooks para lint automatico pre-commit | Quando houver multiplos contribuidores |

---

> **Ultima atualizacao:** Abril de 2026.

> **Principio:** Cada dependencia foi escolhida considerando **acessibilidade**, **performance**, **custo zero** e **comunidade ativa**. O projeto prioriza uma stack enxuta — novas dependencias so devem ser adicionadas quando houver necessidade real.
