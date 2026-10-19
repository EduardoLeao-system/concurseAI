import type { Card, Topic, ErrorReason } from '../types';

export const EXAM_DATE = new Date(2026, 11, 6);

export const TOPICS: Topic[] = [
  {
    "id": "seg",
    "name": "Segurança da informação",
    "weight": 3
  },
  {
    "id": "ident",
    "name": "Criptografia, identidade e LGPD",
    "weight": 3
  },
  {
    "id": "gov",
    "name": "Governança e gestão de TIC",
    "weight": 3
  },
  {
    "id": "contr",
    "name": "Contratações e contratos de TIC",
    "weight": 3
  },
  {
    "id": "bd",
    "name": "Banco de dados e SQL",
    "weight": 3
  },
  {
    "id": "redes",
    "name": "Redes",
    "weight": 2
  },
  {
    "id": "infra",
    "name": "Sistemas operacionais e infraestrutura",
    "weight": 2
  },
  {
    "id": "eng",
    "name": "Engenharia de software e APIs",
    "weight": 2
  },
  {
    "id": "devops",
    "name": "DevOps, contêineres e nuvem",
    "weight": 2
  },
  {
    "id": "serv",
    "name": "Serviços, continuidade e monitoramento",
    "weight": 1
  },
  {
    "id": "leg",
    "name": "Edital e legislação municipal",
    "weight": 1
  },
  {
    "id": "port",
    "name": "Língua Portuguesa",
    "weight": 2
  },
  {
    "id": "rlm",
    "name": "Raciocínio Lógico-Matemático",
    "weight": 2
  }
];

export const ERROR_REASONS: ErrorReason[] = [
  {
    "id": "nao",
    "label": "Não sabia o conteúdo"
  },
  {
    "id": "conf",
    "label": "Confundi conceitos parecidos"
  },
  {
    "id": "pressa",
    "label": "Li errado ou com pressa"
  },
  {
    "id": "detalhe",
    "label": "Esqueci um detalhe (número, prazo, sigla)"
  },
  {
    "id": "chute",
    "label": "Chutei"
  }
];

