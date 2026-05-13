# Nomenclatura

## ID do criativo: `NC{X}_h{XX}_b{XX}_c{XX}`

O NC eh do **hook** (dimensao de targeting). Qualquer pessoa le o nome e sabe:
- NC = nivel de consciencia do publico-alvo
- h = qual hook
- b = qual body
- c = qual CTA

```
NC2_h01_b02_c03.mp4  →  NC2 (Problem-Aware), Hook 1, Body 2, CTA 3
```

## Decoder

**Hooks (h01-h30):**

| ID | NC | Abordagem | Resumo do texto |
|----|----|-----------|-----------------|
| h01-h10 | NC2 | injustica | Competentes ficando pra tras enquanto menos preparados crescem |
| h11-h20 | NC2 | espelho | Descreve a cena exata que o prospect vive |
| h21-h30 | NC3 | urgencia | Custo concreto de nao agir agora |

**Bodies (b01-b05):**

| ID | NC | Funcao |
|----|----|--------|
| b01 | NC1 | Planta o problema do zero (Completely Unaware) |
| b02 | NC2 | Nomeia o problema com precisao (Problem-Aware) |
| b03 | NC3 | Diferencia o caminho do Ton (Solution-Aware) |
| b04 | NC4 | Credibilidade + prova social (Product-Aware) |
| b05 | NC5 | Oferta direta, Standard vs VIP (Most Aware) |

**CTAs (c01-c03):**

| ID | Mecanismo |
|----|-----------|
| c01 | Escassez — vagas limitadas, lote vai virar |
| c02 | Ancoragem — R$ 60k consultoria vs preco do workshop |
| c03 | Urgencia temporal — data fixa + custo de continuar igual |

## Exemplos

| Criativo | Leitura |
|----------|---------|
| `NC2_h01_b02_c03` | NC2 (Problem-Aware), Hook 1, Body 2, CTA 3 |
| `NC3_h21_b03_c01` | NC3 (Solution-Aware), Hook 21, Body 3, CTA 1 |
| `NC2_h15_b04_c02` | NC2 (Problem-Aware), Hook 15, Body 4, CTA 2 |

## Para mensuracao (Meta Ads)

O ID do criativo vai no nome do anuncio. Para filtrar performance:

- Por NC: `NC2_*` vs `NC3_*`
- Por hook: `*_h01_*` vs `*_h15_*`
- Por body: `*_b02_*` vs `*_b05_*`
- Por CTA: `*_c01` vs `*_c02` vs `*_c03`
- Por combo body+CTA: `*_b02_c03` vs `*_b05_c01`

## Regra de crescimento

Novo componente = proximo numero disponivel. Numeros nunca sao reusados.

```bash
# Proximo hook disponivel:
find 01-scripts/hooks -name 'h*.md' | sort -t'h' -k2 -n | tail -1
# → h30.md → proximo eh h31

# Proximo body:
find 01-scripts/body -name 'b*.md' | sort | tail -1
# → b05.md → proximo eh b06
```

Awareness level vem do folder onde o arquivo vive, nao do numero.

## Naming dos arquivos gerados (estagios 2-4)

Estagios 2 e 3 espelham a estrutura de 01-scripts. Estagio 4 organizado por NC do hook.

```
02-audio/hooks/NC2-problem-aware/injustica/h01.mp3
02-audio/body/NC2-problem-aware/b02.mp3
02-audio/ctas/c01.mp3

03-video/hooks/NC2-problem-aware/injustica/h01.mp4
03-video/body/NC2-problem-aware/b02.mp4
03-video/ctas/c01.mp4

04-finais/NC2-problem-aware/NC2_h01_b02_c03.mp4
```

## Status frontmatter (lifecycle do .md fonte)

Cada `.md` em `01-scripts/` carrega `status:` no frontmatter:

`rascunho` -> `aprovado` -> `audio-ok` -> `video-ok`

Cada stage atualiza o status do .md fonte ao concluir.
