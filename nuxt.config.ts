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
    '@nuxtjs/i18n',
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

  // i18n: pt-BR at /, English at /en
  i18n: {
    baseUrl: 'https://linting.dev',
    defaultLocale: 'pt-BR',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'pt-BR', language: 'pt-BR', name: 'Português', file: 'pt-BR.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
  },

  // App configuration (title, description and Open Graph tags are set per page and locale)
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Leandro Ciric' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#4f46e5' },
        { property: 'og:site_name', content: 'Linting' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Linting',
            url: 'https://linting.dev',
            logo: 'https://linting.dev/favicon.svg',
            founder: {
              '@type': 'Person',
              name: 'Leandro Ciric',
              alternateName: 'lint',
              url: 'https://linting.dev/about',
              jobTitle: 'Full-stack Developer',
              sameAs: [
                'https://github.com/leciric',
                'https://www.linkedin.com/in/leandrociric/',
                'https://www.instagram.com/leciric/',
              ],
            },
            sameAs: ['https://github.com/leciric'],
            areaServed: 'BR',
            knowsAbout: ['Web development', 'Mobile apps', 'AI agents', 'Model Context Protocol', 'React', 'Vue.js', 'Node.js'],
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
