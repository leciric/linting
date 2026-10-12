<script setup lang="ts">
const { t, tm, rt } = useI18n()

const services = [
  { id: 'ai', icon: 'lucide:bot', stack: ['MCP', 'Claude', 'TypeScript', 'Node.js'], highlight: true },
  { id: 'apps', icon: 'lucide:smartphone', stack: ['React', 'React Native', 'Vue', 'Node.js', '.NET', 'PostgreSQL'] },
  { id: 'mvp', icon: 'lucide:rocket', stack: ['TypeScript', 'Docker', 'Vercel', 'Cloudflare'] },
  { id: 'sites', icon: 'lucide:layout-template', stack: ['Nuxt', 'Next.js', 'Astro', 'Tailwind CSS'] },
] as const

const points = (id: string) => (tm(`services.${id}.points`) as unknown[]).map(p => rt(p as Parameters<typeof rt>[0]))
</script>

<template>
  <section id="services" class="section-container scroll-mt-20">
    <UISectionTitle
      :eyebrow="t('services.eyebrow')"
      :title="t('services.title')"
      :subtitle="t('services.subtitle')"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      <article
        v-for="(service, index) in services"
        :key="service.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 80, duration: 400 } }"
        class="group relative card card-hover flex flex-col p-6 sm:p-8 overflow-hidden"
        :class="'highlight' in service && 'md:row-span-1 ring-1 ring-primary-500/30 dark:ring-primary-400/25'"
      >
        <div
          v-if="'highlight' in service"
          class="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div class="flex items-start justify-between mb-8">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center bg-primary-600 text-white dark:bg-primary-500/15 dark:text-primary-400 dark:ring-1 dark:ring-primary-500/30">
            <Icon :name="service.icon" class="w-5 h-5" />
          </div>
          <span class="font-mono text-xs text-stone-400 dark:text-stone-600">{{ String(index + 1).padStart(2, '0') }}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 mb-3">
          {{ t(`services.${service.id}.title`) }}
        </h3>
        <p class="text-sm sm:text-base text-stone-600 dark:text-stone-400 mb-5 leading-relaxed">
          {{ t(`services.${service.id}.description`) }}
        </p>
        <ul class="space-y-2 mb-6 text-sm text-stone-700 dark:text-stone-300">
          <li v-for="point in points(service.id)" :key="point" class="flex gap-2.5">
            <Icon name="lucide:check" class="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
            {{ point }}
          </li>
        </ul>
        <div class="mt-auto pt-5 border-t border-dashed border-stone-900/10 dark:border-white/10 flex flex-wrap gap-1.5" :aria-label="t('services.stack')">
          <span v-for="tech in service.stack" :key="tech" class="chip">{{ tech }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
