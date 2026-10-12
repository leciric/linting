<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const labels: Record<string, string> = { 'pt-BR': 'PT', en: 'EN' }
</script>

<template>
  <div
    class="flex items-center h-10 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold"
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
      class="px-2.5 py-1.5 rounded-full transition-colors"
      :class="item.code === locale
        ? 'bg-white dark:bg-zinc-950 text-primary-600 dark:text-primary-400 shadow-sm'
        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'"
      :aria-current="item.code === locale ? 'true' : undefined"
    >
      {{ labels[item.code] ?? item.code }}
    </NuxtLink>
  </div>
</template>
