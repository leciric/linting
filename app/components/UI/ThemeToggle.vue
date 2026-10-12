<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <button
    @click="toggleTheme"
    class="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-stone-900/10 dark:border-white/10 hover:bg-stone-900/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 active:scale-95"
    :aria-label="isDark ? t('nav.lightMode') : t('nav.darkMode')"
  >
    <Icon
      :name="isDark ? 'lucide:sun' : 'lucide:moon'"
      class="w-[18px] h-[18px] text-stone-700 dark:text-stone-300"
    />
  </button>
</template>
