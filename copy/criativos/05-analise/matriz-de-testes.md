# Matriz de Testes — Round 2 (Junho/2026)

> Cruzamento dos 2 CSVs de maio/2026 (Anúncios + Conjuntos de anúncios, BM-01 Antônio Lucas).
> Objetivo: desenhar o próximo round de testes no Meta Ads de forma **justa** — criativo como variável, público controlado.
> Régua de decisão alinhada ao framework Hormozi do projeto (`_config/reference/hormozi.md`).
> Naming alinhado a `_config/reference/nomenclature.md`.

---

## 1. Resumo do problema — por que o teste de maio não foi justo

Os criativos rodaram em **duas estruturas de teste completamente separadas**, sem nenhum público em comum. Isso impede qualquer comparação de CPA entre os criativos do Tom e os nossos AI — eles nunca disputaram o mesmo leilão, o mesmo público, nem a mesma fase de funil.

| Origem | Naming | Estrutura | Eixo de teste | Públicos |
|---|---|---|---|---|
| Gravados do Tom | `tl-lanc-vendas-leg-XX` | 13 conjuntos por **PÚBLICO real** | público é a variável | FRIO (Advantage+ Aberto, LAL 1% Seguidores, Site Visitors 180D) + MORNO (IG Engaj 30/60/90/180/365D, Site 30/60/90/180D, Seguidores) |
| Nossos AI | `tl-morno-*` | 14 conjuntos por **CRIATIVO isolado** | criativo é a variável | público amplo único ("all") em todos |

**Consequência:** os AI nunca pisaram nos públicos que mais venderam pro Tom (FRIO Advantage+ Aberto e MORNO IG Engaj 30D). Toda venda AI veio de tráfego "all" amplo. Toda venda do Tom veio de públicos segmentados. Comparar CPA R$48,91 (leads-all AI) vs CPA do leg-05 no Advantage+ é comparar laranja com maçã: públicos diferentes, leilões diferentes, intenção diferente.

**O que sabemos com certeza (dado limpo dentro de cada estrutura):**

- **Públicos campeões do Tom** (31 vendas totais):
  - FRIO – Advantage+ Aberto → **14 vendas** (leg-05, leg-04, leg-03, leg-06)
  - MORNO – IG Engaj 30D → **11 vendas** (leg-02 com 7, leg-05, leg-04)
  - Resto pulverizado: IG Engaj 60D (2), Site 180D (2), IG Engaj 180D (1), IG Engaj 365D (1)
- **Criativos AI campeões** (41 vendas totais, todos em "all"):
  - `NC5_h01_b02_cta02` → 5 vendas (CPA R$31,75) — **melhor AI individual**
  - `f01_lead3` → 4 vendas (CPA R$33,16)
  - `NC5_h02_b01_cta02` → 3 vendas | `NC5_h02_b02_cta02` → 3 vendas | `NC5_h03_b03_cta02` → 3 vendas
  - Hooks com mais tração: **h01** (CPA mais baixo, R$29,55 no conjunto) e **h02** (mais volume, 8 vendas no conjunto)
  - ⚠️ `h03-all` mostrou CPA R$4,62 mas com só R$13,85 gastos (3 vendas) — **anomalia estatística, ignorar como sinal de escala**

**A pergunta que maio NÃO respondeu:** os criativos AI vencedores convertem **nos públicos que mais vendem**? Ou só convertem em tráfego amplo barato? Round 2 existe pra responder isso.

---

## 2. Hipótese central

> **H1:** Colocando os criativos AI vencedores (`NC5_h01_b02_cta02`, `f01_lead3`, `NC5_h02_b02_cta02`) dentro dos públicos que mais venderam pro Tom (FRIO Advantage+ Aberto e MORNO IG Engaj 30D), lado a lado com o criativo gravado do Tom que venceu naquele mesmo público, os AI vão sustentar CPA competitivo (≤ CPA do criativo do Tom no mesmo conjunto).

