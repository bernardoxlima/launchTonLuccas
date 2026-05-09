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
| `src/pages/index.astro` | Re-export do `page.astro` da latest — é o que `/` serve em prod | Skill atualiza o import quando latest muda |
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

1. Ler `_config/versions.json` pra identificar `latest` e `frozen[]`
2. Se o alvo está em `frozen[]`: **PARAR** e perguntar se é hotfix antes de qualquer mudança
3. Aplicar a mudança em `latest` primeiro
4. Disparar `AskUserQuestion` com 3 opções: refinamento / nova versão / hotfix
5. Executar a decisão atomicamente (versions.json + changelog + vercel.json + arquivos da versão na mesma operação)

Detalhes completos do fluxo: `.claude/skills/landing-version/SKILL.md`.

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

- `tonluccas.com/` → serve a latest (via re-export no `src/pages/index.astro`, sem rewrite)
- `tonluccas.com/mpd/v1` → versão 1 canônica (URL pra ads, nunca muda)
- `tonluccas.com/mpd/v2` → versão 2 canônica (quando criada)
- `tonluccas.com/dev` → diretório interno com noindex (lista todas as versões pra navegação interna)

**Por que re-export e não rewrite:** Astro gera `/index.html` em build estático. Vercel serve arquivo estático ANTES de checar rewrites, então `rewrites: [{ source: "/", destination: "..." }]` nunca dispara. Re-export no próprio `index.astro` resolve.

## Key decisions

- **Folder-per-version, não git branch.** Todas as versões ficam vivas em URLs paralelas pra A/B real.
- **`versions.json` como source of truth, não nome de pasta.** Permite mudar latest sem renomear nada.
- **AskUserQuestion como gate obrigatório.** Replica o "human review checkpoint" do constraint Output Drift do CliefNotes — sem ele, edições erradas vão pra versão errada.
- **Frozen versions são imutáveis por padrão.** Hotfix é a exceção que precisa de decisão consciente do user.
- **Diretório interno em `/dev` (noindex), raiz serve latest.** URL limpa pro share, sem expor versões em produção.
- **Cada fork = UMA mudança isolada.** Múltiplas mudanças num fork tornam impossível atribuir conversão.
