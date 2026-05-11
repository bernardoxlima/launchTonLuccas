# launchTonLuccas — Landing Page Versioning Framework

Sistema de versionamento de páginas de vendas Astro pra rodar A/B test e iterações em paralelo. Cada edição em `versoes/` passa pela skill `landing-version` que decide se vira nova versão (v(N+1)) ou refinamento da latest. Múltiplas versões ficam vivas simultaneamente em URLs paralelas.

## Stack lock

- Astro 5 + Tailwind 4 + TypeScript
- Hosting: Vercel (rewrites + headers em `vercel.json`)
- Sem React/Vue/SSR — tudo static
- Componentes `.astro`, ícones via Iconify Solar

## Estrutura

| Pasta / Arquivo | O que tem | Quando ler |
|---|---|---|
| `_config/versions.json` | **Source of truth** — latest, frozen, history | TODA edição em `versoes/` |
| `_config/constraints.md` | Never-do list | TODA edição |
| `_config/changelog.md` | Diário narrativo de versões | Após criar nova versão |
| `versoes/<pagina>/<v>/` | Componentes da versão (page.astro + Hero.astro etc) | Editando UI |
| `src/pages/<pagina>/<v>.astro` | Rota fina que importa o page.astro da versão | Criando nova versão |
| `src/pages/index.astro` | Re-export do `page.astro` da **default** (pinned em v3) — é o que `/` serve em prod | Só atualizar se user pedir "trocar default" — NÃO seguir latest |
| `src/pages/dev.astro` | Diretório interno data-driven (noindex) listando todas as versões | Quase nunca |
| `src/lib/versions.ts` | Helper que lê versions.json | Lendo state em build |
| `src/layouts/Base.astro` | Layout compartilhado (head, OG, GTM, fontes) | NÃO editar via skill |
| `src/lib/tracking.ts` | Helpers de tracking (begin_checkout) | NÃO editar via skill |
| `vercel.json` | Headers `/dev` (noindex). Sem rewrites — Astro gera /index.html e arquivo estático ganha do rewrite | Raramente |
| `copy/` | Copy fonte do cliente — NÃO ALTERAR | Lendo conteúdo |
| `rules/copy-anti-ai.md` | Regras de microcopy | Escrevendo qualquer texto novo |
| `cases/`, `fotos/` | Assets compartilhados | Importando assets |
| `_archive/` | Docs históricos (não ler em runtime) | Curiosidade |

## Routing — toda task

| Pedido do user | Skill carrega | Lê obrigatoriamente |
|---|---|---|
| Qualquer edição em `versoes/` ("troca o hero", "muda pricing", "ajusta cta") | `landing-version` | `_config/versions.json` + `_config/constraints.md` |
| Apenas leitura, análise, debug | nenhuma | conforme necessário |
| Mexer em Base/tracking/configs | nenhuma (fora do escopo da skill) | leia o arquivo direto |

## REGRA CRÍTICA — antes de editar qualquer arquivo em `versoes/`

1. Ler `_config/versions.json` pra identificar `latest`, `default` e `frozen[]`
2. Se o alvo está em `frozen[]`: **PARAR** e perguntar se é hotfix antes de qualquer mudança
3. **SEMPRE perguntar via `AskUserQuestion` ANTES de qualquer edição em texto/copy, animação, cor, layout, espaçamento ou comportamento** — opções obrigatórias:
   - **Ajustar versão atual** (refinamento in-place na versão que o user tá vendo / a `default` v3 / outra específica)
   - **Criar nova versão** (fork de `latest` com UMA mudança isolada pra A/B)
   - **Aplicar em todas as versões ativas** (default + latest + qualquer fork não-frozen — só usar quando o user explicita "em todas")
4. Executar a decisão atomicamente (versions.json + changelog + arquivos da versão na mesma operação)

Detalhes completos do fluxo: `.claude/skills/landing-version/SKILL.md`.

## REGRA CRÍTICA — ao finalizar QUALQUER mudança

Sempre informar no chat, ao final da task, **as URLs onde a mudança vive**. Formato esperado:

- Mudança em 1 versão → `Atualizado em: tonluccas.com.br/mpd/v3` (e, se for a `default`, também mencionar `tonluccas.com.br/`)
- Mudança em múltiplas versões → listar todas as URLs em bullets
- Nova versão criada → URL canônica nova + lembrete de que `/` continua na `default` (v3) por causa do pin
- Refinamento na `default` (v3) → `Atualizado em: tonluccas.com.br/ e tonluccas.com.br/mpd/v3`

Sem URL no fim da resposta = task incompleta. O user precisa do link pra abrir/validar em prod sem ter que adivinhar.

## Path aliases (tsconfig)

- `@layouts/*` → `src/layouts/*`
- `@lib/*` → `src/lib/*`
- `@styles/*` → `src/styles/*`
- `@versoes/*` → `versoes/*`
- `@fotos/*` → `fotos/*`
- `@config/*` → `_config/*`

## Comandos

| Ação | Comando |
|---|---|
| Dev server | `npm run dev` (localhost:4321) |
| Build | `npm run build` |
| Preview build | `npm run preview` |

## Roteamento em prod (Vercel)

- `tonluccas.com.br/` → serve a **default** (PINNED em v3), via re-export no `src/pages/index.astro`. **NÃO segue `latest`.**
- `tonluccas.com.br/mpd/v1` → versão 1 canônica (URL pra ads, nunca muda)
- `tonluccas.com.br/mpd/v2` → versão 2 canônica
- `tonluccas.com.br/mpd/v3` → versão 3 canônica (e também o que `/` serve)
- `tonluccas.com.br/mpd/v4` → versão 4 canônica (variante isolada pra A/B; é o `latest` fork)
- `tonluccas.com.br/dev` → diretório interno com noindex (lista todas as versões pra navegação interna)

### Default vs latest — leia antes de criar uma nova versão

- `mpd.latest` em `versions.json` = fork mais novo (semântica histórica/cronológica).
- `mpd.default` em `versions.json` = o que `/` serve em produção. **PINNED em v3** (`default_pinned: true`).
- Ao criar v5/v6/etc, atualizar `latest` no JSON e o `src/pages/<pagina>/<v>.astro` da nova versão, mas **NUNCA tocar em `default` nem no import de `src/pages/index.astro`**. A raiz continua servindo v3 até o user pedir demote explícito.

**Por que re-export e não rewrite:** Astro gera `/index.html` em build estático. Vercel serve arquivo estático ANTES de checar rewrites, então `rewrites: [{ source: "/", destination: "..." }]` nunca dispara. Re-export no próprio `index.astro` resolve.

## Key decisions

- **Folder-per-version, não git branch.** Todas as versões ficam vivas em URLs paralelas pra A/B real.
- **`versions.json` como source of truth, não nome de pasta.** Permite mudar latest sem renomear nada.
- **AskUserQuestion como gate obrigatório.** Replica o "human review checkpoint" do constraint Output Drift do CliefNotes — sem ele, edições erradas vão pra versão errada.
- **Frozen versions são imutáveis por padrão.** Hotfix é a exceção que precisa de decisão consciente do user.
- **Diretório interno em `/dev` (noindex), raiz serve latest.** URL limpa pro share, sem expor versões em produção.
- **Cada fork = UMA mudança isolada.** Múltiplas mudanças num fork tornam impossível atribuir conversão.