**Desenho experimental:** público vira **constante controlada** (mesmo conjunto = mesmo público = mesmo leilão), criativo vira a **única variável**. Assim o CPA é comparável diretamente: AI vs Tom, no mesmo terreno.

**Sub-hipóteses:**
- **H2:** O hook h01 (ancoragem, menor CPA AI) generaliza pra público frio. Se sim, h01 é o core creative do próximo lote.
- **H3:** O h02 (oferta-direta, maior volume AI) escala em MORNO sem subir CPA — retargeting morno responde a oferta direta.
- **H4 (controle):** Se um AI vencedor de "all" **desabar** dentro de Advantage+ Aberto, confirma que a vitória dele em maio foi artefato de tráfego amplo barato, não qualidade de criativo. Isso é informação valiosa, não fracasso.

---

## 3. A Matriz

Eixo X = **público do Tom** (constante por conjunto). Eixo Y = **criativos no conjunto** (variável). Cada conjunto contém o(s) AI candidato(s) + o criativo de controle do Tom que venceu ali em maio.

### Bloco A — FRIO · Advantage+ Aberto (14 vendas em maio, controle = leg-05)

| Conjunto | Criativos no conjunto | Papel | Tier 70-20-10 |
|---|---|---|---|
| `tl-frio-advplus-r2` | `tl-lanc-vendas-leg-05` | **Controle** (campeão do público) | core |
| | `tl-morno-h01_b02_cta02` (NC5) | AI candidato #1 — melhor AI individual (5v) | core |
| | `tl-morno-f01_lead3` | AI candidato #2 — full script (4v) | core |
| | `tl-morno-h02_b02_cta02` (NC5) | AI candidato #3 — hook de volume | emerging |

> Nota: Advantage+ Aberto é frio puro. Os 3 AI são todos NC5 / full-script NC5 (most aware). **Risco controlado:** criativo NC5 em público frio pode subqualificar — é justamente o que H4 testa. Se desabar, sabemos que esses criativos pertencem a morno, não frio.

### Bloco B — MORNO · IG Engaj 30D (11 vendas em maio, controle = leg-02)

| Conjunto | Criativos no conjunto | Papel | Tier 70-20-10 |
|---|---|---|---|
| `tl-morno-igengaj30d-r2` | `tl-lanc-vendas-leg-02` | **Controle** (7v, campeão do público) | core |
| | `tl-morno-h01_b02_cta02` (NC5) | AI candidato #1 — mesma célula do Bloco A (comparabilidade cruzada) | core |
| | `tl-morno-h02_b02_cta02` (NC5) | AI candidato #2 — hook de volume, tese H3 | core |
| | `tl-morno-f01_lead3` | AI candidato #3 — full script | emerging |

> IG Engaj 30D é morno quente (engajou no IG nos últimos 30 dias). É o terreno **natural** dos criativos NC5. Maior probabilidade de os AI baterem o controle aqui do que no Bloco A.

### Leitura cruzada (o ganho do desenho)

Como `h01_b02_cta02`, `h02_b02_cta02` e `f01_lead3` aparecem **nos dois blocos**, conseguimos isolar **efeito-público vs efeito-criativo**:

| Criativo | CPA esperado FRIO (A) | CPA esperado MORNO (B) | O que o delta revela |
|---|---|---|---|
| `h01_b02_cta02` | a medir | a medir | Se MORNO << FRIO → criativo é morno-dependente |
| `h02_b02_cta02` | a medir | a medir | Idem |
| `f01_lead3` | a medir | a medir | Idem |

Total: **2 conjuntos, 4 criativos cada (1 controle Tom + 3 AI)**. 3 dos AI são compartilhados entre os blocos.

---

## 4. Estrutura de campanha sugerida

### Decisão ABO vs CBO

