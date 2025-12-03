import axios from 'axios'

export type ProjectStatus = Pick<Project, 'Status'>
export type RawProjectStatus = Omit<RawProject, 'createdTime' | 'fields'> & {
  fields: ProjectStatus
}

export interface RawProject {
  id: string
  createdTime: string
  fields: Project
}

export interface Project {
  approval_status: 'approved' | 'in_review' | 'rejected' | 'submitted'
  Description: string
  Website: string
  Status: 'active' | 'inactive'
  Tags: TagKeys[]
  Project: string
  Date: string
  Slug: string
  Logo: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Email: string
  Twitter: string
  rank: number
  bypass_url_check: boolean
  Featured: boolean
}

/**
 * Given a tags‑map and a human label,
 * find its slug key (or fallback to lowercased label).
 */
export const keyForTag = (
  tagsMap: Record<string, string>,
  value: string
): string => {
  const entry = Object.entries(tagsMap).find(([, label]) => label === value)
  return entry?.[0] ?? value.toLowerCase()
}

export type TagKeys = string

/**
 * - Special-case “nfts” → “NFTs”
 * - Hyphenated → Title Case each word
 * - Single word ≤3 chars → UPPERCASE
 * - Single word >3 chars → Capitalize first letter only
 */
const normalizeLabel = (key: string): string =>
  key === 'nfts'
    ? 'NFTs'
    : key.includes('-')
      ? key
          .split('-')
          .map(
            part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
          )
          .join(' ')
      : key.length <= 3
        ? key.toUpperCase()
        : key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()

const airtableBaseUrl = 'https://api.airtable.com/v0'

export const getDynamicTagsMap = async () => {
  const url = `${airtableBaseUrl}/${process.env.ECOSYSTEM_BASE_ID}/${process.env.ECOSYSTEM_TABLE_NAME}`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`
    }
  }

  const responseAirtable = await fetch(url, options)

  if (!responseAirtable.ok) {
    throw new Error(
      `Airtable API returned ${responseAirtable.status}: ${responseAirtable.statusText}`
    )
  }

  const { records } = await responseAirtable.json()

  let dynamicTagsMap: Record<string, string> = {}

  for (const record of records) {
    for (const label of record.fields.Tags ?? []) {
      const key = label
      dynamicTagsMap[key] = normalizeLabel(key)
    }
  }

  return dynamicTagsMap
}

const batchArray = (array: RawProjectStatus[], batchSize: number) => {
  const batches = []
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize))
  }
  return batches
}

export const checkUrlStatus = async (urls: string[]) => {
  const results: boolean[] = []
  const TIMEOUT_MS = 5000

  for (const url of urls) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS)

      try {
        const response = await fetch(url, {
          headers: {
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (compatible; EtherlinkBot/1.0)'
          },
          signal: controller.signal
        })

        clearTimeout(timeoutId)
        results.push(response.ok)
      } catch (fetchError: any) {
        clearTimeout(timeoutId)
        // Handle abort errors silently (timeouts are expected)
        if (fetchError.name === 'AbortError') {
          results.push(false)
        } else {
          // Re-throw to outer catch for other errors
          throw fetchError
        }
      }
    } catch (error) {
      // Silently handle all fetch errors - they're expected for unreachable URLs
      // or sites that block automated requests
      // The "Failed to set fetch cache" warnings from Next.js are non-fatal
      results.push(false)
    }
  }

  return results
}

export const fetchAirtableData = async (filterAndSort: string = '') => {
  const url = `${airtableBaseUrl}/${process.env.ECOSYSTEM_BASE_ID}/${process.env.ECOSYSTEM_TABLE_NAME}${filterAndSort}`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`
    },
    next: { revalidate: 100 }
  }

  const responseAirtable = await fetch(url, options)

  if (!responseAirtable.ok) {
    throw new Error(
      `Airtable API returned ${responseAirtable.status}: ${responseAirtable.statusText}`
    )
  }

  const airtableData = await responseAirtable.json()
  return airtableData
}

export const updateAirtableRecords = async (
  recordsToUpdate: RawProjectStatus[]
) => {
  if (recordsToUpdate.length === 0) return

  const airtableApiUrl = `${airtableBaseUrl}/${process.env.ECOSYSTEM_BASE_ID}/${process.env.ECOSYSTEM_TABLE_NAME}`
  const batchedRecords = batchArray(recordsToUpdate, 10)

  for (let i = 0; i < batchedRecords.length; i++) {
    const batch = batchedRecords[i]
    const statusUpdateRecords = batch.map(record => ({
      id: record.id,
      fields: {
        Status: record.fields.Status
      }
    }))

    try {
      const response = await axios.patch(
        airtableApiUrl,
        { records: statusUpdateRecords },
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      )
    } catch (error: any) {
      console.error(
        `Error updating batch ${i + 1}:`,
        error?.response ? error?.response?.data : error?.message
      )
    }
  }
}

export const mapToProject = (rawProject: RawProject): Project => {
  const { fields } = rawProject

  return {
    Slug: fields.Slug,
    Date: fields.Date,
    Project: fields.Project,
    Logo: fields.Logo,
    Tags: fields.Tags,
    Email: fields.Email,
    Website: fields.Website,
    Description: fields.Description,
    approval_status: fields.approval_status,
    Status: fields.Status,
    Twitter: fields.Twitter,
    rank: fields.rank,
    bypass_url_check: fields.bypass_url_check,
    Featured: fields.Featured
  }
}
