# AI APLICADA EM COMERCIALIZAÇÃO, FINANÇAS E GESTÃO DE FAZENDAS NO BRASIL

**Documento de pesquisa de mercado**
**Data:** maio/2026
**Objetivo:** apoiar reunião comercial em Sorriso/MT com associação de produtores (1.000 a 30.000+ ha)
**Foco:** AI aplicada a comercialização de grãos, crédito rural, seguro, gestão financeira e tomada de decisão

---

## Sumário Executivo

O mercado brasileiro de AI no agronegócio atingiu maturidade comercial em 2024-2026. O Radar Agtech Brasil 2025 contabilizou **2.075 agtechs no país, com 83% usando IA e 35% com IA como core do produto** (Embrapa/SP Ventures/Homo Ludens). Em Mato Grosso especificamente são 14 agtechs catalogadas — número pequeno frente ao peso econômico do estado, sinalizando oportunidade. Em comercialização, a **Grão Direto** (com IA "AIrton" rodando GPT-4/Llama/DeepSeek via Databricks) realizou em 2025 a primeira venda de grãos 100% conduzida por IA no mundo, tem como sócias ADM/Cargill/Amaggi/LDC, e lançou índice próprio de soja FOB Santos para reduzir dependência de CBOT. No crédito rural, o cenário é de stress (1.990 recuperações judiciais no agro em 2025, Mato Grosso liderando com 332 pedidos) e fintechs como **TerraMagna (US$ 40M SoftBank), Traive (US$ 20M Banco do Brasil), Agrolend (R$ 145M Lightrock + autorização BCB como financeira), Nagro (R$ 50M Rabobank/Itaú)** ocupam o vácuo via análise de risco com satélite + ML. ERPs (Aegro, TOTVS Multicultivo, Aliare/Siagri) começam a embutir IA generativa para leitura de romaneios e Q&A em linguagem natural. **A grande lacuna**: existem ferramentas pontuais, mas pouquíssima oferta de consultoria neutra de implementação — quase tudo é vendor-led (Bayer/Climate, Syngenta/Cropwise, John Deere/Operations Center) ou vendor-financeiro (trading/fintech). Esse é o espaço onde uma consultoria + implementação independente tem encaixe defensável, especialmente para grandes produtores que já operam frotas mistas e múltiplos sistemas.

---

## 1. Previsão de Preços e Trading

### 1.1 Como Sorriso/MT comercializa hoje

