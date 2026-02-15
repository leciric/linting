import type { StarredRepo, GitHubEvent } from '~/types/github'

export const useGitHubStarred = () => {
  return useFetch<StarredRepo[]>('/api/github/starred')
}

export const useGitHubEvents = () => {
  return useFetch<GitHubEvent[]>('/api/github/events')
}
