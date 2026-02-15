<script setup lang="ts">
const { data: events, status, error } = useGitHubEvents()
</script>

<template>
  <div>
    <!-- Loading -->
    <div v-if="status === 'pending'" class="space-y-2 sm:space-y-3">
      <div 
        v-for="i in 8" 
        :key="i" 
        class="h-16 sm:h-20 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse"
      />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center py-8 sm:py-12">
      <Icon name="lucide:alert-circle" class="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mx-auto mb-3 sm:mb-4" />
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">Failed to load activity</p>
      <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mt-1">{{ error.message }}</p>
    </div>

    <!-- Content -->
    <div v-else-if="events?.length" class="space-y-2 sm:space-y-3">
      <GitHubActivityItem
        v-for="event in events"
        :key="event.id"
        :event="event"
      />
    </div>

    <!-- Empty -->
    <div v-else class="text-center py-8 sm:py-12">
      <Icon name="lucide:activity" class="w-10 h-10 sm:w-12 sm:h-12 text-zinc-400 mx-auto mb-3 sm:mb-4" />
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">No recent activity</p>
    </div>
  </div>
</template>
