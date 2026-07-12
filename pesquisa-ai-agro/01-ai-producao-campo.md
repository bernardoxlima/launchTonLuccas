# AI Aplicada na Produção Agrícola (Campo) — Brasil, com foco em Soja, Milho Safrinha e Algodão

> Relatório de inteligência de mercado preparado para reunião comercial com associação de produtores de Sorriso/MT.
> Data de fechamento: maio/2026. Período de fontes priorizado: 2024–2026.
> Escopo: AI no campo (não inclui ERP, market-place ou agfintech puro). Produtores-alvo: 1.000 a 30.000+ ha.

---

## Sumário executivo

1. O mercado brasileiro de AI no agro saiu de USD 50 mi em 2024 e projeta-se para USD 230 mi em 2033 (CAGR ~19,5%), enquanto o agtech como um todo já move USD 520 mi/ano.
2. Em MT, 92% dos produtores usam smartphone, 86% têm internet (porém só 3% em toda a fazenda) e 61% usam algum software/app — base instalada favorável, mas ainda concentrada na sede.
3. Adoção de agricultura de precisão em MT: 41% fazem mapa de fertilidade, 36% aplicação por taxa variável e 36% manejo por zona — espaço grande para upsell de camada AI sobre o que já existe.
4. Grandes incumbentes (Bayer/FieldView, Syngenta/Cropwise, BASF/xarvio, John Deere See & Spray, AGCO PTx, Trimble, Jacto, Solinftec) estão todos pivotando explicitamente pra AI generativa/visão computacional em 2024–2026.
5. Solinftec é o player-âncora local: 2 mi+ ha conectados via Alice AI, robô Solix em fazendas de MT já demonstrando -15% defensivos e +8% produtividade em soja.
6. SaveFarm/Cortex.AI (Eirene Solutions) lidera pulverização seletiva "green on green" nacional, com 300+ sistemas instalados e parceria CNH (Case IH/New Holland) firmada em 2025 — economia de até 95% em herbicida pré-plantio.
7. Drones de pulverização: Brasil tem 2.000+ drones agrícolas registrados, projeção de 93 mil até 2026; pulverização custa R$ 80–200/ha; novo RBAC 100 da ANAC esperado pra 1S/2026 deve destravar mais escala.
8. Sentinel-2 (Copernicus/ESA) democratiza imagens gratuitas de 10 m com revisita 5 dias — ponto de partida para qualquer consultoria oferecer NDVI sem custo de aquisição.
9. PlantCheck ID (Embrapa Soja + Macnica + InnerEye, 2025) e plataformas de previsão de ferrugem asiática mostram que existe trilha de pesquisa pública madura para integração com clientes — oportunidade clara de canal-parceiro.
10. Lacuna estratégica: consultoria + implementação independente de fornecedor é rara no mercado. Quase toda a oferta hoje é vendor-locked (Bayer empurra FieldView, Syngenta empurra Cropwise, Solinftec empurra Alice). Há espaço para um consultor neutro que integre o stack.

---

## 1. Agricultura de Precisão com AI

### 1.1 Panorama de adoção em MT (números reais)

