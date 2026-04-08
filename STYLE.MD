# Guia de Estilo Visual - Nos Existimos

Proposta completa de identidade visual para o site dedicado ao combate a discriminacao de autistas no mercado de trabalho.

---

## 1. Filosofia de Design

### Principios Norteadores

- **Acessibilidade em primeiro lugar**: Cada decisao visual deve considerar pessoas com diferentes necessidades sensoriais e cognitivas. O site deve ser navegavel por todos, independentemente de limitacoes visuais, motoras ou cognitivas.
- **Inclusao genuina**: O design nao deve apenas "falar sobre" inclusao, mas pratica-la. Isso significa representatividade nas imagens, linguagem visual acolhedora e ausencia de barreiras.
- **Clareza e previsibilidade**: Layouts consistentes, navegacao intuitiva e hierarquia visual bem definida. Pessoas no espectro autista frequentemente se beneficiam de interfaces previsiveis e organizadas.
- **Acolhimento sem infantilizacao**: O tom visual deve ser caloroso e profissional. Autistas sao profissionais competentes, e o design deve refletir isso com seriedade e respeito.
- **Simplicidade intencional**: Evitar excesso de informacao visual, animacoes desnecessarias e elementos distrativos. Cada elemento deve ter um proposito claro.

---

## 2. Paleta de Cores

### Cores Primarias

As cores primarias sao inspiradas no simbolo do infinito dourado, representando a neurodiversidade, combinadas com tons que transmitem profissionalismo e confianca.

| Nome            | Hex       | Uso principal                          |
|-----------------|-----------|----------------------------------------|
| Dourado Infinito | `#C8963E` | Icones decorativos, bordas de destaque, fundos de botoes CTA |
| Dourado Texto    | `#8B6514` | Texto dourado legivel sobre fundos claros (estatisticas, labels) |
| Azul Profundo    | `#1B3A5C` | Textos principais, cabecalhos (tema claro) |
| Azul Base        | `#152D48` | Fundo fixo de header, footer, hero e botoes sobre dourado |
| Branco Neve      | `#FAFAFA` | Fundo principal das paginas            |

```css
:root {
  --cor-dourado: #C8963E;
  --cor-dourado-texto: #8B6514;
  --cor-azul-profundo: #1B3A5C;
  --cor-azul-base: #152D48;
  --cor-branco: #FAFAFA;
}
```

#### Quando usar cada dourado

| Variavel | Quando usar | Quando NAO usar |
|----------|-------------|-----------------|
| `--cor-dourado` | Icones com `aria-hidden`, bordas decorativas de cards, fundos de botoes CTA, fundo do "pular-conteudo" | Nunca como texto sobre fundo claro (ratio 2.55:1 — FAIL) |
| `--cor-dourado-texto` | Numeros de estatisticas, labels "Nivel 1/2/3", numeros de telefone, qualquer texto dourado informativo | Nao necessario em icones decorativos |
| `--cor-hero-destaque` | Texto de destaque dentro do hero (fundo azul escuro) | Nunca sobre fundos claros (ratio 1.55:1) |

#### Quando usar cada azul

