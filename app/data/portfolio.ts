export interface Job {
  title: string
  company: string
  companyUrl?: string
  location: string
  startDate: string
  endDate: string | 'Present'
  technologies: string[]
}

export const jobs: Job[] = [
  {
    title: 'Full-stack Engineer',
    company: 'Stefanini',
    companyUrl: 'https://stefanini.com/',
    location: 'Remote (US - Michigan)',
    startDate: 'Aug 2023',
    endDate: 'Present',
    technologies: ['Vue', 'TypeScript', 'Node.js', '.NET'],
  },
  {
    title: 'Full-stack Developer',
    company: '7waves',
    location: 'Remote',
    startDate: 'Apr 2022',
    endDate: 'Jun 2023',
    technologies: ['React', 'TypeScript', 'Node.js', 'Java', 'Python'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Consorciocred',
    companyUrl: 'https://www.consorciocred.com/',
    location: 'Remote',
    startDate: 'Apr 2021',
    endDate: 'May 2024',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
]

export interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Pet Track',
    description: 'Mobile application for tracking pet health, vaccinations, and appointments. Built with React Native.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'This Website',
    description: 'My personal portfolio website built with Nuxt 3 and Tailwind CSS.',
    tags: ['Nuxt 3', 'Vue', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://linting.dev',
    githubUrl: 'https://github.com/leciric/linting',
  },
  {
    title: "Don't Be Sedentary",
    description: "Platform to help you stay active using a Pomodoro clock system with exercise breaks.",
    tags: ['React', 'TypeScript', 'Next.js'],
    liveUrl: 'https://dontbesedentary.vercel.app/',
  },

  {
    title: 'Consorciocred',
    description: 'Corporate website and lead management platform for consortium services.',
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
  { name: 'Email', url: 'mailto:leandro@linting.dev', handle: 'leandro@linting.dev', icon: 'lucide:mail' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leandrociric/', handle: 'in/leandrociric', icon: 'lucide:linkedin' },
  { name: 'GitHub', url: 'https://github.com/leciric', handle: '@leciric', icon: 'lucide:github' },
  { name: 'Instagram', url: 'https://www.instagram.com/leciric/', handle: '@leciric', icon: 'lucide:instagram' },
]
