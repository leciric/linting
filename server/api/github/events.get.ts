import { defineCachedEventHandler } from '#imports'

export default defineCachedEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  
  // Add auth token if available (increases rate limit from 60 to 5000 req/hr)
  if (config.githubToken) {
    headers['Authorization'] = `Bearer ${config.githubToken}`
  }
  
  const response = await fetch(
    'https://api.github.com/users/leciric/events/public?per_page=30',
    { headers }
  )

  if (!response.ok) {
    throw createError({ 
      statusCode: response.status, 
      message: 'Failed to fetch events' 
    })
  }

  return response.json()
}, {
  maxAge: 60 * 30, // Cache for 30 minutes
  name: 'github-events',
})
