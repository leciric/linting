<script setup lang="ts">
import type { StarredRepo } from '~/types/github'

const props = defineProps<{
  item: StarredRepo
}>()

// Handle both formats (with starred_at wrapper or direct)
const repo = computed(() => props.item.repo || props.item)
const starredAt = computed(() => props.item.starred_at)

const formattedDate = computed(() => {
  if (!starredAt.value) return null
  return new Date(starredAt.value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
})

// Language color mapping
const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Java: 'bg-orange-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
  Vue: 'bg-emerald-500',
  Ruby: 'bg-red-500',
  PHP: 'bg-indigo-400',
  C: 'bg-gray-500',
  'C++': 'bg-pink-500',
  'C#': 'bg-purple-500',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-purple-400',
}
</script>

<template>
  <a
    :href="repo.html_url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-900 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 active:scale-[0.98]"
  >
    <!-- Header -->
    <div class="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
      <div class="flex items-center gap-2 min-w-0">
        <img 
          :src="repo.owner?.avatar_url" 
          :alt="repo.owner?.login"
          class="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
        />
        <span class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate">
          {{ repo.full_name }}
        </span>
      </div>
      <Icon 
        name="lucide:star" 
        class="w-4 h-4 text-yellow-500 flex-shrink-0" 
      />
    </div>

    <!-- Name -->
    <h3 class="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1.5 sm:mb-2">
      {{ repo.name }}
    </h3>

    <!-- Description -->
    <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3 sm:mb-4">
      {{ repo.description || 'No description available' }}
    </p>

    <!-- Footer -->
    <div class="flex items-center justify-between text-xs sm:text-sm">
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- Language -->
        <span v-if="repo.language" class="flex items-center gap-1 sm:gap-1.5">
          <span 
            class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" 
            :class="languageColors[repo.language] || 'bg-gray-400'"
          />
          <span class="text-zinc-600 dark:text-zinc-400">{{ repo.language }}</span>
        </span>
        
        <!-- Stars -->
        <span class="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
          <Icon name="lucide:star" class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          {{ repo.stargazers_count?.toLocaleString() }}
        </span>
        
        <!-- Forks - hide on very small screens -->
        <span v-if="repo.forks_count" class="hidden sm:flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
          <Icon name="lucide:git-fork" class="w-4 h-4" />
          {{ repo.forks_count?.toLocaleString() }}
        </span>
      </div>

      <!-- Starred date - hide on mobile -->
      <span v-if="formattedDate" class="hidden sm:block text-xs text-zinc-400 dark:text-zinc-500">
        {{ formattedDate }}
      </span>
    </div>
  </a>
</template>
