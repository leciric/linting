<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section id="founder" class="section-container">
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 max-w-3xl mx-auto"
    >
      <img
        src="/images/leandro-ciric.png"
        :alt="t('founder.photoAlt')"
        width="160"
        height="160"
        loading="lazy"
        class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover ring-4 ring-primary-500/20 flex-shrink-0"
      >
      <div class="text-center sm:text-left">
        <p class="text-sm font-medium uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
          {{ t('founder.title') }}
        </p>
        <h2 class="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">{{ t('founder.name') }}</h2>
        <p class="text-zinc-500 dark:text-zinc-400 mb-4">{{ t('founder.role') }}</p>
        <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
          {{ t('founder.bio') }}
        </p>
        <UIButton :href="localePath('/about')" variant="outline" size="sm">
          {{ t('founder.cta') }}
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </UIButton>
      </div>
    </div>
  </section>
</template>
