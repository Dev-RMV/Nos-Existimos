# CLAUDE.md

## Idioma

- Sempre responder em **português brasileiro**.

## Sobre o Projeto

Este é um site informativo dedicado a reunir conhecimento sobre **direitos, inclusão e recursos de apoio para pessoas autistas no mercado de trabalho**.

## Acessibilidade

Este projeto tem acessibilidade como prioridade máxima. Todo código deve respeitar os seguintes padrões:

### WCAG 2.1 AA (mínimo obrigatório)

- **Contraste de cores**: texto normal ≥ 4.5:1, texto grande ≥ 3:1, elementos não-textuais ≥ 3:1.
- **Tamanho mínimo de fonte**: nunca menor que 14px (0.875rem). Corpo ≥ 16px.
- **Área de toque/clique**: mínimo 48×48px para todos os elementos interativos.
- **Espaço entre alvos**: mínimo 8px entre elementos clicáveis adjacentes.

### Semântica e estrutura

- Usar landmarks HTML5: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`.
- Headings em ordem lógica (h1 → h2 → h3), sem pular níveis.
- Todo `<img>` deve ter `alt` descritivo. Imagens decorativas: `alt=""` + `aria-hidden="true"`.
- Links devem ter texto descritivo — nunca "clique aqui" ou "saiba mais" isolados.
- Tabelas devem ter `<caption>` e `<th scope>`.

### Navegação por teclado

- Foco visível obrigatório (`focus-visible` com outline de 3px).
- Nunca usar `outline: none` sem indicador alternativo.
- Tab order lógico, sem `tabindex` positivo.
- Link "Pular para conteúdo" como primeiro elemento focável.
- Menus e modais devem ter focus trap e fechar com Esc.

### ARIA

- Usar `aria-expanded` em menus e acordeões.
- Usar `aria-label` ou `aria-labelledby` em elementos interativos sem texto visível.
- Usar `aria-live="polite"` para conteúdo dinâmico (toasts, notificações).
- Ícones decorativos devem ter `aria-hidden="true"`.
- Ícones funcionais (sem texto) devem ter `aria-label` no botão pai.

### Movimento e sensorial

- Respeitar `prefers-reduced-motion: reduce` — desativar animações.
- Respeitar `prefers-color-scheme` para tema claro/escuro.
- Suportar `forced-colors` (modo alto contraste do Windows).
- Nunca usar cor como único indicador de estado (combinar com ícone ou texto).
- Sem autoplay de áudio ou vídeo. Carrosséis apenas manuais.

### Formulários (se houver)

- Todo campo deve ter `<label>` visível associado (não apenas placeholder).
- Campos obrigatórios indicados com texto "(obrigatório)", não apenas asterisco.
- Mensagens de erro claras, associadas ao campo via `aria-describedby`.

### Texto e conteúdo

- Alinhamento sempre à esquerda (nunca justificado).
- Largura máxima de 72 caracteres para blocos de texto.
- Caixa alta apenas em labels curtos, nunca em blocos longos.
- O site deve funcionar com zoom de 200% sem perda de conteúdo.
- Definir `lang="pt-BR"` no `<html>`. Trechos em outros idiomas com `lang` apropriado.
