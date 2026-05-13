# Template de prompt pra novos terminais Claude

Copie e adapte um dos blocos abaixo quando abrir outro terminal Claude pra criar uma nova versão.

---

## Template 1 — Nova versão da página de vendas

```
Você vai criar a versão V<NUMERO> da página de vendas do Workshop Marca
Pessoal Definitiva. Estamos em /Users/bernardoxlima/Desktop/tonluccas_launchOS.

Antes de começar, leia OBRIGATORIAMENTE:
1. /versoes/README.md — guia técnico do projeto
2. /copy/paginaVendas/Workshop Marca Pessoal Definitiva.md — copy fonte
3. /copy/paginaVendas/ofertaWorkshop.md — copy de pricing/oferta
4. /copy/criativos/_config/reference/copy-anti-ai.md — regras obrigatórias de microcopy

Stack: Astro 5 + Tailwind 4 + TypeScript. Mobile-first.
Dev server: `npm run dev` (localhost:4321).
A versão atual de referência (V1) está em /versoes/pagina-vendas/v1/ e roda
em localhost:4321/pagina-vendas/v1.

Briefing pra esta nova versão:
- Design system: <DESCRIÇÃO OU PATH DO DS>
- Diferencial visual: <O QUE QUER MUDAR — paleta, tipografia, layout, vibe>
- Hipótese de conversão: <O QUE ACHA QUE VAI CONVERTER MELHOR>
- Manter: <O QUE NÃO PODE MEXER>

Sua tarefa:
1. Copiar /versoes/pagina-vendas/v1/ para /versoes/pagina-vendas/v<NUMERO>/
2. Criar /src/pages/pagina-vendas/v<NUMERO>.astro (importa o page.astro
   da nova versão)
3. Atualizar /src/pages/index.astro adicionando a nova versão na lista
4. Customizar cada componente com o novo design system
5. Validar mobile (390px), tablet (768px), desktop (1440px) no Chrome DevTools
6. Garantir que todos os CTAs disparam begin_checkout via @lib/tracking

NÃO mexa em:
- /versoes/pagina-vendas/v1/ (versão atual em produção)
- /copy/, /rules/, /cases/, /fotos/ (fontes da verdade)
- Base.astro, tracking.ts (compartilhados)
- package.json, astro.config.mjs (configs)

Path aliases (use sempre):
- @layouts/* @lib/* @styles/* @versoes/* @fotos/*

Quando terminar:
- Confirme que localhost:4321/pagina-vendas/v<NUMERO> retorna 200
- Tire screenshots mobile + desktop pra validação
- Liste o que mudou em relação à V1 (paleta, tipografia, estrutura)
```

---

## Template 2 — Nova versão da página de obrigado

```
Você vai criar a V<NUMERO> da página de obrigado do Workshop Marca Pessoal
Definitiva. Estamos em /Users/bernardoxlima/Desktop/tonluccas_launchOS.

Antes de começar, leia:
1. /versoes/README.md — guia técnico do projeto
2. /copy/paginaObrigado/ — copy da página (se existir)
3. /copy/criativos/_config/reference/copy-anti-ai.md — regras de microcopy

Stack: Astro 5 + Tailwind 4 + TypeScript. Mobile-first.

Sua tarefa:
1. Criar /versoes/pagina-obrigado/v<NUMERO>/ com os componentes
2. Criar /src/pages/pagina-obrigado/v<NUMERO>.astro
3. Atualizar /src/pages/index.astro adicionando a página
4. Estrutura mínima esperada:
   - Confirmação visual da compra (checkmark, "Obrigado, [Nome]!")
   - Próximos passos (link Zoom, calendário, grupo oficial)
   - Reforço de valor (lembrar do que foi adquirido)
   - FAQ pós-compra (como acessar, e se eu não conseguir)
   - Tracking: disparar Purchase event via @lib/tracking ao carregar

Briefing visual:
- Design system: <PATH DO DS OU DESCRIÇÃO>
- Tom: <celebratório, sóbrio, etc>
```

---

## Template 3 — Variação focada em copy/CTA

```
Você vai criar uma variação V<NUMERO> da página de vendas focada em testar
[copy específica / pricing diferente / CTA diferente]. Estamos em
/Users/bernardoxlima/Desktop/tonluccas_launchOS.

Leia /versoes/README.md antes de começar.

Manter o design system green-museum da V1. Mudar APENAS:
- <DETALHE EXATO: ex. headline do hero, ordem dos blocos, copy do CTA, pricing>

Não mexer em layout, paleta, tipografia.

Tarefa:
1. cp -r /versoes/pagina-vendas/v1 /versoes/pagina-vendas/v<NUMERO>
2. Criar rota /src/pages/pagina-vendas/v<NUMERO>.astro
3. Atualizar /src/pages/index.astro
4. Aplicar APENAS a mudança especificada
5. Validar mobile + desktop

Documente no commit ou em comentário: o que mudou, qual a hipótese,
métrica que vai medir.
```

---

## Dicas pra dar ao próximo terminal

1. **Sempre comece pelos READMEs** — `/versoes/README.md` tem o contexto técnico, este arquivo tem os templates de prompt

2. **Não retrabalhe o que já existe** — Base.astro, tracking, layout, configs já estão prontos. Apenas reuse.

3. **Mobile-first é regra, não preferência** — 80%+ do tráfego de Meta Ads é mobile. Sempre testar em 390px primeiro.

4. **Copy é sagrada** — texto do cliente em `/copy/` não se altera. Microcopy nova passa pelo checklist anti-IA em `/copy/criativos/_config/reference/copy-anti-ai.md`.

5. **Cada versão é independente** — pode usar tipografia diferente, paleta diferente, layout diferente. O que compartilham é apenas a infraestrutura (Base, tracking).

6. **Validar visualmente sempre** — Chrome DevTools MCP serve pra screenshots. Mobile 390px + Desktop 1440px no mínimo.

7. **Diretório index lista tudo** — `/src/pages/index.astro` é o teu painel pra abrir as versões e comparar visualmente. Sempre atualize quando criar uma nova.
