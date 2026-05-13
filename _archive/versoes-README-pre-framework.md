# Guia de versões

Este projeto roda múltiplas versões de páginas em paralelo pra A/B testing visual e iteração rápida.

## Estrutura

```
tonluccas_launchOS/
├── copy/                       FONTE DA VERDADE — nunca editar
│   ├── paginaVendas/           copy do workshop
│   └── paginaObrigado/         copy da página de obrigado
├── rules/
│   └── copy-anti-ai.md         REGRAS OBRIGATÓRIAS pra qualquer microcopy nova
├── fotos/                      assets do Ton (logo + retratos)
├── cases/                      provas sociais (Caça, Yang, Nathalia)
├── ds-reference/               design systems de referência
│   └── ds_green-museum.html    DS atual da v1
├── versoes/                    AQUI vivem as versões
│   ├── pagina-vendas/
│   │   ├── v1/                 versão 1 (green-museum)
│   │   ├── v2/                 versão 2 (futura — outro DS)
│   │   └── ...
│   └── pagina-obrigado/
├── src/
│   ├── pages/
│   │   ├── index.astro         diretório que lista TODAS as versões
│   │   └── pagina-vendas/
│   │       ├── v1.astro        rota fina que importa /versoes/.../v1/page.astro
│   │       └── v2.astro
│   ├── layouts/
│   │   └── Base.astro          layout compartilhado (head, OG, GTM, fontes)
│   ├── lib/
│   │   └── tracking.ts         helpers de tracking compartilhados
│   └── styles/
│       └── global.css          tokens base + Tailwind import
├── astro.config.mjs
├── tsconfig.json               aliases: @layouts @lib @styles @versoes @fotos
└── package.json
```

## Como criar uma nova versão

Exemplo: criar V2 da página de vendas com um design system diferente.

### 1. Copiar a v1 como ponto de partida

```bash
cp -r versoes/pagina-vendas/v1 versoes/pagina-vendas/v2
```

### 2. Criar a rota Astro

Crie `src/pages/pagina-vendas/v2.astro`:

```astro
---
import Page from '@versoes/pagina-vendas/v2/page.astro';
---

<Page />
```

### 3. Registrar no diretório

Edite `src/pages/index.astro` e adicione a v2 dentro da array `versions`:

```js
{
  v: 'v2',
  href: '/pagina-vendas/v2',
  label: 'V2 — [nome do DS] (descrição curta)',
  status: 'em construção',
}
```

### 4. Customizar com o novo design system

Cada versão é independente. Você pode:

- **Trocar paleta**: editar tokens CSS dentro dos componentes (ex: `bg-[#XXXXXX]`)
- **Trocar tipografia**: editar o `<link>` do Google Fonts no `Base.astro` ou criar um layout próprio em `versoes/pagina-vendas/v2/_layout.astro`
- **Reorganizar seções**: editar `versoes/pagina-vendas/v2/page.astro` (a ordem dos componentes)
- **Mudar componentes**: cada `.astro` em `v2/` é independente da v1 — pode reescrever do zero
- **Tokens próprios**: criar `versoes/pagina-vendas/v2/styles.css` e importar no page.astro

### 5. Testar

```bash
npm run dev
```

Acesse http://localhost:4321/pagina-vendas/v2

## Convenções obrigatórias

### Mobile-first sempre
- Tipografia base mobile, `md:`/`lg:` pra escalar
- Touch targets mínimos 48px
- CTA primário sempre visível em mobile
- Sticky CTA bar abaixo do hero

### Copy
- A copy fonte está em `/copy/paginaVendas/` — **nunca alterar sem permissão do cliente**
- Microcopy nova (botões, alt text, error messages) **deve passar pelo checklist** de `/copy/criativos/_config/reference/copy-anti-ai.md`
- Lista de palavras proibidas, padrões anti-IA, vocabulário marketeiro — tudo lá

### Path aliases (do tsconfig.json)
- `@layouts/*` → `src/layouts/*`
- `@lib/*` → `src/lib/*`
- `@styles/*` → `src/styles/*`
- `@versoes/*` → `versoes/*`
- `@fotos/*` → `fotos/*`

### Tracking
- Usar `import { trackEvent } from '@lib/tracking'`
- CTAs do checkout disparam `begin_checkout` com `cta_location` específico
- Não criar lógica nova de tracking, sempre usar o helper

### Stack lock
- Astro 5.x + Tailwind 4 + TypeScript
- Sem dependências adicionais sem motivo forte
- Componentes Astro `.astro` (sem React/Vue)
- Iconify Solar para ícones

## O que NÃO duplicar entre versões

- `Base.astro` (layout compartilhado)
- `tracking.ts` (helpers compartilhados)
- `/copy/`, `/rules/`, `/cases/`, `/fotos/` (assets compartilhados)
- `package.json`, `astro.config.mjs`, `tsconfig.json`

## Recursos disponíveis

| Recurso | Path | Descrição |
|---|---|---|
| Logo workshop | `@fotos/logoWorkshop.svg` | Tipográfico em SVG, branco — cuidado com fundo |
| Foto hero conceitual | `@fotos/ton-hero-image.png` | 3359x2760, rosto fragmentado, fundo preto |
| Foto retrato palco | `@fotos/ton-portrait-3.png` | 2622x3872, vertical, palco |
| Caso 1 | `cases/Caça Montans/caca.jpg` | 1080x1080 quadrada |
| Caso 2 | `cases/Yang Mendes/yang.jpg` | 826x826 quadrada |
| Caso 3 | `cases/Nathalia/nathalia.jpg` | 923x923 quadrada |

## Variáveis de ambiente

Definidas em `.env.example` — copie pra `.env.local` quando tiver os IDs reais:

- `PUBLIC_GTM_ID` — Google Tag Manager
- `PUBLIC_GA4_ID` — Google Analytics 4 (fallback se não usar GTM)
- `PUBLIC_META_PIXEL_ID` — Meta Pixel (fallback)
- `PUBLIC_CHECKOUT_STANDARD_URL` — URL Kiwify Standard
- `PUBLIC_CHECKOUT_VIP_URL` — URL Kiwify VIP

## Workflow recomendado

1. Antes de codar: ler `/copy/paginaVendas/Workshop Marca Pessoal Definitiva.md` + `/copy/criativos/_config/reference/copy-anti-ai.md`
2. Copiar v1 como base
3. Trabalhar componente por componente, validando no localhost a cada mudança
4. Testar mobile (390-500px), tablet (768px), desktop (1024px+)
5. Validar acessibilidade básica (contraste, touch targets, alt text)
6. Pedir review humano antes de publicar
