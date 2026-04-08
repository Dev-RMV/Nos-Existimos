# Dependências e Stack Tecnológica — Nós Existimos

## 1. Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────┐
│               Vercel (Deploy)               │
├─────────────────────────────────────────────┤
│           Next.js 15 (App Router)           │
│         TypeScript + React 19              │
├──────────────┬──────────────────────────────┤
│  Tailwind CSS │    Radix UI (Acessível)     │
├──────────────┴──────────────────────────────┤
│        MDX + Contentlayer (Conteúdo)        │
├─────────────────────────────────────────────┤
│     Supabase (Banco) │ Auth.js (Login)      │
├─────────────────────────────────────────────┤
│  Vitest + Playwright + axe-core (Testes)    │
└─────────────────────────────────────────────┘
```

**Filosofia:** Stack moderna, gratuita/open-source, com foco em acessibilidade, SEO e performance. Ideal para um site informativo com conteúdo estático e seções dinâmicas.

---

## 2. Framework Frontend — Next.js 15 (App Router)

- **Pacote:** `next`
- **Versão recomendada:** 15.x (latest stable)
- **Para que serve:** Framework React full-stack com SSR (Server-Side Rendering), SSG (Static Site Generation), rotas de API e otimização automática.
- **Por que foi escolhido:**
  - **SEO excelente** — páginas pré-renderizadas são indexadas perfeitamente pelo Google, essencial para difusão de informação.
  - **Performance** — otimização automática de imagens, fontes e code splitting.
  - **App Router** — arquitetura moderna com React Server Components, layouts aninhados e streaming.
  - **Acessibilidade** — renderização no servidor garante conteúdo acessível mesmo sem JavaScript.
  - **Ecossistema** — a maior comunidade React do mercado.
- **Alternativas consideradas:**
  - **Astro:** Excelente para sites estáticos, mas menos flexível para seções dinâmicas futuras.
  - **Remix:** Boa alternativa, mas ecossistema menor.
  - **Nuxt (Vue):** Boa opção, mas a comunidade React é significativamente maior no Brasil.

---

## 3. Linguagem — TypeScript

- **Pacote:** `typescript`
- **Versão recomendada:** 5.x (latest stable)
- **Para que serve:** Superset do JavaScript que adiciona tipagem estática, prevenindo erros em tempo de desenvolvimento.
- **Por que foi escolhido:**
  - Detecta erros antes de chegar à produção.
  - Autocompletar inteligente melhora a produtividade.
  - Documentação implícita — os tipos explicam o código.
  - Padrão da indústria para projetos modernos.
- **Alternativas consideradas:**
  - **JavaScript puro:** Mais simples, mas sem segurança de tipos.

---

## 4. Estilização — Tailwind CSS + Radix UI

### Tailwind CSS
- **Pacote:** `tailwindcss`
- **Versão recomendada:** 4.x (latest stable)
- **Para que serve:** Framework CSS utility-first que permite estilizar diretamente no JSX.
- **Por que foi escolhido:**
  - Desenvolvimento rápido e consistente.
  - CSS final otimizado (apenas classes utilizadas).
  - Excelente sistema de design tokens (cores, espaçamento, tipografia).
  - Suporte nativo a modo escuro e responsividade.
- **Alternativas consideradas:**
  - **CSS Modules:** Mais verboso, sem sistema de tokens.
  - **Styled Components:** Performance inferior com SSR.

### Radix UI
- **Pacote:** `@radix-ui/react-*`
- **Versão recomendada:** Latest stable
- **Para que serve:** Componentes headless (sem estilo) acessíveis por padrão — diálogos, menus, tabs, tooltips, etc.
- **Por que foi escolhido:**
  - **Acessibilidade nativa** — todos os componentes seguem WAI-ARIA por padrão.
  - **Headless** — aceita qualquer estilização (perfeito com Tailwind).
  - **Testado e mantido** — usado em produção por milhares de projetos.
- **Alternativas consideradas:**
  - **shadcn/ui:** Construído sobre Radix, pode ser usado como camada adicional.
  - **Headless UI:** Menos componentes disponíveis.
  - **Ark UI:** Mais recente, menos testado em produção.

---

## 5. Conteúdo — MDX + Contentlayer

### MDX
- **Pacote:** `@next/mdx`, `next-mdx-remote`
- **Versão recomendada:** Latest stable
- **Para que serve:** Permite escrever conteúdo em Markdown com componentes React incorporados.
- **Por que foi escolhido:**
  - Equipe não-técnica pode editar conteúdo em Markdown.
  - Componentes interativos dentro do texto (gráficos, cards, quizzes).
  - Versionável no Git — histórico completo de alterações.
- **Alternativas consideradas:**
  - **Sanity CMS:** Mais robusto, mas adiciona complexidade e potencial custo.
  - **Strapi:** Self-hosted, requer servidor próprio.
  - **Notion como CMS:** Limitações na customização.

### Contentlayer
- **Pacote:** `contentlayer2`
- **Versão recomendada:** Latest stable
- **Para que serve:** Transforma arquivos MDX em dados tipados para o Next.js.
- **Por que foi escolhido:**
  - Validação de conteúdo com schema.
  - Geração automática de tipos TypeScript.
  - Hot reload durante desenvolvimento.

---

## 6. Hospedagem e Deploy — Vercel

- **Plataforma:** Vercel
- **Custo:** Gratuito para projetos open-source e pessoais (Hobby plan).
- **Para que serve:** Hospedagem otimizada para Next.js com CI/CD automático.
- **Por que foi escolhida:**
  - Deploy automático a cada push no Git.
  - Preview deployments para cada pull request.
  - CDN global — performance no Brasil e no mundo.
  - SSL automático e gratuito.
  - Analytics de performance integrado.
- **Alternativas consideradas:**
  - **Netlify:** Boa alternativa, suporte a Next.js melhorou.
  - **Cloudflare Pages:** Excelente performance, mas suporte a Next.js é parcial.
  - **Railway:** Bom para full-stack, mas mais complexo.

---

## 7. Banco de Dados — Supabase

- **Pacote:** `@supabase/supabase-js`
- **Versão recomendada:** 2.x (latest stable)
- **Para que serve:** Backend-as-a-Service com PostgreSQL, autenticação, storage e realtime.
- **Por que foi escolhido:**
  - Tier gratuito generoso (500MB, 50k requests/mês).
  - PostgreSQL completo — sem limitações artificiais.
  - SDK simples para JavaScript/TypeScript.
  - Autenticação integrada (pode substituir Auth.js).
  - Dashboard visual para gerenciar dados.
- **Quando usar:** Para funcionalidades como formulários de contato, depoimentos, cadastro de empresas inclusivas, newsletter.
- **Alternativas consideradas:**
  - **PlanetScale:** MySQL, bom mas tier gratuito descontinuado.
  - **Neon:** PostgreSQL serverless, boa alternativa.
  - **Firebase:** Mais lock-in, NoSQL.

---

## 8. Autenticação — Auth.js (NextAuth)

- **Pacote:** `next-auth`
- **Versão recomendada:** 5.x (latest stable)
- **Para que serve:** Autenticação para Next.js com suporte a provedores sociais (Google, GitHub) e credenciais.
- **Por que foi escolhido:**
  - Integração nativa com Next.js App Router.
  - Suporte a dezenas de provedores.
  - Sessão segura com JWT ou banco de dados.
  - Open-source e amplamente adotado.
- **Quando usar:** Se o site tiver área administrativa, perfis de usuário ou área restrita.
- **Alternativas consideradas:**
  - **Supabase Auth:** Integrado ao Supabase, mais simples se já usar Supabase.
  - **Clerk:** Mais polido, mas pago em escala.

---

## 9. Testes

### Vitest (Testes Unitários)
- **Pacote:** `vitest`
- **Versão recomendada:** 3.x (latest stable)
- **Para que serve:** Framework de testes unitários rápido, compatível com a API do Jest.
- **Por que foi escolhido:** Velocidade superior ao Jest, configuração simples com Vite/Next.js.

### Playwright (Testes E2E)
- **Pacote:** `@playwright/test`
- **Versão recomendada:** 1.x (latest stable)
- **Para que serve:** Testes end-to-end em navegadores reais (Chrome, Firefox, Safari).
- **Por que foi escolhido:** Multi-browser, confiável, excelente para testar acessibilidade real.

### axe-core (Testes de Acessibilidade)
- **Pacote:** `@axe-core/playwright`
- **Versão recomendada:** 4.x (latest stable)
- **Para que serve:** Testes automatizados de acessibilidade que verificam conformidade com WCAG.
- **Por que foi escolhido:** Padrão da indústria para testes de acessibilidade automatizados. **Essencial para este projeto.**

### Testing Library
- **Pacote:** `@testing-library/react`
- **Versão recomendada:** 16.x (latest stable)
- **Para que serve:** Testar componentes React da perspectiva do usuário.

---

## 10. Ferramentas de Desenvolvimento

### ESLint
- **Pacote:** `eslint`
- **Versão recomendada:** 9.x (latest stable, flat config)
- **Para que serve:** Análise estática de código — encontra erros e padrões problemáticos.

### Prettier
- **Pacote:** `prettier`
- **Versão recomendada:** 3.x (latest stable)
- **Para que serve:** Formatação automática de código para manter consistência.

### Husky + lint-staged
- **Pacotes:** `husky`, `lint-staged`
- **Para que serve:** Executa linting e formatação automaticamente antes de cada commit.
- **Por que foram escolhidos:** Garantem qualidade de código sem esforço manual.

---

## 11. Acessibilidade — Ferramentas Essenciais

Este projeto tem acessibilidade como prioridade máxima. Ferramentas dedicadas:

| Pacote | Para que serve |
|--------|---------------|
| `eslint-plugin-jsx-a11y` | Regras de lint para acessibilidade em JSX |
| `@axe-core/react` | Verifica acessibilidade em tempo de desenvolvimento |
| `@axe-core/playwright` | Testes automatizados de acessibilidade |
| `@radix-ui/react-*` | Componentes com ARIA nativo |
| `next-themes` | Modo escuro acessível |

---

## 12. Analytics — Plausible

- **Pacote:** `plausible-tracker` (ou script embed)
- **Para que serve:** Analytics de visitantes sem cookies, respeitando a privacidade.
- **Por que foi escolhido:**
  - **Sem cookies** — não necessita de banner de consentimento.
  - **Leve** — script de menos de 1KB.
  - **Privacidade** — não rastreia dados pessoais, conforme LGPD.
  - **Open-source** — pode ser self-hosted.
- **Alternativas consideradas:**
  - **Umami:** Open-source, self-hosted. Boa alternativa.
  - **Google Analytics:** Mais completo, mas invasivo para privacidade.
  - **Fathom:** Pago, mas excelente em privacidade.

---

## 13. Internacionalização — next-intl

- **Pacote:** `next-intl`
- **Versão recomendada:** 4.x (latest stable)
- **Para que serve:** Suporte a múltiplos idiomas no Next.js App Router.
- **Por que foi escolhido:**
  - Integração nativa com App Router e Server Components.
  - Suporte a formatação de datas, números e pluralização.
  - Roteamento por idioma (ex: `/pt`, `/en`, `/es`).
- **Quando implementar:** Fase futura, quando houver demanda por conteúdo em outros idiomas.
- **Alternativas consideradas:**
  - **next-i18next:** Mais antigo, menos integrado com App Router.
  - **Paraglide:** Approach compilado, mais performático mas menos maduro.

---

## 14. Tabela Completa de Dependências

### Dependências de Produção

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| `next` | 15.x | Framework React full-stack |
| `react` | 19.x | Biblioteca UI |
| `react-dom` | 19.x | Renderização React no DOM |
| `typescript` | 5.x | Tipagem estática |
| `tailwindcss` | 4.x | Estilização utility-first |
| `@radix-ui/react-*` | latest | Componentes acessíveis headless |
| `next-mdx-remote` | latest | Renderização MDX |
| `contentlayer2` | latest | Gestão de conteúdo tipado |
| `@supabase/supabase-js` | 2.x | Cliente Supabase |
| `next-auth` | 5.x | Autenticação |
| `next-intl` | 4.x | Internacionalização |
| `next-themes` | latest | Modo escuro |
| `plausible-tracker` | latest | Analytics privado |
| `lucide-react` | latest | Ícones |

### Dependências de Desenvolvimento

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| `eslint` | 9.x | Linting |
| `eslint-plugin-jsx-a11y` | latest | Regras de acessibilidade |
| `prettier` | 3.x | Formatação |
| `prettier-plugin-tailwindcss` | latest | Ordenação de classes Tailwind |
| `husky` | 9.x | Git hooks |
| `lint-staged` | latest | Lint em staged files |
| `vitest` | 3.x | Testes unitários |
| `@testing-library/react` | 16.x | Testes de componentes |
| `@playwright/test` | 1.x | Testes E2E |
| `@axe-core/react` | latest | Acessibilidade em dev |
| `@axe-core/playwright` | latest | Testes de acessibilidade |

---

## Comandos de Instalação

```bash
# Criar projeto Next.js com TypeScript e Tailwind
npx create-next-app@latest nos-existimos --typescript --tailwind --eslint --app --src-dir

