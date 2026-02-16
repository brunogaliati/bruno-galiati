export const personalInfo = {
  name: "Bruno Galiati",
  title: "Product Builder",
  tagline: "Construo produtos com dados.",
  description:
    "Background em economia, 6 anos em wealth management, um SaaS em produção.",
  email: "brunop.galiati@gmail.com",
  linkedin: "https://linkedin.com/in/brunogaliati",
  github: "https://github.com/brunogaliati",
  location: "São Paulo",
};

export const badges = [
  { icon: "MapPin", label: "São Paulo" },
  { icon: "Briefcase", label: "Wealth Management" },
  { icon: "Code", label: "Python + React" },
  { icon: "GraduationCap", label: "Economia (Mackenzie)" },
];

export const navigation = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "skills", label: "Skills" },
  { id: "contato", label: "Contato" },
];

export const aboutText = {
  label: "TRAJETÓRIA",
  title: "Do suporte analítico aos produtos próprios",
  paragraphs: [
    "Comecei minha carreira em 2018 construindo dashboards e pipelines de dados para times de wealth management. Era o analista que automatizava processos manuais, organizava bases fragmentadas da CVM e criava ferramentas que outros usavam para alocar milhões.",
    "Ao longo de 6 anos, evolui de estagiário a analista especializado na interseção entre investimentos e ciência de dados. Desenvolvi modelos quantitativos para crédito estruturado, apliquei machine learning para due diligence de fundos, e construí sistemas de análise em tempo real que rodam até hoje.",
    'Em 2025, lancei o FIDCs.com.br — uma plataforma que consolida e disponibiliza dados públicos sobre fundos de crédito no Brasil. Com +100 usuários cadastrados e quase 500 usuários ativos por mês, representa uma virada: de construir ferramentas internas para construir produtos que qualquer pessoa pode usar.',
  ],
  strengths: [
    "Transformar dados brutos em informação acionável",
    "Desenvolver modelos quantitativos para análise de risco",
    "Automatizar fluxos analíticos complexos",
    "Construir interfaces que não-técnicos entendem",
    "Explicar finanças usando código",
  ],
  stack: [
    "Python",
    "PostgreSQL",
    "React",
    "Tailwind",
    "Dash",
    "Streamlit",
    "Supabase",
    "Pandas",
    "Scikit-learn",
    "NLP",
  ],
};

export const mainProject = {
  badge: "EM USO · +100 USUÁRIOS",
  name: "FIDCs.com.br",
  tag: "Side Project · SaaS · Dados Públicos",
  title: "A primeira plataforma gratuita focada em FIDCs",
  problem:
    "Dados sobre FIDCs existem, mas estão fragmentados em arquivos XML da CVM. Analistas gastam horas toda semana reorganizando as mesmas bases para fazer análises básicas.",
  solution:
    "Plataforma que automatiza coleta, tratamento e disponibilização de dados de +300 fundos. Dashboards interativos mostram performance, inadimplência, subordinação e evolução de carteira — tudo atualizado semanalmente.",
  metrics: [
    { value: 117, label: "Cadastrados", prefix: "+" },
    { value: 491, label: "Usuários/mês" },
    { value: 300, label: "Fundos", prefix: "+" },
    { value: 2018, label: "Desde", isYear: true },
  ],
  stack: ["Python", "PostgreSQL", "React", "Recharts", "Tailwind", "Supabase"],
  features: [
    "Pipeline automatizado de coleta e padronização (CVM)",
    "Banco relacional com histórico consolidado desde 2018",
    "Dashboards interativos por fundo e visão de indústria",
    "Sistema de busca e filtros avançados",
    "Planos gratuitos e pagos (exportação de dados)",
    "Hub de notícias e conteúdo educacional",
  ],
  siteUrl: "https://fidcs.com.br",
};

export const secondaryProjects = [
  {
    title: "Sistema de Monitoramento de Risco",
    badge: "FERRAMENTA INTERNA",
    description:
      "Dashboards em Streamlit para análise de inadimplência, subordinação e liquidez em carteiras de FIDCs e CLOs.",
    stack: ["Python", "Streamlit", "Plotly"],
  },
  {
    title: "Modelos Quantitativos para Crédito",
    badge: "ANÁLISE PROPRIETÁRIA",
    description:
      "Projeções de fluxo de caixa e cenários de stress para ativos de crédito estruturado.",
    stack: ["Python", "Pandas", "NumPy"],
  },
  {
    title: "Pipeline CVM Automatizado",
    badge: "AUTOMAÇÃO",
    description:
      "Coleta, padronização e armazenamento de informes regulatórios da CVM e ANBIMA.",
    stack: ["Python", "PostgreSQL", "APIs"],
  },
  {
    title: "ML para Due Diligence",
    badge: "MACHINE LEARNING",
    description:
      "Clustering (K-means) para segmentação de performance e tracking estratégico de fundos.",
    stack: ["Python", "Scikit-learn", "Dash"],
  },
];

