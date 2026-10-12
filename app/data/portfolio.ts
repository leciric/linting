export interface Job {
  title: string
  company: string
  companyUrl?: string
  // i18n key under experience.*
  location: 'remote' | 'remoteUs'
  // YYYY-MM
  startDate: string
  endDate: string | 'present'
  technologies: string[]
}

export const jobs: Job[] = [
  {
    title: 'Full-stack Engineer',
    company: 'Stefanini',
    companyUrl: 'https://stefanini.com/',
    location: 'remoteUs',
    startDate: '2023-08',
    endDate: 'present',
    technologies: ['Vue', 'TypeScript', 'Node.js', '.NET'],
  },
  {
    title: 'Full-stack Developer',
    company: '7waves',
    location: 'remote',
    startDate: '2022-04',
    endDate: '2023-06',
    technologies: ['React', 'TypeScript', 'Node.js', 'Java', 'Python'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Consorciocred',
    companyUrl: 'https://www.consorciocred.com/',
    location: 'remote',
    startDate: '2021-04',
    endDate: '2024-05',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
]

export interface Project {
  title: string
  description: Record<'pt-BR' | 'en', string>
  image?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Pet Track',
    description: {
      'pt-BR': 'Aplicativo para acompanhar a saúde, as vacinas e as consultas do seu pet. Feito com React Native.',
      en: 'Mobile application for tracking pet health, vaccinations, and appointments. Built with React Native.',
    },
    tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'linting.dev',
    description: {
      'pt-BR': 'Este site: a página da Linting, em português e inglês, feita com Nuxt e Tailwind CSS.',
      en: 'This website: Linting\'s page, in Portuguese and English, built with Nuxt and Tailwind CSS.',
    },
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://linting.dev',
    githubUrl: 'https://github.com/leciric/linting',
  },
  {
    title: "Don't Be Sedentary",
    description: {
      'pt-BR': 'Plataforma que ajuda a manter uma rotina ativa com um relógio Pomodoro e pausas para exercícios.',
      en: 'Platform to help you stay active using a Pomodoro clock system with exercise breaks.',
    },
    tags: ['React', 'TypeScript', 'Next.js'],
    liveUrl: 'https://dontbesedentary.vercel.app/',
  },

  {
    title: 'Consorciocred',
    description: {
      'pt-BR': 'Site institucional e plataforma de gestão de leads para serviços de consórcio.',
      en: 'Corporate website and lead management platform for consortium services.',
    },
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://www.consorciocred.com/',
  },
]

export interface Skill {
  name: string
  icon: string
  category: 'language' | 'framework' | 'tool'
}

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'language' },
  { name: 'JavaScript', icon: 'logos:javascript', category: 'language' },
  { name: 'Python', icon: 'logos:python', category: 'language' },
  { name: 'Java', icon: 'logos:java', category: 'language' },

  // Frameworks
  { name: 'React', icon: 'logos:react', category: 'framework' },
  { name: 'React Native', icon: 'logos:react', category: 'framework' },
  { name: 'Vue.js', icon: 'logos:vue', category: 'framework' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', category: 'framework' },
  { name: 'Next.js', icon: 'logos:nextjs-icon', category: 'framework' },
  { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'framework' },
  { name: '.NET', icon: 'logos:dotnet', category: 'framework' },

  // Tools
  { name: 'Git', icon: 'logos:git-icon', category: 'tool' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'tool' },
  { name: 'Linux', icon: 'logos:linux-tux', category: 'tool' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'tool' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', category: 'tool' },
]

export interface ContactLink {
  name: string
  url: string
  handle: string
  icon: string
}

export const contactLinks: ContactLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leandrociric/', handle: 'in/leandrociric', icon: 'lucide:linkedin' },
  { name: 'GitHub', url: 'https://github.com/leciric', handle: '@leciric', icon: 'lucide:github' },
  { name: 'Instagram', url: 'https://www.instagram.com/leciric/', handle: '@leciric', icon: 'lucide:instagram' },
]
