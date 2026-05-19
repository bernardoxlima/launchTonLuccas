# Síntese Estratégica — AI no Agro de Sorriso/MT

> Documento de orientação para reunião comercial com a maior associação de produtores de Sorriso/MT (Sindicato Rural, ~400 associados) + prefeito Alei Fernandes (União, 2025–2028, técnico-agropecuário, dono do Grupo Irrigar). Janela: ~5 dias. Cliente: consultoria + implementação de AI (software + consultoria, vendor-neutral, sem hardware). Público-alvo: produtores 1.000 a 30.000+ ha, com foco nos maiores.
>
> Síntese de 6 relatórios fonte (`pesquisa-ai-agro/01` a `06`). Data: 2026-05-19.

---

## A. Mapa de Maturidade da AI no Agro Brasileiro

Maturidade definida por: existência de player consolidado no Brasil + adoção em fazendas grandes (>10 mil ha) + ROI já comprovado em case público.

- **Inexistente**: oferta nula ou apenas pesquisa acadêmica
- **Emergente**: 1–3 players ativos, adoção piloto/early adopters
- **Crescente**: 4–10 players, adoção entre 10–40% dos grandes
- **Maduro**: oferta consolidada, adoção >40%, commoditização em andamento

| Segmento | Maturidade | Quem faz | Há quanto | Adoção (% grandes prod.) | Observação |
|---|---|---|---|---|---|
| Plantio de precisão (taxa variável, RTK) | **Maduro** | John Deere, AGCO/PTx Trimble, Stara, Jacto, Precision Planting | 10+ anos | 60–67% [IMEA] | Commodity em fazendas >5 mil ha; IA agora vem embarcada em opcional de fábrica |
| Monitoramento por satélite | **Maduro** | Climate FieldView (22 Mha BR), Agrotools (R$ 50 bi monitorados), AgroSatélite/Serasa, Sensix, TerraMagna | 8+ anos | 50–60% | Bayer cobre metade da soja BR; Sentinel-2 gratuito democratiza NDVI |
| Detecção de pragas/doenças | **Crescente** | Arc Farm Intelligence (FMC, 6 Mha), Strider (Syngenta), PlantCheck ID (Embrapa), LiveFarm (bicudo), SIMA (4 Mha LATAM) | 5+ anos | 30–40% | Arc cobre Médio Norte MT (Sorriso). Apps gratuitos descem custo para zero |
| Previsão climática (estações + ML) | **Crescente** | Agrosmart (48 Mha, 100k produtores), Climate FieldView Advisor, SpectraX, INMET/CPTEC (gratuito) | 6+ anos | 30–40% | Estação meteorológica própria ainda é minoria; previsões hiperlocais ainda fracas |
| Pulverização inteligente (green-on-green) | **Crescente** | John Deere See & Spray (50% menos herbicida), SaveFarm/Cortex.AI (300+ sistemas, parceria CNH), Stara Eco Spray, Solinftec Solix | 3–5 anos | 15–25% | Janela de oferta de retrofit ainda aberta; ROI mensurável em sacas/ha |
| Armazenamento/silos com IoT+IA | **Crescente** | Kepler Weber Sync (35–60% market share, fusão com GSI), Procer CERES (6.000+ silos), Sol by RZK (ÁguIA), GSI (AGCO) | 5+ anos | 40–50% | Líder consolidado; nicho de modelo preditivo de deterioração ainda aberto |
| Logística/rotas com AI | **Emergente** | goFlux (R$ 800M, IGFF predição 12m), Hidrovias do Brasil "irupê" (calado 2cm precisão), Rumo (manutenção preditiva) | 3–4 anos | 15–25% | Sem ferramenta nacional de previsão de filas portuárias para produtor — gap claro |
| Rastreabilidade/EUDR | **Crescente (urgente)** | Agrotools (30M análises/ano), Selo Verde PA, MapBiomas, Bunge blockchain, plataforma gov BR (2026) | 3+ anos | <20% prontos | EUDR vigor 30/dez/2026 grandes/médios. Custo BR estimado em US$ 17,5 bi/ano |
| Crédito rural com IA | **Maduro** | TerraMagna (SoftBank US$ 40M, projeção R$ 18 bi/2025), Agrolend (SCFI BC, R$ 145M), Traive (BB), Nagro (Rabobank/Itaú), Sette, Fincrop (Bunge US$ 500M) | 5+ anos | 30–40% (via parceiros) | B2B financeiro; produtor é consumidor indireto |
| Seguro agrícola com IA | **Emergente** | PIN Seguradora (1ª insurtech SUSEP), Newe, EarthDaily Agro | 2–3 anos | <15% | Mercado pequeno (BR sub-segurado); regulação SUSEP em movimento |
| ERP/gestão de fazenda | **Maduro** | Aliare (Siagri/MyFarm — 65k usuários, ~40% das distribuidoras), Aegro (3 Mha, R$ 529/mês), TOTVS Multicultivo, GA Agrosoluções, Farmbox, FarmPlus (1º assistente IA em ERP BR) | 10+ anos | 80% Centro-Oeste [IMEA] | IA generativa começando a entrar (Aegro lê romaneios por foto; FarmPlus assistente) |
| Comercialização/preços (LLM) | **Crescente** | Grão Direto + AIrton (sócios ADM/Cargill/Amaggi/LDC, 90,4% precisão, 1ª venda 100% IA do mundo), Hedgepoint, StoneX, Datagro, AgRural | 2–3 anos | 25–35% (Grão Direto cobre 12 Mt em 2025) | AIrton via WhatsApp redefiniu UX. Mas hedge personalizado por perfil de caixa ainda gap |
| Pecuária de precisão | **Emergente** | iRancho (BOS, edge offline), JetBov (11M cabeças, ChatGPT da pecuária R$ 1,7M), Olho do Dono (visão 3D pesagem), Belgo/Instabov AutoTag (RFID+satélite+IA voz), Allflex SenseHub | 3–5 anos | 10–20% confinamento | MT lidera confinamento (928,7 mil cabeças/2025 projeção); mercado fragmentado |
| ILPF (Lavoura-Pecuária-Floresta) | **Emergente** | Embrapa GeoABC (ML+satélite p/ adoção), CAT Sorriso (54 fazendas RTRS = 9% da soja RTRS mundial), reNature, NaturAll | 6+ anos | MT é 2º (2,6 Mha ILP, +136% em 6 anos) | Tese técnica madura, mas AI para orquestração ainda incipiente |
| Carbono | **Emergente** | NaturAll Carbon (1º ALM Américas, parceria AMAGGI 25k ha RO), Carbonext (Shell), reNature, Bayer PRO Carbono/Reg.IA, Embrapa LIBS+ML | 3–4 anos | <5% projetos ativos em MT | SBCE sancionado dez/2024; ARR vale ~US$ 38,67/tCO₂. Para fazenda de grãos MT, mercado é nascente |
| Agrônomo digital / LLM consultivo | **Emergente** | RAImundo (Embrapa+MAPA, grátis, foco pequeno/médio), AIrton (Grão Direto), Alice AI (Solinftec, integrado ChatGPT), Turing (Psyche), ÁguIA (RZK+AWS), ChatGados (pecuária), BIA Chat | 1–2 anos | <10% | Mais aberto da pesquisa. Quase tudo é vendor-locked ou MVP. **Gap claro para LLM RAG sobre dados próprios da fazenda** |

