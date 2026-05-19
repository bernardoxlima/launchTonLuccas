# Briefing Executivo — Reunião Sorriso/MT

> Para o fundador. Leitura em 8 min. Pode ser usado como guia ao vivo na reunião com Sindicato Rural de Sorriso (Diogo Damiani, presidente; Adalberto Grando, vice + Aprosoja-MT) e Prefeito Alei Fernandes (dono Grupo Irrigar, técnico-agropecuário).
> Síntese de 6 relatórios fonte. Data: 19/mai/2026.

---

## 1. O Cenário — AI no Agro Brasileiro 2025-2026

**41,9% das fazendas brasileiras já usam alguma IA** (vs 16,9% em 2022) e o Radar Agtech 2025 mapeia **2.075 agtechs no país, 83% com IA embarcada** — mas **MT tem apenas 14 agtechs nativas** [Radar Agtech 2025]. Plantio de precisão, satélite e ERP viraram commodity em fazenda grande (60–80% de adoção). O que **NÃO existe pronto** é o que importa: copiloto LLM sobre dados próprios, compliance EUDR turnkey para produtor (deadline **30/dez/2026**, custo BR estimado em **US$ 17,5 bi/ano** [BIP/Comissão UE]) e torre de controle vendor-neutral em frota mista. **A janela é agora**: 12–24 meses antes que Bayer/Solinftec/Aliare lancem versão integrada.

## 2. Por que Sorriso é o Lugar Certo

- **Maior PIB agrícola do Brasil pelo 6º ano**: R$ 7,2 bi em valor de produção agrícola 2024, sendo R$ 3,3 bi de soja e R$ 2,4 bi de milho [IBGE/PAM]. **615 mil ha de soja, 2,08 Mt/ano** — maior município produtor de soja do mundo [USDA].
- **Maior armazenador de grãos de MT** (14 unidades) e sede de Caramuru, Fiagril, Cargill, Bunge, ADM, Dreyfus, Amaggi. **MT é o estado com mais fazendas >10 mil ha do BR: 868** [INCRA].
- **Prefeito é insider técnico-agro**: Alei Fernandes vende pivôs Valley há 30 anos via Grupo Irrigar (+150 funcionários), foi vereador, eleito 1º turno com 51,33%. Pauta pública: **Parque Tecnológico + "Smart City Sorriso"**. Secretário Samatec é agrônomo (Clovis Picolo Filho). Não engole buzzword, mas tem agenda de fechar projeto âncora de tech.
- **Sindicato Rural com 400+ associados**, gestão Damiani 25–27 modernizando o sindicato. Vice Grando acumula coordenação do núcleo Aprosoja-MT em Sorriso = **canal duplo (sindical + Aprosoja) num só relacionamento**.

## 3. As 5 Maiores Oportunidades

### 3.1 — Copiloto LLM operacional sobre dados da fazenda
Produtor de 5–30 mil ha em Sorriso roda hoje 5–8 sistemas em paralelo (Aegro/MyFarm no ERP, Climate FieldView na agronomia, John Deere Operations + AFS Connect em frota mista, Grão Direto/Hedgepoint na comercialização, planilha + WhatsApp do gerente). Decisão simples ("vendo agora ou espero?", "qual talhão estoura primeiro?", "quanto sobrou de fungicida?") exige cruzar 3+ telas. **70,66% dos produtores MT têm alta dificuldade de contratar técnico qualificado** para interpretar tudo isso [IMEA/Senar]. Solução: agente conversacional (WhatsApp + web) com RAG sobre data lake unificado — pergunta em linguagem natural, resposta com fonte. **Nenhum concorrente opera sobre data lake do cliente**: Solinftec ALICE é vendor-locked, AIrton só faz trading, RAImundo é base pública, FarmPlus/Aegro só leem o próprio ERP. TAM regional conservador: 200–300 fazendas alvo × R$ 8–25k/mês = **R$ 25–90 milhões/ano**.

