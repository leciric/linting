<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="founder" class="section-container scroll-mt-20">
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="card p-6 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center"
    >
      <img
        src="/images/leandro-ciric.png"
        :alt="t('founder.photoAlt')"
        width="176"
        height="176"
        loading="lazy"
        class="w-28 h-28 sm:w-44 sm:h-44 rounded-2xl object-cover grayscale-[30%] ring-1 ring-zinc-900/10 dark:ring-white/10"
      >
      <div>
        <p class="eyebrow mb-3">{{ t('founder.eyebrow') }}</p>
        <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {{ t('founder.name') }}
          <span class="accent-serif text-zinc-500 dark:text-zinc-400 text-xl sm:text-2xl">· {{ t('founder.role') }}</span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          {{ t('founder.bio') }}
        </p>
        <p class="mt-4 font-mono text-xs text-zinc-500">
          <span class="text-primary-600 dark:text-primary-400">//</span> {{ t('founder.origin') }}
        </p>
      </div>
    </div>
  </section>
</template>