**Leitura da matriz** (3 inferências para a reunião):

1. Tudo que é "produtividade básica" (plantio, satélite, ERP, crédito) já é commodity em fazenda grande de Sorriso. **Não há por que tentar vender mais isso.**
2. Tudo que é "decisão complexa cruzando múltiplas fontes" (LLM consultivo, integração frota mista, EUDR end-to-end, modelagem de hedge) está emergente ou inexistente. **É aqui que cabe a oferta do cliente.**
3. EUDR + carbono + ILPF são vetores "compliance-pull" em janela de 12–24 meses — quem chega primeiro com solução pronta tem precificação premium.

---

## B. Top 10 Oportunidades para Sorriso/MT

**Score composto** = (Dor 1-5) × (Viabilidade 1-5) × (Tamanho 1-5) ÷ (Competição 1-5). Máximo teórico = 125, mínimo prático ≈ 1.

| # | Oportunidade | Dor | Viab. | Tamanho | Comp. | Score |
|---|---|---|---|---|---|---|
| 1 | Copiloto LLM operacional sobre dados da fazenda | 5 | 5 | 4 | 2 | **50** |
| 2 | Compliance EUDR-as-a-Service | 5 | 5 | 5 | 3 | **42** |
| 3 | Torre de controle integrada (data lake vendor-neutral) | 5 | 4 | 5 | 2 | **50** |
| 4 | AI para decisão de comercialização + hedge personalizado | 5 | 4 | 4 | 3 | **27** |
| 5 | Dossiê de renegociação de dívida com IA | 5 | 4 | 4 | 4 | **20** |
| 6 | Otimização logística multimodal (Santos vs Miritituba) | 4 | 4 | 5 | 3 | **27** |
| 7 | Inteligência preditiva de armazenagem (deterioração + carga) | 4 | 4 | 4 | 3 | **21** |
| 8 | Gestão de mão de obra cruzando telemetria + RH | 4 | 4 | 3 | 2 | **24** |
| 9 | Estruturação de projeto de carbono em fazenda de grãos | 3 | 4 | 4 | 2 | **24** |
| 10 | Inteligência de bicudo + ferrugem (algodão + soja Sorriso) | 4 | 4 | 3 | 4 | **12** |

> Score #1 e #3 empatam em 50 — são os dois "horse-bets" da estratégia. EUDR (#2) é o cavalo de Tróia para entrar antes do prazo de dez/2026.

---

### #1 — Copiloto LLM operacional sobre dados da fazenda (score 50)

**Problema concreto.** Produtor de 5–30 mil ha em Sorriso roda hoje 5–8 sistemas em paralelo (Aegro/MyFarm no ERP, FieldView na agronomia, JD Operations + AFS Connect em frota mista, AgRural/Hedgepoint na comercialização, planilha + WhatsApp do gerente). Tomar decisão simples ("vendo agora ou espero?", "qual talhão estoura primeiro?", "quanto sobrou de fungicida?") exige cruzar manualmente 3+ telas. 70,66% dos produtores de MT relatam alta dificuldade de contratar técnico qualificado para interpretar esses dados [IMEA/Senar].

**Solução com AI.** Agente conversacional (WhatsApp + web) com RAG sobre data lake unificado da fazenda — histórico de talhão, NF de insumo, dados de máquina via ISOBUS, romaneios, ERPs financeiros, Cepea/CME. Cliente pergunta "qual minha posição de soja hoje a R$ 130?" e recebe resposta com fonte. Modelo: Claude/GPT/Gemini com fine-tuning leve + memória vetorial + ferramentas (consulta SQL, chamada API, leitura de PDF/foto). Atualização contínua via pipeline de ingestão.

**Por que nós.** Vendor-neutral (não empurra ERP nem máquina). Sem hardware = setup em semanas, não meses. Consultoria precificada + software = LTV alto. Único formato que produtor grande compra (ele tem stack legado, não quer trocar tudo).

**Concorrência e diferenciação.** Solinftec ALICE (presa ao stack Solinftec/Solix), AIrton/Grão Direto (limitado a trading), Turing/Psyche Aerospace (MVP early-stage, exige drones próprios), RAImundo (Embrapa, base pública, foco pequeno produtor), Aegro/FarmPlus assistentes (limitados ao próprio ERP). **Nenhum opera sobre data lake da fazenda do cliente.** Diferencial: "sua IA com seus dados, sem mudar nada do que você já tem."

**Mercado endereçável Sorriso/MT.** 868 fazendas >10 mil ha em MT [contexto Sorriso]; conservadoramente 200–300 em Sorriso/Médio Norte que comportam um contrato R$ 8–25 mil/mês = TAM regional R$ 25–90 milhões/ano só nesta categoria.

**Complexidade.** Média. Stack técnico é maduro (LLM API + vetor DB + n8n/orquestração + APIs públicas FieldView/JD/AFS). Complexidade está em mapear fontes de cada cliente e curar dados.

