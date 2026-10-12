<script setup lang="ts">
const { t, tm, rt } = useI18n()

const services = [
  { id: 'apps', icon: 'lucide:smartphone', stack: ['React', 'React Native', 'Vue', 'Node.js', '.NET', 'PostgreSQL'] },
  { id: 'ai', icon: 'lucide:bot', stack: ['MCP', 'Claude', 'TypeScript', 'Node.js'] },
  { id: 'sites', icon: 'lucide:layout-template', stack: ['Nuxt', 'Next.js', 'Astro', 'Tailwind CSS'] },
  { id: 'mvp', icon: 'lucide:rocket', stack: ['TypeScript', 'Docker', 'Vercel', 'Cloudflare'] },
] as const

const points = (id: string) => (tm(`services.${id}.points`) as unknown[]).map(p => rt(p as Parameters<typeof rt>[0]))
</script>

<template>
  <section id="services" class="section-container scroll-mt-16">
    <UISectionTitle
      :title="t('services.title')"
      :subtitle="t('services.subtitle')"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <article
        v-for="(service, index) in services"
        :key="service.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 400 } }"
        class="flex flex-col bg-zinc-50 dark:bg-zinc-900 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-zinc-200 dark:border-zinc-800 hover:border-primary-500/50 transition-colors"
      >
        <div class="w-11 h-11 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
          <Icon :name="service.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 class="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          {{ t(`services.${service.id}.title`) }}
        </h3>
        <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          {{ t(`services.${service.id}.description`) }}
        </p>
        <ul class="space-y-2 mb-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li v-for="point in points(service.id)" :key="point" class="flex gap-2">
            <Icon name="lucide:check" class="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
            {{ point }}
          </li>
        </ul>
        <div class="mt-auto flex flex-wrap gap-1.5 sm:gap-2" :aria-label="t('services.stack')">
          <span
            v-for="tech in service.stack"
            :key="tech"
            class="px-2 py-0.5 sm:py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
