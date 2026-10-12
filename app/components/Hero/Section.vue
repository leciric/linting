<script setup lang="ts">
const { t } = useI18n()

const stack = [
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'React Native', icon: 'logos:react' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: '.NET', icon: 'logos:dotnet' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Docker', icon: 'logos:docker-icon' },
]

const stats = ['years', 'areas', 'products'] as const
</script>

<template>
  <section class="relative max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-4">
    <div class="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
      <div>
        <!-- Eyebrow -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-zinc-900/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-400"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 shadow-[0_0_10px_rgb(139_92_246)]" />
          {{ t('hero.eyebrow') }}
        </p>

        <!-- Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.035em] text-zinc-900 dark:text-zinc-50 mb-6 text-balance"
        >
          {{ t('hero.title') }}
          <span class="accent-serif text-primary-600 dark:text-primary-400">{{ t('hero.titleAccent') }}</span>
        </h1>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-8 leading-relaxed"
        >
          {{ t('hero.description') }}
          <span class="text-zinc-900 dark:text-zinc-100 font-medium">{{ t('hero.note') }}</span>
        </p>

        <!-- CTA Buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="flex flex-col xs:flex-row gap-3"
        >
          <UIButton href="#contact" variant="primary" size="lg" class="justify-center">
            {{ t('hero.ctaPrimary') }}
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
          </UIButton>
          <UIButton href="#services" variant="outline" size="lg" class="justify-center">
            {{ t('hero.ctaSecondary') }}
          </UIButton>
        </div>
      </div>

      <!-- Editor -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 450, duration: 600 } }"
        class="relative min-w-0"
      >
        <div class="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-400/25 via-indigo-400/15 to-transparent dark:from-primary-600/20 dark:via-indigo-600/10 blur-3xl" aria-hidden="true" />
        <HeroLintEditor />
      </div>
    </div>

    <!-- Stats -->
    <div class="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 border-y border-zinc-900/10 dark:border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900/10 dark:divide-white/10">
      <div v-for="stat in stats" :key="stat" class="py-5 sm:py-6 sm:px-6 first:sm:pl-0 flex items-baseline gap-3">
        <span class="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{{ t(`stats.${stat}Value`) }}</span>
        <span class="text-sm text-zinc-600 dark:text-zinc-400">{{ t(`stats.${stat}`) }}</span>
      </div>
    </div>

    <!-- Stack -->
    <div class="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <p class="eyebrow !text-zinc-500 flex-shrink-0">{{ t('stats.stack') }}</p>
      <ul class="flex flex-wrap gap-x-5 gap-y-3">
        <li
          v-for="tech in stack"
          :key="tech.name"
          class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
        >
          <Icon :name="tech.icon" class="w-4 h-4" />
          {{ tech.name }}
        </li>
      </ul>
    </div>
  </section>
</template>
