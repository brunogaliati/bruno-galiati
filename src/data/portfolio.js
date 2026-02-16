export const personalInfo = {
  en: {
    name: "Bruno Galiati",
    title: "Product Builder",
    tagline: "From data to product. From problem to user.",
    description:
      "Economist, 6 years in wealth management and a SaaS in production with ~500 active users/month. I build what solves.",
    email: "brunop.galiati@gmail.com",
    linkedin: "https://linkedin.com/in/brunogaliati",
    github: "https://github.com/brunogaliati",
    location: "São Paulo",
  },
  pt: {
    name: "Bruno Galiati",
    title: "Product Builder",
    tagline: "De dados a produto. Do problema ao usuário.",
    description:
      "Economista, 6 anos em wealth management e um SaaS em produção com ~500 usuários ativos/mês. Construo o que resolve.",
    email: "brunop.galiati@gmail.com",
    linkedin: "https://linkedin.com/in/brunogaliati",
    github: "https://github.com/brunogaliati",
    location: "São Paulo",
  },
};

export const badges = {
  en: [
    { icon: "MapPin", label: "São Paulo" },
    { icon: "Briefcase", label: "Wealth Management" },
    { icon: "Code", label: "Python + React" },
    { icon: "GraduationCap", label: "Economics (Mackenzie)" },
  ],
  pt: [
    { icon: "MapPin", label: "São Paulo" },
    { icon: "Briefcase", label: "Wealth Management" },
    { icon: "Code", label: "Python + React" },
    { icon: "GraduationCap", label: "Economia (Mackenzie)" },
  ],
};

