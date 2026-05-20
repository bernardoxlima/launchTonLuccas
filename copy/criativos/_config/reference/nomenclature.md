# Nomenclatura

## ID do criativo: `NC{X}_h{XX}_b{XX}_cta{XX}`

O NC eh do **hook** (dimensao de targeting). Qualquer pessoa le o nome e sabe:
- NC = nivel de consciencia do publico-alvo
- h = qual hook
- b = qual body
- cta = qual call-to-action

```
NC5_h01_b02_cta03.mp4  →  NC5 (Most Aware), Hook 1, Body 2, CTA 3
```

## Decoder

**Hooks** — numeracao globalmente unica, NC vem da pasta, angulo vem do frontmatter:

| ID | NC | Angulo | Resumo |
|----|----|--------|--------|
| h01 | NC5 | ancoragem | R$ 60k consultoria vs preco do workshop |
| h02 | NC5 | oferta-direta | Oferta direta do workshop |
| h03 | NC5 | escassez | Vagas limitadas, lote vai virar |
| h04 | NC5 | novidade | Primeira vez que o Ton faz isso |
| h05 | NC5 | urgencia | Custo concreto de nao agir agora |
| h06 | NC5 | comando | Ordem direta |
| h07 | NC5 | oferta-direta | Variante |
| h08 | NC5 | oferta-direta | Variante |
| h09 | NC5 | novidade | Variante |
| h10 | NC5 | convite | Convite direto |
| h11 | NC4 | credibilidade | Presença digital Jeep/Duolingo/BMW → mesmo raciocínio pra sua marca |
| h12 | NC4 | credibilidade | Consultoria de 60k refinada com dezenas de líderes → acesso no workshop |
| h13 | NC4 | prova-social | 82% das vagas preenchidas — especialistas, consultores, infoprodutores |
| h14 | NC4 | prova-social | Pergunta: por que reservaram antes de qualquer deadline? |
| h15 | NC4 | resultado-especifico | 5 entregas das consultorias de 60k: território, mensagem, narrativa, imagem, conteúdo |
| h16 | NC4 | resultado-especifico | Condicional: se quer os 5 entregáveis construídos ao vivo |
| h17 | NC4 | acesso-metodo | O que a consultoria de 60k cobre → mesmo processo no workshop |
| h18 | NC4 | acesso-metodo | Label para quem acompanha o trabalho do Ton — processo de 60k disponível |
| h19 | NC4 | formato-diferente | Tarefa prática em cada bloco → material construído, não anotações |
| h20 | NC4 | formato-diferente | Comando: reserva os dias, materiais e tarefas das consultorias individuais |
| h21 | NC3 | caminho-diferente | Condicional: tentou método, saiu com sensação de não parecer você — o problema nunca foi esforço |
| h22 | NC3 | espelho | Você posta toda semana, cada post morre em si mesmo, sem construir percepção clara |
| h23 | NC3 | injustica | Especialistas menos preparados ocupam mais espaço porque comunicam com mais clareza |
| h24 | NC3 | promessa-de-mecanismo | Todo workshop parte de fórmula de outra pessoa — vestir fórmula errada gera versão genérica |
| h25 | NC3 | identificacao | Condicional: tem repertório mas comunicação sai menor que deveria — resolve nos dias 23/24 |
| h26 | NC3 | custo-de-esperar | Demorar custa: enquanto sua comunicação está confusa, outros ocupam o espaço que poderia ser seu |
| h27 | NC3 | espelho | Narrativa: consultora com 10 anos + 40k seguidores não sabia o que sua marca comunicava |
| h28 | NC3 | resultado-concreto | Em 2 dias, 5 entregas ao vivo: território, mensagem, narrativa, imagem, mapa de conteúdo |
| h29 | NC3 | caminho-diferente | Pergunta: saiu de processo de marca com clareza do método alheio e zero clareza da sua história? |
| h30 | NC3 | promessa-de-mecanismo | Condicional: tentou encaixar quem você é em método errado — o processo precisa começar pelo que só você tem |

Tabela cresce conforme novos hooks sao criados. Consultar frontmatter de cada `.md` pra estado atual:
```bash
find 01-scripts/hooks -name 'h*.md' -exec grep -l '' {} \; | sort -t'h' -k2 -n
```

**Bodies:**

| ID | NC | Angulo de venda |
|----|----|-----------------|
| b01 | NC5 | Guia pratico do workshop + resultado + mao na massa |
| b02 | NC5 | Deal-driven + oferta irresistivel + pratica em tempo real |
| b03 | NC5 | Primeira vez + urgencia natural + resultado + mao na massa |
| b04 | NC3 | Diagnostico do mecanismo errado + promessa de mecanismo diferente + 5 entregaveis concretos (education) |
| b05 | NC3 | Historia de especialista em NC3 + reconhecimento da falha no mecanismo + pivot pro processo certo (story) |

**CTAs:**

| ID | Mecanismo |
|----|-----------|
| cta1 | Escassez — vagas limitadas, lote vai virar |
| cta2 | Ancoragem — R$ 60k consultoria vs preco do workshop |
| cta3 | Urgencia temporal — data fixa + custo de continuar igual |

## Exemplos de criativos montados

| Criativo | Leitura |
|----------|---------|
| `NC5_h01_b01_cta01` | NC5 (Most Aware), Hook ancoragem, Body guia pratico, CTA escassez |
| `NC5_h03_b02_cta03` | NC5 (Most Aware), Hook escassez, Body deal-driven, CTA urgencia temporal |
| `NC5_h10_b03_cta02` | NC5 (Most Aware), Hook convite, Body primeira vez, CTA ancoragem |

## Para mensuracao (Meta Ads)

O ID do criativo vai no nome do anuncio. Para filtrar performance:

- Por NC: `NC5_*`
- Por hook: `*_h01_*` vs `*_h05_*`
- Por body: `*_b01_*` vs `*_b03_*`
- Por CTA: `*_cta01` vs `*_cta02` vs `*_cta03`
- Por combo body+CTA: `*_b02_cta03` vs `*_b01_cta01`

## Regra de crescimento

Novo componente = proximo numero disponivel. Numeros nunca sao reusados.

```bash
# Proximo hook disponivel:
find 01-scripts/hooks -name 'h*.md' | sort -t'h' -k2 -n | tail -1
# → h20.md → proximo eh h21

# Proximo body:
find 01-scripts/body -name 'b*.md' | sort | tail -1
# → b03.md → proximo eh b04

# Proximo CTA:
find 01-scripts/ctas -name 'cta*.md' | sort | tail -1
# → cta3.md → proximo eh cta4
```

Awareness level vem do folder onde o arquivo vive, nao do numero.
Angulo (abordagem emocional) vem do frontmatter `angulo:`, nao do folder.

## Naming dos arquivos gerados (estagios 2-4)

Estagios 2 e 3 espelham a estrutura de 01-scripts. Estagio 4 organizado por NC do hook.

```
02-audio/hooks/NC5-most-aware/h01.mp3
02-audio/body/NC5-most-aware/b01.mp3
02-audio/ctas/cta1.mp3

03-video/hooks/NC5-most-aware/h01.mp4
03-video/body/NC5-most-aware/b01.mp4
03-video/ctas/cta1.mp4

04-finais/NC5-most-aware/NC5_h01_b01_cta01.mp4
```

## Status frontmatter (lifecycle do .md fonte)

Cada `.md` em `01-scripts/` carrega `status:` no frontmatter:

`rascunho` -> `aprovado` -> `audio-ok` -> `video-ok`

Cada stage atualiza o status do .md fonte ao concluir.
