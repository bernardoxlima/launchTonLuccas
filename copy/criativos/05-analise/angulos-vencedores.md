# Ângulos Vencedores — Inteligência de Copy (criativos AI `tl-morno-*`)

> Cruzamento entre performance de vendas (Meta Ads, maio/2026) e o ângulo/frontmatter de cada componente (hooks, bodies, CTAs, full scripts).
> Objetivo: extrair a fórmula de copy que mais vendeu e transformar em recomendação acionável para novos criativos.

---

## 1. Metodologia e ressalvas (LEIA ANTES DE TIRAR CONCLUSÃO)

**Fonte de vendas:** anúncios AI (`tl-morno-*`) que geraram venda em maio/2026, com CPA reportado.

**Como agreguei:** cada criativo modular tem id `NC5_h{XX}_b{XX}_cta{XX}`. Somei as vendas de cada componente em todos os criativos onde ele aparece. Full scripts (`f0X`) são criativos completos e contam separadamente.

**Tamanho da amostra — sinal direcional, não lei:**
- O volume total de vendas é baixo (dezenas, não centenas). Cada conclusão aqui é uma **hipótese com viés de confirmação a testar**, não uma verdade estatística. Diferença de 1-2 vendas entre componentes está dentro do ruído.
- **Anomalia h03 (`NC5_h03_b03_cta02` → 3 vendas, CPA R$4,62):** só R$13,85 gastos. CPA absurdamente baixo é **sorte de amostra pequena**, não eficiência real. Trato h03 como **não confiável para escala** — ele entra na contagem bruta mas é marcado e descontado nas conclusões.
- **Atribuição imperfeita:** vendas são atribuídas ao criativo pelo Meta (modelo de atribuição da plataforma), não a teste isolado controlado. Hooks vencedores aparecem combinados com bodies/CTAs específicos, então parte do crédito do hook pode ser do body que veio junto (colinearidade). Onde dá, separo o efeito.
- **Confound estrutural:** cta02 aparece na esmagadora maioria dos criativos modulares produzidos — então ele "vence" em parte por **volume de exposição**, não necessariamente por mérito de mecanismo. Sinalizo isso.

**Vocabulário de análise** (de `_config/reference/hormozi.md` e `copy-anti-ai.md`):
- Hook = primeira coisa vista/ouvida (80% do esforço). Body = "meat" que cumpre o hook. CTA = soletrar a próxima ação.
- Hook types: question, statement, conditional, command, narrative, label, list.
- Régua anti-AI: voz de pessoa real, conectivos, zero antítese de VSL ("não é X, é Y").

---

## 2. Hook × ângulo × vendas (criativos modulares NC5)

| Hook | Ângulo | hook_type | Energia | Vendas (agregado) | Detalhe dos criativos |
|------|--------|-----------|---------|-------------------|-----------------------|
| **h02** | **oferta-direta** | statement | direto-confiante | **8** ⭐ | b01_cta02 (3) + b02_cta02 (3) + b02_cta01 (1) + b03_cta02 (1) |
| **h01** | **ancoragem** (de preço) | question | curiosidade-provocativa | **6** ⭐ | b02_cta02 (5 — melhor AI single) + b03_cta02 (1) |
| h03 | escassez | statement | firme | 3 ⚠️ | b03_cta02 (3) — **ANOMALIA, descartar p/ escala** |
| h09 | novidade | narrative | entusiasmado-contido | 3 | b01_cta01 (2) + b03_cta01 (1) |
| h05 | urgência | statement | direto-confiante | 2 | b01_cta01 (1) + b01_cta02 (1) |
| h10 | convite | conditional | acolhedor-firme | 2 | b02_cta02 (2) |
| h04 | novidade | statement | entusiasmado-contido | 1 | b01_cta03 (1) |
| h06 | comando | command | firme | 1 | b01_cta02 (1) |
| h08 | oferta-direta | question | curiosidade-provocativa | 1 | b01_cta03 (1) |
| h07 | oferta-direta | statement | — | 0 (não rodou nos dados) | — |

### Leitura

