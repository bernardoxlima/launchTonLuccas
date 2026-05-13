# Setup Questionnaire — Adaptar workspace pra novo cliente

Rodar **so quando duplicar `copy/criativos/` pra um novo cliente** (Camila, Julia, etc).
Pra setup inicial do Tom Luccas, este arquivo eh referencia — nao precisa rodar.

## Como usar

Agente faz cada pergunta via AskUserQuestion. Apos coletar todas as respostas:
1. Edita `../_config/minimax.json` e `../_config/heygen.json` com os valores
2. Adapta `../_config/reference/copy-anti-ai.md` se o cliente tem regras de microcopy diferentes
3. Reseta `../01-scripts/` deletando o conteudo antigo (Tom Luccas) e regerando hooks/bodies/CTAs do novo cliente
4. Dispara `01-voice-clone.md` e `02-avatar-pick.md`

## Perguntas (1 round, todas via AskUserQuestion)

### 1. Identidade

- **Nome do cliente?** (ex: "Camila Silva")
- **Nicho?** (ex: "produtividade pra mulheres", "saude integrativa")
- **Produto/oferta principal?** (ex: "workshop de 2 dias", "mentoria 90 dias")
- **Data do evento ou da promocao?** (ex: "23-24 de maio", "rolling — sempre aberto")

### 2. Voz

- **Path absoluto do .mp3 fonte pra clonagem MiniMax?** (10s a 5min, audio limpo do cliente)
- **`voice_id` desejado pra MiniMax?** (8-256 chars, sugestao: `nome-cliente-v1` em kebab-case)

### 3. Avatar

- **Cliente vai usar o proprio rosto (custom avatar HeyGen) ou avatar pre-feito?**
  - Custom → linkar https://docs.heygen.com/docs/instant-avatar, esperar avatar_id
  - Pre-feito → rodar `02-avatar-pick.md`

### 4. Targeting

- **Quais NCs vamos atacar?** (1 ou mais entre NC1-NC5 — taxonomy.md)
- **Quais abordagens emocionais por NC?** (ex: NC2: injustica + espelho; NC3: urgencia)

### 5. Copy

- **Regras de microcopy especificas?** (palavras proibidas, tom obrigatorio, expressoes que o cliente nao usa)
  - Sim → adicionar em `../_config/reference/copy-anti-ai.md` numa secao "## Cliente-especifico"
  - Nao → manter base atual

### 6. CTA

- **Mecanismos de CTA validos pra essa oferta?** (escassez, ancoragem, urgencia temporal, outro)
- **Preco do produto + ancora cara pra ancoragem?** (ex: "workshop R$ 47 vs consultoria R$ 60k")

### 7. Pronuncia

- **Nomes proprios com pronuncia nao-obvia?** (ex: "Vorus/Vórus", "Ton/Tón")
  - Adicionar em `_config/minimax.json` campo `pronunciation_dict.tone`

## Resultado

Workspace adaptado. Setup 01 (voice) e 02 (avatar) podem rodar. Producao em `01-scripts/` em diante.
