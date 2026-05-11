# Constraints — Landing Version Framework

Hard rules que se aplicam a TODA edição neste projeto. A skill `landing-version` checa contra esta lista antes de aplicar mudanças.

## Versionamento

1. **Versões em `frozen[]` são imutáveis.** Tudo em `_config/versions.json -> <pagina>.frozen[]` não pode ser editado exceto via decisão explícita "hotfix" do user no AskUserQuestion.
2. **Toda edição em `versoes/` passa pelo AskUserQuestion da skill.** Sem exceção, mesmo se for "só uma palavra".
3. **`_config/versions.json` é o source of truth.** Nunca confiar em nome de pasta ou no que está em disco — confiar no JSON.
4. **Nova versão = fork de latest + UMA mudança isolada.** Não acumular múltiplas mudanças num mesmo fork — vira impossível atribuir conversão a uma variável específica. Se precisa testar 3 mudanças, são 3 forks.
5. **Nunca deixar estado inconsistente.** Se cria/forka uma versão, atualiza `versions.json` + `changelog.md` + `vercel.json` na mesma operação atômica.

## Arquivos compartilhados

6. **NUNCA editar durante uma task de versão:** `src/layouts/Base.astro`, `src/lib/tracking.ts`, `src/lib/versions.ts`, `package.json`, `astro.config.mjs`, `tsconfig.json`. Eles têm seu próprio fluxo (fora da skill).
7. **NUNCA alterar:** `copy/`, `rules/copy-anti-ai.md`, `cases/`, `fotos/`. Fontes da verdade do cliente.
8. **Cada versão é independente.** Pode trocar paleta, tipografia, layout. Compartilha apenas Base + tracking + assets de `cases/` `fotos/`.

## Copy / microcopy

9. Copy fonte (do cliente) em `copy/paginas/` — nunca alterar.
10. Microcopy nova (alt text, error messages, button labels, loading states) — passar pelo checklist `rules/copy-anti-ai.md`.

## Mobile-first

11. Mobile-first é regra, não preferência. 80%+ do tráfego é Meta Ads mobile. Validar em 390px primeiro, depois 768px e 1440px.
12. Touch targets mínimos 48px. Sticky CTA bar abaixo do hero em mobile.

## Tracking

13. Todo CTA de checkout dispara `begin_checkout` via `import { trackBeginCheckout } from '@lib/tracking'`. Não criar lógica de tracking nova.
14. Cada CTA precisa de identificador específico (`cta_location`) pra atribuir conversão por seção.

## Stack lock

15. Astro 5.x + Tailwind 4 + TypeScript. Sem dependências novas sem motivo forte. Componentes `.astro` apenas (sem React/Vue). Iconify Solar pra ícones.

## Roteamento

16. **`/` (raiz) serve a versão `default` (pinned), NÃO `latest`.** Source of truth: `versions.json -> mpd.default`. O import em `src/pages/index.astro` aponta pra `default`. `latest` segue como "fork mais novo" (semântica histórica), mas não controla o que `/` serve.
17. **PINNED DEFAULT — `tonluccas.com.br` é v3 e permanece v3.** `mpd.default_pinned: true` no `versions.json` significa: ao criar novas versões (v5, v6, ...), atualizar `latest` mas NUNCA atualizar `default` nem o import em `index.astro` automaticamente. Só demover v3 se o user pedir explicitamente "trocar o default" ou "demover v3".
18. **`/dev` é o diretório interno** com `noindex` (via prop no Base + X-Robots-Tag header). Lista todas as versões (latest + frozen) lendo de `versions.json`. Não usar prefixo `_` no filename porque Astro ignora `src/pages/_*.astro` por convenção.
19. **`/<pagina>/<v>` é a URL canônica de cada versão** pra campanhas A/B. Compartilhar essas URLs em ads, não a raiz.

## Comunicação com o user

20. **Toda mudança em texto/copy, animação, cor, layout, espaçamento ou comportamento DEVE passar por `AskUserQuestion` antes da edição**, com 3 opções obrigatórias: (a) ajustar versão atual, (b) criar nova versão (fork), (c) aplicar em todas as versões ativas. Sem exceção, mesmo se o user já tiver indicado intenção — confirmar explicitamente onde a mudança vai cair.
21. **Ao terminar qualquer task, informar no chat as URLs onde a mudança vive.** Exemplo: `Atualizado em: tonluccas.com.br/mpd/v3 (e tonluccas.com.br/ porque v3 é a default)`. Se múltiplas versões foram tocadas, listar todas. Resposta sem URL final = task incompleta.