**Time-to-result.** Quick win em 30 dias (POC com 1 fazenda âncora — chat respondendo sobre histórico do ERP); valor recorrente em 90 dias.

**Revenue.** Setup R$ 35–120k (por fazenda, por complexidade) + retainer R$ 8–25k/mês + % opcional sobre ganho mensurado em projetos específicos (ex.: 15% da economia em fungicida no primeiro ano).

---

### #2 — Compliance EUDR-as-a-Service (score 42)

**Problema concreto.** EUDR entra em vigor para grandes/médios operadores em **30/dez/2026** (pequenos em 30/jun/2027). Exige polígono georreferenciado por talhão + histórico anti-31/dez/2020 + due diligence + DDS. Custo adicional estimado para o agro BR: **US$ 17,5 bi/ano** [CNN Brasil/BIP]. Sorriso exporta soja indiretamente para a UE via tradings; sem compliance, perde prêmio ou perde o cliente. Moratória da Soja foi suspensa pelo CADE em ago/2025 → certificação privada (RTRS R$ 18k/ano em Sorriso, depois R$ 9,6k) virou central, mas é cara e fragmentada.

**Solução com AI.** Pacote turnkey: (a) geração automática de polígonos por talhão a partir de CAR + GeoJSON + imagens; (b) validação anti-2020 cruzando MapBiomas + Sentinel-2 + Global Forest Watch; (c) trilha auditável de cadeia de custódia (romaneio → silo → embarque → trading); (d) emissão de DDS no formato exigido pelo importador; (e) monitoramento contínuo com alerta de qualquer mudança de cobertura.

**Por que nós.** EUDR é tarefa que **nenhum produtor quer fazer in-house** (envolve geomática + jurídico + dados internos). Vendor-neutral = pode integrar Selo Verde quando MT lançar versão estadual (Pará já fez). Sem hardware = entrega em semanas.

**Concorrência e diferenciação.** Agrotools (R$ 200M receita, ~R$ 10/consulta CAR, vende para tradings/bancos — não atende produtor direto), Sette/A de Agro (B2B financeiro), Selo Verde PA (estatal, restrito), tradings (Bunge blockchain — só Bunge). **Nenhum oferece pacote ponta-a-ponta para o produtor.** Diferencial: produtor recebe a pasta DDS pronta para mandar ao importador, sem precisar entender o regulamento.

**Mercado endereçável.** Sorriso colheu 2,08 Mt de soja em 2024. Premium EUDR-compliant tende a R$ 5–15/saca. Para 300 fazendas alvo no Médio Norte, ticket de R$ 25–80k/fazenda no setup + R$ 1,5–4k/mês monitoramento = TAM R$ 15–40 milhões/ano regional, com janela curta (12–24 meses pré-deadline).

**Complexidade.** Média-alta. Demanda pipeline geoespacial sério, mas dados-base (MapBiomas, INPE, Sentinel-2) são gratuitos.

**Time-to-result.** Quick win em 30 dias (mapa anti-2020 do cliente entregue como diagnóstico). Compliance completo em 60–90 dias.

**Revenue.** Setup R$ 25–80k + monitoramento R$ 1,5–4k/mês + R$ por DDS emitida em janela de embarque. Possível modelo de comissão por prêmio EUDR negociado com trading.

---

### #3 — Torre de controle integrada (data lake vendor-neutral) (score 50)

**Problema concreto.** Mesmo cliente do #1 mas o foco aqui é o "encanamento". Hoje, dados de plantadeira John Deere ficam no Operations Center; pulverizador Case IH no AFS Connect; colhedora New Holland no MyPLM; ERP no Aegro; comercial no Grão Direto; silos no Kepler Sync. Cada um é uma ilha. Decisão estratégica do dono é sempre baseada em PDF mandado por gerente.

**Solução com AI.** Construção de data lake unificado por fazenda + pipeline de ingestão (APIs nativas onde existem; OCR + IDP para o que vier em PDF/foto/Excel) + dashboard executivo com KPIs cruzados (sc/ha por talhão × consumo combustível × custo de defensivo × preço de venda do lote). Camada de IA por cima: detecção de anomalia, benchmarks talhão-a-talhão, projeção de safra atualizada semanalmente.

**Por que nós.** Esse é trabalho que produtor não vai contratar de OEM (Bayer não integra com Syngenta; Deere não fala com Case IH em UI única — o backend DataConnect existe mas a experiência é fragmentada). Posição vendor-neutral é o diferencial estrutural — não é narrativa, é viabilidade técnica.

**Concorrência e diferenciação.** Leaf Agriculture (API infra B2B, não vende ao produtor); Aliare/MyFarm (consolidador, mas amarra à própria stack); Solinftec ALICE (amarra à Solinftec); Aegro Premium (foco pequeno/médio). **Nenhum entrega "data lake + IA" como projeto profissional para fazenda grande.**

**Mercado endereçável.** Sobreposto a #1 (cliente é o mesmo). Mas pode ser vendido junto: torre de controle = produto físico (web app + pipelines); copiloto LLM = interface conversacional sobre ela.

**Complexidade.** Média-alta. Engenharia de dados, integração com APIs proprietárias (algumas pagas), governança de dados.

**Time-to-result.** 60 dias para primeira versão; 6 meses para maturidade plena com benchmarks históricos.

**Revenue.** Projeto fechado R$ 80–250k de setup + R$ 12–35k/mês operação + upsell de módulos (EUDR, hedge, carbono).

---

### #4 — AI para decisão de comercialização + hedge personalizado (score 27)

**Problema concreto.** Sorriso vende ~2 Mt de soja/ano. Margem 25/26 caindo 43,76% [IMEA]. Decisão "vendo agora a barter, espero CBOT, faço opção" hoje é arte mais que ciência — depende do telefone da corretora. Pesquisas acadêmicas MS (Redalyc 2009) mostram que hedge simultâneo preço+câmbio reduz drasticamente variância da receita, mas nenhum produto comercial materializou isso.