**ABO (Orçamento por conjunto), não CBO.** Justificativa:
- Os dados de maio mostram CBO ("Usando orçamento da campanha" no CSV de conjuntos) — e foi justamente o CBO que deixou o algoritmo concentrar verba nos públicos/criativos que ele preferiu, mascarando a comparação. Pra um **teste**, queremos verba **garantida e igual** por conjunto, senão o Advantage+ engole o budget do IG Engaj 30D e nunca medimos o segundo.
- ABO garante que cada público recebe orçamento suficiente pra sair da fase de aprendizado **independente** do outro.
- Depois que o teste decide os vencedores, aí sim se migra os campeões pra uma campanha **CBO de escala**.

```
Campanha:  tl-r2-teste-criativo-frio-morno  (objetivo: Vendas / Conversões — Compra)
           Tipo de orçamento: ABO (por conjunto)
           Atribuição: Clique de 7 dias (igual ao que rodou em maio, p/ comparabilidade)

 ├─ Conjunto: tl-frio-advplus-r2          (público: Advantage+ Aberto)
 │     Budget: R$ 60/dia
 │     ├─ Anúncio: tl-lanc-vendas-leg-05         [controle Tom]
 │     ├─ Anúncio: tl-morno-h01_b02_cta02
 │     ├─ Anúncio: tl-morno-f01_lead3
 │     └─ Anúncio: tl-morno-h02_b02_cta02
 │
 └─ Conjunto: tl-morno-igengaj30d-r2      (público: IG Engaj 30D — Custom Audience)
       Budget: R$ 60/dia
       ├─ Anúncio: tl-lanc-vendas-leg-02         [controle Tom]
       ├─ Anúncio: tl-morno-h01_b02_cta02
       ├─ Anúncio: tl-morno-h02_b02_cta02
       └─ Anúncio: tl-morno-f01_lead3
```

### Budget

- **R$ 60/dia por conjunto** × 2 conjuntos = **R$ 120/dia** = **R$ 840/semana**.
- Racional: com ticket/CPA observado em maio (R$30–70 por venda), R$60/dia gera ~1 venda/dia/conjunto → massa estatística suficiente pra ler um vencedor em 7 dias sem estourar caixa.
- **Não** dividir budget por anúncio (deixa o algoritmo otimizar dentro do conjunto). O conjunto tem orçamento; os 4 anúncios competem dentro dele. É assim que se lê qual criativo o algoritmo prefere **com o público fixo**.

### Regra de naming (consistente com o existente)

Mantém o padrão `tl-` já em produção. Conjunto = público; anúncio = criativo.

| Nível | Padrão | Exemplo |
|---|---|---|
| Campanha | `tl-r2-<tema>` | `tl-r2-teste-criativo-frio-morno` |
| Conjunto (público) | `tl-<temp>-<publico>-r2` | `tl-frio-advplus-r2`, `tl-morno-igengaj30d-r2` |
| Anúncio AI | `tl-morno-<id-criativo>` | `tl-morno-h01_b02_cta02`, `tl-morno-f01_lead3` |
| Anúncio Tom (controle) | `tl-lanc-vendas-leg-XX` | `tl-lanc-vendas-leg-05` (não renomear — preserva histórico) |

> `<temp>` = temperatura do funil (`frio`/`morno`). `r2` = round 2, separa do que rodou em maio.
> O `id-criativo` do AI segue `nomenclature.md`: `NC{X}_h{XX}_b{XX}_cta{XX}` (no campo de nome do anúncio, com prefixo `tl-morno-`).

---

## 5. Critério de decisão (régua Hormozi: produz tudo, dado decide)

Filosofia do projeto: **a gente produz o criativo, o dado decide se vive ou morre.** Nenhum criativo é morto por opinião antes de ter massa estatística mínima. Nenhum é escalado por sorte (vide anomalia h03).

### Gate de massa mínima (antes de qualquer decisão)

Não tomar decisão sobre um anúncio até ele ter **pelo menos UM** dos dois:
- **≥ R$ 50 gastos** no anúncio, **OU**
- **≥ 1.000 impressões** no anúncio.

> Isso é a trava anti-anomalia-h03: 3 vendas em R$13,85 não é sinal, é ruído. Sem gate de gasto, a gente escala sorte.

