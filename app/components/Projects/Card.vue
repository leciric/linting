<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{
  project: Project
  index?: number
}>()
</script>

<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { delay: (index || 0) * 100, duration: 400 } }"
    class="group relative bg-zinc-50 dark:bg-zinc-900 rounded-lg sm:rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-primary-500/50 transition-all duration-300"
    :class="{ 'sm:col-span-2': project.featured }"
  >
    <!-- Featured badge -->
    <div
      v-if="project.featured"
      class="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium bg-primary-600 text-white rounded-full"
    >
      Featured
    </div>

    <!-- Content -->
    <div class="p-4 sm:p-6">
      <!-- Title -->
      <h3 class="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors pr-16 sm:pr-20">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2 py-0.5 sm:py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex flex-wrap gap-3 sm:gap-4">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
        >
          <Icon name="lucide:external-link" class="w-4 h-4" />
          Live Demo
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <Icon name="lucide:github" class="w-4 h-4" />
          Source
        </a>
      </div>
    </div>
  </article>
</template>
