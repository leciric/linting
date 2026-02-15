// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
  ],

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  // App configuration
  app: {
    head: {
      title: 'Leandro Ciric | Full-stack Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Leandro Ciric - Full-stack Developer specializing in React, TypeScript, Node.js, and mobile applications. Building high-quality software solutions.' },
        { name: 'author', content: 'Leandro Ciric' },
        { name: 'keywords', content: 'Full-stack Developer, React, TypeScript, Node.js, Vue.js, Nuxt, React Native, Mobile Development, Web Development' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#4f46e5' },
        // Open Graph
        { property: 'og:title', content: 'Leandro Ciric | Full-stack Developer' },
        { property: 'og:description', content: 'Full-stack Developer specializing in React, TypeScript, Node.js, and mobile applications.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://linting.dev' },
        { property: 'og:site_name', content: 'linting' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Leandro Ciric | Full-stack Developer' },
        { name: 'twitter:description', content: 'Full-stack Developer specializing in React, TypeScript, Node.js, and mobile applications.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://linting.dev' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Leandro Ciric',
            alternateName: 'lint',
            url: 'https://linting.dev',
            jobTitle: 'Full-stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'linting',
            },
            sameAs: [
              'https://github.com/leciric',
              'https://www.linkedin.com/in/leandrociric/',
              'https://www.instagram.com/leciric/',
            ],
            knowsAbout: ['React', 'TypeScript', 'Node.js', 'Vue.js', 'React Native', 'Full-stack Development'],
          }),
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Runtime config for GitHub API
  runtimeConfig: {
    githubToken: '', // Server-only: set via NUXT_GITHUB_TOKEN env var
    public: {
      githubUsername: 'leciric',
    },
  },

  // TypeScript
  typescript: {
    strict: true,
  },

  // Sitemap
  site: {
    url: 'https://linting.dev',
  },
})
