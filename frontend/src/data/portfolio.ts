export const profile = {
  name: 'Kyaw Zin Thant',
  nameShort: 'Zin',
  title: 'Senior Full Stack Engineer',
  tagline:
    'I co-lead development of a life-insurance distribution platform. My work spans product delivery, AI document extraction, and production releases.',
  location: 'Ho Chi Minh City, Vietnam',
  timezone: 'GMT+7',
  email: 'kyawzinucsm89@gmail.com',
  phone: '+84 077 923 2312',
  resumePath: '/Kyaw_Zin_Thant_2026.pdf',
  profileImage: '/profile.jpg',
  github: 'https://github.com/Kyaw-Zin-Thant',
  linkedin: 'https://www.linkedin.com/in/kyaw-zin-thant-16897615a/',
  whatsapp: 'https://wa.me/66959494506',
  zalo: 'tel:+840559401740',
  yearsExperience: '6+',
  mailtoSubject: 'Senior Full Stack Engineer — Opportunity',
};

export const highlights = [
  { label: 'Years shipping', value: '6+', detail: 'Production systems' },
  { label: 'Workflow orchestration', value: 'Temporal', detail: 'Insurance distribution' },
  { label: 'Domains', value: '4', detail: 'Insurtech · Auto · EdTech · Telco' },
  { label: 'Cloud focus', value: 'AWS', detail: 'Terraform · CI/CD' },
];

export const impactAreas = [
  {
    title: 'Insurtech at scale',
    description:
      'Insurance distribution workflows, AI document extraction, and production releases.',
    icon: '🛡️',
    accent: 'from-cyan-500/20 to-blue-600/10',
  },
  {
    title: 'Automotive enterprise',
    description:
      'Workbench for Manheim dealer ops — microservices, Sale Setup Tool+, inventory & lane management on AWS.',
    icon: '🚗',
    accent: 'from-violet-500/20 to-purple-600/10',
  },
  {
    title: 'Platform engineering',
    description:
      'SAML → Okta, Jenkins → GitHub Actions, Datadog → New Relic, plus Terraform-managed infrastructure.',
    icon: '⚙️',
    accent: 'from-amber-500/20 to-orange-600/10',
  },
  {
    title: 'EdTech & APIs',
    description:
      'PageWerkz, ClassWerkz, STEMWerkz — serverless publishing, Stripe, and multi-tenant class platforms.',
    icon: '📚',
    accent: 'from-emerald-500/20 to-teal-600/10',
  },
];

export const typewriterRoles = [
  'Vue · React · Node.js · Spring Boot',
  'AWS microservices & Terraform',
  'CI/CD · Docker · Kubernetes',
  'AI-assisted full stack delivery',
];

export const howIWork = [
  { title: 'Reproduce before changing', text: 'I use Claude daily in my engineering workflow. When a diagnosis is uncertain, I build a repeatable test, verify that it can detect the failure, and use the evidence to decide what to change.' },
  { title: 'Ship incrementally', text: 'Agile delivery, code review, and clear stakeholder updates.' },
  { title: 'Automate everything', text: 'IaC, pipelines, and repeatable environments — less toil, fewer surprises.' },
  { title: 'Raise the bar', text: 'Mentoring juniors, documenting decisions, and improving reliability.' },
];

export type Project = {
  title: string;
  domain: string;
  role: string;
  description: string;
  impacts: string[];
  stack: string[];
  featured?: boolean;
  url?: string;
  caseStudyPath?: string;
};

