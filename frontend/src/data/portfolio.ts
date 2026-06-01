export const profile = {
  name: 'Kyaw Zin Thant',
  title: 'Senior Full Stack Engineer',
  tagline:
    'Cloud-native full stack engineer building enterprise platforms, microservices, and AI-driven automation on AWS.',
  location: 'Can Tho, Vietnam',
  email: 'kyawzinucsm89@gmail.com',
  phone: '+84 077 923 2312',
  resumePath: '/Kyaw_Zin_Thant_2026.pdf',
  github: 'https://github.com/Kyaw-Zin-Thant',
  linkedin: 'https://www.linkedin.com/in/kyaw-zin-thant-16897615a/',
  whatsapp: 'https://wa.me/66959494506',
  zalo: 'tel:+840559401740',
  yearsExperience: '6+',
};

export const highlights = [
  { label: 'Years experience', value: '6+' },
  { label: 'Enterprise teams', value: '140+' },
  { label: 'Focus', value: 'Full stack & cloud' },
  { label: 'Delivery', value: 'CI/CD & IaC' },
];

export const typewriterRoles = [
  'Senior Full Stack Engineer',
  'Cloud & microservices on AWS',
  'Vue · React · Node.js · Spring Boot',
  'Terraform · Docker · Kubernetes',
  'AI-assisted development workflows',
];

export const values = [
  'Ship clean, testable code with clear ownership',
  'Design scalable cloud-native systems on AWS',
  'Automate delivery with CI/CD and Infrastructure as Code',
  'Collaborate across product, platform, and compliance teams',
  'Stay current — AI tooling, architecture, and best practices',
];

export const experience = [
  {
    period: 'Dec 2025 – Present',
    role: 'Senior Full Stack Engineer',
    company: 'CoverGo Insurtech',
    website: 'https://covergo.com/',
    logo: '/covergo.png',
    summary:
      'Enterprise insurance platform (140+ team). Core modules for Apeiron Access Portal, AI workflows, and secure user management.',
    technologies: ['Vue', 'Node.js', 'AWS', 'Terraform', 'GitHub Actions', 'Docker', 'Claude Code'],
  },
  {
    period: 'Apr 2023 – May 2025',
    role: 'Senior Full Stack Developer',
    company: 'FPT Software',
    website: 'https://www.fpt-software.com/',
    logo: '/fpt.png',
    summary:
      'Workbench platform for Cox Automotive / Manheim dealer operations. Microservices, observability, and auth migration (SAML → Okta).',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'Terraform', 'New Relic', 'GitHub Actions'],
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
    technologies: ['Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Azure Pipelines', 'Lambda'],
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

export const skillCategories = [
  {
    title: 'Languages & frameworks',
    icon: '⚡',
    items: ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Vue', 'Angular', '.NET'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      'AWS (EC2, Lambda, S3, RDS, EKS)',
      'Terraform',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Azure Pipelines',
      'Jenkins',
      'CI/CD',
    ],
  },
  {
    title: 'Data & observability',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'New Relic', 'Datadog'],
  },
  {
    title: 'Practices & tooling',
    icon: '🛠️',
    items: ['REST APIs', 'Microservices', 'Git', 'Firebase', 'Postman', 'Jest', 'Android (Java)'],
  },
  {
    title: 'AI & automation',
    icon: '🤖',
    items: ['AI workflow design', 'Claude Code', 'Cursor', 'PDF processing pipelines', 'AWS Transcribe'],
  },
];

export const projects = [
  {
    title: 'Apeiron Access Portal — CoverGo',
    description:
      'Enterprise insurance platform: Party & Resources modules, AI-driven meeting transcription with auto-population, PDF processing for life policy cases, and secure login/recovery integrated with core APIs.',
    stack: ['Vue', 'Node.js', 'AWS', 'Terraform', 'Docker', 'GitHub Actions'],
    featured: true,
  },
  {
    title: 'Workbench — Manheim (Cox Automotive)',
    description:
      'Dealer operations platform: Sale Setup Tool+, lane management, inventory assignment, and microservices on AWS with Okta auth and New Relic observability.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Terraform'],
    featured: true,
  },
  {
    title: 'AWS Infrastructure Monitoring & Alerting',
    description:
      'New Relic NRQL and Synthetics for website and AWS resource health; PagerDuty integration for incident response.',
    stack: ['New Relic', 'PagerDuty', 'NRQL', 'AWS'],
  },
  {
    title: 'PageWerkz Writer',
    description:
      'Serverless K12 content platform with Lambda publishing to S3, Stripe payments, and multi-channel delivery.',
    stack: ['Node.js', 'Lambda', 'MongoDB', 'Express', 'Stripe'],
    url: 'https://nodma.pagewerkz.com/',
  },
  {
    title: 'STEMWerkz',
    description:
      'Interactive STEM learning portal with inquiry-based lessons, certificates, and Stripe payments.',
    stack: ['Node.js', 'MongoDB', 'AWS', 'Terraform'],
    url: 'https://www.stemwerkz.org',
  },
  {
    title: 'ClassWerkz',
    description:
      'Class management: attendance, scheduling, notifications, and stakeholder feedback in one platform.',
    stack: ['Node.js', 'MongoDB', 'Express', 'Angular'],
    url: 'https://www.classwerkz.com/',
  },
  {
    title: 'PTE Alchemist Academy',
    description:
      'PTE exam backend with Stripe, RBAC, AWS Transcribe for speaking tests, and mock result PDF generation.',
    stack: ['Node.js', 'MongoDB', 'AWS Transcribe', 'Stripe', 'Angular'],
    url: 'https://pte.alchemistacademy.com.au/',
  },
  {
    title: 'Intelligent Fiber Line Management',
    description:
      'Nationwide fiber-optic monitoring with GIS-friendly UI and PostGIS-backed operations.',
    stack: ['Java', 'Spring', 'Leaflet', 'PostGIS', 'jQuery'],
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

export const techStackIcons = [
  { name: 'Vue', devicon: 'devicon-vuejs-plain' },
  { name: 'React', devicon: 'devicon-react-original' },
  { name: 'Node.js', devicon: 'devicon-nodejs-plain' },
  { name: 'Java', devicon: 'devicon-java-plain' },
  { name: 'Spring', devicon: 'devicon-spring-plain' },
  { name: 'TypeScript', devicon: 'devicon-typescript-plain' },
  { name: 'AWS', devicon: 'devicon-amazonwebservices-plain-wordmark' },
  { name: 'Docker', devicon: 'devicon-docker-plain' },
  { name: 'Terraform', devicon: 'devicon-terraform-plain' },
  { name: 'PostgreSQL', devicon: 'devicon-postgresql-plain' },
  { name: 'MongoDB', devicon: 'devicon-mongodb-plain' },
];