export const SEED_CARDS: Card[] = [
  {
    "id": "dd23tru",
    "topicId": "seg",
    "front": "Quais são os cinco pilares clássicos da segurança da informação?",
    "back": "Confidencialidade (só autorizados acessam), integridade (não é alterado indevidamente), disponibilidade (acessível quando necessário), autenticidade (origem verdadeira) e não repúdio (o autor não nega a autoria)."
  },
  {
    "id": "dgh39x2",
    "topicId": "seg",
    "front": "O que é defesa em profundidade?",
    "back": "Várias camadas de controles independentes, de modo que a falha de uma não comprometa o conjunto."
  },
  {
    "id": "d860702",
    "topicId": "seg",
    "front": "Qual a ideia central do Zero Trust?",
    "back": "Nunca confiar implicitamente: toda requisição é verificada de forma contínua, com privilégio mínimo e premissa de que a violação pode já ter ocorrido."
  },
  {
    "id": "dn4ql2e",
    "topicId": "seg",
    "front": "ISO/IEC 27001: o que é?",
    "back": "Requisitos para um Sistema de Gestão de Segurança da Informação (SGSI). É a norma certificável."
  },
  {
    "id": "d1o4ut0n",
    "topicId": "seg",
    "front": "ISO/IEC 27002: o que é?",
    "back": "Código de práticas com o guia de controles de segurança da informação. Não é certificável."
  },
  {
    "id": "d17sb53d",
    "topicId": "seg",
    "front": "ISO/IEC 27005 e 27035: tema de cada uma?",
    "back": "27005: gestão de riscos de segurança da informação. 27035: gestão de incidentes de segurança da informação."
  },
  {
    "id": "di9tcc9",
    "topicId": "seg",
    "front": "Quais são as funções do NIST Cybersecurity Framework 2.0?",
    "back": "Govern (governar), Identify (identificar), Protect (proteger), Detect (detectar), Respond (responder) e Recover (recuperar). A função Govern foi acrescentada na versão 2.0."
  },
  {
    "id": "dm35b14",
    "topicId": "seg",
    "front": "O que são os CIS Controls?",
    "back": "Conjunto priorizado de boas práticas de defesa cibernética (18 controles na v8), organizado em grupos de implementação IG1, IG2 e IG3."
  },
  {
    "id": "d1i9r8e5",
    "topicId": "seg",
    "front": "Quais são as quatro formas de tratar um risco?",
    "back": "Mitigar (reduzir), transferir (ex.: seguro), evitar (eliminar a atividade) e aceitar."
  },
  {
    "id": "d1hc09y1",
    "topicId": "seg",
    "front": "Diferencie ameaça, vulnerabilidade e risco.",
    "back": "Ameaça: causa potencial de um incidente. Vulnerabilidade: fraqueza que pode ser explorada. Risco: combinação de probabilidade e impacto de uma ameaça explorar uma vulnerabilidade."
  },
  {
    "id": "d18lb8mv",
    "topicId": "seg",
    "front": "IDS x IPS.",
    "back": "IDS detecta e alerta (passivo). IPS detecta e bloqueia (atua em linha)."
  },
  {
    "id": "d1k6cosf",
    "topicId": "seg",
    "front": "O que faz um WAF?",
    "back": "Firewall de aplicação web: filtra tráfego HTTP/HTTPS contra ataques como SQL injection e XSS."
  },
  {
    "id": "d1982q2f",
    "topicId": "seg",
    "front": "O que é um SIEM?",
    "back": "Plataforma que coleta e correlaciona logs e eventos de várias fontes para detecção e resposta a incidentes."
  },
  {
    "id": "d19ld1n8",
    "topicId": "seg",
    "front": "EDR x XDR.",
    "back": "EDR monitora e responde em endpoints. XDR amplia a correlação para rede, e-mail, nuvem e outras camadas."
  },
  {
    "id": "d1o826t0",
    "topicId": "seg",
    "front": "O que é o OWASP Top 10?",
    "back": "Lista dos riscos mais críticos em aplicações web, como controle de acesso quebrado, falhas criptográficas e injeção."
  },
  {
    "id": "d12521bm",
    "topicId": "seg",
    "front": "SAST x DAST.",
    "back": "SAST analisa o código-fonte (estático, caixa branca). DAST testa a aplicação em execução (dinâmico, caixa preta)."
  },
  {
    "id": "d92f5dw",
    "topicId": "ident",
    "front": "Criptografia simétrica x assimétrica.",
    "back": "Simétrica: mesma chave cifra e decifra (rápida, ex.: AES). Assimétrica: par de chaves pública e privada (ex.: RSA)."
  },
  {
    "id": "dzkqp2c",
    "topicId": "ident",
    "front": "Como garantir sigilo com criptografia assimétrica?",
    "back": "Cifrar com a chave pública do destinatário. Só a chave privada dele decifra."
  },
  {
    "id": "d11iskrj",
    "topicId": "ident",
    "front": "Como funciona a assinatura digital?",
    "back": "Gera-se o hash da mensagem e cifra-se com a chave privada do remetente. Garante autenticidade, integridade e não repúdio."
  },
  {
    "id": "d1b8ick2",
    "topicId": "ident",
    "front": "O que é uma função de hash e para que serve?",
    "back": "Função unidirecional que gera um resumo de tamanho fixo. Garante integridade (ex.: SHA-256). MD5 e SHA-1 são considerados inseguros."
  },
  {
    "id": "dw78cze",
    "topicId": "ident",
    "front": "O que é PKI e o que é a ICP-Brasil?",
    "back": "PKI é a infraestrutura de chaves públicas (certificados e autoridades certificadoras). A ICP-Brasil é a PKI brasileira, instituída pela MP 2.200-2/2001, com a AC Raiz mantida pelo ITI."
  },
  {
    "id": "drne9vd",
    "topicId": "ident",
    "front": "O que o TLS oferece?",
    "back": "Confidencialidade, integridade e autenticação do servidor entre cliente e servidor (base do HTTPS). Sucessor do SSL."
  },
  {
    "id": "d7s8a7v",
    "topicId": "ident",
    "front": "O que é MFA?",
    "back": "Autenticação com fatores de categorias diferentes: algo que você sabe, algo que você tem e algo que você é."
  },
  {
    "id": "d17vp7tr",
    "topicId": "ident",
    "front": "O que é RBAC?",
    "back": "Controle de acesso baseado em papéis: as permissões ficam ligadas a funções, e os usuários recebem papéis."
  },
  {
    "id": "d3tqh79",
    "topicId": "ident",
    "front": "SSO e PAM: o que são?",
    "back": "SSO: uma autenticação dá acesso a vários sistemas. PAM: gestão de acessos privilegiados (cofre de senhas, sessões gravadas, acesso temporário)."
  },
  {
    "id": "d1ibq1dx",
    "topicId": "ident",
    "front": "OAuth 2.0 x OpenID Connect.",
    "back": "OAuth 2.0 trata de autorização delegada (access token). OpenID Connect é a camada de autenticação sobre o OAuth 2.0 (ID Token)."
  },
  {
    "id": "d12xalxc",
    "topicId": "ident",
    "front": "O que é LDAP e qual a porta padrão?",
    "back": "Protocolo de acesso a serviços de diretório (ex.: Active Directory). Porta 389; LDAPS usa 636."
  },
  {
    "id": "d1r1jym5",
    "topicId": "ident",
    "front": "LGPD (Lei 13.709/2018): quais os princípios do art. 6º?",
    "back": "Finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização e prestação de contas."
  },
  {
    "id": "d1xgs4kc",
    "topicId": "ident",
    "front": "LGPD: anonimização x pseudonimização.",
    "back": "Anonimização: o dado deixa de identificar o titular e deixa de ser dado pessoal. Pseudonimização: só se identifica com informação adicional mantida separada."
  },
  {
    "id": "d1lwftj7",
    "topicId": "ident",
    "front": "LGPD: controlador, operador e encarregado.",
    "back": "Controlador decide sobre o tratamento. Operador trata em nome do controlador. Encarregado (DPO) é o canal com titulares e com a ANPD."
  },
  {
    "id": "d3n3ccp",
    "topicId": "ident",
    "front": "LGPD: o Poder Público pode tratar dados pessoais?",
    "back": "Sim, para atender sua finalidade pública e executar políticas públicas (art. 23), informando as hipóteses de tratamento e indicando o encarregado."
  },
  {
    "id": "djgiu8b",
    "topicId": "gov",
    "front": "COBIT 2019: quais são os domínios?",
    "back": "Governança: EDM (Evaluate, Direct and Monitor). Gestão: APO (Align, Plan and Organize), BAI (Build, Acquire and Implement), DSS (Deliver, Service and Support) e MEA (Monitor, Evaluate and Assess)."
  },
  {
    "id": "dzp0a5x",
    "topicId": "gov",
    "front": "COBIT 2019: quantos objetivos de governança e gestão existem?",
    "back": "40, distribuídos nos 5 domínios (EDM, APO, BAI, DSS, MEA)."
  },
  {
    "id": "ddz5qiw",
    "topicId": "gov",
    "front": "COBIT 2019: princípios do sistema de governança.",
    "back": "Valor para as partes interessadas, abordagem holística, sistema dinâmico, governança distinta de gestão, adaptado às necessidades da empresa e sistema de ponta a ponta."
  },
  {
    "id": "dv43asp",
    "topicId": "gov",
    "front": "ITIL 4: componentes do Sistema de Valor de Serviço (SVS).",
    "back": "Princípios orientadores, governança, cadeia de valor de serviço, práticas e melhoria contínua."
  },
  {
    "id": "d1l95a02",
    "topicId": "gov",
    "front": "ITIL 4: atividades da cadeia de valor de serviço.",
    "back": "Planejar, melhorar, engajar, projetar e fazer a transição, obter/construir e entregar e suportar."
  },
  {
    "id": "d1sa9nr3",
    "topicId": "gov",
    "front": "ITIL 4: as quatro dimensões do gerenciamento de serviços.",
    "back": "Organizações e pessoas; informação e tecnologia; parceiros e fornecedores; fluxos de valor e processos."
  },
  {
    "id": "dvemkzp",
    "topicId": "gov",
    "front": "Incidente x problema x mudança.",
    "back": "Incidente: interrupção ou queda de qualidade (restaurar rápido). Problema: causa raiz de um ou mais incidentes. Mudança: adição, modificação ou remoção que pode afetar serviços."
  },
  {
    "id": "dx3l31t",
    "topicId": "gov",
    "front": "PMBOK 7: os oito domínios de desempenho.",
    "back": "Partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, medição e incerteza."
  },
  {
    "id": "d1jm3xw4",
    "topicId": "gov",
    "front": "PETIC x PDTIC.",
    "back": "PETIC: planejamento estratégico de TIC (visão de longo prazo). PDTIC: plano diretor, que operacionaliza o PETIC com necessidades, metas, ações e recursos."
  },
  {
    "id": "dpupc6w",
    "topicId": "gov",
    "front": "CAPEX x OPEX.",
    "back": "CAPEX: investimento em ativos (ex.: compra de servidores). OPEX: custo operacional recorrente (assinaturas, nuvem, manutenção)."
  },
  {
    "id": "d1aithdn",
    "topicId": "gov",
    "front": "TCO x ROI.",
    "back": "TCO: custo total de propriedade ao longo do ciclo de vida. ROI: retorno sobre o investimento = (ganho − custo) ÷ custo."
  },
  {
    "id": "d103d4uu",
    "topicId": "gov",
    "front": "O que é FinOps?",
    "back": "Prática de gestão financeira da nuvem: visibilidade, alocação e otimização de custos, com colaboração entre TI, finanças e negócio."
  },
  {
    "id": "d1eoxe3l",
    "topicId": "contr",
    "front": "Lei 14.133/2021: quais são as modalidades de licitação?",
    "back": "Pregão, concorrência, concurso, leilão e diálogo competitivo (art. 28). Convite e tomada de preços deixaram de existir."
  },
  {
    "id": "d1q0b7x9",
    "topicId": "contr",
    "front": "Dispensa x inexigibilidade.",
    "back": "Dispensa (art. 75): a competição seria possível, mas a lei permite contratar direto (ex.: valor baixo). Inexigibilidade (art. 74): competição inviável (ex.: fornecedor exclusivo)."
  },
  {
    "id": "dpbbwvt",
    "topicId": "contr",
    "front": "Lei 14.133: fases do processo licitatório (art. 17).",
    "back": "Preparatória, divulgação do edital, apresentação de propostas e lances, julgamento, habilitação, recursal e homologação."
  },
  {
    "id": "d198bbch",
    "topicId": "contr",
    "front": "Lei 14.133: cite princípios do art. 5º.",
    "back": "Legalidade, impessoalidade, moralidade, publicidade, eficiência, planejamento, transparência, segregação de funções, vinculação ao edital, julgamento objetivo, economicidade, entre outros."
  },
  {
    "id": "d1cty9b4",
    "topicId": "contr",
    "front": "O que é o Estudo Técnico Preliminar (ETP)?",
    "back": "Documento da fase preparatória que caracteriza a necessidade, analisa alternativas de solução e fundamenta a escolha (art. 18, §1º)."
  },
  {
    "id": "d9u8tkv",
    "topicId": "contr",
    "front": "O que é o Termo de Referência?",
    "back": "Documento com o objeto, requisitos, critérios de medição e pagamento, prazos e obrigações. Base da licitação de bens e serviços (art. 6º, XXIII)."
  },
  {
    "id": "ddyomvn",
    "topicId": "contr",
    "front": "Quais etapas compõem a fase preparatória de uma contratação de TIC?",
    "back": "Formalização da demanda, ETP, análise de riscos, termo de referência (ou projeto básico) e pesquisa de preços."
  },
  {
    "id": "d1v8nr9q",
    "topicId": "contr",
    "front": "Gestor x fiscal do contrato.",
    "back": "Gestor: coordena e acompanha o contrato em visão ampla (prazos, aditivos, pagamentos). Fiscal: acompanha a execução no dia a dia e verifica entregas e níveis de serviço."
  },
  {
    "id": "d1ltmllz",
    "topicId": "contr",
    "front": "SLA x OLA.",
    "back": "SLA: acordo de nível de serviço com o cliente ou fornecedor. OLA: acordo de nível operacional entre áreas internas, que sustenta o SLA."
  },
  {
    "id": "d15vu6hp",
    "topicId": "contr",
    "front": "O que é glosa?",
    "back": "Desconto no pagamento quando o serviço não atinge o nível acordado ou não é prestado, proporcional ao descumprimento."
  },
  {
    "id": "d14oslqz",
    "topicId": "contr",
    "front": "O que é a matriz de riscos?",
    "back": "Cláusula que distribui riscos e responsabilidades entre contratante e contratado. É obrigatória em contratações de grande vulto (art. 22)."
  },
  {
    "id": "d1k8ltcs",
    "topicId": "bd",
    "front": "O que significa ACID?",
    "back": "Atomicidade (tudo ou nada), consistência (preserva as regras), isolamento (transações não interferem) e durabilidade (o commit persiste)."
  },
  {
    "id": "de6myc1",
    "topicId": "bd",
    "front": "Formas normais: 1FN, 2FN e 3FN.",
    "back": "1FN: atributos atômicos, sem multivalorados. 2FN: sem dependência parcial da chave. 3FN: sem dependência transitiva."
  },
  {
    "id": "d1c1oecj",
    "topicId": "bd",
    "front": "WHERE x HAVING.",
    "back": "WHERE filtra linhas antes do agrupamento. HAVING filtra os grupos depois da agregação (ex.: HAVING COUNT(*) > 10)."
  },
  {
    "id": "d18xbw3f",
    "topicId": "bd",
    "front": "Tipos de JOIN.",
    "back": "INNER: só correspondências. LEFT: todas da esquerda mais as correspondências. RIGHT: o inverso. FULL: todas de ambos os lados. CROSS: produto cartesiano."
  },
  {
    "id": "df9cizq",
    "topicId": "bd",
    "front": "O que é uma CTE?",
    "back": "Consulta nomeada e temporária definida com WITH. Melhora a legibilidade e permite recursão."
  },
  {
    "id": "dy3kd1b",
    "topicId": "bd",
    "front": "Para que serve um índice e qual o custo?",
    "back": "Estrutura (ex.: B-tree) que acelera buscas. Custo: mais espaço e escritas mais lentas."
  },
  {
    "id": "d9fxxa1",
    "topicId": "bd",
    "front": "View x view materializada.",
    "back": "View: consulta armazenada que age como tabela virtual. View materializada: guarda o resultado da consulta e precisa ser atualizada."
  },
  {
    "id": "dunhfas",
    "topicId": "bd",
    "front": "O que são funções de janela?",
    "back": "Calculam sobre linhas relacionadas sem colapsá-las. Ex.: ROW_NUMBER(), RANK(), SUM(x) OVER (PARTITION BY y)."
  },
  {
    "id": "dnwapac",
    "topicId": "bd",
    "front": "Backup completo x incremental x diferencial.",
    "back": "Completo: tudo. Incremental: mudanças desde o último backup de qualquer tipo. Diferencial: mudanças desde o último completo."
  },
  {
    "id": "d19bkot1",
    "topicId": "bd",
    "front": "Banco relacional x NoSQL.",
    "back": "Relacional: esquema rígido, SQL, ACID. NoSQL: esquema flexível e escala horizontal (documento, chave-valor, coluna, grafo), muitas vezes com consistência eventual."
  },
  {
    "id": "d1ic8tbl",
    "topicId": "bd",
    "front": "DELETE x TRUNCATE x DROP.",
    "back": "DELETE remove linhas (aceita WHERE). TRUNCATE esvazia a tabela inteira. DROP remove a própria tabela."
  },
  {
    "id": "d1pq3xqs",
    "topicId": "redes",
    "front": "Camadas do modelo OSI, da 7 à 1.",
    "back": "Aplicação, apresentação, sessão, transporte, rede, enlace e física."
  },
  {
    "id": "d151o4t7",
    "topicId": "redes",
    "front": "TCP x UDP.",
    "back": "TCP: orientado a conexão, confiável, com controle de fluxo e congestionamento. UDP: sem conexão e sem garantias, com baixa latência."
  },
  {
    "id": "dceikmp",
    "topicId": "redes",
    "front": "Portas padrão: HTTP, HTTPS, SSH, DNS, SMTP, POP3, IMAP, LDAP, SNMP.",
    "back": "HTTP 80, HTTPS 443, SSH 22, DNS 53, SMTP 25, POP3 110, IMAP 143, LDAP 389, SNMP 161."
  },
  {
    "id": "d1dsjh70",
    "topicId": "redes",
    "front": "Como calcular hosts utilizáveis por máscara?",
    "back": "2^(32 − máscara) − 2. Ex.: /24 = 254, /26 = 62, /27 = 30."
  },
  {
    "id": "duc3ppg",
    "topicId": "redes",
    "front": "Características do IPv6.",
    "back": "128 bits em 8 grupos hexadecimais, sem broadcast (usa multicast) e com NDP no lugar do ARP."
  },
  {
    "id": "d6nraip",
    "topicId": "redes",
    "front": "Registros DNS: A, AAAA, CNAME, MX, NS, PTR, TXT.",
    "back": "A: IPv4. AAAA: IPv6. CNAME: alias. MX: e-mail. NS: servidores de nome. PTR: resolução reversa. TXT: texto livre."
  },
  {
    "id": "dw5t4k3",
    "topicId": "redes",
    "front": "As quatro etapas do DHCP.",
    "back": "Discover, Offer, Request e Acknowledge (DORA)."
  },
  {
    "id": "d158ufpo",
    "topicId": "redes",
    "front": "Para que serve uma VLAN?",
    "back": "Segmenta logicamente a rede (domínios de broadcast separados) na camada 2. A comunicação entre VLANs exige roteamento. Trunk usa 802.1Q."
  },
  {
    "id": "dspg0ev",
    "topicId": "redes",
    "front": "IPsec: AH e ESP.",
    "back": "AH: integridade e autenticação. ESP: confidencialidade mais integridade. Modos transporte e túnel."
  },
  {
    "id": "d7scc1m",
    "topicId": "redes",
    "front": "O que é QoS?",
    "back": "Prioriza tipos de tráfego (voz, vídeo) controlando latência, jitter e perda de pacotes."
  },
  {
    "id": "dsrpdfl",
    "topicId": "redes",
    "front": "Segurança Wi-Fi: ordem do mais seguro ao menos.",
    "back": "WPA3, WPA2 (AES-CCMP), WPA (TKIP) e WEP (inseguro)."
  },
  {
    "id": "drayset",
    "topicId": "infra",
    "front": "Ordem de aplicação das GPOs no Active Directory.",
    "back": "LSDOU: Local, Site, Domínio, OU. A última aplicada prevalece, salvo opções como Enforced."
  },
  {
    "id": "dcuk47d",
    "topicId": "infra",
    "front": "RAID 0, 1, 5, 6 e 10.",
    "back": "0: stripe, sem tolerância. 1: espelho. 5: paridade distribuída (mín. 3 discos, tolera 1). 6: dupla paridade (mín. 4, tolera 2). 10: espelho com stripe (mín. 4)."
  },
  {
    "id": "d1l9kxgv",
    "topicId": "infra",
    "front": "SAN x NAS.",
    "back": "SAN: rede de armazenamento em blocos (Fibre Channel ou iSCSI). NAS: armazenamento em arquivos pela rede (NFS ou SMB)."
  },
  {
    "id": "dq7ddky",
    "topicId": "infra",
    "front": "Permissões no Linux: o que significa 754?",
    "back": "r=4, w=2, x=1. 754: dono rwx, grupo r-x, outros r--. chmod altera permissões; chown altera o dono."
  },
  {
    "id": "d7a6qkx",
    "topicId": "infra",
    "front": "Hipervisor tipo 1 x tipo 2.",
    "back": "Tipo 1 roda direto no hardware (ex.: ESXi, Hyper-V, KVM). Tipo 2 roda sobre um sistema operacional (ex.: VirtualBox)."
  },
  {
    "id": "d4z2uba",
    "topicId": "infra",
    "front": "Snapshot substitui backup?",
    "back": "Não. O snapshot registra o estado em um instante e depende do disco original. Não protege contra falha do armazenamento."
  },
  {
    "id": "d1dn6326",
    "topicId": "infra",
    "front": "O que é live migration (vMotion)?",
    "back": "Mover uma máquina virtual em execução entre hosts sem parada, base da alta disponibilidade em clusters."
  },
  {
    "id": "d1gniqxe",
    "topicId": "infra",
    "front": "Active Directory: o que é?",
    "back": "Serviço de diretório da Microsoft: domínios, florestas, OUs, usuários, grupos e GPOs. Usa Kerberos e LDAP."
  },
  {
    "id": "d1xdgl2e",
    "topicId": "eng",
    "front": "Scrum: papéis e eventos.",
    "back": "Papéis: Product Owner (valor e backlog), Scrum Master (processo) e Desenvolvedores. Eventos: Sprint, Planning, Daily, Review e Retrospective."
  },
  {
    "id": "dmnbmv5",
    "topicId": "eng",
    "front": "O que caracteriza o Kanban?",
    "back": "Visualiza o fluxo de trabalho, limita o trabalho em andamento (WIP) e opera em fluxo contínuo, sem iterações fixas."
  },
  {
    "id": "d17vrykl",
    "topicId": "eng",
    "front": "O que é REST?",
    "back": "Estilo arquitetural sobre HTTP: recursos identificados por URI, métodos (GET, POST, PUT, PATCH, DELETE), sem estado e com representações como JSON."
  },
  {
    "id": "d10pfu8s",
    "topicId": "eng",
    "front": "Quais métodos HTTP são idempotentes?",
    "back": "GET, PUT e DELETE. POST não é idempotente."
  },
  {
    "id": "dmyaufz",
    "topicId": "eng",
    "front": "Famílias de códigos de status HTTP.",
    "back": "2xx sucesso, 3xx redirecionamento, 4xx erro do cliente (401 não autenticado, 403 proibido, 404 não encontrado), 5xx erro do servidor."
  },
  {
    "id": "dut83a4",
    "topicId": "eng",
    "front": "REST x SOAP.",
    "back": "SOAP: protocolo com XML, envelope, WSDL e WS-Security. REST: leve, normalmente com JSON."
  },
  {
    "id": "d1asmcea",
    "topicId": "eng",
    "front": "O que são microsserviços?",
    "back": "Serviços pequenos e independentes, com implantação própria e comunicação por API ou mensageria. Ganham escala e autonomia e custam complexidade distribuída."
  },
  {
    "id": "db7oztp",
    "topicId": "eng",
    "front": "UML: diagramas estruturais x comportamentais.",
    "back": "Estruturais: classes, objetos, componentes, implantação. Comportamentais: casos de uso, sequência, atividade, estados."
  },
  {
    "id": "dfle9dx",
    "topicId": "eng",
    "front": "Quais são os pilares da orientação a objetos?",
    "back": "Encapsulamento, herança, polimorfismo e abstração."
  },
  {
    "id": "d1ej7lw",
    "topicId": "eng",
    "front": "Tipos de teste de software.",
    "back": "Unitário (função), integração (módulos), sistema (ponta a ponta), aceitação (usuário) e regressão (o que funcionava continua funcionando)."
  },
  {
    "id": "d17kplec",
    "topicId": "eng",
    "front": "O que é BPMN?",
    "back": "Notação para modelar processos de negócio: eventos, atividades, gateways, fluxos e raias."
  },
  {
    "id": "d177fuku",
    "topicId": "devops",
    "front": "IaaS x PaaS x SaaS.",
    "back": "IaaS: infraestrutura (VMs, rede, storage). PaaS: plataforma para executar aplicações. SaaS: software pronto para uso."
  },
  {
    "id": "d57vc4y",
    "topicId": "devops",
    "front": "Modelos de implantação de nuvem.",
    "back": "Pública, privada, híbrida, multicloud (vários provedores) e comunidade."
  },
  {
    "id": "d1vwxl8d",
    "topicId": "devops",
    "front": "Kubernetes: Pod, Deployment, Service, Node, Namespace.",
    "back": "Pod: menor unidade implantável. Deployment: gerencia réplicas de Pods. Service: acesso estável. Node: máquina do cluster. Namespace: isolamento lógico."
  },
  {
    "id": "deqw33t",
    "topicId": "devops",
    "front": "Docker: imagem x contêiner.",
    "back": "Imagem: modelo imutável definido pelo Dockerfile. Contêiner: instância em execução da imagem. Volumes persistem dados."
  },
  {
    "id": "d1615oym",
    "topicId": "devops",
    "front": "CI x CD.",
    "back": "CI: integração frequente com build e testes automáticos. CD: entrega contínua (pronto para implantar) ou implantação contínua (automática em produção)."
  },
  {
    "id": "dq246b1",
    "topicId": "devops",
    "front": "O que é Infraestrutura como Código?",
    "back": "Gerenciar infraestrutura por código versionado e repetível (Terraform, Ansible, CloudFormation). Ansible é sem agente e usa playbooks em YAML."
  },
  {
    "id": "d14b6mpf",
    "topicId": "devops",
    "front": "O que é DevSecOps?",
    "back": "Segurança integrada a todo o ciclo (shift left): SAST, DAST, varredura de dependências e de segredos no pipeline."
  },
  {
    "id": "d1687bwf",
    "topicId": "devops",
    "front": "Responsabilidade compartilhada na nuvem.",
    "back": "Provedor: segurança da nuvem (infraestrutura física). Cliente: segurança na nuvem (dados, identidades e configuração)."
  },
  {
    "id": "d129iwwh",
    "topicId": "serv",
    "front": "RPO x RTO.",
    "back": "RPO: quantidade máxima de dados que se aceita perder, medida em tempo. RTO: tempo máximo para restaurar o serviço."
  },
  {
    "id": "d1gbngy3",
    "topicId": "serv",
    "front": "BIA, BCP e DRP.",
    "back": "BIA: análise de impacto no negócio. BCP (PCN): plano de continuidade do negócio. DRP: plano de recuperação de desastres, com foco em TI."
  },
  {
    "id": "d1pcxduy",
    "topicId": "serv",
    "front": "Sites de contingência: hot, warm e cold.",
    "back": "Hot: pronto, recuperação quase imediata. Warm: parcialmente pronto. Cold: só a estrutura física, recuperação mais lenta."
  },
  {
    "id": "d1wttwhf",
    "topicId": "serv",
    "front": "Regra de backup 3-2-1.",
    "back": "3 cópias, em 2 mídias diferentes, com 1 fora do local."
  },
  {
    "id": "d10lls8l",
    "topicId": "serv",
    "front": "Zabbix, Nagios, Prometheus, Grafana e ELK: papel de cada um.",
    "back": "Zabbix e Nagios: monitoramento de infraestrutura. Prometheus: métricas em séries temporais. Grafana: painéis. ELK: logs (Elasticsearch, Logstash, Kibana)."
  },
  {
    "id": "d1yk2q86",
    "topicId": "serv",
    "front": "Quais são os três pilares da observabilidade?",
    "back": "Métricas, logs e traces."
  },
  {
    "id": "dbrcreb",
    "topicId": "serv",
    "front": "Service Desk x Help Desk.",
    "back": "Help Desk resolve incidentes (reativo). Service Desk é o ponto único de contato e cobre incidentes, requisições e comunicação do serviço."
  },
  {
    "id": "d17lchel",
    "topicId": "serv",
    "front": "O que é CMDB?",
    "back": "Base de dados com os itens de configuração (CIs) e seus relacionamentos."
  },
  {
    "id": "d1pjkvtt",
    "topicId": "serv",
    "front": "Incidente x requisição de serviço.",
    "back": "Incidente: falha ou degradação não planejada. Requisição: pedido de algo previsto e padronizado (acesso, instalação)."
  },
  {
    "id": "d1pjq4ra",
    "topicId": "leg",
    "front": "Qual a regra de habilitação da prova?",
    "back": "Mínimo de 50% de acertos em Conhecimentos Gerais, 50% em Específicos e média ponderada igual ou superior a 60 (peso 1 nos Gerais, peso 3 nos Específicos)."
  },
  {
    "id": "d1l1ai89",
    "topicId": "leg",
    "front": "Como é o critério de desempate (item 9.2)?",
    "back": "Idoso (Estatuto da Pessoa Idosa); mais acertos em Específicos; mais acertos em Português; maior idade; jurado."
  },
  {
    "id": "d1sritab",
    "topicId": "leg",
    "front": "Quando uma regra do dia da prova elimina o candidato?",
    "back": "Atraso (sem tolerância), sair antes de 2 horas, usar celular ou relógio, ou deixar o aparelho emitir som mesmo guardado."
  },
  {
    "id": "d15b7vvm",
    "topicId": "leg",
    "front": "O que a Resolução 04/2026 regula e ela cai no cargo de TI?",
    "back": "Regulamento do Processo Administrativo Previdenciário do RPPS de Manaus. Não consta no conteúdo do Analista TI (código 08)."
  },
  {
    "id": "d1px4bzr",
    "topicId": "leg",
    "front": "Lei Complementar Municipal 27/2025.",
    "back": "Promoveu a reforma previdenciária do Município de Manaus (conforme o Anexo II). Leia o texto."
  },
  {
    "id": "d6zcylf",
    "topicId": "leg",
    "front": "Lei Municipal 3.605/2025.",
    "back": "Dispõe sobre a estrutura organizacional da Manaus Previdência (conforme o Anexo II). É a lei citada no preâmbulo do edital."
  },
  {
    "id": "drweg8w",
    "topicId": "leg",
    "front": "Lei 1.997/2015 e Resolução 03/2026.",
    "back": "Lei 1.997/2015 (alterada pela 3.237/2023): processo administrativo municipal. Resolução 03/2026: Regimento Interno da Manaus Previdência."
  },
  {
    "id": "d171qc15",
    "topicId": "leg",
    "front": "Lei Municipal 1.118/1971.",
    "back": "Estatuto dos Servidores Públicos do Município de Manaus (com alterações)."
  },
  {
    "id": "d1wi12jo",
    "topicId": "port",
    "front": "Quando ocorre crase?",
    "back": "Quando há a preposição a junto com o artigo a(s). Não há crase antes de verbos, pronomes de tratamento (exceto senhora, senhorita e dona) e palavras masculinas."
  },
  {
    "id": "dim8nru",
    "topicId": "port",
    "front": "O verbo haver no sentido de existir.",
    "back": "É impessoal e fica no singular: “Havia problemas”, não “Haviam”. O mesmo vale para fazer indicando tempo: “Faz dois anos”."
  },
  {
    "id": "dudphi2",
    "topicId": "port",
    "front": "Regência: assistir, obedecer, preferir, aspirar e visar.",
    "back": "Assistir (ver) e obedecer pedem “a”. Preferir A a B. Aspirar (almejar) e visar (ter por objetivo) pedem “a”."
  },
  {
    "id": "d4kfe05",
    "topicId": "port",
    "front": "Concordância com “mais de um”.",
    "back": "O verbo vai ao singular: “Mais de um aluno saiu”, salvo reciprocidade ou repetição."
  },
  {
    "id": "dim9ssx",
    "topicId": "port",
    "front": "Voz passiva sintética.",
    "back": "O verbo concorda com o sujeito paciente: “Vendem-se casas”, nunca “Vende-se casas”."
  },
  {
    "id": "daokyvg",
    "topicId": "port",
    "front": "Quando não usar vírgula? E quando usar?",
    "back": "Não separa sujeito de verbo nem verbo de complemento. Usa-se com vocativo, aposto, adjunto adverbial deslocado, orações coordenadas e adjetivas explicativas."
  },
  {
    "id": "dti2q9",
    "topicId": "port",
    "front": "Há x a em indicações de tempo.",
    "back": "Há indica tempo passado (“há dois anos”). A indica tempo futuro ou distância (“daqui a dois anos”)."
  },
  {
    "id": "d1w41pig",
    "topicId": "port",
    "front": "Mal x mau.",
    "back": "Mau é adjetivo, oposto de bom. Mal é advérbio ou substantivo, oposto de bem."
  },
  {
    "id": "d1uewno9",
    "topicId": "rlm",
    "front": "Como calcular aumento e desconto percentuais?",
    "back": "Aumento de x%: multiplicar por (1 + x/100). Desconto de x%: multiplicar por (1 − x/100). Variações sucessivas multiplicam os fatores."
  },
  {
    "id": "d1ebddn8",
    "topicId": "rlm",
    "front": "Negação de “Todo A é B” e de “Algum A é B”.",
    "back": "“Algum A não é B” e “Nenhum A é B”, respectivamente."
  },
  {
    "id": "dhd8g9j",
    "topicId": "rlm",
    "front": "Negação e equivalências de p → q.",
    "back": "Negação: p e não q. Equivalentes: não q → não p, e não p ou q. A condicional só é falsa quando p é V e q é F."
  },
  {
    "id": "dzcx5o6",
    "topicId": "rlm",
    "front": "Leis de De Morgan.",
    "back": "Negação de “p e q”: não p ou não q. Negação de “p ou q”: não p e não q."
  },
  {
    "id": "d1vstx56",
    "topicId": "rlm",
    "front": "Como calcular a média ponderada? Aplique à nota da prova.",
    "back": "Soma dos valores × pesos, dividida pela soma dos pesos. Nota da prova = (Gerais × 1 + Específicos × 3) ÷ 4."
  },
  {
    "id": "dve0eig",
    "topicId": "rlm",
    "front": "Média, mediana e moda.",
    "back": "Média: soma ÷ quantidade. Mediana: valor central dos dados ordenados (em quantidade par, média dos dois centrais). Moda: valor mais frequente."
  },
  {
    "id": "dbq5qlm",
    "topicId": "rlm",
    "front": "Variância e desvio padrão.",
    "back": "Variância: média dos quadrados dos desvios em relação à média (÷N na população, ÷(N−1) na amostra). Desvio padrão: raiz quadrada da variância."
  },
  {
    "id": "d1ytbulv",
    "topicId": "rlm",
    "front": "Regra de três: direta x inversa.",
    "back": "Direta: grandezas crescem juntas (multiplicação cruzada). Inversa: uma cresce enquanto a outra diminui (o produto permanece constante)."
  }
];