### 3.2 — Compliance EUDR-as-a-Service
**EUDR entra em vigor para grandes/médios em 30/dez/2026**; pequenos em 30/jun/2027. Exige polígono georreferenciado por talhão + histórico anti-31/dez/2020 + DDS + due diligence. Custo BR adicional estimado em **US$ 17,5 bi/ano** [BIP]. Sorriso exporta soja indireta para a UE via todas as tradings da praça — sem compliance, perde prêmio (R$ 5–15/saca) ou perde o cliente. Moratória da Soja foi **suspensa pelo CADE em ago/2025**, certificação privada (RTRS R$ 18k/ano em Sorriso) virou central mas é cara e fragmentada. Solução turnkey: geração automática de polígonos (CAR + GeoJSON) + validação anti-2020 (MapBiomas + Sentinel-2 + GFW) + trilha de custódia + emissão de DDS + monitoramento contínuo. **Agrotools, Sette, Selo Verde PA atendem trader/banco — ninguém serve produtor final.** TAM Médio Norte: 300 fazendas × R$ 25–80k setup + R$ 1,5–4k/mês = **R$ 15–40 milhões/ano em janela de 12–24 meses**.

### 3.3 — Torre de controle integrada (data lake vendor-neutral)
Dados de plantadeira Deere ficam no Operations Center; pulverizador Case IH no AFS Connect; colhedora New Holland no MyPLM; ERP no Aegro; comercial no Grão Direto; silos no Kepler Sync. **Cada um é uma ilha. Decisão do dono é sempre por PDF do gerente.** Solução: data lake unificado por fazenda + pipeline de ingestão (APIs nativas + OCR/IDP para PDF/foto/Excel) + dashboard executivo cruzando sc/ha × consumo combustível × custo defensivo × preço de venda. Camada IA: anomalia, benchmark talhão-a-talhão, projeção semanal de safra. **Vendor-neutralidade não é narrativa, é viabilidade técnica**: Bayer não integra com Syngenta, Deere não fala com Case IH em UI única. Leaf Agriculture é infra B2B, Aliare/MyFarm amarra à própria stack. Vende junto com o Copiloto (mesmo cliente): R$ 80–250k setup + R$ 12–35k/mês.

### 3.4 — AI para decisão de comercialização + hedge personalizado
Sorriso vende ~2 Mt de soja/ano. **LAJIDA 25/26 cai 43,76%** (R$ 1.961 → R$ 1.103/ha) [IMEA]. Decisão "vendo agora a barter, espero CBOT, faço opção" hoje é arte mais que ciência — depende do telefone da corretora. Motor que cruza posição do cliente (estoque + barter + contratos) × curva CBOT/B3/FOB Santos × câmbio × custo de carrego × fluxo de caixa real → mix ótimo de cobertura semanal. **Hedgepoint/StoneX/AgRural são humano-analíticos genéricos; AIrton/Grão Direto fecha venda mas não estratégia. Personalização ao caixa do produtor é gap acadêmico provado e comercialmente vazio.** Top 100 fazendas Sorriso × R$ 50–150k/ano = **R$ 5–15 milhões/ano TAM regional**.

### 3.5 — Dossiê de renegociação de dívida com IA
**MT lidera RJs do agro: 332 pedidos em 2025**, dívida agregada R$ 15,7 bi [Conexão MT]. Selic 15%. Inadimplência rural PF saltou de 2,7% (jan/24) para 7,3% (jan/25). Pipeline para gerar dossiê de renegociação: consolida ativos (CAR + mapas + frota + estoque), projeta fluxo em 3 cenários, simula propostas de carência/alongamento/haircut, gera apresentação executiva para credor. **Não compete com escritório jurídico — o advogado vira parceiro/canal.** Categoria praticamente zerada como produto. Cenário conservador: 5% dos grandes de Sorriso em renegociação nos próximos 24 meses = 15–30 cases × R$ 50–200k = R$ 1–6 milhões. **Nicho pequeno, alta margem, "no-cure-no-pay" possível.**

## 4. O Que Já Vimos Funcionar — Cases Reais