Sorriso é o **maior produtor mundial de soja**: 615 mil hectares cultivados, 2,08 milhões de toneladas colhidas, R$ 7,2 bilhões em VBP agrícola em 2024 (lidera ranking nacional, IBGE). [Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2025-09/sorriso-no-mt-tem-maior-pib-agricola-do-pais-veja-o-ranking) | [Gazeta do Povo](https://www.gazetadopovo.com.br/brasil/municipio-sorriso-mato-grosso-maior-produtor-soja-mundial/)

China é o maior cliente (US$ 150M em maio/2023 só de soja Sorriso → exportador). A comercialização hoje passa por:

- **Tradings ABCD + Amaggi**: ADM, Bunge, Cargill, Louis Dreyfus + Amaggi (que detém 252,3 mil hectares em MT — Itiquira, Sapezal, Campo Novo do Parecis, Querência, São Félix do Araguaia) controlam ~90% do volume global de soja. [CompreRural](https://www.comprerural.com/conheca-os-4-gigantes-que-controlam-o-mercado-mundial-da-soja/)
- **Cooperativas locais e regionais**: Sicredi MT (R$ 37,7 bi em carteira de crédito em 2025, 193 agências em 130 municípios), Sicoob, Cresol. [Portal Cooperativismo](https://cooperativismodecredito.coop.br/2026/05/em-mato-grosso-sicredi-amplia-acesso-ao-credito-e-fortalece-pequenos-negocios/)
- **Bolsa**: B3 (contrato Soja FOB Santos — Platts) e CME/CBOT (referência global em USD).
- **Contratos a termo + barter**: 30-50% do volume vai por barter (troca de grãos por insumos) — BASF estima atingir 50% das operações via barter em 2024/25, Syngenta disponibilizou US$ 1 bilhão para barter na safra 2024/25. [Syngenta](https://www.syngenta.com.br/syngenta-disponibiliza-us-1-bilhao-para-operacoes-de-barter-na-safra-202425) | [AgFeed](https://agfeed.com.br/negocios/barter-aquece-vendas-e-ja-responde-por-metade-dos-negocios-em-alta-da-basf/)

**Basis MT vs Paraná:** diferença média de R$ 8-15/sc, com PR pagando mais por proximidade do porto e indústria local. Frete de MT ao porto chega a R$ 150-200/ton. [eBarn](https://lp.ebarn.com.br/preco-da-soja-por-estado-no-brasil)

### 1.2 Ferramentas de AI para previsão de preços

#### Grão Direto + AIrton (destaque do mercado)
A **maior plataforma digital de comercialização de grãos da América Latina**. Sócios incluem ADM, Cargill, Amaggi e LDC (rodada de R$ 40M). [AgTech Garage](https://www.agtechgarage.news/em-rodada-de-r-40-milhoes-grao-direto-traz-amaggi-adm-cargill-e-ldc-como-socias/)

- **AIrton** ("AI" + "Ayrton"): IA generativa lançada em 2024-2025, opera via WhatsApp em texto e áudio. Roda Llama, DeepSeek e GPT-4 com pipeline Databricks. Funções: alertas de preço-alvo, análise de mercado em tempo real, leitura de documentos, fechamento de contratos.
- **Marco**: primeira venda de grãos 100% conduzida por IA no mundo — 4.000 sacas de soja em Ariquemes/RO. [PwC](https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/materias/2025/Grao-Direto-realiza-primeira-negociacao-100-conduzida-por-IA.html)
- **Precisão declarada do AIrton: 90,4%** em estimativas de mercado. [AgFeed via Radar Agtech](https://agfeed.com.br/agtech/grao-direto-leva-ia-ao-whatsapp-para-acelerar-comercializacao-de-graos-com-grandes-tradings/)
- **Índice Soja FOB Santos** (lançamento 2025): tentativa de criar referência brasileira independente do CBOT.
- **Modelo de negócios**: marketplace (take rate sobre operações) + pacotes de inteligência para tradings/cooperativas. Preço para produtor não publicado.
- **Presença em MT**: forte, é mercado-alvo natural pela densidade de soja.

#### Hedgepoint Global Markets (ex-INTL FCStone parte de brokerage)
Inteligência de mercado + estruturação de hedge para produtores, tradings e indústrias. Publica projeções recorrentes da safra brasileira (estimativa 179,5 Mt para 2025/26). [Hedgepoint](https://hedgepointglobal.com/pt-br/blog/panorama-de-soja-e-oleaginosas-para-2025) | [Radar Digital Brasília](https://radardigitalbrasilia.com.br/agronegocio/hedgepoint-projeta-safra-recorde-de-soja-no-brasil-em-2025-26-e-aumento-de-exportacoes/)
- **Modelo**: assinatura anual para empresas e PF (preço não publicado, sob consulta).
- **AI**: usa dados massivos e modelos estatísticos; AI generativa não é o pitch central.

#### StoneX
Multinacional 1924, opera trading + hedge + inteligência de mercado. Pacotes "Mercados Agrícolas StoneX" começam em R$ 612/mês (curso fertilizantes), reports premium sob assinatura, com 10 dias grátis. [StoneX Loja](https://loja.stonex.com/) | [Mercados Agrícolas](https://mercadosagricolas.com.br/)
- **AI/ML**: análises são quantitativas mas não branded como "AI"; produto é principalmente humano-analítico.

#### CME Group
Bolsa-mãe do CBOT. Publica **relatórios diários de milho e soja gerados por IA** identificando volatilidade e tendências. [CME Group](https://www.cmegroup.com/pt/products/agricultural-commodities/soybeans.html)
- Contrato Soja Sul-Americana referencia preço de Santos em USD.

#### Datagro
Consultoria independente, 35+ anos, cobre açúcar, etanol, energia, milho, soja, carnes. Modelo de assinatura para corporações. [Datagro](https://www.datagro.com/)
- **AI**: presença ainda discreta no posicionamento público.

#### Agroconsult
Inteligência de safra, banco de dados online + atendimento direto. Cobre soja, algodão, arroz, trigo, café, cana, milho, fertilizantes. [Agroconsult](https://agroconsult.com.br/)

#### AgRural (Curitiba, fundada 1996)
Assessoria de comercialização de soja, milho, café e algodão. Metodologia "AgRural Indicators" desenvolvida com analistas dos EUA — indica os melhores momentos de venda em janelas de curto/médio/longo prazo. [AgRural Produtor](https://agrural.com.br/produtor/) | [Orbia](https://www.orbia.ag/produto/89691/RA1667/0/assessoria-em-comercializacao-da-soja-agrural)
- **Modelo**: assinatura (preço não publicado).
- **AI**: produto humano-analítico; sem branding pesado de AI.

#### Pesquisa acadêmica brasileira em ML para preço/produtividade
Modelos publicados rodam **Random Forest, XGBoost e Multilayer Perceptron com 95%+ de acurácia** para predição de produtividade de soja em MT (dados climáticos 2010-2018 de 27 cidades). [Revista Pleiade](https://pleiade.uniamerica.br/index.php/pleiade/article/view/1069) | [USP teses](https://www.teses.usp.br/teses/disponiveis/55/55137/tde-09062020-123106/en.php)
**Lacuna importante**: a literatura cobre produtividade, mas previsão de preço/basis para o produtor brasileiro com ML está pouco coberta como produto comercial.

### 1.3 Algoritmos de hedge para produtor brasileiro

Estudos clássicos (Maracaju/MS) mostram que hedge simultâneo de preço + câmbio reduz drasticamente a variância da receita comparado a hedge isolado de preço. Mas o uso de derivativos por produtores rurais ainda é concentrado em médio/grande porte, com escolaridade alta e capitalizados. [Redalyc Hedge MS](https://www.redalyc.org/pdf/331/33126308030.pdf)

Existem iniciativas como **balcão de hedge em reais nas regiões produtoras** (soja MT/GO ganhando derivativo que reflete preço na origem). [The AgriBiz Hedge](https://www.theagribiz.com/agronegocio/commodities-agricolas/hedge-de-graos-pode-ficar-mais-simples-certeiro-e-100-brasileiro/)

**Lacuna real**: AI específico para sugerir estratégias de hedge personalizadas ao perfil de fluxo de caixa do produtor MT (combinando barter, futuro, opção, termo) — não encontramos produto comercial maduro nesta interseção.

---

## 2. Crédito Rural e Finanças

### 2.1 Contexto MT 2025-2026

- **Plano Safra 2025/26**: R$ 516,2 bilhões (R$ 89 bi para agricultura familiar). Maior valor histórico, mas com **a maior taxa de juros já paga pelo produtor rural** segundo análises setoriais. Taxas: Pronaf custeio 3% (2% se orgânico); Pronamp custeio/comercialização 8%; investimentos 7-12%. [MAPA](https://www.gov.br/agricultura/pt-br/assuntos/noticias/governo-federal-lanca-plano-safra-2025-2026-com-r-516-2-bilhoes-para-impulsionar-o-agro-brasileiro) | [Agência FPA](https://agencia.fpagropecuaria.org.br/2025/07/04/por-dentro-dos-numeros-do-plano-safra-2025-26-a-maior-taxa-de-juros-ja-paga-pelo-produtor-rural/)
- **Inadimplência rural** subiu de 2,7% (jan/2024) para 7,3% (jan/2025) em pessoas físicas — choque que reconfigurou a carteira rural do Banco do Brasil. [The AgriBiz](https://www.theagribiz.com/credito-rural/o-que-mudou-na-carteira-rural-do-banco-do-brasil-apos-o-choque-de-inadimplencia/)
- **Recuperações judiciais no agro**: recorde de 1.990 em 2025 (+56,4% sobre 2024), MT lidera com **332 pedidos**, dívida agregada R$ 15,7 bi. Só na soja, 217 empresas em RJ ao fim do ano. [Conexão MT](https://conexaomt.com/agronegocio/agro-bate-recorde-de-1-990-recuperacoes-judiciais-e-expoe-divida-de-r-157-bi/) | [Arapua News](https://arapuanews.com.br/inadimplencia-avanca-no-agro-e-recuperacoes-judiciais-atingem-pico-historico/)
- **Barter** virou política central de mitigação: 30-50% do volume de safra negociado em troca de insumos para 2024/25.

Esse cenário cria demanda forte por: (a) análise de risco melhor que a bancária tradicional; (b) gestão de caixa mais profissional; (c) renegociação assistida por dados.

### 2.2 Fintechs de crédito rural com AI

#### TerraMagna (São Paulo, fundada 2017)
- **O que faz**: análise de risco agrícola e financiamento via BNPL embarcado para insumos, CPR e financiamento lastreado em safra. Plataforma TM Digital com módulos de concessão a cobrança.
- **AI**: motor proprietário de risk management usando dados satelitais (imagens 4 anos de área cultivada), histórico de produção, análise socioambiental.
- **Funding**: **US$ 40M liderado por SoftBank (primeira aposta agrícola do SoftBank) + Shift Capital** — US$ 10M equity + US$ 30M debt. Total levantado US$ 58,1M. [Bloomberg Línea](https://www.bloomberglinea.com/english/softbank-leads-40m-round-in-terramagna-a-brazilian-fintech-for-farmers/) | [AgFunder](https://agfundernews.com/terramagna-brings-buy-now-pay-later-to-brazils-farmers-after-40m-raise)
- **Modelo**: parceria com fornecedores/cooperativas, financia produtor na ponta. Foco pequeno e médio.
- **MT**: presença direta via parceiros — não publica nº de clientes MT.

#### Traive (São Paulo, fundada 2018)
- **O que faz**: plataforma de credit scoring para agro usando LLMs e redes Bayesianas. Conecta produtores a investidores via análise alternativa.
- **AI**: combina LLMs + GANs para análise de risco; processa dados não-tradicionais de comportamento do produtor. [Metal Dog Labs](https://www.metaldoglabs.ai/blog/llms-traive)
- **Funding**: **US$ 20M Series B (fev/2024) liderado pelo Banco do Brasil** + investidores existentes; rodada pre-Series B adicional de US$ 10M em início de 2025.
- **Cases**: parceria estrutural com BB; volume de carteira não publicado.

#### Agrolend (São Paulo)
- **O que faz**: crédito direto e via parceiros (indústrias, revendas, cooperativas). Foco em produtores que faturam US$ 100k a US$ 1M/ano.
- **Funding**: **R$ 145 milhões em rodada liderada por Lightrock (nov/2024)**. **Em abril/2025 recebeu autorização do BC para virar SCFI (financeira)** — pode emitir LCAs com isenção de IR + garantia FGC. Previamente US$ 21M Series A com Valor Capital, Continental Grain, SP Ventures. [Finsiders](https://finsidersbrasil.com.br/negocios-em-fintechs/no-agro-a-crise-passou-longe-agrolend-levanta-r-145-milhoes/) | [Startups](https://startups.com.br/negocios/fintech/agrolend-recebe-autorizacao-do-bc-e-se-torna-financeira/)
- **Presença**: 15+ estados, expectativa de expansão de grupos de compra em MT.

#### Nagro (Belo Horizonte/MG)
- **O que faz**: "one stop shop" de crédito + negócios para revendas e produtores. Análise de risco via dados.
- **Funding**: **R$ 50M Series B (1ª fase) liderada por Rabo Partnerships (Rabobank) + Itaú Ventures**. Mais de R$ 1 bilhão em crédito cedido cumulativo. **Autorizada como SCD pelo BC desde maio/2024**. [Finsiders Nagro](https://finsidersbrasil.com.br/negocios-em-fintechs/nagro-levanta-r-50-milhoes-para-ampliar-tecnologia-de-credito-no-agro/) | [Revista Capital](https://revistacapitaleconomico.com.br/com-r-1-bi-de-credito-cedido-agfintech-nagro-se-prepara-para-ser-o-banco-digital-do-agronegocio/)
- **Volume**: Nagro + AgRisk processaram **3 milhões+ de análises**, 1 milhão+ de CPFs/CNPJs do agro.
- **AI roadmap declarado**: aprofundar modelos preditivos.

#### Sette (ex-A de Agro + Bart Digital)
- **O que faz**: análise de crédito e registro de garantias agrícolas via imagens de satélite + IA. Identifica culturas, segmenta talhões, avalia compliance socioambiental (desmate, embargos, terra indígena), gera demonstrativo financeiro do produtor.
- **AI**: histórico de 4 anos de áreas cultivadas. [Sette](https://www.sette.ag/)
- **Uso típico**: motor por trás de bancos e fintechs que precisam acelerar concessão.

#### Fincrop (fintech da Bunge)
- **Lançamento 2024-2025**: nasceu com **~US$ 500 milhões disponíveis para financiamento**. Análise socioambiental como pilar. Dois produtos: análise de risco para revendas Bunge + crédito direto para produtores de grãos. [Suno](https://www.suno.com.br/noticias/bunge-fincrop-credito-agronegocio-fintech/) | [Bunge](https://www.bunge.com.br/Press-Releases/Fincrop)

### 2.3 Crédito tradicional (BNDES, BB, cooperativas)

- **BNDES Crédito Rural**: 80+ agentes financeiros parceiros, linhas Prodecoop, Liquidação de Dívida (para afetados por clima), etc. [BNDES Agro](https://agro.bndes.gov.br/)
- **Banco do Brasil**: maior Plano Safra da história em 2024 (R$ 260 bi). Em 2026 projeta R$ 2 bi em propostas só no Show Rural Coopavel. Operação **BB CPR Barter** via plataforma Broto facilita troca digital insumos×grãos.
- **Sicredi MT**: R$ 37,7 bi de carteira de crédito em 2025, R$ 56 bi de ativos totais (+12% YoY).
- **Sicoob**: carteira do sistema +17% em 2025, acima dos +10,2% do SFN.

### 2.4 Seguro agrícola com AI

- **PIN Seguradora** (ex-InnTech): **primeira insurtech homologada pela SUSEP para seguro agrícola no Brasil**. Tecnologia desenvolvida por Douglas Moreira (PhD UQAM em redes neurais + IA) calcula produtividade esperada por talhão com imagens de satélite + dados climáticos + tipo de solo. Sócio Sérgio Soares é engenheiro agrônomo com mestrado em Sensoriamento Remoto pelo INPE. Funding atualmente de sócios; busca investidores estratégicos. [InsurTalks](https://www.insurtalks.com.br/posts/pin-e-a-primeira-insurtech-a-ser-homologada-pela-susep-para-atuar-no-mercado-de-seguro-agricola-no-brasil)
- **Pesquisa SciELO**: ML + imagens ópticas e radar (Sentinel-2) reduz assimetria de informação para previsão de sinistro agrícola no Brasil. Aplicado a danos por geada em milho 2ª safra PR. [SciELO](https://www.scielo.br/j/rbe/a/h7pP9JF6mZLctRHnXhmVyXM/)
- **Newe Seguros**: seguradora tradicional do agro, AI não é pitch central.

### 2.5 Gestão de fluxo de caixa de fazendas com AI

- **FarmPlus** (25 anos no mercado, 2.000+ clientes): **primeiro assistente de IA integrado a software de gestão agrícola no Brasil** — consulta contas, finanças, estoque via linguagem natural ("qual meu desembolso cabeça/mês hoje?"). Compliance LCDPR, NF-e produtor, Reforma Tributária 2026. Plano Lite gratuito para agricultura familiar/estudantes; SaaS pago para profissional (preço não publicado abertamente, 7 dias grátis). [FarmPlus](https://www.farmplus.com.br/software-para-fazendas)
- **Aegro Premium** (ver seção 3): integra finanças, agricultura de precisão, telemetria e insumos.

---

## 3. ERPs e Gestão de Fazendas

### 3.1 ERPs com AI integrada

#### Aegro (Porto Alegre)
- **O que faz**: ERP rural líder no Brasil pequenos/médios produtores. Planejamento safra, financeiro, estoque, fiscal, app Aegro Campo para mobile.
- **AI**: **leitura de romaneios por foto** (preenche campos automaticamente). Novo plano premium integra finanças + agricultura de precisão + telemetria de máquinas + insumos + BI personalizado. [Aegro IA 2025](https://aegro.com.br/blog/inteligencia-artificial-na-agricultura-2025/)
- **Modelo**: SaaS, vários tiers, preço sob consulta.

#### TOTVS Agro Multicultivo
- **O que faz**: ERP completo para cadeia agrícola — escolha de área de plantio até pesagem/beneficiamento. Módulos fitossanitário, climatologia, controle de talhões.
- **AI**: declara incluir IA e novas funcionalidades por release. Integração via PIMS Conector. [TOTVS Agro](https://produtos.totvs.com/ficha-tecnica/tudo-sobre-o-totvs-agro-multicultivo/)
- **Foco**: médio/grande produtor e cooperativas.

#### Aliare (Siagri + Datacoper + Solution + MyFarm)
- **O que faz**: maior plataforma tech do agro brasileiro por share — está em 40%+ das distribuidoras de insumos do país e nas grandes cooperativas. Suite com ERP Siagri Simer (100% web), MyFarm (gestão agrícola), Gestão Solution. [Aliare](https://www.aliare.co/)
- **AI**: BI integrado, CRM, receitas agronômicas digitais. AI generativa ainda não é pitch central.

#### Siagri ERP (Aliare)
- Líder em software de gestão para o agronegócio, foco em distribuidoras e cooperativas. [Siagri](https://www.siagri.com.br/)

#### MyFarm (Aliare)
- Software de gestão agrícola, automatiza e centraliza operações de fazenda.

#### SAP Agribusiness
- Solução enterprise (grandes grupos), AI rodando no ecossistema SAP HANA Cloud. Pouco difundida em produtores médios.

#### AgriManager
- ERP para fazendas, sementeiras e algodoeiras. Capterra Brasil lista alternativas de mercado.

#### Cogtive (São Paulo)
- **Importante esclarecimento**: Cogtive é MES+MOM industrial (chão de fábrica), com IA "TÆLOR" para otimização. **Aplicação no agro é para agroindústrias** (esmagamento, beneficiamento), não para gestão de fazenda. [Cogtive](https://cogtive.com/)

#### FarmPlus, Perfarm, Granos, AGROV, FarmERP
- Players intermediários, ver Tabela Resumo.

### 3.2 Integração com telemetria de máquinas

#### John Deere Operations Center + JDLink
- Plataforma centralizada da John Deere. JDLink coleta telemetria embarcada em tempo real, envia para Operations Center, dispara alertas, monitora frota e produção. [John Deere BR](https://www.deere.com.br/pt/agricultura-de-precis%C3%A3o/gerenciamento-de-informa%C3%A7%C3%B5es/sistema-de-telemetria-jdlink/)
- **IoTag** (agtech BR) entrou no programa John Deere Startup Collaborator 2026 — leva telemetria com IA às concessionárias no Brasil.

#### CNH AFS Connect (Case IH) / MyPLM Connect (New Holland) / S-Tech (Steyr)
- Plataformas CNH. **DataConnect** integra cloud-to-cloud com John Deere Operations Center e Claas 365FarmNet — frota mista pode ser gerida em um painel só. [Future Farming](https://www.futurefarming.com/smart-farming/tools-data/cnh-industrial-joins-dataconnect-for-exchange-of-machinery-data/)
- Salas de controle no Brasil em Sorocaba/SP e concessionárias.

### 3.3 Gestão de RH de fazenda com AI

- **Sankhya ERP Agronegócio**: administra ponto, jornada, benefícios e produtividade adaptado à rotina do campo.
- **Aegro Campo (app mobile)**: equipe registra tarefas e ocorrências.
- **Factorial HR, Senior**: HRMs genéricos sendo aplicados ao agro.

**Lacuna observada**: gestão específica de escala/produtividade de operadores de máquina (tratoristas, pulverizadores) cruzada com telemetria — existe mais como uso isolado do que produto consolidado. Espaço aberto.

### 3.4 Plataformas integradas / "Decision Agriculture"

#### Solinftec (Araçatuba/SP — líder brasileiro)
- **O que faz**: plataforma + robôs Solix + IA Alice. Conecta dados operacionais, logísticos, agronômicos e climáticos. Foco original cana → expandiu para soja, algodão, milho.
- **Alice AI**: primeira IA agrícola integrada ao ChatGPT, baseada em 18+ anos de dados de campo. Toma "decisões automatizadas em tempo real". Reduziu herbicida em 93% em cana e 80% em algodão. [Solinftec](https://www.solinftec.com/pt-br/) | [AgFeed Solinftec](https://agfeed.com.br/agtech/com-familias-de-robos-e-logica-de-iphone-solinftec-quer-acelerar-o-tempo-da-agricultura/)
- **Funding**: US$ 172M total levantado, US$ 60M rodada de growth em 2022 (Rise Ventures, YvY, Opus, Stratus, Arar).
- **Presença em MT**: forte, especialmente em algodão e cana.

#### Climate FieldView (Bayer)
- Coleta dados de plantio, pulverização, colheita, gera recomendações com IA (densidade de sementes, dose de fertilizante por talhão). [Climate FieldView](https://www.agro.bayer.com.br/climate-fieldview)
- Free + pacotes pagos por funcionalidade.

#### Cropwise + Cropwise AI (Syngenta)
- Cropwise integra 7 soluções Syngenta. **Cropwise AI** (lançado no World AgriTech London) com GenAI promete +5% produtividade, recomendações personalizadas. Disponível para grupos selecionados nos EUA e Brasil. Plataforma alcançou 100 milhões de hectares no mundo. [Cultivar](https://revistacultivar.com.br/noticias/syngenta-lanca-cropwise-com-inteligencia-artificial) | [Mais Agro](https://maisagro.syngenta.com.br/inovacoes-e-tendencias/ia-na-agricultura-a-transformacao-com-cropwise/)
- **Cropwise via WhatsApp** (Syngenta Digital): evita perdas até 30% em lavouras.

#### SIMA — Sistema Integrado de Monitoramento Agrícola
- 8 países da América Latina, 4 milhões+ ha monitorados. Contagem de plantas por foto, identificação de doença por foto, alertas de praga. [SIMA](https://sima.ag/pt)

#### CropIn (Índia, expandindo no Brasil)
- Aposta do Google em agricultura digital. 250+ clientes em 100 países, 12 milhões ha digitalizados. [AgFeed CropIn](https://agfeed.com.br/agtech/aposta-do-google-na-agricultura-digital-cropin-se-reforca-para-avancar-no-brasil/)

---

## 4. Consultoria e Tomada de Decisão (LLMs, "agrônomos digitais")

### 4.1 Iniciativas brasileiras

#### AIrton (Grão Direto) — já coberto em §1.2
Foco em comercialização, mas chat WhatsApp serve também de assistente decisional.

#### RAImundo (Embrapa + MAPA + MDA + AZap.AI)
- **Lançamento**: 2024 (52º aniversário Embrapa), versão beta em 2025.
- **Funcionalidade**: assistente virtual gratuito via WhatsApp baseado em dados públicos validados da Embrapa. Cobre manejo, clima, mercado, pragas, solo, produção sustentável.
- **Foco oficial**: pequenos e médios produtores.
- **Investimento**: R$ 100 mil iniciais da AZap, mais R$ 500 mil planejados em 2025.
- **Meta**: 100 mil produtores no 1º ano. [Sucesso no Campo](https://sucessonocampo.com.br/embrapa-mapa-mda-e-azap-ai-lancam-assistente-virtual-para-produtores-rurais/) | [RPA News](https://revistarpanews.com.br/embrapa-lanca-assistente-virtual-com-ia-para-impulsionar-produtividade-de-pequenos-e-medios-agricultores/)
- **Limitação para grandes produtores**: superficial — não substitui consultoria técnica profunda.

#### Alice AI (Solinftec) — já coberto em §3.4
Integração com ChatGPT, foco decisional operacional.

#### ChatGados
- ChatGPT customizado para pecuária — preço de mercado, gestão de pastagem, confinamento. Limitado a pecuária. [ChatGados](https://www.contagados.shop/2025/05/chatgpt-da-agropecuaria-chatgados-para.html)

#### Turing (Psyche Aerospace — São José dos Campos)
- "ChatGPT do agro" — integra IA + drones autônomos + robôs de solo + app central com dados de clima/solo/umidade/pragas. Apresentado como produto integrado. [Gazeta do Povo](https://www.gazetadopovo.com.br/brasil/inteligencia-artificial-drones-startup-brasileira-promete-revolucionar-produtividade-no-campo/) | [Money Times](https://www.moneytimes.com.br/chatgpt-do-agro-startup-brasileira-lanca-ia-para-o-agronegocio-alimentada-por-drones-autonomos-grds/)

#### ÁguIA (Sol By RZK + AWS)
- AI integra dados agrícolas, análise via WhatsApp. Lançada com Amazon Web Services. [PwC Radar 2025](https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/materias/2026/Radar-Agtech-Brasil-Inteligencia-artificial-usada-por-agtechs-no-pais.html)

### 4.2 Big Tech no Brasil

#### Google Gemini for Agriculture
- Multimodal (texto, imagem, voz), modelos preditivos de irrigação. Brasil é mercado de validação. Competição Gemini API lançou projetos como Agro.IA, FARM PRECISE, FarmAI, KAYA. [Google AI Competition](https://ai.google.dev/competition/projects/agroia)
- **Investimento direto Google em agtechs**: CropIn é a aposta principal.

#### Microsoft Azure Data Manager for Agriculture (ex-FarmBeats)
- FarmBeats foi descontinuado e renomeado. Combina IoT + AI + ML + computer vision + blockchain. Usado em testes globais. [Microsoft Learn](https://learn.microsoft.com/pt-br/azure/industry/agriculture/overview-azure-farmbeats)

#### IBM Watson para agronegócio
- Plataforma em desenvolvimento desde meados de 2010. Foco em captura de dados online. Pouca presença comercial visível em MT em 2025.

### 4.3 Decision Support Systems (DSS) acadêmicos

DSS estão maduros como conceito; Agricolus (Itália), modelos brasileiros (USP/UNESP), e SIMA representam aplicações práticas. Ganhos típicos: identificação de padrões de produtividade, alertas antecipados, traceability para mercados exigentes. [Agricolus](https://www.agricolus.com/en/technologies/dss-decision-support-systems/) | [Periódicos NewScience](https://periodicos.newsciencepubl.com/arace/article/view/10310)

### 4.4 Tendências de adoção

**Radar Agtech 2025** (Embrapa + SP Ventures + Homo Ludens): [Sind PD](https://sindpd.org.br/2026/03/25/agtechs-tecnologia-agro-brasileiro/) | [A Crítica](https://acritica.net/agro/radar-agtech-2025-startups-agropecuarias-se-espalham-pelo-brasil/)
- **2.075 agtechs no Brasil** (+5% YoY).
- **83% usam IA; 35% têm IA como core**.
- Distribuição geográfica: SP lidera; MT tem **apenas 14 agtechs** (menos que Goiás com 15, Amazonas com 17) — desproporcional ao peso econômico do estado.
- Segmentos: dentro da porteira 41,1%; depois da porteira 40,5%.
- **Sistemas de Gestão da Propriedade Rural** = 8% do total (2º lugar).
- **Plataformas Integradas de Sistemas, Soluções e Dados** = 7,5% (3º lugar).

**Funding agtech Brasil**: US$ 249M em 2024 (-24% YoY), recuperação em Q1/2025 com US$ 76,8M (+85% YoY mesmo trimestre). Brasil é 3º nas Américas atrás de EUA e Canadá. Categoria "Ag Marketplaces & Fintech" liderou com US$ 84,3M (+29% YoY), puxada por Agrolend (US$ 52,7M) e Traive (US$ 20M). [AgFunder Data Dive](https://agfundernews.com/data-dive-afns-insights-brazils-agrifoodtech-funding-grows-32-in-q1-2025-after-meagre-2024-performance)

---

## Tabela Resumo — Empresas e Soluções

| Empresa / Solução | Categoria | AI / tecnologia | Modelo / preço | Funding / cases | Presença MT |
|---|---|---|---|---|---|
| **Grão Direto / AIrton** | Marketplace + IA venda | LLMs (GPT-4, Llama, DeepSeek) via Databricks, 90,4% precisão | Take rate + pacotes; sócios ADM/Cargill/Amaggi/LDC | R$ 40M+ rodadas; 1ª venda 100% IA do mundo | Forte |
| **Hedgepoint** | Inteligência mercado + hedge | Modelos quant | Assinatura anual (sob consulta) | Spin-off INTL FCStone | Forte |
| **StoneX** | Trading + inteligência | Análises quant | A partir de R$ 612/mês para conteúdos; pacotes premium | Multinacional 1924 | Forte |
| **Datagro** | Consultoria commodities | Bases proprietárias | Assinatura corporativa | 35+ anos | Média |
| **Agroconsult** | Consultoria + DB online | Bases proprietárias | Assinatura | Independente | Média |
| **AgRural** | Assessoria comercialização | "AgRural Indicators" humano-analítico | Assinatura (sob consulta) | Fundada 1996, PR | Média |
| **TerraMagna** | Fintech crédito | ML + satélite + risco socioambiental | BNPL embarcado, CPR | US$ 58M total; SoftBank lead | Via parceiros |
| **Traive** | Credit scoring agro | LLMs + GANs + Bayes | SaaS para credores | US$ 20M Series B (BB) + US$ 10M pré-B 2025 | Via BB |
| **Agrolend** | Fintech crédito direto | Análise alternativa | Crédito direto + LCAs (autorização SCFI BC 04/2025) | R$ 145M Lightrock 11/2024 | 15+ estados |
| **Nagro** | Fintech crédito + dados | ML em risco | Crédito + análise para revendas | R$ 50M Series B (Rabobank/Itaú); R$ 1bi cedido | Sim |
| **Sette (ex-A de Agro)** | Análise risco via satélite | Computer vision + IA, série 4 anos | B2B (white-label para credores) | Atende bancos/fintechs | Cobertura nacional |
| **Fincrop (Bunge)** | Fintech corporativa | Análise socioambiental | US$ 500M disponíveis | Lançamento 2024-2025 | Via Bunge |
| **PIN Seguradora** | Insurtech agrícola | Redes neurais + satélite + atuária | Apólices SUSEP | Primeira homologada SUSEP | Cobertura nacional |
| **Aegro** | ERP rural | IA leitura romaneios + BI | SaaS tiers | Líder pequeno/médio Brasil | Sim |
| **TOTVS Agro Multicultivo** | ERP enterprise | IA por release | Licença + serviços | Forte em médios e grandes | Sim |
| **Aliare (Siagri/MyFarm)** | ERP + plataforma agro | BI + CRM + receitas digitais | Licença | 40% das distribuidoras + grandes coops | Forte |
| **FarmPlus** | ERP + assistente IA | Primeiro assistente IA em ERP agro BR | Lite grátis + SaaS pago | 2.000+ clientes, 25 anos | Sim |
| **Solinftec / Alice AI** | Decision Agriculture + robôs | IA proprietária + ChatGPT + robôs Solix | Assinatura + hardware | US$ 172M total | Forte (cana/algodão) |
| **Climate FieldView (Bayer)** | Agricultura digital | ML por talhão | Free + pacotes | Líder global Bayer | Forte |
| **Cropwise AI (Syngenta)** | Agricultura digital + GenAI | LLM próprio + agronômicos | SaaS, selecionado BR/EUA | 100M ha mundo | Em expansão |
| **SIMA** | Monitoramento + DSS | Computer vision app | SaaS | 4M+ ha LATAM | Sim |
| **John Deere Ops Center + JDLink** | Telemetria + plataforma | IA Ops Center + IoTag (parceira) | Bundled com máquina | Líder global | Forte |
| **CNH AFS Connect** | Telemetria | Cloud cross-brand via DataConnect | Bundled com máquina | Sala controle Sorocaba | Forte |
| **RAImundo (Embrapa)** | Chatbot público | GenAI sobre base Embrapa | Grátis (WhatsApp) | R$ 100k inicial; meta 100k produtores | Cobertura nacional |
| **Turing (Psyche Aerospace)** | "ChatGPT agro" + drones | LLM + drones autônomos + robôs solo | Plataforma | Startup BR (SJC) | Em expansão |
| **ÁguIA (Sol By RZK + AWS)** | IA via WhatsApp | AWS GenAI | SaaS | Parceria AWS | Em expansão |
| **CropIn (Google bet)** | Plataforma global | Gemini integrado | SaaS | 12M ha em 100 países | Entrando |
| **Cogtive** | MES/MOM industrial | IA TÆLOR | Licença industrial | SP — para agroindústria, não fazenda | N/A para fazenda |

---

## Lacunas / Oportunidades Observadas (o que NÃO existe ou está mal coberto)

1. **Consultoria neutra e implementação independente de AI para grande produtor (>10 mil ha)** — quase toda oferta atual é vendor-led (Bayer/Climate, Syngenta/Cropwise, Solinftec, John Deere) ou financeiro-led (trading/fintech). Falta um integrador vendor-neutral que faça (a) diagnóstico, (b) seleção de stack, (c) integração de dados das múltiplas fontes (ERP + telemetria mista + climáticos + financeiros + comercialização), (d) onboarding e treinamento. Espaço claro para a oferta do cliente.

2. **AI para hedge customizado a produtor brasileiro** — Hedgepoint/StoneX entregam inteligência genérica de mercado; AIrton sinaliza preço-alvo. Mas não vimos produto comercial que combine: barter + futuro CBOT + opção + termo + câmbio + perfil de fluxo de caixa específico da fazenda para sugerir mix ótimo de cobertura. Pesquisa acadêmica MS/MT (2009-2018) mostra que hedge simultâneo preço+câmbio reduz drasticamente variância — mas nenhuma fintech materializou isso como produto.

3. **Sorriso / norte de MT são sub-servidos por agtechs** — apenas 14 agtechs catalogadas em MT em 2025 (Radar Agtech), menos que Goiás. Vácuo geográfico vs. peso econômico.

4. **AI para gestão de RH/operadores cruzando telemetria** — telemetria John Deere/CNH mostra rendimento da máquina; ERPs mostram folha. Cruzamento operador↔produtividade↔combustível↔qualidade da operação ainda é manual ou ausente como produto.

5. **AI consultiva de meio de safra (mid-season decision)** — Climate/Cropwise sugerem insumos; Solinftec age na operação. Mas decisão "vendo agora ou espero?" cruzando previsão de produtividade real + preço futuro + custo financeiro + posição de barter é descoberta. Janela enorme para consultoria + AI.

6. **AI para gestão de risco de safra cruzando seguro + crédito + comercialização** — PIN/Newe fazem seguro; TerraMagna/Sette fazem risco de crédito; AgRural/AIrton fazem comercialização. Ninguém faz a visão unificada da exposição total do produtor.

7. **LLM treinado fine-tuned para português + agro brasileiro com dados proprietários do produtor** — RAImundo é base Embrapa pública e pequeno/médio. Cropwise AI e AIrton são fortes mas vendor-led. Espaço para LLM customizado da fazenda do cliente (dados de 5-10 anos da própria operação).

8. **Renegociação de dívidas assistida por dados em cenário de RJ explosivo** — com 332 RJs em MT em 2025, há demanda por ferramenta que estruture dossiê, projete fluxo, simule cenários para credores. Hoje é trabalho manual de advogado + contador.

9. **Adoção fragmentada de ERP em fazendas grandes** — produtores 10k+ ha tipicamente rodam combinação Aegro/MyFarm + planilhas + Operations Center + AgRural/Hedgepoint + sistema do banco. Integração é dor real e Aliare/TOTVS são pesados para customizar.

10. **Conectividade rural** — mais da metade das propriedades brasileiras não tem internet adequada. Limita IA cloud-first; cria oferta para soluções edge/offline-first (relevante em fazendas grandes de MT com áreas remotas).

---

## Fontes Consultadas (URLs)

### Comercialização e preços
- https://www.cmegroup.com/pt/products/agricultural-commodities/soybeans.html
- https://www.cmegroup.com/pt/trading/agricultural/south-american-soybeans.html
- https://www.graodireto.com.br/precos/soja/
- https://cepea.org.br/br/indicador/soja.aspx
- https://hedgepointglobal.com/pt-br/blog/panorama-de-soja-e-oleaginosas-para-2025
- https://hedgepointglobal.com/pt-br/blog/contrato-futuro-no-mercado-de-graos-e-oleaginosas/
- https://hedgepointglobal.com/pt-br/blog/mercado-da-soja-como-funcionam-os-contratos-futuros/
- https://www.stonex.com/pt-br/inteligencia-de-mercado/
- https://mercadosagricolas.com.br/
- https://loja.stonex.com/
- https://www.datagro.com/
- https://agroconsult.com.br/
- https://agrural.com.br/
- https://agrural.com.br/produtor/
- https://agrural.com.br/sobre-a-agrural/
- https://www.orbia.ag/produto/89691/RA1667/0/assessoria-em-comercializacao-da-soja-agrural
- https://lp.ebarn.com.br/preco-da-soja-por-estado-no-brasil
- https://hedgeagro.com.br/premio-soja/
- https://www.theagribiz.com/agronegocio/commodities-agricolas/hedge-de-graos-pode-ficar-mais-simples-certeiro-e-100-brasileiro/
- https://br.tradingview.com/symbols/BMFBOVESPA-SOY1!/
- https://www.redalyc.org/pdf/331/33126308030.pdf

### Grão Direto / AIrton
- https://agfeed.com.br/agtech/grao-direto-leva-ia-ao-whatsapp-para-acelerar-comercializacao-de-graos-com-grandes-tradings/
- https://www.theagribiz.com/agtechs/trade-24h-por-dia-a-aposta-da-grao-direto-para-quase-dobrar-o-volume-em-2026/
- https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/materias/2025/Grao-Direto-realiza-primeira-negociacao-100-conduzida-por-IA.html
- https://corporativo.graodireto.com.br/airton-inteligencia-artificial
- https://www.comprerural.com/ia-conduz-primeira-negociacao-de-graos-do-mundo-no-brasil/
- https://news.microsoft.com/pt-br/grao-direto-utiliza-dados-para-gerar-inteligencia-de-mercado/
- https://www.agtechgarage.news/em-rodada-de-r-40-milhoes-grao-direto-traz-amaggi-adm-cargill-e-ldc-como-socias/

### Tradings e mercado de soja
- https://www.comprerural.com/conheca-os-4-gigantes-que-controlam-o-mercado-mundial-da-soja/
- https://www.gazetadopovo.com.br/brasil/municipio-sorriso-mato-grosso-maior-produtor-soja-mundial/
- https://agenciabrasil.ebc.com.br/economia/noticia/2025-09/sorriso-no-mt-tem-maior-pib-agricola-do-pais-veja-o-ranking
- https://aprosoja.com.br/

### Barter
- https://www.noticiasagricolas.com.br/noticias/soja/393400-pressao-nos-precos-da-soja-reforca-barter-como-estrategia-para-o-produtor.html
- https://agfeed.com.br/negocios/barter-aquece-vendas-e-ja-responde-por-metade-dos-negocios-em-alta-da-basf/
- https://www.syngenta.com.br/syngenta-disponibiliza-us-1-bilhao-para-operacoes-de-barter-na-safra-202425
- https://www.theagribiz.com/credito-rural/menos-default-mais-hedge-barter-ganha-espaco-no-financiamento-da-safra/
- https://aegro.com.br/blog/barter-soja/

### Crédito rural / fintechs
- https://agro.bndes.gov.br/
- https://www.gov.br/agricultura/pt-br/assuntos/noticias/governo-federal-lanca-plano-safra-2025-2026-com-r-516-2-bilhoes-para-impulsionar-o-agro-brasileiro
- https://www.gov.br/agricultura/pt-br/assuntos/noticias/governo-federal-lanca-plano-safra-24-25-com-r-400-59-bilhoes-para-agricultura-empresarial
- https://agencia.fpagropecuaria.org.br/2025/07/04/por-dentro-dos-numeros-do-plano-safra-2025-26-a-maior-taxa-de-juros-ja-paga-pelo-produtor-rural/
- https://www.theagribiz.com/credito-rural/o-que-mudou-na-carteira-rural-do-banco-do-brasil-apos-o-choque-de-inadimplencia/
- https://conexaomt.com/agronegocio/agro-bate-recorde-de-1-990-recuperacoes-judiciais-e-expoe-divida-de-r-157-bi/
- https://arapuanews.com.br/inadimplencia-avanca-no-agro-e-recuperacoes-judiciais-atingem-pico-historico/
- https://www.bloomberglinea.com/english/softbank-leads-40m-round-in-terramagna-a-brazilian-fintech-for-farmers/
- https://agfundernews.com/terramagna-brings-buy-now-pay-later-to-brazils-farmers-after-40m-raise
- https://www.crunchbase.com/organization/terramagna
- https://traive.com.br/en/
- https://www.metaldoglabs.ai/blog/llms-traive
- https://agrolend.agr.br/en/home-english/
- https://finsidersbrasil.com.br/negocios-em-fintechs/no-agro-a-crise-passou-longe-agrolend-levanta-r-145-milhoes/
- https://finsidersbrasil.com.br/noticias-sobre-fintechs/agrolend-recebe-autorizacao-do-bc-e-se-torna-financeira/
- https://agfundernews.com/agrolend-aims-to-connect-more-farmers-in-brazil-with-much-needed-credit-in-latest-21m-raise
- https://nagro.com.br/
- https://finsidersbrasil.com.br/negocios-em-fintechs/nagro-levanta-r-50-milhoes-para-ampliar-tecnologia-de-credito-no-agro/
- https://revistacapitaleconomico.com.br/com-r-1-bi-de-credito-cedido-agfintech-nagro-se-prepara-para-ser-o-banco-digital-do-agronegocio/
- https://finsidersbrasil.com.br/regulamentacao/nagro-recebe-autorizacao-para-operar-como-fintech-de-credito/
- https://www.sette.ag/
- https://www.suno.com.br/noticias/bunge-fincrop-credito-agronegocio-fintech/
- https://www.bunge.com.br/Press-Releases/Fincrop
- https://terramagna.com.br/blog/agfintech/
- https://terramagna.com.br/blog/fintechs/
- https://cooperativismodecredito.coop.br/2026/05/em-mato-grosso-sicredi-amplia-acesso-ao-credito-e-fortalece-pequenos-negocios/
- https://www.sicoob.com.br/web/sicoobcredi-rural/sicoob-credi-rural

### Seguro agrícola
- https://www.scielo.br/j/rbe/a/h7pP9JF6mZLctRHnXhmVyXM/
- https://picsel.com.br/seguro-agricola-5-0-como-a-tecnologia-esta-revolucionando-a-protecao-no-campo/
- https://www.insurtalks.com.br/posts/pin-e-a-primeira-insurtech-a-ser-homologada-pela-susep-para-atuar-no-mercado-de-seguro-agricola-no-brasil
- https://www.tempo.com/noticias/plantas/geada-vista-do-espaco-satelite-e-ia-podem-acelerar-laudos-e-indenizacoes-no-seguro-rural.html
- https://www.fieldtechseg.com/
- https://www.neweseguros.com.br/seguro-agricola/

### ERPs e gestão de fazenda
- https://aegro.com.br/
- https://aegro.com.br/blog/inteligencia-artificial-na-agricultura-2025/
- https://aegro.com.br/blog/inteligencia-artificial/
- https://produtos.totvs.com/ficha-tecnica/tudo-sobre-o-totvs-agro-multicultivo/
- https://www.totvs.com/agro/multicultivo/
- https://www.aliare.co/
- https://www.siagri.com.br/
- https://www.myfarm.com.br/
- https://www.farmplus.com.br/software-para-fazendas
- https://www.farmplus.com.br/aprenda/software-para-produtor-rural
- https://cogtive.com/
- https://www.sap.com/brazil/industries/agribusiness.html
- https://www.sankhya.com.br/segmentos-de-atuacao/erp-para-agronegocio/

### Telemetria e plataformas integradas
- https://www.deere.com.br/pt/agricultura-de-precis%C3%A3o/gerenciamento-de-informa%C3%A7%C3%B5es/sistema-de-telemetria-jdlink/
- https://www.deere.com.br/pt/agricultura-de-precis%C3%A3o/gerenciamento-de-informa%C3%A7%C3%B5es/operations-center/
- https://operationscenter.deere.com/
- https://blog.caseih.com.br/conheca-o-afs-connect-center-e-veja-todas-suas-funcionalidades/
- https://www.futurefarming.com/smart-farming/tools-data/cnh-industrial-joins-dataconnect-for-exchange-of-machinery-data/

### IA, Decision Agriculture, agronomos digitais
- https://www.solinftec.com/pt-br/
- https://www.solinftec.com/pt-br/blog/alice-ai-inteligencia-artificial-que-transforma-o-agro/
- https://agfeed.com.br/agtech/com-familias-de-robos-e-logica-de-iphone-solinftec-quer-acelerar-o-tempo-da-agricultura/
- https://www.crunchbase.com/organization/solinftec
- https://www.agro.bayer.com.br/climate-fieldview
- https://revistacultivar.com.br/noticias/syngenta-lanca-cropwise-com-inteligencia-artificial
- https://maisagro.syngenta.com.br/inovacoes-e-tendencias/ia-na-agricultura-a-transformacao-com-cropwise/
- https://www.syngenta.com.br/syngenta-digital-une-inteligencia-artificial-e-whatsapp-para-revolucionar-gestao-agricola-e-0
- https://sima.ag/pt
- https://blog.sima.ag/pt-br/2025/plantio-soja-2025-26-sima-agro/
- https://www.embrapa.br/en/inteligencia-artificial-na-embrapa
- https://sucessonocampo.com.br/embrapa-mapa-mda-e-azap-ai-lancam-assistente-virtual-para-produtores-rurais/
- https://revistarpanews.com.br/embrapa-lanca-assistente-virtual-com-ia-para-impulsionar-produtividade-de-pequenos-e-medios-agricultores/
- https://www.gazetadopovo.com.br/brasil/inteligencia-artificial-drones-startup-brasileira-promete-revolucionar-produtividade-no-campo/
- https://www.moneytimes.com.br/chatgpt-do-agro-startup-brasileira-lanca-ia-para-o-agronegocio-alimentada-por-drones-autonomos-grds/
- https://www.contagados.shop/2025/05/chatgpt-da-agropecuaria-chatgados-para.html
- https://ai.google.dev/competition/projects/agroia
- https://agfeed.com.br/agtech/aposta-do-google-na-agricultura-digital-cropin-se-reforca-para-avancar-no-brasil/
- https://learn.microsoft.com/pt-br/azure/industry/agriculture/overview-azure-farmbeats
- https://agevolution.canalrural.com.br/microsoft-patenteia-farmbeats-no-brasil/

### Mercado agtech / dados de adoção
- https://www.pwc.com.br/pt/consultoria/agtech-innovation/agtech-innovation-news/materias/2026/Radar-Agtech-Brasil-Inteligencia-artificial-usada-por-agtechs-no-pais.html
- https://radaragtech.com.br/wp-content/uploads/2026/03/Radar-Agtech-2025-Embrapa-SP-Ventures-Homo-Ludens.pdf
- https://www.poder360.com.br/poder-agro/startups-agropecuarias-estao-mais-espalhadas-pelo-brasil-diz-embrapa/
- https://sindpd.org.br/2026/03/25/agtechs-tecnologia-agro-brasileiro/
- https://acritica.net/agro/radar-agtech-2025-startups-agropecuarias-se-espalham-pelo-brasil/
- https://agfundernews.com/data-dive-afns-insights-brazils-agrifoodtech-funding-grows-32-in-q1-2025-after-meagre-2024-performance

### ML e previsão / pesquisa
- https://pleiade.uniamerica.br/index.php/pleiade/article/view/1069
- https://www.teses.usp.br/teses/disponiveis/55/55137/tde-09062020-123106/en.php
- https://repositorio.unesp.br/items/4598ba38-66f0-408a-b90f-9ebd1cd66ee7

### Recomendações secundárias e contexto
- https://www.farmnews.com.br/inovacao/credito-rural/
- https://agroadvance.com.br/blog-como-criar-um-agente-de-ia/
- https://www.canalrural.com.br/agricultura/inteligencia-artificial-entrega-gestao-da-fazenda-por-whatsapp/
- https://www.portaldoagronegocio.com.br/tecnologia/conectividade-e-digital/noticias/tecnologia-e-inteligencia-artificial-impulsionam-a-gestao-do-agronegocio-brasileiro-em-2025