export const projects: Project[] = [
  {
    title: 'Life-insurance distribution platform',
    domain: 'Insurtech · CoverGo',
    role: 'Senior Full Stack Engineer',
    description:
      'I helped bootstrap and now co-lead a Vue 3, NestJS, and Temporal monorepo for insurance distribution.',
    impacts: [
      'Built form mapping and validation for AI document extraction',
      'Delivered insurance workflows and core API integrations',
      'Supported releases to UAT and production',
    ],
    stack: ['Vue 3', 'TypeScript', 'NestJS', 'Temporal', 'Nx', 'GitHub Actions'],
    featured: true,
    caseStudyPath: '/projects/document-extraction',
  },
  {
    title: 'Workbench — Manheim',
    domain: 'Automotive · Cox',
    role: 'Senior Full Stack Developer',
    description:
      'Dealer operations platform supporting auction and inventory workflows for Manheim / Cox Automotive.',
    impacts: [
      'Full-stack features: Sale Setup Tool+, lanes, inventory assignment',
      'Microservices on AWS (EC2, Lambda, SQS, RDS) with improved alerting',
      'Led auth migration SAML → Okta and CI/CD Jenkins → GitHub Actions',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'New Relic'],
    featured: true,
    caseStudyPath: '/projects/workbench-observability',
  },
  {
    title: 'AWS Monitoring & Alerting',
    domain: 'Platform · Observability',
    role: 'Engineer',
    description: 'Proactive monitoring for web and cloud resources with incident routing.',
    impacts: [
      'NRQL dashboards & Synthetics for application health',
      'PagerDuty integration for on-call incident response',
    ],
    stack: ['New Relic', 'PagerDuty', 'NRQL', 'AWS'],
  },
  {
    title: 'PageWerkz Writer',
    domain: 'EdTech',
    role: 'Senior Backend Developer',
    description: 'Serverless K12 content publishing with secure multi-channel delivery.',
    impacts: [
      'Lambda pipelines compressing & publishing books to S3',
      'REST APIs for content upload, class assignment, and portals',
    ],
    stack: ['Node.js', 'Lambda', 'MongoDB', 'Stripe'],
    url: 'https://nodma.pagewerkz.com/',
  },
  {
    title: 'STEMWerkz',
    domain: 'EdTech',
    role: 'Backend Lead',
    description: 'Interactive STEM learning with certificates and payments.',
    impacts: ['Certificate APIs', 'Stripe integration', 'Mentored junior developers'],
    stack: ['Node.js', 'MongoDB', 'AWS', 'Terraform'],
    url: 'https://www.stemwerkz.org',
  },
  {
    title: 'ClassWerkz',
    domain: 'EdTech',
    role: 'Backend Developer',
    description: 'Class management for attendance, scheduling, and stakeholder comms.',
    impacts: ['Auto-enrollment & notification APIs', 'Azure Pipelines CI/CD'],
    stack: ['Node.js', 'MongoDB', 'Express', 'Angular'],
    url: 'https://www.classwerkz.com/',
  },
  {
    title: 'PTE Alchemist Academy',
    domain: 'EdTech · Assessment',
    role: 'Senior Backend Developer',
    description: 'PTE exam platform with speech scoring and mock results.',
    impacts: ['AWS Transcribe for speaking tests', 'Stripe + RBAC + PDF result generation'],
    stack: ['Node.js', 'MongoDB', 'AWS Transcribe', 'Stripe'],
    url: 'https://pte.alchemistacademy.com.au/',
  },
  {
    title: 'Fiber Line Management',
    domain: 'Telco · GIS',
    role: 'Full Stack Developer',
    description: 'Nationwide fiber monitoring with map-based operations UI.',
    impacts: ['PostGIS data layer', 'Client demos & requirement workshops'],
    stack: ['Java', 'Spring', 'Leaflet', 'PostGIS'],
  },
];

export const skillProficiency = [
  {
    group: 'Production daily',
    level: 'expert' as const,
    skills: [
      { name: 'Node.js / Express', years: '6+' },
      { name: 'Java / Spring Boot', years: '5+' },
      { name: 'React / Vue', years: '5+' },
      { name: 'AWS (EC2, Lambda, S3, RDS)', years: '4+' },
      { name: 'PostgreSQL / MongoDB', years: '6+' },
    ],
  },
  {
    group: 'Platform & delivery',
    level: 'advanced' as const,
    skills: [
      { name: 'Terraform', years: '3+' },
      { name: 'Docker & Kubernetes', years: '3+' },
      { name: 'GitHub Actions / CI/CD', years: '4+' },
      { name: 'New Relic / Datadog', years: '3+' },
    ],
  },
  {
    group: 'Also shipped with',
    level: 'proficient' as const,
    skills: [
      { name: 'Angular / .NET', years: '2+' },
      { name: 'Azure Pipelines', years: '3+' },
      { name: 'Stripe / Firebase', years: '4+' },
      { name: 'AI dev tools (Cursor, Claude)', years: '1+' },
    ],
  },
];

