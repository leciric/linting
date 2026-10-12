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
  <section class="section-container !pt-0">
    <UISectionTitle :title="t('process.title')" />

    <ol class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 400 } }"
        class="relative p-5 rounded-lg sm:rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700"
      >
        <span class="block text-3xl font-bold gradient-text mb-2">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{{ step.title }}</h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>