| Variavel | Quando usar | Quando NAO usar |
|----------|-------------|-----------------|
| `--cor-azul-profundo` | Texto de headings (muda para claro no dark), texto de botoes outline, bordas de botoes outline | Nunca como `bg-` com texto branco (no dark mode vira azul claro #8BAFC9) |
| `--cor-azul-base` | `bg-` de header, footer, hero gradient, CTA boxes, botoes sobre dourado, texto sobre fundo dourado | E fixo — nao muda entre temas |
| `--cor-azul-base-claro` | Segundo ponto do gradiente do hero | E fixo — nao muda entre temas |

### Cores Secundarias

| Nome              | Hex       | Uso principal                            |
|-------------------|-----------|------------------------------------------|
| Azul Acolhedor    | `#2E6B9E` | Links, elementos interativos             |
| Dourado Suave     | `#E8C876` | Texto destaque no hero, badges           |
| Cinza Quente      | `#4A4A4A` | Texto do corpo                           |
| Cinza Claro       | `#898989` | Bordas, divisores (ratio 3:1+)           |

```css
:root {
  --cor-azul-acolhedor: #2E6B9E;
  --cor-dourado-suave: #E8C876;
  --cor-hero-destaque: #E8C876;
  --cor-cinza-texto: #4A4A4A;
  --cor-cinza-claro: #898989;
}
```

### Cores de Estado e Feedback

Todas as cores de estado atingem WCAG AA (4.5:1) sobre o fundo do respectivo tema.

| Nome          | Hex Claro | Hex Escuro | Ratio Claro | Ratio Escuro |
|---------------|-----------|------------|-------------|--------------|
| Verde Sucesso | `#2D7A3A` | `#5CB85C`  | 5.09:1      | 6.88:1       |
| Vermelho Erro | `#C0392B` | `#E57373`  | 5.21:1      | 5.71:1       |
| Laranja Aviso | `#A96200` | `#FFB74D`  | 4.54:1      | 9.85:1       |
| Azul Info     | `#246B97` | `#64B5F6`  | 5.55:1      | 7.70:1       |

```css
:root {
  --cor-sucesso: #2D7A3A;
  --cor-erro: #C0392B;
  --cor-aviso: #A96200;
  --cor-info: #246B97;
}

[data-theme="dark"] {
  --cor-sucesso: #5CB85C;
  --cor-erro: #E57373;
  --cor-aviso: #FFB74D;
  --cor-info: #64B5F6;
}
```

### Contraste e Acessibilidade de Cores

Todas as combinacoes de cor atingem no minimo **WCAG 2.1 AA** (ratio 4.5:1 para texto normal, 3:1 para texto grande e elementos nao-textuais).

#### Tema Claro

| Combinacao                                              | Ratio   | Nivel |
|---------------------------------------------------------|---------|-------|
| Texto principal (#1B3A5C) sobre fundo (#FAFAFA)         | 11.14:1 | AAA   |
| Texto corpo (#4A4A4A) sobre fundo (#FAFAFA)             | 8.49:1  | AAA   |
| Dourado texto (#8B6514) sobre fundo (#FAFAFA)           | 5.07:1  | AA    |
| Dourado texto (#8B6514) sobre fundo secundario (#F0F0F0)| 4.64:1  | AA    |
| Link azul (#2E6B9E) sobre fundo (#FAFAFA)               | 5.42:1  | AA    |
| Branco sobre azul base (#152D48) — header/footer        | 13.99:1 | AAA   |
| Branco sobre azul base claro (#2E6B9E) — hero           | 5.66:1  | AA    |
| Hero destaque (#E8C876) sobre azul base (#152D48)       | 8.63:1  | AAA   |
| Hero destaque (#E8C876) sobre azul base claro (#2E6B9E) | 3.49:1  | AA grande |
| Azul base (#152D48) sobre dourado (#C8963E) — botoes    | 5.26:1  | AA    |
| Bordas (#898989) sobre fundo (#FAFAFA) — nao-textual    | 3.35:1  | AA (3:1) |
| Bordas (#898989) sobre fundo secundario (#F0F0F0)       | 3.07:1  | AA (3:1) |

#### Tema Escuro

| Combinacao                                              | Ratio   | Nivel |
|---------------------------------------------------------|---------|-------|
| Texto principal (#E0E0E0) sobre fundo (#1A1A2E)        | 12.92:1 | AAA   |
| Texto corpo (#B0B0B0) sobre fundo (#1A1A2E)            | 7.87:1  | AAA   |
| Dourado texto (#D4A84B) sobre fundo (#1A1A2E)          | 7.72:1  | AAA   |
| Dourado texto (#D4A84B) sobre fundo secundario (#252542)| 6.68:1  | AA    |
| Link azul (#5A9FD4) sobre fundo (#1A1A2E)              | 5.97:1  | AA    |
| Azul profundo (#8BAFC9) sobre fundo (#1A1A2E) — headings| 7.37:1  | AAA   |
| Branco sobre azul base (#152D48) — header/footer        | 13.99:1 | AAA   |
| Azul base (#152D48) sobre dourado (#D4A84B) — botoes    | 6.33:1  | AA    |
| Bordas (#7070A0) sobre fundo (#1A1A2E) — nao-textual   | 3.67:1  | AA (3:1) |
| Bordas (#7070A0) sobre fundo secundario (#252542)       | 3.17:1  | AA (3:1) |

#### Regras de uso de cor

1. **Nunca usar `--cor-dourado` como texto sobre fundo claro** — ratio 2.55:1 (FAIL). Usar `--cor-dourado-texto` para texto legivel.
2. **Nunca usar `--cor-dourado-suave` como texto sobre fundo claro** — ratio 1.55:1 (FAIL). Reservar para texto sobre fundos escuros (hero) via `--cor-hero-destaque`.
3. **Nunca usar `bg-[var(--cor-azul-profundo)]` com texto branco** — no dark mode, azul-profundo vira claro (#8BAFC9), quebrando o contraste. Usar `--cor-azul-base` para backgrounds fixos.
4. **Bordas de cards e divisores devem usar `--cor-cinza-claro`** (#898989 light / #7070A0 dark) para atingir 3:1 (WCAG 1.4.11).
5. **Cor nunca deve ser o unico indicador de estado** — sempre combinar com icone ou texto.

### Modo Escuro

O tema escuro e ativado via atributo `data-theme="dark"` no `<html>`, controlado por JavaScript (ThemeProvider). O Tailwind v4 esta configurado com `@variant dark` para reconhecer esse seletor.

| Nome                | Hex Claro   | Hex Escuro  | Notas |
|---------------------|-------------|-------------|-------|
| Fundo principal     | `#FAFAFA`   | `#1A1A2E`   | |
| Fundo secundario    | `#F0F0F0`   | `#252542`   | |
| Texto principal     | `#1B3A5C`   | `#E0E0E0`   | Headings |
| Texto corpo         | `#4A4A4A`   | `#B0B0B0`   | |
| Dourado decorativo  | `#C8963E`   | `#D4A84B`   | Icones, bordas |
| Dourado texto       | `#8B6514`   | `#D4A84B`   | Texto legivel |
| Dourado suave       | `#E8C876`   | `#B8923A`   | |
| Azul acolhedor      | `#2E6B9E`   | `#5A9FD4`   | Links |
| Azul profundo       | `#1B3A5C`   | `#8BAFC9`   | Headings, texto de botoes outline |
| Cinza texto         | `#4A4A4A`   | `#B0B0B0`   | |
| Cinza claro (bordas)| `#898989`   | `#7070A0`   | Ratio 3:1+ |

#### Variaveis fixas (nao mudam entre temas)

Estas variaveis mantem o mesmo valor em ambos os temas para garantir que elementos estruturais (header, footer, hero, botoes sobre dourado) nunca percam contraste:

| Variavel | Valor | Uso |
|----------|-------|-----|
| `--cor-azul-base` | `#152D48` | Background de header, footer, hero, CTA boxes, texto sobre dourado |
| `--cor-azul-base-claro` | `#2E6B9E` | Segundo ponto do gradiente hero |
| `--cor-hero-destaque` | `#E8C876` | Texto de destaque dourado dentro do hero |

```css
[data-theme="dark"] {
  --cor-fundo: #1A1A2E;
  --cor-fundo-secundario: #252542;
  --cor-texto-principal: #E0E0E0;
  --cor-texto-corpo: #B0B0B0;
  --cor-dourado: #D4A84B;
  --cor-dourado-texto: #D4A84B;
  --cor-dourado-suave: #B8923A;
  --cor-azul-acolhedor: #5A9FD4;
  --cor-azul-profundo: #8BAFC9;
  --cor-cinza-texto: #B0B0B0;
  --cor-cinza-claro: #7070A0;
  --cor-sucesso: #5CB85C;
  --cor-erro: #E57373;
  --cor-aviso: #FFB74D;
  --cor-info: #64B5F6;
}
```

---

## 3. Tipografia

### Fonte dos Titulos: Inter

A fonte **Inter** e uma sans-serif moderna, altamente legivel, com excelente distincao entre caracteres semelhantes (como "l", "I" e "1"), o que a torna ideal para acessibilidade.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

### Fonte do Corpo: Atkinson Hyperlegible

A **Atkinson Hyperlegible** foi projetada especificamente para legibilidade maxima, desenvolvida pelo Braille Institute. Cada caractere possui formas unicas que evitam confusao.

```css
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
```

### Escala Tipografica

Baseada em uma escala modular com ratio de 1.25 (Major Third).

| Elemento       | Tamanho (desktop) | Tamanho (mobile) | Peso  | Fonte                    |
|----------------|-------------------|-------------------|-------|--------------------------|
| H1             | 2.488rem (39.8px) | 1.802rem (28.8px) | 700   | Inter                    |
| H2             | 2.074rem (33.2px) | 1.602rem (25.6px) | 700   | Inter                    |
| H3             | 1.728rem (27.6px) | 1.424rem (22.8px) | 600   | Inter                    |
| H4             | 1.44rem (23px)    | 1.266rem (20.3px) | 600   | Inter                    |
| Corpo          | 1.125rem (18px)   | 1rem (16px)       | 400   | Atkinson Hyperlegible    |
| Corpo grande   | 1.25rem (20px)    | 1.125rem (18px)   | 400   | Atkinson Hyperlegible    |
| Legenda/Small  | 0.875rem (14px)   | 0.875rem (14px)   | 400   | Atkinson Hyperlegible    |

**Tamanho minimo absoluto**: 14px. Nunca utilizar texto menor que isso em qualquer contexto.

### Altura de Linha e Espacamento

```css
body {
  font-family: 'Atkinson Hyperlegible', Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--cor-cinza-texto);
  letter-spacing: 0.01em;
}

h1, h2, h3, h4 {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  line-height: 1.3;
  color: var(--cor-azul-profundo);
  margin-bottom: 0.75em;
}

p {
  margin-bottom: 1.5em;
  max-width: 72ch; /* Largura maxima para leitura confortavel */
}
```

### Recomendacoes Tipograficas

- Nunca usar texto inteiramente em caixa alta em blocos longos (dificulta a leitura).
- Caixa alta permitida apenas em labels curtos e botoes com `letter-spacing: 0.05em`.
- Evitar italico em blocos longos de texto.
- Sublinhado reservado exclusivamente para links.
- Alinhamento de texto sempre a esquerda (evitar justificado, que cria espacamentos irregulares).

---

## 4. Espacamento e Layout

### Sistema de Grid

Utilizar CSS Grid com 12 colunas para layouts complexos e Flexbox para componentes.

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}
```

### Escala de Espacamento

Baseada em multiplos de 8px para consistencia:

| Token       | Valor   | Uso tipico                           |
|-------------|---------|--------------------------------------|
| `--space-1` | 0.25rem (4px)  | Espacamento minimo entre icones/texto |
| `--space-2` | 0.5rem (8px)   | Padding interno de tags, badges       |
| `--space-3` | 0.75rem (12px) | Gap entre elementos inline            |
| `--space-4` | 1rem (16px)    | Padding de botoes, gap de formularios |
| `--space-5` | 1.5rem (24px)  | Gap do grid, margem entre paragrafos  |
| `--space-6` | 2rem (32px)    | Separacao entre secoes menores        |
| `--space-7` | 3rem (48px)    | Separacao entre secoes maiores        |
| `--space-8` | 4rem (64px)    | Padding vertical de secoes hero       |
| `--space-9` | 6rem (96px)    | Espacamento entre blocos de pagina    |

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
}
```

### Breakpoints Responsivos

| Nome        | Valor    | Descricao                        |
|-------------|----------|----------------------------------|
| `mobile`    | < 576px  | Smartphones em retrato           |
| `mobile-lg` | >= 576px | Smartphones em paisagem          |
| `tablet`    | >= 768px | Tablets em retrato               |
| `desktop`   | >= 992px | Tablets em paisagem, laptops     |
| `desktop-lg`| >= 1200px| Monitores grandes                |

```css
/* Mobile first: estilos base para mobile, media queries para telas maiores */
@media (min-width: 576px)  { /* mobile-lg */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 992px)  { /* desktop */ }
@media (min-width: 1200px) { /* desktop-lg */ }
```

### Regras de Layout

- Abordagem **mobile-first**: estilos base para mobile, expandir com media queries.
- Conteudo textual nunca exceder **72 caracteres** de largura (para leitura confortavel).
- Secoes do site devem ter padding vertical generoso (`var(--space-7)` a `var(--space-9)`).
- Evitar scroll horizontal em qualquer breakpoint.

---

## 5. Componentes Visuais

### Botoes

#### Botao Primario
```css
.btn-primario {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #FAFAFA;
  background-color: var(--cor-azul-profundo);
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  min-height: 48px;        /* Area de toque acessivel */
  min-width: 120px;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.btn-primario:hover {
  background-color: #244B73;
  box-shadow: 0 2px 8px rgba(27, 58, 92, 0.3);
}

.btn-primario:focus-visible {
  outline: 3px solid var(--cor-dourado);
  outline-offset: 2px;
}

.btn-primario:active {
  background-color: #142D47;
}
```

#### Botao Secundario
```css
.btn-secundario {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--cor-azul-profundo);
  background-color: transparent;
  border: 2px solid var(--cor-azul-profundo);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  min-height: 48px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-secundario:hover {
  background-color: rgba(27, 58, 92, 0.08);
}

.btn-secundario:focus-visible {
  outline: 3px solid var(--cor-dourado);
  outline-offset: 2px;
}
```

#### Botao de Destaque (CTA)
```css
.btn-destaque {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--cor-azul-base);          /* Fixo — nao muda no dark mode */
  background-color: var(--cor-dourado);
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 1rem 2rem;
  min-height: 52px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-destaque:hover {
  filter: brightness(1.1);
}

.btn-destaque:focus-visible {
  outline: 3px solid var(--cor-azul-base);
  outline-offset: 2px;
}
```

**Contraste do botao CTA**: `--cor-azul-base` (#152D48) sobre `--cor-dourado` (#C8963E) = **5.26:1** (AA). No dark mode, dourado vira #D4A84B, dando **6.33:1**.

**Regras para botoes:**
- Minimo de **48x48px** de area de toque (requisito WCAG).
- Texto dos botoes deve ser descritivo ("Saiba mais sobre nossos direitos", nao "Clique aqui").
- Sempre incluir estados `:hover`, `:focus-visible` e `:active`.

### Cards

```css
.card {
  background-color: #FFFFFF;
  border: 1px solid var(--cor-cinza-claro);
  border-radius: 12px;
  padding: var(--space-5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Card com destaque dourado na borda superior */
.card--destaque {
  border-top: 4px solid var(--cor-dourado);
}

/* Card de depoimento / caso de sucesso */
.card--depoimento {
  border-left: 4px solid var(--cor-dourado-suave);
  background-color: #FDFAF3;
  font-style: normal; /* Evitar italico para nao dificultar leitura */
}
```

### Formularios

```css
.form-campo {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.form-label {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--cor-azul-profundo);
}

.form-input {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 1rem;
  color: var(--cor-cinza-texto);
  background-color: #FFFFFF;
  border: 2px solid var(--cor-cinza-claro);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  min-height: 48px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus {
  border-color: var(--cor-azul-acolhedor);
  box-shadow: 0 0 0 3px rgba(46, 107, 158, 0.2);
  outline: none;
}

.form-input:invalid:not(:placeholder-shown) {
  border-color: var(--cor-erro);
}

.form-erro {
  font-size: 0.875rem;
  color: var(--cor-erro);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
```

**Regras para formularios:**
- Todo campo deve ter um `<label>` visivel associado (nunca apenas placeholder).
- Mensagens de erro devem ser claras, especificas e associadas ao campo via `aria-describedby`.
- Indicar campos obrigatorios com texto "(obrigatorio)", nao apenas asterisco.
- Nao usar cores sozinhas para indicar estados (combinar com icone ou texto).

### Navegacao

```css
.navbar {
  background-color: var(--cor-azul-base);  /* Fixo — nao muda no dark mode */
  padding: var(--space-3) var(--space-5);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-link {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #FAFAFA;
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.navbar-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar-link:focus-visible {
  outline: 2px solid var(--cor-dourado);
  outline-offset: 2px;
}

.navbar-link--ativo {
  background-color: rgba(255, 255, 255, 0.15);
  border-bottom: 2px solid var(--cor-dourado);
}
```

**Regras para navegacao:**
- Navegacao por teclado deve funcionar perfeitamente com Tab e Enter.
- Link ativo deve ser distinguido por mais de um indicador visual (cor + sublinhado, por exemplo).
- Menu mobile deve ser um menu hamburguer acessivel com `aria-expanded`.
- Incluir "pular para conteudo" como primeiro elemento focavel da pagina.

```css
.pular-conteudo {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--cor-dourado);
  color: var(--cor-azul-base);  /* Fixo — nao muda no dark mode */
  padding: var(--space-3) var(--space-4);
  font-weight: 700;
  z-index: 200;
  transition: top 0.2s ease;
}

.pular-conteudo:focus {
  top: 0;
}
```

---

## 6. Iconografia

### Estilo Recomendado

Utilizar a biblioteca **Lucide Icons** (https://lucide.dev/) ou **Phosphor Icons** (https://phosphoricons.com/). Ambas sao:
- Gratuitas e de codigo aberto.
- Consistentes em estilo (outline, peso uniforme).
- Leves e otimizadas para web.
- Acessiveis (podem ser facilmente associadas a textos alternativos).

### Diretrizes de Uso

- **Tamanho minimo**: 24x24px para icones funcionais, 20x20px para icones decorativos inline.
- **Peso do traco**: 1.5px a 2px, consistente com a leveza visual do site.
- **Cor dos icones**: Herdar a cor do texto pai ou usar as cores da paleta.
- **Icones nunca sozinhos**: Botoes e links com icone devem sempre ter texto acompanhante ou `aria-label` descritivo.
- **Icones decorativos**: Devem receber `aria-hidden="true"` para nao poluir a experiencia de leitores de tela.

```html
<!-- Exemplo: icone funcional com texto -->
<button>
  <svg aria-hidden="true" ...><!-- icone --></svg>
  Entrar em contato
</button>

<!-- Exemplo: icone solo com acessibilidade -->
<button aria-label="Abrir menu de navegacao">
  <svg aria-hidden="true" ...><!-- icone menu --></svg>
</button>
```

### Icones Especiais do Projeto

- **Simbolo do infinito dourado**: Utilizar como elemento de identidade do site, presente no cabecalho e rodape. Deve ser um SVG personalizado na cor `--cor-dourado`.
- **Icone de acessibilidade**: Preferir o icone de acessibilidade moderno (pessoa com bracos abertos) em vez do simbolo tradicional da cadeira de rodas, quando representando acessibilidade geral.

---

## 7. Imagens e Ilustracoes

### Diretrizes de Representatividade

- **Diversidade real**: Imagens devem representar pessoas de diferentes racas, generos, idades e aparencias no ambiente profissional.
- **Autistas como protagonistas**: Pessoas autistas devem ser mostradas em papeis ativos (trabalhando, liderando, criando), nunca em posicao passiva ou de vitimizacao.
- **Contexto profissional**: Priorizar imagens em ambientes de trabalho reais e diversos (escritorios, fabricas, laboratorios, espacos criativos, ambientes remotos).
- **Evitar cliches**: Nao usar imagens de pecas de quebra-cabeca (simbolo rejeitado pela comunidade autista). Preferir o simbolo do infinito dourado.
- **Naturalidade**: Preferir fotos que transmitam autenticidade em vez de fotos de banco de imagens excessivamente produzidas.

### Diretrizes Tecnicas

```css
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Imagens em cards */
.card img {
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}
```

- Todas as imagens devem ter `alt` descritivo e significativo.
- Imagens decorativas devem ter `alt=""` (vazio) e `aria-hidden="true"`.
- Usar formatos modernos (WebP com fallback para JPEG).
- Implementar lazy loading: `loading="lazy"` para imagens abaixo da dobra.
- Fornecer diferentes tamanhos com `srcset` para otimizacao responsiva.

### Ilustracoes

Se o projeto incluir ilustracoes personalizadas:
- Estilo **flat** e **minimalista**, com as cores da paleta.
- Tracos suaves, formas arredondadas, transmitindo acolhimento.
- Sem excesso de detalhes para nao sobrecarregar visualmente.
- Ilustracoes devem complementar o texto, nunca substituir informacoes importantes.

---

## 8. Acessibilidade

### Diretrizes Fundamentais

O site atende o nivel **WCAG 2.1 AA** em todas as combinacoes de cor, com muitas atingindo **AAA**. Toda alteracao de cor deve ser verificada contra as tabelas de contraste da Secao 2 deste documento.

### Contraste de Cores — Regras Absolutas

1. **Texto normal** (< 18pt ou < 14pt bold): ratio minimo **4.5:1**.
2. **Texto grande** (>= 18pt ou >= 14pt bold): ratio minimo **3:1**.
3. **Elementos nao-textuais** (bordas, icones informativos, campos de formulario): ratio minimo **3:1** (WCAG 1.4.11).
4. **Cor nunca como unico indicador**: sempre combinar com icone, texto ou forma.

#### Armadilhas conhecidas e como evitar

| Armadilha | Problema | Solucao |
|-----------|----------|---------|
| Dourado decorativo como texto | `--cor-dourado` (#C8963E) sobre fundo claro = **2.55:1** (FAIL) | Usar `--cor-dourado-texto` (#8B6514, 5.07:1) |
| `bg-[var(--cor-azul-profundo)]` com texto branco | No dark mode, azul-profundo vira #8BAFC9 (claro). Branco sobre claro = **2.31:1** (FAIL) | Usar `--cor-azul-base` (#152D48), que e fixo |
| Texto em headings dentro de secoes com `text-white` | A regra global `h1 { color }` podia sobrescrever classes Tailwind se estivesse fora de `@layer` | Todos os estilos globais estao em `@layer base` para que `@layer utilities` tenha prioridade |
| Bordas quase invisiveis | Bordas #E8E8E8 sobre #FAFAFA = **1.17:1** (FAIL) | `--cor-cinza-claro` agora e #898989 (3.35:1) |
| Breadcrumb sobre hero | Texto cinza sobre gradiente azul = **1.58:1** (FAIL) | Breadcrumb usa `text-white/80` e `text-white` sobre o hero |
| Classes `dark:` do Tailwind nao funcionam | O site usa `data-theme="dark"`, nao a classe `dark` | Configurado `@variant dark` no globals.css para usar `[data-theme="dark"]` |
| Cores de estado sem variante dark | Sucesso/erro/aviso/info ficavam com contraste ruim no tema escuro | Cada cor de estado tem variante escura definida em `[data-theme="dark"]` |

### Tamanhos Minimos

- **Fonte minima**: 14px (0.875rem). Texto do corpo: 18px desktop, 16px mobile.
- **Area de toque/clique**: Minimo de 48x48px para todos os elementos interativos.
- **Espaco entre alvos de toque**: Minimo de 8px entre elementos clicaveis adjacentes.

### Foco Visivel

O indicador de foco usa o dourado decorativo (alta visibilidade contra azul e branco) com outline de 3px e offset de 2px.

```css
@layer base {
  :focus-visible {
    outline: 3px solid var(--cor-dourado);
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
}
```

**Regra absoluta**: Nunca usar `outline: none` ou `outline: 0` sem fornecer um indicador de foco alternativo visivel.

### CSS Cascade Layers (Tailwind v4)

Os estilos globais (body, headings, focus) estao dentro de `@layer base` para respeitar a hierarquia de cascade do Tailwind v4:

```
@layer base < @layer utilities
```

Isso garante que classes utilitarias como `text-white`, `text-[var(--cor-hero-destaque)]` etc. sempre sobrescrevam os estilos base dos headings. Se estilos globais ficarem **fora** de `@layer`, eles tem prioridade maxima e quebram as classes utilitarias.

```css
/* CORRETO — dentro de @layer base */
@layer base {
  h1, h2, h3, h4, h5, h6 {
    color: var(--cor-texto-principal);
  }
}

/* ERRADO — fora de @layer, sobrescreve utilities */
h1, h2, h3, h4, h5, h6 {
  color: var(--cor-texto-principal);
}
```

### Tema Escuro — Configuracao Tailwind

O tema escuro usa o atributo `data-theme="dark"` (controlado via JavaScript pelo ThemeProvider). Para que as classes `dark:` do Tailwind v4 funcionem com este seletor:

```css
@variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

Sem essa linha, classes como `dark:bg-red-950/20` nao sao aplicadas ao alternar o tema.

### Semantica e Leitores de Tela

- Toda pagina deve ter uma estrutura de headings logica (h1 > h2 > h3, sem pular niveis).
- Usar landmarks semanticos: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`.
- Conteudo dinamico deve usar `aria-live="polite"` para anunciar mudancas.
- Formularios devem ter labels explicitas e mensagens de erro associadas via `aria-describedby`.
- Tabelas devem ter `<caption>` e `<th scope="col/row">`.
- Links devem ter texto descritivo (evitar "clique aqui" ou "saiba mais" isolados).
- Links externos devem ter `<span className="sr-only"> (abre em nova aba)</span>`.
- Icones decorativos: `aria-hidden="true"`.
- Icones funcionais sem texto: `aria-label` no botao pai.
- Menus dropdown: `aria-expanded` no botao, `role="menu"` no container, `role="menuitem"` nos itens.
- Menu mobile: `role="dialog"`, `aria-modal="true"`, focus trap, fechar com Esc.

```html
<!-- Exemplo: link acessivel -->
<a href="/direitos">Conheca seus direitos trabalhistas como pessoa autista</a>

<!-- Evitar -->
<a href="/direitos">Clique aqui</a>
```

### Link "Pular para Conteudo"

Primeiro elemento focavel da pagina. Usa cores fixas (`--cor-dourado` fundo, `--cor-azul-base` texto) para funcionar em ambos os temas.

```css
@layer base {
  .pular-conteudo {
    position: absolute;
    top: -100%;
    left: 0;
    background: var(--cor-dourado);
    color: var(--cor-azul-base);
    padding: 0.75rem 1rem;
    font-weight: 700;
    z-index: 200;
    transition: top 0.2s ease;
  }

  .pular-conteudo:focus {
    top: 0;
  }
}
```

### Breadcrumb

O breadcrumb fica dentro da secao hero (fundo azul escuro). Usa cores claras para visibilidade:

- Texto dos links: `text-white/80` (ratio 8.71:1 sobre azul base)
- Pagina atual: `text-white font-medium` (ratio 13.99:1)
- Separadores: `text-white/60`
- Hover: `text-white` com underline
- Links tem `underline decoration-white/40` para serem distinguidos do texto comum

### Reducao de Movimento

Respeitar a preferencia do usuario por movimento reduzido:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Modo de Alto Contraste (Windows)

```css
@media (forced-colors: active) {
  .btn-primario,
  .btn-secundario,
  .btn-destaque {
    border: 2px solid ButtonText;
  }

  .card {
    border: 1px solid CanvasText;
  }
}
```

### Componentes e Dark Mode

Todos os componentes devem usar variaveis CSS tematicas em vez de cores hardcoded:

| Errado | Correto | Motivo |
|--------|---------|--------|
| `bg-white` | `bg-[var(--cor-fundo)]` | `bg-white` nao muda no dark mode |
| `hover:bg-gray-50` | `hover:bg-[var(--cor-fundo-secundario)]` | Cinzas do Tailwind nao seguem o tema |
| `bg-[var(--cor-azul-profundo)] text-white` | `bg-[var(--cor-azul-base)] text-white` | azul-profundo vira claro no dark |
| `text-[var(--cor-dourado)]` em texto informativo | `text-[var(--cor-dourado-texto)]` | dourado decorativo nao tem contraste suficiente |
| `text-[var(--cor-cinza-texto)]` sobre hero azul | `text-white/80` | cinza escuro e invisivel sobre azul |

### Outras Diretrizes

- **Zoom**: O site deve ser funcional com zoom de ate 200% sem perda de conteudo ou funcionalidade.
- **Orientacao**: Suportar tanto retrato quanto paisagem sem restricoes.
- **Texto em imagens**: Nunca colocar informacoes importantes apenas em imagens. Todo texto essencial deve ser HTML real.
- **Autoplay**: Nunca reproduzir audio ou video automaticamente.
- **Timeouts**: Se houver formularios com tempo limite, oferecer opcao de estender.
- **Linguagem**: Definir `lang="pt-BR"` no `<html>`. Trechos em outros idiomas devem ter `lang` apropriado.
- **Contraste de elementos nao-textuais**: Icones, bordas de campos de formulario e elementos graficos informativos devem ter contraste minimo de 3:1 contra o fundo.
- **Alinhamento de texto**: Sempre a esquerda, nunca justificado.
- **Largura de texto**: Maximo 72 caracteres por linha.
- **Caixa alta**: Apenas em labels curtos, nunca em blocos longos.

---

## 9. Tom Visual

### Como o Design Deve Fazer o Visitante Se Sentir

O design do site deve transmitir as seguintes sensacoes, em ordem de prioridade:

1. **Pertencimento**: "Este espaco foi feito para mim." O visitante, seja autista, familiar, empregador ou aliado, deve sentir que e bem-vindo e que sua presenca importa.

2. **Confianca**: "As informacoes aqui sao serias e confiaveis." O profissionalismo do design reforeca a credibilidade do conteudo e da causa.

3. **Esperanca**: "Mudanca e possivel." O uso do dourado, os espacos respirados e os casos de sucesso apresentados em cards com destaque devem inspirar otimismo sem ser ingenuos.

4. **Respeito**: "Aqui me tratam como profissional, nao como diagnostico." O design evita infantilizacao, paternalismo visual e simbolos controversos. Trata autistas como o que sao: profissionais capazes.

5. **Calma**: "Este site e confortavel de navegar." Ausencia de pop-ups intrusivos, animacoes excessivas, autoplay de videos, fontes apertadas ou excesso de cores vibrantes. A experiencia deve ser tranquila e previsivel.

### O Que Evitar

- Excesso de cores vibrantes e saturadas em areas grandes.
- Padroes visuais repetitivos e intensos (listras, xadrez) que podem causar desconforto sensorial.
- Pop-ups e modais que bloqueiam o conteudo sem aviso.
- Carroseis automaticos (se usar carrossel, deve ser controlado pelo usuario).
- Musica ou sons ambiente.
- Animacoes de entrada em todos os elementos (parallax excessivo, fade-in em cascata).
- Linguagem visual condescendente (ilustracoes "fofas" demais, paleta pastel infantilizada).
- O simbolo de quebra-cabeca, amplamente rejeitado pela comunidade autista.

### O Que Abracar

- Espacos em branco generosos que permitem o conteudo respirar.
- Hierarquia visual clara que guia o olhar naturalmente.
- Consistencia em toda a experiencia: mesmos padroes, mesmas cores, mesmos espacamentos.
- Microinteracoes sutis e significativas (um hover suave, uma transicao de cor calma).
- Fotografias e ilustracoes que mostram potencial, competencia e humanidade.
- O simbolo do infinito dourado como marca de identidade e orgulho.

---

## Resumo Rapido de Variaveis CSS

```css
:root {
  /* Cores — tematicas (mudam no dark mode) */
  --cor-dourado: #C8963E;         /* Decorativo: icones, bordas, fundo de botoes */
  --cor-dourado-texto: #8B6514;   /* Texto dourado legivel sobre fundos claros */
  --cor-dourado-suave: #E8C876;   /* Badges, fundos suaves */
  --cor-azul-profundo: #1B3A5C;   /* Headings, texto de botoes outline */
  --cor-azul-acolhedor: #2E6B9E;  /* Links */
  --cor-branco: #FAFAFA;
  --cor-cinza-texto: #4A4A4A;     /* Texto corpo */
  --cor-cinza-claro: #898989;     /* Bordas (ratio 3:1+) */
  --cor-sucesso: #2D7A3A;
  --cor-erro: #C0392B;
  --cor-aviso: #A96200;
  --cor-info: #246B97;
  --cor-fundo: #FAFAFA;
  --cor-fundo-secundario: #F0F0F0;
  --cor-texto-principal: #1B3A5C;
  --cor-texto-corpo: #4A4A4A;

  /* Cores — fixas (NAO mudam no dark mode) */
  --cor-azul-base: #152D48;       /* bg de header, footer, hero, botoes sobre dourado */
  --cor-azul-base-claro: #2E6B9E; /* Gradiente hero (ponto final) */
  --cor-hero-destaque: #E8C876;   /* Texto destaque no hero */

  /* Tipografia */
  --fonte-titulo: 'Inter', Arial, Helvetica, sans-serif;
  --fonte-corpo: 'Atkinson Hyperlegible', Arial, Helvetica, sans-serif;
  --tamanho-base: 1.125rem;
  --linha-base: 1.7;

  /* Espacamento */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;

  /* Bordas */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Sombras */
  --sombra-sutil: 0 1px 3px rgba(0, 0, 0, 0.06);
  --sombra-media: 0 4px 12px rgba(0, 0, 0, 0.1);
  --sombra-forte: 0 8px 24px rgba(0, 0, 0, 0.15);

  /* Transicoes */
  --transicao-rapida: 0.15s ease;
  --transicao-padrao: 0.2s ease;
  --transicao-suave: 0.3s ease;
}
```
