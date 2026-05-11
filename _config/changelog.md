# Changelog de versões

Cada página tem suas seções. Forks viram seções novas com hipótese e métrica. Refinamentos in-place vão como bullets datados dentro da seção da versão.

Source of truth do estado atual: `_config/versions.json`. Este arquivo é o histórico narrativo.

---

## mpd

### v3 — 2026-05-10

**Forked from:** v2
**Label:** Desktop responsive — hero 2-col, header em right col, FiveSituations 2x2, Promise 3-line, ScheduleDays Day1+Day2 lado-a-lado
**Hipótese:** Layout adaptado pra PC reduz fricção de leitura e parecer "celular esticado" aumenta autoridade visual + conversion rate em traffic pago
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- 2026-05-11 — Todos os CTAs fora da seção Pricing passaram a apontar pra `#pricing` em vez de ir direto pro Kiwify. Apenas os 2 botões dentro do Pricing (Standard R$47 + VIP R$297) levam pro checkout. Tracking: `begin_checkout` agora só dispara nos botões reais de checkout; CTAs intra-page disparam `select_promotion` com `promotion_name: pricing-section` e `cta_location: <hero|problem|deliverables|urgency|forwhom|situations|schedule|anchor|about|sticky>`. Reason: forçar usuário a ver Standard vs VIP antes de pagar, em vez de mandar todo mundo direto pro Standard.
- 2026-05-11 — Refino de UX do scroll-to-pricing. (1) Smooth scroll customizado via `src/lib/smoothScroll.ts` — duração fixa 750ms com easeInOutCubic, independente da distância (CSS `scroll-behavior: smooth` nativo era visualmente rápido demais em scrolls longos do mobile). (2) Âncora dos 10 CTAs migrou de `#pricing` (topo da section) pra `#pricing-cta-standard` (id no botão "Garantir Ingresso Standard"). Combinado com `scroll-margin-top: 50vh` no botão, ele aterrissa no meio do viewport — usuário vê CTA + features acima sem precisar rolar. Respeita `prefers-reduced-motion`.

### v2 — 2026-05-09

**Forked from:** v1
**Label:** Headline com ponto final
**Mudança:** Adicionado ponto final após "lucrativa" na headline do hero, separando a declaração principal do qualifier itálico "em apenas 2 dias."
**Hipótese:** Decisões separadas — ponto fecha a declaração principal como promessa decisiva, e "em apenas 2 dias." vira reforço separado
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- (vazio)

### v1 — 2026-05-09

**Forked from:** — (versão inicial)
**Label:** Editorial Green Museum (escuro no hero)
**Hipótese:** Paleta editorial clara contrasta com hero escuro pra autoridade premium
**Métrica:** begin_checkout rate via tracking.ts

**Refinamentos:**
- (vazio — adicione bullets datados aqui quando refinar in-place)