### Matar (kill)

Mata o anúncio quando, **depois** do gate de massa:
- **0 vendas** após **R$ 80 gastos** no anúncio (≈ 2–3× o CPA-alvo de R$30 sem nenhuma conversão), **OU**
- CPA **> 2× o CPA do controle do Tom** no mesmo conjunto após **≥ 3 vendas**.

### Manter / observar

- CPA dentro de **±30% do controle do Tom** no mesmo conjunto → mantém rodando, segue acumulando dado.
- Janela de avaliação: **7 dias** com budget cheio antes de qualquer veredito de escala.

### Escalar

Escala (move pra campanha CBO de escala, sobe budget) quando:
- **≥ 3 vendas** no anúncio, **E**
- CPA **≤ CPA do controle do Tom** no mesmo conjunto, **E**
- já passou o gate de massa (sem anomalia tipo h03).

### Aplicação do 70-20-10 no próximo lote de produção

Depois que o round 2 decidir vencedores, o **próximo lote de criativos** segue a mistura Hormozi:
- **70% core:** reusar/iterar os vencedores comprovados (provavelmente h01 e h02 + f01, conforme o round 2 confirmar).
- **20% emerging:** modelar ângulos que funcionaram em outros nichos/players (ver `instagram-intel`).
- **10% experimental:** conceitos novos sem prova (NC3/NC4 hooks h11–h30 que ainda não rodaram).

---

## 6. Próximos buracos a cobrir (públicos onde NUNCA testamos AI)

Round 2 cobre os 2 públicos campeões. Estes ficam pra **Round 3+**, em ordem de prioridade (volume de venda histórico do Tom):

| Prioridade | Público | Status AI | Por que testar | Sugestão de conjunto |
|---|---|---|---|---|
| 1 | **FRIO – LAL 1% Seguidores** | nunca testado com AI | Lookalike é o pão-com-manteiga de escala fria; se h01 funciona aqui, destrava volume | `tl-frio-lal1seg-r3` |
| 2 | **FRIO – Site Visitors 180D** | nunca testado com AI | Frio-quente (já viu o site); intenção maior que Advantage+ | `tl-frio-site180d-r3` |
| 3 | **MORNO – IG Engaj 60D / 90D / 180D / 365D** | nunca testado com AI | Janelas maiores = mais alcance morno; testar se h01/h02 sustentam CPA fora dos 30D | `tl-morno-igengaj60d-r3`, `...90d`, `...180d` |
| 4 | **MORNO – Site 30D / 60D / 90D / 180D** | nunca testado com AI | Retargeting de site; ângulo de oferta direta (h02) deve performar | `tl-morno-site30d-r3` etc |
| 5 | **MORNO – Seguidores** | nunca testado com AI | Público quente de marca; bom pra ofertas escassez (cta1) | `tl-morno-seguidores-r3` |

**Regra de expansão:** só abrir um público novo pra AI **depois** que o criativo provou CPA competitivo no round anterior. Nunca queimar criativo não-validado em público caro. Promove vencedor → testa em público adjacente → repete.

---

## Apêndice — Decoder dos criativos AI citados

(ref. `_config/reference/nomenclature.md`)

| ID no anúncio | Leitura |
|---|---|
| `NC5_h01_b02_cta02` | Most Aware · hook ancoragem (R$60k vs workshop) · body deal-driven · CTA ancoragem |
| `NC5_h02_b02_cta02` | Most Aware · hook oferta-direta · body deal-driven · CTA ancoragem |
| `f01_lead3` | Full script f01 (lead variant 3) — roteiro completo, não montado por componentes |

> Dados-fonte: `/Users/bernardoxlima/Downloads/CA-01---BM-01---Antônio-Lucas-Anúncios-1-de-mai-de-2026-31-de-mai-de-2026.csv` (anúncios) e `...-Conjuntos-de-anúncios-...csv` (conjuntos/públicos). Período: 01–31 mai 2026.