export const experience = [
  {
    period: "jan 2026 - presente · 2 meses",
    role: "Investment & Data Analyst",
    company: "CVPAR | Quadrante",
    type: "Tempo Integral",
    location: "São Paulo, Brasil",
    description:
      "Continuidade da operação de wealth management da Quadrante Investimentos (2020), posteriormente integrada ao grupo Arandu (2023-2025), agora sob estrutura CVPAR.",
    bullets: [
      "Desenvolvimento de modelos quantitativos para crédito estruturado (FIDCs, CLOs) - projeções de fluxo, cenários de inadimplência, avaliação de risco",
      "Dashboards interativos em Python/Dash/Streamlit para análise de portfólio em tempo real",
      "Arquitetura de pipelines de dados CVM/ANBIMA com processos automatizados",
      "Automação analítica via NLP/LLM para extração e transcrição em tempo real",
      "Due diligence com ML (clustering) para análise de performance",
      "Relatórios para comitês de investimento e times comerciais",
    ],
    skills: ["Inteligência de dados", "Python", "ML"],
  },
  {
    period: "set 2025 - presente · 6 meses",
    role: "Founder",
    company: "FIDCs (Projeto Próprio)",
    type: "",
    location: "",
    description: "A primeira plataforma gratuita focada em análise de FIDCs.",
    bullets: [
      "Criação desde conceito até lançamento",
      "Consolidação de dados cadastrais, carteira, cotas e rentabilidade",
      "Dashboards de performance, subordinação e inadimplência",
      "Automação de coleta CVM",
      "Arquitetura Supabase + React + Tailwind",
      "+100 usuários cadastrados, ~490 usuários ativos/mês",
    ],
    skills: [],
  },
  {
    period: "jan 2023 - nov 2025 · 2 anos 11 meses",
    role: "Analista de Investimento",
    company: "Arandu Partners",
    type: "",
    location: "São Paulo, Brasil",
    description:
      "Migração com a operação da Quadrante após aquisição. Foco em crédito estruturado, FIDCs e infraestrutura analítica.",
    bullets: [
      "Modelos quantitativos para FIDCs e CLOs (fluxo de caixa, cenários de inadimplência)",
      "Dashboards Python/Dash/Streamlit com insights em tempo real",
      "Due diligence com ML (K-means) para segmentação de fundos",
      "Automação via NLP/LLM para extração e transcrição",
      "Relatórios para comitês e times comerciais",
      "Participação em Comitês de Produto e Estratégia",
    ],
    skills: ["Python", "Análise de dados", "ML"],
  },
  {
    period: "ago 2020 - dez 2022 · 2 anos 5 meses",
    role: "Analista de Investimento",
    company: "Quadrante Investimentos",
    type: "",
    location: "São Paulo, Brasil",
    description: "",
    bullets: [
      "Due diligence de gestores e fundos para alocação institucional",
      "Estruturação e acompanhamento de carteiras com +50 veículos",
      "Automação de processos de reporte e consolidação de dados",
      "Apoio a comitês de investimento e planejamento estratégico",
    ],
    skills: [],
  },
  {
    period: "ago 2018 - jul 2020 · 2 anos",
    role: "Estagiário",
    company: "Quadrante Investimentos",
    type: "",
    location: "São Paulo, Brasil",
    description:
      "Início da carreira em análise de investimentos e wealth management.",
    bullets: [],
    skills: [],
  },
];

export const skillCategories = [
  {
    title: "Produto",
    icon: "Lightbulb",
    color: "secondary",
    items: [
      "Product Thinking",
      "Data Storytelling",
      "SaaS",
      "Automação de Processos",
      "Documentação Técnica",
      "MVP / Prototipação",
    ],
  },
  {
    title: "Tech Stack",
    icon: "Code",
    color: "accent",
    items: [
      ["Python", "PostgreSQL"],
      ["React", "Tailwind"],
      ["Supabase", "Pandas"],
      ["Streamlit", "Dash"],
      ["Git/GitHub", "APIs"],
    ],
  },
  {
    title: "Domínio",
    icon: "TrendingUp",
    color: "secondary",
    items: [
      "Wealth Management",
      "Crédito Estruturado",
      "FIDCs & CLOs",
      "Análise de Risco",
      "Due Diligence",
      "Modelagem Quantitativa",
    ],
  },
];

export const contactLinks = [
  {
    icon: "Mail",
    label: "Email",
    value: "brunop.galiati@gmail.com",
    href: "mailto:brunop.galiati@gmail.com",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/brunogaliati",
    href: "https://linkedin.com/in/brunogaliati",
  },
  {
    icon: "Github",
    label: "GitHub",
    value: "github.com/brunogaliati",
    href: "https://github.com/brunogaliati",
  },
  {
    icon: "Globe",
    label: "FIDCs.com.br",
    value: "Projeto Principal",
    href: "https://fidcs.com.br",
  },
];