# Dependências de produção
npm install @radix-ui/react-dialog @radix-ui/react-navigation-menu @radix-ui/react-tabs @radix-ui/react-tooltip next-mdx-remote contentlayer2 @supabase/supabase-js next-auth@beta next-intl next-themes plausible-tracker lucide-react

# Dependências de desenvolvimento
npm install -D eslint-plugin-jsx-a11y prettier prettier-plugin-tailwindcss husky lint-staged vitest @testing-library/react @playwright/test @axe-core/react @axe-core/playwright
```

---

## Estrutura de Diretórios Sugerida

```
nos-existimos/
├── src/
│   ├── app/                    # Rotas (App Router)
│   │   ├── (home)/             # Página inicial
│   │   ├── sobre/              # Sobre o projeto
│   │   ├── recursos/           # Grupos de ajuda
│   │   ├── inclusao/           # Inclusão profissional
│   │   ├── depoimentos/        # Histórias reais
│   │   └── contato/            # Formulário de contato
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                 # Componentes base (botões, cards)
│   │   ├── layout/             # Header, Footer, Nav
│   │   └── sections/           # Seções de página
│   ├── content/                # Arquivos MDX
│   ├── lib/                    # Utilitários e configurações
│   └── styles/                 # Estilos globais
├── public/                     # Assets estáticos
├── tests/                      # Testes E2E
├── CLAUDE.md
├── STYLE.MD
├── DEPENDENCIAS.MD
└── referencias/                # Documentação de referência
```

---

> **Nota:** Todas as versões indicadas são as mais recentes estáveis na data de criação deste documento (Abril 2026). Verifique atualizações antes de iniciar o projeto.

> **Princípio:** Cada dependência foi escolhida considerando **acessibilidade**, **performance**, **custo zero ou mínimo** e **comunidade ativa**. Menos dependências = menos superfície de ataque e manutenção.
