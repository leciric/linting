export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  pushed_at: string
  owner: {
    login: string
    avatar_url: string
  }
}

export interface StarredRepo {
  starred_at?: string
  repo?: GitHubRepo
  // Direct properties when not using star+json format
  id?: number
  name?: string
  full_name?: string
  description?: string | null
  html_url?: string
  stargazers_count?: number
  forks_count?: number
  language?: string | null
  topics?: string[]
  owner?: {
    login: string
    avatar_url: string
  }
}

export interface GitHubEvent {
  id: string
  type: string
  actor: {
    login: string
    avatar_url: string
  }
  repo: {
    name: string
    url: string
  }
  payload: {
    action?: string
    ref?: string
    ref_type?: string
    commits?: Array<{
      sha: string
      message: string
    }>
    pull_request?: {
      title: string
      html_url: string
    }
    issue?: {
      title: string
      html_url: string
    }
  }
  created_at: string
}
