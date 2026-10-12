// PLACEHOLDER values are marked below: replace them before deploying.
export const company = {
  name: 'Linting',
  // PLACEHOLDER: confirm the address clients should write to
  email: 'leandro@linting.dev',
  // PLACEHOLDER: WhatsApp number in international format, digits only (55 + DDD + number)
  whatsapp: '5500000000000',
  // PLACEHOLDER: company registration number
  cnpj: '00.000.000/0000-00',
}

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`

export const mailtoUrl = (subject: string) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}`

export interface Product {
  id: 'agentbox' | 'hatch'
  name: string
  logo: string
  websiteUrl: string
  githubUrl: string
  tags: string[]
}

export const products: Product[] = [
  {
    id: 'agentbox',
    name: 'AgentBox',
    logo: '/images/products/agentbox-logo.svg',
    websiteUrl: 'https://agentbox.linting.dev',
    githubUrl: 'https://github.com/leciric/agentbox',
    tags: ['Claude Code', 'Codex', 'OpenCode', 'Linux', 'MCP'],
  },
  {
    id: 'hatch',
    name: 'Hatch',
    logo: '/images/products/hatch-logo.svg',
    // PLACEHOLDER: confirm Hatch's public URL
    websiteUrl: 'https://hatch.linting.dev',
    githubUrl: 'https://github.com/leciric/hatch',
    tags: ['MCP', 'Cloudflare Workers', 'React'],
  },
]

export const hatchMcpCommand = 'claude mcp add --transport http hatch https://hatch.linting.dev/mcp'
