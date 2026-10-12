<script setup lang="ts">
const { t, tm, rt } = useI18n()

const steps = computed(() =>
  (tm('process.steps') as { title: unknown, description: unknown }[]).map(step => ({
    title: rt(step.title as Parameters<typeof rt>[0]),
    description: rt(step.description as Parameters<typeof rt>[0]),
  })),
)
</script>

<template>
  <section class="section-container !pt-4">
    <UISectionTitle :eyebrow="t('process.eyebrow')" :title="t('process.title')" />

    <ol class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      <!-- The line that joins the steps -->
      <div class="hidden lg:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-primary-500/60 via-stone-900/15 dark:via-white/15 to-transparent" aria-hidden="true" />
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 400 } }"
        class="relative"
      >
        <span
          class="relative z-10 flex items-center justify-center w-10 h-10 mb-5 rounded-full font-mono text-sm border bg-paper dark:bg-ink"
          :class="index === 0
            ? 'border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400'
            : 'border-stone-900/15 text-stone-500 dark:border-white/15'"
        >{{ String(index + 1).padStart(2, '0') }}</span>
        <h3 class="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-2">{{ step.title }}</h3>
        <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>
