<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: true,
})
</script>

<template>
  <div 
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
    :class="['mb-8 sm:mb-12', centered && 'text-center']"
  >
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 sm:mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl" :class="centered && 'mx-auto'">
      {{ subtitle }}
    </p>
    <div 
      class="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
      :class="centered && 'mx-auto'"
    />
  </div>
</template>
