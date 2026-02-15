import { defineCachedEventHandler } from '#imports'

export default defineCachedEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.star+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  
  // Add auth token if available (increases rate limit from 60 to 5000 req/hr)
  if (config.githubToken) {
    headers['Authorization'] = `Bearer ${config.githubToken}`
  }
  
  const response = await fetch(
    'https://api.github.com/users/leciric/starred?per_page=12&sort=created',
    { headers }
  )

  if (!response.ok) {
    throw createError({ 
      statusCode: response.status, 
      message: 'Failed to fetch starred repos' 
    })
  }

  return response.json()
}, {
  maxAge: 60 * 60, // Cache for 1 hour
  name: 'github-starred',
})