export const skillCategories = [
  {
    title: 'Languages & frameworks',
    icon: '⚡',
    items: ['TypeScript', 'Vue 3', 'NestJS', 'Node.js', 'React', 'Java', 'Spring Boot', 'Angular', '.NET'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    items: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure Pipelines', 'Jenkins'],
  },
  {
    title: 'Data & observability',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'New Relic', 'Datadog'],
  },
  {
    title: 'Practices',
    icon: '🛠️',
    items: ['Temporal workflows', 'Nx monorepos', 'AI document extraction', 'Code review', 'IaC', 'On-call'],
  },
];

export const experience = [
  {
    period: 'Dec 2025 – Present',
    role: 'Senior Full Stack Engineer',
    company: 'CoverGo Insurtech',
    website: 'https://covergo.com/',
    logo: '/covergo.png',
    summary:
      'Co-lead development of a life-insurance distribution platform, including product workflows, AI document extraction, and releases to UAT and production.',
    technologies: ['Vue 3', 'TypeScript', 'NestJS', 'Temporal', 'Nx', 'GitHub Actions'],
  },
  {
    period: 'Apr 2023 – May 2025',
    role: 'Senior Full Stack Developer',
    company: 'FPT Software',
    website: 'https://www.fpt-software.com/',
    logo: '/fpt.png',
    summary:
      'Workbench platform for Cox Automotive / Manheim dealer operations. Microservices, observability, and auth migration (SAML → Okta).',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'Terraform', 'New Relic'],
  },
  {
    period: 'Jun 2022 – Dec 2022',
    role: 'Senior Full Stack Developer',
    company: 'CANAL+ Myanmar',
    website: 'https://www.canalplus-myanmar.com/',
    logo: '/canalplus.png',
    summary: 'In-house web apps, automated messaging, and AWS-backed deployment at scale.',
    technologies: ['.NET', 'Angular', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    period: 'Dec 2021 – May 2022',
    role: 'Senior Backend Developer',
    company: 'Alchemist Academy',
    website: 'https://alchemistacademy.com.au/',
    logo: '/alchemist.png',
    summary: 'PTE exam practice platform with AWS Transcribe and client-facing delivery.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'AWS Transcribe'],
  },
  {
    period: 'Oct 2018 – Nov 2021',
    role: 'Senior Backend Developer',
    company: 'Amdon Consulting Pte Ltd',
    website: 'https://www.amdon.com/',
    logo: '/amdon.png',
    summary: 'PageWerkz, ClassWerkz, and STEMWerkz APIs — serverless publishing, payments, and Azure Pipelines.',
    technologies: ['Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Lambda'],
  },
  {
    period: 'Oct 2017 – Sep 2018',
    role: 'Full Stack Developer',
    company: 'ICT Star Group Myanmar',
    website: 'https://www.isgm2.com/',
    logo: '/isgm.png',
    summary: 'Copper line management and vehicle tracking — Java/Spring backend and Android client.',
    technologies: ['Java', 'Spring', 'MySQL', 'Android'],
  },
];

export const certificates = [
  {
    title: 'AWS Cloud Developer Nanodegree',
    image: '/Cloud_Developer_Udacity.png',
    link: 'https://www.udacity.com/certificate/e/949a42ca-bb7c-11ee-b10d-8fa99f98dd25',
    year: '2024',
  },
  {
    title: 'AWS Data Engineering Nanodegree',
    image: '/DE_Udacity.png',
    link: 'https://www.udacity.com/certificate/e/484638b8-df43-11ed-8b4d-f79403446128',
    year: '2023',
  },
];

export const education = {
  degree: 'Bachelor of Computer Science (Software Engineering)',
  school: 'University of Computer Studies, Mandalay',
  period: '2012 – 2017',
  country: 'Myanmar',
};

export const marqueeTech = [
  'Vue', 'React', 'Node.js', 'Java', 'Spring Boot', 'TypeScript', 'AWS', 'Terraform',
  'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'GitHub Actions', 'New Relic',
];
