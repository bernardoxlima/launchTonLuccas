# Taxonomia — Niveis de consciencia (Schwartz)

NC1 = menos consciente (topo do funil), NC5 = mais consciente (fundo do funil).

| NC | Nome | Hook driver | Hooks | Body |
|----|------|-------------|-------|------|
| NC1 | Completely Unaware | curiosity-driven | — | b01 |
| NC2 | Problem-Aware | pain-driven | h01-h20 (injustica, espelho) | b02 |
| NC3 | Solution-Aware | promise-driven | h21-h30 (urgencia) | b03 |
| NC4 | Product-Aware | proof-driven | — | b04 |
| NC5 | Most Aware | offer-driven | — | b05 |

## Organizacao por NC

Hooks, bodies e finais seguem a mesma hierarquia: **NC como primeiro nivel**.

### Hooks: NC > abordagem emocional > arquivo

```
01-scripts/hooks/
├── NC1-completely-unaware/
├── NC2-problem-aware/
│   ├── injustica/
│   │   └── h01.md .. h10.md
│   └── espelho/
│       └── h11.md .. h20.md
├── NC3-solution-aware/
│   └── urgencia/
│       └── h21.md .. h30.md
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