**Solução com AI.** Motor que cruza: (a) posição do cliente (estoque + contratos firmados + barter); (b) curva CBOT + B3 + Soja FOB Santos (Grão Direto); (c) câmbio + cenários macro; (d) custo de carrego (juros, armazenagem, prêmio); (e) perfil de fluxo de caixa (vencimentos, despesas safrinha). Saída: mix ótimo de cobertura semanal + alerta de gatilho.

**Por que nós.** Vendor-neutral = pode integrar Hedgepoint, StoneX, Datagro, Grão Direto sem disputar. Consultoria especializada cabe junto (educa, faz reunião mensal de revisão).

**Concorrência.** Hedgepoint/StoneX (inteligência genérica, sem personalização ao caixa do cliente); AIrton/Grão Direto (foco em fechar venda, não em estratégia de mix); AgRural (assessoria humana). **Gap claro de personalização por fluxo de caixa real da fazenda.**

**Mercado endereçável.** Top 100 fazendas Sorriso = ~1 Mt; ticket de R$ 50–150 mil/ano por fazenda em consultoria + plataforma = R$ 5–15 milhões/ano TAM regional.

**Complexidade.** Alta (modelagem financeira + integração com APIs de cotação + compliance de não-recomendação regulada).

**Time-to-result.** 90 dias para primeiro mix entregue; 6 meses para ROI mensurável (1 safra).

**Revenue.** Retainer R$ 6–15k/mês + success fee em R$/saca economizada vs benchmark de mercado.

---

### #5 — Dossiê de renegociação de dívida assistido por IA (score 20)

**Problema concreto.** MT lidera RJs do agro: 332 pedidos em 2025, dívida agregada R$ 15,7 bi [Conexão MT]. Selic 15%. Inadimplência rural PF saltou de 2,7% (jan/24) para 7,3% (jan/25). Renegociação hoje é trabalho manual de advogado + contador, com produtor refém do banco.

**Solução com AI.** Pipeline para gerar dossiê de renegociação: (a) consolida ativos (CAR, mapas de produtividade, frota, estoque); (b) projeta fluxo de caixa em 3 cenários (conservador, base, otimista) usando histórico próprio + IMEA; (c) simula propostas de carência/alongamento/haircut; (d) gera apresentação executiva para credor.

**Por que nós.** Não é serviço jurídico (não compete com escritório); é "operações + dados" — o escritório jurídico vira parceiro/canal.

**Concorrência.** Praticamente zero como produto. Existe advogado especializado em RJ agro (Mestre Medeiros), mas sem componente de dados/IA.

**Mercado endereçável.** Se 5% dos produtores grandes de Sorriso passarem por renegociação nos próximos 24 meses (cenário conservador dado o estresse), são ~15–30 cases × ticket R$ 50–200k = R$ 1–6 milhões. Nicho pequeno, alta margem.

**Complexidade.** Baixa-média (modelagem financeira + LLM para gerar narrativa).

**Time-to-result.** 30–45 dias por cliente.

**Revenue.** Projeto fechado R$ 50–200k + success fee em % do haircut conseguido (modelo "no-cure-no-pay" possível).

---

### #6 — Otimização logística multimodal Santos vs Miritituba (score 27)

**Problema concreto.** Frete Sorriso→Santos chegou a R$ 490/t em pico 2025; Sorriso→Paranaguá R$ 460–490/t; Sorriso→Miritituba R$ 250–330/t mas com fila de até 25 km na BR-163 [CNA/AgFeed/Newe]. Frete dispara até +70% na janela de colheita. Decisão de "qual rota, qual semana, qual modal" hoje é refém de quotação por WhatsApp da corretora de frete.

**Solução com AI.** Motor preditivo cruzando: (a) cotações goFlux/IGFF; (b) histórico de fila por porto (Tapajós, Santos, Paranaguá); (c) calendário de embarques programados; (d) condições climáticas (chuva = atraso BR-163 PA); (e) carteira de contratos do cliente. Saída: recomendação semanal de roteamento ótimo + alerta de janela.

**Por que nós.** Vendor-neutral em frete (não somos goFlux nem trading). Cliente quer recomendação independente.

**Concorrência.** goFlux View entrega predição de comportamento de frete em 12 meses, mas não personaliza por cliente nem prevê fila. Hidrovias do Brasil "irupê" prevê calado mas é uso interno. **Nacional para produtor: gap.**

**Mercado endereçável.** Sorriso movimenta ~2 Mt/ano. Economia de 5–10% no frete vale R$ 25–50/t = R$ 50–100 milhões em valor capturável regional. Cliente paga R$ por safra ou success fee.

**Complexidade.** Média (dados disponíveis em parte; precisa pipeline de scraping + modelagem).

**Time-to-result.** 60 dias para primeira recomendação útil.

**Revenue.** SaaS R$ 5–15k/mês por cliente + success fee.

**Nota.** Janela curta porque Ferrogrão + nova ferrovia Rumo Rondonópolis–Lucas (R$ 6,5 bi, 740 km, 1ª fase 2º sem/2026) vão reconfigurar a matriz. **Quem entender otimização multimodal pós-2026 cria vantagem de informação.**

---

### #7 — Inteligência preditiva de armazenagem (score 21)

**Problema concreto.** Embrapa estima 10% da produção nacional perde-se no armazenamento (52,3% das perdas físicas da soja vêm de armazenagem) — R$ 3,19 bi/ano só em soja [ESALQ-LOG]. Sorriso é o maior armazenador de MT (14 unidades), mas déficit estadual é de 45 Mt vs capacidade 52 Mt. Silo de 100 mil sacas com variação de 1% na umidade gera prejuízo de R$ 70 mil [Macnica].

**Solução com AI.** Camada de IA por cima do que Kepler/Procer/Sol RZK já entregam: modelos preditivos de deterioração calibrados para condições MT (calor + umidade Cerrado + ciclos safrinha). Antecipa janela ótima de aeração, predição de bolsão quente 7 dias antes, recomendação de ordem de descarga.

**Por que nós.** Não competir com hardware (Kepler/GSI); ofertar a camada de IA preditiva que eles têm fraca. Possível parceria.

**Concorrência.** Kepler Sync, Procer CERES, Sol ÁguIA — todos focam em monitoramento, não predição.