**Ângulo de hook que mais vendeu: oferta-direta + ancoragem de preço.** Os dois topos (h02 = 8, h01 = 6) são os dois hooks que colocam **a oferta e o preço na frente**:
- h01: *"Quanto você pagaria... E se eu te dissesse que vou fazer por menos de cem reais?"* — ancoragem (puxa o valor alto na mente, derruba pro preço baixo).
- h02: *"O ingresso... está menos de cem reais. São dois dias ao vivo comigo..."* — oferta-direta crua, sem rodeio.

Juntos, **oferta-direta + ancoragem respondem por 14+1 das vendas modulares** (h02 8 + h01 6). É disparado o cluster vencedor. Ângulos mais "suaves" (convite, comando, novidade isolada) ficam na cauda com 1-2 cada.

**hook_type:** os dois campeões cobrem os dois formatos verbais que funcionam neste público most-aware:
- **statement** (h02): afirmação direta da oferta — vence em volume bruto (8).
- **question** (h01): pergunta de ancoragem — vence em eficiência (o single criativo de maior conversão, 5 vendas, CPA R$31,75).

Conditional (h10) e narrative (h09) performam medianamente (2-3). Command (h06) fica fraco (1). **Para most-aware, pergunta de ancoragem e afirmação de oferta batem os formatos narrativos** — faz sentido: quem já conhece a oferta não quer história, quer o número.

---

## 3. Body × ângulo × vendas

| Body | Nome | Ângulo de venda | Energia | Vendas (agregado) |
|------|------|-----------------|---------|-------------------|
| **b02** | melhor-oferta | deal-driven + oferta irresistível + resultado + prática em tempo real | direto-confiante | **14** ⭐ |
| **b01** | construção-prática | guia prático + resultado (marca forte/original/lucrativa) + mão na massa | guia-confiante | **9** |
| b03 | novidade-urgência | primeira vez + urgência natural + resultado + mão na massa | entusiasmado-contido | 6 (inclui 3 da anomalia h03) |

### Leitura

**b02 é o body campeão (14 vendas).** O ângulo dele é **deal-driven**: abre com *"provavelmente a melhor oferta que eu já fiz"* e diferencia de curso gravado (*"não vai comprar uma aula pra assistir depois e esquecer... vai construir comigo, com tarefas e direção em tempo real"*). Ele converte porque **reforça o mesmo eixo dos hooks vencedores** (oferta/preço) e ainda mata a objeção "é só mais um curso gravado". Casa nativamente com h01 (ancoragem) e h02 (oferta-direta) — e é exatamente essa combinação que produziu o melhor single (`h01_b02_cta02`, 5 vendas).

**b01 (9 vendas) é o segundo melhor e o mais versátil** — aparece com 5 hooks diferentes. Ângulo de **construção prática / mão na massa** (guia o passo a passo, "você não vai só assistir"). É o body "seguro" que entrega resultado tangível. Funciona como coringa.

**b03 (6, mas 3 são a anomalia h03 →** efetivos ~3). Ângulo de **novidade + urgência natural**. Descontando o ruído, é o body mais fraco dos três. Novidade ("nunca fiz antes") vende menos que deal direto neste público.

**Conclusão de body:** o público most-aware responde a **prova de valor da oferta (deal-driven, b02)** acima de novidade. O resultado tangível + a quebra da objeção "curso gravado" é o que carrega a conversão.

---

## 4. CTA × mecanismo × vendas

| CTA | Nome | Mecanismo | Vendas (agregado) |
|-----|------|-----------|-------------------|
| **cta02** | empurra-vip | ação direta + upsell VIP (12 meses + materiais + Q&A exclusivo) | **20** ⭐ |
| cta01 | escassez | escassez de vagas + lote vira / preço sobe | 5 |
| cta03 | deal-urgência | âncora preço (<100) + vagas limitadas + lote sobe + data fixa | 2 |

### Leitura — com ressalva forte

**cta02 domina (20 vendas), MAS com confound de volume.** cta02 é o CTA "default" que foi colado na maioria dos criativos modulares — então parte da vitória é exposição, não mecanismo. Ainda assim, há sinal real: ele está em **todos os top performers** (`h01_b02_cta02`, `h02_b01_cta02`, `h02_b02_cta02`, `h10_b02_cta02`). O mecanismo dele é o único que **adiciona ascensão de ticket (upsell VIP)** em vez de só empurrar pro clique — ou seja, mesmo quando a venda é creditada ao ingresso simples, o CTA que oferece o VIP não atrapalha e provavelmente ajuda a qualificar.

