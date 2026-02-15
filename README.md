<div align="center">

# linting.dev

A modern, minimal personal portfolio website built with Nuxt 3, Vue 3, and Tailwind CSS.

[![Nuxt](https://img.shields.io/badge/Nuxt-4.3-00DC82?style=flat-square&logo=nuxt.js)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Live Demo](https://linting.dev) | [Report Bug](https://github.com/leciric/linting/issues) | [Request Feature](https://github.com/leciric/linting/issues)

</div>

---

## About

**linting** is my personal portfolio and developer website. The name comes from my nickname "lint" - when I started coding, I named my company "linting".

This site showcases my work, professional experience, and skills as a Full-stack Developer specializing in React, TypeScript, Node.js, and mobile applications.

### Built With

- **[Nuxt 4](https://nuxt.com)** - The Intuitive Vue Framework
- **[Vue 3](https://vuejs.org)** - The Progressive JavaScript Framework
- **[TypeScript](https://typescriptlang.org)** - JavaScript with syntax for types
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[VueUse](https://vueuse.org)** - Collection of Vue Composition Utilities

## Features

- **Responsive Design** - Looks great on all devices, from mobile to desktop
- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **Smooth Animations** - Powered by @vueuse/motion for elegant transitions
- **GitHub Integration** - Live activity feed and starred repositories via GitHub API
- **SEO Optimized** - Meta tags, Open Graph, Twitter cards, and JSON-LD schema
- **Sitemap Generation** - Automatic sitemap for search engines
- **Fast Performance** - Server-side rendering with Nuxt for optimal loading
- **Type Safe** - Full TypeScript support with strict mode enabled

## Project Structure

```
linting/
├── app/
│   ├── components/       # Vue components organized by feature
│   │   ├── App/          # Header, Footer
│   │   ├── Contact/      # Contact section
│   │   ├── Experience/   # Work experience timeline
│   │   ├── GitHub/       # GitHub activity & starred repos
│   │   ├── Hero/         # Hero section
│   │   ├── Projects/     # Projects showcase
│   │   ├── Skills/       # Skills section
│   │   └── UI/           # Reusable UI components
│   ├── data/             # Portfolio data (jobs, projects, skills)
│   ├── layouts/          # Page layouts
│   └── pages/            # Route pages
├── server/
│   └── api/              # Server API routes
│       └── github/       # GitHub API endpoints
├── nuxt.config.ts        # Nuxt configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- npm, pnpm, yarn, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/leciric/linting.git
   cd linting
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (optional, for GitHub API)

   Create a `.env` file in the root directory:

   ```env
   NUXT_GITHUB_TOKEN=your_github_personal_access_token
   ```

   > **Note:** The GitHub token is optional but recommended. Without it, the GitHub API is limited to 60 requests/hour. With a token, you get 5,000 requests/hour.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `localhost:3000` |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site |
| `npm run preview` | Preview production build locally |
| `npm run postinstall` | Prepare Nuxt (runs automatically after install) |

## Configuration

### Theme Colors

The primary color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eef2ff',
    // ... customize your color palette
    600: '#4f46e5',
  },
}
```

### Portfolio Data

Update your information in `app/data/portfolio.ts`:

- **jobs** - Work experience entries
- **projects** - Featured projects
- **skills** - Technical skills (languages, frameworks, tools)
- **contactLinks** - Social and contact links

### SEO Settings

Configure meta tags and site information in `nuxt.config.ts`:

- Page title and descriptions
- Open Graph data
- Twitter card settings
- JSON-LD structured data

## Deployment

### Static Hosting (Recommended)

Generate a static site:

```bash
npm run generate
```

The output will be in the `.output/public` directory. Deploy to any static hosting service:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

### Node.js Server

Build and run with Node.js:

```bash
npm run build
node .output/server/index.mjs
```

For more deployment options, see the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Leandro Ciric** - [@leciric](https://github.com/leciric)

- Website: [linting.dev](https://linting.dev)
- Email: leandro@linting.dev
- LinkedIn: [in/leandrociric](https://www.linkedin.com/in/leandrociric/)

---

<div align="center">

Made with Vue and lots of coffee

</div>