**Mercado endereçável.** ~14 unidades em Sorriso + ~50 grandes fazendas com silo próprio. Ticket por unidade R$ 15–40k setup + R$ 2–5k/mês = R$ 1,5–4 milhões/ano TAM regional.

**Complexidade.** Média (modelo ANN sobre dados de sensor já coletados pelos hardwares).

**Time-to-result.** 90–120 dias.

**Revenue.** SaaS por silo monitorado + setup.

---

### #8 — Gestão de mão de obra cruzando telemetria + RH (score 24)

**Problema concreto.** 70,66% dos produtores MT têm alta dificuldade de contratar; 57,91% citam qualificação como gargalo principal; custo de mão de obra capacitada +40% [Senar-MT]. Operador de plantadeira/pulverizador é gargalo absoluto. Telemetria John Deere/CNH mostra rendimento da máquina; ERPs mostram folha. Cruzamento operador↔produtividade↔combustível↔qualidade é manual.

**Solução com AI.** Dashboard que cruza dados de operador (RH) com telemetria (rendimento ha/h, combustível, paradas, sobreposição). Detecta operador subperformante, sugere treinamento direcionado, ranqueia turma. Integra com SENAR-MT (27 cursos da cadeia soja/milho) para encaminhamento automático.

**Por que nós.** Solução só é viável se for vendor-neutral (frota mista) + integrada com sistema de RH/ponto. Parceria natural com SENAR-MT vira diferencial.

**Concorrência.** Sankhya/Factorial fazem RH genérico; nenhum cruza com telemetria. Aiko faz gestão de frota mas não foca operador.

**Mercado endereçável.** Top 150 fazendas Sorriso/Médio Norte com >20 operadores = R$ 12–30k/ano por fazenda = R$ 2–5 milhões TAM.

**Complexidade.** Média.

**Time-to-result.** 60 dias com 1 fazenda piloto.

**Revenue.** SaaS R$ 1–3k/mês + setup + parceria SENAR-MT (canal).

---

### #9 — Estruturação de projeto de carbono em fazenda de grãos (score 24)

**Problema concreto.** SBCE sancionado dez/2024 exclui produção agrícola primária do regime obrigatório — mas mercado voluntário está aberto. Crédito ARR vale ~US$ 38,67/tCO₂ (7x REDD+). NaturAll Carbon emitiu 1º ALM das Américas em parceria com AMAGGI (25k ha RO). Para grãos em MT, mercado é nascente. Lei MT que pune signatários da Moratória voltou a valer jan/2026 → produtor tem incentivo a buscar reconhecimento alternativo.

**Solução com AI.** Diagnóstico de potencial de carbono (estoque solo, balanço emissões/sequestro) usando IA + sensoriamento + modelos Embrapa LIBS+ML. Estruturação técnica do projeto, conexão com originador (NaturAll/Carbonext/reNature), monitoramento contínuo (MRV).

**Por que nós.** Sorriso tem CAT Sorriso (54 fazendas RTRS, 9% da soja RTRS mundial) — canal natural. Vendor-neutral entre originadores.

**Concorrência.** Quase zero como produto integrado em MT. NaturAll opera em MS/RO. Bayer PRO Carbono é restrito a clientes Bayer.

**Mercado endereçável.** 100 fazendas em 5 anos × R$ 30–80k de estruturação + % sobre crédito = ticket alto, prazo longo.

**Complexidade.** Alta (depende de metodologia certificada Verra VM0042).

**Time-to-result.** 12–18 meses para primeiro crédito emitido.

**Revenue.** Projeto R$ 30–80k + % sobre venda de crédito (10–20%).

---

### #10 — Inteligência integrada de bicudo + ferrugem (algodão + soja) (score 12)

**Problema concreto.** Bicudo-do-algodoeiro pode causar perda de até 90% em lavoura. Ferrugem asiática + oídio custam >US$ 2 bi/safra ao Brasil. Sorriso tem R$ 1,3 bi em algodão (6º maior BR) + força de soja. IMAmt construindo Centro de Treinamento em Sorriso.

**Solução com AI.** Plataforma única que integra Arc Farm Intelligence (FMC) + PlantCheck ID (Embrapa) + LiveFarm bicudo + dados climáticos → mapa de risco diário por talhão + recomendação de aplicação seletiva.

**Por que nós.** Vendor-neutral cruzando dados de Arc/Strider/Embrapa.

**Concorrência.** Score baixo porque Arc Farm (FMC), Strider (Syngenta), Climate FieldView já cobrem boa parte. Competição forte. **Recomendação: tratar como módulo de upsell, não produto-pé-na-porta.**

**Mercado endereçável.** Limitado a fazendas de algodão (~30–40 grandes em Médio Norte). R$ 8–25k/ano por fazenda. Pequeno.

**Complexidade.** Média.

**Time-to-result.** 60 dias.

**Revenue.** SaaS por hectare monitorado.

---

## C. Quick Wins — Demos para a Primeira Reunião (5 dias)

Coisas concretas que podemos fazer/mostrar AO VIVO, sem depender de acesso aos sistemas do produtor.

### Quick Win 1 — Análise de margem em Sorriso ao vivo (LLM + IMEA)
**O quê.** Demonstrar um agente que responde em tempo real: "qual o break-even da soja em Sorriso safra 25/26?", "quanto sobra de LAJIDA com produtividade de 60 sc/ha?", "qual rota é mais barata hoje, Santos ou Miritituba?" — usando dados públicos IMEA/CONAB/CEPEA + prompt curado.
**Execução.** Setup 4–6h. Backend: Claude/GPT + tools (web fetch IMEA, CEPEA, AgFeed). Frontend: WhatsApp (Twilio sandbox) ou web simples.
**Mostra.** Que dominamos o vocabulário do IMEA, que o LLM pode ser ferramenta de bolso do produtor, que ROI é mensurável.

### Quick Win 2 — Mapa pré-EUDR da fazenda âncora
**O quê.** Pedir CAR de 1 fazenda do Sindicato Rural (Damiani ou Grando podem ceder a deles); gerar em 24h: polígono validado, sobreposição MapBiomas (uso anti-2020), score de risco EUDR, prévia de DDS.
**Execução.** Pipeline: download CAR shapefile → upload MapBiomas Toolkit → cruzamento com Sentinel-2 → relatório PDF.
**Mostra.** Que entregamos EUDR em dias, não meses. Vale como "amostra grátis" antes da reunião — pode ser apresentado como brinde institucional ao Sindicato.