cta01 (escassez de vagas, 5) e cta03 (deal+data, 2) ficam atrás. **Escassez pura converte menos que ação-direta-com-upsell** neste público.

**Conclusão de CTA:** padronizar em **cta02 (ação direta + upsell VIP)** como base, e só testar cta01/cta03 como variantes isoladas. O mecanismo de "clica agora + oferece o upgrade" é o que acompanha os vencedores.

---

## 5. Full scripts vencedores — ângulo de abertura

Full scripts são criativos completos. Ranking por vendas:

| Full | Vendas | Ângulo de ABERTURA (hook) | Tese de venda (body) |
|------|--------|---------------------------|----------------------|
| **f01** | **5** ⭐ (4 lead3 + 1 lead2) | *"Imagine abrir o Instagram e saber exatamente o que postar"* — **visão/alívio do travamento** | Você não está travado por falta de ideia, mas por não ter marca clara. + **ancoragem R$60mil → R$100** |
| f02 | 2 | *"Se volume de conteúdo fosse suficiente, a maioria já teria"* — **falsa crença / objeção** | Construção de marca é a base do conteúdo; postar sem posicionamento não vende |
| f04 | 2 | *"Estamos nos últimos ingressos... se sua marca não é conhecida, ela não é desejada"* — **escassez + injustiça (o pior tecnicamente vence)** | Resolvo isso em 2 dias, marca a partir da sua essência |
| f08 | 2 | *"Se você deixar pra depois, pode ficar de fora"* — **escassez/perda** | + **ancoragem R$60mil → R$100** |
| f06 | 1 | *"Você posta mas o engajamento é menos do que deseja"* — **dor do espelho** | Copiar formato não funciona; saia com formato validado |
| f07 | 1 | *"Imagina construir uma marca que finalmente parece com você"* — **visão/identidade** | Parar de performar versão estranha de si; marca a partir da essência |
| f05 | 1 | *"Vários empresários me pagam mais de 60 mil pra construir a marca deles"* — **ancoragem de preço pura** | Mesmo raciocínio por menos de R$100; método impossível de copiar |
| f03 | 0 (não nos dados) | *"O mais conhecido sempre vence o melhor"* — injustiça | — |
| f09 | 0 | descrição seca do workshop | — |
| f10 | 0 | *"O problema de ficar de fora..."* — perda + ancoragem | — |

### Leitura

**O full script campeão (f01) abre com VISÃO + diagnóstico do travamento, e fecha com ANCORAGEM de R$60mil → R$100.** Essa combinação — *"imagine saber o que postar"* (alívio futuro) → *"você não está travado por falta de ideia, mas por não ter marca"* (reframe do problema) → *"clientes pagam +60 mil, você entra por menos de 100"* (ancoragem) — é a estrutura de copy completa de maior conversão de toda a base.

Padrões dos full scripts que venderam (descontando ruído):
1. **Ancoragem R$60mil → R$100 aparece em f01, f05, f08** (e f10) — é o elemento de valor mais recorrente nos vencedores. Repete o mesmo eixo dos hooks modulares campeões (h01/h02). **Ancoragem de preço é o fio condutor da base inteira.**
2. **Abertura por VISÃO/alívio (f01, f07)** — *"imagine abrir o Instagram e saber o que postar"* / *"uma marca que parece com você"* — vende mais que abertura por escassez seca (f08, f09).
3. **Reframe do problema (f01, f02, f06)** — *"você não está travado por falta de ideia / volume não basta / copiar formato não funciona"* — ataca a falsa crença antes de oferecer a solução.
4. **Dor de copiar formato** aparece em f01, f06, f07, f10 — é a dor central do público e ressoa.

Nota anti-AI: f03 abre com *"O mais conhecido sempre vence o melhor"* e f04 com a lógica "pessoas piores tecnicamente têm mais resultado" — são **dicotomias comparativas** (padrão 17 da régua anti-AI, sabor VSL). f03 não vendeu nos dados; f04 vendeu via escassez + essência, não via a dicotomia. Sinal fraco de que o ângulo "injustiça comparativa" puro **não é o que mais converte** — a visão + ancoragem ganham.

