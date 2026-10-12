<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: false,
})
</script>

<template>
  <div 
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
    :class="['mb-10 sm:mb-14 max-w-3xl', centered && 'text-center mx-auto']"
  >
    <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 mb-3 sm:mb-4 text-balance">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl" :class="centered && 'mx-auto'">
      {{ subtitle }}
    </p>
  </div>
</template>
