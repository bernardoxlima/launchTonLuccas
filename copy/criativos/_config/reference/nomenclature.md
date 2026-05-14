# Nomenclatura

## ID do criativo: `NC{X}_h{XX}_b{XX}_cta{XX}`

O NC eh do **hook** (dimensao de targeting). Qualquer pessoa le o nome e sabe:
- NC = nivel de consciencia do publico-alvo
- h = qual hook
- b = qual body
- cta = qual call-to-action

```
NC5_h01_b02_cta03.mp4  →  NC5 (Most Aware), Hook 1, Body 2, CTA 3
```

## Decoder

**Hooks** — numeracao globalmente unica, NC vem da pasta, angulo vem do frontmatter:

| ID | NC | Angulo | Resumo |
|----|----|--------|--------|
| h01 | NC5 | ancoragem | R$ 60k consultoria vs preco do workshop |
| h02 | NC5 | oferta-direta | Oferta direta do workshop |
| h03 | NC5 | escassez | Vagas limitadas, lote vai virar |
| h04 | NC5 | novidade | Primeira vez que o Ton faz isso |
| h05 | NC5 | urgencia | Custo concreto de nao agir agora |
| h06 | NC5 | comando | Ordem direta |
| h07 | NC5 | oferta-direta | Variante |
| h08 | NC5 | oferta-direta | Variante |
| h09 | NC5 | novidade | Variante |
| h10 | NC5 | convite | Convite direto |

Tabela cresce conforme novos hooks sao criados. Consultar frontmatter de cada `.md` pra estado atual:
```bash
find 01-scripts/hooks -name 'h*.md' -exec grep -l '' {} \; | sort -t'h' -k2 -n
```

**Bodies:**

| ID | NC | Angulo de venda |
|----|----|-----------------|
| b01 | NC5 | Guia pratico do workshop + resultado + mao na massa |
| b02 | NC5 | Deal-driven + oferta irresistivel + pratica em tempo real |
| b03 | NC5 | Primeira vez + urgencia natural + resultado + mao na massa |

**CTAs:**

| ID | Mecanismo |
|----|-----------|
| cta1 | Escassez — vagas limitadas, lote vai virar |
| cta2 | Ancoragem — R$ 60k consultoria vs preco do workshop |
| cta3 | Urgencia temporal — data fixa + custo de continuar igual |

## Exemplos de criativos montados

| Criativo | Leitura |
|----------|---------|
| `NC5_h01_b01_cta01` | NC5 (Most Aware), Hook ancoragem, Body guia pratico, CTA escassez |
| `NC5_h03_b02_cta03` | NC5 (Most Aware), Hook escassez, Body deal-driven, CTA urgencia temporal |
| `NC5_h10_b03_cta02` | NC5 (Most Aware), Hook convite, Body primeira vez, CTA ancoragem |

## Para mensuracao (Meta Ads)

O ID do criativo vai no nome do anuncio. Para filtrar performance:

- Por NC: `NC5_*`
- Por hook: `*_h01_*` vs `*_h05_*`
- Por body: `*_b01_*` vs `*_b03_*`
- Por CTA: `*_cta01` vs `*_cta02` vs `*_cta03`
- Por combo body+CTA: `*_b02_cta03` vs `*_b01_cta01`

## Regra de crescimento

Novo componente = proximo numero disponivel. Numeros nunca sao reusados.

```bash
# Proximo hook disponivel:
find 01-scripts/hooks -name 'h*.md' | sort -t'h' -k2 -n | tail -1
# → h10.md → proximo eh h11

# Proximo body:
find 01-scripts/body -name 'b*.md' | sort | tail -1
# → b03.md → proximo eh b04

# Proximo CTA:
find 01-scripts/ctas -name 'cta*.md' | sort | tail -1
# → cta3.md → proximo eh cta4
```

Awareness level vem do folder onde o arquivo vive, nao do numero.
Angulo (abordagem emocional) vem do frontmatter `angulo:`, nao do folder.

## Naming dos arquivos gerados (estagios 2-4)

Estagios 2 e 3 espelham a estrutura de 01-scripts. Estagio 4 organizado por NC do hook.

```
02-audio/hooks/NC5-most-aware/h01.mp3
02-audio/body/NC5-most-aware/b01.mp3
02-audio/ctas/cta1.mp3

03-video/hooks/NC5-most-aware/h01.mp4
03-video/body/NC5-most-aware/b01.mp4
03-video/ctas/cta1.mp4

04-finais/NC5-most-aware/NC5_h01_b01_cta01.mp4
```

## Status frontmatter (lifecycle do .md fonte)

Cada `.md` em `01-scripts/` carrega `status:` no frontmatter:

`rascunho` -> `aprovado` -> `audio-ok` -> `video-ok`

Cada stage atualiza o status do .md fonte ao concluir.