---

## 6. FÓRMULA VENCEDORA (o padrão a replicar)

Cruzando tudo, o padrão de maior conversão é:

```
HOOK   → ancoragem de preço OU oferta-direta, em formato question/statement
         (h01 "quanto você pagaria... menos de cem?" / h02 "está menos de cem, 2 dias comigo")
   +
BODY   → deal-driven (b02 "melhor oferta") que entrega resultado tangível
         (marca forte/original/lucrativa) E mata a objeção "é só curso gravado"
         (construir junto, ao vivo, tarefas, direção em tempo real)
   +
CTA    → ação direta + upsell VIP (cta02): "clica agora antes do lote virar +
         se quiser a experiência completa, pega o VIP"
```

**Para full scripts**, a espinha vencedora (f01):
```
VISÃO/alívio ("imagine abrir o Instagram e saber o que postar")
 → REFRAME do problema ("você não está travado por falta de ideia, e sim de marca")
 → PROMESSA (marca forte/original/lucrativa a partir da SUA essência, 2 dias ao vivo)
 → ANCORAGEM (clientes pagam +60 mil; você entra por menos de 100)
 → CTA direto ("clica e garante antes que acabe")
```

**O eixo único que conecta TODOS os vencedores:** *valor alto ancorado contra preço baixo* (60 mil → 100, "quanto você pagaria → menos de cem"). É o fio condutor de h01, h02, b02, f01, f05, f08. **Se um criativo novo só puder ter um elemento, é a ancoragem de preço.**

Combo-ouro comprovado nos dados: **`h01 + b02 + cta02`** (5 vendas, CPA R$31,75, melhor single AI) e **`h02 + b0X + cta02`** (8 vendas somadas).

---

## 7. Recomendações — próximos hooks/ângulos a criar

**Dobrar a aposta (core / 70% — winners comprovados):**
1. Mais variações de **ancoragem de preço** (eixo h01/f05): explorar outros valores-âncora e enquadramentos ("o que custa uma consultoria individual comigo vs. o ingresso"). É o ângulo de maior ROI confirmado.
2. Mais **oferta-direta statement** (eixo h02): o número + "2 dias ao vivo comigo" cru. Variar a primeira frase mantendo o preço na abertura.
3. Padronizar **cta02 (ação + upsell VIP)** como CTA default de todo criativo novo; cta01/cta03 só como variante isolada de teste.
4. Usar **b02 (deal-driven)** como body default; b01 (construção-prática) como coringa para hooks de novidade/convite.

**Modelar / testar (emerging / 20%):**
5. Novos full scripts na espinha do **f01**: abertura por VISÃO ("imagine saber exatamente o que postar / uma marca que parece com você") → reframe → ancoragem 60mil→100. Variar só a cena de abertura.
6. Explorar mais a **dor de copiar formato** como abertura (f06/f07) combinada com ancoragem no fecho — ângulo ressoante ainda subexplorado nos modulares.
7. Testar hook **conditional de ancoragem** (fundir h10 "se você quer construir do jeito certo" com o preço de h01) — convite + número.

**Cortar / despriorizar:**
8. **h03 (escassez):** não escalar com base no CPA fantasma de R$4,62 (R$13,85 gastos). Reabrir só com budget real para validar.
9. Ângulos de **comando puro (h06)** e **novidade isolada (h04, h09)** sem preço na abertura: baixa conversão, não priorizar.
10. **Dicotomia comparativa / injustiça** como ângulo central (f03 "o mais conhecido vence o melhor"): além de não ter vendido, é tell de VSL pela régua anti-AI (padrão 17). Se usar, que seja como tempero, nunca como hook.

**Régua de produção (Hormozi):** 80% do esforço nos hooks. Como ancoragem + oferta-direta são os vencedores, gerar volume de **hooks** variando a abertura de preço/valor, mantendo b02+cta02 fixos — isola o efeito do hook e replica o combo-ouro.

---

*Ressalva final: tudo aqui é sinal direcional de amostra pequena. Use como hipótese de priorização de produção, não como verdade fechada. Revalidar a cada ciclo de gasto novo, especialmente h03.*