- **Solinftec (Solix) em fazenda referência**: -15% de defensivos e +8% de produtividade com pulverização seletiva green-on-green; meta de 700 robôs até fim de 2026. **Prova de que o produtor de MT paga por IA quando o ROI vem em sc/ha.** [Solinftec]
- **AIrton (Grão Direto + ADM/Cargill/Amaggi/LDC)**: **1ª venda 100% AI do mundo** (4.000 sacas em Ariquemes/RO), **90,4% de precisão** em recomendação de preço via WhatsApp; rodada de R$ 40M com as 4 maiores tradings como sócias. **WhatsApp redefiniu a UX que o produtor aceita.** [Grão Direto / Reuters]
- **TerraMagna (SoftBank US$ 40M, projeção R$ 18 bi/2025)**: produtor MT reduziu barter de 56% a.a. para metade, +20% de margem. **Validou que dado granular vira economia financeira real.** [World AgriTech]
- **CAT Sorriso (Cooperativa de Adesão Voluntária)**: **54 fazendas certificadas RTRS = 9% da soja RTRS mundial saindo de Sorriso**. Canal natural para EUDR e carbono, já organizado, fala em nome do produtor local. [CAT Sorriso]

## 5. Nossa Proposta de Entrada — 3 Serviços Iniciais

### Copiloto Fazenda
**O quê.** Agente LLM via WhatsApp + web sobre data lake unificado do cliente (ERP + máquinas + comercial + financeiro). Pergunta em linguagem natural → resposta com fonte rastreável.
**Para quem.** Fazendas 5–30 mil ha multi-unidade (DGF, Riedi Agro, Prediger e similares).
**Pricing.** Setup **R$ 35–120k** + retainer **R$ 8–25k/mês** + opcional % sobre economia mensurada.
**Tempo até 1º resultado.** **Quick win em 30 dias** (POC respondendo sobre histórico do ERP); valor recorrente em 90 dias.

### EUDR Pronto
**O quê.** Pacote turnkey 30/dez/2026: polígonos por talhão + validação anti-2020 (MapBiomas + Sentinel-2 + GFW) + DDS no formato do importador + monitoramento contínuo + dossiê para trading.
**Para quem.** Toda fazenda que exporta direta ou indiretamente para a UE (= praticamente todas em Sorriso).
**Pricing.** Setup **R$ 25–80k** + monitoramento **R$ 1,5–4k/mês** + valor por DDS emitida em janela de embarque.
**Tempo até 1º resultado.** **Mapa anti-2020 entregue como diagnóstico em 30 dias** (vale como "amostra grátis"); compliance completo 60–90 dias.

### Torre de Controle
**O quê.** Data lake unificado + dashboard executivo + camada de IA (anomalia, benchmark talhão-a-talhão, projeção semanal de safra). Base sobre a qual rodam o Copiloto e o EUDR.
**Para quem.** Grupos com 3+ fazendas ou >10 mil ha consolidados.
**Pricing.** Projeto fechado **R$ 80–250k setup** + **R$ 12–35k/mês** + módulos (hedge, carbono, mão de obra).
**Tempo até 1º resultado.** **60 dias para primeira versão útil**; 6 meses para maturidade plena com benchmark histórico.

## 6. Quick Wins para Demonstrar AO VIVO na Reunião

- **Demo Copiloto IMEA no laptop/celular**: agente que responde em tempo real "qual o break-even da soja em Sorriso safra 25/26?", "quanto sobra de LAJIDA com 60 sc/ha?", "qual rota é mais barata hoje, Santos ou Miritituba?" — usando dados públicos IMEA/CONAB/CEPEA + Claude/GPT com tools. Setup 4–6h, mostra que dominamos o vocabulário do IMEA e que IA cabe no bolso do produtor.
- **Mapa pré-EUDR de 1 fazenda âncora em 24h**: pedir CAR do Damiani ou Grando (eles podem ceder o deles) e devolver polígono validado + sobreposição MapBiomas + score de risco EUDR + prévia de DDS. Vale como brinde institucional ao Sindicato — entrega antes mesmo de fechar contrato.
- **Calculadora ROI por hectare ao vivo**: web app simples (área × produtividade esperada × % adoção IA) → R$/ha de economia projetada em 3 cenários, com fonte de cada premissa (IMEA/Solinftec/SaveFarm). Produtor adora calculadora — monetiza a conversa em segundos.
- **Slide para o prefeito Alei**: "mapa de calor de adoção de IA no agro de Sorriso" + projeção de impacto em ISS/IPTU/ICMS se 30% das fazendas grandes adotarem IA integrada. Conecta direto com a pauta de "Smart City Sorriso" e Parque Tecnológico.

## 7. Próximos Passos — O Que Precisamos Sair Com

