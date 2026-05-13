# Stage 1 — Scripts (copy fonte)

Escreve hooks, bodies e CTAs. Saida: `.md` com `status: aprovado`.

## Inputs

| Layer | Path | Quando ler |
|-------|------|-----------|
| 3 (referencia) | `../_config/reference/copy-anti-ai.md` | SEMPRE — regras de microcopy |
| 3 (referencia) | `../_config/reference/hormozi.md` | Escrevendo qualquer hook/body/CTA |
| 3 (referencia) | `../_config/reference/taxonomy.md` | Decidindo qual NC/abordagem |
| 3 (referencia) | `../_config/reference/nomenclature.md` | Criando arquivo novo (proximo ID) |
| 4 (briefing) | input do user na conversa | Direcao da copy |

## Process

1. Identificar **tipo** (hook / body / cta), **NC alvo** (taxonomy.md), e **abordagem emocional** (injustica / espelho / urgencia / nova).
2. Achar o **proximo numero disponivel** (nomenclature.md regra de crescimento):
   ```bash
   find hooks -name 'h*.md' | sort -t'h' -k2 -n | tail -1
   find body  -name 'b*.md' | sort | tail -1
   find ctas  -name 'c*.md' | sort | tail -1
   ```
3. Aplicar **regras de microcopy** (copy-anti-ai.md) ao texto.
4. Salvar com **frontmatter completo**:
   - hook: `id, tipo, angulo, hook_driver, hook_type, awareness, duracao_seg, energia, tom, cenario, status`
   - body: `id, tipo, nome, awareness, meat_format, descricao, casa_com, duracao_seg, energia, tom, status`
   - cta: `id, tipo, nome, mecanismo, descricao, casa_com, duracao_seg, energia, tom, status`
5. Status inicial = `rascunho`. Promover pra `aprovado` so apos revisao humana.

## Outputs

Espelha a hierarquia da taxonomia (`taxonomy.md`):

```
01-scripts/hooks/NC<X>-<awareness>/h<XX>.md
01-scripts/body/NC<X>-<awareness>/b<XX>.md
01-scripts/ctas/c<XX>.md
```

Status do .md fonte avanca conforme stages downstream completam:

```
rascunho → aprovado → audio-ok → video-ok
```

## Como adicionar um componente novo

### Hook
1. `find hooks -name 'h*.md' | sort -t'h' -k2 -n | tail -1` → proximo numero
2. Decidir NC (taxonomy.md) + angulo emocional (injustica/espelho/urgencia/novo)
3. Criar `hooks/NC<X>-<awareness>/h<XX>.md` com `angulo:` no frontmatter
4. Promover pra `aprovado` apos revisao

### Body
1. `find body -name 'b*.md' | sort | tail -1` → proximo numero
2. Criar `body/NC<X>-<awareness>/b<XX>.md`

### CTA
1. `find ctas -name 'c*.md' | sort | tail -1` → proximo numero
2. Criar `ctas/c<XX>.md` (flat — CTAs sao standalone)

### Nova abordagem emocional dentro de NC existente
1. Criar hook em `hooks/NC<X>-<awareness>/h<XX>.md` com `angulo: <novo-nome>` no frontmatter
2. Proximo numero global disponivel (nao precisa de subpasta)

## Regras criticas

- **Nao reusar numeros.** Componente deletado mantem numero queimado.
- **Awareness vem do folder, nao do numero.** Pasta `NC2-problem-aware/` define o NC, h21 pode existir lah se a abordagem for nova.
- **80% do esforco em hooks** (hormozi.md). Variar hook drivers e abordagens emocionais.
- **Microcopy**: passar TODO texto pelo checklist em copy-anti-ai.md antes de salvar.
