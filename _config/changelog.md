# Changelog de versões

Cada página tem suas seções. Forks viram seções novas com hipótese e métrica. Refinamentos in-place vão como bullets datados dentro da seção da versão.

Source of truth do estado atual: `_config/versions.json`. Este arquivo é o histórico narrativo.

---

## mpd

### v6 — 2026-05-13

**Forked from:** v5
**Label:** Standard-only com promessa v3 (sem Instagram máquina de vendas)
**Mudança:** H1 do Hero revertida pra wording original da v3 — "Construa sua marca pessoal forte, original e lucrativa em apenas 2 dias." Tudo o mais idêntico à v5 (single-card Pricing, 10 CTAs diretos pro Kirvano, tracking begin_checkout, FAQ sem VIP). Único diff vs v5 é a primeira dobra.
**Hipótese:** Isolar o efeito da promessa do hero. v6 mantém o setup Standard-only/CTAs diretos da v5 mas volta a promessa original da v3. Comparar v5 vs v6 mede o impacto puro da copy "Instagram como máquina de vendas", controlando o restante da página.
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- (vazio)

### v5 — 2026-05-13

**Forked from:** v4
**Label:** Standard-only — todos os CTAs direto pro checkout Kirvano
**Mudança:**
- `Pricing.astro` virou single-card centered (`max-w-xl mx-auto`). Removidos: bloco VIP inteiro, array `vipExtras`, constante `checkoutVipUrl`, handler de tracking `pricing-vip`, `<style is:global>` do frame animado VIP. Botão Standard ganhou estilo verde forte (`bg-[#D4F268]`) que antes era exclusivo do VIP. Header copy ajustado: "Workshop ao vivo, 2 dias de construção da sua marca pessoal. Lote 01 promocional, vagas limitadas."
- Os 10 CTAs intra-page (Hero, ProblemDiagnosis, Deliverables, Urgency, ForWhom, FiveSituations, ScheduleDays, Anchor60k, About, StickyCTA) passaram a apontar `href={checkoutStandardUrl}` direto pro Kirvano. Cada frontmatter recebeu a constante `checkoutStandardUrl` lendo `PUBLIC_CHECKOUT_STANDARD_URL` com fallback hardcoded.
- Tracking: os 10 CTAs trocaram `trackEvent('select_promotion', {...})` por `trackEvent('begin_checkout', { currency: 'BRL', value: 47, cta_location, items: [{ item_id: 'workshop-mp-definitiva-standard', ... }] })`. Agora qualquer botão da página dispara `begin_checkout` — antes só os 2 dentro do Pricing disparavam.
- `FAQ.astro`: 3 perguntas mencionavam o Ingresso VIP (gravação inclusa, preço R$ 297, gravação inclusa no VIP). Reescrito pra remover qualquer referência a VIP — agora só fala do Standard R$ 47 e da gravação como compra separada.

**Hipótese:** Single-tier reduz fricção — eliminar VIP elimina paradoxo da escolha e CTAs diretos reduzem etapas até o checkout, aumentando conversão em tráfego frio. Sacrifica AOV do VIP em troca de volume de pixel/audience pra o funil de retargeting.
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- (vazio)

### v4 — 2026-05-11

**Forked from:** v3
**Label:** Hero promise — Instagram como máquina de vendas
**Mudança:** H1 do Hero substituída. De "Construa sua marca pessoal forte, original e lucrativa em apenas 2 dias." para "Transforme o seu Instagram em uma máquina de vendas e construa uma marca forte, original e lucrativa, em 2 dias." Estilo preservado (itálico stone-400 no reforço temporal "em 2 dias.").
**Hipótese:** [hipótese assumida — confirme] Trocar a promessa de marca pessoal genérica por "Instagram como máquina de vendas" conecta diretamente com o pain point comercial (vendas) e amplia relevância pra tráfego frio Meta Ads, vs a promessa anterior focada só em atributos de marca (forte/original/lucrativa).
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- 2026-05-11 — Barra de progresso do Lote 01 subiu de 42% pra 77% em Hero (label, fill, ticker marquee) E em Pricing (label "Lote 01 · 77% vendidos" + fill da barra do card Standard). Aumenta pressão de escassez na primeira dobra e no momento da decisão de compra.

### v3 — 2026-05-10  *(PINNED como `default` desde 2026-05-11 — é o que `tonluccas.com.br/` serve)*

