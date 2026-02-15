<script setup lang="ts">
import type { Job } from '~/data/portfolio'

const props = defineProps<{
  job: Job
  isLast?: boolean
  index?: number
}>()
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: -30 }"
    :visible-once="{ opacity: 1, x: 0, transition: { delay: (index || 0) * 100, duration: 400 } }"
    class="relative pl-6 sm:pl-8 pb-6 sm:pb-8"
    :class="{ 'border-l-2 border-zinc-200 dark:border-zinc-800': !isLast }"
  >
    <!-- Timeline dot -->
    <div class="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary-600 dark:bg-primary-400 ring-2 sm:ring-4 ring-white dark:ring-zinc-950" />

    <!-- Content -->
    <div class="bg-zinc-50 dark:bg-zinc-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 hover:border-primary-500/50 transition-colors">
      <!-- Header -->
      <div class="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-3">
        <h3 class="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {{ job.title }}
        </h3>
        <span class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          {{ job.startDate }} - {{ job.endDate }}
        </span>
      </div>

      <!-- Company -->
      <a
        :href="job.companyUrl"
        target="_blank"
        rel="noopener noreferrer"
        :data-hasUrl="!!job.companyUrl"
        class="inline-flex items-center gap-1 data-[hasUrl=true]:text-primary-600 dark:data-[hasUrl=true]:text-primary-400 font-medium hover:underline mb-2"
      >
        {{ job.company }}
        <Icon v-if="job.companyUrl" name="lucide:external-link" class="w-3 h-3" />
      </a>

      <!-- Location -->
      <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-3 sm:mb-4 flex items-center gap-1">
        <Icon name="lucide:map-pin" class="w-3 h-3 sm:w-4 sm:h-4" />
        {{ job.location }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-1.5 sm:gap-2">
        <span
          v-for="tech in job.technologies"
          :key="tech"
          class="px-2 py-0.5 sm:py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
