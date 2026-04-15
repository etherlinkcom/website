const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, '') ?? ''
const STRAPI_TOKEN = process.env.STRAPI_TOKEN ?? ''

const MAX_RETRIES = 3
const RETRY_DELAY_MS = 1000

export async function strapiQuery<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate?: number
): Promise<T> {
  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  }

  if (revalidate !== undefined) {
    fetchOptions.next = { revalidate }
  }

  let lastError: Error | null = null

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(`${STRAPI_URL}/graphql`, fetchOptions)

      if (!res.ok) {
        throw new Error(
          `Strapi API returned ${res.status}: ${res.statusText}`
        )
      }

      const json = await res.json()

      if (json.errors?.length) {
        throw new Error(
          `Strapi GraphQL error: ${json.errors[0].message}`
        )
      }

      return json.data as T
    } catch (error) {
      lastError = error as Error
      if (attempt < MAX_RETRIES) {
        console.warn(
          `Strapi query failed (attempt ${attempt}/${MAX_RETRIES}), retrying...`,
          lastError.message
        )
        await new Promise(resolve =>
          setTimeout(resolve, RETRY_DELAY_MS * attempt)
        )
      }
    }
  }

  throw lastError!
}
