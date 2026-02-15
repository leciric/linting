<script setup lang="ts">
useSeoMeta({
  title: 'GitHub Activity | Leandro Ciric',
  description: 'My GitHub activity and starred repositories.',
  ogTitle: 'GitHub Activity | Leandro Ciric',
  ogDescription: 'My GitHub activity and starred repositories.',
})

const activeTab = ref<'activity' | 'starred'>('activity')

const tabs = [
  { id: 'activity' as const, label: 'Activity', icon: 'lucide:activity' },
  { id: 'starred' as const, label: 'Starred', icon: 'lucide:star' },
]
</script>

<template>
  <div class="section-container">
    <UISectionTitle
      title="GitHub Activity"
      subtitle="What I've been exploring and building"
    />

    <!-- Tabs -->
    <div class="flex gap-1 mb-6 sm:mb-8 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto sm:overflow-x-visible scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap"
        :class="[
          activeTab === tab.id
            ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
            : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
        ]"
      >
        <Icon :name="tab.icon" class="w-4 h-4" />
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <Transition name="fade" mode="out-in">
      <GitHubActivitySection v-if="activeTab === 'activity'" key="activity" />
      <GitHubStarredSection v-else-if="activeTab === 'starred'" key="starred" />
    </Transition>

    <!-- GitHub Profile Link -->
    <div class="mt-8 sm:mt-12 text-center">
      <UIButton href="https://github.com/leciric" variant="outline" size="md" external class="w-full sm:w-auto justify-center">
        <Icon name="lucide:github" class="w-5 h-5" />
        View Profile on GitHub
      </UIButton>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
