<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2.5 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 active:scale-95"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Icon
      :name="isDark ? 'lucide:sun' : 'lucide:moon'"
      class="w-5 h-5 text-zinc-700 dark:text-zinc-300"
    />
  </button>
</template>
