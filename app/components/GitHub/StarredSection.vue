<script setup lang="ts">
const { data: starred, status, error } = useGitHubStarred()
</script>

<template>
  <div>
    <!-- Loading -->
    <div v-if="status === 'pending'" class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <div 
        v-for="i in 6" 
        :key="i" 
        class="h-36 sm:h-48 bg-zinc-100 dark:bg-zinc-800 rounded-lg sm:rounded-xl animate-pulse"
      />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center py-8 sm:py-12">
      <Icon name="lucide:alert-circle" class="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mx-auto mb-3 sm:mb-4" />
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">Failed to load starred repositories</p>
      <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mt-1">{{ error.message }}</p>
    </div>

    <!-- Content -->
    <div v-else-if="starred?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <GitHubStarredRepoCard
        v-for="item in starred"
        :key="item.repo?.id || item.id"
        :item="item"
      />
    </div>

    <!-- Empty -->
    <div v-else class="text-center py-8 sm:py-12">
      <Icon name="lucide:star" class="w-10 h-10 sm:w-12 sm:h-12 text-zinc-400 mx-auto mb-3 sm:mb-4" />
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">No starred repositories yet</p>
    </div>
  </div>
</template>
