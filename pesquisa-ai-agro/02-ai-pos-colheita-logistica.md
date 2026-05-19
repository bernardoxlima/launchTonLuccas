# AI Aplicada em Pós-Colheita, Armazenamento e Logística — Brasil

**Foco:** apoiar reunião comercial com associação de produtores de Sorriso/MT (maior produtor individual de soja do mundo, ~615 mil ha cultivados, 2,08 Mt em 2024, R$ 7,2 bi em valor de produção agrícola). Documento dirigido a consultoria/implementação de AI (software + consultoria, sem hardware) para produtores 1.000–30.000+ ha.

**Data de elaboração:** Maio/2026.

---

## Sumário executivo

1. O Brasil colhe ~333 Mt de grãos em 2024/25 mas só tem capacidade estática para ~213 Mt — déficit de ~120 Mt. Investimento necessário estimado em R$ 148 bi para fechar gap até 2025/26 ([AF News](https://afnews.com.br/deficit-de-armazenagem-de-graos-no-brasil-exige-r-148-bilhoes-em-investimentos-e-acende-alerta-logistico-para-safra-2025-26/)).
2. **Embrapa estima que 10% da produção nacional é perdida no armazenamento** (com armazenagem respondendo por 52,3% das perdas físicas totais da soja). Em valores: R$ 3,19 bi/ano só em soja, R$ 1,31 bi em milho ([ESALQ-LOG](https://esalqlog.esalq.usp.br/perdas-na-logistica-de-graos-atingem-deficit-de-mais-de-2-bilhoes-de-reais); [O Presente Rural](https://opresenterural.com.br/brasil-colhe-mais-mas-ainda-perde-10-dos-graos-no-armazenamento/)).
3. **Tecnologias de IoT+IA podem reduzir perdas em até 70%** segundo a Embrapa (sensores + algoritmos preditivos para temperatura/umidade/CO2) ([Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/17916557/sistema-inteligente-armazena-graos)).
4. **Custo logístico Sorriso → portos (2024/25):** Santos R$ 490/t, Paranaguá R$ 460–490/t, Miritituba R$ 250–330/t (mas com filas de 25 km em pico de safra). Frete de Sorriso a Santos chega a US$ 100/t mais caro que para o Arco Norte ([CNA Brasil](https://cnabrasil.org.br/noticias/soja-pre%C3%A7o-do-frete-sobe-38-em-um-m%C3%AAs-a-partir-de-sorriso-mt); [Brasil 61](https://brasil61.com/n/saiba-o-que-esta-por-tras-do-protagonismo-do-arco-norte-no-escoamento-da-producao-agropecuaria-brasileira-bras2411503)).
5. **AI em logística reduz custos entre 5% e 20%** (McKinsey). 43% das empresas brasileiras já usam IA em TMS. Plataformas como goFlux (R$ 800M aportados) e Hidrovias do Brasil (sistema "irupê" com previsão de 2cm de calado) são casos consolidados ([TOTVS](https://www.totvs.com/blog/gestao-logistica/ia-no-transporte/); [AgFeed](https://agfeed.com.br/negocios/unicornio-dos-fretes-investe-r-800-milhoes-e-em-ia-para-transportar-supersafra/); [Telesintese](https://telesintese.com.br/hidrovias-amplia-seguranca-no-transporte-de-cargas-com-adocao-da-ia/)).
6. **EUDR entra em vigor em 30/dez/2026** para grandes/médios operadores (30/jun/2027 micro/pequenos) — exige geolocalização de talhões e prova de não-desmatamento pós-31/dez/2020. Custo adicional estimado em US$ 17,5 bi/ano para o agro brasileiro ([CNN Brasil](https://www.cnnbrasil.com.br/agro/eudr-pode-gerar-custo-adicional-de-us-175-milhoes-por-ano-ao-agro/); [PSQR](https://psqr.eu/publications-resources/eu-deforestation-regulation-eudr-2026-update-new-deadlines-for-companies/)).
7. **Moratória da Soja foi suspensa pelo CADE em ago/2025** — RTRS, ProTerra e ISCC viram os mecanismos privados centrais. Certificação RTRS em Sorriso/MT: R$ 18.000 no primeiro ano, R$ 9.600 nos seguintes ([Insper Agro](https://agro.insper.edu.br/midia/artigos/depois-da-moratoria-como-garantir-que-a-soja-brasileira-nao-seja-associada-ao-desmatamento)).
8. **Visão computacional aplicada a classificação de grãos** já entrega análises em 1–4 minutos vs. 90 min do método manual (Neosilos, Tbit GroundEye, Brasil Agritest GRAS).
9. **Ferrogrão:** leilão programado para set/2025, projeto deve gerar redução estrutural de frete entre Sinop e Miritituba (933 km). **Nova ferrovia Rumo Rondonópolis–Lucas do Rio Verde:** R$ 6,5 bi, 740 km, conclusão 2º sem 2026, capacidade 10 Mt/ano ([Tecnologística](https://www.tecnologistica.com.br/br/noticias/infraestrutura/20778/governo-federal-agenda-leilao-da-ferrograo-para-setembro-e-avanca-na-estruturacao-do-projeto/); [CompreRural](https://www.comprerural.com/com-r-65-bilhoes-rumo-cria-mega-ferrovia-para-conectar-dois-gigantes-dos-graos/)).
10. **Mercado endereçável em MT:** 76% dos produtores MT têm perfil inovador segundo AgriHub/Famato — base receptiva para SaaS de AI ([Sistema Famato](https://sistemafamato.org.br/blog/2024/10/30/estudo-inedito-do-agrihub-revela-que-76-dos-produtores-rurais-de-mato-grosso-tem-perfil-inovador/)).

---

## 1. Armazenamento e Silos

### 1.1 Dimensão do problema

**Perdas pós-colheita Brasil (dados quantitativos):**

| Indicador | Valor | Fonte |
|---|---|---|
| % perda nacional no armazenamento (Embrapa) | ~10% | [Embrapa via O Presente Rural](https://opresenterural.com.br/brasil-colhe-mais-mas-ainda-perde-10-dos-graos-no-armazenamento/) |
| % perda total (todas as fases logísticas) | 13–15% | [Conab; PensarAgro](https://pensaragro.com.br/brasil-perde-15-da-safra-durante-o-transporte-por-falta-de-infraestrutura/) |
| Volume perdido por safra (estimativa Conab) | ~36 Mt | [AF News](https://afnews.com.br/deficit-de-armazenagem-de-graos-no-brasil-exige-r-148-bilhoes-em-investimentos-e-acende-alerta-logistico-para-safra-2025-26/) |
| Valor perdido por safra | R$ 84 bi (perdas físicas totais) | [AF News](https://afnews.com.br/deficit-de-armazenagem-de-graos-no-brasil-exige-r-148-bilhoes-em-investimentos-e-acende-alerta-logistico-para-safra-2025-26/) |
| Perda específica soja (ESALQ-LOG, 1,17%) | R$ 3,19 bi/ano | [ESALQ-LOG](https://esalqlog.esalq.usp.br/perdas-na-logistica-de-graos-atingem-deficit-de-mais-de-2-bilhoes-de-reais) |
| Perda específica milho (1,27%) | R$ 1,31 bi/ano | [ESALQ-LOG](https://esalqlog.esalq.usp.br/perdas-na-logistica-de-graos-atingem-deficit-de-mais-de-2-bilhoes-de-reais) |
| Armazenagem como % das perdas físicas da soja | 52,3% | [ESALQ-LOG](https://esalqlog.esalq.usp.br/perdas-na-logistica-de-graos-atingem-deficit-de-mais-de-2-bilhoes-de-reais) |
| Capacidade estática 2025 | 212–213 Mt | [Conab via Estado de Minas](https://www.em.com.br/agropecuario/2025/10/7278424-com-safras-recorde-brasil-nao-tem-armazens-suficientes-para-graos.html) |
| Produção 2024/25 | 332,9 Mt | [AF News](https://afnews.com.br/deficit-de-armazenagem-de-graos-no-brasil-exige-r-148-bilhoes-em-investimentos-e-acende-alerta-logistico-para-safra-2025-26/) |
| Déficit % vs colheita | ~36% (suficiente p/ 64% da safra) | idem |
| Investimento necessário p/ fechar gap | R$ 148 bi | idem |

**Lógica do dano térmico/biológico:** soja com umidade >15% tem taxa respiratória elevada — gera calor + libera água → "bolsões quentes" → fungos *Aspergillus* e *Penicillium* → grãos ardidos, fermentados, downgrade comercial ([Noticia Marajó](https://noticiamarajo.com.br/agronegocio/pragas-na-armazenagem-da-soja-elevam-perdas-e-custos-no-pos-colheita-no-brasil/)). Silo com 100 mil sacas e variação de 1% na umidade pode gerar prejuízo de R$ 70 mil ([Macnica DHW](https://blog.macnicadhw.com.br/agronegocio/monitoramento-silos-agronegocio/)).

**Distribuição regional da capacidade (Conab):** Centro-Oeste lidera com 84,5 Mt (~40%), Sul 72,3 Mt, Sudeste 32,3 Mt. MT é o estado com maior gap absoluto (produz ~50,8 Mt só de soja em 2024/25, sem incluir milho safrinha).

### 1.2 AI/IoT para monitoramento de silos — players

**Kepler Weber — Plataforma Sync.** Líder absoluta no Brasil (35–60% de market share segundo a fonte; ~50% das unidades existentes). Sync combina termometria digital via microchip dentro do silo, KW Cloud (portal IoT acessível por celular/desktop), e aeração automática que cruza sensores e estação meteorológica para decidir quando ligar ventilação ([Kepler Weber](https://www.kepler.com.br/sync); [Portal do Agronegócio](https://www.portaldoagronegocio.com.br/noticia/kepler-weber-lanca-plataforma-inedita-para-sistemas-de-armazenagem-com-uso-de-iot-184707)). **Preço:** assinaturas variam por serviço/volume, mas reportadamente "na ordem de dezenas de milhares de reais por mês" ([Brazil Journal](https://braziljournal.com/kepler-weber-usa-internet-of-things-para-aumentar-receita-recorrente/)). **Relevância MT:** alta — Kepler Weber tem forte presença em MT; iniciou exclusividade para fusão com GSI (criaria grupo com ~42% do market share nacional) ([Agrimídia](https://www.agrimidia.com.br/graos/fusao-kepler-weber-e-gsi-pode-criar-gigante-de-armazenagem-de-graos-com-quase-42-do-mercado-brasileiro/)).

**GSI Brasil (AGCO).** Sistemas de termometria, sensor de umidade, e plataforma Digital Grain. Unidade em Marau (RS), atende todo o Brasil. Silos de 90m³ a 41.165m³. Posiciona automação como redutor de gasto energético + insumos + defensivos ([GSI](https://www.grainsystems.com/sa/pt/gsi-blog/armazenazem/); [Grain Systems](https://www.grainsystems.com/pt_SA.html)). **Preço:** não publicado; sob consulta.

**Procer (Criciúma/SC) — Software CERES.** Hardware proprietário + software CERES Web. Monitora >6.000 silos/armazéns no Brasil (~14% da capacidade estática nacional). Módulos: armazenagem, secador, gestão de unidade. Tem versão customizável com tiers bronze/silver/gold/platinum ([Procer](https://www.procer.com.br/solucoes/armazenagem-de-graos/); [Noticenter](https://www.noticenter.com.br/n.php?ID=32468&T=procer-lanca-versao-customizavel-de-plataforma-para-gestao-inteligente-da-armazenagem-de-graos)). **Preço:** não publicado.

**Sol by RZK — Sol Gestão de Silos.** Plataforma SaaS do Grupo RZK (cobertura 3G/4G em 12 milhões de hectares, ~450 torres, ~66 mil propriedades em 14 estados). Cubagem instantânea, saídas diárias, níveis de estoque + temperatura/umidade via celular ou desktop. Lançou em 2025 o **Sol ÁguIA** (IA generativa agrícola) ([Sol by RZK](https://solrzk.com.br/); [TI Inside](https://tiinside.com.br/23/04/2025/solucao-ia-da-sol-by-rzk-promete-trazer-eficiencia-a-gestao-agricola/)). **Relevância MT:** alta — Grupo RZK tem forte presença regional.

**Embrapa Instrumentação — sistemas pioneiros.** Desenvolveu o "Sistema Inteligente para Monitoramento Ambiental em Silos Agrícolas" (publicado desde 1999). Estima que automação + controle digital reduz perdas em até 70% ([Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/17916557/sistema-inteligente-armazena-graos)).

**Thermopar, RST Silos, Agrotec, Termopar, Nivetec.** Fornecedores nacionais de termometria com camadas de software variável. RST Silos tem operação histórica em MT, PA e MS ([RST Silos](https://www.rstsilos.com.br/sistema-termometria-silos)).

### 1.3 AI para classificação de grãos por visão computacional

Substitui o "olhômetro" tradicional do classificador humano. Mede umidade, cor, defeitos (ardidos, mofados, quebrados, esverdeados, imaturos), impurezas. Tempo: **1–4 minutos vs. 90 min do método manual.**

**Brasil Agritest — GRAS (Grain Analytic System).** Parceria com Embrapa Instrumentação. Visão computacional + IA + técnicas fotônicas. Analisa grãos sem cortá-los. Premiada na 2ª Agrifutura ([Brasil Agritest](https://brasilagritest.com/); [Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/71632904/tecnologia-para-classificacao-da-qualidade-de-graos-de-soja-e-destaque-no-famato-embrapa-show?p_auth=x8qFLPbK)). Apresentação no **Famato Embrapa Show**, sinal de penetração em MT.

**Neosilos (Curitiba/PR) — NVisio.** Equipamento com câmera + algoritmos de IA. Operador insere 125g de soja ou 250g de milho seguindo padrões do Mapa. Análise em **1 min 20 s.** Time multidisciplinar (computação, engenharia mecânica, agronomia) ([AgFeed](https://agfeed.com.br/agtech/startup-neosilos-tenta-aposentar-o-olhometro-e-automatizar-a-classificacao-de-graos-com-cameras-e-ia/); [O Presente Rural](https://opresenterural.com.br/tecnologia-paranaense-automatiza-analise-de-graos/)).

**Tbit (MG) — GroundEye Grains.** Mais de 300 características lidas por grão/semente. Classifica soja, milho, trigo. Originada na Inbatec/UFLA. Genesis Group + Tbit lançaram em 2018 o primeiro sistema mundial de classificação digital de grãos de soja ([Tbit](https://www.tbit.com.br/2018/03/06/worlds-first-grains-classifier-was-launched/?lang=en); [Agrolink](https://www.agrolink.com.br/noticias/genesis-group-e-tbit-incorporam-tecnologia-de-imagem-a-classificacao-de-graos-de-soja_404451.html)).

**NIR portátil (Spectral Solutions + Embrapa).** Espectroscopia de infravermelho próximo em dispositivo portátil — mede proteína, umidade, óleo, carboidratos sem destruir amostra. **GrainSense A-2** comercializado pela Alfa Mare ([Alfa Mare](https://alfamare.com.br/produtos/nir-portatil-para-graos-grainsense-a-2/); [Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/92399932/inovacao-na-analise-de-graos-abre-perspectivas-para-a-producao-de-milho-e-sorgo-no-brasil)).

### 1.4 Modelos preditivos de deterioração

Literatura científica 2024 (J. Stored Products Research) mostra que **redes neurais artificiais (ANN) são o melhor método** para prever deterioração de soja em armazenamento real, superando árvores de decisão e random forest. Modelos BP neural networks e SVM aplicáveis a trigo, milho, arroz e soja ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0022474X24001437); [ScienceDirect — AI-driven grain storage](https://www.sciencedirect.com/science/article/pii/S0022474X25000475)).

**Detecção de micotoxinas via Compact Convolutional Transformer:** acurácia de 83,33% em trigo contaminado ([PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11511114/)).

**Sensores de CO2 + temperatura + IA** detectam precocemente focos de fermentação ou pragas e acionam aeração ([Agro Summit](https://portal.agrosummit.com.br/tecnologia-de-monitoramento-em-silos-reduz-perdas-e-aumenta-lucratividade-no-campo)).

**Cubagem 3D por LiDAR e drones (Geotech Brasil):** captura volumétrica milimétrica de estoque em silos/armazéns/sacos ([Geotech](https://geotechbrasil.com.br/atuacao/controle-volumetrico-de-iventarios/)).

### 1.5 Quanto AI pode reduzir as perdas?

- **Embrapa: até 70%** de redução com automação + controle digital ([Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/17916557/sistema-inteligente-armazena-graos)).
- Para um produtor de Sorriso com 10.000 ha (produzindo ~36.000 t de soja a 3,6 t/ha): cada 1% de perda evitada = ~360 t × ~R$ 130/saca de 60kg = ~R$ 780 mil/safra. Reduzir perdas de 3% para 1% pode liberar ~R$ 1,5 milhão/ano por fazenda média.

---

## 2. Logística e Transporte

### 2.1 Custo logístico Sorriso → portos (2024/25)

| Rota | R$/t (pico 2025) | R$/t (média) | Distância aprox | Fonte |
|---|---|---|---|---|
| Sorriso → Santos (SP) | R$ 490 | R$ 450–510 | ~1.900 km | [CNA Brasil](https://cnabrasil.org.br/noticias/soja-pre%C3%A7o-do-frete-sobe-38-em-um-m%C3%AAs-a-partir-de-sorriso-mt) |
| Sorriso → Paranaguá (PR) | R$ 460–490 | R$ 440–490 | ~2.000 km | [CNA Brasil](https://cnabrasil.org.br/noticias/preco-do-frete-para-transportar-soja-continua-subindo-em-mato-grosso-aponta-imea) |
| Sorriso → Miritituba (PA) | R$ 250–330 | R$ 165–250 | ~1.100 km | [Notícias Agrícolas](https://www.noticiasagricolas.com.br/noticias/soja/414555-congestionamento-nos-portos-encarece-a-logistica-e-tira-ainda-mais-do-preco-da-soja-ao-produtor.html); [Diário do Estado MT](https://www.diariodoestadomt.com.br/noticias/sorriso-mirititubafreteparalevarsojasubiumaisde70emumm-us/33249224) |

**Gap estrutural:** rota Arco Norte (Miritituba) é ~R$ 100–200/t mais barata que Santos, mas tem filas de **até 25 km na BR-163** durante pico de safra ([Brasil 61](https://brasil61.com/n/saiba-o-que-esta-por-tras-do-protagonismo-do-arco-norte-no-escoamento-da-producao-agropecuaria-brasileira-bras2411503)).

**Arco Norte teve 33,5% das exportações de soja/milho no 1T2024** (vs. 8% em 2010). Portos: Barcarena, Itaqui (MA), Santarém, Itacoatiara (AM), Santana (AP), Salvador. Miritituba é hub de transbordo rodovia→hidrovia ([Brasil 61](https://brasil61.com/n/saiba-o-que-esta-por-tras-do-protagonismo-do-arco-norte-no-escoamento-da-producao-agropecuaria-brasileira-bras2411503)).

### 2.2 Gargalos portuários

- **Paranaguá:** navios esperaram **até 75 dias** em pico de mar/abr 2024 para carregar. Custo de um navio parado: ~US$ 25 mil/dia ([Jornal de Brasília](https://jornaldebrasilia.com.br/noticias/economia/atraso-em-portos-brasileiros-atrapalha-logistica-e-gera-custo-bilionario-ao-setor/)).
- **Demurrage Brasil 2024:** US$ 2,3 bi (vs. US$ 2 bi em 2023) ([Jornal de Brasília](https://jornaldebrasilia.com.br/noticias/economia/atraso-em-portos-brasileiros-atrapalha-logistica-e-gera-custo-bilionario-ao-setor/)).
- **Fila Paranaguá fertilizantes:** média 29 dias (vs. ≤10 dias em Santos/Rio Grande).

### 2.3 Hidrovia do Tapajós

- **2024:** 14,6 Mt transportadas (Antaq).
- **2025:** 16,8 Mt (+14,3% YoY). Soja e milho = 88,4% do volume.
- Operações com **comboio de 36 barcaças, 110 mil t de capacidade** ([Portos e Aeroportos](https://www.gov.br/portos-e-aeroportos/pt-br/assuntos/noticias/2026/05/rio-tapajos-se-consolida-como-importante-eixo-logistico-com-sustentabilidade-e-recordes-de-movimentacao)).
- **Plano Setorial Hidroviário 2035:** meta de 66 Mt (5x volume atual).

### 2.4 Status Ferrogrão e BR-163

**Ferrogrão (933 km, Sinop → Miritituba):**
- Edital de concessão: jun/2025.
- Leilão: set/2025.
- TCU: análise prevista p/ dez/2025.
- Conclusão da estruturação técnica: 2026.
- Objetivo: aliviar BR-163, levar grãos do norte de MT direto aos portos do Tapajós ([Tecnologística](https://www.tecnologistica.com.br/br/noticias/infraestrutura/20778/governo-federal-agenda-leilao-da-ferrograo-para-setembro-e-avanca-na-estruturacao-do-projeto/); [CPG Petróleo](https://en.clickpetroleoegas.com.br/ferrograo-de-933-km-sai-da-gaveta-governo-lula-corre-para-levar-soja-aos-portos-com-menos-caminhoes-na-br-163-frete-mais-barato-mhbb01/)).

**Duplicação BR-163 MT:**
- 230 km duplicados até 2025 (100 km em 2024 + 130 km em 2025).
- Meta: conclusão integral em dez/2026.
- Mais 101 km Várzea Grande–Rosário Oeste com prazo dez/2028.
- Acidentes com mortes: redução de 95% no trecho Diamantino–Nova Mutum ([Nova Rota do Oeste](https://novarotadooeste.com.br/governo-de-mato-grosso-antecipa-cronograma-e-projeta-conclusao-da-duplicacao-da-br-163-em-2026/); [Connected Smart Cities](https://portal.connectedsmartcities.com.br/2026/02/25/obras-aceleradas-na-br-163-mt-projetam-conclusao-da-duplicacao-para-2026/)).

**Nova ferrovia Rumo Rondonópolis–Lucas do Rio Verde (740 km):**
- Investimento total: R$ 6,5 bi.
- BNDES: R$ 2 bi aprovados para 162 km iniciais.
- Capacidade: 10 Mt/ano.
- Conclusão 1ª fase: 2º sem/2026.
- Em 2025 a Rumo transportou 84,2 bi TKU (+5,4% YoY) ([CompreRural](https://www.comprerural.com/com-r-65-bilhoes-rumo-cria-mega-ferrovia-para-conectar-dois-gigantes-dos-graos/); [BNDES](https://agenciadenoticias.bndes.gov.br/infraestrutura/BNDES-aprova-R$-2-bi-para-Rumo-construir-162-km-de-ferrovia-em-Mato-Grosso/); [Revista Ferroviária](https://revistaferroviaria.com.br/2026/03/rumo-divulga-desempenho-de-2025-e-projeta-conclusao-da-ferrovia-de-mato-grosso/)).

### 2.5 AI para otimização de rotas e gestão de frota

**Mercado:** 43% das empresas brasileiras já usam IA/ML em TMS. Mercado IA em transporte projetado a US$ 9,02 bi em 2029 (CAGR 20,6%). McKinsey: IA reduz custos logísticos entre 5% e 20% ([TOTVS](https://www.totvs.com/blog/gestao-logistica/ia-no-transporte/); [TranspNet](https://www.transp.net/blog/posts/como-otimizar-rotas-de-transporte-com-ia/)).

**goFlux — "Mercado Livre do frete."** SaaS B2B fundado em 2018. Plataforma de cotação, contratação, gestão de frete rodoviário com foco em agro. **goFlux View:** inteligência preditiva com projeção de comportamento de frete em janelas de até 12 meses. Capta **R$ 800M** para acelerar IA. Em MT: índice IGFF de grãos teve -6,8% em jan/2024 vs. jan/2023. Já é "logfintech" (crédito + FIDC + parcerias com Pirelli e Localiza) ([goFlux](https://goflux.com.br/); [AgFeed](https://agfeed.com.br/negocios/unicornio-dos-fretes-investe-r-800-milhoes-e-em-ia-para-transportar-supersafra/); [The AgriBiz](https://www.theagribiz.com/agtechs/venture-capital/a-goflux-quer-ser-o-mercado-livre-do-frete-inclusive-no-credito/)).

**Hidrovias do Brasil (HBSA) — sistema "irupê".** IA proprietária que processa dados de réguas de nível dos rios e prevê calado com **precisão de 2 cm** em janelas de 7, 15 e 30 dias. Permitiu operação contínua durante seca extrema enquanto concorrentes ficaram encalhados. >1 milhão de pontos de dados coletados (velocidade da correnteza, profundidade, temperatura motor, consumo combustível). Frota: 30+ empurradores + 450+ barcaças ([Telesintese](https://telesintese.com.br/hidrovias-amplia-seguranca-no-transporte-de-cargas-com-adocao-da-ia/); [HBSA](https://www.hbsa.com.br/)).

**Rumo Logística — IA aplicada à ferrovia.** Manutenção preditiva, gerenciamento de tráfego, otimização de rotas, monitoramento de segurança. Trens de 135 vagões. Universidade Federal de Juiz de Fora (UFJF) lidera projeto de monitoramento estrutural com IA + processamento de imagens ([Rumo Logística](https://www.rumolog.com/); [Modal Connection](https://modalconnection.com.br/eventos/ntexpo/ia-nos-trilhos-como-impulsionar-a-transformacao-ferroviaria/)).

**Cargill Terminal Santarém:** capacidade 4,9 Mt/ano + estoque 114.000 t. Recebe grãos rodoviários de Porto Velho/Miritituba e transfere a barcaças que vão a Santarém. Não foi confirmado o uso específico de "SmartLab" nem ferramentas internas de IA logística pública ([Cargill](https://www.cargill.com.br/pt_BR/santar%C3%A9m); dado complementar não encontrado nas fontes pesquisadas).

**Amaggi:** 1,2 Mt produção própria + 18 Mt comercializadas/ano. Parceria TIM/Nokia/Jacto conectou 700 equipamentos agrícolas a rede 4G. Plataforma Amaggi On (e-commerce) desenvolvida pela Agrega Agro ([Amaggi](https://www.amaggi.com.br/en/home-english/); [TI Inside](https://tiinside.com.br/06/07/2019/com-tecnologia-da-jacto-tim-e-nokia-levam-conectividade-para-fazenda-da-amaggi/)).

### 2.6 Previsão de filas em portos

**Operadores globais (Maersk, MSC, Hapag-Lloyd) já adotam predictive analytics com IA** para prever congestionamento com 6+ semanas de antecedência usando dados históricos, posição de navios, clima e telemetria portuária. Redução documentada de 15% em detention/demurrage ([Marine Link](https://ports.marinelink.com/ports/port/owensboro/news/major-carriers-adopt-ai-powered-predictive-analytics-for-port-congestion); [Throughput World](https://throughput.world/blog/towards-ai-driven-congestion-free-ports-and-terminals/)).

**No Brasil:** Porto de Santos disponibiliza dashboard de atracações programadas e Porto de Paranaguá tem "Tempo Real". **Dado não encontrado nas fontes pesquisadas:** ferramenta nacional consolidada de previsão de filas com IA dedicada a produtores rurais — gap de mercado claro.

### 2.7 Quanto AI pode reduzir o custo logístico?

- Range conservador: 5–20% (McKinsey).
- Aplicado ao frete Sorriso–Santos R$ 490/t: economia potencial de R$ 25–98/t.
- Para fazenda de 10.000 ha em Sorriso (36.000 t soja/safra): **R$ 900 mil a R$ 3,5 milhões de economia/ano por rota**.

---

## 3. Rastreabilidade e Compliance

### 3.1 EU Deforestation Regulation (EUDR)

**Timeline atualizado (após 2 adiamentos):**
- **30/dez/2026:** entrada em vigor para grandes e médios operadores ([PSQR](https://psqr.eu/publications-resources/eu-deforestation-regulation-eudr-2026-update-new-deadlines-for-companies/)).
- **30/jun/2027:** micro e pequenos operadores ([PSQR](https://psqr.eu/publications-resources/eu-deforestation-regulation-eudr-2026-update-new-deadlines-for-companies/)).
- **2025:** janela final para adaptação (CEBRI; Mongabay).

**Commodities cobertas:** soja, gado, borracha, óleo de palma, café, cacau, madeira + derivados.

**Exigências:**
1. Geolocalização (polígono) dos talhões.
2. Comprovação de não-desmatamento pós-31/dez/2020.
3. Conformidade legal no país de origem.
4. Due diligence + mitigação de risco.

**Impacto financeiro Brasil:**
- Custo adicional estimado: **US$ 17,5 bi/ano** para o agro brasileiro ([CNN Brasil](https://www.cnnbrasil.com.br/agro/eudr-pode-gerar-custo-adicional-de-us-175-milhoes-por-ano-ao-agro/); [AgFeed](https://agfeed.com.br/esg/exigencias-da-eudr-podem-trazer-conta-de-us-175-bi-ao-agro-brasileiro-aponta-bip/)).
- Cenários CEBRI: perdas cumulativas de exportação até US$ 216,3 bi e GDP shortfall até US$ 1,17 trilhão ([CEBRI](https://cebri.org/revista/en/artigo/197/expected-effects-on-brazil-from-the-eu-regulation-on-deforestation-free-products)).
- Operações específicas: elevadores, indústrias e terminais portuários (hoje otimizados para blend por qualidade) precisam reconfigurar para segregação por origem.

### 3.2 Players de tecnologia para compliance EUDR

**Agrotools.** Maior plataforma digital de agro corporativo. Fundada 2006. Faz ~30 milhões de análises/ano. Banco de dados com imagens de satélite + IA + dados de campo. Clientes: McDonald's, Rabobank, Carrefour, Walmart, Itaú BBA, Cofco, Sicredi, JBS, Cargill (>100 clientes). **Preço Scorecar (CAR):** ~R$ 10 por consulta, com volume reduzindo o unitário. Faturamento atingiu R$ 200 mi ([Agrotools](https://agrotools.com.br/blog/esg-sustentabilidade/eudr-solucoes-pioneiras-para-uma-nova-oportunidade/); [Bloomberg Linea](https://www.bloomberglinea.com.br/agro/agrotools-chegou-a-r-200-mi-em-receitas-com-dados-made-in-brazil-o-ceo-quer-mais/); [Exame](https://exame.com/esg/agrotools-lanca-maior-plataforma-de-pagamentos-ambientais-do-mundo-e-mira-investidores/)).

**Selo Verde — Pará (gov estadual, parceria com CIT/UFMG).** Pioneiro entre estados (2021). Versão 1.3 já integra dados de sojicultura, mapas refinados de uso da terra, consulta de desmatamento pós-2020. Versão 2.1 lançada em 2025. **Outros 3 estados adotaram** modelo similar (Mongabay). Pode servir como modelo para MT ([SEMAS](https://www.semas.pa.gov.br/2025/09/05/nova-versao-da-plataforma-seloverde-amplia-transparencia-da-rastreabilidade-da-pecuaria/); [Diário do Comércio](https://diariodocomercio.com.br/sustentabilidade/plataforma-selo-verde-atualizacao-dados-sojicultura/)).

**MapBiomas.** Classificação pixel-by-pixel de imagens Landsat. 37 classes (incluindo soja, cana, pastagem, vegetação secundária). Permite verificar uso da terra antes/depois do corte EUDR de 31/dez/2020 ([MapBiomas](https://brasil.mapbiomas.org/en/); [Earth Blox](https://www.earthblox.io/resources/earth-blox-dataset-review-mapbiomas-brazil-collection-10)).

**Bunge + CP Foods.** Blockchain para rastreabilidade de farelo de soja Brasil → Tailândia. 3 embarques iniciais = 185.000 t de farelo livre de desmatamento. Pegada de carbono + verificação de práticas regenerativas. Validação anterior com 375.000 t ([Bunge](https://www.bunge.com.br/Press-Releases/Bunge-e-Bangkok-Produce-Merchandising-expandem-parceria-com-tecnologia-blockchain); [Revista Cultivar](https://revistacultivar.com.br/noticias/bunge-testa-plataforma-de-rastreabilidade-por-blockchain-para-soja-sustentavel)).

**ADM + Bunge + Cargill + COFCO + LDC + Glencore — iniciativa setorial.** Plataforma de digitalização de transações pós-trade usando blockchain + IA. Iniciada no Brasil. Reduz papelada (275 milhões de emails/ano da indústria) ([Cargill 2018](https://www.cargill.com/2018/agribusinesses-seek-to-modernize-global-agricultural-commodity); [Bunge](https://www.bunge.com/Press-Releases/Glencore-Agriculture-Limited-joins-ADM-Bunge-Cargill-COFCO-International-and-LDC-in-industrywide-ini)).

**Space Intelligence, Earth Blox.** Plataformas internacionais com camadas de IA sobre dados MapBiomas + Global Forest Watch para validação EUDR ([Space Intelligence](https://www.space-intelligence.com/comparing-forest-maps-for-eur-compliance/)).

### 3.3 Moratória da Soja (status atual)

- **Em ago/2025 o CADE suspendeu a Moratória** (acordo desde 2006 entre Abiove/Anec/tradings) por entender que configurava arranjo anticompetitivo ([Insper Agro](https://agro.insper.edu.br/agro-in-data/artigos/o-que-e-a-moratoria-da-soja-e-por-que-ela-foi-suspensa)).
- **Lei estadual MT (2024) voltou a valer em 1/jan/2026** depois de suspensão liminar do STF: prevê penalização de signatários da moratória ([Agência Brasil](https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-01/lei-que-pune-participantes-da-moratoria-da-soja-volta-valer-em-mt)).
- **Aprosoja-MT comemorou o fim** ("barreira injusta aos produtores da Amazônia Legal").
- **Consequência:** certificações privadas (RTRS, ProTerra, ISCC) ganham peso central na governança.

### 3.4 Certificações privadas — custos para produtores MT

**RTRS (Round Table on Responsible Soy):**
- 1º ano em Sorriso/MT: **R$ 18.000 por propriedade**.
- Anos seguintes: **R$ 9.600/propriedade**.
- Valor varia se certificação é individual, em grupo ou via trading ([Diovane Franco](https://diovanefranco.com.br/eudr-regulamento-europeu-desmatamento/)).

**ProTerra e ISCC:** alternativas equivalentes, custos similares por escopo.

### 3.5 Mercado de créditos de carbono no agro

- **Lei do Mercado Brasileiro de Redução de Emissões (MBRE)** sancionada em **dez/2024**. Sistema regulado deve estar operacional em 2025 ([Senado](https://www12.senado.leg.br/noticias/materias/2024/12/12/sancionada-lei-que-regula-mercado-de-carbono-no-brasil)).
- **Potencial Brasil:** até 37,5% da demanda mundial do mercado voluntário e 22% do regulado/ONU na próxima década ([Aegro](https://aegro.com.br/blog/credito-de-carbono-2025/)).
- **Empresas com IA para mensuração:**
  - **Indigo (Carbon by Indigo):** amostragem de solo + modelagem.
  - **NetWord Agro:** deep tech com visão computacional para monitoramento de solos e lavouras, acurácia >95% ([CBRDoc](https://blog.cbrdoc.com.br/agronegocio-mensuracao-carbono/)).

---

## 4. Gestão de Qualidade

### 4.1 Classificação automatizada (já coberta na seção 1.3)

A combinação de visão computacional + NIR + IA torna obsoleta a classificação manual subjetiva:
- **Velocidade:** 1–4 min vs. 90 min.
- **Padronização:** elimina viés humano.
- **Auditabilidade:** sample digital armazenado para comparação.
- **Integração com normas Mapa:** Neosilos, Brasil Agritest (GRAS) e Tbit (GroundEye) já estruturados para parâmetros oficiais.

### 4.2 Padronização de laudos

Tbit GroundEye + Brasil Agritest GRAS geram **laudos digitais comparáveis** entre safras/lotes — permite que produtor:
1. Negocie melhor com tradings (laudo independente reduz disputa de classificação).
2. Construa histórico de qualidade da fazenda (premium em contratos futuros).
3. Documente compliance para certificações privadas.

### 4.3 Integração com sistemas de trading

**Grão Direto.** Maior marketplace digital de grãos da região. Spot, forward e barter. Volume saltou de 1 Mt (2021) para **12 Mt (2025)**, meta 18–20 Mt em 2026. Série B de R$ 90M (Kaszek). **Airton** = assistente comercial IA dentro do WhatsApp. **Cotação MT em tempo real** ([Grão Direto](https://www.graodireto.com.br/ofertas/soja/mt/); [The AgriBiz](https://www.theagribiz.com/agtechs/trade-24h-por-dia-a-aposta-da-grao-direto-para-quase-dobrar-o-volume-em-2026/)).

**Datagro Markets.** Consultoria independente com 35+ anos. 90 fontes de dados, export Excel, análises de soja/milho/açúcar/etanol/carnes. Clientes incluem produtores, tradings, bancos, fundos ([Datagro](https://conteudos.datagro.com/datagro-markets-plataforma)).

**AgroBrain (agrobrain.com.br):** domínio identificado, mas plataforma não consolidada/operacional confirmada nas fontes pesquisadas — provavelmente brand asset disponível, não solução em mercado. Dado não encontrado nas fontes pesquisadas.

**Trinov / Trinovati:** após busca, identificado como plataforma específica de avicultura, não para grãos/soja. Dado não encontrado nas fontes pesquisadas para o nicho desejado.

**Iniciativa setorial ADM/Bunge/Cargill/COFCO/LDC/Glencore (já mencionada):** automação de post-trade execution → integra com CBOT/B3 via blockchain + IA.

**Solinftec — Alice A.I.** Unidade de grãos com sede em **Nova Mutum/MT**. Robôs Solix em fazendas de soja em MT/GO/MS/BA — redução de >90% em uso de herbicidas pré-plantio/dessecação. Alice A.I. conecta sensores, máquinas, sistemas e equipes para decisões em tempo real ([Solinftec](https://www.solinftec.com/pt-br/blog/alice-ai-inteligencia-artificial-que-transforma-o-agro/)).

---

## Tabela resumo — empresas/soluções

| Empresa | Categoria | O que faz | Preço/modelo | Cases / Adoção | Relevância MT |
|---|---|---|---|---|---|
| **Kepler Weber (Sync)** | Silos + IoT | Termometria digital + KW Cloud + aeração automática | Assinatura — dezenas de milhares R$/mês | Líder com 35–60% market share Brasil | Alta — já atua em MT |
| **GSI Brasil** | Silos + automação | Digital Grain + termometria + sensor umidade | Sob consulta | 3º maior (7%); em negociação de fusão com Kepler | Alta |
| **Procer (CERES)** | Software armazenagem | SaaS monitoramento + módulos secador/aeração | Bronze/Silver/Gold/Platinum | 6.000+ silos (~14% capacidade nacional) | Alta |
| **Sol by RZK** | IoT + IA + conectividade | Gestão de silos + Sol ÁguIA (IA generativa) | Não publicado | 12M ha cobertura 4G, 66k propriedades | Alta — Grupo RZK forte em MT |
| **Brasil Agritest (GRAS)** | Visão computacional grãos | Análise de defeitos sem cortar grão | Sob consulta | Premiada Embrapii; apresentada Famato | Alta — vitrine em MT |
| **Neosilos (NVisio)** | Visão computacional grãos | Classificação em 80s seguindo padrão Mapa | Sob consulta | PR, expansão em curso | Média |
| **Tbit (GroundEye Grains)** | Visão computacional grãos | >300 características por grão; padronização laudos | Sob consulta | Genesis Group; 1º sistema mundial classificação soja digital | Média |
| **Spectral/Embrapa NIR (GrainSense A-2)** | Espectroscopia portátil | Mede proteína, umidade, óleo, carboidratos | Equipamento via Alfa Mare | Aplicação em milho/sorgo/soja | Alta — usável no caminhão de coleta |
| **Agrotools** | Rastreabilidade + ESG + EUDR | Satélite + IA + 30M análises/ano | Scorecar ~R$ 10/consulta; corporativo sob consulta | 100+ clientes (McDonald's, Cofco, JBS, Cargill, Itaú) | Alta — abriu operação CO/Brasília |
| **Selo Verde Pará** | Rastreabilidade governamental | Mapa público + integração sojicultura | Gratuito | Modelo replicado em 3 estados | Média — pressão para MT adotar |
| **MapBiomas** | Dado base | Classificação pixel Landsat 37 classes | Dados públicos | Base para qualquer EUDR | Alta |
| **Bunge + CP Foods (blockchain)** | Trading + compliance | Rastreabilidade farelo soja Brasil→Tailândia | Trader-led | 185k t embarcadas | Média (B2B trader) |
| **goFlux** | Frete + AI | Marketplace + goFlux View (predição 12m) + crédito | SaaS B2B | R$ 800M aporte; tens of Mt agro/ano | Alta — rotas MT centrais |
| **Hidrovias do Brasil (irupê)** | Logística hidroviária + AI | Predição calado 2cm em 30d | Operacional próprio | 30 empurradores + 450 barcaças | Alta — Tapajós serve MT |
| **Rumo Logística** | Ferrovia + AI | Manutenção preditiva, otimização tráfego | Operacional próprio | Nova ferrovia MT R$ 6,5 bi, 740 km | Alta — define escoamento futuro |
| **Cargill (Terminal Santarém)** | Logística trader | 4,9 Mt/ano capacidade portuária | B2B trader | Hub do Tapajós para MT | Alta |
| **Amaggi** | Trader + tech | Conectividade 4G + AgroCAD + Amaggi On | B2B trader | 18 Mt vendidas/ano | Alta — sede em MT |
| **Solinftec (Alice A.I.)** | Plataforma campo + IA | Robôs Solix + dashboard tempo real | SaaS + hardware | 40+ robôs MT/GO/MS/BA/SP | Alta — unidade em Nova Mutum |
| **Grão Direto + Airton** | Trading digital + IA | Marketplace WhatsApp + assistente IA comercial | Comissionado/SaaS | 12 Mt 2025; meta 18–20 Mt 2026 | Alta — preços MT em real-time |
| **Datagro Markets** | Inteligência mercado | Plataforma de dados commodities | Assinatura | 35+ anos; clientes globais | Média (decisão comercial) |

---

## Lacunas e oportunidades observadas — especialmente para Sorriso/MT

### Oportunidades de alta relevância para o pitch

1. **Plataforma integradora de "torre de controle" de armazenagem + qualidade + frete.** Hoje produtor MT usa Kepler (silo) + Tbit/Neosilos (classificação) + goFlux (frete) + Grão Direto (venda) + AgroTools (EUDR) — **5 SaaS desconectados**. Consultoria que entregue **integração via APIs + dashboard unificado + agente IA** é diferencial claro. Nenhum player observado entrega isso end-to-end.

2. **AI generativa em WhatsApp para gestão de safra.** Grão Direto fez com "Airton" para trading. **Não há equivalente para gestão operacional pós-colheita** (alerta de silo crítico, sugestão de janela de embarque, recomendação de venda).

3. **Previsão de filas portuárias + janela ótima de embarque.** Operadores globais já fazem; **no Brasil é gap.** Para Sorriso onde diferença Santos vs. Miritituba pode ser R$ 200/t e fila de Miritituba é o calcanhar de Aquiles, um modelo preditivo de "qual porto/quando vale a pena" tem ROI imediato.

4. **Compliance EUDR como serviço gerenciado.** Produtor de Sorriso entre 1.000–30.000 ha vai precisar entregar polígono georreferenciado + histórico anti-2020 + due diligence até **30/dez/2026** ou perder acesso ao mercado EU. Custo estimado de adaptação: bilionário. Pacote "EUDR-as-a-service" (geolocalização + integração MapBiomas + Selo Verde + emissão de DDS + auditoria contínua) é vendido sob alta urgência.

5. **Painel de carbono certificável.** Lei MBRE de dez/2024 ainda não tem implementação operacional definida. Quem capturar dados de sequestro de carbono em propriedades MT desde já (com NetWord Agro-like accuracy) sai na frente para monetização 2026–2027.

6. **Modelos preditivos de deterioração específicos para soja em silos de MT.** Calor + umidade do Cerrado + cultivos de safrinha geram condições únicas. Modelos ANN da literatura recente são genéricos; **calibração local com dados de fazendas MT é IP defensável.**

7. **Janela com Ferrogrão + nova ferrovia Rumo (2026):** matriz logística de MT vai mudar estruturalmente. Quem entender a **otimização multimodal pós-2026** (caminhão → ferrovia → barcaça → navio) com dados de 2024–2025 cria vantagem de informação.

### Riscos / pontos de atenção para a abordagem

- **Adoção heterogênea:** 76% dos produtores MT têm "perfil inovador" (AgriHub/Famato), mas tradução em pagamento por SaaS é menor. Conectividade ainda é gargalo em parte do norte de MT — vendor de AI sem fallback offline perde.
- **Suspensão da Moratória da Soja muda dinâmica:** tradings (signatárias) e produtores estão em fricção. Produtos que se posicionem como "neutros" (compliance + trader-agnóstico) têm aceitação maior.
- **Concorrência institucional forte:** AgriHub (Famato), Aprosoja-MT, Senar-MT promovem soluções próprias. Vendor independente precisa ou de partnership com essas entidades ou de canal direto via cooperativas (CooperCana, Cotrijal-like).
- **Dado não encontrado nas fontes pesquisadas:** preço médio cobrado por consultorias de implementação AI no agro brasileiro (% sobre projeto, R$/ha ou MRR). É gap de benchmarking — sugerido validar com Agrotools/Solinftec via canais privados.

---

## Fontes consultadas

### Perdas, armazenagem, capacidade
- [Embrapa — Sistema Inteligente armazena grãos](https://www.embrapa.br/en/busca-de-noticias/-/noticia/17916557/sistema-inteligente-armazena-graos)
- [O Presente Rural — Brasil colhe mais, mas ainda perde 10% dos grãos](https://opresenterural.com.br/brasil-colhe-mais-mas-ainda-perde-10-dos-graos-no-armazenamento/)
- [Notícia Marajó — Pragas na armazenagem da soja](https://noticiamarajo.com.br/agronegocio/pragas-na-armazenagem-da-soja-elevam-perdas-e-custos-no-pos-colheita-no-brasil/)
- [AgFeed — O Brasil discute falta de silos](https://agfeed.com.br/campo-das-ideias/artigo-o-brasil-discute-falta-de-silos-mas-ignora-o-quanto-perde-dentro-deles/)
- [Estado de Minas — Com safras recorde, Brasil não tem armazéns](https://www.em.com.br/agropecuario/2025/10/7278424-com-safras-recorde-brasil-nao-tem-armazens-suficientes-para-graos.html)
- [AF News — Déficit R$ 148 bi armazenagem](https://afnews.com.br/deficit-de-armazenagem-de-graos-no-brasil-exige-r-148-bilhoes-em-investimentos-e-acende-alerta-logistico-para-safra-2025-26/)
- [Conab — Seminário déficit armazenagem](https://www.conab.gov.br/ultimas-noticias/3981-conab-finaliza-seminario-do-deficit-de-armazenagem-apontando-solucoes-emergenciais)
- [ESALQ-LOG — Perdas R$ 2 bi+ logística](https://esalqlog.esalq.usp.br/perdas-na-logistica-de-graos-atingem-deficit-de-mais-de-2-bilhoes-de-reais)
- [PensarAgro — 15% perda safra transporte](https://pensaragro.com.br/brasil-perde-15-da-safra-durante-o-transporte-por-falta-de-infraestrutura/)
- [Agroadvance — Colheita soja perdas](https://agroadvance.com.br/blog-colheita-da-soja-calculo-de-perdas/)

### Silos, IoT, monitoramento
- [Macnica DHW — IoT silos](https://blog.macnicadhw.com.br/agronegocio/monitoramento-silos-agronegocio/)
- [Nivetec — Monitoramento inteligente silos](https://nivetec.com.br/estocagem-eficiente-como-o-monitoramento-inteligente-de-silos-transforma-o-agronegocio-brasileiro/)
- [Quimiweb — Sistemas inteligentes temperatura/umidade](https://news.quimiweb.com/empresas-lancam-sistemas-inteligentes-para-gestao-de-temperatura-e-umidade-de-silos-924.html)
- [Procer — Armazenagem de grãos](https://www.procer.com.br/solucoes/armazenagem-de-graos/)
- [Procer — Lançamento plataforma customizável](https://www.noticenter.com.br/n.php?ID=32468&T=procer-lanca-versao-customizavel-de-plataforma-para-gestao-inteligente-da-armazenagem-de-graos)
- [Sol by RZK](https://solrzk.com.br/)
- [TI Inside — Sol ÁguIA](https://tiinside.com.br/23/04/2025/solucao-ia-da-sol-by-rzk-promete-trazer-eficiencia-a-gestao-agricola/)
- [Kepler Weber Sync](https://www.kepler.com.br/sync)
- [Portal do Agronegócio — Kepler lança Sync](https://www.portaldoagronegocio.com.br/noticia/kepler-weber-lanca-plataforma-inedita-para-sistemas-de-armazenagem-com-uso-de-iot-184707)
- [Brazil Journal — Kepler usa IoT receita recorrente](https://braziljournal.com/kepler-weber-usa-internet-of-things-para-aumentar-receita-recorrente/)
- [Agrimídia — Fusão Kepler + GSI](https://www.agrimidia.com.br/graos/fusao-kepler-weber-e-gsi-pode-criar-gigante-de-armazenagem-de-graos-com-quase-42-do-mercado-brasileiro/)
- [GSI Brasil](https://www.grainsystems.com/pt_SA.html)
- [GSI — Inovação armazenagem digitalização](https://www.grainsystems.com/sa/pt/gsi-blog/armazenazem/)
- [RST Silos — termometria](https://www.rstsilos.com.br/sistema-termometria-silos)
- [Geotech — controle volumétrico inventários](https://geotechbrasil.com.br/atuacao/controle-volumetrico-de-iventarios/)
- [Agro Summit — Monitoramento silos](https://portal.agrosummit.com.br/tecnologia-de-monitoramento-em-silos-reduz-perdas-e-aumenta-lucratividade-no-campo)

### Visão computacional / classificação grãos
- [Brasil Agritest](https://brasilagritest.com/)
- [Embrapa — GRAS qualidade soja Famato](https://www.embrapa.br/en/busca-de-noticias/-/noticia/71632904/tecnologia-para-classificacao-da-qualidade-de-graos-de-soja-e-destaque-no-famato-embrapa-show?p_auth=x8qFLPbK)
- [Embrapa — Projeto GRAS](https://www.embrapa.br/busca-de-projetos/-/projeto/222454/desenvolvimento-do-prototipo-do-grain-analytic-system-gras)
- [AgFeed — Neosilos olhômetro](https://agfeed.com.br/agtech/startup-neosilos-tenta-aposentar-o-olhometro-e-automatizar-a-classificacao-de-graos-com-cameras-e-ia/)
- [O Presente Rural — Tecnologia paranaense Neosilos](https://opresenterural.com.br/tecnologia-paranaense-automatiza-analise-de-graos/)
- [Tbit GroundEye](https://www.tbit.com.br/groundeye-grains/?lang=en)
- [Projeto Draft — Tbit](https://www.projetodraft.com/a-tbit-germinou-e-esta-levando-seu-sistema-de-controle-de-qualidade-de-graos-de-minas-gerais-para-o-mundo/)
- [Agrolink — Tbit + Genesis](https://www.agrolink.com.br/noticias/genesis-group-e-tbit-incorporam-tecnologia-de-imagem-a-classificacao-de-graos-de-soja_404451.html)
- [Senior — Classificação de grãos](https://www.senior.com.br/blog/classificacao-de-graos)
- [AGR — Cooperativa classifica soja com IA](https://www.agrnoticias.com.br/noticias/noticias-em-destaque-inicial/cooperativa-faz-parceria-para-classificar-soja-com-inteligencia-artificial/)
- [Alfa Mare — NIR Portátil GrainSense A-2](https://alfamare.com.br/produtos/nir-portatil-para-graos-grainsense-a-2/)
- [Embrapa — Inovação análise grãos](https://www.embrapa.br/en/busca-de-noticias/-/noticia/92399932/inovacao-na-analise-de-graos-abre-perspectivas-para-a-producao-de-milho-e-sorgo-no-brasil)

### Modelos preditivos / IA armazenagem (peer-reviewed)
- [ScienceDirect — AI-driven grain storage solutions](https://www.sciencedirect.com/science/article/pii/S0022474X25000475)
- [ScienceDirect — Monitoring soybean quality ML](https://www.sciencedirect.com/science/article/abs/pii/S0022474X24001437)
- [PMC — Monitoring Device Grain Mildew](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11511114/)

### Logística — custos, rotas
- [CNA Brasil — Frete sobe 38% Sorriso](https://cnabrasil.org.br/noticias/soja-pre%C3%A7o-do-frete-sobe-38-em-um-m%C3%AAs-a-partir-de-sorriso-mt)
- [CNA Brasil — Frete MT continua subindo](https://cnabrasil.org.br/noticias/preco-do-frete-para-transportar-soja-continua-subindo-em-mato-grosso-aponta-imea)
- [AgFeed — Frete dispara 70% janela colheita](https://agfeed.com.br/caminhos-do-agro/frete-dispara-mais-de-70-com-janela-de-colheita-estrangulada-e-logistica-insuficiente/)
- [AgFeed — Transporte portos 57% mais caro](https://agfeed.com.br/caminhos-do-agro/transporte-para-os-portos-fica-ate-57-mais-caro-nas-principais-regioes-produtoras/)
- [Notícias Agrícolas — Sorriso-Miritituba R$ 260-330](https://www.noticiasagricolas.com.br/noticias/soja/414555-congestionamento-nos-portos-encarece-a-logistica-e-tira-ainda-mais-do-preco-da-soja-ao-produtor.html)
- [Diário do Estado MT — Frete subiu 70%](https://www.diariodoestadomt.com.br/noticias/sorriso-mirititubafreteparalevarsojasubiumaisde70emumm-us/33249224)
- [Canal Rural — Frete soja milho rotas](https://www.canalrural.com.br/agricultura/soja/precos-frete-soja-milho-principais-rotas-brasil-porto/)
- [Brasil 61 — Arco Norte protagonismo](https://brasil61.com/n/saiba-o-que-esta-por-tras-do-protagonismo-do-arco-norte-no-escoamento-da-producao-agropecuaria-brasileira-bras2411503)
- [BrasilAgro — Arco Norte gargalos](https://www.brasilagro.com.br/conteudo/escoamento-de-soja-enfrenta-gargalos-no-caminho-ate-os-portos-do-arco-norte.html)
- [Hidrovias do Brasil](https://www.hbsa.com.br/)
- [Portos e Aeroportos — Tapajós recorde 2,38 Mt bimestre](https://www.gov.br/portos-e-aeroportos/pt-br/assuntos/noticias/2026/05/rio-tapajos-se-consolida-como-importante-eixo-logistico-com-sustentabilidade-e-recordes-de-movimentacao)
- [Jornal de Brasília — Atraso portos bilionário](https://jornaldebrasilia.com.br/noticias/economia/atraso-em-portos-brasileiros-atrapalha-logistica-e-gera-custo-bilionario-ao-setor/)
- [Canal Rural — Paranaguá 24 navios fila](https://www.canalrural.com.br/noticias/agricultura/soja/paranagua-navios-fila-aguardando-soja/)
- [UDOP — Táxi de navios Santos](https://udop.com.br/noticia/2025/03/10/taxi-de-navios-carga-solta-e-ate-chuva-alimentam-fila-no-porto-de-santos)
- [AgFeed — Chuvas e incêndio Paranaguá](https://agfeed.com.br/economia/chuvas-e-incendio-agravam-problemas-no-porto-de-paranagua-mas-nao-e-so-ele/)

### IA logística / TMS / frete
- [TOTVS — IA no transporte](https://www.totvs.com/blog/gestao-logistica/ia-no-transporte/)
- [TranspNet — Otimização rotas IA 2025](https://www.transp.net/blog/posts/como-otimizar-rotas-de-transporte-com-ia/)
- [Cargocenter — Otimização rotas IA](https://www.cargocenter.com.br/otimizacao-de-rotas-a-inteligencia-artificial-que-revoluciona-a-eficiencia-do-transporte-de-cargas/)
- [Akamai SL — IA otimização rotas](https://www.akamaisl.com.br/informativos/inteligencia-artificial-na-otimizacao-de-rotas/)
- [Aiko — Gestão frota agronegócio](https://aiko.digital/gestao-de-frota-no-agronegocio/)
- [goFlux](https://goflux.com.br/)
- [AgFeed — goFlux R$ 800M IA](https://agfeed.com.br/negocios/unicornio-dos-fretes-investe-r-800-milhoes-e-em-ia-para-transportar-supersafra/)
- [AgFeed — goFlux FIDC banco](https://agfeed.com.br/negocios/goflux-acelera-com-novo-fidc-banco-e-plano-safra-do-frete-com-pirelli-e-localiza-a-bordo/)
- [The AgriBiz — goFlux Mercado Livre frete](https://www.theagribiz.com/agtechs/venture-capital/a-goflux-quer-ser-o-mercado-livre-do-frete-inclusive-no-credito/)
- [Telesintese — Hidrovias IA "irupê"](https://telesintese.com.br/hidrovias-amplia-seguranca-no-transporte-de-cargas-com-adocao-da-ia/)
- [Marine Link — AI port congestion carriers](https://ports.marinelink.com/ports/port/owensboro/news/major-carriers-adopt-ai-powered-predictive-analytics-for-port-congestion)
- [Throughput World — AI ports congestion](https://throughput.world/blog/towards-ai-driven-congestion-free-ports-and-terminals/)
- [Rumo Logística](https://www.rumolog.com/)
- [Modal Connection — IA nos trilhos](https://modalconnection.com.br/eventos/ntexpo/ia-nos-trilhos-como-impulsionar-a-transformacao-ferroviaria/)
- [Andifes/UFJF — IA setor ferroviário](https://www.andifes.org.br/2026/04/24/ufjf-lidera-projeto-que-apoia-a-expansao-sustentavel-do-setor-ferroviario/)

### Ferrogrão / BR-163 / Rumo MT
- [Tecnologística — Ferrogrão leilão set/2025](https://www.tecnologistica.com.br/br/noticias/infraestrutura/20778/governo-federal-agenda-leilao-da-ferrograo-para-setembro-e-avanca-na-estruturacao-do-projeto/)
- [CPG Petróleo — Ferrogrão 933 km](https://en.clickpetroleoegas.com.br/ferrograo-de-933-km-sai-da-gaveta-governo-lula-corre-para-levar-soja-aos-portos-com-menos-caminhoes-na-br-163-frete-mais-barato-mhbb01/)
- [INESC — Soja corredor logístico norte](https://inesc.org.br/wp-content/uploads/2025/04/clua-soja_corredor_logistico_norte_epicc-v3.pdf)
- [Nova Rota do Oeste — Duplicação BR-163 2026](https://novarotadooeste.com.br/governo-de-mato-grosso-antecipa-cronograma-e-projeta-conclusao-da-duplicacao-da-br-163-em-2026/)
- [Connected Smart Cities — BR-163 conclusão 2026](https://portal.connectedsmartcities.com.br/2026/02/25/obras-aceleradas-na-br-163-mt-projetam-conclusao-da-duplicacao-para-2026/)
- [Minuto MT — BR-163 frete -26%](https://minutomt.com.br/cidades/conclusao-da-br-163-frete-ja-teve-reducao-de-26-em-mt/)
- [BNDES — R$ 2 bi Rumo MT](https://agenciadenoticias.bndes.gov.br/infraestrutura/BNDES-aprova-R$-2-bi-para-Rumo-construir-162-km-de-ferrovia-em-Mato-Grosso/)
- [CompreRural — Rumo R$ 6,5 bi nova ferrovia](https://www.comprerural.com/com-r-65-bilhoes-rumo-cria-mega-ferrovia-para-conectar-dois-gigantes-dos-graos/)
- [Revista Ferroviária — Rumo 2025 ferrovia MT](https://revistaferroviaria.com.br/2026/03/rumo-divulga-desempenho-de-2025-e-projeta-conclusao-da-ferrovia-de-mato-grosso/)
- [Brasil do Trecho — Maior obra ferroviária 73%](https://brasildotrecho.com.br/2025/11/maior-obra-ferroviaria-do-brasil-atinge-73-e-deve-ficar-pronta-em-2026/)

### EUDR / rastreabilidade / certificação
- [PSQR — EUDR 2026 deadlines](https://psqr.eu/publications-resources/eu-deforestation-regulation-eudr-2026-update-new-deadlines-for-companies/)
- [Coolset — EUDR what to do](https://www.coolset.com/academy/the-eu-deforestation-regulation-eudr-what-businesses-need-to-know-and-do)
- [WRI — Explain EUDR](https://www.wri.org/insights/explain-eu-deforestation-regulation)
- [CEBRI — Expected effects Brazil EUDR](https://cebri.org/revista/en/artigo/197/expected-effects-on-brazil-from-the-eu-regulation-on-deforestation-free-products)
- [Revista Amazônia — Soja brasileira sobreviver EUDR 2026](https://revistaamazonia.com.br/como-adequar-soja-brasileira-ao-eudr-2026/)
- [Mongabay — Brazil gov map EUDR](https://news.mongabay.com/2026/02/brazil-govt-builds-map-to-help-exporters-comply-with-eu-anti-deforestation-rule/)
- [Mongabay — Free platform EUDR Brazil](https://news.mongabay.com/2026/02/in-brazil-a-free-platform-uses-government-data-to-track-eudr-compliance/)
- [Mongabay — Deforestation soy Cerrado EUDR](https://news.mongabay.com/2025/10/deforestation-for-soy-continues-in-brazilian-cerrado-despite-eudr-looming/)
- [CNN Brasil — EUDR US$ 17,5 bi](https://www.cnnbrasil.com.br/agro/eudr-pode-gerar-custo-adicional-de-us-175-milhoes-por-ano-ao-agro/)
- [AgFeed — EUDR US$ 17,5 bi BIP](https://agfeed.com.br/esg/exigencias-da-eudr-podem-trazer-conta-de-us-175-bi-ao-agro-brasileiro-aponta-bip/)
- [Diovane Franco — RTRS R$ 18.000 Sorriso](https://diovanefranco.com.br/eudr-regulamento-europeu-desmatamento/)
- [PwC — EUDR na prática](https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/artigos/2025/EUDR-na-pratica-como-o-agro-brasileiro-pode-liderar-a-nova-era-da-rastreabilidade.html)
- [Space Intelligence — Forest maps EUDR Brazil](https://www.space-intelligence.com/comparing-forest-maps-for-eur-compliance/)
- [Earth Blox — MapBiomas Collection 10](https://www.earthblox.io/resources/earth-blox-dataset-review-mapbiomas-brazil-collection-10)
- [MapBiomas Brasil](https://brasil.mapbiomas.org/en/)
- [Bunge — Blockchain CP Foods](https://www.bunge.com.br/Press-Releases/Bunge-e-Bangkok-Produce-Merchandising-expandem-parceria-com-tecnologia-blockchain)
- [Bunge — Plataforma blockchain soja](https://www.bunge.com.br/Press-Releases/Pioneiras-Bunge-e-CP-Foods-aumentam-transparencia-no-embarque-de-soja-livre-de-desmatamento)
- [Revista Cultivar — Bunge blockchain](https://revistacultivar.com.br/noticias/bunge-testa-plataforma-de-rastreabilidade-por-blockchain-para-soja-sustentavel)
- [Cargill 2018 — Agribusinesses modernize commodity](https://www.cargill.com/2018/agribusinesses-seek-to-modernize-global-agricultural-commodity)
- [BlockNews — ADM Bunge Cargill blockchain Brasil](https://www.blocknews.com.br/financas-corporativo/comeca-no-brasil-uso-global-de-blockchain-por-adm-bunge-cargill-glencore-ldc-e-cofco/)
- [Agrotools — EUDR soluções](https://agrotools.com.br/blog/esg-sustentabilidade/eudr-solucoes-pioneiras-para-uma-nova-oportunidade/)
- [Exame — Agrotools pagamentos ambientais](https://exame.com/esg/agrotools-lanca-maior-plataforma-de-pagamentos-ambientais-do-mundo-e-mira-investidores/)
- [Bloomberg Linea — Agrotools R$ 200 mi](https://www.bloomberglinea.com.br/agro/agrotools-chegou-a-r-200-mi-em-receitas-com-dados-made-in-brazil-o-ceo-quer-mais/)
- [SEMAS PA — Selo Verde](https://www.semas.pa.gov.br/2025/09/05/nova-versao-da-plataforma-seloverde-amplia-transparencia-da-rastreabilidade-da-pecuaria/)
- [Diário do Comércio — Selo Verde sojicultura](https://diariodocomercio.com.br/sustentabilidade/plataforma-selo-verde-atualizacao-dados-sojicultura/)
- [Agência Pará — Selo Verde 2.1](https://agenciapara.com.br/pauta/7065/versao-2.1-do-selo-verde-para-vai-fortalecer-rastreabilidade-e-combater-desmatamento)

### Moratória da Soja
- [Insper Agro — Depois da Moratória](https://agro.insper.edu.br/midia/artigos/depois-da-moratoria-como-garantir-que-a-soja-brasileira-nao-seja-associada-ao-desmatamento)
- [Insper Agro — O que é a Moratória da Soja](https://agro.insper.edu.br/agro-in-data/artigos/o-que-e-a-moratoria-da-soja-e-por-que-ela-foi-suspensa)
- [Agência Brasil — Lei MT volta valer](https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-01/lei-que-pune-participantes-da-moratoria-da-soja-volta-valer-em-mt)
- [Canal Rural MT — Gigantes deixam Moratória](https://matogrosso.canalrural.com.br/politica/gigantes-do-agro-deixam-a-moratoria-da-soja/)
- [OECO — MT sanciona norma](https://oeco.org.br/noticias/governo-do-mato-grosso-sanciona-norma-que-prejudica-signatarios-da-moratoria-da-soja/)

### Carbono
- [Senado — Lei MBRE](https://www12.senado.leg.br/noticias/materias/2024/12/12/sancionada-lei-que-regula-mercado-de-carbono-no-brasil)
- [Aegro — Crédito de carbono 2025](https://aegro.com.br/blog/credito-de-carbono-2025/)
- [Agroadvance — Mercado carbono 2024](https://agroadvance.com.br/blog-mercado-de-carbono-no-brasil/)
- [CBRdoc — Mensuração carbono](https://blog.cbrdoc.com.br/agronegocio-mensuracao-carbono/)

### Trading / mercado / players
- [Datagro Markets](https://conteudos.datagro.com/datagro-markets-plataforma)
- [Datagro](https://www.datagro.com/)
- [Grão Direto MT](https://www.graodireto.com.br/ofertas/soja/mt/)
- [The AgriBiz — Grão Direto trade 24h](https://www.theagribiz.com/agtechs/trade-24h-por-dia-a-aposta-da-grao-direto-para-quase-dobrar-o-volume-em-2026/)
- [Amaggi](https://www.amaggi.com.br/en/home-english/)
- [TI Inside — Amaggi Jacto TIM Nokia](https://tiinside.com.br/06/07/2019/com-tecnologia-da-jacto-tim-e-nokia-levam-conectividade-para-fazenda-da-amaggi/)
- [Cargill — Terminal Santarém](https://www.cargill.com.br/pt_BR/santar%C3%A9m)
- [Solinftec](https://www.solinftec.com/pt-br/)
- [Solinftec — Alice A.I.](https://www.solinftec.com/pt-br/blog/alice-ai-inteligencia-artificial-que-transforma-o-agro/)
- [CompreRural — Solinftec IA](https://www.comprerural.com/conheca-a-maior-inteligencia-artificial-do-agro-que-agora-chega-a-pecuaria/)

### Sorriso / MT — contexto
- [Agência Brasil — Sorriso maior PIB agrícola](https://agenciabrasil.ebc.com.br/economia/noticia/2025-09/sorriso-no-mt-tem-maior-pib-agricola-do-pais-veja-o-ranking)
- [Gazeta do Povo — Sorriso maior produtor soja](https://www.gazetadopovo.com.br/brasil/municipio-sorriso-mato-grosso-maior-produtor-soja-mundial/)
- [Política Brasileira — Sorriso lidera 2024](https://politicabrasileira.com.br/politica/agro/sorriso-no-mato-grosso-lidera-producao-agricola-no-brasil-em-2024-aponta-ibge/)
- [Sistema Famato — AgriHub 76% inovador](https://sistemafamato.org.br/blog/2024/10/30/estudo-inedito-do-agrihub-revela-que-76-dos-produtores-rurais-de-mato-grosso-tem-perfil-inovador/)
- [AgriHub](https://agrihub.com.br/)
- [HiperNotícias — Centros Operações Agrícolas MT](https://www.hnt.com.br/agrohiper/agro-mato-grossense-aposta-em-tecnologia-e-amplia-uso-de-centros-de-operacoes-agricolas/537294)

### Multimodal / pesquisa
- [SciELO — Logistical optimization Brazilian soybean](https://www.scielo.br/j/cr/a/w4jKvsp5ZmcjFdS8ystPJDc/?lang=en)
- [MDPI — Sustainable Location Transshipment MT](https://www.mdpi.com/2071-1050/15/2/1063)

---

*Documento elaborado para reunião comercial — fontes verificadas mai/2026. Quando dado quantitativo não foi encontrado nas fontes pesquisadas (preços específicos de algumas plataformas SaaS, ferramenta nacional de previsão de filas portuárias com IA dedicada, plataforma Trinov para grãos, Cargill SmartLab Santarém), declarado explicitamente no texto para evitar invenção.*
