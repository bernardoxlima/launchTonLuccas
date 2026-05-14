# Taxonomia — Niveis de consciencia (Schwartz)

NC1 = menos consciente (topo do funil), NC5 = mais consciente (fundo do funil).

| NC | Nome | Hook driver |
|----|------|-------------|
| NC1 | Completely Unaware | curiosity-driven |
| NC2 | Problem-Aware | pain-driven |
| NC3 | Solution-Aware | promise-driven |
| NC4 | Product-Aware | proof-driven |
| NC5 | Most Aware | offer-driven |

## Estado atual do pipeline

Producao atual concentrada em **NC5 (Most Aware)** — fundo do funil.

| NC | Hooks | Bodies | Status |
|----|-------|--------|--------|
| NC5 | h01-h10 (10 hooks) | b01-b03 (3 bodies) | **ativo** |
| NC1-NC4 | — | — | pastas criadas, sem conteudo |

Quando escalar pra outros NCs, criar hooks e bodies na pasta `NC<X>-<awareness>/` correspondente. A regra de montagem (`04-finais/CONTEXT.md`) automaticamente pega qualquer NC novo.

## Abordagens emocionais (angulos)

Angulo vive no frontmatter `angulo:` de cada hook, nao como subfolder.

| Angulo | O que faz |
|--------|-----------|
| ancoragem | Compara valor alto vs preco acessivel |
| oferta-direta | Apresenta a oferta sem rodeio |
| escassez | Vagas limitadas, lote vai virar |
| novidade | Primeira vez, nunca feito antes |
| urgencia | Custo concreto de nao agir agora |
| comando | Ordem direta ao viewer |
| convite | Tom de convite pessoal |

Novas abordagens podem ser criadas a qualquer momento — campo livre no frontmatter.

## Organizacao por NC

Hooks, bodies e finais seguem a mesma hierarquia: **NC como primeiro nivel**.

### Hooks: NC > arquivo (angulo no frontmatter)

```
01-scripts/hooks/
├── NC1-completely-unaware/
├── NC2-problem-aware/
├── NC3-solution-aware/
├── NC4-product-aware/
└── NC5-most-aware/
    ├── h01.md  (angulo: ancoragem)
    ├── h02.md  (angulo: oferta-direta)
    ├── ...
    └── h10.md  (angulo: convite)
```

### Body: NC > arquivo

```
01-scripts/body/
├── NC1-completely-unaware/
├── NC2-problem-aware/
├── NC3-solution-aware/
├── NC4-product-aware/
└── NC5-most-aware/
    ├── b01.md  (guia pratico)
    ├── b02.md  (deal-driven)
    └── b03.md  (primeira vez + urgencia)
```

### CTAs: flat (universais — combinam com qualquer NC)

```
01-scripts/ctas/
├── cta1.md  (escassez)
├── cta2.md  (ancoragem)
└── cta3.md  (urgencia temporal)
```