export const navigation = {
  en: [
    { id: "sobre", label: "About" },
    { id: "projetos", label: "Projects" },
    { id: "experiencia", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contato", label: "Contact" },
  ],
  pt: [
    { id: "sobre", label: "Sobre" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "skills", label: "Skills" },
    { id: "contato", label: "Contato" },
  ],
};

export const aboutText = {
  en: {
    label: "TRAJECTORY",
    title: "From analyst to product builder",
    paragraphs: [
      "I started in 2018 as the analyst who automated everything: dashboards, pipelines, internal tools that wealth management teams used to allocate millions. What I didn't know was that I was already doing product — identifying pain points, building solutions, and iterating based on real usage.",
      "In 6 years, I evolved from intern to analyst at the intersection of investments and technology. But what set me apart wasn't just the technical side — it was understanding the user's problem, prioritizing what mattered, and delivering something people actually used.",
      "In 2025, I launched FIDCs.com.br, my first public product. I went from discovery to acquisition: identified a real market pain, validated with users, built the MVP, iterated based on feedback, and reached ~500 active users/month in 5 months. No investment, no team. Just product and execution.",
    ],
    strengths: [
      "Identify real problems and turn them into product",
      "Discovery, prioritization and impact-driven roadmap",
      "Build functional MVPs from scratch (design to deploy)",
      "Make decisions with data: metrics, cohorts, funnels",
      "Communicate technical vision to non-technical stakeholders",
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
  },
  pt: {
    label: "TRAJETÓRIA",
    title: "De analista a product builder",
    paragraphs: [
      "Comecei em 2018 como o analista que automatizava tudo: dashboards, pipelines, ferramentas internas que times de wealth management usavam para alocar milhões. O que eu não sabia era que já estava fazendo produto, identificando dores, construindo soluções e iterando com base no uso real.",
      "Em 6 anos, evoluí de estagiário a analista na interseção entre investimentos e tecnologia. Mas o que me diferenciava não era só a parte técnica, era entender o problema do usuário, priorizar o que importava e entregar algo que as pessoas realmente usavam.",
      'Em 2025, lancei o FIDCs.com.br, meu primeiro produto público. Fui do discovery à aquisição: identifiquei uma dor real do mercado, validei com usuários, construí o MVP, iterei com base em feedback e cheguei a ~500 usuários ativos/mês em 5 meses. Sem investimento, sem time. Só produto e execução.',
    ],
    strengths: [
      "Identificar problemas reais e transformá-los em produto",
      "Discovery, priorização e roadmap orientado a impacto",
      "Construir MVPs funcionais do zero (design ao deploy)",
      "Tomar decisões com dados: métricas, cohorts, funis",
      "Comunicar visão técnica para stakeholders não-técnicos",
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
  },
};

export const mainProject = {
  en: {
    badge: "IN PRODUCTION · ~500 USERS/MONTH",
    name: "FIDCs.com.br",
    tag: "Own product · SaaS · B2B Fintech",
    title: "Data platform for credit funds",
    problem:
      "Credit analysts spend hours every week collecting and reorganizing fragmented CVM data to perform basic FIDC analyses. There was no accessible tool for this.",
    solution:
      "Product that transforms public data into actionable intelligence. Discovery with real analysts, MVP validated in 3 weeks, continuous iteration based on usage and feedback. From 0 to ~500 active users/month in 5 months.",
    metrics: [
      { value: 500, label: "Users/month", prefix: "~" },
      { value: 4000, label: "Funds", prefix: "+" },
      { value: 120, label: "Managers", prefix: "+" },
      { value: 2025, label: "Launch", isYear: true },
    ],
    stack: ["Python", "PostgreSQL", "React", "Recharts", "Tailwind", "Supabase"],
    features: [
      "Discovery with analysts: persona and jobs-to-be-done definition",
      "MVP in 3 weeks: automated collection and per-fund dashboards",
      "Iteration based on feedback and usage metrics",
      "Freemium model with conversion for data export",
      "Organic acquisition via pSEO (per-fund and per-manager pages), no paid media",
      "Roadmap prioritized by user impact",
    ],
    siteUrl: "https://fidcs.com.br",
  },
  pt: {
    badge: "EM PRODUÇÃO · ~500 USUÁRIOS/MÊS",
    name: "FIDCs.com.br",
    tag: "Produto próprio · SaaS · B2B Fintech",
    title: "Plataforma de dados sobre fundos de crédito",
    problem:
      "Analistas de crédito gastam horas por semana coletando e reorganizando dados fragmentados da CVM para fazer análises básicas de FIDCs. Não existia ferramenta acessível para isso.",
    solution:
      "Produto que transforma dados públicos em inteligência acionável. Discovery com analistas reais, MVP validado em 3 semanas, iteração contínua com base em uso e feedback. De 0 a ~500 usuários ativos/mês em 5 meses.",
    metrics: [
      { value: 500, label: "Usuários/mês", prefix: "~" },
      { value: 4000, label: "Fundos", prefix: "+" },
      { value: 120, label: "Gestoras", prefix: "+" },
      { value: 2025, label: "Lançamento", isYear: true },
    ],
    stack: ["Python", "PostgreSQL", "React", "Recharts", "Tailwind", "Supabase"],
    features: [
      "Discovery com analistas e definição de persona e jobs-to-be-done",
      "MVP em 3 semanas: coleta automatizada e dashboards por fundo",
      "Iteração com base em feedback e métricas de uso",
      "Modelo freemium com conversão para exportação de dados",
      "Aquisição orgânica via pSEO (páginas por fundo e gestora), sem mídia paga",
      "Roadmap priorizado por impacto no usuário",
    ],
    siteUrl: "https://fidcs.com.br",
  },
};

export const secondaryProjects = {
  en: [
    {
      title: "CallBoost AI",
      badge: "SAAS · IN DEVELOPMENT",
      description:
        "Real-time call transcription and analysis platform with AI. Automatic insights, specialized agents, and credit-based model.",
      stack: ["React", "TypeScript", "Supabase", "Deepgram", "Gemini", "Stripe"],
    },
    {
      title: "Risk Monitoring System",
      badge: "INTERNAL TOOL",
      description:
        "Streamlit dashboards for default, subordination, and liquidity analysis in FIDC and CLO portfolios.",
      stack: ["Python", "Streamlit", "Plotly"],
    },
    {
      title: "Quantitative Credit Models",
      badge: "PROPRIETARY ANALYSIS",
      description:
        "Cash flow projections and stress scenarios for structured credit assets.",
      stack: ["Python", "Pandas", "NumPy"],
    },
    {
      title: "Automated CVM Pipeline",
      badge: "AUTOMATION",
      description:
        "Collection, standardization, and storage of CVM and ANBIMA regulatory reports.",
      stack: ["Python", "PostgreSQL", "APIs"],
    },
    {
      title: "ML for Due Diligence",
      badge: "MACHINE LEARNING",
      description:
        "Clustering (K-means) for performance segmentation and strategic fund tracking.",
      stack: ["Python", "Scikit-learn", "Dash"],
    },
  ],
  pt: [
    {
      title: "CallBoost AI",
      badge: "SAAS · EM DESENVOLVIMENTO",
      description:
        "Plataforma de transcrição e análise de chamadas em tempo real com IA. Insights automáticos, agentes especializados e modelo de créditos.",
      stack: ["React", "TypeScript", "Supabase", "Deepgram", "Gemini", "Stripe"],
    },
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
  ],
};

export const experience = {
  en: [
    {
      period: "Jan 2026 - Present · 2 months",
      role: "Investment & Data Analyst",
      company: "CVPAR | Quadrante",
      type: "Full-time",
      location: "São Paulo, Brazil",
      description:
        "Continuation of Quadrante Investimentos' wealth management operation (2020), integrated into the Arandu group (2023-2025), now under the CVPAR structure.",
      bullets: [
        "Quantitative models for structured credit (FIDCs, CLOs): cash flow projections, default scenarios, risk assessment",
        "Interactive dashboards in Python/Dash/Streamlit for real-time portfolio analysis",
        "Data pipeline architecture for CVM/ANBIMA with automated processes",
        "Analytical automation via NLP/LLM for real-time extraction and transcription",
        "Due diligence with ML (clustering) for performance analysis",
        "Reports for investment committees and commercial teams",
      ],
      skills: ["Data Intelligence", "Python", "ML"],
    },
    {
      period: "Sep 2025 - Present · 6 months",
      role: "Founder & Product Manager",
      company: "FIDCs.com.br",
      type: "",
      location: "",
      description:
        "Own product. From pain identification to ~500 active users/month, with no investment.",
      bullets: [
        "Discovery with market analysts: persona definition, JTBD, and value proposition",
        "Roadmap prioritized by impact: usage metrics, qualitative feedback, and technical effort",
        "Functional MVP in 3 weeks with automated collection and interactive dashboards",
        "Freemium model: free plan with conversion for export and advanced data",
        "Acquisition via pSEO (per-fund and per-manager pages) from 0 to ~500 active users/month, no paid media",
        "Data-driven product decisions: retention cohorts, activation funnels, feature adoption",
      ],
      skills: ["Product Discovery", "Roadmap", "Metrics"],
    },
    {
      period: "Jan 2023 - Nov 2025 · 2 years 11 months",
      role: "Investment Analyst",
      company: "Arandu Partners",
      type: "",
      location: "São Paulo, Brazil",
      description:
        "Migrated with Quadrante's operation after acquisition. Focus on structured credit, FIDCs, and analytical infrastructure.",
      bullets: [
        "Quantitative models for FIDCs and CLOs (cash flow, default scenarios)",
        "Python/Dash/Streamlit dashboards with real-time insights",
        "Due diligence with ML (K-means) for fund segmentation",
        "Automation via NLP/LLM for extraction and transcription",
        "Reports for committees and commercial teams",
        "Participation in Product and Strategy Committees",
      ],
      skills: ["Python", "Data Analysis", "ML"],
    },
    {
      period: "Aug 2020 - Dec 2022 · 2 years 5 months",
      role: "Investment Analyst",
      company: "Quadrante Investimentos",
      type: "",
      location: "São Paulo, Brazil",
      description: "",
      bullets: [
        "Due diligence of managers and funds for institutional allocation",
        "Structuring and monitoring portfolios with 50+ vehicles",
        "Automation of reporting and data consolidation processes",
        "Support for investment committees and strategic planning",
      ],
      skills: [],
    },
    {
      period: "Aug 2018 - Jul 2020 · 2 years",
      role: "Intern",
      company: "Quadrante Investimentos",
      type: "",
      location: "São Paulo, Brazil",
      description:
        "Career start in investment analysis and wealth management.",
      bullets: [],
      skills: [],
    },
  ],
  pt: [
    {
      period: "jan 2026 - presente · 2 meses",
      role: "Investment & Data Analyst",
      company: "CVPAR | Quadrante",
      type: "Tempo Integral",
      location: "São Paulo, Brasil",
      description:
        "Continuidade da operação de wealth management da Quadrante Investimentos (2020), integrada ao grupo Arandu (2023 a 2025), agora sob estrutura CVPAR.",
      bullets: [
        "Modelos quantitativos para crédito estruturado (FIDCs, CLOs): projeções de fluxo, cenários de inadimplência, avaliação de risco",
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
      role: "Founder & Product Manager",
      company: "FIDCs.com.br",
      type: "",
      location: "",
      description:
        "Produto próprio. Da identificação da dor até ~500 usuários ativos/mês, sem investimento.",
      bullets: [
        "Discovery com analistas de mercado: definição de persona, JTBD e proposta de valor",
        "Roadmap priorizado por impacto: métricas de uso, feedback qualitativo e esforço técnico",
        "MVP funcional em 3 semanas com coleta automatizada e dashboards interativos",
        "Modelo freemium: plano gratuito com conversão para exportação e dados avançados",
        "Aquisição via pSEO (página por fundo e gestora) de 0 a ~500 usuários ativos/mês, sem mídia paga",
        "Decisões de produto baseadas em dados: cohorts de retenção, funis de ativação, feature adoption",
      ],
      skills: ["Product Discovery", "Roadmap", "Métricas"],
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
  ],
};

export const skillCategories = {
  en: [
    {
      title: "Product",
      icon: "Lightbulb",
      color: "secondary",
      items: [
        "Product Discovery & Strategy",
        "Roadmap & Prioritization (RICE, ICE)",
        "Product Metrics (North Star, funnels, cohorts)",
        "MVP, validation and continuous iteration",
        "Jobs-to-be-Done & Personas",
        "Go-to-Market & Business model",
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
      title: "Domain",
      icon: "TrendingUp",
      color: "secondary",
      items: [
        "Wealth Management",
        "Product Management",
        "Structured Credit",
        "FIDCs & CLOs",
        "Risk Analysis",
        "Due Diligence",
        "Quantitative Modeling",
      ],
    },
  ],
  pt: [
    {
      title: "Produto",
      icon: "Lightbulb",
      color: "secondary",
      items: [
        "Product Discovery & Strategy",
        "Roadmap & Priorização (RICE, ICE)",
        "Métricas de Produto (North Star, funis, cohorts)",
        "MVP, validação e iteração contínua",
        "Jobs-to-be-Done & Personas",
        "Go-to-Market & Modelo de negócio",
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
        "Product Management",
        "Crédito Estruturado",
        "FIDCs & CLOs",
        "Análise de Risco",
        "Due Diligence",
        "Modelagem Quantitativa",
      ],
    },
  ],
};

export const contactLinks = {
  en: [
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
      value: "Main Project",
      href: "https://fidcs.com.br",
    },
  ],
  pt: [
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
  ],
};

export const ui = {
  en: {
    availableForOpportunities: "Available for opportunities",
    liveProduction: "Live · Production",
    dataplatform: "Data platform · credit funds",
    domain: "Domain",
    whatIDoWell: "What I do well",
    currentStack: "CURRENT STACK",
    competencies: "COMPETENCIES",
    stackAndSkills: "Stack & Skills",
    professionalExperience: "PROFESSIONAL EXPERIENCE",
    trajectory: "Trajectory",
    currentParallel: "Current — in parallel",
    projects: "PROJECTS",
    whatIBuild: "What I build",
    theProblem: "THE PROBLEM",
    theSolution: "THE SOLUTION",
    techStack: "TECH STACK",
    features: "FEATURES",
    visitSite: "Visit Site",
    contact: "CONTACT",
    letsTalk: "Let's talk",
    contactDescription:
      "I'm looking for opportunities as a Product Manager, Data PM, or in positions where I can connect product vision with technical execution. If you need someone who understands the problem, knows how to prioritize, and can build — I'd love to chat.",
    builtWith: "Built with",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    heroAbout: "About",
    heroProjects: "Projects",
    heroExperience: "Experience",
    heroStack: "Stack",
    heroContact: "Contact",
    statusLine: "1 SaaS in production · ~500 active users/month · +4000 funds",
    bentoWealthMgmt: "Wealth Management",
    bentoStructuredCredit: "Structured Credit",
    bentoFIDCs: "FIDCs & CLOs",
    bentoProductMgmt: "Product Management",
  },
  pt: {
    availableForOpportunities: "Disponível para oportunidades",
    liveProduction: "Live · Produção",
    dataplatform: "Plataforma de dados · fundos de crédito",
    domain: "Domínio",
    whatIDoWell: "O que eu faço bem",
    currentStack: "STACK ATUAL",
    competencies: "COMPETÊNCIAS",
    stackAndSkills: "Stack & Skills",
    professionalExperience: "EXPERIÊNCIA PROFISSIONAL",
    trajectory: "Trajetória",
    currentParallel: "Atual — em paralelo",
    projects: "PROJETOS",
    whatIBuild: "O que eu construo",
    theProblem: "O PROBLEMA",
    theSolution: "A SOLUÇÃO",
    techStack: "STACK TÉCNICO",
    features: "FUNCIONALIDADES",
    visitSite: "Visitar Site",
    contact: "CONTATO",
    letsTalk: "Vamos conversar",
    contactDescription:
      "Busco oportunidades como Product Manager, PM de dados ou em posições onde eu possa conectar visão de produto com execução técnica. Se você precisa de alguém que entende o problema, sabe priorizar e consegue construir, adoraria conversar.",
    builtWith: "Feito com",
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
    heroAbout: "Trajetória",
    heroProjects: "Projetos",
    heroExperience: "Experiência",
    heroStack: "Stack",
    heroContact: "Contato",
    statusLine: "1 SaaS em produção · ~500 usuários ativos/mês · +4000 fundos",
    bentoWealthMgmt: "Wealth Management",
    bentoStructuredCredit: "Crédito Estruturado",
    bentoFIDCs: "FIDCs & CLOs",
    bentoProductMgmt: "Product Management",
  },
};

export const tickerItems = {
  en: [
    "Product Discovery",
    "Python",
    "Roadmap & Prioritization",
    "FIDCs",
    "React",
    "Jobs-to-be-Done",
    "PostgreSQL",
    "Product Metrics",
    "SaaS",
    "Supabase",
    "Go-to-Market",
    "MVP & Iteration",
    "Tailwind",
    "Cohorts & Funnels",
    "Wealth Management",
    "Data Pipelines",
    "Product Management",
  ],
  pt: [
    "Product Discovery",
    "Python",
    "Roadmap & Priorização",
    "FIDCs",
    "React",
    "Jobs-to-be-Done",
    "PostgreSQL",
    "Métricas de Produto",
    "SaaS",
    "Supabase",
    "Go-to-Market",
    "MVP & Iteração",
    "Tailwind",
    "Cohorts & Funis",
    "Wealth Management",
    "Data Pipelines",
    "Product Management",
  ],
};
