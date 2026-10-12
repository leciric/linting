<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const labels: Record<string, string> = { 'pt-BR': 'PT', en: 'EN' }
</script>

<template>
  <div
    class="flex items-center h-10 p-1 rounded-xl border border-stone-900/10 dark:border-white/10 font-mono text-xs font-medium"
    role="group"
    :aria-label="t('nav.language')"
  >
    <NuxtLink
      v-for="item in locales"
      :key="item.code"
      :to="switchLocalePath(item.code)"
      :hreflang="item.language"
      :lang="item.language"
      :title="item.name"
      class="px-2 py-1.5 rounded-lg transition-colors"
      :class="item.code === locale
        ? 'bg-stone-900 text-white dark:bg-white dark:text-ink'
        : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'"
      :aria-current="item.code === locale ? 'true' : undefined"
    >
      {{ labels[item.code] ?? item.code }}
    </NuxtLink>
  </div>
</template>