Pesquisa IMEA com produtores de grãos de Mato Grosso aponta:
- 92% usam smartphone, 78% computador.
- 86% têm acesso à internet na propriedade, mas 89% só na sede; apenas 3% em toda a área.
- 61% utilizam algum aplicativo ou software de gestão.
- Estratégias de precisão já adotadas: 41% mapa de fertilidade, 36% taxa variável, 36% zona de manejo.
- 35% compram insumos online, 23% vendem produto online.
Fonte: IMEA via [Money Times](https://www.moneytimes.com.br/produtores-de-graos-de-mt-buscam-acelerar-uso-de-tecnologias-86-tem-acesso-a-internet-diz-imea/) e [CNA Brasil](https://www.cnabrasil.org.br/noticias/imea-lanca-pesquisa-inedita-do-perfil-do-agricultor-na-era-digital).

Estudo McKinsey citado pela Aegro indica que ~50% dos agricultores brasileiros já adotam ou estão dispostos a adotar agricultura de precisão. Em ganho consolidado: +29% produtividade média e -23% insumos em quem já implementou ([SCADIAgro](https://scadiagro.com.br/agricultura-de-precisao-brasil/)).

### 1.2 Taxa variável de sementes e fertilizantes

Aplicação em taxa variável já é a prática mais disseminada de AP no Brasil em grãos, geralmente partindo da amostragem georreferenciada do solo ([Portal Agriconline](https://agriconline.com.br/portal/artigos/aplicacoes-da-agricultura-de-precisao-em-sistemas-de-producao-de-graos-no-brasil/)). Embrapa Trigo já documentou ganhos consistentes em mapas de produtividade-fertilidade ([Embrapa](https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1151350/1/p-108-Documentos-201-CNPT.pdf)).

Resultados quantitativos:
- Trimble PTx + Precision Planting reportam +6 sc/ha soja e +13 sc/ha milho em uso correto; experimentos em MT e PR mostraram +8% milho e +3% algodão na safra 2023 com taxa variável de sementes ([Revista Cultivar](https://revistacultivar.com.br/artigos/como-a-agricultura-de-precisao-esta-transformando-a-producao-brasileira)).
- xarvio FIELD MANAGER (BASF) reportou +2 a 5% de produtividade em soja, milho e algodão via mapas de semeadura em taxa variável na última safra ([BASF/xarvio](https://agriculture.basf.com/basf/agriculture/br/pt/informacoes-a-imprensa/2024/digitalizacao-da-analise-do-solo-gera-economia-e-maior-produtividade-no-sistema-soja-milho)).
- Cropwise Planting (Syngenta) reporta +3% potencial produtivo e até -25% custo de fertilização ([Syngenta](https://www.syngenta.com.br/syngenta-digital-lanca-cropwise-planting-no-brasil-ferramenta-que-aprimora-gestao-de-dados-e-ajuda)).

### 1.3 Mapeamento de fertilidade do solo com ML

Players brasileiros com foco em mapa de solo + ML:
- **InCeres** — plataforma com Map Algebra, geração automática de zonas de manejo, mapas de fertilidade/produtividade/compactação e InCeres Collection (app de amostragem georreferenciada com leitor de código de barras). Preço não público; modelo por planos para produtor, consultor e empresa ([InCeres](https://inceres.com.br/) e [Revista Cultivar](https://revistacultivar.com.br/noticias/nova-plataforma-inceres-traz-solucoes-para-agricultura-de-precisao)).
- **xarvio Agro Experts (BASF)** — programa com rede credenciada em 8 estados (RS, PR, SP, MG, GO, MS, MT, RO) que une consultoria agronômica a IA, sensoriamento remoto e taxa variável ([BASF/xarvio](https://www.xarvio.com/br/pt/noticias/xarvio-agro-experts.html)).
- **Sensix (FieldScan)** — atende 10.000 fazendas e 3 mi ha no Brasil + 5 países LATAM; integra drone, satélite, solo, chuva e máquinas em IA. Caso de algodão na Bahia: +10,6 @/ha em área com taxa variável vs. manejo padrão, ~R$ 1.000/ha de incremento ([PWC AgTech News](https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/materias/2024/Sensix-mira-breakeven-com-plataforma-de-gestao-de-dados-para-o-agro-baseada-em-IA.html)).

### 1.4 % de adoção real entre grandes produtores de MT

Dado consolidado por grande produtor (>10 mil ha) não foi encontrado nas fontes pesquisadas. O melhor proxy disponível é o IMEA acima (média do estado) somado a registros qualitativos: SENAR-MT informa que "mais de 40% dos produtores realizam agricultura de precisão em MT" ([SENAR-MT](https://sistemafamato.org.br/senarmt/2015/06/24/mais-de-40-dos-produtores-realizam-agricultura-de-precisao-em-mt/)), número provavelmente conservador pra 2026.

---

## 2. Monitoramento por Satélite e Drones com AI

### 2.1 Plataformas de satélite no Brasil

**Sentinel-2 (Copernicus/ESA)** — Imagens gratuitas, resolução 10 m, revisita 5 dias. INPE mantém repositório espelho com cobertura nacional ([INPE/gov.br](https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/programa-copernicus-repositorio-espelho-de-dados-sentinel-no-inpe) e [data.inpe.br](https://data.inpe.br/dados/sentinel-2/)). É o ponto-zero para qualquer oferta de NDVI sem custo de aquisição.

**PlanetScope** — Resolução 3 m, revisita diária. Usado pela Audsat e por aplicações de monitoramento intensivo ([Audsat](https://www.audsat.com.br/blog/satelite-planet-e-a-audsat/)). Mais caro, indicado para janelas críticas (florada, enchimento de grãos).

**TerraMagna** — usa satélites SAR (radar, passa em dia nublado) com IA + Big Data; monitora 10.000+ fazendas/semana (~R$ 5 bi em penhor agrícola). Projeção de R$ 18 bi em crédito analisado em 2025 ([TerraMagna](https://terramagna.com.br/) e [Exame](https://exame.com/agro/terramagna-lanca-nova-empreitada-com-tm-digital-e-mira-r-18-bilhoes-em-2025/)).

**Agrosmart** — atende ~100 mil produtores em 48 mi ha (Brasil, Argentina, Paraguai). Plataforma de clima inteligente + estações meteorológicas + previsão em alta resolução ([Agrosmart](https://agrosmart.com.br/blog/estacao-meteorologica-funciona-importancia-agricultura/) e [Projeto Draft](https://www.projetodraft.com/agrosmart-se-consolida-em-solucoes-climaticas-e-de-esg-no-campo/)).

### 2.2 Drones com visão computacional

**Horus Aeronaves** — drones nacionais homologados pela Anatel + plataforma Mappa com processamento automático por IA (daninhas, falhas de plantio, geração de shapefiles para aplicação). 500+ operadores credenciados, capacidade de mapear 450 mil ha/dia, +1,5 mi ha processados e 6.500+ usuários após 1 ano do Mappa ([Horus Aeronaves](https://horusaeronaves.com/) e [DroneShow](https://droneshowla.com/mapeamento-com-drones-horus-aeronaves-oferece-solucao-completa/)).

**Sensix** — Origem em drones, evoluiu para plataforma multi-fonte com IA. Citado em casos de redução de 70% em custos de químicos/fertilizantes e +20% em produtividade ([Sensix](https://blog.sensix.ag/inteligencia-artificial-ia-e-agricultura-conheca-a-tecnologia-capaz-de-acelerar-a-identificacao-de-doencas-em-plantas/)).

**Perfect Flight** — 25 mi ha digitalizados em pulverização aérea (avião + drones). Plataforma de gestão e rastreabilidade, com IA pra ler arquivos GPS da aeronave e gerar insights ([Revista Cultivar](https://revistacultivar.com.br/noticias/perfect-flight-atinge-25-milhoes-de-hectares-digitalizados-e-monitorados-sobre-pulverizacao-aerea)). Parceria firmada com Strider ([Revista Cultivar](https://revistacultivar.com.br/noticias/perfect-flight-e-strider-anunciam-parceria-na-conexao-dos-softwares)).

### 2.3 NDVI + AI

O NDVI continua sendo o índice mais usado para detectar estresse hídrico/nutricional/pragas antes do sintoma visível. Combinado a hyperspectral + ML, vira insight acionável ([Aegro](https://aegro.com.br/tags/satelite-sentinel-2/) e [GeoSemFronteiras](https://geosemfronteiras.org/blog/analise-de-satelite-para-agricultura/)). FAPESP financiou método que combina IA + séries temporais Planet pra mapear integração lavoura-pecuária ([Agência FAPESP](https://agencia.fapesp.br/metodo-alia-inteligencia-artificial-a-imagens-de-satelite-para-mapear-areas-com-integracao-lavoura-pecuaria/51150)).

### 2.4 Custo por hectare

- Pulverização por drone: R$ 80–200/ha, média Brasil R$ 100–150/ha. Centro-Oeste tem preços mais baixos por escala e talhões grandes ([droneagricola.net](https://droneagricola.net/quanto-custa-pulverizacao-com-drone-entenda-os-precos/) e [pickdrones.com](https://pickdrones.com/pt/custo-pulverizacao-drone-por-hectare/)).
- DJI Agras T20 (~R$ 75–90 mil), T40 (~R$ 90 mil), T50 (~R$ 135 mil + baterias) ([prosperadistribuicao.com.br](https://www.prosperadistribuicao.com.br/drone-dji-agras-t50-kit-pulverizacao-3-baterias-agricultura/) e [dronedireto.com.br](https://www.dronedireto.com.br/dji-agras-t40-com-4-baterias-pronto-para-uso)).
- Climate FieldView Plano Plus: R$ 1.500/ano com hectares ilimitados ([Climate FieldView](https://climate.com/pt-br/planos/plus.html)).
- Solinftec robô Solix: R$ 370 mil/unidade, modelo locação por mensalidade calculada por ha + pacote ([NeoFeed](https://neofeed.com.br/startups/a-agtech-brasileira-que-esta-ganhando-o-mundo-com-o-apoio-da-familia-trajano/) e [AgFeed](https://agfeed.com.br/agtech/solinftec-inicia-entrega-de-robos-no-brasil-e-ameaca-segmento-bilionario-nos-eua/)).
- Cropwise: SaaS por ha; preço exato não público; ~6 mi ha no Brasil em 10 mil propriedades ([Syngenta](https://www.cropwise.com/)).
- John Deere See & Spray Ultimate (green on green): USD 4/acre nas bibliotecas de cultura (referência EUA) ([Macfor](https://macfor.com.br/pulverizacao-seletiva-ia-agro/)).

---

## 3. Detecção de Pragas e Doenças

### 3.1 Apps de detecção por foto

**PlantCheck ID (Embrapa Soja + Macnica DHW + InnerEye)** — App gratuito (Android/iOS) lançado em escala de teste em 2025. Identifica ferrugem asiática, oídio e mancha-alvo em estágio inicial. Tecnologia ímpar: usa registros de ondas cerebrais (ECG) de fitopatologistas da Embrapa para treinar o modelo ([Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/99117140/produtor-ja-pode-testar-aplicativo-que-usa-registro-de-ondas-cerebrais-de-especialistas-para-detectar-doencas-da-soja) e [Global Crop Protection](https://globalcropprotection.com/noticias/novas-tecnologias/embrapa-em-parceria-com-empresas-desenvolve-aplicativo-para-auxiliar-no-manejo-da-soja/)). Expansão prevista para milho.

### 3.2 Plataformas preditivas — ferrugem asiática da soja

Plataforma desenvolvida por cientistas brasileiros (projeto FAPESP) usa Cadeias Ocultas de Markov + dados climáticos + imagens digitais de folhas, com correspondência de 100% em testes vs. lógica Fuzzy. Funciona em nuvem e gera recomendações em tempo real ([Canal Rural](https://www.canalrural.com.br/agricultura/plataforma-usa-inteligencia-artificial-para-antecipar-risco-de-ferrugem-asiatica/) e [O Presente Rural](https://opresenterural.com.br/plataforma-com-inteligencia-artificial-aprimora-diagnostico-da-ferrugem-asiatica-da-soja/)). Custo da ferrugem asiática + oídio: >USD 2 bi/safra no Brasil — justificativa de ROI altíssima para qualquer cliente de soja.

### 3.3 Deep learning para pragas brasileiras

- Embrapa usa CNNs + Random Forest + SVM para reconhecimento de cultivares e estimativa de produtividade em soja ([refaf.com.br/Embrapa](https://refaf.com.br/index.php/refaf/article/download/463/pdf/1242)).
- Equipamento desenvolvido por **LiveFarm + Embrapa** faz contagem em tempo real do bicudo do algodoeiro com IA — relevante direto para MT/BA (>90% da produção nacional de algodão) ([Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/72862099/equipamento-usa-inteligencia-artificial-para-monitoramento-do-bicudo-do-algodoeiro)).
- **Sensorsat** estendeu modelo de IA para monitoramento de algodão em parceria com UniLaSalle/Lucas do Rio Verde-MT ([Inplan](https://inplan.net.br/sensorsat-amplia-o-monitoramento-das-culturas-do-agro-brasileiro-agora-incluindo-o-algodao/)).
- Literatura científica recente em YOLOv4/R-CNN/SSD para detecção de daninhas em soja, com datasets brasileiros (GrowingSoy) e laboratório em IF Goiano ([MDPI Remote Sensing](https://www.mdpi.com/2072-4292/16/23/4394) e [IIETA](https://iieta.org/journals/ts/paper/10.18280/ts.410242)).

### 3.4 Armadilhas inteligentes

- **Elsys EKOS** — armadilha eletrônica com foto programada de piso adesivo, sensores ambientais, transmissão 4G ou satélite. Modelo inicial para cana, com expansão prevista para soja e citros ([O Presente Rural](https://opresenterural.com.br/armadilhas-eletronicas-inteligentes-permitem-o-monitoramento-remoto-de-pragas/)).
- Strider (Syngenta) — Strider Protector (mobile/tablet) digitaliza monitoramento de pragueiros. Reduz até 15% no uso de praguicidas ([Syngenta Portal](https://portal.syngenta.com.br/noticias/solucoes-digitais-sao-aliadas-do-produtor-para-controle-eficaz-de-pragas) e [Blog Syngenta Digital](https://blog.syngentadigital.ag/saiba-como-tecnologia-pode-ajudar-reduzir-perdas-com-pragas/)). Adquirida pela Syngenta em ~2019.

### 3.5 Pesquisa Embrapa

A Embrapa Soja lidera dezenas de iniciativas com IA: sistema de identificação de ferrugem asiática por drones (2024); 14 unidades da Embrapa expandindo uso de IA generativa para gerar relatórios técnicos e organizar dados experimentais; parceria com Baita Aceleradora + Instituto Eldorado pelo programa IA²MCTIC (até R$ 500 mil/startup) ([Embrapa](https://www.embrapa.br/en/inteligencia-artificial-na-embrapa) e [Embrapa](https://www.embrapa.br/en/busca-de-noticias/-/noticia/115461344/ia-generativa-acelera-pesquisas-e-qualifica-recomendacoes-para-o-setor-produtivo)). Estimativa Embrapa: ferramentas de IA podem elevar produtividade em até 20% e reduzir perdas climáticas/pragas em até 30%.

---

## 4. Previsão Climática e Modelos de Safra

### 4.1 Empresas com AI para previsão climática

**Agrosmart** — climate smart solutions com previsão por grade de alta resolução, específica por fazenda. Atende 100 mil produtores em 48 mi ha ([Projeto Draft](https://www.projetodraft.com/agrosmart-se-consolida-em-solucoes-climaticas-e-de-esg-no-campo/)).

**Embrapa Digital** — uso de IA para melhorar previsão do clima com algoritmos sobre dados históricos e atuais ([Aegro/Embrapa](https://aegro.com.br/blog/inteligencia-artificial-na-agricultura-2025/)).

**SpectraX** — análise espectral + ML especificamente treinados para contexto agrícola brasileiro, com foco em previsão de safra de soja ([CompreRural](https://www.comprerural.com/tecnologia-brasileira-transforma-previsao-da-safra-de-soja-no-brasil-com-ia-e-precisao-cientifica/)).

**Climate FieldView Advisor** — em desenvolvimento/teste no Brasil como camada agronômica completa sobre o FieldView ([Bayer](https://www.agro.bayer.com.br/nossa-bayer/com-brasil-como-protagonista-agricultura-digital-bayer-inicia-nova-fase-na-agrishow)).

### 4.2 Modelos preditivos de produtividade

- Estudo USP-ESALQ + Univ. Illinois mostrou que modelos de IA elevam precisão de estimativa de produção no Brasil ([CompreRural](https://www.comprerural.com/tecnologia-brasileira-transforma-previsao-da-safra-de-soja-no-brasil-com-ia-e-precisao-cientifica/)).
- Random Forest aplicado em 47 municípios do oeste do PR (2008–2022) atingiu R²=0,86 treino / 0,81 teste para produtividade de soja ([Revista Pleiade](https://pleiade.uniamerica.br/index.php/pleiade/article/view/1069)).
- Redes neurais artificiais para MATOPIBA (MA, TO, PI, BA) estimaram produtividade média de 2.575 kg/ha ([UNESP Jaboticabal](https://repositorio.unesp.br/bitstream/handle/11449/191987/santos_vb_me_jabo_int.pdf)).
- Classificador Random Forest no Google Colab atingiu 68,3% de aderência vs. dados de campo na safra 2021/22 com índices de vegetação ([ResearchGate](https://www.researchgate.net/publication/366891609_Estimativa_de_produtividade_da_cultura_da_soja_na_safra_202122_Indices_de_vegetacao_e_Machine_Learning)).

### 4.3 Integração com estações meteorológicas

Estações automáticas coletam chuva, vento (direção e velocidade), radiação solar, temperatura e umidade. Integração com IA permite recomendar janela ótima de pulverização (vento, umidade, temperatura), prever doenças com base em microclima e alertar para risco de geada/estiagem ([Agrosmart](https://agrosmart.com.br/blog/estacao-meteorologica-funciona-importancia-agricultura/)). CPTEC/INPE oferece base meteorológica pública ([CPTEC](http://agricultura.cptec.inpe.br/)).

### 4.4 Como produtores grandes de MT acessam clima hoje

Dado quantitativo específico não encontrado nas fontes pesquisadas. Sinais qualitativos: previsões da Syngenta para safra 2025/26 indicam La Niña possível entre nov/2025 e jan/2026 ([Portal Mais Agro](https://maisagro.syngenta.com.br/mercado-e-safra/previsoes-climaticas-para-a-safra-verao-2025-26/)); ~1/3 da área agrícola brasileira em 2025 tinha cobertura 4G/5G ([JornalDoVale](https://jornaldovale.com/tecnologia-e-inteligencia-artificial-impulsionam-a-gestao-do-agronegocio-brasileiro-em-2025/)). Acesso a clima é dominado por: (a) sites públicos (INMET, CPTEC, Climatempo), (b) consultoria climática especializada vendida por safra, (c) camada nativa de plataformas FieldView/Cropwise/xarvio/Aegro. Estação própria ainda é minoria mesmo entre grandes.

---

## 5. Pulverização Inteligente

### 5.1 Pulverização seletiva com AI (green on green / green on brown)

**SaveFarm — Eirene Solutions (BR)** — destaque nacional. Cortex.AI faz visão computacional embarcada nas barras dos pulverizadores, sem internet, processando 54 mi pixels/s e 7 mi imagens/h. Reduz até 95% de herbicida em pré-plantio. 300+ sistemas em operação no Brasil + LATAM. Em 2025 firmou parceria com CNH Industrial — vira opcional de fábrica em Case IH e New Holland ([Case IH/CNH](https://www.caseih.com/pt-br/brasil/produtos/tecnologia-de-precisao/savefarm), [Broto Notícias](https://noticias.broto.com.br/tecnologia/tecnologia-brasileira-ia-pulverizacao/), [SaveFarm](https://savefarm.com.br/en/o-que-e-pulverizacao-seletiva/)).

**John Deere See & Spray Select / Premium / Ultimate** — câmeras + processadores embarcados escaneando 230 m²/s. ExactApply ativa bicos individualmente. -50% médio em herbicida não residual; +2 sc/ha soja em média, picos de 8 sc/ha. Ultimate (green on green) cobra USD 4/acre pelas bibliotecas. Disponível como opcional de fábrica nos pulverizadores 400R e como retrofit via PrecisionUpgrades.com.br ([John Deere Brasil](https://www.deere.com.br/pt/tecnologia-de-produtos/agricultura-de-precis%C3%A3o/john-deere-precision-upgrades/upgrades-para-pulverizadores/introdu%C3%A7%C3%A3o%20definitiva/), [Revista Cultivar](https://revistacultivar.com.br/noticias/tecnologia-see-and-spray-foi-utilizada-em-mais-de-cinco-milhoes-de-acres) e [Macfor](https://macfor.com.br/pulverizacao-seletiva-ia-agro/)).

### 5.2 Drones de pulverização — regulamentação + adoção

- Brasil tem 2.000+ drones agrícolas registrados no Sisant; projeção de 93 mil até 2026 ([Horus/CBInsights](https://www.cbinsights.com/company/horus-aeronaves) e [DroneShow](https://droneshowla.com/mapeamento-com-drones-horus-aeronaves-oferece-solucao-completa/)).
- RBAC-E 94 (atual) — ANAC retirou em 2023 a exigência de controle de aeronavegabilidade para drones de aplicação agrícola.
- RBAC 100 (novo) — substituirá o 94. Classificação por risco operacional (não mais por peso), uso de SORA, criação do COE (Cadastro de Operador de Categoria Específica). Publicação esperada para 1S/2026 ([MundoGEO](https://mundogeo.com/2025/07/22/conheca-em-detalhes-a-nova-regulamentacao-dos-drones-rbac-100-da-anac/) e [Revista Cultivar](https://revistacultivar.com.br/noticias/novas-regras-da-anac-devem-tornar-pulverizacao-por-drones-mais-acessiveis)).
- Operadores de pulverização devem se registrar como aplicador agrícola e atender receituário agronômico.

### 5.3 Pulverizadores autônomos (Brasil)

**Jacto Arbus 4000 JAV** — primeiro pulverizador autônomo brasileiro comercial (Agrishow 2026). IA cria modelo virtual da lavoura, estima tamanho de copa e espaçamento; sensores laser ajustam aplicação em tempo real. Operação 24h, comboio de até 4 máquinas por operador remoto. 16 mil h de validação em 60 mil ha antes do lançamento ([Canal Rural](https://www.canalrural.com.br/projetos/conteudo-patrocinado/pulverizador-autonomo-e-colhedora-de-cana-lancamentos-da-jacto-na-agrishow-reduzem-perdas-e-ampliam-produtividade/) e [AgFeed](https://agfeed.com.br/grande-slam-do-agro/jacto-se-conecta-ao-espaco-lanca-versao-comercial-de-maquina-autonoma-e-inicia-plano-para-dobrar-receita/)).

**Solinftec Solix** — robô agrícola autônomo solar com IA Alice. 40 unidades operando em fazendas de grãos em BA, MT, GO, MS e SP. Caso MT: -15% defensivos/fertilizantes, +8% produtividade em soja. Em soja/algodão, reduz custo de herbicida em até 90% e consumo de água em 70% ([Solinftec](https://www.solinftec.com/pt-br/alice-ai-solix-ag-robotics/), [Compraco](https://compraco.com.br/blogs/atualidades-e-noticias/monitoramento-de-cultivos-com-ia-pela-solinftec-otimizando-a-produtividade-agricola) e [AgFeed](https://agfeed.com.br/grande-slam-do-agro/agrishow/apresentado-por-solinftec/solinftec-mostra-primeiros-resultados-de-robo-com-inteligencia-artificial/)).

### 5.4 AGCO/PTx Trimble e Precision Planting

AGCO consolidou em **PTx** (PTx Trimble + Precision Planting) marca dedicada a precisão e digital. Produtos-chave para AI/precisão: vDrive (taxa de sementes linha a linha), DeltaForce/SeederForce/AirForce (controle de profundidade), SpeedTube/WaveVision/BullsEye (qualidade de plantio), Field-IQ Trimble (taxa variável + controle de seção) ([AGCO Brasil](https://www.agco.com.br/news-and-media-center/agco-apresenta-solucoes-inovadores-para-aumento-produtividade-campo.html), [Precision Planting Brasil](https://www.agco.com.br/brands/precision-planting.html) e [Trimble Brasil](https://br.ptxtrimble.com/blog/taxa-variavel-e-controle-de-taxa/)). Modelo de upgrade em equipamentos existentes é diferencial em mercado MT, onde frota de plantadeiras é ampla.

---

## Tabela resumo — Empresas/Soluções para apresentação

| Empresa / Solução | O que faz | Modelo / Preço | Adoção | Presença MT |
|---|---|---|---|---|
| Solinftec / Alice AI / Solix | Plataforma de IA + robô autônomo solar p/ monitoramento e aplicação seletiva | Locação mensal por ha; robô Solix ~R$ 370 mil/un. | 2 mi+ ha conectados, 5.500 máquinas; 40 robôs em campo | Sim — escritórios em Sinop, Nova Mutum, Querência; cases em MT |
| Climate FieldView (Bayer) | Plataforma digital integrada (plantio, pulverização, colheita, solo) + FieldView Advisor (IA) | Plano Plus R$ 1.500/ano, ha ilimitado | 380 mil ha no piloto BR; 130+ produtores; +20% produtividade soja vs. média Conab | Sim — produtores MT participaram desde o piloto |
| Cropwise (Syngenta) | Família 8 ferramentas SaaS + Cropwise AI (GenAI), Cropwise Planting, Protector | SaaS por ha; preço não público | 6 mi ha BR / 100 mi ha mundo; 10 mil propriedades BR | Sim |
| Strider (Syngenta) | Strider Protector — mobile pra monitoramento de pragas em tempo real | Por ha (não público) | -15% praguicidas em casos | Sim — base regional |
| xarvio (BASF) FIELD MANAGER + Agro Experts | Plataforma com IA p/ doenças, semeadura dinâmica, taxa variável; rede de consultores | Por ha + serviço de consultoria | +2 a 5% produtividade soja/milho/algodão | Sim — MT entre 8 estados credenciados |
| InCeres | Mapas de fertilidade, zonas de manejo, álgebra de mapas, app de coleta | Planos por perfil (consultor/empresa) | Plataforma referência em AP no BR | Sim (uso em MT, dado de ha não público) |
| Sensix | FieldScan — drone + satélite + solo + máquinas com IA | Por ha/safra (não público) | 10 mil fazendas, 3 mi ha BR+LATAM | Sim |
| Perfect Flight | Gestão e rastreabilidade de pulverização aérea (avião + drone) com IA | Por ha pulverizado | 25 mi ha digitalizados | Sim |
| Horus Aeronaves / Mappa | Drones nacionais + plataforma Mappa (IA p/ daninhas, falhas, shapefile) | Serviço por ha + licença plataforma | 500+ operadores, 450 mil ha/dia capacidade | Sim |
| SaveFarm / Cortex.AI (Eirene Solutions / CNH) | Pulverização seletiva green on green com visão computacional embarcada | Opcional de fábrica Case IH/NH ou retrofit | 300+ sistemas BR+LATAM; -95% herbicida pré-plantio | Sim — região prioritária |
| John Deere See & Spray (Select/Premium/Ultimate) | Pulverização seletiva com câmeras + processadores embarcados | Opcional fábrica 400R + USD 4/acre bibliotecas (Ultimate) | -50% herbicida não residual; +2 a 8 sc/ha soja | Sim — fábrica Goiás + concessionárias MT |
| AGCO / PTx Trimble + Precision Planting | Plantio de precisão linha a linha, taxa variável, controle de seção | Retrofit em frota existente | +6 sc/ha soja, +13 sc/ha milho documentados | Sim |
| Jacto Arbus 4000 JAV | Pulverizador autônomo brasileiro, IA p/ modelo virtual de lavoura | Compra (preço não público p/ JAV) | 16 mil h validação, 60 mil ha | Sim — eventos em Lucas do Rio Verde, base MT |
| TerraMagna | Monitoramento por satélite SAR + IA p/ crédito rural | Por ha monitorado (modelo B2B financeiro) | 10 mil fazendas/semana | Sim |
| Agrosmart | Estações + plataforma de inteligência climática c/ IA | Assinatura | 100 mil produtores, 48 mi ha BR+LATAM | Sim |
| Aegro | ERP/gestão agrícola | SaaS por fazenda | 3 mi ha sob gestão, 5 mil fazendas (foco 500–5.000 ha) | Sim — Centro-Oeste é forte |
| PlantCheck ID (Embrapa Soja + Macnica + InnerEye) | App gratuito de detecção de doenças da soja por foto | Gratuito (Android/iOS) | Lançado em escala de teste em 2025 | Disponível nacional |
| Sensorsat | Monitoramento satelital de soja, milho, café, algodão com IA | Por ha/talhão | Estendeu modelo p/ algodão em parceria UniLaSalle/Lucas do Rio Verde | Sim |
| LiveFarm + Embrapa | Equipamento de contagem automática do bicudo do algodoeiro com IA | B2B (não público) | Em uso/pesquisa | MT/BA |
| Elsys EKOS | Armadilha eletrônica com câmera + sensores + IA (cana inicialmente) | Por unidade + assinatura plataforma | Expansão prevista p/ soja/citros | Disponível |

---

## Mercado e investimento

- Mercado brasileiro de AI no agro: USD 50 mi (2024) → USD 230 mi (2033), CAGR 19,5% ([IMARC](https://www.imarcgroup.com/brazil-ai-in-agriculture-market)).
- Mercado total agtech BR: USD 520 mi ([Ken Research](https://www.kenresearch.com/brazil-agritech-platforms-and-smart-farming-market)).
- Funding agrifoodtech BR: USD 249 mi em 49 deals em 2024; Q1/2025 cresceu 32% trimestre/trimestre e 85% ano/ano. Maior round: Series D de USD 60 mi para Solinftec ([AgFunder News](https://agfundernews.com/data-dive-afns-insights-brazils-agrifoodtech-funding-grows-32-in-q1-2025-after-meagre-2024-performance)).
- Número de agtechs BR cresceu 75% (2019–2024), chegando a ~2.000 empresas ativas.
- Governo BR anunciou em jul/2024 estratégia de IA com BRL 23 bi (USD 4 bi) para 2024–2028, incluindo agro ([AmericasQuarterly](https://www.americasquarterly.org/article/the-next-generation-of-agtech-in-brazil/)).
- 71% das empresas do setor agro apontam IA/ML como prioridade tecnológica dos próximos 12 meses ([SindPD-MT](https://sindpd-mt.org.br/mato-grosso-avanco-tecnologico-agro-com-foco-ia/)).
- Sorriso (MT) é o maior PIB agrícola do país: R$ 7,2 bi em 2024, 615 mil ha plantados, +2 mi t soja/ano, 30 mil ha com pivô central ([Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2025-09/sorriso-no-mt-tem-maior-pib-agricola-do-pais-veja-o-ranking) e [JK Notícias](https://www.jknoticias.com/portal/2025/08/09/o-que-faz-sorriso-ser-o-maior-produtor-de-soja-do-mundo/)).

---

## Lacunas / oportunidades observadas durante a pesquisa

1. **Consultor neutro / integrador vendor-agnóstico** — A oferta atual é toda vendor-locked: Bayer empurra FieldView, Syngenta empurra Cropwise, BASF empurra xarvio, John Deere/AGCO empurram suas pilhas próprias. Um produtor grande de Sorriso pode ter 3–5 plataformas rodando em paralelo sem integração. **Oportunidade**: posicionar consultoria como camada de orquestração + data lake unificado por fazenda, com IA própria por cima.

2. **AI generativa / "ChatGPT do agro" para tomada de decisão** — Solinftec já adicionou voz + ChatGPT à plataforma Alice; Syngenta integrou GenAI ao Cropwise; Embrapa expandiu IA generativa em 14 unidades. Mas nenhum desses está vendido como agente conversacional sobre o data lake do próprio produtor. **Oportunidade**: serviço de consultoria + implementação de "Copilot da fazenda" treinado nos dados do cliente (histórico de talhão, COA, NF de insumo, dados de máquina via ISOBUS).

3. **Detecção embarcada / edge** — SaveFarm provou que dá pra fazer visão computacional em tempo real sem internet. Combinado com a realidade de MT (3% só de cobertura full-farm), há demanda forte por soluções edge. **Oportunidade**: oferta de "kits" de edge AI (câmera + Jetson + modelo treinado) por talhão para daninhas, falhas de plantio e contagem de pragas.

4. **Modelo preditivo de produtividade por talhão** — Existe pesquisa madura (Random Forest com R²>0,8 em soja), mas a comercialização ainda é embrionária. **Oportunidade**: serviço "previsão de safra por talhão" vendido como SaaS por ha, alimentando seguro agrícola, barter e venda antecipada.

5. **Monitoramento de algodão** — Sensorsat já se estendeu para algodão em parceria com UniLaSalle/Lucas do Rio Verde; LiveFarm + Embrapa tem hardware para bicudo. Mas a oferta é fragmentada. **Oportunidade**: pacote "cotton intelligence" multi-fonte para grandes fazendas de algodão em MT (cidades como Sapezal, Campo Novo do Parecis).

6. **Treinamento e change management** — Barreira citada é escassez de técnicos qualificados para AP/AI no campo ([SCADIAgro](https://scadiagro.com.br/agricultura-de-precisao-brasil/)). **Oportunidade**: programa de treinamento + certificação para o time interno da fazenda (agrônomos, gerentes operacionais, operadores de máquina).

7. **Integração ISOBUS / John Deere / AGCO em data lake único** — Cada fabricante tem seu CAN bus + nuvem. **Oportunidade**: oferta de pipeline de ingestão que normalize dados das diferentes máquinas (Operations Center do John Deere, FUSE da AGCO, MyJacto, FieldView Drive, Solinftec Alice) num único repositório por cliente.

8. **Compliance regulatório com IA** — Receituário agronômico, rastreabilidade de pulverização aérea, ESG (Pro Carbono Bayer, Agrosmart ESG), exigências de mercado europeu (EUDR para soja). **Oportunidade**: serviço de "ESG/compliance as a service" com IA processando notas, registros de aplicação e imagens de satélite.

9. **Aplicação para milho safrinha (gestão de pragas e clima)** — Lagarta-do-cartucho e helicoverpa apareceram em até 79% das lavouras de norte-centro MT na safrinha; produtividade média BR atingiu 113,8 sc/ha (+13,1%) ([Jornal do Vale](https://jornaldovale.com/tecnologia-e-inteligencia-artificial-impulsionam-a-gestao-do-agronegocio-brasileiro-em-2025/)). Janela curta + alto risco climático = caso de uso perfeito para previsão diária + alerta. **Oportunidade**: produto específico "safrinha intelligence" para milho de 2ª safra.

10. **Cooperativas e associações como canal** — Aprosoja-MT já trouxe palestras de IA no 19º Circuito (32 municípios MT em 2025) e mantém CTECNO Araguaia e CTECNO Parecis em parceria com IMEA. **Oportunidade**: parceria institucional com Aprosoja/IMEA/Fundação MT para entrar no canal de 32 municípios sem CAC alto, oferecendo conteúdo + diagnóstico gratuito como porta de entrada.

---

## Lista de fontes consultadas

### Agências de notícias e portais
- https://www.canalrural.com.br/projetos/conteudo-patrocinado/pulverizador-autonomo-e-colhedora-de-cana-lancamentos-da-jacto-na-agrishow-reduzem-perdas-e-ampliam-produtividade/
- https://www.canalrural.com.br/agricultura/plataforma-usa-inteligencia-artificial-para-antecipar-risco-de-ferrugem-asiatica/
- https://www.canalrural.com.br/agricultura/bicudo-do-algodao-tecnologia-da-embrapa-conta-insetos-em-tempo-real/
- https://www.canalrural.com.br/agricultura/empresa-oferece-dados-agricolas-de-74-milhoes-de-hectares-coletados-em-mais-de-30-paises/
- https://www.cnnbrasil.com.br/economia/macroeconomia/produtores-de-graos-de-mato-grosso-aceleram-uso-de-tecnologias-durante-pandemia/
- https://www.moneytimes.com.br/produtores-de-graos-de-mt-buscam-acelerar-uso-de-tecnologias-86-tem-acesso-a-internet-diz-imea/
- https://www.terra.com.br/economia/produtores-de-graos-de-mt-buscam-acelerar-uso-de-tecnologias-86-tem-acesso-a-internet-diz-imea,6694075dafafebb19dc413fd0fb3f8adtug2doot.html
- https://exame.com/agro/agricultura-de-precisao-o-que-e-e-por-que-tem-sido-tao-importante-para-a-producao-de-alimentos/
- https://exame.com/agro/terramagna-lanca-nova-empreitada-com-tm-digital-e-mira-r-18-bilhoes-em-2025/
- https://agenciabrasil.ebc.com.br/economia/noticia/2025-09/sorriso-no-mt-tem-maior-pib-agricola-do-pais-veja-o-ranking
- https://www.gazetadopovo.com.br/brasil/municipio-sorriso-mato-grosso-maior-produtor-soja-mundial/
- https://www.gazetadopovo.com.br/conteudo-publicitario/syngenta-brasil/solucao-digital-cropwise-protector-facilita-tomada-de-decisao-e-otimiza-producao-no-campo/

### Revistas/Portais agronegócio
- https://revistacultivar.com.br/noticias/syngenta-lanca-cropwise-com-inteligencia-artificial
- https://revistacultivar.com.br/noticias/perfect-flight-atinge-25-milhoes-de-hectares-digitalizados-e-monitorados-sobre-pulverizacao-aerea
- https://revistacultivar.com.br/noticias/perfect-flight-e-strider-anunciam-parceria-na-conexao-dos-softwares
- https://revistacultivar.com.br/noticias/nova-plataforma-inceres-traz-solucoes-para-agricultura-de-precisao
- https://revistacultivar.com.br/noticias/brasil-lidera-nova-fase-da-agricultura-digital-da-bayer
- https://revistacultivar.com.br/noticias/agricultura-de-precisao-agora-em-tempo-real-com-o-inceres-agsystem
- https://revistacultivar.com.br/noticias/tecnologia-see-and-spray-foi-utilizada-em-mais-de-cinco-milhoes-de-acres
- https://revistacultivar.com.br/noticias/novas-regras-da-anac-devem-tornar-pulverizacao-por-drones-mais-acessiveis
- https://revistacultivar.com.br/noticias/syngenta-lanca-cropwise-com-inteligencia-artificial
- https://revistacultivar.com.br/noticias/armadilhas-eletronicas-inteligentes-permitem-o-monitoramento-remoto-de-pragas
- https://revistacultivar.com.br/noticias/geopolitica-e-inovacao-marcam-o-25o-encontro-tecnico-de-soja-em-mato-grosso
- https://revistacultivar.com.br/artigos/como-a-agricultura-de-precisao-esta-transformando-a-producao-brasileira
- https://revistacultivar.com.br/artigos/cultivo-de-soja-com-taxa-variavel-de-fertilizantes
- https://revistacampoenegocios.com.br/armadilhas-inteligentes-novidade-no-manejo-de-pragas/
- https://www.portaldoagronegocio.com.br/tecnologia/agricultura-precisao/noticias/a-revolucao-da-agricultura-drones-e-inteligencia-artificial-transformam-o-monitoramento-no-campo
- https://www.portaldoagronegocio.com.br/tecnologia/agricultura-precisao/noticias/mt-produtores-de-graos-buscam-uso-de-tecnologias-86-tem-acesso-a-internet
- https://www.portaldoagronegocio.com.br/agricultura/soja/noticias/tecnologia-com-inteligencia-artificial-ajuda-produtores-a-combater-ferrugem-asiatica-da-soja
- https://www.portaldoagronegocio.com.br/tecnologia/agricultura-precisao/noticias/basf-lanca-o-xarvio-agro-experts-programa-que-visa-democratizar-o-uso-da-agricultura-digital-no-brasil
- https://www.portaldoagronegocio.com.br/tecnologia/agricultura-precisao/noticias/terramagna-inova-com-monitoramento-agricola-via-satelite-190079
- https://opresenterural.com.br/plataforma-com-inteligencia-artificial-aprimora-diagnostico-da-ferrugem-asiatica-da-soja/
- https://opresenterural.com.br/produtor-ja-pode-testar-aplicativo-que-usa-registro-de-ondas-cerebrais-de-especialistas-para-detectar-doencas-da-soja/
- https://opresenterural.com.br/inteligencia-artificial-no-campo-ja-transforma-a-agropecuaria-brasileira/
- https://opresenterural.com.br/armadilhas-eletronicas-inteligentes-melhoram-controle-de-pragas-mas-precisam-internet-4g/
- https://opresenterural.com.br/armadilhas-eletronicas-inteligentes-permitem-o-monitoramento-remoto-de-pragas/
- https://opresenterural.com.br/armadilhas-conectadas-e-inteligentes-prometem-proteger-plantacoes-contra-pragas/
- https://opresenterural.com.br/como-30-anos-de-pesquisas-da-fundacao-mt-contribuiram-com-o-agronegocio/
- https://agfeed.com.br/grande-slam-do-agro/agrishow/apresentado-por-solinftec/solinftec-mostra-primeiros-resultados-de-robo-com-inteligencia-artificial/
- https://agfeed.com.br/agtech/solinftec-inicia-entrega-de-robos-no-brasil-e-ameaca-segmento-bilionario-nos-eua/
- https://agfeed.com.br/agtech/aegro-mira-pequenos-produtores-para-cobrir-5-milhoes-de-hectares-com-seus-softwares/
- https://agfeed.com.br/grande-slam-do-agro/solinftec-turbina-plataforma-com-audio-para-chatgpt-e-comparativo-de-maquinas/
- https://agfeed.com.br/negocios/john-deere-vai-investir-em-fabrica-de-goias-com-foco-em-agricultura-4-0/
- https://agfeed.com.br/grande-slam-do-agro/jacto-se-conecta-ao-espaco-lanca-versao-comercial-de-maquina-autonoma-e-inicia-plano-para-dobrar-receita/
- https://agfeed.com.br/grande-slam-do-agro/agrishow/basf-leva-agricultura-digital-do-xarvio-para-cana-e-preve-expansao-com-foco-no-brasil/
- https://agfeed.com.br/negocios/syngenta-entra-na-corrida-das-plataformas-de-agricultura-digital/
- https://www.theagribiz.com/agtechs/o-robo-da-solinftec-vai-ganhar-escala-e-faturar-r-55-milhoes/
- https://www.startagro.agr.br/syngenta-adquire-strider/
- https://agrovem.com.br/segunda-safra-de-milho-caminha-para-recorde/
- https://www.brasilagro.com.br/conteudo/solinftec-apresenta-inteligencia-artificial-da-alice-na-agrishow-2018.html
- https://agroreceita.com.br/inteligencia-artificial-na-agricultura/
- https://agroreceita.com.br/safra-2025-26-custo-de-producao-agricola/
- https://www.agrolink.com.br/noticias/inteligencia-artificial-e-drones-revolucionam-o-monitoramento-agricola_500071.html
- https://www.agrolink.com.br/noticias/agco-apresenta-solucoes-inovadoras-para-aumento-da-produtividade-no-campo_417117.html
- https://www.agrolink.com.br/noticias/agricultura-de-precisao-reduz-custos-no-plantio_437729.html
- https://www.agrolink.com.br/noticias/como-a-semeadura-em-taxa-variavel-pode-maximizar-o-potencial-da-sua-area-_493222.html
- https://www.agrolink.com.br/agromidias/video/climate-fieldview---e-lancada-oficialmente-como-plataforma_18712.html
- https://campoenegocios.com/produtores-de-algodao-apostam-na-gestao-da-pulverizacao-por-drones-para-produzir-mais/
- https://portalmaquinasagricolas.com.br/pulverizacao-por-drones-e-aposta-dos-produtores-algodao/
- https://portalmaquinasagricolas.com.br/teste/2024/02/01/jacto-lanca-adubadora-e-plantadeira-alem-de-solucoes-para-agricultura-de-precisao/
- https://www.agroplanning.com.br/2020/12/02/agfintech-terramagna-recebe-aporte-de-2-milhoes-de-dolares-para-levar-credito-ao-agronegocio/
- https://www.agroplanning.com.br/2023/01/23/produtores-de-algodao-apostam-na-gestao-da-pulverizacao-por-drones-para-produzir-mais-em-2023/
- https://www.comprerural.com/tecnologia-brasileira-transforma-previsao-da-safra-de-soja-no-brasil-com-ia-e-precisao-cientifica/
- https://www.comprerural.com/conheca-a-maior-inteligencia-artificial-do-agro-que-agora-chega-a-pecuaria/
- https://www.comprerural.com/confira-onde-esta-o-hectare-mais-barato-e-o-mais-caro-do-brasil/
- https://noticias.broto.com.br/tecnologia/tecnologia-brasileira-ia-pulverizacao/
- https://noticias.broto.com.br/agricultura/gestao-pulverizacao-aerea/
- https://destaquerural.com.br/agricultura/a-plataforma-xarvio-fiel-manager-da-basf-conta-com-timing-de-aplicacao/
- https://eaemaq.com.br/noticias-de-produtos/tecnologia-movel-da-strider-reduz-perdas-nas-lavouras/
- https://eaemaq.com.br/noticias-sobre-eventos-e-feiras/savefarm-leva-tecnologia-de-pulverizacao-seletiva-com-inteligencia-artificial-a-agrishow/
- https://www.campograndenews.com.br/lado-rural/inteligencia-artificial-entra-em-campo-contra-a-ferrugem-asiatica-da-soja
- https://www.cenariomt.com.br/agro/produtor-ja-pode-testar-aplicativo-que-usa-registro-de-ondas-cerebrais-de-especialistas-para-detectar-doencas-da-soja/
- https://matogrosso.canalrural.com.br/politica/produtores-em-sorriso-reivindicam-mais-atencao-a-logistica-ao-futuro-prefeito/
- https://mtplay.com.br/agronegocio/agricultura-de-precisao-ganha-espaco-no-campo-e-pode-aumentar-produtividade/
- https://jornaldovale.com/tecnologia-e-inteligencia-artificial-impulsionam-a-gestao-do-agronegocio-brasileiro-em-2025/
- https://minutomt.com.br/agro/tecnologia-e-inteligencia-artificial-impulsionam-a-gestao-do-agronegocio-brasileiro-em-2025/
- https://www.estadaomatogrosso.com.br/agronegocio/circuito-aprosoja-chega-a-gaucha-do-norte-com-casa-cheia-e-foco-em-tecnologia-no-campo/116017
- https://www.jknoticias.com/portal/2025/08/09/o-que-faz-sorriso-ser-o-maior-produtor-de-soja-do-mundo/
- https://www.gcnoticias.com.br/geral/solinftec-utiliza-tecnologia-e-inovacao-para-atender-produtores-de-sinop-e-regiao/77409032

### Empresas (sites institucionais)
- https://www.solinftec.com/pt-br/blog/alice-ai-inteligencia-artificial-que-transforma-o-agro/
- https://www.solinftec.com/pt-br/blog/inteligencia-artificial-no-agro/
- https://www.solinftec.com/pt-br/blog/solix-o-robo-agricola-da-solinftec/
- https://www.solinftec.com/pt-br/alice-ai-solix-ag-robotics/
- https://www.solinftec.com/pt-br/alice-ai-platform/
- https://www.solinftec.com/pt-br/operacoes-de-agronomia-latam-2/
- https://www.solinftec.com/pt-br/servicos-de-agronomia/
- https://www.solinftec.com/pt-br/
- https://www.agro.bayer.com.br/nossa-bayer/com-brasil-como-protagonista-agricultura-digital-bayer-inicia-nova-fase-na-agrishow
- https://www.agro.bayer.com.br/nossa-bayer/release-biotecnologia-em-soja
- https://www.agro.bayer.com.br/nossa-bayer/biotecnologia-soja-produtividade-100-sacas-desafios-climaticos
- https://www.agro.bayer.com.br/conteudos-impulso-bayer/uso-da-agricultura-digital-para-o-manejo-de-nematoides-na-soja
- https://www.agro.bayer.com.br/conteudos-impulso-bayer/perspectivas-de-mercado-e-clima-para-2025
- https://www.agro.bayer.com.br/climate-fieldview
- https://www.agro.bayer.com.br/impulso-bayer/climate-fieldview-plano-plus
- https://www.bayer.com.br/pt/midia/produtores-colhem-media-105-sacas-hectare-nova-biotecnologia-soja-bayer
- https://www.bayer.com.br/pt/midia/com-brasil-protagonista-agricultura-digital-bayer-nova-fase-agrishow
- https://climate.com/pt-br/noticias/plataforma-de-agricultura-digital-climate-fieldview-oficialmente-lan-ada-no-brasil.html
- https://climate.com/pt-br/planos/plus.html
- https://climatefieldview.com.br/noticias/plataforma-de-agricultura-digital-climate-fieldview-e-oficialmente-lancada-no-brasil
- https://www.climatefieldview.com.br/hs/plano-plus
- https://ofertas.climatefieldview.com.br/planos-precos-ofertas
- https://maisagro.syngenta.com.br/inovacoes-e-tendencias/ia-na-agricultura-a-transformacao-com-cropwise/
- https://maisagro.syngenta.com.br/mercado-e-safra/previsoes-climaticas-para-a-safra-verao-2025-26/
- https://maisagro.syngenta.com.br/mercado-e-safra/agro-brasileiro-balanco-de-2025-e-perspectivas-para-2026/
- https://www.syngenta.com.br/syngenta-digital-lanca-cropwise-planting-no-brasil-ferramenta-que-aprimora-gestao-de-dados-e-ajuda
- https://www.syngenta.com.br/syngenta-digital-une-inteligencia-artificial-e-whatsapp-para-revolucionar-gestao-agricola-e-0
- https://www.syngenta.com.br/inovacao-e-produtividade-serao-temas-de-destaque-para-syngenta-na-agrishow-2024
- https://www.syngenta.com.br/press-release/eventos/strider-day-liderancas-agro-debatem-como-tecnologia-impulsiona-gestao-e-0
- https://portal.syngenta.com.br/noticias/solucoes-digitais-sao-aliadas-do-produtor-para-controle-eficaz-de-pragas
- https://blog.syngentadigital.ag/cropwise-a-plataforma-digital-da-syngenta/
- https://blog.syngentadigital.ag/saiba-como-tecnologia-pode-ajudar-reduzir-perdas-com-pragas/
- https://www.cropwise.com/
- https://agriculture.basf.com/basf/agriculture/br/pt/informacoes-a-imprensa/2024/digitalizacao-da-analise-do-solo-gera-economia-e-maior-produtividade-no-sistema-soja-milho
- https://agriculture.basf.com/basf/agriculture/br/pt/informacoes-a-imprensa/2023/basf-lanca-o-xarvio-agro-experts-programa-que-visa-democratizar-o-uso-da-agricultura-digital-no-brasil
- https://agriculture.basf.com/br/pt/agricultura-sustentavel/agricultura-digital
- https://www.basf.com/br/pt/who-we-are/digitalization/artificial-intelligence
- https://www.basf.com/br/pt/media/news-releases/2021/01/solucoes-do-xarvio--serao-oferecidas-para-mais-cultivos-
- https://www.xarvio.com/br/pt/noticias/xarvio-agro-experts.html
- https://www.agco.com.br/news-and-media-center/agco-apresenta-solucoes-inovadores-para-aumento-produtividade-campo.html
- https://www.agco.com.br/brands/precision-planting.html
- https://www.agco.com.br/
- https://www.agcocorp.com/br/pt/home/brands-and-solutions/precision-planting.html
- https://agriculture.trimble.com/?lang=pt-br
- https://br.ptxtrimble.com/blog/taxa-variavel-e-controle-de-taxa/
- https://br.ptxtrimble.com/blog/category/agricultura-de-preciso/
- https://agro.trimble.com.br/?lang=uk
- https://precisionupgrades.com.br/
- https://www.deere.com.br/pt/tecnologia-de-produtos/agricultura-de-precis%C3%A3o/john-deere-precision-upgrades/upgrades-para-pulverizadores/introdu%C3%A7%C3%A3o%20definitiva/
- https://www.deere.com.br/pt/tratos-culturais/pulverizador-m4030/
- https://www.deere.com.br/pt/tratos-culturais/pulverizador-m4040/fragment-features.html
- https://www.deere.com.br/pt/a-nossa-empresa/not%C3%ADcias/sala-de-imprensa/2025/oct/detalha-solu%C3%A7%C3%B5es-que-ajudam-o-agro/
- https://blog.jacto.com.br/mapas-dados-na-agricultura-precisao/
- https://inceres.com.br/
- https://inceres.com.br/categoria/agricultura-de-precisao/
- https://inceres.com.br/nossas-solucoes/
- https://www.inceres.com.br/tag/agricultura-digital/
- https://horusaeronaves.com/
- https://www.cbinsights.com/company/horus-aeronaves
- https://www.perfectflight.com.br/post/como-a-pulverizacao-por-aviao-e-drones-esta-transformando-a-agricultura
- https://www.perfectflight.com.br/post/pulverizacao-com-drones
- https://www.perfectflight.com.br/post/como-a-inteligencia-artificial-esta-transformando-a-precisao-da-pulverizacao
- https://www.perfectflight.com.br/post/futuro-da-pulverizacao-agricola
- https://blog.sensix.ag/inteligencia-artificial-ia-e-agricultura-conheca-a-tecnologia-capaz-de-acelerar-a-identificacao-de-doencas-em-plantas/
- https://blog.sensix.ag/drones-e-agricultura-entenda-o-potencial-revolucionario-desses-equipamentos-em-lavouras/
- https://blog.sensix.ag/agricultura-drone-ou-satelite/
- https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/materias/2024/Sensix-mira-breakeven-com-plataforma-de-gestao-de-dados-para-o-agro-baseada-em-IA.html
- https://savefarm.com.br/en/o-que-e-pulverizacao-seletiva/
- https://savefarm.com.br/en/sustentabilidade-economia-com-pulverizacao-seletiva/
- https://savefarm.com.br/en/como-e-feita-pulverizacao-seletiva/
- https://savefarm.com.br/en/inteligencia-artificial-para-pulverizadores-na-agritechnica/
- https://www.caseih.com/pt-br/brasil/produtos/tecnologia-de-precisao/savefarm
- https://pivot.com.br/solutions/savefarm-sistema-de-pulverizacao-seletiva/
- https://agrosmart.com.br/blog/estacao-meteorologica-funciona-importancia-agricultura/
- https://agrosmart.com.br/blog/inteligencia-climatica-na-pratica/
- https://agrosmart.com.br/blog/ponto-de-orvalho/
- https://www.projetodraft.com/agrosmart-se-consolida-em-solucoes-climaticas-e-de-esg-no-campo/
- https://terramagna.com.br/
- https://terramagna.com.br/blog/agfintech/
- https://terramagna.com.br/blog/linhas-de-credito-rural-conheca-as-principais/
- https://terramagna.com.br/blog/custeio-agricola/
- https://aegro.com.br/
- https://aegro.com.br/produtor-rural/
- https://aegro.com.br/blog/melhor-software-para-agronegocio/
- https://aegro.com.br/solucoes/
- https://aegro.com.br/blog/inteligencia-artificial-na-agricultura-2025/
- https://aegro.com.br/blog/agricultura-de-precisao/
- https://aegro.com.br/blog/satelite-mapeamento-agricultura-precisao/
- https://aegro.com.br/blog/producao-de-graos-no-brasil-2025/
- https://aegro.com.br/tags/satelite-sentinel-2/
- https://blog.aegro.com.br/sensores-no-manejo-integrado-de-pragas/
- https://blog.aegro.com.br/mapas-de-produtividade-na-agricultura-de-precisao/
- https://blog.aegro.com.br/custo-de-producao-de-soja/
- https://blog.aegro.com.br/drone-de-lavoura/
- https://blog.aegro.com.br/mapeamento-de-fertilidade-do-solo/

### Embrapa e instituições públicas / pesquisa
- https://www.embrapa.br/en/inteligencia-artificial-na-embrapa
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/115461344/ia-generativa-acelera-pesquisas-e-qualifica-recomendacoes-para-o-setor-produtivo
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/99117140/produtor-ja-pode-testar-aplicativo-que-usa-registro-de-ondas-cerebrais-de-especialistas-para-detectar-doencas-da-soja
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/102074739/engenharia-genetica-e-inteligencia-artificial-vao-ditar-avancos-no-melhoramento-da-soja
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/72862099/equipamento-usa-inteligencia-artificial-para-monitoramento-do-bicudo-do-algodoeiro
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/51706860/pesquisa-contribui-para-transformacao-digital-da-agricultura-brasileira
- https://www.embrapa.br/en/visao-de-futuro/agrodigital/sinal-e-tendencia/avanco-da-ciencia-de-dados-e-big-data-inteligencia-artificial-aprendizado-de-maquina-e-cooperativas-de-dados
- https://www.embrapa.br/en/agricultura-digital
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/94791542/pesquisa-mostra-que-semeadura-customizada-aumenta-a-produtividade
- https://www.embrapa.br/en/busca-de-noticias/-/noticia/73858038/aplicativo-ajuda-produtor-de-soja-a-enfrentar-escassez-de-fertilizantes
- https://www.embrapa.br/busca-de-noticias/-/noticia/53132403/baita-aceleradora-embrapa-e-instituto-eldorado-vao-apoiar-solucoes-de-impacto-em-inteligencia-artificial
- https://www.embrapa.br/en/satelites-de-monitoramento/missoes/sentinel
- https://www.embrapa.br/en/aplicativos
- https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1151350/1/p-108-Documentos-201-CNPT.pdf
- https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/programa-copernicus-repositorio-espelho-de-dados-sentinel-no-inpe
- https://data.inpe.br/dados/sentinel-2/
- https://www.gov.br/agricultura/pt-br/assuntos/inovacao/mapaconecta/ecossistemas/matogrosso/detalhes-do-ecossistema/pesquisa-desenvolvimento/pesquisa-mt
- http://agricultura.cptec.inpe.br/
- https://agricultura.sp.gov.br/2025/05/02/produtor-tera-acesso-gratuito-a-dados-agrometeorologicos/
- https://www.fundacaomt.com.br/noticias/encontro-tecnico-soja-fundacao-mt
- https://www.fundacaomt.com.br/eventos/xxiv-encontro-tecnico-de-soja-2d45
- https://aprosoja.com.br/comunicacao/release/19o-circuito-aprosoja-mt-2025-encerra-dia-24-de-junho-em-cuiaba
- https://aprosoja.com.br/comunicacao/release/apro360-sergio-sacani-debate-inteligencia-artificial-e-desafios-da-comunicacao-no-agro-durante-podcast
- https://aprosoja.com.br/comunicacao/release/conexao-entre-tecnologia-e-agro-chega-em-claudia-e-sinop-com-circuito-aprosoja-mt
- https://aprosoja.com.br/comunicacao/release/circuito-aprosoja-reune-produtores-e-estudantes-em-canarana-com-destaque-para-tecnologia-e-aproximacao-com-a-sociedade
- https://aprosoja.com.br/comunicacao/release/com-sergio-sacani-como-palestrante-primavera-do-leste-recebe-o-19o-circuito-aprosoja
- https://aprosojams.org.br/sites/default/files/boletins/custo%2023_24%20(4)_0.pdf
- https://aprosojams.org.br/blog/safra-de-soja-20242025-plantar-um-hectare-custa-r-59-mil-em-mato-grosso-do-sul
- https://www.cnabrasil.org.br/noticias/imea-lanca-pesquisa-inedita-do-perfil-do-agricultor-na-era-digital
- https://www.cnabrasil.org.br/noticias/imea-divulga-pesquisa-inedita-sobre-o-perfil-do-pecuarista-de-mato-grosso-na-era-digital
- https://cnabrasil.org.br/noticias/estudo-do-imea-revela-oportunidades-e-desafios-da-tecnologia-no-campo
- https://cnabrasil.org.br/noticias/pulverizacao-com-drones-faz-do-ceu-a-proxima-fronteira-agricola-para-o-agro
- https://sistemafamato.org.br/senarmt/2015/06/24/mais-de-40-dos-produtores-realizam-agricultura-de-precisao-em-mt/
- https://sistemafamato.org.br/senarmt/2023/05/12/parceria-disponibiliza-tecnologia-argentina-de-aplicacao-de-defensivos-agricolas-no-ct-sorriso/
- https://sindpd-mt.org.br/mato-grosso-avanco-tecnologico-agro-com-foco-ia/
- https://repositorio.ipea.gov.br/server/api/core/bitstreams/53202ea8-aea9-4c0d-ade3-e11c4c7a8e10/content

### Mercado, investimento e regulamentação
- https://agfundernews.com/data-dive-afns-insights-brazils-agrifoodtech-funding-grows-32-in-q1-2025-after-meagre-2024-performance
- https://www.imarcgroup.com/brazil-ai-in-agriculture-market
- https://www.kenresearch.com/brazil-agritech-platforms-and-smart-farming-market
- https://www.makreo.com/report/brazil-agritech-market-size-and-forecast-2021-2030
- https://www.americasquarterly.org/article/the-next-generation-of-agtech-in-brazil/
- https://www.techsciresearch.com/report/brazil-ai-in-agriculture-market/1885.html
- https://www.imarcgroup.com/brazil-generative-ai-market
- https://www.marketresearchfuture.com/reports/brazil-applied-ai-market-59066
- https://shizune.co/investors/agriculture-agtech-investors-brazil
- https://mundogeo.com/2025/07/22/conheca-em-detalhes-a-nova-regulamentacao-dos-drones-rbac-100-da-anac/
- https://opt.com.br/regras-da-anac-para-drones-o-que-muda-e-como-sua-operacao-aerea-pode-se-beneficiar
- https://t4drones.com/regras-da-anac-para-drones-guia-atualizado-2025/
- https://mundologistica.com.br/noticias/anac-novo-regulamento-drones-logistica
- https://aldrones.com.br/en/2024/01/25/drones-da-dji-recebem-autorizacao-de-projeto-voluntaria-da-anac-para-uso-aeroagricola/
- https://www.dronesense.com.br/regulamentacao-anac-drone
- https://www.mundoconectado.com.br/drones/brasil-facilita-regulamentacao-drones-agricolas/
- https://inforchannel.com.br/2026/04/22/novas-regras-para-operacao-de-drones-buscam-destravar-burocracia-e-desenvolver-setores-estrategicos/

### Pesquisa científica e educacional
- https://iieta.org/journals/ts/paper/10.18280/ts.410242
- https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12746/1274608/Weed-detection-among-soybean-plants-in-artificial-lighting-environment-using/10.1117/12.2686194.full
- https://www.mdpi.com/2072-4292/16/23/4394
- https://www.mdpi.com/2077-0472/15/21/2296
- https://www.mdpi.com/1422-0067/25/1/106
- https://arxiv.org/pdf/2406.00313
- https://arxiv.org/pdf/2503.01284
- https://arxiv.org/pdf/2106.10581
- https://arxiv.org/pdf/2410.17423
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10779234/
- https://link.springer.com/article/10.1007/s10462-024-10809-z
- https://link.springer.com/article/10.1007/s10462-024-11100-x
- https://ijsrcse.isroset.org/index.php/j/article/view/704
- https://arccjournals.com/journal/legume-research-an-international-journal/LRF-801
- https://pleiade.uniamerica.br/index.php/pleiade/article/view/1069
- https://www.researchgate.net/publication/366891609_Estimativa_de_produtividade_da_cultura_da_soja_na_safra_202122_Indices_de_vegetacao_e_Machine_Learning
- https://www.researchgate.net/publication/386551318_Aplicacao_de_Machine_Learning_na_Previsao_da_Produtividade_da_Soja
- https://www.researchgate.net/publication/331393264_Deep_Learning-Based_Mobile_Application_for_Plant_Disease_Diagnosis
- https://www.researchgate.net/publication/328562903_Instrumentos_financeiros_para_a_agricultura_sustentavel_O_estudo_de_caso_do_Mato_Grosso
- https://repositorio.unesp.br/bitstream/handle/11449/191987/santos_vb_me_jabo_int.pdf
- https://bdtd.ibict.br/vufind/Record/USP_bb42551540d96d4a1bf312b3a9c2b92f
- https://periodicos.cerradopub.com.br/bjs/article/download/247/135/1348
- https://lume.ufrgs.br/handle/10183/40495
- https://refaf.com.br/index.php/refaf/article/download/463/pdf/1242
- https://revista.ufrr.br/agroambiente/article/view/8772/4344
- https://agencia.fapesp.br/metodo-alia-inteligencia-artificial-a-imagens-de-satelite-para-mapear-areas-com-integracao-lavoura-pecuaria/51150
- https://pesquisaparainovacao.fapesp.br/inteligencia_artificial_aplicada_em_imagens_obtidas_por_drones_ajuda_a_melhorar_a_produtividade_agricola/2945

### Marketplace e e-commerce de tecnologia
- https://www.orbia.ag/produto/50251/RA0001/estacao-meterologica-cultivo-inteligente-agrosmart
- https://www.orbia.ag/produto/65598/RA0657/0/agrosmart-view-imagens-de-satelite-ndvi-e-rgb-
- https://www.orbia.ag/produto/33324/BY4029/0/aegro-software-de-gestao-agricola-para-fazendas-e-consultorias
- https://www.orbia.ag/novidades/4-plataformas-essenciais-de-gestao-para-a-sua-lavoura
- https://www.orbia.ag/loja/ClimateFieldView
- https://www.dronedireto.com.br/dji-agras-t40-com-4-baterias-pronto-para-uso
- https://www.prosperadistribuicao.com.br/drone-dji-agras-t50-kit-pulverizacao-3-baterias-agricultura/
- https://djagro.com.br/us/products/drone-pulverizador-dji-agras-t20-agricola-20-litros/
- https://droneagricola.net/quanto-custa-pulverizacao-com-drone-entenda-os-precos/
- https://pickdrones.com/pt/custo-pulverizacao-drone-por-hectare/
- https://eavision.com.br/en/
- https://conectaagrobrasil.com.br/tecnologia/drones-agricolas-de-baixo-custo-vale-a-pena-investir/
- https://www.agrofy.com.br/pulverizadores-autopropelidos/jacto/uniport-3030
- https://www.mfrural.com.br/busca/pulverizador-jacto-2500-litros-4x2/categoria/6-instalacoes/estado/mato-grosso
- https://www.mfrural.com.br/produtos/3-1045/maquinas-equipamentos-agricolas-agricultura-de-precisao
- https://e-agro.com.br/parceiros/solinftec
- https://e-agro.com.br/loja/agricultura-digital/pulverizacao/f/solinftec
- https://www.capterra.com/p/216112/Aegro/
- https://www.capterra.com/p/133659/Cropio/
- https://itarc.org/drones-agricolas-para-pulverizacao-entenda-esta-revolucao/

### Outros
- https://farmonaut.com/south-america/custo-de-producao-milho-e-algodao-mato-grosso-2025-dados-essenciais
- https://geosemfronteiras.org/blog/analise-de-satelite-para-agricultura/
- https://geoinova.com.br/sentinel-hub-revolucionando-a-analise-de-imagens-de-satelite/
- https://dataspace.copernicus.eu/analyse/apis/sentinel-hub
- https://www.sentinel-hub.com/explore/copernicus-data-space-ecosystem/
- https://www.sentinel-hub.com/
- https://www.copernicus.eu/en/copernicus-satellite-data-access
- https://atlas.co/data-sources/copernicus-open-access-hub/
- https://www.audsat.com.br/blog/satelite-planet-e-a-audsat/
- https://www.cienciaedados.com/aplicacoes-e-tecnicas-de-machine-learning-na-agricultura/
- https://www.tmg.agr.br/inteligencia-artificial-acelera-desenvolvimento-de-novas-cultivares/
- https://elevagro.com/inteligencia-artificial-no-campo-e-agricultura-preditiva
- https://elevaweb.com.br/ferramenta-de-inteligencia-artificial-para-o-agronegocio-plano-agro/
- https://sscrop.com/mudancas-climaticas-e-agricultura
- https://www.tempo.com/noticias/plantas/agricultura-de-precisao-a-revolucao-que-transforma-cada-semente-em-dado-e-cada-dado-em-colheita.html
- https://www.serasaexperian.com.br/conteudos/projecoes-safra-24-25-e-desafios-no-agronegocio-em-2025/
- https://www.grupoconceito.com/blog/post/ano-safra-2025-2026-tendencias-desafios-climaticos-e-estrategias-para-o-produtor-rural
- https://iagricultura.com.br/estrategia-para-safra-2025-26/
- https://digital.agrishow.com.br/artigos/pulverizacao-seletiva-baseada-em-inteligencia-artificial-conheca-suas-aplicacoes/
- https://maissoja.com.br/amostragem-de-solo-georreferenciada-e-aplicacao-de-insumos-a-taxa-variavel/
- https://agriconline.com.br/portal/artigos/aplicacoes-da-agricultura-de-precisao-em-sistemas-de-producao-de-graos-no-brasil/
- https://chb.com.br/agro/blog/mapas-de-fertilidade-na-agricultura-de-precisao
- https://www.stara.com.br/noticias/dicas-e-conteudos/agricultura-de-precisao-guia-completo
- https://www.ejagrologica.org/post/intelig%C3%AAncia-artificial-na-agricultura-como-o-brasil-est%C3%A1-se-posicionando-na-revolu%C3%A7%C3%A3o-tecnol%C3%B3gica
- https://devruk.com/armadilhas-inteligentes/
- https://macfor.com.br/pulverizacao-seletiva-ia-agro/
- https://compraco.com.br/blogs/atualidades-e-noticias/monitoramento-de-cultivos-com-ia-pela-solinftec-otimizando-a-produtividade-agricola
- https://fastcompanybrasil.com/tech/foodtech/ia-identifica-plantas-doentes-simulando-processo-cerebral/
- https://chapadensenews.com.br/noticias/destaques/inteligencia-artificial-entra-em-campo-contra-a-ferrugem-asiatica-da-soja-desafio-e-sair-do-meio-academico-e-ganhar-escala/
- https://noticiamarajo.com.br/agronegocio/tecnologia-com-inteligencia-artificial-ajuda-produtores-a-combater-ferrugem-asiatica-da-soja/
- https://diariodoacre.com.br/inteligencia-artificial-ajuda-produtores-a-prever-ferrugem-asiatica-da-soja-e-reduzir-perdas-no-campo/
- https://globalcropprotection.com/noticias/novas-tecnologias/embrapa-em-parceria-com-empresas-desenvolve-aplicativo-para-auxiliar-no-manejo-da-soja/
- https://terramagna.com.br/blog/maior-produtor-de-soja-do-brasil/
- https://lemoliveira.com/maiores-produtores-de-soja-brasil/
- https://en.wikipedia.org/wiki/Solinftec
- https://www.linkedin.com/company/jacto
- https://au.linkedin.com/company/solinftec
- https://www.linkedin.com/company/fundacaomt
- https://br.linkedin.com/company/sensixag
- https://br.linkedin.com/company/strideragro
- https://pt.linkedin.com/posts/embrapa-soja_intelig%C3%AAncia-artificial-identifica-plantas-activity-7029773803165560834-DD8U
- https://pt.linkedin.com/pulse/agricultura-de-precis%C3%A3o-esta%C3%A7%C3%A3o-meteorol%C3%B3gica-p1-matos-de-carvalho
- https://noticiasagricolas.com.br/noticias/agronegocio/398368-tecnologia-utilizada-pela-terra-magna-na-concessao-de-credito-sera-disponibilizada-para-o-agro-projetando-r-18-bi-em-gestao-de-riscos-em-2025.html
- https://www.dxid.com.br/alice-solinftec
- https://baita.ac/baita/inteligencia-artificial-o-novo-programa-da-baita-em-parceria-com-instituto-eldorado-e-embrapa-informatica/
- https://blogdaengenharia.com/engenharia/agricultura-de-precisao-estacao-meteorologica-p1/
- https://eqseed.com/investir/horus
- https://eqseed.com/investir/horus2
- https://captable.com.br/projects/112
- https://www.baguete.com.br/noticias/15/01/2021/sensix-levanta-r-1-milhao
- https://acsurs.com.br/noticia/agricultura-plataforma-climate-fieldview-e-oficialmente-lancada-no-brasil/
- https://visaodemercado.com.br/sem-categoria/o-plano-da-bayer-para-digitalizar-o-pequeno-agricultor/
- https://sucessonocampo.com.br/syngenta-digital-lanca-cropwise-planting-no-brasil-ferramenta-que-aprimora-a-gestao-de-dados-e-ajuda-a-ampliar-a-rentabilidade-das-lavouras/
- https://www.flfrevista.pt/syngenta-integra-inteligencia-artificial-generativa-na-plataforma-cropwise/
- https://agriculturaemar.com/grupo-syngenta-integra-inteligencia-artificial-generativa-na-plataforma-de-agricultura-digital-cropwise/
- https://www.syngenta.pt/grupo-syngenta-integra-inteligencia-artificial-generativa-genai-na-sua-plataforma-de-agricultura
- https://www.climatefieldview.pt/
- https://climate.com/en-us.html
- https://climate.com/en-us/pricing.html
- https://climate-br-s3.stagemy.site/preco/
- https://www.ragricola.com.br/basf-lanca-o-xarvio-agro-experts-programa-que-visa-democratizar-o-uso-da-agricultura-digital-no-brasil/
- https://inplan.net.br/sensorsat-amplia-o-monitoramento-das-culturas-do-agro-brasileiro-agora-incluindo-o-algodao/
- https://radiotucunare.com.br/aprosoja-mt-promove-integracao-entre-produtores-e-tecnologia-com-inovacao-e-futuro-do-agro-em-porto-dos-gauchos/
- https://www.biodieselbr.com/noticias/materia-prima/soja1/como-as-cidades-da-soja-mudam-o-interior-do-brasil-070623
- https://agriculture.basf.com/basf/agriculture/br/pt/informacoes-a-imprensa/2024/digitalizacao-da-analise-do-solo-gera-economia-e-maior-produtividade-no-sistema-soja-milho
- https://blog.img.com.br/agronegocios/agricultura-de-precisao-com-gis-roi/
- https://anovaagricultura.com.br/mapeamento-digital-inscricoes/
- https://agroattraction.com.br/software-agricola/
- https://www.istoedinheiro.com.br/syngenta-corrige-plataforma-cropwise-alcanca-100-milhoes-de-hectares-no-mundo
- https://agroagenda.agr.br/event/encontro-tecnico-de-soja-2025/
- https://www.semadesc.ms.gov.br/tecnoagro-2025-tecnologia-e-inovacao-impulsionam-o-agronegocio-em-mato-grosso-do-sul/
- https://www.fundect.ms.gov.br/noticias/
- https://www.agcocorp.com/br/pt/home/brands-and-solutions/precision-planting.html
- https://geoagri.com.br/blog/agricultura-de-precisao/taxa-variavel-de-plantio-de-sementes-de-milho-e-soja
- https://canalrural.com.br/noticias/custos-producao-soja-22-23-parana-mato-grosso-rio-grande-do-sul
- https://agroadvance.com.br/blog-custo-de-producao-da-soja-por-hectare-2023/
- https://agroadvance.com.br/blog-custo-de-producao-de-soja-por-hectare-em-2024/
- https://agroadvance.com.br/blog-custo-de-producao-da-soja-2025-2026/
- https://www.iea.agricultura.sp.gov.br/out/LerTexto.php?codTexto=321
- https://iea.agricultura.sp.gov.br/out/verTexto.php?codTexto=321
- https://paginarural.com.br/artigo/2104/custo-da-soja-no-sistema-plantio-direto
- http://www.gruposolus.com/agricultura-de-precisao-no-mato-grosso
- https://agrosaber.com.br/perfil-digital-86-dos-agricultores-de-mato-grosso-possuem-internet/
- https://scadiagro.com.br/agricultura-de-precisao-brasil/
- https://www.autodata.com.br/noticias/2026/03/24/john-deere-reune-mais-de-20-lancamentos-com-foco-em-eficiencia-e-reducao-de-despesas/101223/
- https://redeagrojor.com.br/noticias/casa-john-deere-2026-reforca-inovacao-tecnologica/
- https://revistaconstrua.com.br/equipamentos/john-deere-amplia-portfolio-no-brasil-com-foco-em-automacao-e-eficiencia-para-agro-e-construcao/
- https://portal.agrosummit.com.br/revolucao-no-campo-como-a-agricultura-de-precisao-esta-transformando-a-producao-brasileira
- https://portal.agrosummit.com.br/solinftec
- https://programaleiloes.com/noticia/1006-ia-drones-e-big-data-veja-tecnologias-que-serao-destaque-na-agricultura-em-2024
- https://neofeed.com.br/startups/a-agtech-brasileira-que-esta-ganhando-o-mundo-com-o-apoio-da-familia-trajano/

---

> **Nota metodológica**: relatório baseado em ~25 buscas distintas via WebSearch entre fontes em PT-BR e EN. Quando dado quantitativo específico não foi localizado, está marcado como "não encontrado nas fontes pesquisadas" ao longo do texto — em hipótese alguma foi inventado dado.
