# Núcleo — Jornalismo Esportivo UFSC

Portal de jornalismo esportivo produzido por estudantes do curso de Jornalismo da Universidade Federal de Santa Catarina.

Construído com **Astro** + **Tailwind CSS**, pronto para deploy na **Vercel**.

## Stack

- [Astro 5](https://astro.build) — framework estático
- [Tailwind CSS 3](https://tailwindcss.com) — estilização
- Content Collections — reportagens em Markdown
- Deploy: Vercel (static)

## Instalação local

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/nucleo-ufsc.git
cd nucleo-ufsc

# Instalar dependências
npm install

# Gerar imagens placeholder (logos Copa 2026 + capas)
node scripts/generate-placeholders.mjs

# Ou, se já tiver as logos na raiz do projeto:
node scripts/copy-logos.mjs

# Servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:4321](http://localhost:4321).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `/dist` |
| `npm run preview` | Preview do build local |

## Como criar uma nova reportagem

1. Crie um arquivo `.md` em `src/content/reportagens/`:

```markdown
---
title: "Título da reportagem"
date: 2026-05-30
author: "Nome do Autor"
category: "Futebol"
coverImage: "/images/sua-capa.png"
excerpt: "Resumo curto para cards e SEO."
featured: false
---

Conteúdo da reportagem em Markdown...
```

2. **Categorias válidas:** `Copa Feminina 2027` · `Futebol` · `Esportes` · `Especial`

3. Adicione a imagem de capa em `public/images/`.

4. A reportagem ficará disponível em `/reportagens/[slug]` (slug = nome do arquivo sem `.md`).

## Estrutura do projeto

```
src/
├── components/       # Header, Footer, GroupsSlider, ArticleCard...
├── content/
│   └── reportagens/  # Arquivos .md das reportagens
├── data/             # Dados dos grupos Copa 2026, nav links
├── layouts/          # BaseLayout.astro
├── pages/            # Rotas do site
└── styles/           # global.css + Tailwind
public/
├── logos/copa2026/   # Logos das seleções (PNG)
└── images/           # Capas e assets
```

## Slider de Grupos — Copa 2026

O componente `GroupsSlider.astro` usa **scroll-snap nativo** (sem bibliotecas externas) com navegação por setas e indicadores. Substitua os placeholders em `public/logos/copa2026/` pelos logos oficiais.

## Deploy na Vercel

### Via GitHub (recomendado)

1. Faça push do projeto para um repositório GitHub.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. A Vercel detecta Astro automaticamente. Configurações padrão:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

### Via CLI

```bash
npm i -g vercel
vercel
```

O arquivo `vercel.json` já está configurado para Astro.

## Identidade visual

| Token | Valor |
|-------|-------|
| Preto base | `#0a0a0a` |
| Dourado acento | `#C9A227` |
| Branco texto | `#f5f5f0` |
| Headlines | Barlow Condensed Bold |
| Corpo | DM Sans |
| Destaques | Playfair Display |

## Licença

Projeto acadêmico — UFSC. Todos os direitos reservados.
