# Deploy — Nós Existimos

Instruções completas para executar o servidor de testes local e publicar o site na Cloudflare Pages.

---

## 1. Pré-requisitos

Antes de começar, certifique-se de ter instalado:

| Ferramenta | Versão mínima | Como verificar | Instalação |
|------------|---------------|----------------|------------|
| Node.js | 18.x ou superior | `node -v` | [nodejs.org](https://nodejs.org/) |
| npm | 9.x ou superior | `npm -v` | Vem com o Node.js |
| Git | 2.x | `git -v` | [git-scm.com](https://git-scm.com/) |
| Wrangler (CLI Cloudflare) | 3.x | `wrangler -v` | `npm install -g wrangler` |

---

## 2. Servidor de Testes Local

### 2.1 Primeira execução (instalação)

```bash
# Acesse o diretório do projeto
cd site

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O servidor iniciará em **http://localhost:3000**. Alterações nos arquivos serão refletidas automaticamente (hot reload).

### 2.2 Comandos úteis

```bash
# Servidor de desenvolvimento (com hot reload)
npm run dev

# Build de produção (gera a versão otimizada)
npm run build

# Iniciar servidor de produção local (após build)
npm start

# Verificar erros de tipagem TypeScript
npx tsc --noEmit

# Verificar erros de lint
npm run lint
```

### 2.3 Testar o build de produção localmente

Antes de fazer deploy, sempre teste o build de produção:

```bash
# Gera o build otimizado
npm run build

# Inicia o servidor de produção local
npm start
```

Acesse **http://localhost:3000** e verifique:
- Todas as páginas carregam corretamente
- Navegação funciona (links, dropdowns, menu mobile)
- Modo escuro/claro alterna corretamente
- QR Code aparece no footer e no widget flutuante
- Imagens carregam sem erro
- O site é responsivo (teste redimensionando o navegador)

### 2.4 Testar com preview da Cloudflare localmente

```bash
# Instale o adaptador da Cloudflare (se ainda não instalado)
npm install @cloudflare/next-on-pages

# Build para Cloudflare Pages
npx @cloudflare/next-on-pages

# Preview local usando Wrangler
npx wrangler pages dev .vercel/output/static
```

---

## 3. Preparação para Deploy na Cloudflare Pages

### 3.1 Instalar o adaptador Cloudflare

```bash
cd site

# Instale o adaptador
npm install --save-dev @cloudflare/next-on-pages
```

### 3.2 Configurar `next.config.ts`

Edite (ou crie) o arquivo `next.config.ts` na raiz do diretório `site/`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Cloudflare Pages não suporta otimização de imagens do Next.js
  },
};

export default nextConfig;
```

> **Nota:** `images.unoptimized: true` é necessário porque a Cloudflare Pages não suporta o Image Optimization API do Next.js. As imagens serão servidas diretamente.

### 3.3 Criar o arquivo `wrangler.toml` (opcional, para configuração avançada)

Na raiz do diretório `site/`, crie o arquivo `wrangler.toml`:

```toml
name = "nos-existimos"
compatibility_date = "2025-04-01"
compatibility_flags = ["nodejs_compat"]

[site]
bucket = ".vercel/output/static"
```

---

## 4. Deploy na Cloudflare Pages

Existem dois métodos: via **Dashboard (interface web)** ou via **CLI (linha de comando)**.

### Método A: Via Dashboard (Recomendado para primeiro deploy)

#### Passo 1 — Envie o código para o GitHub

```bash
# Na raiz do projeto (C:\Nos_Existimos)
cd site
git init
git add .
git commit -m "Versão inicial do site Nós Existimos"

# Crie o repositório no GitHub e conecte
git remote add origin https://github.com/SEU_USUARIO/nos-existimos.git
git branch -M main
git push -u origin main
```

#### Passo 2 — Acesse o Cloudflare Dashboard

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com/)
2. Faça login ou crie uma conta gratuita
3. No menu lateral, clique em **Workers & Pages**
4. Clique em **Create**
5. Selecione a aba **Pages**
6. Clique em **Connect to Git**

#### Passo 3 — Conecte o repositório

1. Autorize o Cloudflare a acessar sua conta GitHub
2. Selecione o repositório **nos-existimos**
3. Clique em **Begin setup**

#### Passo 4 — Configure o build

Preencha os campos:

| Campo | Valor |
|-------|-------|
| **Project name** | `nos-existimos` |
| **Production branch** | `main` |
| **Framework preset** | `Next.js` |
| **Build command** | `npx @cloudflare/next-on-pages` |
| **Build output directory** | `.vercel/output/static` |
| **Root directory** | `/` (ou `site` se o repo incluir a pasta pai) |

#### Passo 5 — Variáveis de ambiente (se necessário)

Adicione a seguinte variável de ambiente:

| Variável | Valor |
|----------|-------|
| `NODE_VERSION` | `20` |

#### Passo 6 — Deploy

Clique em **Save and Deploy**. O primeiro build pode levar 2-5 minutos.

Ao concluir, o site estará disponível em:
```
https://nos-existimos.pages.dev
```

---

### Método B: Via CLI (Wrangler)

#### Passo 1 — Autentique no Cloudflare

```bash
wrangler login
```

Isso abrirá o navegador para autenticação. Autorize o acesso.

#### Passo 2 — Build do projeto

```bash
cd site
npm run build
npx @cloudflare/next-on-pages
```

#### Passo 3 — Primeiro deploy (cria o projeto)

```bash
npx wrangler pages deploy .vercel/output/static --project-name=nos-existimos
```

Na primeira execução, o Wrangler criará o projeto na Cloudflare automaticamente.

#### Passo 4 — Deploys subsequentes

```bash
# Build + deploy em um comando
npm run build && npx @cloudflare/next-on-pages && npx wrangler pages deploy .vercel/output/static --project-name=nos-existimos
```

**Dica:** Adicione um script ao `package.json` para facilitar:

```json
{
  "scripts": {
    "deploy": "npm run build && npx @cloudflare/next-on-pages && npx wrangler pages deploy .vercel/output/static --project-name=nos-existimos"
  }
}
```

Depois basta executar:

```bash
npm run deploy
```

---

## 5. Configuração de Domínio Personalizado

### 5.1 Registrar/Transferir domínio para Cloudflare (opcional)

A Cloudflare oferece registro de domínios a preço de custo (sem markup). Para registrar:

1. No Dashboard, vá em **Domain Registration** > **Register Domains**
2. Busque o domínio desejado (ex: `nosexistimos.org.br`)
3. Siga as instruções de pagamento

> **Nota:** Domínios `.org.br` e `.com.br` precisam ser registrados via Registro.br. Nesse caso, use a opção de apontar os nameservers (seção 5.2).

### 5.2 Apontar nameservers para a Cloudflare (domínio externo)

Se o domínio foi registrado em outro provedor (Registro.br, GoDaddy, etc.):

1. No Dashboard Cloudflare, clique em **Add a site**
2. Digite o domínio (ex: `nosexistimos.org.br`)
3. Selecione o plano **Free**
4. A Cloudflare fornecerá dois nameservers, algo como:
   ```
   ada.ns.cloudflare.com
   lee.ns.cloudflare.com
   ```
5. Acesse o painel do seu registrador (ex: Registro.br) e altere os nameservers para os fornecidos pela Cloudflare
6. Aguarde a propagação DNS (pode levar até 24 horas, geralmente minutos)

### 5.3 Conectar domínio ao Cloudflare Pages

1. No Dashboard, vá em **Workers & Pages**
2. Clique no projeto **nos-existimos**
3. Vá na aba **Custom domains**
4. Clique em **Set up a custom domain**
5. Digite o domínio: `nosexistimos.org.br`
6. Clique em **Continue**
7. A Cloudflare criará automaticamente o registro DNS CNAME apontando para `nos-existimos.pages.dev`
8. Clique em **Activate domain**

### 5.4 Configurar www (redirecionamento)

Para que `www.nosexistimos.org.br` também funcione:

1. Repita o passo 5.3 com `www.nosexistimos.org.br`
2. Ou crie uma **Redirect Rule** no Dashboard:
   - Vá em **Rules** > **Redirect Rules**
   - Crie uma regra:
     - **When**: Hostname equals `www.nosexistimos.org.br`
     - **Then**: Redirect to `https://nosexistimos.org.br` (301 Permanent)

### 5.5 SSL/HTTPS

A Cloudflare configura o certificado SSL automaticamente. Para verificar:

1. Vá em **SSL/TLS** no Dashboard
2. Certifique-se de que o modo está em **Full (strict)**
3. Em **Edge Certificates**, verifique que **Always Use HTTPS** está ativo

---

## 6. Deploy Automático (CI/CD)

Se você conectou o repositório GitHub ao Cloudflare Pages (Método A), o deploy automático já está configurado:

- **Push na branch `main`** → Deploy de produção automático
- **Push em outras branches** → Deploy de preview (URL temporária)
- **Pull Requests** → Comentário automático com link de preview

### Verificar status do deploy

```bash
# Via CLI
wrangler pages deployment list --project-name=nos-existimos

# Via Dashboard
# Workers & Pages > nos-existimos > Deployments
```

### Rollback para versão anterior

No Dashboard:
1. Vá em **Workers & Pages** > **nos-existimos** > **Deployments**
2. Encontre o deploy anterior que funcionava
3. Clique nos três pontos (**...**) e selecione **Rollback to this deployment**

---

## 7. Configurações Adicionais Recomendadas

### 7.1 Headers de segurança

Crie o arquivo `site/public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;
```

### 7.2 Redirecionamentos

Crie o arquivo `site/public/_redirects`:

```
# Redirecionar rotas antigas (se houver migração futura)
# /pagina-antiga  /pagina-nova  301
```

### 7.3 Cache

A Cloudflare gerencia cache automaticamente. Para assets estáticos (imagens, fontes), o cache padrão é adequado. Para forçar revalidação após deploy, a Cloudflare Pages já faz isso automaticamente.

### 7.4 Analytics

No Dashboard do Cloudflare Pages:
1. Vá em **Workers & Pages** > **nos-existimos**
2. A aba **Analytics** mostra métricas básicas (requests, bandwidth, erros)
3. Para analytics mais detalhado, considere adicionar o **Cloudflare Web Analytics** (gratuito, sem cookies):
   - Vá em **Analytics & Logs** > **Web Analytics**
   - Adicione o site e copie o snippet para o layout

---

## 8. Checklist de Deploy

Antes de cada deploy para produção, verifique:

- [ ] `npm run build` completa sem erros
- [ ] `npm run lint` passa sem erros
- [ ] `npx tsc --noEmit` não reporta erros de tipo
- [ ] Testou no navegador: desktop, tablet e mobile
- [ ] Modo escuro funciona corretamente
- [ ] Todas as imagens e QR code carregam
- [ ] Links de navegação funcionam
- [ ] Banner do CVV (188) aparece no footer
- [ ] Página 404 funciona para rotas inexistentes
- [ ] Meta tags (título, descrição, Open Graph) estão corretas

---

## 9. Troubleshooting

### Build falha com "out of memory"

```bash
# Aumente a memória do Node.js
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Erro "Edge runtime not supported"

Certifique-se de que `@cloudflare/next-on-pages` está instalado e que o build command está correto:
```bash
npx @cloudflare/next-on-pages
```

### Imagens não carregam em produção

Verifique que `next.config.ts` tem `images: { unoptimized: true }` configurado.

### Domínio não resolve

1. Verifique se os nameservers foram alterados no registrador
2. Aguarde propagação DNS (até 24h)
3. Verifique no Dashboard Cloudflare: **DNS** > o registro CNAME deve apontar para `nos-existimos.pages.dev`
4. Teste com: `nslookup nosexistimos.org.br`

### Deploy funciona mas site mostra 404

Verifique se o **Root directory** nas configurações do Cloudflare Pages está correto. Se o projeto Next.js está dentro da pasta `site/`, o root directory deve ser `site`.

---

## 10. Custos

| Recurso | Plano Free | Limite |
|---------|-----------|--------|
| Cloudflare Pages | Gratuito | 500 builds/mês, 1 build simultâneo |
| Bandwidth | Gratuito | Ilimitado |
| Requests | Gratuito | Ilimitado |
| Custom domains | Gratuito | Ilimitado |
| SSL | Gratuito | Automático |
| Web Analytics | Gratuito | Ilimitado |

O plano gratuito da Cloudflare Pages é mais que suficiente para este projeto.
