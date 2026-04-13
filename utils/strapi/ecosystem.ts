import { strapiQuery } from './client'

export type TagKeys = string

export interface Tag {
  documentId: string
  name: string
  slug: string
  label: string
}

export interface Project {
  Project: string
  Slug: string
  Description: string
  Website: string
  Email: string
  Twitter: string
  Tags: TagKeys[]
  Logo: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Date: string
  rank: number
  Featured: boolean
}

interface StrapiProject {
  documentId: string
  name: string
  slug: string
  description: string
  website: string
  email: string | null
  twitter: string | null
  rank: number
  featured: boolean
  date: string | null
  logo: { url: string; name: string; mime: string; size: number } | null
  tags: Tag[]
}

interface StrapiProjectsResponse {
  etherlinkEcosystemProjects: StrapiProject[]
}

interface StrapiTagsResponse {
  etherlinkProjectTags: Tag[]
}

function mapStrapiToProject(sp: StrapiProject): Project {
  const strapiUrl = process.env.STRAPI_URL?.replace(/\/$/, '') ?? ''

  const logoUrl = sp.logo?.url
    ? sp.logo.url.startsWith('http')
      ? sp.logo.url
      : `${strapiUrl}${sp.logo.url}`
    : ''

  return {
    Project: sp.name,
    Slug: sp.slug,
    Description: sp.description ?? '',
    Website: sp.website ?? '',
    Email: sp.email ?? '',
    Twitter: sp.twitter ?? '',
    Tags: sp.tags?.map(t => t.slug) ?? [],
    Logo: sp.logo
      ? [
          {
            id: sp.documentId,
            url: logoUrl,
            filename: sp.logo.name,
            size: sp.logo.size,
            type: sp.logo.mime
          }
        ]
      : [],
    Date: sp.date ?? '',
    rank: sp.rank ?? 0,
    Featured: sp.featured ?? false
  }
}

const PROJECTS_QUERY = `
  query GetEcosystemProjects($page: Int!, $pageSize: Int!) {
    etherlinkEcosystemProjects(
      filters: { approvalStatus: { eq: "approved" } }
      sort: "rank:asc"
      pagination: { page: $page, pageSize: $pageSize }
      status: PUBLISHED
    ) {
      documentId
      name
      slug
      description
      website
      email
      twitter
      rank
      featured
      date
      logo { url name mime size }
      tags { documentId name slug label }
    }
  }
`

const TAGS_QUERY = `
  query GetProjectTags {
    etherlinkProjectTags(pagination: { pageSize: 100 }) {
      documentId
      name
      slug
      label
    }
  }
`

export async function fetchEcosystemProjects(): Promise<Project[]> {
  const allProjects: StrapiProject[] = []
  let page = 1
  const pageSize = 100

  while (true) {
    const data = await strapiQuery<StrapiProjectsResponse>(
      PROJECTS_QUERY,
      { page, pageSize },
      100
    )

    allProjects.push(...data.etherlinkEcosystemProjects)

    if (data.etherlinkEcosystemProjects.length < pageSize) break
    page++
  }

  return allProjects.map(mapStrapiToProject)
}

export async function getDynamicTagsMap(): Promise<Record<string, string>> {
  const data = await strapiQuery<StrapiTagsResponse>(TAGS_QUERY)

  const tagsMap: Record<string, string> = {}
  for (const tag of data.etherlinkProjectTags) {
    tagsMap[tag.slug] = tag.label
  }
  return tagsMap
}

export const keyForTag = (
  tagsMap: Record<string, string>,
  value: string
): string => {
  const entry = Object.entries(tagsMap).find(([, label]) => label === value)
  return entry?.[0] ?? value.toLowerCase()
}
