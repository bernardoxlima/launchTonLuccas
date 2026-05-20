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

| NC | Hooks | Bodies | Status |
|----|-------|--------|--------|
| NC5 | h01-h10 (10 hooks) | b01-b03 (3 bodies) | **ativo** |
| NC4 | h11-h20 (10 hooks) | — | **ativo** |
| NC3 | h21-h30 (10 hooks) | b04-b05 (2 bodies) | **ativo** |
| NC1-NC2 | — | — | pastas criadas, sem conteudo |

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
| credibilidade | Prova de autoridade via casos conhecidos |
| prova-social | Social proof quantificado (vagas, participantes) |
| resultado-especifico | Entregaveis nomeados da consultoria/workshop |
| acesso-metodo | Mesmo processo da consultoria de 60k disponivel |
| formato-diferente | Diferencial do formato pratico vs curso gravado |
| caminho-diferente | Por que tentativas anteriores falharam (mecanismo errado) |
| espelho | Reconhecimento exato da situacao atual do avatar |
| injustica | Pessoas menos preparadas ocupam mais espaco |
| identificacao | Label de situacao especifica — convida o avatar certo |
| custo-de-esperar | Custo de continuar generico enquanto outros ocupam espaco |
| promessa-de-mecanismo | O processo comeca de voce, nao de formula |
| resultado-concreto | 5 entregaveis especificos que voce sai com em 2 dias |

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
