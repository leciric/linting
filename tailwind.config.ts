import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/composables/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        // Ember, Hatch's accent (#e5532f)
        primary: {
          50: '#fff4ef',
          100: '#ffe5da',
          200: '#ffc8b3',
          300: '#ffa384',
          400: '#f6774f',
          500: '#e5532f',
          600: '#c43e1d',
          700: '#a03219',
          800: '#80291a',
          900: '#682418',
          950: '#3a0f08',
        },
        // Hatch's warm near-black and cream
        ink: '#16130f',
        paper: '#fbf9f4',
        cream: '#f4efe6',
      },
    },
  },
  plugins: [],
} satisfies Config