1. **1 fazenda âncora referenciada com nome + contato do gerente agrícola** para POC de 60 dias (Copiloto + diagnóstico EUDR). Alvos preferenciais: **DGF, Riedi Agro, Prediger, Fazenda Jacanã** ou similar do top do Sindicato.
2. **Compromisso público do prefeito** (verbal, idealmente em ata) de mencionar a parceria no plano municipal de tecnologia / "Smart City Sorriso" + **agendamento de reunião na Samatec com Clovis Picolo Filho** em ≤15 dias.
3. **Data marcada na hora para workshop gratuito aos 400+ associados do Sindicato em até 60 dias** + uma menção em release oficial. Custa pouco para o Damiani, vale ouro para tração.
4. **Lista das top 20 fazendas associadas com >5 mil ha** (Sindicato Rural tem esse dado interno; nenhum ranking público de Sorriso existe) — base do nosso pipeline qualificado.
5. **[recomendação:] Acordo de canal não-exclusivo com o Sindicato**: comissão 10–15% sobre 1º ano de contratos originados por indicação, decrescente. Mantém alinhamento sem amarrar a estrutura. **NÃO oferecer exclusividade** — produtor de MT já se sentiu refém antes e percebe.

## 8. Cheat-sheet — Números Para Citar de Cabeça

- **Sorriso**: 615 mil ha de soja, 2,08 Mt/ano, R$ 7,2 bi de PIB agrícola, 6º ano como maior PIB agro do BR [IBGE/PAM 2024]
- **Custo soja MT 25/26**: R$ 7.657,89/ha total (+7,69% YoY), break-even 52,49 sc/ha, produtividade projetada 60,45 sc/ha [IMEA]
- **Em Sorriso especificamente**: COE > R$ 5.550/ha, precisa de 57 sc/ha só para cobrir COE; 77 sc/ha para custo total [IMEA]
- **LAJIDA da soja MT 25/26: -43,76% YoY** (R$ 1.961 → R$ 1.103/ha) [IMEA]
- **MT lidera RJs do agro: 332 pedidos em 2025** (de 1.990 nacional, +56,4% YoY), dívida agregada R$ 15,7 bi [Conexão MT / Mestre Medeiros]
- **EUDR vigente para grandes/médios desde 30/dez/2024 com cumprimento até 30/dez/2026**; custo BR adicional US$ 17,5 bi/ano [Comissão UE / BIP]
- **Mão de obra**: 70,66% dos produtores MT têm alta dificuldade de contratar; 57,91% citam qualificação como gargalo principal; custo +40% [IMEA/Senar]
- **Frete pico 2025**: Sorriso→Santos R$ 490/t (recorde), Sorriso→Paranaguá R$ 460–490/t, Sorriso→Miritituba R$ 250–330/t com fila de até 25 km na BR-163 [CNA/AgFeed/Newe]
- **Adoção de IA**: 41,9% das fazendas BR já usam IA (era 16,9% em 2022); 67% dos sojicultores MT usam tech de precisão; Centro-Oeste 80% com software de gestão [Radar Agtech 2025 / Senar-MT]
- **Agtechs**: 2.075 agtechs no BR, 83% com IA, mas **MT tem apenas 14 agtechs nativas** — gap geográfico flagrante vs peso econômico [Radar Agtech 2025]
- **Armazenagem**: Embrapa estima 10% da produção perde no armazenamento; 52,3% das perdas físicas da soja vêm de armazenagem; R$ 3,19 bi/ano só em soja. **Sorriso é o maior armazenador de MT** com 14 unidades [ESALQ-LOG / Macnica]
- **Pecuária + ILPF**: MT lidera confinamento BR (projeção 928,7k cabeças em 2025); MT é 2º estado em ILPF (2,6 Mha, +136% em 6 anos); **CAT Sorriso = 9% da soja RTRS mundial** (54 fazendas)

---

*Fundador: a frase-âncora para abrir a conversa é "AI vendor-neutral para grande produtor — sua IA, seus dados, sem amarra." Não venda IA. Venda solução para margem (dor #1), mão de obra (dor #6) e gestão multi-fazenda (dor #10). Comece pelo bolso, não pela tecnologia. Se sair da reunião com fazenda âncora + compromisso do prefeito + data de workshop, ganhamos a semana.*