**Forked from:** v2
**Label:** Desktop responsive — hero 2-col, header em right col, FiveSituations 2x2, Promise 3-line, ScheduleDays Day1+Day2 lado-a-lado
**Hipótese:** Layout adaptado pra PC reduz fricção de leitura e parecer "celular esticado" aumenta autoridade visual + conversion rate em traffic pago
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- 2026-05-11 — Barra de progresso do Lote 01 subiu de 42% pra 77% em Hero (label, fill, ticker marquee) E em Pricing (label "Lote 01 · 77% vendidos" + fill da barra do card Standard). Espelha o ajuste feito na v4 — sincroniza a página de prod (`/`) com a escassez real do lote.
- 2026-05-11 — **Pinned como `default` de produção.** Introduzido o campo `mpd.default` em `versions.json` (separado de `mpd.latest`) + `default_pinned: true`. `/` agora serve v3 via import direto em `src/pages/index.astro`. `latest` continua sendo o fork mais novo (v4) — semântica de "newest fork" preservada. Regra: futuras versões (v5, v6, ...) atualizam `latest` mas NÃO atualizam `default`. Só demover v3 com pedido explícito do user. v4 mantida acessível em `/mpd/v4` como variante de A/B. Reason: decisão do user — fixar v3 como página oficial enquanto novos forks rodam como variantes isoladas.
- 2026-05-11 — Todos os CTAs fora da seção Pricing passaram a apontar pra `#pricing` em vez de ir direto pro Kiwify. Apenas os 2 botões dentro do Pricing (Standard R$47 + VIP R$297) levam pro checkout. Tracking: `begin_checkout` agora só dispara nos botões reais de checkout; CTAs intra-page disparam `select_promotion` com `promotion_name: pricing-section` e `cta_location: <hero|problem|deliverables|urgency|forwhom|situations|schedule|anchor|about|sticky>`. Reason: forçar usuário a ver Standard vs VIP antes de pagar, em vez de mandar todo mundo direto pro Standard.
- 2026-05-11 — Refino de UX do scroll-to-pricing. (1) Smooth scroll customizado via `src/lib/smoothScroll.ts` — duração fixa 750ms com easeInOutCubic, independente da distância (CSS `scroll-behavior: smooth` nativo era visualmente rápido demais em scrolls longos do mobile). (2) Âncora dos 10 CTAs migrou de `#pricing` (topo da section) pra `#pricing-cta-standard` (id no botão "Garantir Ingresso Standard"). Combinado com `scroll-margin-top: 50vh` no botão, ele aterrissa no meio do viewport — usuário vê CTA + features acima sem precisar rolar. Respeita `prefers-reduced-motion`.
- 2026-05-11 — Refino do card Pricing no mobile. (1) Âncora dos 10 CTAs migrou de `#pricing-cta-standard` (botão) pra `#pricing-standard` (bloco do preço R$ 47) com `scroll-margin-top: 35vh` — aterrissa de forma que preço fica acima do meio do viewport e CTA já visível dentro do fold. (2) Reorganização visual: badge "Lote 01" (Standard) e "Mais Escolhido" (VIP) saíram do topo isolado e ficaram inline com o título do card, à direita — economiza ~50px de altura por card. (3) Paddings e gaps compactados no mobile: `p-8 → p-6` no card, `mb-8/mb-10 → mb-6` nas descrições/listas, `space-y-4 → space-y-3` nas features. Desktop intacto via `md:` prefixes.

### v2 — DELETADA em 2026-05-11

Versão removida fisicamente do repo (pastas `versoes/mpd/v2/` + `src/pages/mpd/v2.astro`) por decisão do user. URL `/mpd/v2` agora cai em `src/pages/404.astro` que redireciona pra `/` (v3).

**Histórico (preservado pra contexto):** Forked from v1. Label: "Headline com ponto final". Hipótese: decisões separadas — ponto fecha a declaração principal como promessa decisiva e "em apenas 2 dias." vira reforço separado.

### v1 — DELETADA em 2026-05-11

Versão removida fisicamente do repo (pastas `versoes/mpd/v1/` + `src/pages/mpd/v1.astro`) por decisão do user. URL `/mpd/v1` agora cai em `src/pages/404.astro` que redireciona pra `/` (v3).

**Histórico (preservado pra contexto):** Versão inicial (Editorial Green Museum, escuro no hero). Hipótese: paleta editorial clara contrasta com hero escuro pra autoridade premium.