### Quick Win 3 — Calculadora ROI por hectare ao vivo
**O quê.** Web app simples (Next.js + cálculo client-side): input "área, produtividade esperada, % adoção de IA (taxa variável, copiloto, hedge)" → output em R$/ha de economia projetada por cenário (conservador/base/agressivo), com fonte de cada premissa.
**Execução.** 1 dia de dev + 2h de calibração com números IMEA/Solinftec/SaveFarm.
**Mostra.** Capacidade de "monetizar a conversa" em segundos — produtor adora calculadora.

### Quick Win 4 — Benchmark de fazendas Sorriso via MapBiomas
**O quê.** Mapa interativo Sorriso: top 30 fazendas por área de soja contínua, taxa de expansão 2010–2025, risco EUDR semáforo. Tudo público (MapBiomas + CAR + INCRA).
**Execução.** 2 dias (Python + GeoPandas + Folium ou Mapbox).
**Mostra.** Que conhecemos o mercado caso a caso, não só "macro". Gera conversa qualificada na sala.

### Quick Win 5 — Demo de copiloto LLM lendo romaneio
**O quê.** Subir foto de romaneio (qualquer modelo) → LLM extrai dados (peso, umidade, impureza, classificação, motorista, placa) → JSON estruturado → grava em planilha + alerta se umidade > 14%.
**Execução.** 1 dia (Claude Vision + Google Sheets API).
**Mostra.** Aegro já faz isso "no premium"; nós entregamos em qualquer ERP que o cliente tenha — vendor-neutralidade na prática.

### Quick Win 6 — Comparativo de hedge da semana
**O quê.** PDF/slide de 1 página: para um cliente fictício "Fazenda Sorriso" com 30k sacas em estoque, mostramos 4 cenários de mix (vender 100% agora; barter 50% + futuro 50%; opção put + spot; espera com custo de carrego). Cálculos com cotações reais da semana (CBOT/B3/Soja FOB Santos).
**Execução.** 4h de planilha + design.
**Mostra.** Que sabemos comercialização, não só "tech".

### Quick Win 7 — Análise rápida da produção da prefeitura
**O quê.** Para o prefeito Alei Fernandes: 1 slide mostrando "mapa de calor de adoção de IA no agro de Sorriso" + projeção de PIB municipal se 30% das fazendas grandes adotarem AI integrada (impacto em arrecadação ISS + IPTU + ICMS via CARAMURU/FIAGRIL). Conecta com a pauta dele de "Smart City Sorriso" e Parque Tecnológico.
**Execução.** 1 dia (dados IBGE + IMEA + simulação simples).
**Mostra.** Que entendemos a agenda municipal, não só a do produtor — abre conversa de "projeto âncora" com a prefeitura.

---

## D. Análise Competitiva Resumida

### Blue Ocean (entrar com força)

1. **Copiloto LLM operacional sobre data lake da fazenda** — espaço mais aberto da pesquisa; Solinftec ALICE e Psyche Turing são MVPs vendor-locked. Janela de 24–36 meses antes que Bayer/Syngenta lancem versão integrada.
2. **Compliance EUDR-as-a-Service para o produtor** — Agrotools serve trader/banco; ninguém serve produtor final. Prazo 30/dez/2026 cria urgência.
3. **Torre de controle integrada vendor-neutral** — Leaf é infra B2B; Aliare amarra à própria stack. Nicho técnico-consultivo aberto.
4. **AI para hedge personalizado por fluxo de caixa** — Hedgepoint/StoneX/AgRural são humano-analíticos; AIrton é trading. Personalização ao caixa é gap acadêmico provado e comercialmente vazio.
5. **Renegociação de dívida assistida por dados** — categoria praticamente inexistente; janela curta (RJs em alta) e ticket alto.

### Competição fraca/genérica (podemos vencer)

| Categoria | Quem domina | Como vencemos |
|---|---|---|
| Recomendação agronômica via LLM | xarvio/Cropwise (embed em suíte) | Vendor-neutral + dados próprios da fazenda |
| Score de crédito com GenAI | Traive, Brain Ag, A de Agro | Foco no produtor (eles servem credor) |
| Forecast de preço personalizado | StoneX, AgRural (broadcast) | Personalização por carteira do cliente |
| AI para pecuária de corte MT | iRancho, JetBov (consumer-grade) | Foco em fazenda grande com integração ILP |
| Otimização logística para produtor | goFlux View (mercado), HBSA "irupê" (interno) | Recomendação independente cliente-a-cliente |

### NÃO ENTRAR (dominado por gigantes)

- **Plataforma de monitoramento por satélite genérica** — Bayer FieldView (22 Mha), Agrotools, AgroSatélite/Serasa, EarthDaily. Capex e dados proprietários massivos.
- **Máquinas autônomas e pulverização inteligente embarcada** — Deere See & Spray, CNH/Raven, AGCO, Solinftec, Jacto, Stara, SaveFarm/CNH. Sem hardware = não há entrada.
- **ERP rural genérico** — Aliare, Aegro, GA, Farmbox, FarmPlus consolidaram. Ciclo de venda longo, mercado maduro.
- **Crédito agro direto / banking** — Agrolend (SCFI), TerraMagna, Nagro, Sicredi/BB/Itaú BBA. Regulação BACEN é barreira.
- **Pulverização aérea / drones** — Horus, Perfect Flight, DJI Agras. Hardware-dependente.

### Tabela final — Recomendação por categoria

