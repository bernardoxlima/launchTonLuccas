# Taxonomia — Niveis de consciencia (Schwartz)

NC1 = menos consciente (topo do funil), NC5 = mais consciente (fundo do funil).

| NC | Nome | Hook driver | Body |
|----|------|-------------|------|
| NC1 | Completely Unaware | curiosity-driven | b01 |
| NC2 | Problem-Aware | pain-driven | b02 |
| NC3 | Solution-Aware | promise-driven | b03 |
| NC4 | Product-Aware | proof-driven | b04 |
| NC5 | Most Aware | offer-driven | b05 |

Hooks vivem dentro da pasta do NC que atacam. A abordagem emocional (injustica, espelho, urgencia, etc) vive no frontmatter `angulo:`, nao como subfolder.

## Abordagens emocionais (angulos)

| Angulo | NC tipico | O que faz |
|--------|-----------|-----------|
| injustica | NC2 | Competentes ficando pra tras enquanto menos preparados crescem |
| espelho | NC2 | Descreve a cena exata que o prospect vive |
| urgencia | NC3 | Custo concreto de nao agir agora |

Novas abordagens podem ser criadas a qualquer momento. O angulo eh um campo livre — nao precisa de pasta nova.

## Organizacao por NC

Hooks, bodies e finais seguem a mesma hierarquia: **NC como primeiro nivel**.

### Hooks: NC > arquivo (angulo no frontmatter)

```
01-scripts/hooks/
├── NC1-completely-unaware/
├── NC2-problem-aware/
│   └── h01.md  (angulo: injustica)
├── NC3-solution-aware/
├── NC4-product-aware/
└── NC5-most-aware/
```

### Body: NC > arquivo

```
01-scripts/body/
├── NC1-completely-unaware/
│   └── b01.md
├── NC2-problem-aware/
│   └── b02.md
├── NC3-solution-aware/
│   └── b03.md
├── NC4-product-aware/
│   └── b04.md
└── NC5-most-aware/
    └── b05.md
```

### CTAs: flat (sem NC — sao standalone)

```
01-scripts/ctas/
├── c01.md
├── c02.md
└── c03.md
```
