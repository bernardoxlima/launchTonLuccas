---
name: landing-version
description: Use SEMPRE quando o user pedir qualquer edição em `versoes/` — adicionar/remover componentes, trocar copy, mudar estilos, reorganizar seções de qualquer versão de landing page. Triggers - "troca/muda/edita o hero", "novo pricing", "mexe na v1", "ajusta o cta", "tira essa seção", "adiciona testimonial". NÃO use pra leitura/análise pura nem pra arquivos fora de `versoes/`.
---

# Landing Version Skill

## Por que existe

Este projeto rodam múltiplas versões de landing pages vivas em paralelo (A/B testing). Toda edição tem risco de quebrar uma versão que já está rodando tráfego pago. Esta skill força uma decisão consciente antes de qualquer mudança virar permanente.

## Inputs obrigatórios (ler ANTES de editar qualquer coisa)

1. `_config/versions.json` — identifica `latest`, `frozen[]`, `history[]` da página alvo
2. `_config/constraints.md` — hard rules
3. O(s) componente(s) que o user quer editar

## Processo (5 steps)

### Step 1 — Identificar alvo

- Qual `<pagina>`? (default: `pagina-vendas` se o user não especificar)
- Qual versão é `latest` agora? (ler `versions.json`)
- O arquivo que o user mencionou está em `frozen[]`?

**Se o arquivo está em versão frozen E o user NÃO disse "hotfix" explicitamente:**
PARAR. Perguntar via `AskUserQuestion`:
> "Você pediu pra mexer em [v1] mas ela tá congelada (frozen). Quer (a) editar a latest [v2] ao invés, ou (b) hotfix forçado em [v1]?"

### Step 2 — Aplicar a mudança em `latest`

Editar o arquivo na versão latest. NÃO tocar em outras versões ainda.

Se a mudança envolve microcopy nova: validar contra `rules/copy-anti-ai.md` antes de escrever.

### Step 3 — REQUIRED: AskUserQuestion sobre versionamento

Disparar `AskUserQuestion` com EXATAMENTE estas 3 opções:

**Question:** `"Acabei de [resumo de 1 linha do que mudou] na [latest]. O que isso é?"`

**Options:**
1. `Refinamento de [latest]` — Mantém in-place. Sem fork. Anota bullet datado no changelog da versão atual.
2. `Nova versão v[N+1] pra A/B` — Reverte a mudança em [latest], copia [latest]→v[N+1], aplica a mudança só na v[N+1]. Congela [latest]. Latest passa a ser v[N+1].
3. `Hotfix em todas as ativas` — Aplica em latest e em TODAS as frozen. Use só pra erros de digitação, link quebrado, ou bug crítico que afeta tracking/checkout.

### Step 4 — Executar a decisão

#### Se REFINAMENTO

1. Append em `_config/changelog.md` na seção da versão atual:
   ```
   - YYYY-MM-DD: [resumo da mudança]
   ```
2. Reportar e parar.

#### Se NOVA VERSÃO

1. **Reverter** a mudança em `latest` (use o conteúdo original que você leu antes de editar — guarde-o em memória; se não tem, faça `git checkout -- <arquivo>`)
2. **Copiar** `versoes/<pagina>/<latest>/` → `versoes/<pagina>/v[N+1]/` (use Bash `cp -r`)
3. **Aplicar a mudança** apenas em `versoes/<pagina>/v[N+1]/<arquivo>`
4. **Criar a rota Astro** `src/pages/<pagina>/v[N+1].astro`:
   ```astro
   ---
   import Page from '@versoes/<pagina>/v[N+1]/page.astro';
   ---
   <Page />
   ```
5. **AskUserQuestion** pra capturar metadata (não pular):
   - "Qual a hipótese desta v[N+1]? (o que você acha que vai converter melhor)"
   - "Como vai medir? (begin_checkout rate, scroll depth, tempo na página…)"
   - "Label curto pra o diretório? (ex: 'Hero com vídeo')"
6. **Atualizar `_config/versions.json`** atomicamente:
   ```json
   {
     "<pagina>": {
       "latest": "v[N+1]",
       "frozen": [...frozen_anterior, "v[N]"],
       "history": [
         ...history_anterior,
         {
           "v": "v[N+1]",
           "from": "v[N]",
           "created": "YYYY-MM-DD",
           "label": "...",
           "hypothesis": "...",
           "metric": "..."
         }
       ]
     }
   }
   ```
7. **Atualizar `_config/changelog.md`** — append seção nova:
   ```markdown
   ### v[N+1] — YYYY-MM-DD

   **Forked from:** v[N]
   **Label:** [label]
   **Mudança:** [o que mudou exatamente em relação à v[N]]
   **Hipótese:** [hipótese]
   **Métrica:** [métrica]

   **Refinamentos:**
   - (vazio)
   ```
8. **Atualizar `vercel.json`** — trocar `destination` do rewrite raiz pra `/<pagina>/v[N+1]`
9. **Validar build:** rodar `npm run build` e capturar o output. Se quebrar, debugar.

#### Se HOTFIX

1. Confirmar uma SEGUNDA vez via AskUserQuestion: "Hotfix afeta v[N] (latest) + [lista de frozen]. Tem certeza? Use só pra typo/link/bug crítico."
2. Aplicar a mudança em latest (já tá feita) E em cada versão de `frozen[]`
3. Append em `_config/changelog.md` em CADA seção afetada:
   ```
   - YYYY-MM-DD HOTFIX: [resumo]
   ```

### Step 5 — Reportar

Sintetize em até 4 linhas:
- O que foi feito (qual decisão, qual arquivo)
- Estado novo do `versions.json` (latest + frozen)
- URLs ativas (`/` serve latest, todas em `/<pagina>/<v>`)
- Próximo passo sugerido se aplicável (testar mobile, deployar, etc)

## Hard rules (cross-check com `_config/constraints.md`)

- NUNCA editar versão em `frozen[]` sem decisão explícita "hotfix"
- NUNCA mexer em `Base.astro`, `tracking.ts`, `versions.ts`, `package.json`, `astro.config.mjs`, `tsconfig.json` durante uma task de versão
- NUNCA alterar `copy/`, `rules/`, `cases/`, `fotos/` (fontes da verdade do cliente)
- NUNCA pular o AskUserQuestion da Step 3 (mesmo se a mudança parecer "óbvia")
- SEMPRE atualizar `versions.json` + `changelog.md` + `vercel.json` na mesma operação atômica que cria/forka uma versão
- SEMPRE validar mobile-first (390px → 768px → 1440px) ao final

## Edge cases

- **Primeira versão (não existe v1 ainda)**: caso histórico, não acontece neste repo (v1 já existe). Se acontecer pra outra página: criar v1 direto, registrar no versions.json com `from: null`.
- **User pede "começa do zero" / "joga fora a v1"**: NUNCA deletar versões automaticamente. Marcar como frozen + criar nova é o caminho. Se o user insistir em deletar: pedir confirmação explícita E mover pra `_archive/versoes-deprecadas/<pagina>/<v>/` em vez de deletar.
- **Mudança envolve assets novos (foto/copy)**: assets vão pra `cases/`, `fotos/`, `copy/` (compartilhados). NÃO duplicar dentro de `versoes/`.
- **User pede mudança em múltiplos componentes ao mesmo tempo**: tratar como UMA mudança lógica se forem coordenadas (ex: "muda o hero E o cta pra ficarem coerentes"). Tratar como múltiplos forks se forem testes independentes (ex: "testa hero novo E pricing novo separadamente" → v[N+1] tem só hero, v[N+2] tem só pricing).