| Categoria | Recomendação | Justificativa em 1 linha |
|---|---|---|
| Copiloto LLM operacional | **ENTRAR** | Maior gap competitivo, escala consultiva natural |
| Compliance EUDR turnkey | **ENTRAR** | Janela 30/dez/2026, ninguém serve produtor direto |
| Data lake vendor-neutral | **ENTRAR** | Diferencial estrutural impossível para vendor-locked |
| Hedge personalizado por caixa | **ENTRAR** | Gap acadêmico provado, sem competição comercial |
| Renegociação RJ com IA | **ENTRAR (nicho)** | Categoria zerada, ticket alto, MT lidera RJs |
| Otimização logística multimodal | **ENTRAR (janela)** | Ferrogrão/Rumo reconfiguram matriz pós-2026 |
| Inteligência preditiva de silo | **FOLLOW** | Kepler/Procer/Sol dominam; entrar como camada IA parceira |
| Mão de obra + telemetria | **FOLLOW** | Bom módulo de upsell, não produto-pé-na-porta |
| Carbono em fazenda de grãos | **FOLLOW** | Nascente; entrar via parceria CAT Sorriso |
| Bicudo + ferrugem | **FOLLOW** | Arc/Strider/FieldView ocupam; só como módulo |
| Pulverização seletiva | **NÃO ENTRAR** | Hardware-dependente |
| ERP rural genérico | **NÃO ENTRAR** | Aliare/Aegro dominam, sem hardware perdemos margem |
| Satélite NDVI cru | **NÃO ENTRAR** | Bayer/Agrotools/AgroSatélite |
| Crédito direto | **NÃO ENTRAR** | Regulação BACEN, capital intensivo |
| Máquinas autônomas | **NÃO ENTRAR** | Deere/CNH/AGCO/Jacto |
| Avicultura/leiteria pesada | **NÃO ENTRAR** | Fora do perfil Sorriso |

---

## E. Recomendação Estratégica

### Posicionamento sugerido

> "Somos o único consultor + implementador independente de IA para o grande produtor de grãos do Cerrado. Não vendemos ERP, não vendemos máquina, não vendemos satélite. Pegamos os dados que você já gera em Aegro/FieldView/Deere/Case/Grão Direto e transformamos em decisão — pelo seu WhatsApp, pela sua mesa de comando, pelo seu dashboard. Sua IA, seus dados, sem amarra."

Frase-âncora de 12 palavras para abrir reunião: **"AI vendor-neutral para grande produtor — sua IA, seus dados, sem amarra."**

### 3 Serviços iniciais (oferta de mercado)

| Serviço | Descrição | Pricing | Cliente-alvo | Diferenciação |
|---|---|---|---|---|
| **Copiloto Fazenda** | Agente LLM via WhatsApp + web sobre data lake unificado do cliente. RAG sobre ERP + máquinas + comercial + financeiro. Pergunta em linguagem natural → resposta com fonte. | Setup R$ 35–120k + retainer R$ 8–25k/mês | Fazendas 5–30k ha multi-unidade | Vendor-neutral + sem hardware + entrega 30 dias |
| **EUDR Pronto** | Pacote ponta-a-ponta para 30/dez/2026: polígonos + validação anti-2020 + DDS + monitoramento + dossiê para trading. | Setup R$ 25–80k + R$ 1,5–4k/mês monitoramento + por DDS emitida | Toda fazenda que exporta direta ou indiretamente para UE | Único que entrega pacote turnkey ao produtor (não trader/banco) |
| **Torre de Controle** | Data lake unificado + dashboard executivo + camada de IA (anomalia, benchmark talhão-a-talhão, projeção semanal de safra). Base sobre a qual rodam Copiloto e EUDR. | Projeto R$ 80–250k + R$ 12–35k/mês + módulos | Grupos com 3+ fazendas ou >10k ha | Vendor-neutral + integração de frota mista + camada IA |

### Roadmap 6–12 meses

| Trimestre | Foco | Marcos |
|---|---|---|
| **T1 (Jun-Ago/2026)** | Reunião Sorriso + 2 pilotos âncora | 1ª fazenda âncora referenciada pelo Sindicato Rural (Copiloto + EUDR diagnóstico); MoU com prefeitura para projeto "Smart City Sorriso"; primeira menção pública em Aprosoja-MT |
| **T2 (Set-Nov/2026)** | Escala via canal | 5–8 fazendas pagantes; partnership formal com CAT Sorriso (canal ILPF/carbono); apresentação no Norte Show 2027; estruturação SaaS para EUDR (urgência pré-deadline) |
| **T3 (Dez/26-Fev/27)** | EUDR push | Rush de fechamento pré 30/dez/2026; meta de 20–30 fazendas com pacote EUDR ativo; primeiro mês com R$ 200k+ de MRR |
| **T4 (Mar-Mai/27)** | Consolidação + expansão regional | Replicação Lucas do Rio Verde, Sinop, Nova Mutum, Sapezal; lançamento do módulo Hedge Personalizado; primeira contratação de "agronome data scientist" sênior |

### Como estruturar a parceria com a associação

**Modelo recomendado: Associação como canal qualificado, não como sócio igual.**

- **Receita:** comissão de 10–15% sobre primeiro ano de contratos originados por indicação do Sindicato, decrescente em anos seguintes (5% no 2º, 3% no 3º+). Mantém alinhamento sem amarrar a estrutura.
- **Governança:** comitê trimestral com Damiani (presidente) + Grando (vice/Aprosoja Sorriso) + 1 representante da empresa. Pauta: backlog de demandas dos associados, validação de roadmap, transparência de resultados.
- **Exclusividade:** **NÃO oferecer.** Pedir apenas "preferência" institucional em eventos do Sindicato. Exclusividade engessa e o cliente pode se sentir refém (e produtor de MT sabe disso).
- **Contrapartidas para a Associação:** (a) 1 workshop gratuito por trimestre para associados; (b) "fellowship" gratuito para 1–2 fazendas de pequeno porte indicadas (relações públicas); (c) compartilhamento de benchmark agregado/anonimizado.
- **Encaixe com prefeitura:** propor projeto âncora "Sorriso IA Hub" — incubadora dentro do Parque Tecnológico do Alei Fernandes, com SENAR-MT como parceiro de capacitação de mão de obra (já temos 27 cursos de soja/milho na grade). Cliente vira "agente do Smart City" sem custo para a prefeitura.

### Riscos críticos (e mitigação)

| # | Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|---|
| 1 | **Produtor cético por promessas não cumpridas anteriores** ("já gastei com tech que não entregou") | Alta | Alto | Quick wins concretos na primeira reunião (Quick Wins 1, 2, 6); piloto curto (60 dias) com cláusula de saída; ROI mensurável em R$/saca, não em "transformação" |
| 2 | **Vendor incumbente (Solinftec ALICE, Aliare, Bayer) lança versão GenAI integrada nos próximos 12–18 meses** | Média-alta | Alto | Velocidade de execução (fechar 20+ contratos antes); foco em vendor-neutralidade como moat estrutural; lock-in via data lake (uma vez que o cliente unificou os dados, é caro trocar) |
| 3 | **Estresse financeiro do produtor (Selic 15%, RJs em alta) reduz orçamento de tech** | Alta | Médio | Posicionar como **redutor de custo** (não investimento adicional); modelo de success fee em % de economia para fazendas sob estresse; serviço de renegociação (#5) como entrada |
| 4 | **Conectividade rural intermitente em parte do norte de MT** | Média | Médio | Arquitetura offline-first quando relevante; integração com Starlink (top-5 adoção em MT); aproveitar que copiloto é WhatsApp (já roda em 2G/3G) |
| 5 | **Mudança regulatória (EUDR adiamento, SBCE redirecionamento)** | Média | Médio | EUDR já teve 2 adiamentos — assumir cenário de chegar a 2027 não muda muito a urgência percebida. Diversificar para Copiloto/Torre que não dependem de regulação |
| 6 | **Captação de talento sênior em geomática + ML em MT** | Alta | Alto | Construir time remoto Brasil-todo; parceria com IFs/UFMT/UFSM; estágio formal no Senai/Senar MT |

### Métricas de sucesso da reunião

A reunião precisa entregar **3 saídas concretas** (não "fica de retornar"):

1. **1 fazenda âncora referenciada** com nome+contato do gerente agrícola — para POC de 60 dias com Copiloto + EUDR diagnóstico. Idealmente uma das maiores: DGF, Riedi Agro, Prediger, Fazenda Jacanã, ou similar.
2. **Compromisso público do prefeito** (mesmo verbal, gravado em ata se possível) de mencionar o cliente no plano municipal de tecnologia / "Smart City Sorriso" + agendamento de visita à Secretaria Samatec (Clovis Picolo Filho).
3. **Espaço institucional confirmado:** workshop gratuito para associados do Sindicato Rural em até 60 dias (data marcada na hora) + uma menção em release oficial do Sindicato. Custa pouco para o Damiani, vale ouro para tração.

**Métricas secundárias** (positivas mas não bloqueantes): convite para apresentar no Imea em Campo, indicação para Aprosoja-MT (núcleo Sorriso via Grando), espaço em release do Só Notícias/Momento MT.

**KPIs pós-reunião (90 dias):** 2+ POCs ativos, 1 contrato pago assinado, 1 menção institucional pública, pipeline qualificado de 8+ fazendas com gerente identificado.

---

## Anexo — Dados-chave para citar de cabeça na reunião

> Citações exatas para uso em conversa. Cada uma estabelece "este sujeito estudou nosso mercado" em 60 segundos.

- **IMEA — custo da soja 25/26 em MT:** R$ 7.657,89/ha total, +7,69% YoY. Break-even 52,49 sc/ha. Produtividade projetada 60,45 sc/ha. **LAJIDA cai 43,76% (R$ 1.961 → R$ 1.103/ha).**
- **Em Sorriso especificamente:** COE > R$ 5.550/ha, precisa de 57 sc/ha só para cobrir COE; 77 sc/ha para custo total.
- **Recuperação judicial:** **MT lidera com 332 pedidos em 2025** (de 1.990 nacional, +56,4% YoY). Dívida agregada do agro: R$ 15,7 bi.
- **Frete pico 2025:** Sorriso→Paranaguá R$ 460–490/t; Sorriso→Santos R$ 490/t (recorde); Sorriso→Miritituba R$ 250–330/t com fila de até 25 km na BR-163.
- **Mão de obra:** 70,66% dos produtores MT têm alta dificuldade de contratar; 57,91% citam falta de qualificação como gargalo principal [IMEA/Senar].
- **EUDR vigor 30/dez/2026 grandes/médios;** custo adicional estimado US$ 17,5 bi/ano ao agro BR [BIP].
- **AI no agro:** 41,9% das fazendas BR já usam alguma IA (era 16,9% em 2022). 67% dos produtores soja MT usam alguma tech de precisão. **Radar Agtech 2025: 2.075 agtechs no Brasil, 83% usam IA, MT tem apenas 14 agtechs nativas** — gap geográfico vs peso econômico.
- **Comercialização:** Grão Direto + AIrton fez 1ª venda 100% IA do mundo (4.000 sacas em Ariquemes/RO), 90,4% precisão; rodada R$ 40M com ADM/Cargill/Amaggi/LDC como sócias.
- **Armazenagem:** Embrapa estima 10% da produção perde no armazenamento; **52,3% das perdas físicas da soja vêm de armazenagem**; R$ 3,19 bi/ano só em soja. **Sorriso é o maior armazenador de MT** (14 unidades).
- **Pecuária:** **MT lidera confinamento BR (2,2 mi cabeças em 2024; projeção 928,7k em 2025)**.
- **ILPF:** **MT é 2º maior estado** (2,6 Mha ILP em 2019, +136% em 6 anos). **CAT Sorriso = 9% da soja RTRS mundial** (54 fazendas certificadas).
- **Prefeito Alei Fernandes:** técnico-agropecuário, dono Grupo Irrigar (revenda Valley há 30 anos em Sorriso), eleito 1º turno com 51,33% pela União. Pauta: Parque Tecnológico + Smart City Sorriso. Secretário Samatec: Clovis Picolo Filho (agrônomo).
- **Sindicato Rural Sorriso:** 400+ associados; presidente Diogo Damiani (2025-2027); vice Adalberto Grando (também Aprosoja-MT núcleo Sorriso).

---

*Documento sintetizado de 6 relatórios fonte (`pesquisa-ai-agro/01-06`). Toda afirmação tem rastreabilidade até URL no documento original. Para uso interno na preparação da reunião comercial Sorriso/MT.*
