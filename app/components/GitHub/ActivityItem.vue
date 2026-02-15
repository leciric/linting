<script setup lang="ts">
import type { GitHubEvent } from '~/types/github'

defineProps<{
  event: GitHubEvent
}>()

const getEventIcon = (type: string) => {
  switch (type) {
    case 'PushEvent': return 'lucide:git-commit'
    case 'CreateEvent': return 'lucide:git-branch'
    case 'PullRequestEvent': return 'lucide:git-pull-request'
    case 'IssuesEvent': return 'lucide:circle-dot'
    case 'WatchEvent': return 'lucide:star'
    case 'ForkEvent': return 'lucide:git-fork'
    case 'IssueCommentEvent': return 'lucide:message-circle'
    case 'PullRequestReviewEvent': return 'lucide:check-circle'
    case 'PullRequestReviewCommentEvent': return 'lucide:message-square'
    case 'DeleteEvent': return 'lucide:trash-2'
    case 'ReleaseEvent': return 'lucide:tag'
    default: return 'lucide:activity'
  }
}

const getEventDescription = (event: GitHubEvent) => {
  switch (event.type) {
    case 'PushEvent':
      const commitCount = event.payload.commits?.length || 0
      return `Pushed ${commitCount} commit${commitCount !== 1 ? 's' : ''}`
    case 'CreateEvent':
      return `Created ${event.payload.ref_type} ${event.payload.ref || ''}`
    case 'PullRequestEvent':
      return `${event.payload.action} pull request`
    case 'IssuesEvent':
      return `${event.payload.action} issue`
    case 'WatchEvent':
      return 'Starred repository'
    case 'ForkEvent':
      return 'Forked repository'
    case 'IssueCommentEvent':
      return 'Commented on issue'
    case 'PullRequestReviewEvent':
      return 'Reviewed pull request'
    case 'DeleteEvent':
      return `Deleted ${event.payload.ref_type}`
    case 'ReleaseEvent':
      return `${event.payload.action} release`
    default:
      return event.type.replace('Event', '')
  }
}

const formatDate = (date: string) => {
  const now = new Date()
  const eventDate = new Date(date)
  const diffMs = now.getTime() - eventDate.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
</script>

<template>
  <div class="flex gap-2.5 sm:gap-4 p-3 sm:p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
    <!-- Icon -->
    <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
      <Icon :name="getEventIcon(event.type)" class="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-2">
        <p class="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
          {{ getEventDescription(event) }}
        </p>
        <!-- Time - inline on mobile -->
        <span class="flex-shrink-0 text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 sm:hidden">
          {{ formatDate(event.created_at) }}
        </span>
      </div>
      <a
        :href="`https://github.com/${event.repo.name}`"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs sm:text-sm text-primary-600 dark:text-primary-400 hover:underline truncate block"
      >
        {{ event.repo.name }}
      </a>
      
      <!-- Commit message preview - hidden on very small screens -->
      <p 
        v-if="event.type === 'PushEvent' && event.payload.commits?.[0]"
        class="hidden xs:block text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-1 truncate"
      >
        "{{ event.payload.commits[0].message }}"
      </p>
    </div>

    <!-- Time - separate column on larger screens -->
    <span class="hidden sm:block flex-shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
      {{ formatDate(event.created_at) }}
    </span>
  </div>
</template>
