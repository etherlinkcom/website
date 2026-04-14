const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, '') ?? ''
const STRAPI_TOKEN = process.env.STRAPI_TOKEN ?? ''

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
}
