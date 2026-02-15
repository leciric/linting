<script setup lang="ts">
import type { Skill } from '~/data/portfolio'

defineProps<{
  skill: Skill
  index?: number
}>()
</script>

<template>
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :visible-once="{ opacity: 1, scale: 1, transition: { delay: (index || 0) * 50, duration: 300 } }"
    class="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-primary-500/50 transition-colors"
  >
    <Icon :name="skill.icon" class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
    <span class="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
      {{ skill.name }}
    </span>
  </div>
</template>
